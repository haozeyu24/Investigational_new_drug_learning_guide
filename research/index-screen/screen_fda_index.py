#!/usr/bin/env python3
"""Resumable FDA index discovery. Machine hints are never verified lesson assignments."""
import argparse, concurrent.futures, csv, gzip, hashlib, json, os, re, shutil, sqlite3, subprocess, sys, time, urllib.parse
from collections import Counter
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
import fitz
BASE=Path(__file__).resolve().parent
SCRATCH=Path('/tmp/ind-full-screen')
DB=SCRATCH/'screen.sqlite'
FILES=SCRATCH/'files'; TEXT=SCRATCH/'text'; HITS=SCRATCH/'hits'
for p in [SCRATCH,FILES,TEXT,HITS]:p.mkdir(parents=True,exist_ok=True)
TERMS={
 'original_ind_review':r'\b(?:original|initial)\s+IND\s+(?:review|submission|application)\b',
 'ind_review':r'\bIND\s+(?:review|reviews|assessment)\b',
 'initial_ind':r'\b(?:initial|original)\s+IND\b',
 'clinical_hold':r'\b(?:partial\s+|full\s+)?clinical\s+hold\b',
 'may_proceed':r'\b(?:study\s+may\s+proceed|safe\s+to\s+proceed|studies\s+may\s+proceed)\b',
 'investigator_brochure':r'\binvestigator[’\x27s]*\s+brochure\b',
 'pre_ind':r'\bpre[\s‐‑–-]?IND\b',
 'ind_expanded':r'\binvestigational\s+new\s+drug\b',
 'first_human':r'\b(?:first[\s‐‑–-]in[\s‐‑–-]human|first\s+human|initial\s+clinical\s+(?:study|trial|dose))\b',
 'initial_dose':r'\b(?:starting\s+dose|maximum\s+recommended\s+starting\s+dose|MRSD|MABEL)\b',
 'ind_word':r'\bIND\b',
}
REGEX={k:re.compile(v,re.I) for k,v in TERMS.items()}
LESSONS={
 'nonclinical-pharmacology':r'primary\s+pharmacology|proof.of.concept|mechanism\s+of\s+action|disease\s+model|target\s+engagement|antitumou?r',
 'nonclinical-pkpd':r'toxicokinetic|pharmacokinetic|PK\s*[/&]\s*PD|exposure|\bAUC\b|\bCmax\b|metabolite',
 'nonclinical-safety':r'target\s+organ|toxicity|toxicolog|genotoxic|safety\s+pharmacology|hERG|reversib|adverse\s+effect',
 'nonclinical-package':r'GLP|good\s+laboratory|study\s+duration|nonclinical\s+(?:package|program|studies)|species\s+selection|final\s+(?:study\s+)?report',
 'cmc-material':r'formulation|drug\s+substance|drug\s+product|salt\s+form|polymorph|clinical\s+(?:trial\s+)?material|comparabil',
 'cmc-controls':r'manufactur|impurit|specification|release\s+test|analytical\s+method|process\s+control|potency\s+assay',
 'cmc-stability':r'stability|shelf.life|container.closure|leachab|extractab|storage|in.use|particulate',
 'clinical':r'clinical\s+protocol|study\s+design|eligibility|patient\s+population|inclusion\s+criteria|informed\s+consent|stopping\s+rule|monitoring',
 'clinical-dose':r'starting\s+dose|dose\s+escalation|NOAEL|HNSTD|STD10|MABEL|MRSD|safety\s+factor|maximum\s+dose'
}
LR={k:re.compile(v,re.I) for k,v in LESSONS.items()}
def now():return datetime.now(timezone.utc).isoformat(timespec='seconds')
def canonical(url):
 url=url.strip().replace('&amp;','&')
 p=urllib.parse.urlsplit(url)
 if p.netloc.lower()=='www.accessdata.fda.gov':p=p._replace(scheme='https',fragment='')
 else:p=p._replace(fragment='')
 return urllib.parse.urlunsplit(p)
def uid(url):return hashlib.sha256(url.encode()).hexdigest()[:24]
def conn():
 c=sqlite3.connect(DB,timeout=40);c.row_factory=sqlite3.Row;c.execute('PRAGMA journal_mode=WAL');return c
def initialize(index,full_table=None):
 c=conn();c.executescript('''CREATE TABLE IF NOT EXISTS documents(id TEXT PRIMARY KEY,url TEXT UNIQUE,source_kind TEXT,depth INTEGER DEFAULT 0,status TEXT DEFAULT 'pending',attempts INTEGER DEFAULT 0,http_status INTEGER,content_kind TEXT,screen TEXT,pages INTEGER,readable_pages INTEGER,ocr_pages INTEGER,hit_pages INTEGER,term_counts TEXT,lesson_hints TEXT,stage_hint TEXT,error TEXT,source_file TEXT,text_file TEXT,hits_file TEXT,sha256 TEXT,bytes INTEGER,started TEXT,finished TEXT);
CREATE TABLE IF NOT EXISTS origins(document_id TEXT,index_row_id TEXT,application TEXT,submission_type TEXT,submission_no TEXT,original_url TEXT,PRIMARY KEY(document_id,index_row_id));
CREATE TABLE IF NOT EXISTS edges(parent_id TEXT,child_id TEXT,label TEXT,PRIMARY KEY(parent_id,child_id));
CREATE TABLE IF NOT EXISTS events(time TEXT,document_id TEXT,event TEXT,detail TEXT);
''')
 r=list(csv.DictReader(open(index,encoding='utf-8')))
 for row in r:
  url=canonical(row['ApplicationDocsURL']);id=uid(url)
  c.execute('INSERT OR IGNORE INTO documents(id,url,source_kind,depth) VALUES(?,?,?,0)',(id,url,'Stage A Review-type index'))
  c.execute('INSERT OR IGNORE INTO origins VALUES(?,?,?,?,?,?)',(id,row['ApplicationDocsID'],row['ApplNo'],row['SubmissionType'],row['SubmissionNo'],row['ApplicationDocsURL']))
 c.commit()
 meta={'initialized':now(),'indexRows':len(r),'uniqueCanonicalIndexURLs':c.execute('SELECT count(*) FROM documents WHERE depth=0').fetchone()[0],'normalization':'Only FDA http URLs are upgraded to https; fragments removed; path/query case preserved. No FDA path guessed.','screenTerms':TERMS,'lessonHintTerms':LESSONS,'classification':'Automated discovery hints only; passage/manual review still required.'}
 if full_table:
  allrows=list(csv.DictReader(open(full_table,encoding='latin1'),delimiter='\t'))
  counts=Counter(x['ApplicationDocsTypeID'] for x in allrows);meta['allApplicationDocRows']=len(allrows);meta['allDocTypeCounts']=dict(counts)
  # All non-Review rows remain an explicit Stage B denominator; do not silently discard labels.
  with (BASE/'stage-b-other-types.csv').open('w',newline='') as f:
   fields=['ApplicationDocsID','ApplicationDocsTypeID','ApplNo','SubmissionType','SubmissionNo','ApplicationDocsTitle','ApplicationDocsURL','ApplicationDocsDate','UnparsedExtraFields','screening_status'];w=csv.DictWriter(f,fieldnames=fields);w.writeheader()
   for row in allrows:
    if row['ApplicationDocsTypeID']!='3':w.writerow({**{k:v for k,v in row.items() if k is not None},'UnparsedExtraFields':json.dumps(row.get(None,[])),'screening_status':'Unscreened Stage B index row'})
  meta['stageBOtherTypeRows']=len(allrows)-counts['3']
 (BASE/'scope.json').write_text(json.dumps(meta,indent=2)+'\n');c.close();return meta
class Links(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.href=None;self.label=[]
 def handle_starttag(self,tag,attrs):
  if tag=='a':self.href=dict(attrs).get('href');self.label=[]
 def handle_data(self,s):
  if self.href:self.label.append(s)
 def handle_endtag(self,tag):
  if tag=='a' and self.href:self.links.append((self.href,' '.join(self.label).strip()));self.href=None;self.label=[]
def allowed(url):
 p=urllib.parse.urlsplit(url)
 return p.scheme in ['http','https'] and (p.netloc.lower() in ['www.accessdata.fda.gov','www.fda.gov','download.open.fda.gov'] or (p.netloc.lower()=='web.archive.org' and 'fda.gov' in p.path))
def package_links(s):
 parser=Links();parser.feed(s)
 literal=re.search(r'\bvar\s+pdfFilenames\s*=\s*\{(.*?)\};',s,re.S)
 if literal:
  for filename in re.findall(r'[\"\']([^\"\']+\.pdf(?:\?[^\"\']*)?)[\"\']',literal.group(1),re.I):
   parser.links.append((filename,'FDA pdfFilenames metadata'))
 # Some FDA TOCs explicitly construct hrefs from a base string and enabled file flags.
 # Read only that constrained expression from its source; never execute JavaScript.
 base=re.search(r'\bvar\s+pdfBaseName\s*=\s*[\"\']([^\"\']+)[\"\']',s)
 flags=re.search(r'\bvar\s+pdfFiles\s*=\s*\{(.*?)\};',s,re.S)
 if base and flags:
  enabled={k.lower() for k,v in re.findall(r'(\w+)\s*:\s*(\d+)',flags.group(1)) if v=='1'}
  for key,body in re.findall(r'if\s*\(\s*pdfFiles\.(\w+)\s*==\s*1\s*\)\s*\{(.*?)\}',s,re.S):
   if key.lower() not in enabled:continue
   for suffix in re.findall(r'pdfBaseName\s*\+\s*[\"\']([^\"\']*?\.pdf)',body,re.I):
    parser.links.append((base.group(1)+suffix,'FDA enabled '+key+' href expression'))
 return parser.links
def local_reuse(url,dest):
 # Exact known sources from the completed library; never infer equivalence by filename alone.
 try:
  data=json.load(open(BASE.parent/'fda-review-records.json'))['records']
  for r in data:
   if any(canonical(s['url'])==url for s in r['sources']):
    p=Path('/tmp/ind-agent')/(r.get('crlFile',r['id']+'.pdf'))
    if p.exists():shutil.copyfile(p,dest);return True
 except Exception:pass
 return False
def screen_pdf(path,id):
 d=fitz.open(path); texts=[]; hits=[];counts=Counter();lessons=set();readable=0;ocr=[]
 for i,page in enumerate(d):
  t=page.get_text('text');s=re.sub(r'\s+',' ',t).strip();texts.append(t)
  # Low-text pages may be blank, figures, or scans; require OCR/visual triage, not automatic absence.
  if len(re.sub(r'\W','',s))<40:ocr.append(i+1)
  else:readable+=1
  matches=[]
  for key,rx in REGEX.items():
   m=list(rx.finditer(s));counts[key]+=len(m)
   for x in m:matches.append((x.start(),x.end(),key))
  if matches:
   page_lessons=[k for k,rx in LR.items() if rx.search(s)];lessons.update(page_lessons)
   windows=[]
   for start,end,key in sorted(matches):
    a=max(0,start-180);b=min(len(s),end+450)
    if windows and a<=windows[-1]['end']:
     windows[-1]['end']=max(b,windows[-1]['end']);windows[-1]['terms']=sorted(set(windows[-1]['terms']+[key]));windows[-1]['text']=s[windows[-1]['start']:windows[-1]['end']]
    else:windows.append({'start':a,'end':b,'terms':[key],'text':s[a:b]})
   hits.append({'pdfPage':i+1,'terms':sorted({x[2] for x in matches}),'unverifiedLessonHints':page_lessons,'snippets':windows})
 textfile=TEXT/(id+'.json.gz')
 with gzip.open(textfile,'wt',encoding='utf-8') as f:json.dump({'pages':texts,'ocrNeededPages':ocr},f,ensure_ascii=False)
 hitfile=HITS/(id+'.json')
 hitfile.write_text(json.dumps({'id':id,'verified':False,'pageCount':len(d),'ocrNeededPages':ocr,'hits':hits},ensure_ascii=False))
 counts={k:v for k,v in counts.items() if v}
 if hits:screen='keyword-positive'
 elif readable==0:screen='unreadable-or-image-only'
 elif ocr:screen='no-keyword-in-extracted-text-partial-OCR-needed'
 else:screen='keyword-negative-text-only'
 if counts.get('original_ind_review') or counts.get('initial_ind'):stage='Possible initial IND; manual context required'
 elif counts.get('clinical_hold') or counts.get('may_proceed') or counts.get('pre_ind'):stage='Possible IND decision/history; manual context required'
 elif counts.get('ind_word') or counts.get('ind_expanded') or counts.get('ind_review'):stage='IND mention; could be later, boilerplate, or OCR error'
 elif hits:stage='Dose/first-human terminology; not confirmed IND-related'
 else:stage='No matched text; not proof of no IND content'
 return dict(screen=screen,pages=len(d),readable_pages=readable,ocr_pages=len(ocr),hit_pages=len(hits),term_counts=json.dumps(counts),lesson_hints=json.dumps(sorted(lessons)),stage_hint=stage,text_file=str(textfile),hits_file=str(hitfile))
def process(row):
 id,url=row['id'],row['url'];dest=FILES/(id+'.source');result={'id':id,'url':url,'status':'error','finished':now()};links=[]
 try:
  if shutil.disk_usage(SCRATCH).free<8*1024**3:raise RuntimeError('Less than 8 GiB free disk; explicit resource stop')
  reused=bool(dest.exists() and row.get('http_status')==200 and row.get('sha256') and hashlib.sha256(dest.read_bytes()).hexdigest()==row['sha256'])
  if not reused:reused=local_reuse(url,dest)
  if not reused:
   transport_url=urllib.parse.quote(url,safe=':/?&=%#')
   command=['/usr/bin/curl','--location','--silent','--show-error','--connect-timeout','12','--max-time','60','--retry','1','--retry-delay','1','--max-filesize',str(350*1024**2),'--write-out','%{http_code}\n%{content_type}\n%{url_effective}','--output',str(dest),transport_url]
   p=subprocess.run(command,capture_output=True,text=True,timeout=135)
   fields=p.stdout.splitlines();http=int(fields[0]) if fields and fields[0].isdigit() else 0;result['http_status']=http
   if p.stderr.strip():result['transport_warnings']=p.stderr.strip()[:1000]
   if p.returncode or http>=400 or http==0:
    if dest.exists():result.update(source_file=str(dest),bytes=dest.stat().st_size)
    raise RuntimeError(f'curl={p.returncode}; HTTP={http}; {p.stderr.strip()[:400]}')
  else:result['http_status']=200
  head=dest.read_bytes()[:1024];result['bytes']=dest.stat().st_size;result['sha256']=hashlib.sha256(dest.read_bytes()).hexdigest();result['source_file']=str(dest)
  if b'%PDF-' in head:
   result['content_kind']='pdf';result.update(screen_pdf(dest,id));result['status']='screened'
  elif b'<html' in head.lower() or b'<!doctype' in head.lower() or b'<head' in head.lower():
   result['content_kind']='html-package';s=dest.read_text(errors='replace')
   # One package layer may point to another TOC. Keep all FDA PDF links in the package, not just PharmR.
   for href,label in package_links(s):
    target=canonical(urllib.parse.urljoin(url,href));path=urllib.parse.urlsplit(target).path.lower()
    if not allowed(target):continue
    if '.pdf' in path or (row['depth']<2 and '/drugsatfda_docs/nda/' in path and path.endswith(('.html','.htm')) and ('toc' in path or 'review' in label.lower())):
     links.append((target,label))
   result['status']='resolved' if links else 'resolved-no-review-links';result['screen']='package-expanded' if links else 'package-no-links-needs-manual-check'
   result['error']=None if links else 'No qualifying PDF/TOC links extracted; may be dynamic, archived, or an error page.'
  else:
   result['content_kind']='other';result['screen']='unreadable-format';raise RuntimeError('Response is neither recognizable PDF nor HTML; manual check needed')
  result['finished']=now();result['reused']=reused
 except Exception as e:result['error']=str(e)[:700];result['finished']=now()
 return result,links
COLS={'status','http_status','content_kind','screen','pages','readable_pages','ocr_pages','hit_pages','term_counts','lesson_hints','stage_hint','error','source_file','text_file','hits_file','sha256','bytes','finished'}
def save(c,row,result,links):
 changes={k:v for k,v in result.items() if k in COLS};c.execute('UPDATE documents SET '+','.join(k+'=?' for k in changes)+' WHERE id=?',[*changes.values(),row['id']])
 c.execute('INSERT INTO events VALUES(?,?,?,?)',(now(),row['id'],result['status'],json.dumps({'error':result.get('error'),'http':result.get('http_status'),'reused':result.get('reused'),'transportWarnings':result.get('transport_warnings'), 'links':len(links)})))
 for url,label in links:
  id=uid(url);c.execute('INSERT OR IGNORE INTO documents(id,url,source_kind,depth) VALUES(?,?,?,?)',(id,url,'Linked from Review-type package',row['depth']+1));c.execute('INSERT OR IGNORE INTO edges VALUES(?,?,?)',(row['id'],id,label))
 c.commit()
def report(c):
 q=lambda sql: [dict(x) for x in c.execute(sql)]
 data={'updated':now(),'originalIndexRows':7857,'queue':q('SELECT depth,status,count(*) AS n FROM documents GROUP BY depth,status'),'screen':q('SELECT screen,count(*) AS n FROM documents GROUP BY screen'),'kind':q('SELECT content_kind,count(*) AS n FROM documents GROUP BY content_kind'),'totals':dict(c.execute('SELECT count(*) AS documents,sum(attempts>0) AS attempted,sum(pages) AS pdfPages,sum(readable_pages) AS readablePages,sum(ocr_pages) AS lowTextPages,sum(hit_pages) AS keywordHitPages,sum(bytes) AS downloadedBytes FROM documents').fetchone()),'lessonHints':q("SELECT lesson_hints,count(*) AS n FROM documents WHERE lesson_hints IS NOT NULL GROUP BY lesson_hints"),'freeDiskGiB':round(shutil.disk_usage(SCRATCH).free/1024**3,1),'interpretation':'Machine text screening only. Keyword negatives and OCR-needed pages are not evidence of absence. Lesson hints are unverified. Stage A is one FDA index stratum, not all FDA records.'}
 data['indexRowStatus']=q('SELECT d.status,count(*) AS indexRows FROM origins o JOIN documents d ON d.id=o.document_id GROUP BY d.status')
 data['uniqueScreenedPDFHashes']=c.execute("SELECT count(DISTINCT sha256) FROM documents WHERE status='screened'").fetchone()[0]
 (BASE/'progress.json').write_text(json.dumps(data,indent=2)+'\n')
 fields=['id','url','source_kind','depth','status','attempts','http_status','content_kind','screen','pages','readable_pages','ocr_pages','hit_pages','term_counts','stage_hint','lesson_hints','error','source_file','text_file','hits_file','sha256','bytes','started','finished']
 with (BASE/'manifest.csv').open('w',newline='') as f:
  w=csv.DictWriter(f,fieldnames=fields);w.writeheader()
  for row in c.execute('SELECT '+','.join(fields)+' FROM documents ORDER BY depth,id'):w.writerow(dict(row))
 with (BASE/'index-origins.csv').open('w',newline='') as f:
  fields2=['document_id','index_row_id','application','submission_type','submission_no','original_url'];w=csv.DictWriter(f,fieldnames=fields2);w.writeheader();w.writerows(dict(x) for x in c.execute('SELECT * FROM origins'))
 with (BASE/'package-edges.csv').open('w',newline='') as f:
  w=csv.DictWriter(f,fieldnames=['parent_id','child_id','label']);w.writeheader();w.writerows(dict(x) for x in c.execute('SELECT * FROM edges'))
 # Compact candidate index for curators; snippets stay in per-document JSON to avoid a giant frequently rewritten file.
 candidates=[dict(x) for x in c.execute("SELECT id,url,source_kind,depth,pages,hit_pages,ocr_pages,term_counts,lesson_hints,stage_hint,hits_file,text_file FROM documents WHERE screen='keyword-positive'")]
 (BASE/'candidates.json').write_text(json.dumps(candidates,ensure_ascii=False,indent=2)+'\n')
 print(json.dumps({'time':data['updated'],'totals':data['totals'],'status':data['queue']}),flush=True)
def prune(c,max_gb):
 used=sum(x.stat().st_size for x in FILES.glob('*') if x.is_file())
 limit=max_gb*1024**3
 if used<=limit:return
 # Re-fetchable PDF bodies can be evicted after text and hashes are saved. Preserve exact provenance and explicitly mark missing local cache.
 for row in c.execute("SELECT id,source_file,bytes,screen FROM documents WHERE status='screened' AND source_file IS NOT NULL ORDER BY CASE WHEN screen='keyword-positive' THEN 1 ELSE 0 END,finished"):
  path=Path(row['source_file'])
  if not path.exists():continue
  used-=path.stat().st_size;path.unlink();c.execute('UPDATE documents SET source_file=NULL WHERE id=?',(row['id'],));c.execute('INSERT INTO events VALUES(?,?,?,?)',(now(),row['id'],'cache-evicted','PDF body removed after text extraction; source URL and SHA-256 retained'))
  if used<=limit*.8:break
 c.commit()
def run(workers,max_gb):
 c=conn();c.execute("UPDATE documents SET status='pending',error='Resumed after interrupted in-progress attempt' WHERE status='processing'");c.commit();active={};last=0;last_export=0;report(c)
 with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as pool:
  while True:
   slots=workers-len(active)
   for _ in range(slots):
    pdf_active=sum('.pdf' in x['url'].lower() for x in active.values())
    prefer_pdf=pdf_active<max(1,workers-1)
    order="CASE WHEN lower(url) LIKE '%.pdf%' THEN 0 ELSE 1 END" if prefer_pdf else "CASE WHEN lower(url) LIKE '%.html%' OR lower(url) LIKE '%.htm%' THEN 0 ELSE 1 END"
    # Queue order supplies readable contemporary cases early; no year is excluded.
    recent="CASE WHEN url LIKE '%/nda/202%' THEN 0 WHEN url LIKE '%/nda/201%' THEN 1 WHEN url LIKE '%/nda/200%' THEN 2 ELSE 3 END"
    r=c.execute("SELECT * FROM documents WHERE status='pending' ORDER BY "+order+","+recent+",depth,id LIMIT 1").fetchone()
    if r is None:break
    c.execute("UPDATE documents SET status='processing',attempts=attempts+1,started=? WHERE id=?",(now(),r['id']));c.commit();active[pool.submit(process,dict(r))]=dict(r)
   if not active:break
   done,_=concurrent.futures.wait(active,timeout=2,return_when=concurrent.futures.FIRST_COMPLETED)
   for future in done:
    row=active.pop(future)
    try:result,links=future.result()
    except Exception as e:result={'status':'error','error':'Worker exception: '+str(e),'finished':now()};links=[]
    save(c,row,result,links)
   if time.time()-last>60:prune(c,max_gb);report(c);last=time.time()
   if time.time()-last_export>600:
    subprocess.run([sys.executable,str(BASE/'export_passages.py')],check=True)
    # An online SQLite backup is a self-contained checkpoint; WAL files need not be copied by the user.
    backup=sqlite3.connect(SCRATCH/'screen-checkpoint.sqlite');c.backup(backup);backup.close();last_export=time.time()
  report(c)
  subprocess.run([sys.executable,str(BASE/'export_passages.py')],check=True)
  backup=sqlite3.connect(SCRATCH/'screen-checkpoint.sqlite');c.backup(backup);backup.close()
 c.close()
if __name__=='__main__':
 a=argparse.ArgumentParser();a.add_argument('--initialize',action='store_true');a.add_argument('--run',action='store_true');a.add_argument('--report',action='store_true');a.add_argument('--workers',type=int,default=3);a.add_argument('--cache-gb',type=int,default=18);a.add_argument('--index',default=str(BASE.parent/'fda-review-index-unverified.csv'));a.add_argument('--full-table',default='/tmp/ind-agent/drugsfda/ApplicationDocs.txt');args=a.parse_args()
 if args.initialize:print(json.dumps(initialize(args.index,args.full_table),indent=2))
 if args.run:run(args.workers,args.cache_gb)
 if args.report:
  c=conn();report(c);c.close()

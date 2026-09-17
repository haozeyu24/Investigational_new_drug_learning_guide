#!/usr/bin/env python3
import csv,gzip,json,re,sqlite3
from pathlib import Path
from collections import defaultdict,Counter
from datetime import datetime,timezone
BASE=Path(__file__).resolve().parent
if (BASE/'screen-freeze.json').exists():raise SystemExit('This snapshot is frozen; create a separately dated snapshot for additional screening.')
c=sqlite3.connect('/tmp/ind-full-screen/screen.sqlite');c.row_factory=sqlite3.Row
rows=json.load(open(BASE/'screen-snapshot.json'))['documents'] if (BASE/'screen-snapshot.json').exists() else [dict(x) for x in c.execute("SELECT * FROM documents WHERE status='screened' ORDER BY id")]
# Freeze the denominator before scanning; the main census continues independently.
if not (BASE/'screen-snapshot.json').exists():(BASE/'screen-snapshot.json').write_text(json.dumps({'time':datetime.now(timezone.utc).isoformat(),'documents':rows},indent=2))
origins=defaultdict(set);parents=defaultdict(set);products=defaultdict(set)
for r in c.execute('SELECT document_id,application FROM origins'):origins[r[0]].add(r[1])
for r in c.execute('SELECT parent_id,child_id FROM edges'):parents[r[1]].add(r[0])
for r in csv.DictReader(open('/tmp/ind-agent/drugsfda/Products.txt',encoding='latin1'),delimiter='\t'):products[r['ApplNo']].add(r['DrugName']+' ['+r['ActiveIngredient']+']')
def apps(id,seen=None):
 seen=set() if seen is None else seen
 if id in seen:return set()
 seen.add(id);v=set(origins[id])
 for parent in parents[id]:v.update(apps(parent,seen))
 return v
RX={
 'original-ind':r'\b(?:original|initial)\s+IND\b|\bIND\s+(?:review|consult|assessment)',
 'ind-discussion':r'\bpre[\s‐‑–-]?IND\b|\b(?:under|submitted\s+(?:to|in|under)|reviewed\s+(?:under|in))\s+(?:the\s+)?IND\b|\bIND\s*(?:No\.?\s*)?[#:\s]*\d{4,}|\bPIND\s*\d{4,}',
 'ind-action':r'clinical\s+hold|safe\s+to\s+proceed|study\s+may\s+proceed|first[\s‐‑–-]in[\s‐‑–-]human',
 'ind-broad':r'\bIND\b|investigational\s+new\s+drug',
 'mechanism':r'mechanism\s+of\s+action|mode\s+of\s+action|primary\s+pharmacology|pharmacodynamic|target\s+engagement|proof[\s-]of[\s-]concept',
 'disease-model':r'animal\s+model|disease\s+model|xenograft|tumou?r\s+(?:growth|model)|cell\s+line|patient[\s-]derived|transgenic|knock[\s-]out|knock[\s-]in',
 'benefit-bridge':r'biological\s+activity|anti[\s-]?tumou?r|anti[\s-]?viral|functional\s+(?:activity|effect)|human\s+relevance|patient\s+selection|biomarker|phenotyp|efficacy\s+(?:model|stud)',
 'uncertainty':r'mechanism[^.]{0,100}(?:unknown|unclear|not\s+(?:fully\s+)?(?:known|understood|established))|not[^.]{0,50}understood|relevance[^.]{0,70}(?:uncertain|unknown)|surrogate|off[\s-]target'
}
rx={k:re.compile(v,re.I) for k,v in RX.items()}
candidates=[];dispositions=[];totals=Counter()
for row in rows:
 path=Path(row['text_file'] or 'MISSING');associations=sorted(apps(row['id']));drugnames=sorted({name for app in associations for name in products[app]})
 d={'id':row['id'],'url':row['url'],'applications':associations,'products':drugnames,'pdfPages':row['pages'],'lowTextPages':row['ocr_pages'],'textFile':str(path),'sourceFile':row['source_file'],'candidatePages':0}
 if not path.is_file():d['disposition']='missing-text-file';dispositions.append(d);totals[d['disposition']]+=1;continue
 try:data=json.load(gzip.open(path,'rt'));pages=[re.sub(r'\s+',' ',p).strip() for p in data['pages']]
 except Exception as e:d['disposition']='unreadable-text-file';d['error']=str(e);dispositions.append(d);totals[d['disposition']]+=1;continue
 totals['extractedPagesAudited']+=len(pages)
 tags=[{k:len(p.findall(t)) for k,p in rx.items()} for t in pages]
 docind=any(t['ind-broad'] for t in tags);docpharm=any(t['mechanism'] or t['disease-model'] for t in tags)
 for i,(text,tag) in enumerate(zip(pages,tags)):
  pharm=tag['mechanism']*2+tag['disease-model']*3+tag['benefit-bridge']+tag['uncertainty']
  if pharm<2:continue
  nearby=range(max(0,i-1),min(len(pages),i+2));ind=max(tags[j]['original-ind']*5+tags[j]['ind-discussion']*2+tags[j]['ind-action']*3+min(tags[j]['ind-broad'],1) for j in nearby)
  if ind<3:continue
  matches=[]
  for key,p in rx.items():
   for m in p.finditer(text):matches.append((max(0,m.start()-220),min(len(text),m.end()+650),key))
  windows=[]
  for a,b,key in sorted(matches):
   if windows and a<=windows[-1]['end']:windows[-1]['end']=max(windows[-1]['end'],b);windows[-1]['terms']=sorted(set(windows[-1]['terms']+[key]));windows[-1]['text']=text[windows[-1]['start']:windows[-1]['end']]
   else:windows.append({'start':a,'end':b,'terms':[key],'text':text[a:b]})
  prov=[{'pdfPage':j+1,'text':pages[j]} for j in nearby if tags[j]['original-ind'] or tags[j]['ind-discussion'] or tags[j]['ind-action']]
  candidates.append({**d,'pdfPage':i+1,'tags':tag,'rankScore':min(ind,20)+min(pharm,25),'provenancePages':prov,'passages':windows,'manualDisposition':'Unreviewed machine candidate'})
  d['candidatePages']+=1
 if d['candidatePages']:d['disposition']='candidate-context-needs-manual-review'
 elif not row['readable_pages']:d['disposition']='image-only-or-unreadable-needs-OCR'
 elif docind and docpharm:d['disposition']='IND-and-pharmacology-present-but-no-proximity-candidate'
 elif docind:d['disposition']='IND-present-no-pharmacology-candidate'
 elif docpharm:d['disposition']='pharmacology-present-no-explicit-IND-provenance-found'
 else:d['disposition']='no-matched-text-not-proof-of-absence'
 dispositions.append(d);totals[d['disposition']]+=1
candidates.sort(key=lambda x:(-x['rankScore'],x['id'],x['pdfPage']))
with (BASE/'screen-candidates.jsonl').open('w') as f:
 for row in candidates:f.write(json.dumps(row,ensure_ascii=False)+'\n')
(BASE/'screen-dispositions.json').write_text(json.dumps(dispositions,indent=2))
summary={'snapshotTime':json.load(open(BASE/'screen-snapshot.json'))['time'],'snapshotPDFs':len(rows),'uniqueSourceHashes':len({r['sha256'] for r in rows}),'candidatePages':len(candidates),'candidateDocuments':len({r['id'] for r in candidates}),'counts':dict(totals),'limits':'Automated text/proximity audit only. Candidate wording requires manual provenance and relevance adjudication. Low-text pages remain incompletely assessed; no absence claim.'}
(BASE/'screen-summary.json').write_text(json.dumps(summary,indent=2));print(json.dumps(summary))

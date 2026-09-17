#!/usr/bin/env python3
"""Export every machine-hit page, with application provenance, for manual curation."""
import csv,json,sqlite3
from collections import defaultdict
from pathlib import Path
BASE=Path(__file__).resolve().parent
c=sqlite3.connect('/tmp/ind-full-screen/screen.sqlite');c.row_factory=sqlite3.Row
origins=defaultdict(list);parents=defaultdict(list)
for r in c.execute('SELECT * FROM origins'):origins[r['document_id']].append(dict(r))
for r in c.execute('SELECT * FROM edges'):parents[r['child_id']].append(r['parent_id'])
def provenance(id,seen=None):
 seen=set() if seen is None else seen
 if id in seen:return []
 seen.add(id);found=origins[id][:]
 for p in parents[id]:found+=provenance(p,seen)
 return list({x['index_row_id']:x for x in found}.values())
strong={'original_ind_review','initial_ind','ind_review','clinical_hold','may_proceed','pre_ind','investigator_brochure'}
counts={'documents':0,'hitPages':0,'strongTermPages':0};priority=[]
with (BASE/'machine-hit-pages.jsonl').open('w') as f:
 for r in c.execute("SELECT * FROM documents WHERE screen='keyword-positive' ORDER BY id"):
  if not r['hits_file'] or not Path(r['hits_file']).exists():continue
  counts['documents']+=1;source_origins=provenance(r['id'])
  d=json.load(open(r['hits_file']))
  for h in d['hits']:
   counts['hitPages']+=1;matched=sorted(strong.intersection(h['terms']))
   if matched:counts['strongTermPages']+=1
   item={'documentId':r['id'],'sourceURL':r['url'],'pdfPage':h['pdfPage'],'pageURL':r['url']+'#page='+str(h['pdfPage']),'indexOrigins':source_origins,'sourceSHA256':r['sha256'],'sourceFile':r['source_file'],'textFile':r['text_file'],'matchedTerms':h['terms'],'unverifiedLessonHints':h['unverifiedLessonHints'],'machineStageHint':r['stage_hint'],'manualReviewStatus':'Unreviewed machine hit','snippets':h['snippets']}
   f.write(json.dumps(item,ensure_ascii=False)+'\n')
   if matched:priority.append({'document_id':r['id'],'url':r['url'],'pdf_page':h['pdfPage'],'terms':'; '.join(matched),'applications':'; '.join(sorted(set(x['application'] for x in source_origins))),'lesson_hints':'; '.join(h['unverifiedLessonHints']),'manual_status':'Unreviewed strong-term hit'})
with (BASE/'manual-review-priority.csv').open('w',newline='') as f:
 w=csv.DictWriter(f,fieldnames=['document_id','url','pdf_page','terms','applications','lesson_hints','manual_status']);w.writeheader();w.writerows(priority)
with (BASE/'attempt-events.csv').open('w',newline='') as f:
 w=csv.DictWriter(f,fieldnames=['time','document_id','event','detail']);w.writeheader();w.writerows(dict(x) for x in c.execute('SELECT * FROM events'))
print(json.dumps(counts))

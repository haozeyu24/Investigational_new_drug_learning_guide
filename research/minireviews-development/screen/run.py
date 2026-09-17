#!/usr/bin/env python3
"""Freeze the available extracted FDA corpus and screen eight topic hypotheses.

This is retrieval, not scientific validation. A nearby IND mention does not
establish that a study was submitted with an original IND.
"""
import csv, gzip, hashlib, json, re, sqlite3
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path

BASE = Path(__file__).resolve().parent
if (BASE / 'freeze.json').exists():
    raise SystemExit('Frozen. Create a new snapshot directory rather than overwrite.')
db = sqlite3.connect('file:/tmp/ind-full-screen/screen.sqlite?mode=ro', uri=True)
db.row_factory = sqlite3.Row
snapshot = BASE / 'snapshot.json'
if not snapshot.exists():
    rows = [dict(r) for r in db.execute("SELECT * FROM documents WHERE status='screened' AND content_kind='pdf' ORDER BY id")]
    snapshot.write_text(json.dumps({'createdUTC': datetime.now(timezone.utc).isoformat(), 'documents': rows}, indent=2))
data = json.loads(snapshot.read_text())
rows = data['documents']
origins, parents, products = defaultdict(set), defaultdict(set), defaultdict(set)
for r in db.execute('SELECT document_id,application FROM origins'):
    origins[r[0]].add(r[1])
for r in db.execute('SELECT parent_id,child_id FROM edges'):
    parents[r[1]].add(r[0])
for r in csv.DictReader(open('/tmp/ind-agent/drugsfda/Products.txt', encoding='latin1'), delimiter='\t'):
    products[r['ApplNo']].add(r['DrugName'] + ' [' + r['ActiveIngredient'] + ']')

def apps(identifier, seen=None):
    seen = set() if seen is None else seen
    if identifier in seen:
        return set()
    seen.add(identifier)
    ans = set(origins[identifier])
    for parent in parents[identifier]:
        ans.update(apps(parent, seen))
    return ans

rules = {
 'nonclinical-pkpd': r'exposure[\s-]?response|dose[\s-]?response|PK\s*/\s*PD|pharmacokinetic.{0,20}pharmacodynamic|unbound|free\s+(?:drug|fraction)|target\s+engagement|receptor\s+occupancy|active\s+metabolite|species.{0,25}metaboli|accumulation|nonlinear|tissue\s+(?:exposure|distribution)|pharmacologically\s+active\s+dose',
 'nonclinical-safety': r'target[\s-]?organ|reversib|irreversib|safety\s+margin|genotox|cardiotox|hepatotox|CNS\s+(?:effect|tox)|hERG|QT\s+prolong|adverse\s+finding|toxicolog.{0,40}(?:finding|signal)|safety\s+pharmacology|convulsion|seizure|phototox|immunotox|thrombocytopenia',
 'nonclinical-package': r'good\s+laboratory\s+practice|\bGLP\b|nonclinical\s+(?:package|program)|toxicology\s+(?:package|program)|repeat[\s-]?dose|study\s+duration|relevant\s+species|species\s+selection|study\s+design|recovery\s+(?:period|group)|toxicokinetic|nonrodent|non[\s-]?rodent|sufficient.{0,35}(?:support|safety)|inadequate.{0,35}(?:study|studies|safety)|waiv.{0,35}(?:study|studies)',
 'cmc-material': r'drug\s+substance|drug\s+product|formulation|dosage\s+form|excipient|polymorph|crystal\s+form|salt\s+form|particle\s+size|clinical\s+(?:material|batch|lot)|toxicology\s+(?:material|batch|lot)|bridge.{0,35}(?:batch|formulation|material)|comparability|container[\s-]?closure',
 'cmc-controls': r'impurit|specification|acceptance\s+criteri|process\s+control|manufactur.{0,35}(?:process|control|scale)|analytical\s+method|batch\s+analysis|lot\s+release|release\s+test|nitrosamine|residual\s+solvent|elemental\s+impurit|sterilit|microbial\s+limit|\bGMP\b|\bCMC\b',
 'cmc-stability': r'stability|shelf[\s-]?life|in[\s-]?use|hold\s+time|storage\s+(?:condition|temperature)|expiration|expiry|beyond[\s-]?use|photostability|degradant|degradation|dilution|compatibility|adsorption|leachable|extractable|reconstitution|freeze[\s-]?thaw|nebulization',
 'clinical': r'first[\s-]?in[\s-]?human|healthy\s+(?:volunteer|subject)|patient\s+selection|eligibility|exclusion\s+criteri|stopping\s+rule|sentinel|safety\s+monitoring|protocol\s+(?:amend|design)|study\s+population|placebo\s+(?:control|response)|dose[\s-]?limiting\s+toxicity|\bDLT\b|informed\s+consent|staggered',
 'clinical-dose': r'starting\s+dose|start\s+dose|initial\s+(?:human|clinical)\s+dose|first\s+(?:human|clinical)\s+dose|\bMABEL\b|\bMRSD\b|human\s+equivalent\s+dose|\bNOAEL\b|\bHNSTD\b|\bSTD10\b|maximum\s+(?:recommended|proposed|clinical|human|dose)|dose\s+escalation|escalation\s+(?:scheme|limit|dose)',
}
patterns = {k: re.compile(v, re.I) for k,v in rules.items()}
origin = re.compile(r'\b(?:initial|original)\s+IND\b|\bpre[\s-]?IND\b|\bIND\s+(?:review|assessment|submission)|\b(?:submitted|reviewed)\s+(?:with|under|to)\s+(?:the\s+)?IND', re.I)
ind = re.compile(r'\bIND\s*(?:No\.?\s*)?[#:\s]*\d{4,}|\bPIND\s*\d{4,}|\bIND\b|investigational\s+new\s+drug', re.I)
decision = re.compile(r'clinical\s+hold|safe\s+to\s+proceed|FDA\s+(?:agreed|disagreed|recommended|requested)|FDA\s+response|not\s+(?:adequate|acceptable|sufficient)|insufficient|deficien', re.I)
files = {k:(BASE / (k+'.jsonl')).open('w') for k in rules}
topic_counts = {k:Counter() for k in rules}
topic_docs = {k:{} for k in rules}
dispositions=[]
totals=Counter()
for n,row in enumerate(rows):
    path=Path(row['text_file'] or 'MISSING')
    entry={'id':row['id'],'url':row['url'],'pdfPages':row['pages'],'lowTextPages':row['ocr_pages'],'textFile':str(path),'sourceFile':row['source_file'],'topics':{}}
    if not path.is_file():
        entry['status']='missing-text';dispositions.append(entry);totals['missing-text']+=1;continue
    try:
        pages=[re.sub(r'\s+',' ',t).strip() for t in json.load(gzip.open(path,'rt'))['pages']]
    except Exception:
        entry['status']='unreadable-text';dispositions.append(entry);totals['unreadable-text']+=1;continue
    totals['extractedPages']+=len(pages)
    a=sorted(apps(row['id']));names=sorted({p for x in a for p in products[x]})
    entry.update(applications=a,products=names)
    prov=[(len(origin.findall(t)),len(ind.findall(t)),len(decision.findall(t))) for t in pages]
    docind=any(b for a,b,c in prov)
    if not docind:
        entry['status']='no-IND-text-match';dispositions.append(entry);totals['no-IND-text-match']+=1;continue
    hits=Counter()
    for i,t in enumerate(pages):
        near=range(max(0,i-1),min(len(pages),i+2))
        provenance=max((a*5+min(b,2)+c*2 for a,b,c in (prov[j] for j in near)),default=0)
        if provenance<3:continue
        for key,rx in patterns.items():
            matches=list(rx.finditer(t))
            if not matches:continue
            # One generic term and no stronger IND anchor is insufficient retrieval evidence.
            if len(matches)<2 and not any(prov[j][0] for j in near):continue
            score=min(provenance,20)+min(len(matches),15)+min(prov[i][2]*2,10)
            first=matches[0]
            snippet=t[max(0,first.start()-200):min(len(t),first.end()+1300)]
            candidate={**entry,'pdfPage':i+1,'score':score,'termMatches':len(matches),'explicitIndAnchorNearby':any(prov[j][0] for j in near),'provenancePages':[j+1 for j in near if prov[j][0] or prov[j][1] or prov[j][2]],'snippet':snippet,'status':'unreviewed retrieval candidate; provenance not established'}
            candidate.pop('topics',None)
            files[key].write(json.dumps(candidate,ensure_ascii=False)+'\n')
            hits[key]+=1;topic_counts[key]['pages']+=1
            d=topic_docs[key].setdefault(row['id'],{**entry,'candidatePages':[],'maxScore':0,'explicitAnchorPages':[]})
            d['candidatePages'].append(i+1);d['maxScore']=max(d['maxScore'],score)
            if candidate['explicitIndAnchorNearby']:d['explicitAnchorPages'].append(i+1)
    entry['topics']=dict(hits)
    entry['status']='candidate' if hits else 'IND-present-no-topic-proximity-match'
    totals[entry['status']]+=1;dispositions.append(entry)
    if n%500==0:
        print(f'Screened {n}/{len(rows)} PDFs',flush=True)
for k,f in files.items():
    f.close()
    docs=sorted(topic_docs[k].values(),key=lambda x:(-bool(x['explicitAnchorPages']),-x['maxScore'],x['url']))
    for d in docs:d.pop('topics',None)
    (BASE/(k+'-documents.json')).write_text(json.dumps(docs,indent=2))
    topic_counts[k]['documents']=len(docs)
(BASE/'dispositions.json').write_text(json.dumps(dispositions,indent=2))
summary={'snapshotUTC':data['createdUTC'],'snapshotPDFs':len(rows),'uniqueHashes':len({r['sha256'] for r in rows}),'pdfPages':sum(r['pages'] or 0 for r in rows),'lowTextPages':sum(r['ocr_pages'] or 0 for r in rows),'counts':dict(totals),'topics':{k:dict(v) for k,v in topic_counts.items()},'limitations':'Automated retrieval of extracted text, not full scientific review. Candidate proximity does not prove IND stage. Negative matches do not establish absence. Source corpus and OCR remain incomplete.'}
(BASE/'summary.json').write_text(json.dumps(summary,indent=2))
(BASE/'rules.json').write_text(json.dumps(rules,indent=2))
hashes={f.name:hashlib.sha256(f.read_bytes()).hexdigest() for f in BASE.iterdir() if f.suffix in {'.json','.jsonl'}}
(BASE/'freeze.json').write_text(json.dumps({'frozenUTC':datetime.now(timezone.utc).isoformat(),'sha256':hashes},indent=2))
print(json.dumps(summary),flush=True)

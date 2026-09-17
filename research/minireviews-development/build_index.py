"""Build a navigable case index from the eight reviewed evidence files.

This does not rerun retrieval or change the frozen screening corpus.
"""
import hashlib
import json
from pathlib import Path
from urllib.parse import unquote, urlsplit, urlunsplit

ROOT = Path(__file__).resolve().parent
TOPICS = {
    'nonclinical-pkpd': 'Connect dose, exposure, and effect',
    'nonclinical-safety': 'Identify and interpret potential harm',
    'nonclinical-package': 'Build a credible safety package',
    'cmc-material': 'Define the drug people will receive',
    'cmc-controls': 'Make and control consistent material',
    'cmc-stability': 'Keep the product suitable through dosing',
    'clinical': 'The first clinical study',
    'clinical-dose': 'Justifying a first dose',
}


def canonical_url(url):
    p = urlsplit(url)
    return urlunsplit((p.scheme.lower(), p.netloc.lower(), unquote(p.path), p.query, ''))


def program_key(drug):
    """Explicit alias resolution; different material/indication programs stay separate."""
    low = drug.lower()
    if 'glycopyrrolate' in low:
        return 'glycopyrrolate-inhalation' if ('inhal' in low or 'ep-101' in low) else 'glycopyrrolate-prefilled-syringe'
    aliases = {
        'pennsaid': 'diclofenac-dmso-topical',
        'diclofenac': 'diclofenac-dmso-topical',
        'minocycline': 'minocycline-topical-foam',
        'romiplostim': 'romiplostim-hs-ars',
        'acetaminophen': 'acetaminophen-iv-nda204957',
        'atrovent': 'ipratropium-hfa',
        'acer-001': 'sodium-phenylbutyrate-acer001',
        'phenylbutyrate': 'sodium-phenylbutyrate-acer001',
        'cyclasol': 'cyclosporine-ophthalmic',
        'cyclosporine': 'cyclosporine-ophthalmic',
        'soluprep': 'chlorhexidine-isopropyl-alcohol-soluprep',
        'sesquient': 'fosphenytoin-sesquient',
        'gvoke': 'glucagon-gvoke-iv-supplement',
        'fiasp': 'insulin-aspart-pump-use',
        'cytalux': 'pafolacianine',
        'xaciato': 'clindamycin-vaginal-gel',
        'sirolimus': 'albumin-bound-sirolimus',
    }
    for text, key in aliases.items():
        if text in low:
            return key
    names = ('ivacaftor cinacalcet osimertinib vardenafil fosdenopterin '
             'vadadustat tovorafenib lumateperone faricimab baricitinib '
             'venetoclax tenapanor cipepofol rilzabrutinib suvorexant '
             'tofacitinib nitisinone levacetylleucine somapacitan '
             'halobetasol teplizumab dupilumab vamorolone lenacapavir '
             'oteseconazole ensartinib zongertinib evinacumab paltusotine '
             'pegzilarginase risdiplam glofitamab olipudase futibatinib '
             'avalglucosidase rezafungin').split()
    for name in names:
        if name in low:
            return name
    raise ValueError(f'Add an explicit reviewed program alias: {drug}')


def sources_for(case):
    sources = [{'url': case['sourceUrl'], 'pdfPages': case['pdfPages']}]
    sources += case.get('additionalSources', []) + case.get('sources', [])
    by_url = {}
    for source in sources:
        url = source.get('url', source.get('sourceUrl'))
        key = canonical_url(url)
        target = by_url.setdefault(key, {'url': url.split('#')[0], 'pdfPages': set()})
        pages = source.get('pdfPages', source.get('pages', []))
        assert pages and all(isinstance(v, int) and v > 0 for v in pages), source
        target['pdfPages'].update(pages)
    return [{**v, 'pdfPages': sorted(v['pdfPages'])} for v in by_url.values()]


def escape(text):
    if isinstance(text, list):
        text = ' '.join(text)
    return str(text).replace('|', '\\|').replace('\n', ' ')


all_cases, topic_counts = [], {}
for topic, title in TOPICS.items():
    data = json.loads((ROOT / f'{topic}.json').read_text())
    cases = data['cases']
    assert len({c['id'] for c in cases}) == len(cases), topic
    for field in ['caseCount', 'distinctPrograms']:
        if field in data:
            assert data[field] == len(cases), (topic, field, data[field], len(cases))
    topic_cases = []
    for c in cases:
        assert c.get('sourceStage') and c.get('sourceFacts'), c['id']
        sources = sources_for(c)
        for source in sources:
            assert urlsplit(source['url']).hostname.endswith('fda.gov'), source
        row = {
            'topicId': topic,
            'topicTitle': title,
            'id': c['id'],
            'programKey': program_key(c['drug']),
            'drug': c['drug'],
            'modality': c.get('modality', 'See original evidence file'),
            'sourceStage': c['sourceStage'],
            'sources': sources,
            'sourceFacts': c['sourceFacts'],
            'interpretationForLesson': c.get('interpretationForLesson', c.get('reviewerInference')),
            'interpretationAuthor': 'Mini-review author; not automatically an FDA conclusion',
            'limitations': c.get('uncertainties', c.get('limitations', c.get('limitation'))),
            'originalEvidenceFile': f'{topic}.json',
        }
        assert row['interpretationForLesson'] and row['limitations'], c['id']
        if 'additionalSourceFacts' in c:
            row['additionalSourceFacts'] = c['additionalSourceFacts']
        if 'additionalUncertainty' in c:
            row['additionalUncertainty'] = c['additionalUncertainty']
        all_cases.append(row)
        topic_cases.append(row)
    urls = {canonical_url(s['url']) for c in topic_cases for s in c['sources']}
    pages = {(canonical_url(s['url']), page) for c in topic_cases for s in c['sources'] for page in s['pdfPages']}
    topic_counts[topic] = {'title': title, 'caseAssignments': len(topic_cases),
                           'citedFDApdfUrls': len(urls), 'citedDocumentPages': len(pages)}

programs = {}
for c in all_cases:
    p = programs.setdefault(c['programKey'], {'labels': set(), 'topics': set()})
    p['labels'].add(c['drug'])
    p['topics'].add(c['topicId'])
programs = {k: {f: sorted(v) for f, v in d.items()} for k, d in sorted(programs.items())}
all_urls = {canonical_url(s['url']) for c in all_cases for s in c['sources']}
all_pages = {(canonical_url(s['url']), page) for c in all_cases for s in c['sources'] for page in s['pdfPages']}
manual = {}
audit_configs = [
    ('nonclinical-pkpd-audit.json', 'documents', 'pagesRead'),
    ('nonclinical-safety-audit.json', 'documents', 'pagesRead'),
    ('nonclinical-package-audit.json', 'documents', 'pagesRead'),
    ('cmc-source-triage.json', 'sources', 'pagesRead'),
    ('clinical-source-triage.json', 'checks', 'pages'),
]
for filename, list_key, pages_key in audit_configs:
    audit = json.loads((ROOT / filename).read_text())
    for check in audit[list_key]:
        key = canonical_url(check['url'])
        doc = manual.setdefault(key, {'url': check['url'].split('#')[0], 'pagesRead': set(), 'audits': set()})
        doc['pagesRead'].update(check[pages_key])
        doc['audits'].add(filename)
manual_pages = {(url, page) for url, doc in manual.items() for page in doc['pagesRead']}
assert all_pages <= manual_pages, f'Cited pages missing from audits: {all_pages - manual_pages}'
manual_rows = [{**d, 'pagesRead': sorted(d['pagesRead']), 'audits': sorted(d['audits'])} for _, d in sorted(manual.items())]
(ROOT / 'manual-reading-index.json').write_text(json.dumps({
    'prepared': '2026-09-17',
    'boundary': 'Document-pages recorded in bounded manual source audits. These counts do not mean the full PDFs were manually read.',
    'documents': manual_rows,
}, ensure_ascii=False, indent=2) + '\n')
coverage = {
    'prepared': '2026-09-17',
    'automatedFrozenCorpus': {'pdfUrls': 7979, 'uniqueFileHashes': 7933,
                               'pdfPages': 467510, 'candidateDocumentsAcrossQueues': 2097},
    'retainedEvidence': {'topicAssignments': len(all_cases), 'distinctDevelopmentPrograms': len(programs),
                         'citedFDApdfUrls': len(all_urls), 'citedDocumentPages': len(all_pages)},
    'recordedManualInspection': {'pdfUrls': len(manual), 'documentPages': len(manual_pages),
                                'indexFile': 'manual-reading-index.json',
                                'includesTriageBeyondRetainedCases': True,
                                'entirePdfsRead': False},
    'countingRules': [
        'Programs are explicitly normalized; salt/brand aliases are combined. Separate route/formulation programs for the same ingredient remain separate.',
        'PDF URLs are deduplicated after removing fragment anchors and decoding percent-encoded paths. Unique files were not separately deduplicated for retained evidence.',
        'Cited document-pages are URL/page pairs in retained case evidence; they are not a count of entire PDFs manually read or of all triage pages.',
        'Topic counts overlap. Guidance documents are not included in the retained case-source counts.',
        'Automated retrieval was broad; manual case selection was bounded and is not exhaustive.',
    ],
    'topics': topic_counts,
    'programAliases': programs,
}
(ROOT / 'coverage.json').write_text(json.dumps(coverage, ensure_ascii=False, indent=2) + '\n')
(ROOT / 'case-index.json').write_text(json.dumps({'prepared': '2026-09-17', 'coverageFile': 'coverage.json', 'cases': all_cases}, ensure_ascii=False, indent=2) + '\n')

lines = ['# Case index: eight focused reviews', '',
         f"**{len(all_cases)} topic assignments across {len(programs)} development programs, citing {len(all_urls)} FDA PDF URLs and {len(all_pages)} distinct document-pages.**", '',
         'Programs recur when the same evidence answers a different question. Counts include labeled biologic and other comparator programs. Source stages below are deliberately specific: a later IND discussion or NDA deficiency is not automatically an initial-IND requirement.', '',
         'Page numbers refer to the PDF file, not printed pagination. Source links open at the first listed page. The matching JSON files contain source facts, limitations, and verification records; this index summarizes teaching interpretations. See the [overview](README.md), [method](METHOD.md) and [coverage details](coverage.json).', '']
for topic, title in TOPICS.items():
    lines += [f'## {title}', '', f'[Focused review]({topic}.md) · [Full evidence]({topic}.json)', '',
              '| Program | Source stage | Teaching interpretation | FDA source pages |', '|---|---|---|---|']
    for c in [x for x in all_cases if x['topicId'] == topic]:
        citations = []
        for s in c['sources']:
            numbers = ', '.join(map(str, s['pdfPages']))
            citations.append(f"[PDF {numbers}]({s['url']}#page={s['pdfPages'][0]})")
        lines.append('| ' + ' | '.join([escape(c['drug']), escape(c['sourceStage']), escape(c['interpretationForLesson']), '; '.join(citations)]) + ' |')
    lines.append('')
(ROOT / 'case-index.md').write_text('\n'.join(lines) + '\n')

# Verify the search input and output files are still the frozen versions.
freeze = json.loads((ROOT / 'screen/freeze.json').read_text())
for name, expected in freeze['sha256'].items():
    actual = hashlib.sha256((ROOT / 'screen' / name).read_bytes()).hexdigest()
    assert actual == expected, f'Frozen screening file changed: {name}'
print(json.dumps(coverage['retainedEvidence'], indent=2))
print('Eight evidence files validated; frozen screening hashes unchanged.')

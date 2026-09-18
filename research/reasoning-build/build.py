"""Package the reviewed chapter content; does not alter discovery content."""
from pathlib import Path
import json

root = Path(__file__).resolve().parents[2]
chapters = {}
minimal = json.loads((Path(__file__).parent / 'nonclinical-minimal.json').read_text())
for name in ('nonclinical', 'cmc', 'clinical'):
    data = json.loads((Path(__file__).parent / (name + '.json')).read_text())
    for chapter in data if isinstance(data, list) else data.values():
        assert chapter['id'] not in chapters
        if chapter.get('format') == 'case-tabs':
            topics = []
            for source in ('action-topics-a.json', 'action-topics-b.json'):
                topics.extend(json.loads((Path(__file__).parent / source).read_text()))
            chapter['readingTopics'] = topics
            chapter['bridge'] = json.loads((Path(__file__).parent / 'pharmacology-bridge.json').read_text())
            assert chapter['bridge']['id'] == 'bridge-evidence'
            assert len(chapter['bridge']['stages']) == 3
            assert len(chapter['bridge']['gaps']) == 3
            chapter['workedCase'] = json.loads((Path(__file__).parent / 'ivacaftor-ind.json').read_text())
            chapter['lessons'] = json.loads((Path(__file__).parent / 'pharmacology-lessons.json').read_text())
            sequence = chapter['lessons']['sequence']
            assert [c['id'] for c in sequence] == ['interpret-effect', 'plan-patients', 'learn-from-patients']
            for case in sequence:
                assert case['stage'] and case['provenance'] and case['limit']
                assert case['visual']['kind'] in ('evidence', 'paired', 'timeline')
                assert all(s['url'].startswith('https://www.accessdata.fda.gov/') and '#page=' in s['url'] for s in case['sources'])
            worked_case = chapter['workedCase']
            assert len(worked_case['discovery']['assayMap']) == 3
            assert len(worked_case['discovery']['assays']) == 6
            for assay in worked_case['discovery']['assays']:
                assert all(assay.get(k) for k in ('id', 'label', 'format', 'system', 'readout', 'result', 'meaning'))
                assert assay['source']['url'].startswith('https://')
            assert len(worked_case['comparison']['rows']) == 3
            assert worked_case['comparison']['rationaleNote']
            for row in worked_case['comparison']['rows']:
                assert row['paper']['source']['url'].startswith('https://')
                assert row['ind']['source']['url'].startswith('https://') and '#page=' in row['ind']['source']['url']
                assert row['addition']['label'] and row['addition']['text']
            assert len(topics) == 5
            assert len({t['id'] for t in topics}) == 5
            cases = [c for t in topics for c in t['cases'] + t['moreCases']]
            assert len(cases) == 26 and len({c['id'] for c in cases}) == 26
            for topic in topics:
                assert len(topic['cases']) == 2
                assert all(len(c['steps']) == 3 for c in topic['cases'])
            for case in cases:
                assert case['stage'] and case['modality'] and case['limit']
                assert case['sources'] and all(s['url'].startswith('https://') and '#page=' in s['url'] for s in case['sources'])
        else:
            assert 3 <= len(chapter['nodes']) <= 4
            assert len(chapter['cases']) == 2
            assert len(chapter['exercise']['options']) == 3
            assert sum(bool(o['correct']) for o in chapter['exercise']['options']) == 1
            for case in chapter['cases']:
                assert 0 <= case['mapFocus'] < len(chapter['nodes'])
                assert all(s['url'].startswith('https://') for s in case['sources'])
        if chapter['id'] in minimal:
            chapter['minimal'] = minimal[chapter['id']]
            assert 3 <= len(chapter['minimal']['stages']) <= 4
            assert chapter['minimal']['sources']
        chapters[chapter['id']] = chapter
assert len(chapters) == 9
script = '// Nine reasoning maps, grounded in the reviewed FDA case library.\nconst REASONING_GUIDES = '
script += json.dumps(chapters, ensure_ascii=False, indent=2) + ';\n'
script += '''
for (const [id, guide] of Object.entries(REASONING_GUIDES)) {
 const lesson = CATALOG.levels.find(l => l.id === id);
 if (!lesson) throw new Error('Unknown reasoning chapter: ' + id);
 lesson.reasoningGuide = guide;
 if (guide.title) lesson.title = guide.title;
 lesson.goal = guide.minimal?.headline || guide.question;
 lesson.takeaway = guide.minimal?.takeaway || guide.takeaway || guide.nodes[guide.nodes.length - 1].decision;
 delete lesson.question;
 const cases = guide.readingTopics ? guide.readingTopics.flatMap(t => [...t.cases, ...t.moreCases]) : guide.cases;
 const comparisonSources = guide.workedCase ? [guide.workedCase.discovery.source, ...guide.workedCase.discovery.assays.map(a => a.source), ...guide.workedCase.comparison.rows.flatMap(r => [r.paper.source, r.ind.source])] : [];
 const sources = [...(guide.format === 'case-tabs' ? [] : lesson.sources), ...cases.flatMap(c => c.sources), ...(guide.lessons?.sequence || []).flatMap(c => c.sources), ...(guide.workedCase?.sources || []), ...comparisonSources, ...(guide.opening?.sources || []), ...(guide.bridge?.sources || []), ...[guide.boundary?.source, guide.boundary?.recommendationSource].filter(Boolean)];
 const activeSources = guide.minimal ? guide.minimal.sources : sources;
 lesson.sources = activeSources.filter((s, i) => activeSources.findIndex(x => x.url === s.url) === i);
}
'''
(root / 'dist/reasoning-content.js').write_text(script)
print('Packaged nine reading chapters: one developed pharmacology chapter, three minimal nonclinical pages and five concept maps.')

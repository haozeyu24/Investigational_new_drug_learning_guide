const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('dist/index.html','utf8');
const script=html.match(/<script data-local-bundle>\n([\s\S]*?)\n<\/script>/)[1];
const key='first-in-class-progress',stored=new Map();
async function openGuide(hash='#small-molecule/nonclinical-pharmacology/0',options={}){
 const backing=options.stored||stored, failures={write:false};
 const nodes=new Map(),handlers={},focusHistory=[];
 const node=s=>{if(!nodes.has(s))nodes.set(s,{innerHTML:'',dataset:{},open:false,focus(){this.focused=true;focusHistory.push(s)},scrollIntoView(){},setAttribute(k,v){this[k]=v},addEventListener(){},showModal(){this.open=true},close(){this.open=false},classList:{toggle(){},add(){},remove(){}}});return nodes.get(s);};
 const location={protocol:'file:',hash},storage={getItem:k=>backing.get(k)??null,setItem:(k,v)=>{if(failures.write)throw Error('Storage quota exceeded');backing.set(k,v)},removeItem:k=>backing.delete(k)};
 const ctx=vm.createContext({console,setTimeout,clearTimeout,location,history:{pushState(a,b,h){location.hash=h},replaceState(a,b,h){location.hash=h}},window:{localStorage:storage,sessionStorage:storage,addEventListener(){},matchMedia:()=>({matches:false,addEventListener(){}}),scrollTo(){}},document:{querySelector:node,querySelectorAll:()=>[],addEventListener(k,f){(handlers[k]??=[]).push(f)},body:{classList:{toggle(){}}}},fetch(){throw Error('No network needed for the local guide');}});
 const run=s=>vm.runInContext(s,ctx);
 const click=(key,value)=>{const b={dataset:{[key]:value}},selector='[data-'+key.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())+']';for(const f of handlers.click||[])f({target:{closest:s=>s===selector?b:null}});};
 run(script);await run('ready');run('dismissWelcome()');await run('saveQueue');return {run,node,click,handlers,location,failures,focusHistory};
}
(async()=>{
 const {run,node,click,handlers}=await openGuide();
 const readingId='nonclinical-pharmacology';
 const topicIds=['fda-requirements','bridge-evidence','ivacaftor-ind','lessons-from-the-past'];
 const pastIds=['existing-evidence','drug-action','possible-benefit','patient-selection','measured-benefit'];
 const historyIds=['interpret-effect','plan-patients','learn-from-patients'];
 assert.equal(run('reasoningGuide().format'),'case-tabs');
 assert.equal(JSON.stringify(run('reasoningReadingTopics().map(t=>t.id)')),JSON.stringify(topicIds));
 assert.equal(JSON.stringify(run('reasoningGuide().readingTopics.map(t=>t.id)')),JSON.stringify(pastIds));
 for(const removed of ['nodes','cases','exercise'])assert.equal(run('reasoningGuide()['+JSON.stringify(removed)+']'),undefined);
 assert(run('reasoningOpeningActive()'));assert(node('#lesson').innerHTML.includes('What must the IND explain?'));
 for(const source of run('reasoningGuide().opening.sources'))assert(run('level().sources.some(s=>s.url==='+JSON.stringify(source.url)+')'));
 const escaped=value=>run('escapeHtml('+JSON.stringify(value)+')');
 const hasOpen=attrs=>/(?:^|\s)open(?:\s|=|$)/.test(attrs);
 const archiveAttrs=out=>{const match=out.match(/<details\b([^>]*\breasoning-history-archive\b[^>]*)>/);assert(match,'Optional reference collection uses a native disclosure');return match[1];};
 const historyCaseAttrs=(out,id)=>{
  const cases=[...out.matchAll(/<details\b([^>]*\breasoning-history-case\b[^>]*)>/g)];
  assert.equal(cases.length,3,'Three connected main cases');
  const match=cases.find(m=>m[1].includes('data-past-topic="'+id+'"'));assert(match,'Main case '+id+' exists');return match[1];
 };
 const archiveOpenGroup=(out,id)=>{
  assert(hasOpen(archiveAttrs(out)),'A bookmarked reference group opens its archive parent');
  const label=escaped(run('reasoningGuide().readingTopics.find(t=>t.id==='+JSON.stringify(id)+').label'));
  const groups=[...out.matchAll(/<details\b([^>]*\breasoning-past-topic\b[^>]*)>\s*<summary\b[^>]*>([\s\S]*?)<\/summary>/g)];
  assert.equal(groups.length,5,'Five native disclosure groups contain the historical cases');
  const match=groups.find(m=>m[2].includes(label));assert(match,'Archive summary contains '+label);
  assert(/(?:^|\s)open(?:\s|=|$)/.test(match[1]),'Restored historical group is open: '+id);
 };
 let readingCases=0;
 for(const [i,id] of topicIds.entries()){
  click('reasoningTopic',id);const out=node('#lesson').innerHTML;
  assert.equal(run('reasoningReadingIndex()'),i);assert.equal(run('reasoningReadingTopic().id'),id);
  assert.equal(run('readState().stepName'),run('reasoningReadingTopic().label'));
  assert.equal((out.match(/<nav[^>]+reasoning-reading-tabs/g)||[]).length,1);
  const tabNav=out.match(/<nav[^>]+reasoning-reading-tabs[^>]*>([\s\S]*?)<\/nav>/)[1];
  assert.equal((tabNav.match(/data-reasoning-topic=/g)||[]).length,4,'Exactly four top-level topics');
  for(const old of pastIds)assert(!tabNav.includes('data-reasoning-topic="'+old+'"'),'Historical groups are not top-level tabs');
  assert(!/reasoning-views|data-lesson-step|class="reasoning-rail"|name="answer"|Your revised argument/.test(out));
  assert(!/undefined|NaN/.test(out));assert.equal(run('state.step'),0);
  assert(out.includes('data-reasoning-topic="'+id+'" aria-pressed="true"'));
  assert.equal(out.includes('data-action="complete-reading"'),i===topicIds.length-1);
  const controls=out.slice(out.indexOf('class="lesson-controls reasoning-controls reasoning-reading-controls"'),out.indexOf('<div class="reasoning-footer"'));
  const adjacentIds=[...controls.matchAll(/data-reasoning-topic="([^"]+)"/g)].map(m=>m[1]);
  assert.deepEqual(adjacentIds,[...(i?[topicIds[i-1]]:[]),...(i<topicIds.length-1?[topicIds[i+1]]:[])],'Previous/next controls follow the four-topic order');
  assert(!run("done('nonclinical-pharmacology')"),'Reading navigation must not complete the chapter');
  if(id==='bridge-evidence'){
   assert.equal(run('reasoningGuide().bridge.id'),id);
   assert.equal(run('reasoningReadingTopic().label'),'Bridge the evidence');
   const panel=out.slice(out.indexOf('<div id="reasoning-reading-panel"'),out.indexOf('<div class="lesson-controls reasoning-controls reasoning-reading-controls"'));
   assert(/class="[^"]*\breasoning-bridge\b/.test(panel),'Bridge topic displays its own panel');
   assert(panel.replace(/<[^>]*>/g,'').trim(),'Bridge panel has visible content');
  }
  if(id==='ivacaftor-ind'){
   const worked=run('reasoningGuide().workedCase');assert.equal(worked.id,id);
   assert.equal(worked.label,'Ivacaftor: follow the evidence');
   for(const removed of ['reports','firstStudy','review','assessment'])assert.equal(worked[removed],undefined,'Removed field stays absent: '+removed);
   assert(out.includes('reasoning-ind-case'),'Ivacaftor remains one coherent worked-case surface');
   const workedStart=out.indexOf('<article class="reasoning-ind-case"');assert(workedStart>=0);
   const workedHtml=out.slice(workedStart,out.indexOf('</article>',workedStart)+10);
   const caseParts=[...workedHtml.matchAll(/<details\b([^>]*\breasoning-case-part\b[^>]*)>([\s\S]*?)<\/details>/g)];
   assert.equal(caseParts.length,2,'Discovery and source comparison are the two native disclosures');
   const partBodies=caseParts.map((part,index)=>{
    assert(!/(?:^|\s)open(?:\s|=|$)/.test(part[1]),'Each case part starts closed');
    assert(!/(?:^|\s)name\s*=/.test(part[1]),'Case parts can open independently');
    const summary=part[2].match(/^\s*<summary\b[^>]*class="[^"]*\breasoning-case-part-heading\b[^"]*"[^>]*>([\s\S]*?)<\/summary>/);
    assert(summary,'Each disclosure starts with its native summary');
    const title=[worked.discovery.title,worked.comparison.title][index];
    assert(summary[1].includes('<h3>'+escaped(title)+'</h3>'),'Summary titles retain discovery, comparison order');
    const body=part[2].slice(summary[0].length).match(/^\s*<div\b[^>]*class="[^"]*\breasoning-case-part-body\b[^"]*"[^>]*>([\s\S]*)<\/div>\s*$/);
    assert(body,'Disclosure content stays inside its case-part body');
    return body[1];
   });
   assert(!/<nav\b|role="tablist"|data-reasoning-topic|data-lesson-step|data-action=/.test(workedHtml),'The worked case has no internal tab row or action navigation');
   assert(!/reasoning-ind-report|reasoning-ind-outcome|reasoning-ind-reports/.test(workedHtml),'The old report cards and first-study outcome panel are removed');
   assert(!/(?:800|500)\s*mg|dose[ -]escalation|first dosing|healthy volunteers|May 2006|first[- ]in[- ]human|first human study/i.test(workedHtml),'The page stays on the pharmacology comparison, not dosing chronology');
   const sourceShown=(source,where=workedHtml)=>{
    assert(source&&typeof source.label==='string'&&/^https:\/\//.test(source.url));
    assert(where.includes(escaped(source.label)),'Displays source label: '+source.label);
    assert(where.includes(source.url.replace(/&/g,'&amp;')),'Displays source URL: '+source.url);
    assert(run('level().sources.some(s=>s.url==='+JSON.stringify(source.url)+')'),'Source is available in Sources & reading');
   };
   const discovery=worked.discovery;assert.equal(discovery.claims,undefined);
   for(const field of ['intro','note','limit']){
    assert.equal(typeof discovery[field],'string');assert(discovery[field].trim());
    assert(partBodies[0].includes(escaped(discovery[field])),'Discovery retains '+field);
   }
   assert.equal(discovery.assayMap.length,3);
   for(const step of discovery.assayMap){assert(partBodies[0].includes(escaped(step.label)));assert(partBodies[0].includes(escaped(step.text)));}
   assert.equal(discovery.assays.length,6);
   assert.equal(new Set(discovery.assays.map(a=>a.id)).size,6,'Assays have distinct stable IDs');
   const assayTableMatch=partBodies[0].match(/<table\b[^>]*class="[^"]*\breasoning-assay-table\b[^"]*"[^>]*>([\s\S]*?)<\/table>/);
   assert(assayTableMatch,'Discovery assays use a semantic table');
   const assayHead=assayTableMatch[1].match(/<thead\b[^>]*>([\s\S]*?)<\/thead>/);assert(assayHead);
   const assayHeaders=[...assayHead[1].matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/g)];
   assert.equal(assayHeaders.length,4);
   for(const [index,label] of ['Experiment','System and readout','Reported result','Interpretation'].entries())assert(assayHeaders[index][1].includes(label),'Assay column '+label);
   const assayBody=assayTableMatch[1].match(/<tbody\b[^>]*>([\s\S]*?)<\/tbody>/);assert(assayBody);
   const assayRows=[...assayBody[1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)];assert.equal(assayRows.length,6);
   for(const [index,assay] of discovery.assays.entries()){
    const row=assayRows[index][1],header=row.match(/<th\b[^>]*scope="row"[^>]*>([\s\S]*?)<\/th>/);
    assert(header,assay.id+' has a scoped experiment row header');
    const cells=[...row.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/g)];assert.equal(cells.length,3);
    for(const field of ['label','format'])assert(header[1].includes(escaped(assay[field])),assay.id+' shows '+field+' in the experiment cell');
    for(const field of ['system','readout'])assert(cells[0][1].includes(escaped(assay[field])),assay.id+' shows '+field+' in its system/readout cell');
    assert(cells[1][1].includes(escaped(assay.result)),assay.id+' retains its exact result and units in its result cell');
    assert(cells[2][1].includes(escaped(assay.meaning)),assay.id+' shows its interpretation in its interpretation cell');
    sourceShown(assay.source,row);
   }
   const assayById=Object.fromEntries(discovery.assays.map(a=>[a.id,a]));
   assert.match(assayById['engineered-potency'].result,/3 ± 1 nM/);
   assert.match(assayById['engineered-potency'].readout,/membrane-potential.*chloride efflux/);
   assert.match(assayById['f508del-airway'].result,/22 ± 10 nM/);
   assert.match(assayById['f508del-airway'].readout,/short-circuit current/);
   assert.match(assayById['g551d-airway'].result,/0\.236 ± 0\.200 μM/);
   assert.match(assayById['g551d-airway'].result,/50%/);
   assert.match(assayById['gabaa-selectivity'].result,/47%, 52% and 18%/);
   assert.match(assayById['broader-profiling'].result,/hERG IC₅₀ > 10 μM/);
   assert.match(assayById['broader-profiling'].result,/CYP IC₅₀ values > 20 μM/);
   const camp=assayById['camp-mechanism'];assert(camp,'cAMP method has its own row');
   assert.match(camp.readout,/cAMP.*standard curve/);
   assert.match(camp.result,/describes the method.*does not present.*cAMP result/,'The discovery paper supplies a method, not a reported compound-48 cAMP result');
   assert(!/\d\s*(?:±|%|[nμu]M\b|pmol\b|nmol\b)|no (?:change|increase)|unchanged|did not increase/i.test(camp.result),'Do not invent a numerical or negative cAMP result in the discovery account');
   sourceShown(discovery.source,partBodies[0]);
   sourceShown(discovery.approvalSource,partBodies[0]);
   const comparison=worked.comparison;assert.equal(comparison.rows.length,3);
   assert(partBodies[1].includes(escaped(comparison.intro)));assert(partBodies[1].includes(escaped(comparison.note)));
   assert.equal(typeof comparison.rationaleNote,'string');assert(comparison.rationaleNote.trim());
   assert(partBodies[1].includes(escaped(comparison.rationaleNote)),'Scientific rationale retains its explicit provenance caveat');
   const tableMatch=partBodies[1].match(/<table\b[^>]*class="[^"]*reasoning-source-comparison[^"]*"[^>]*>([\s\S]*?)<\/table>/);
   assert(tableMatch,'Scientific comparison uses a semantic table');
   const table=tableMatch[1],head=table.match(/<thead\b[^>]*>([\s\S]*?)<\/thead>/);assert(head,'Comparison table has a header');
   const comparisonHeaders=[...head[1].matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/g)];
   assert.equal(comparisonHeaders.length,4,'Question, discovery paper, initial IND review, scientific rationale');
   for(const [index,label] of ['Scientific question','Discovery paper','Initial IND review','Why this matters for the IND'].entries())assert(comparisonHeaders[index][1].includes(label),'Comparison column '+label);
   assert(comparisonHeaders[3][1].includes('Scientific interpretation'),'Fourth column labels rationale as interpretation');
   const bodies=[...table.matchAll(/<tbody\b[^>]*>([\s\S]*?)<\/tbody>/g)];
   assert.equal(bodies.length,3,'Each scientific question and interpretation form one row group');
   for(const body of bodies){
    assert.equal((body[1].match(/<tr\b/g)||[]).length,1,'Each question has one comparison row');
    assert.equal((body[1].match(/<th\b[^>]*scope="row"/g)||[]).length,1,'Scientific question is a row header');
    assert.equal((body[1].match(/<td\b/g)||[]).length,3,'Paper, IND evidence and rationale have separate cells');
    assert(!/colspan=|comparison-interpretation/.test(body[1]),'No extra spanning interpretation band');
   }
   for(const [rowIndex,row] of comparison.rows.entries()){
    const rowGroup=bodies[rowIndex][1],cells=[...rowGroup.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/g)];
    assert(rowGroup.includes(escaped(row.question)),row.id+' shows the scientific question in its row group');
    assert.match(row.paper.source.url,/doi\.org\/10\.1021\/jm5012808$/);
    assert.match(row.ind.source.url,/accessdata\.fda\.gov.*#page=(85|86)$/);
    for(const [cellIndex,side] of ['paper','ind'].entries()){
     assert(cells[cellIndex][1].includes(escaped(row[side].text)),row.id+' shows '+side+' evidence in its correct cell');
     sourceShown(row[side].source,cells[cellIndex][1]);
    }
    assert(rowGroup.indexOf(escaped(row.paper.text))<rowGroup.indexOf(escaped(row.ind.text)),row.id+' keeps paper before IND evidence');
    assert(cells[2][1].includes(escaped(row.addition.label)),row.id+' shows its rationale label in the fourth column');
    assert(cells[2][1].includes(escaped(row.addition.text)),row.id+' explains scientific relevance in the fourth column');
   }
   assert(!workedHtml.includes('How FDA assessed the evidence'),'The removed FDA assessment section is absent');
   assert(workedHtml.includes(escaped(worked.stage)),'Initial IND provenance remains visible');
   assert(fs.existsSync('dist/'+worked.image),'Worked-case molecular structure exists');assert(workedHtml.includes(escaped(worked.imageAlt)));
   assert(out.includes('target="_blank" rel="noopener noreferrer"'));
  }
  if(id==='lessons-from-the-past'){
   const sequence=run('reasoningGuide().lessons.sequence');
   assert.equal(JSON.stringify(sequence.map(c=>c.id)),JSON.stringify(historyIds));
   assert.equal(JSON.stringify(sequence.map(c=>c.drug)),JSON.stringify(['Cinacalcet','Ensartinib','Crizotinib']));
   const mainCases=[...out.matchAll(/<details\b([^>]*\breasoning-history-case\b[^>]*)>([\s\S]*?)<\/details>/g)];
   for(const c of sequence){
    const rendered=mainCases.find(m=>m[1].includes('data-past-topic="'+c.id+'"'));assert(rendered,c.id+' renders a complete main case');
    for(const field of ['drug','stage','provenance','question','setup','limit'])assert(rendered[2].includes(escaped(c[field])),c.id+' retains '+field+' in its own disclosure');
    for(const group of ['decision','lesson'])for(const field of ['label','text'])assert(rendered[2].includes(escaped(c[group][field])),c.id+' renders '+group+' '+field);
    for(const n of c.visual.nodes)for(const field of ['label','title','text'])assert(rendered[2].includes(escaped(n[field])),c.id+' retains visual '+field);
    for(const source of c.sources){assert(/#page=\d+/.test(source.url));assert(rendered[2].includes(source.url.replace(/&/g,'&amp;')));assert(run('level().sources.some(s=>s.url==='+JSON.stringify(source.url)+')'));}
   }
   assert.match(sequence[0].provenance,/earlier human|prior human/i,'Cinacalcet original US IND is distinguished from first-ever human exposure');
   assert.match(sequence[1].provenance,/later IND/i,'Ensartinib history is attributed to later correspondence');
   assert.match(sequence[2].stage,/amendments/i,'Crizotinib findings retain their developing-protocol context');
   assert.match(sequence[2].limit,/stable.disease.*not objective responses/i,'Stable disease is not relabeled as an objective response');
   assert(!hasOpen(archiveAttrs(out)),'Reference collection starts collapsed');
   for(const [index,caseId] of historyIds.entries()){
    assert.equal(hasOpen(historyCaseAttrs(out,caseId)),index===0,'Only the first main case starts open');
    assert(out.includes('data-past-lesson="'+caseId+'"'),'Main flow links to '+caseId);
   }
   assert.equal((out.match(/<details\b[^>]*\breasoning-past-topic\b/g)||[]).length,5);
   const archiveStart=out.search(/<details\b[^>]*\breasoning-history-archive\b/),archiveHtml=out.slice(archiveStart);
   for(const topic of run('reasoningGuide().readingTopics')){
    assert.equal(topic.cases.length,2);assert(archiveHtml.includes(escaped(topic.label)));assert(archiveHtml.includes(escaped(topic.principle)));
    for(const c of [...topic.cases,...topic.moreCases]){
     for(const field of ['stage','limit','modality','lesson'])assert(archiveHtml.includes(escaped(c[field])),c.id+' displays '+field);
     if(c.steps)for(const step of c.steps)assert(archiveHtml.includes(escaped(step.text)),c.id+' retains its concrete sequence');
     if(c.finding)assert(archiveHtml.includes(escaped(c.finding)),c.id+' retains its finding');
     for(const source of c.sources){assert(/#page=\d+/.test(source.url));assert(archiveHtml.includes(source.url.replace(/&/g,'&amp;')));}
     readingCases++;
    }
   }
   assert(out.includes('target="_blank" rel="noopener noreferrer"'));
  }
 }
 assert.equal(readingCases,26,'All historical cases remain in the archive');
 for(const invalid of ['unknown','0','',null])click('reasoningTopic',invalid);
 assert.equal(run('reasoningReadingTopic().id'),'lessons-from-the-past');
 // Reading completion is explicit, guarded, and cannot use the former quiz API.
 await run('saveQueue');
 for(const body of [
  ...['fda-requirements','bridge-evidence','ivacaftor-ind',...pastIds].map(topic=>({lesson:readingId,topic,acknowledge:true})),
  {lesson:readingId,topic:'lessons-from-the-past'},
  {lesson:readingId,topic:'lessons-from-the-past',acknowledge:false},
  {lesson:readingId,topic:'lessons-from-the-past',acknowledge:'true'},
  {lesson:'cmc-stability',topic:'lessons-from-the-past',acknowledge:true}
 ])await assert.rejects(run('request("/api/complete-reading",'+JSON.stringify(body)+')'));
 await assert.rejects(run('request("/api/complete",{lesson:"nonclinical-pharmacology",answer:0})'));
 for(const topic of topicIds.slice(0,-1)){click('reasoningTopic',topic);await run('completeReadingChapter()');assert.equal(run('state.screen'),'lesson');assert(!run("done('nonclinical-pharmacology')"));}
 run('showOverview()');await run('completeReadingChapter()');assert.equal(run('state.screen'),'overview');
 run("startLevel('nonclinical-pharmacology',0)");click('reasoningTopic','lessons-from-the-past');await run('saveQueue');
 assert(!run("done('nonclinical-pharmacology')"));click('action','complete-reading');await run('saveQueue');
 assert.equal(run('state.screen'),'complete');assert(run("done('nonclinical-pharmacology')"));
 let readingSaved=JSON.parse(stored.get(key)).find(x=>x.lesson===readingId);
 assert.equal(readingSaved.completionKind,'reading');assert.equal(readingSaved.reasoning.topic,'lessons-from-the-past');
 const openingRefresh=await openGuide();assert.equal(openingRefresh.run('reasoningReadingTopic().id'),'lessons-from-the-past');
 assert(openingRefresh.run("done('nonclinical-pharmacology')"));
 // All five former top-level IDs now resume in the matching historical disclosure.
 for(const oldTopic of pastIds){
  const legacyStore=new Map([[key,JSON.stringify([{lesson:readingId,step:0,completed:true,completionKind:'reading',reasoning:{topic:oldTopic}}])]]);
  const legacy=await openGuide(undefined,{stored:legacyStore});
  assert.equal(legacy.run('reasoningReadingTopic().id'),'lessons-from-the-past');
  assert.equal(legacy.run('state.reasoningPastTopic'),oldTopic);
  archiveOpenGroup(legacy.node('#lesson').innerHTML,oldTopic);
  assert(legacy.run('done('+JSON.stringify(readingId)+')'),'Migration preserves completion');
  const migrated=JSON.parse(legacyStore.get(key)).find(x=>x.lesson===readingId);
  assert.equal(migrated.reasoning.topic,'lessons-from-the-past');assert.equal(migrated.reasoning.pastTopic,oldTopic);assert.equal(migrated.completionKind,'reading');
  const restored=await openGuide(undefined,{stored:legacyStore});
  assert.equal(restored.run('state.reasoningPastTopic'),oldTopic);archiveOpenGroup(restored.node('#lesson').innerHTML,oldTopic);
  restored.click('reasoningTopic','ivacaftor-ind');await restored.run('saveQueue');
  restored.click('reasoningTopic','lessons-from-the-past');assert.equal(restored.run('state.reasoningPastTopic'),oldTopic);archiveOpenGroup(restored.node('#lesson').innerHTML,oldTopic);
 }
 // Native disclosure toggles persist the selected historical group independently of the top tab.
 const disclosureStore=new Map(),disclosure=await openGuide(undefined,{stored:disclosureStore});
 disclosure.click('reasoningTopic','lessons-from-the-past');
 function togglePast(guide,id,open,kind='reasoning-past-topic'){for(const fn of guide.handlers.toggle||[])fn({target:{dataset:{pastTopic:id},open,matches:s=>s.split(',').some(selector=>selector.trim()==='.'+kind)}});}
 togglePast(disclosure,'patient-selection',true);await disclosure.run('saveQueue');
 assert.equal(disclosure.run('state.reasoningPastTopic'),'patient-selection');
 let disclosureSaved=JSON.parse(disclosureStore.get(key)).find(x=>x.lesson===readingId);
 assert.equal(disclosureSaved.reasoning.topic,'lessons-from-the-past');assert.equal(disclosureSaved.reasoning.pastTopic,'patient-selection');
 const disclosureRefresh=await openGuide(undefined,{stored:disclosureStore});archiveOpenGroup(disclosureRefresh.node('#lesson').innerHTML,'patient-selection');
 togglePast(disclosureRefresh,'unknown',true);assert.equal(disclosureRefresh.run('state.reasoningPastTopic'),'patient-selection','Unknown groups are ignored');
 togglePast(disclosureRefresh,'patient-selection',false);await disclosureRefresh.run('saveQueue');
 assert.equal(disclosureRefresh.run('state.reasoningPastTopic'),undefined);
 disclosureSaved=JSON.parse(disclosureStore.get(key)).find(x=>x.lesson===readingId);assert.equal(disclosureSaved.reasoning.pastTopic,undefined,'Closing the saved group clears its bookmark');
 disclosureRefresh.click('reasoningTopic','ivacaftor-ind');await disclosureRefresh.run('saveQueue');
 const workedRefresh=await openGuide(undefined,{stored:disclosureStore});assert.equal(workedRefresh.run('reasoningReadingTopic().id'),'ivacaftor-ind');assert(workedRefresh.node('#lesson').innerHTML.includes('reasoning-ind-case'));
 // Main-case flow selection and native toggles share the existing saved past-topic position.
 for(const caseId of historyIds){
  const historyStore=new Map(),history=await openGuide(undefined,{stored:historyStore});
  history.click('reasoningTopic','lessons-from-the-past');
  const focusBefore=history.focusHistory.length;history.click('pastLesson',caseId);await history.run('saveQueue');
  assert.equal(history.run('state.reasoningPastTopic'),caseId);assert(hasOpen(historyCaseAttrs(history.node('#lesson').innerHTML,caseId)));
  assert(history.focusHistory.slice(focusBefore).some(selector=>selector.includes(caseId)),'Flow selection focuses its main case');
  let savedHistory=JSON.parse(historyStore.get(key)).find(x=>x.lesson===readingId);
  assert.equal(savedHistory.reasoning.topic,'lessons-from-the-past');assert.equal(savedHistory.reasoning.pastTopic,caseId);
  const restored=await openGuide(undefined,{stored:historyStore});
  assert.equal(restored.run('state.reasoningPastTopic'),caseId);assert(hasOpen(historyCaseAttrs(restored.node('#lesson').innerHTML,caseId)));
  assert(!hasOpen(archiveAttrs(restored.node('#lesson').innerHTML)),'Main-case bookmarks do not open the optional archive');
  for(const invalid of ['unknown','',...pastIds])restored.click('pastLesson',invalid);
  assert.equal(restored.run('state.reasoningPastTopic'),caseId,'Flow ignores invalid and archive-only IDs');
  restored.click('reasoningTopic','bridge-evidence');restored.click('pastLesson',historyIds[(historyIds.indexOf(caseId)+1)%3]);
  assert.equal(restored.run('state.reasoningPastTopic'),caseId,'Flow is inactive outside Lessons from the past');
  restored.click('reasoningTopic','lessons-from-the-past');
  togglePast(restored,caseId,false,'reasoning-history-case');await restored.run('saveQueue');
  assert.equal(restored.run('state.reasoningPastTopic'),undefined,'Closing the bookmarked main case clears its saved position');
  togglePast(restored,caseId,true,'reasoning-history-case');await restored.run('saveQueue');
  savedHistory=JSON.parse(historyStore.get(key)).find(x=>x.lesson===readingId);assert.equal(savedHistory.reasoning.pastTopic,caseId,'Native main-case opening persists');
  restored.run("startLevel('cmc-stability',0)");const beforeOutside=restored.run('state.reasoningPastTopic');restored.click('pastLesson',caseId);
  assert.equal(restored.run('state.reasoningPastTopic'),beforeOutside,'Other chapters ignore main-case flow actions');
 }
 // The inserted bridge topic saves/restores without renumbering existing topic IDs.
 const bridgeStore=new Map(),bridge=await openGuide(undefined,{stored:bridgeStore});
 bridge.click('reasoningTopic','bridge-evidence');await bridge.run('saveQueue');
 assert.equal(JSON.parse(bridgeStore.get(key)).find(x=>x.lesson===readingId).reasoning.topic,'bridge-evidence');
 const bridgeRefresh=await openGuide(undefined,{stored:bridgeStore});
 assert.equal(bridgeRefresh.run('reasoningReadingTopic().id'),'bridge-evidence');assert.equal(bridgeRefresh.run('reasoningReadingIndex()'),1);
 assert(bridgeRefresh.node('#lesson').innerHTML.includes('reasoning-bridge'));assert(!bridgeRefresh.run('done('+JSON.stringify(readingId)+')'));
 bridgeRefresh.click('reasoningTopic','fda-requirements');bridgeRefresh.click('action','next');assert.equal(bridgeRefresh.run('reasoningReadingTopic().id'),'bridge-evidence');
 bridgeRefresh.click('action','next');assert.equal(bridgeRefresh.run('reasoningReadingTopic().id'),'ivacaftor-ind');
 bridgeRefresh.click('action','back');assert.equal(bridgeRefresh.run('reasoningReadingTopic().id'),'bridge-evidence');
 // Earlier map bookmarks receive the opening without losing existing completion.
 for(const topic of [undefined,'removed-topic'])for(const step of [1,2]){
  const legacyStore=new Map([[key,JSON.stringify([{lesson:readingId,step,completed:true,reasoning:{node:3,caseId:'old-case',...(topic?{topic}:{})}}])]]);
  const legacy=await openGuide('#small-molecule/'+readingId+'/'+step,{stored:legacyStore});
  assert.equal(legacy.run('state.step'),0);assert.equal(legacy.run('reasoningReadingTopic().id'),'fda-requirements');
  assert.equal(legacy.location.hash,'#small-molecule/'+readingId+'/0');assert(legacy.run('done('+JSON.stringify(readingId)+')'));
 }
 run("startLevel('nonclinical-pharmacology',0)");
 function readingKey(key){let prevented=false;const current=run('reasoningReadingTopic().id');for(const fn of handlers.keydown||[])fn({key,target:{closest:s=>s==='.reasoning-reading-tabs button'?{dataset:{reasoningTopic:current}}:null},preventDefault(){prevented=true}});assert(prevented);}
 for(const [key,index] of [['Home',0],['ArrowRight',1],['End',3],['ArrowRight',0],['ArrowLeft',3]]){readingKey(key);assert.equal(run('reasoningReadingIndex()'),index);}
 click('reasoningNode','2');click('reasoningCase','obsolete-case');click('lessonStep','2');assert.equal(run('state.step'),0);
 // A failed write cannot claim completion, and retrying can save it normally.
 const failure=await openGuide(undefined,{stored:new Map()});failure.click('reasoningTopic','lessons-from-the-past');await failure.run('saveQueue');failure.failures.write=true;
 await failure.run('completeReadingChapter()');assert.equal(failure.run('state.screen'),'lesson');assert(failure.run('state.saveError'));assert(!failure.run("done('nonclinical-pharmacology')"));
 failure.failures.write=false;await failure.run('completeReadingChapter()');assert.equal(failure.run('state.screen'),'complete');
 const chapters=run("LEVELS.filter(l=>l.reasoningGuide&&l.reasoningGuide.format!=='case-tabs')");assert.equal(chapters.length,8);
 const minimalIds=['nonclinical-pkpd','nonclinical-safety','nonclinical-package'];
 assert.deepEqual(Array.from(chapters.filter(l=>l.reasoningGuide.minimal),l=>l.id),minimalIds,'Three nonclinical chapters have a single overview');
 const assertReadingOnly=(guide,label)=>{
  const out=guide.node('#lesson').innerHTML;
  assert.equal(guide.run('state.step'),0,label+' stays on its reading surface');
  assert(!/reasoning-views|data-lesson-step=|name="answer"|reasoning-practice|reasoning-case-selector|data-reasoning-case=|data-action="(?:check|complete)"/.test(out),label+' has no outer lesson screens, example selector or exercise');
  assert(!/undefined|NaN/.test(out),label+' renders without missing values');
  return out;
 };
 let steps=0;
 for(const l of chapters){
  const id=JSON.stringify(l.id),g=l.reasoningGuide;
  run(`startLevel(${id},0)`);await run('saveQueue');
  assert.equal(l.question,undefined,'No exercise question is published for '+l.id);
  assert(run('isConceptChapter()'));assert(run('isReadOnlyChapter()'));
  assert(!run(`done(${id})`),'Opening '+l.id+' does not mark it complete');
  let out=assertReadingOnly({run,node},l.id);
  const finalNode=g.nodes.length-1;
  // The completion endpoint accepts an explicit acknowledgement only at the final reading position.
  for(const acknowledge of [undefined,false,'true'])await assert.rejects(run('request("/api/complete-concept",'+JSON.stringify({lesson:l.id,node:finalNode,acknowledge})+')'));
  for(const answer of [0,1,2])await assert.rejects(run('request("/api/complete",'+JSON.stringify({lesson:l.id,answer})+')'));
  if(g.minimal){
   assert(out.includes('reasoning-minimal'));assert(!/reasoning-rail|data-reasoning-node=/.test(out),'Minimal overview exposes no node navigation');
   assert.equal(run('readState().stepName'),'Overview');
   assert(out.includes('data-action="complete-concept"'));
   const before=out;click('reasoningNode','1');click('action','next');click('action','back');
   assert.equal(node('#lesson').innerHTML,before,'Single-page overview ignores obsolete node and next/back actions');
  }else{
   assert(out.includes('class="reasoning-rail"'));
   assert(!out.includes('data-action="complete-concept"'),'Completion is offered only on the last node');
   await run('completeConceptChapter()');assert.equal(run('state.screen'),'lesson');assert(!run(`done(${id})`));
   for(const invalidNode of [undefined,-1,0,g.nodes.length,'bad'])await assert.rejects(run('request("/api/complete-concept",'+JSON.stringify({lesson:l.id,acknowledge:true,node:invalidNode})+')'));
   for(let i=0;i<g.nodes.length;i++){
    click('reasoningNode',String(i));out=assertReadingOnly({run,node},l.id);
    assert.equal(run('reasoningIndex()'),i);assert.equal(run('readState().stepName'),g.nodes[i].label);
    assert(out.includes(escaped(g.nodes[i].question)));assert(out.includes('aria-current="step"'));
    assert(out.includes('FDA expectations &amp; scientific judgment'));
    assert.equal(out.includes('data-action="complete-concept"'),i===finalNode);
    assert(!run(`done(${id})`),'Reading navigation does not complete '+l.id);steps++;
   }
   for(const invalid of ['-1','99','bad'])click('reasoningNode',invalid);
   assert.equal(run('reasoningIndex()'),finalNode,'Invalid nodes are ignored');
   click('action','back');assert.equal(run('reasoningIndex()'),finalNode-1);assert.equal(run('state.step'),0);
   click('action','next');assert.equal(run('reasoningIndex()'),finalNode);assert.equal(run('state.step'),0);
   click('action','next');assert.equal(run('reasoningIndex()'),finalNode,'Next cannot open an exercise');
  }
  const caseBefore=run('state.reasoningCase');
  for(const c of g.cases)click('reasoningCase',c.id);
  assert.equal(run('state.reasoningCase'),caseBefore,'Legacy example actions are inactive');
  for(const oldStep of ['1','2']){click('lessonStep',oldStep);assertReadingOnly({run,node},l.id);}
  run('state.selected=0;state.feedback=true');await run('completeLevel()');
  assert.equal(run('state.screen'),'lesson');assert(!run(`done(${id})`),'The old quiz action cannot complete a reading chapter');
  await run('saveQueue');click('action','complete-concept');await run('saveQueue');
  assert.equal(run('state.screen'),'complete');assert(run(`done(${id})`));
  const completed=JSON.parse(stored.get(key)).find(x=>x.lesson===l.id);
  assert.equal(completed.step,0);assert.equal(completed.completionKind,'reading');
 }
 assert.equal(chapters.filter(l=>!l.reasoningGuide.minimal).length,5,'Five CMC and clinical chapters retain their reading nodes');
 // Every old example/exercise URL and saved position opens a reading page without losing completion.
 const allReadingChapters=run('LEVELS.filter(l=>l.reasoningGuide)');assert.equal(allReadingChapters.length,9);
 for(const l of allReadingChapters)for(const oldStep of [1,2])for(const completed of [false,true]){
  const id=JSON.stringify(l.id),legacyStore=new Map([[key,JSON.stringify([{lesson:l.id,step:oldStep,completed,reasoning:{node:1,caseId:'obsolete-case'}}])]]);
  const legacy=await openGuide('#small-molecule/'+l.id+'/'+oldStep,{stored:legacyStore});
  assertReadingOnly(legacy,l.id+' old route '+oldStep);
  assert.equal(legacy.location.hash,'#small-molecule/'+l.id+'/0');assert.equal(legacy.run(`done(${id})`),completed);
  const migrated=JSON.parse(legacyStore.get(key)).find(x=>x.lesson===l.id);
  assert.equal(migrated.step,0);assert.equal(migrated.completed,completed);
  if(!l.reasoningGuide.minimal&&l.reasoningGuide.format!=='case-tabs')assert.equal(legacy.run('reasoningIndex()'),1,'Saved reading node survives route migration');
 }
 for(const l of allReadingChapters){
  const savedStore=new Map([[key,JSON.stringify([{lesson:l.id,step:2,completed:false,reasoning:{node:1}}])]]);
  const resume=await openGuide('#small-molecule',{stored:savedStore});
  resume.run('startLevel('+JSON.stringify(l.id)+')');await resume.run('saveQueue');
  assertReadingOnly(resume,l.id+' saved progress');assert.equal(resume.location.hash,'#small-molecule/'+l.id+'/0');
  assert(!resume.run('done('+JSON.stringify(l.id)+')'),'Resuming a saved exercise does not complete the chapter');
 }
 for(const lesson of ['nonclinical-pharmacology','discovery-leads','unknown'])await assert.rejects(run('request("/api/complete-concept",'+JSON.stringify({lesson,acknowledge:true,node:0})+')'));
 // Storage failure leaves both minimal and multi-node chapters incomplete; explicit retry succeeds.
 for(const lesson of ['nonclinical-pkpd','cmc-stability']){
  const failed=await openGuide('#small-molecule/'+lesson+'/0',{stored:new Map()});
  if(!failed.run('Boolean(reasoningGuide().minimal)'))failed.click('reasoningNode',String(failed.run('reasoningGuide().nodes.length-1')));
  await failed.run('saveQueue');failed.failures.write=true;
  await failed.run('completeConceptChapter()');assert.equal(failed.run('state.screen'),'lesson');assert(failed.run('state.saveError'));
  assert(!failed.run('state.saving'));assert(!failed.run('done('+JSON.stringify(lesson)+')'));
  assert(failed.node('#lesson').innerHTML.includes('data-action="complete-concept"'),'Failed completion remains retryable');
  failed.failures.write=false;await failed.run('completeConceptChapter()');assert.equal(failed.run('state.screen'),'complete');
  assert.equal(failed.run('state.progress['+JSON.stringify(lesson)+'].completionKind'),'reading');
 }
 run("startLevel('cmc-stability',0)");click('reasoningNode','1');await run('saveQueue');
 let saved=JSON.parse(stored.get(key)).find(x=>x.lesson==='cmc-stability');assert.equal(saved.reasoning.node,1);
 const refreshed=await openGuide('#small-molecule/cmc-stability/0');assert.equal(refreshed.run('state.reasoningNode'),1);assert(refreshed.run("done('cmc-stability')"));
 refreshed.click('lessonStep','1');refreshed.click('reasoningCase',refreshed.run('reasoningGuide().cases[1].id'));await refreshed.run('saveQueue');
 const revisited=await openGuide('#small-molecule/cmc-stability/1');assert.equal(revisited.run('reasoningIndex()'),1);assertReadingOnly(revisited,'Completed chapter revisit');
 assert.equal(revisited.run('countDone()'),9,'Reading completion survives topic changes and legacy example links');
 run("startLevel('cmc-stability',0)");click('reasoningNode','0');
 let prevented=false;const btn={dataset:{reasoningNode:'0'}};
 for(const fn of handlers.keydown||[])fn({key:'End',target:{closest:s=>s==='.reasoning-rail [data-reasoning-node]'?btn:null},preventDefault(){prevented=true}});
 assert(prevented);assert.equal(run('reasoningIndex()'),run('reasoningGuide().nodes.length-1'));
 run("startLevel('discovery-leads',0)");const previous=run('state.reasoningNode');click('reasoningNode','1');assert.equal(run('state.reasoningNode'),previous,'Other chapters ignore map actions');const readingBefore=run('state.reasoningTopic');click('reasoningTopic','drug-action');assert.equal(run('state.reasoningTopic'),readingBefore);
 // Clear through the existing UI path: it clears nested positions as well as completions.
 revisited.run('confirmProgressReset()');await revisited.run('resetLearningProgress()');assert.equal(stored.has(key),false);revisited.run("startLevel('nonclinical-pharmacology',0)");assert(revisited.run('reasoningOpeningActive()'),'Reset restores the opening topic');assert.equal(revisited.run('reasoningReadingTopic().id'),'fda-requirements');assert.equal(revisited.run('countDone()'),0);
 console.log('PASS: four pharmacology tabs, bridge-topic save/restore, ivacaftor source comparison, three connected historical lessons, 26 archived cases, three minimal overviews, '+steps+' CMC/clinical reading nodes, nine explicit reading completions, legacy routes and progress migration, storage failure/retry, keyboard navigation, refresh and reset.');
})().catch(e=>{console.error(e);process.exitCode=1;});

const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('dist/index.html','utf8');
const script=html.match(/<script data-local-bundle>\n([\s\S]*?)\n<\/script>/)[1];
const key='first-in-class-progress',stored=new Map();
async function openGuide(hash='#small-molecule/nonclinical-pharmacology/0',options={}){
 const backing=options.stored||stored, failures={write:false};
 const nodes=new Map(),handlers={};
 const node=s=>{if(!nodes.has(s))nodes.set(s,{innerHTML:'',dataset:{},open:false,focus(){this.focused=true},scrollIntoView(){},setAttribute(k,v){this[k]=v},addEventListener(){},showModal(){this.open=true},close(){this.open=false},classList:{toggle(){},add(){},remove(){}}});return nodes.get(s);};
 const location={protocol:'file:',hash},storage={getItem:k=>backing.get(k)??null,setItem:(k,v)=>{if(failures.write)throw Error('Storage quota exceeded');backing.set(k,v)},removeItem:k=>backing.delete(k)};
 const ctx=vm.createContext({console,setTimeout,clearTimeout,location,history:{pushState(a,b,h){location.hash=h},replaceState(a,b,h){location.hash=h}},window:{localStorage:storage,sessionStorage:storage,addEventListener(){},matchMedia:()=>({matches:false,addEventListener(){}}),scrollTo(){}},document:{querySelector:node,querySelectorAll:()=>[],addEventListener(k,f){(handlers[k]??=[]).push(f)},body:{classList:{toggle(){}}}},fetch(){throw Error('No network needed for the local guide');}});
 const run=s=>vm.runInContext(s,ctx);
 const click=(key,value)=>{const b={dataset:{[key]:value}},selector='[data-'+key.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())+']';for(const f of handlers.click||[])f({target:{closest:s=>s===selector?b:null}});};
 run(script);await run('ready');run('dismissWelcome()');await run('saveQueue');return {run,node,click,handlers,location,failures};
}
(async()=>{
 const {run,node,click,handlers}=await openGuide();
 const readingId='nonclinical-pharmacology';
 const topicIds=['fda-requirements','ivacaftor-ind','lessons-from-the-past'];
 const pastIds=['existing-evidence','drug-action','possible-benefit','patient-selection','measured-benefit'];
 assert.equal(run('reasoningGuide().format'),'case-tabs');
 assert.equal(JSON.stringify(run('reasoningReadingTopics().map(t=>t.id)')),JSON.stringify(topicIds));
 assert.equal(JSON.stringify(run('reasoningGuide().readingTopics.map(t=>t.id)')),JSON.stringify(pastIds));
 for(const removed of ['nodes','cases','exercise'])assert.equal(run('reasoningGuide()['+JSON.stringify(removed)+']'),undefined);
 assert(run('reasoningOpeningActive()'));assert(node('#lesson').innerHTML.includes('What must the IND explain?'));
 for(const source of run('reasoningGuide().opening.sources'))assert(run('level().sources.some(s=>s.url==='+JSON.stringify(source.url)+')'));
 const escaped=value=>run('escapeHtml('+JSON.stringify(value)+')');
 const archiveOpenGroup=(out,id)=>{
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
  assert.equal((tabNav.match(/data-reasoning-topic=/g)||[]).length,3,'Exactly three top-level topics');
  for(const old of pastIds)assert(!tabNav.includes('data-reasoning-topic="'+old+'"'),'Historical groups are not top-level tabs');
  assert(!/reasoning-views|data-lesson-step|class="reasoning-rail"|name="answer"|Your revised argument/.test(out));
  assert(!/undefined|NaN/.test(out));assert.equal(run('state.step'),0);
  assert(out.includes('data-reasoning-topic="'+id+'" aria-pressed="true"'));
  assert.equal(out.includes('data-action="complete-reading"'),i===2);
  assert(!run("done('nonclinical-pharmacology')"),'Reading navigation must not complete the chapter');
  if(id==='ivacaftor-ind'){
   const worked=run('reasoningGuide().workedCase');assert.equal(worked.id,id);
   assert.equal(worked.label,'Ivacaftor: follow the evidence');
   for(const removed of ['reports','firstStudy','review'])assert.equal(worked[removed],undefined,'Replaced field stays removed: '+removed);
   assert(out.includes('reasoning-ind-case'),'Ivacaftor remains one coherent worked-case surface');
   const workedStart=out.indexOf('<article class="reasoning-ind-case"');assert(workedStart>=0);
   const workedHtml=out.slice(workedStart,out.indexOf('</article>',workedStart)+10);
   const caseParts=[...workedHtml.matchAll(/<details\b([^>]*\breasoning-case-part\b[^>]*)>([\s\S]*?)<\/details>/g)];
   assert.equal(caseParts.length,3,'Discovery, source comparison and FDA assessment are three native disclosures');
   const partBodies=caseParts.map((part,index)=>{
    assert(!/(?:^|\s)open(?:\s|=|$)/.test(part[1]),'Each case part starts closed');
    assert(!/(?:^|\s)name\s*=/.test(part[1]),'Case parts can open independently');
    const summary=part[2].match(/^\s*<summary\b[^>]*class="[^"]*\breasoning-case-part-heading\b[^"]*"[^>]*>([\s\S]*?)<\/summary>/);
    assert(summary,'Each disclosure starts with its native summary');
    const title=[worked.discovery.title,worked.comparison.title,worked.assessment.title][index];
    assert(summary[1].includes('<h3>'+escaped(title)+'</h3>'),'Summary titles retain discovery, comparison, assessment order');
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
   const discovery=worked.discovery;assert.equal(discovery.claims.length,3);
   assert(partBodies[0].includes(escaped(discovery.limit)));
   for(const claim of discovery.claims){assert(partBodies[0].includes(escaped(claim.label)));assert(partBodies[0].includes(escaped(claim.text)));}
   sourceShown(discovery.source,partBodies[0]);
   const comparison=worked.comparison;assert.equal(comparison.rows.length,3);
   assert(partBodies[1].includes(escaped(comparison.intro)));assert(partBodies[1].includes(escaped(comparison.note)));
   const tableMatch=partBodies[1].match(/<table\b[^>]*class="[^"]*reasoning-source-comparison[^"]*"[^>]*>([\s\S]*?)<\/table>/);
   assert(tableMatch,'Scientific comparison uses a semantic table');
   const table=tableMatch[1],head=table.match(/<thead\b[^>]*>([\s\S]*?)<\/thead>/);assert(head,'Comparison table has a header');
   assert.equal((head[1].match(/<th\b/g)||[]).length,3,'Question, discovery paper, initial IND review');
   const bodies=[...table.matchAll(/<tbody\b[^>]*>([\s\S]*?)<\/tbody>/g)];
   assert.equal(bodies.length,3,'Each scientific question and interpretation form one row group');
   for(const body of bodies){
    assert.equal((body[1].match(/<tr\b/g)||[]).length,2,'Evidence row followed by its interpretation');
    assert.equal((body[1].match(/<th\b[^>]*scope="row"/g)||[]).length,1,'Scientific question is a row header');
    assert.equal((body[1].match(/<td\b(?![^>]*colspan)/g)||[]).length,2,'Paper and IND evidence have separate cells');
    assert.equal((body[1].match(/<td\b[^>]*colspan="3"/g)||[]).length,1,'Interpretation spans the comparison row');
   }
   for(const [rowIndex,row] of comparison.rows.entries()){
    const rowGroup=bodies[rowIndex][1];
    assert(rowGroup.includes(escaped(row.question)),row.id+' shows the scientific question in its row group');
    assert.match(row.paper.source.url,/doi\.org\/10\.1021\/jm5012808$/);
    assert.match(row.ind.source.url,/accessdata\.fda\.gov.*#page=(85|86)$/);
    for(const side of ['paper','ind']){
     assert(rowGroup.includes(escaped(row[side].text)),row.id+' shows '+side+' evidence in its row group');
     sourceShown(row[side].source,rowGroup);
    }
    assert(rowGroup.indexOf(escaped(row.paper.text))<rowGroup.indexOf(escaped(row.ind.text)),row.id+' keeps paper before IND evidence');
    assert(rowGroup.includes(escaped(row.addition.label)),row.id+' shows its interpretation label');
    assert(rowGroup.includes(escaped(row.addition.text)),row.id+' explains what the review adds in the same row group');
   }
   const assessment=worked.assessment;assert.equal(assessment.items.length,3);
   for(const item of assessment.items){assert(partBodies[2].includes(escaped(item.label)));assert(partBodies[2].includes(escaped(item.text)));}
   sourceShown(assessment.source,partBodies[2]);
   assert(workedHtml.includes(escaped(worked.stage)),'Initial IND provenance remains visible');
   assert(fs.existsSync('dist/'+worked.image),'Worked-case molecular structure exists');assert(workedHtml.includes(escaped(worked.imageAlt)));
   assert(out.includes('target="_blank" rel="noopener noreferrer"'));
  }
  if(id==='lessons-from-the-past'){
   assert.equal((out.match(/<details\b[^>]*\breasoning-past-topic\b/g)||[]).length,5);
   for(const topic of run('reasoningGuide().readingTopics')){
    assert.equal(topic.cases.length,2);assert(out.includes(escaped(topic.label)));assert(out.includes(escaped(topic.principle)));
    for(const c of [...topic.cases,...topic.moreCases]){
     for(const field of ['stage','limit','modality','lesson'])assert(out.includes(escaped(c[field])),c.id+' displays '+field);
     if(c.steps)for(const step of c.steps)assert(out.includes(escaped(step.text)),c.id+' retains its concrete sequence');
     if(c.finding)assert(out.includes(escaped(c.finding)),c.id+' retains its finding');
     for(const source of c.sources){assert(/#page=\d+/.test(source.url));assert(out.includes(source.url.replace(/&/g,'&amp;')));}
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
  ...['fda-requirements','ivacaftor-ind',...pastIds].map(topic=>({lesson:readingId,topic,acknowledge:true})),
  {lesson:readingId,topic:'lessons-from-the-past'},
  {lesson:readingId,topic:'lessons-from-the-past',acknowledge:false},
  {lesson:readingId,topic:'lessons-from-the-past',acknowledge:'true'},
  {lesson:'cmc-stability',topic:'lessons-from-the-past',acknowledge:true}
 ])await assert.rejects(run('request("/api/complete-reading",'+JSON.stringify(body)+')'));
 await assert.rejects(run('request("/api/complete",{lesson:"nonclinical-pharmacology",answer:0})'));
 click('reasoningTopic','ivacaftor-ind');await run('completeReadingChapter()');assert.equal(run('state.screen'),'lesson');
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
 function togglePast(guide,id,open){for(const fn of guide.handlers.toggle||[])fn({target:{dataset:{pastTopic:id},open,matches:s=>s==='.reasoning-past-topic'}});}
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
 // Earlier map bookmarks receive the opening without losing existing completion.
 for(const topic of [undefined,'removed-topic'])for(const step of [1,2]){
  const legacyStore=new Map([[key,JSON.stringify([{lesson:readingId,step,completed:true,reasoning:{node:3,caseId:'old-case',...(topic?{topic}:{})}}])]]);
  const legacy=await openGuide('#small-molecule/'+readingId+'/'+step,{stored:legacyStore});
  assert.equal(legacy.run('state.step'),0);assert.equal(legacy.run('reasoningReadingTopic().id'),'fda-requirements');
  assert.equal(legacy.location.hash,'#small-molecule/'+readingId+'/0');assert(legacy.run('done('+JSON.stringify(readingId)+')'));
 }
 run("startLevel('nonclinical-pharmacology',0)");
 function readingKey(key){let prevented=false;const current=run('reasoningReadingTopic().id');for(const fn of handlers.keydown||[])fn({key,target:{closest:s=>s==='.reasoning-reading-tabs button'?{dataset:{reasoningTopic:current}}:null},preventDefault(){prevented=true}});assert(prevented);}
 for(const [key,index] of [['Home',0],['ArrowRight',1],['End',2],['ArrowRight',0],['ArrowLeft',2]]){readingKey(key);assert.equal(run('reasoningReadingIndex()'),index);}
 click('reasoningNode','2');click('reasoningCase','obsolete-case');click('lessonStep','2');assert.equal(run('state.step'),0);
 // A failed write cannot claim completion, and retrying can save it normally.
 const failure=await openGuide(undefined,{stored:new Map()});failure.click('reasoningTopic','lessons-from-the-past');await failure.run('saveQueue');failure.failures.write=true;
 await failure.run('completeReadingChapter()');assert.equal(failure.run('state.screen'),'lesson');assert(failure.run('state.saveError'));assert(!failure.run("done('nonclinical-pharmacology')"));
 failure.failures.write=false;await failure.run('completeReadingChapter()');assert.equal(failure.run('state.screen'),'complete');
 const chapters=run("LEVELS.filter(l=>l.reasoningGuide&&l.reasoningGuide.format!=='case-tabs')");assert.equal(chapters.length,8);
 let steps=0,cases=0;
 for(const l of chapters){
  run(`startLevel(${JSON.stringify(l.id)},0)`);
  const g=l.reasoningGuide;
  for(let i=0;i<g.nodes.length;i++){
   click('reasoningNode',String(i));const out=node('#lesson').innerHTML;
   assert.equal(run('state.reasoningNode'),i);assert(out.includes(g.opening?'reasoning-topic-tabs':'reasoning-rail'));assert(out.includes(run('escapeHtml(reasoningGuide().nodes['+i+'].question)')));
   assert(out.includes('aria-current="step"'));assert(!/undefined|NaN/.test(out));
   if(g.opening){assert(out.indexOf('reasoning-views')<out.indexOf('reasoning-topic-tabs'));assert(!out.includes('class="reasoning-rail"'));}else assert(out.indexOf('reasoning-rail')<out.indexOf('reasoning-views'));
   for(const c of g.cases)assert(!out.includes('data-reasoning-case="'+c.id+'"'),'Cases remain in their own view');
   assert(out.includes('FDA expectations &amp; scientific judgment'));steps++;
  }
  for(const invalid of ['-1','99','bad'])click('reasoningNode',invalid);
  assert.equal(run('state.reasoningNode'),g.nodes.length-1,'Invalid map steps are ignored');
  click('lessonStep','1');assert.equal(run('state.step'),1);
  for(const c of g.cases){
   click('reasoningCase',c.id);const out=node('#lesson').innerHTML;
   assert.equal(run('state.reasoningCase'),c.id);assert.equal(run('state.reasoningNode'),c.mapFocus);
   assert(out.includes(run('escapeHtml(reasoningCase().stage)')));assert(out.includes(run('escapeHtml(reasoningCase().uncertain)')));
   assert(out.includes('Decision it informs'));assert(!/undefined|NaN/.test(out));
   for(const s of c.sources){assert(out.includes(s.url.replace(/&/g,'&amp;')));assert(s.url.includes('#page='),'Case links retain a source page');}
   assert(out.includes('target="_blank" rel="noopener noreferrer"'));cases++;
  }
  click('reasoningCase','unknown');assert.equal(run('state.reasoningCase'),g.cases[1].id);
  click('lessonStep','2');assert.equal(run('state.step'),2);
  const correct=g.exercise.options.findIndex(o=>o.correct),wrong=(correct+1)%3;
  run('state.selected='+wrong+';checkAnswer()');assert(node('#lesson').innerHTML.includes('Reconsider the connection.'));
  assert(!node('#lesson').innerHTML.includes('Your revised argument'));await run('completeLevel()');assert.equal(run('state.screen'),'lesson');
  run('state.selected='+correct+';checkAnswer()');assert(node('#lesson').innerHTML.includes('Your revised argument'));
  for(const field of ['claim','support','uncertainty','next'])assert(node('#lesson').innerHTML.includes(run('escapeHtml(reasoningGuide().exercise.result.'+field+')')));
  await run('completeLevel()');assert.equal(run('state.screen'),'complete');assert(run('done('+JSON.stringify(l.id)+')'));
 }
 assert.equal(steps,31);assert.equal(cases,16);
 run("startLevel('cmc-stability',0)");click('reasoningNode','1');await run('saveQueue');
 let saved=JSON.parse(stored.get(key)).find(x=>x.lesson==='cmc-stability');assert.equal(saved.reasoning.node,1);
 const refreshed=await openGuide('#small-molecule/cmc-stability/0');assert.equal(refreshed.run('state.reasoningNode'),1);assert(refreshed.run("done('cmc-stability')"));
 refreshed.click('lessonStep','1');refreshed.click('reasoningCase',refreshed.run('reasoningGuide().cases[1].id'));await refreshed.run('saveQueue');
 const revisited=await openGuide('#small-molecule/cmc-stability/1');assert.equal(revisited.run('reasoningCase().id'),revisited.run('reasoningGuide().cases[1].id'));
 assert.equal(revisited.run('countDone()'),9,'Reading and exercise completion survive topic and case changes');
 run("startLevel('cmc-stability',0)");click('reasoningNode','0');
 let prevented=false;const btn={dataset:{reasoningNode:'0'}};
 for(const fn of handlers.keydown||[])fn({key:'End',target:{closest:s=>s==='.reasoning-rail [data-reasoning-node]'?btn:null},preventDefault(){prevented=true}});
 assert(prevented);assert.equal(run('reasoningIndex()'),run('reasoningGuide().nodes.length-1'));
 run("startLevel('discovery-leads',0)");const previous=run('state.reasoningNode');click('reasoningNode','1');assert.equal(run('state.reasoningNode'),previous,'Other chapters ignore map actions');const readingBefore=run('state.reasoningTopic');click('reasoningTopic','drug-action');assert.equal(run('state.reasoningTopic'),readingBefore);
 // Clear through the existing UI path: it clears nested positions as well as completions.
 revisited.run('confirmProgressReset()');await revisited.run('resetLearningProgress()');assert.equal(stored.has(key),false);revisited.run("startLevel('nonclinical-pharmacology',0)");assert(revisited.run('reasoningOpeningActive()'),'Reset restores the opening topic');assert.equal(revisited.run('reasoningReadingTopic().id'),'fda-requirements');assert.equal(revisited.run('countDone()'),0);
 console.log('PASS: three reading tabs, one three-part ivacaftor source comparison, 26 archived cases, legacy topic migration, explicit reading completion, eight exercises, 31 reasoning steps, 16 original cases, legacy routes, storage recovery, keyboard navigation, refresh and reset.');
})().catch(e=>{console.error(e);process.exitCode=1;});

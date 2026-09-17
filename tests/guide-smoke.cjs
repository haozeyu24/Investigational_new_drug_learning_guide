const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync('dist/index.html','utf8');
assert(!/<script[^>]+src=/.test(html));assert(!/href="styles\.css/.test(html));
const script=html.match(/<script data-local-bundle>\n([\s\S]*?)\n<\/script>/)[1];
assert.equal(script,['content.js','catalog.js','reasoning-content.js','reasoning.js','app.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n;\n'));
assert(html.includes(fs.readFileSync('dist/styles.css','utf8')));
const handlers={},nodes=new Map(),stored=new Map([['first-in-class-progress',JSON.stringify([{lesson:'discovery-target',completed:true,step:2}])]]);
const node=s=>{if(!nodes.has(s))nodes.set(s,{innerHTML:'',dataset:{},open:false,focus(){this.focused=true},scrollIntoView(){},setAttribute(k,v){this[k]=v},addEventListener(){},showModal(){this.open=true},close(){this.open=false},classList:{toggle(){},add(){},remove(){}}});return nodes.get(s)};
const location={protocol:'file:',hash:'#portal'},storage={getItem:k=>stored.get(k)??null,setItem:(k,v)=>stored.set(k,v),removeItem:k=>stored.delete(k)};
const ctx=vm.createContext({location,history:{pushState(a,b,h){location.hash=h},replaceState(a,b,h){location.hash=h}},console,setTimeout,clearTimeout,window:{localStorage:storage,sessionStorage:storage,addEventListener(){},matchMedia:()=>({matches:false,addEventListener(){}}),scrollTo(){}},document:{querySelector:node,querySelectorAll:()=>[],addEventListener(k,fn){(handlers[k]??=[]).push(fn)},body:{classList:{toggle(){}}}},fetch(){throw Error('Unexpected network request')}});
const run=s=>vm.runInContext(s,ctx);
function click(key,id){const btn={dataset:{[key]:id}},selector='[data-'+key.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())+']';const target={closest:q=>q===selector?btn:null};for(const fn of handlers.click)fn({target});}
(async()=>{
 vm.runInContext(script,ctx);await run('ready');assert(node('#modal').open,'Welcome opens');
 run('dismissWelcome()');assert(!node('#modal').open);
 run("startLevel('discovery-leads',1)");await run('saveQueue');
 const beforeWelcome=run('JSON.stringify(state.progress)');click('action','welcome');
 assert.equal(run('state.screen'),'portal','Brand returns to the main landing page');assert.equal(location.hash,'#portal');
 assert(node('#modal').open,'Brand reopens welcome over the landing page');assert.equal(run('JSON.stringify(state.progress)'),beforeWelcome,'Returning home preserves progress');
 assert(html.includes('data-action="welcome" aria-haspopup="dialog"'));run('dismissWelcome()');
 run("startLevel('discovery-leads',0)");await run('saveQueue');assert(node('#lesson').innerHTML.includes('id="lead-topic-panel"'));
 assert.equal(run('level().leadGuide.topics.length'),6);assert(!node('#lesson').innerHTML.includes('Where tool compounds fit'));click('leadTopic','tool-compound');assert.equal(run('state.leadTopic'),'tool-compound');assert(node('#lead-topic-panel').innerHTML.includes('Where tool compounds fit'));assert(node('#lead-topic-panel').innerHTML.includes('Choosing probe controls'));assert(node('#lead-topic-panel').innerHTML.includes('Requirements for animal studies'));

 assert.equal(run("level().leadGuide.topics.some(t=>t.id==='adme'||t.id==='pkpd')"),false);
 click('leadTopic','testing');assert(node('#lead-topic-panel').innerHTML.includes('A promising series needs more than potency'));
 assert(node('#lead-topic-panel').innerHTML.includes('data-level="discovery-optimization"'));
 click('leadTopic','adme');assert.equal(run('state.leadTopic'),'testing');
 run("startLevel('discovery-optimization',0)");
 assert(node('#lesson').innerHTML.includes('Place the stage'));
 const topicIds=['stages','profile','balance','developability','optimization'];
 assert.equal(run('level().leadGuide.topics.map(t=>t.id).join(",")'),topicIds.join(','));
 for(let i=0;i<topicIds.length;i++){
  click('leadTopic',topicIds[i]);const out=node('#lead-topic-panel').innerHTML;assert(!/undefined|NaN/.test(out));
  if(i>0)assert(out.includes('data-lead-topic="'+topicIds[i-1]+'"'));
  if(i<4)assert(out.includes('data-lead-topic="'+topicIds[i+1]+'"'));
 }
 click('leadTopic','profile');assert(node('#lead-topic-panel').innerHTML.includes('vertex-liability-table'));assert(node('#lead-topic-panel').innerHTML.includes('Use hit-to-lead findings to decide'));assert(node('#lead-topic-panel').innerHTML.includes('See the example for details'));
 assert(!node('#lead-topic-panel').innerHTML.includes('Compound 48'));
 const profile=node('#lead-topic-panel').innerHTML;assert(profile.includes('profile-timeline'));assert(!profile.includes('data-profile-step'));assert(!profile.includes('profile-flow-panel'));
 for(const step of run('level().leadGuide.topics.find(t=>t.id==="profile").profileFlow')){assert(profile.includes(step.label));assert(profile.includes(step.brief));}
 run("state.hitProgram='imatinib';state.hitStage='properties'");click('showLeadExample','ivacaftor');assert.equal(run('state.step'),1);assert.equal(run('state.hitProgram'),'ivacaftor');assert.equal(run('state.hitStage'),'lead-profile');assert(node('#lesson').innerHTML.includes('Define what lead 16 still needs'));
 run("startLevel('discovery-optimization',0)");
 click('leadTopic','balance');const balance=node('#lead-topic-panel').innerHTML;
 assert(balance.includes('balance-parent'));assert(balance.includes('Lead optimization'));
 assert.equal((balance.match(/data-balance-dimension=/g)||[]).length,4);
 assert(!/Vertex|balance-vertex|85.6 mL/.test(balance));

 assert(!balance.includes('data-vertex-profile'));
 for(const d of run('level().leadGuide.topics.find(t=>t.id==="balance").dimensions')){
  click('balanceDimension',d.id);assert.equal(run('state.balanceDimension'),d.id);
  const out=node('#balance-dimension-panel').innerHTML;assert(out.includes(d.question));assert(out.includes(d.interpret));assert(out.includes(d.nextDesign));for(const m of d.measures)assert(out.includes(m));assert(!out.includes('<details'));assert(!out.includes('Explore the considerations'));assert(out.includes('How it guides SAR'));assert(out.includes(d.tradeoff));assert(!out.includes('undefined'));
  for(const n of d.sources)assert(run('Boolean(level().sources['+n+']?.url)'));
 }
 click('balanceDimension','invalid');assert.equal(run('state.balanceDimension'),'safety');
 click('leadTopic','profile');click('balanceDimension','activity');assert.equal(run('state.balanceDimension'),'safety');
 click('leadTopic','optimization');assert(node('#lead-topic-panel').innerHTML.includes('data-level="candidate-nomination"'));
 run("startLevel('discovery-leads',0)");assert.equal(run('state.leadTopic'),undefined);
 click('leadTopic','sar');assert(node('#lead-topic-panel').innerHTML.includes('sar-cycle-panel'));assert(node('#lead-topic-panel').innerHTML.includes('id="sar-visual-panel"'));
 for(const id of ['edit','measure','decide']){
  click('sarPrinciple',id);const out=node('#sar-visual-panel').innerHTML;
  assert(out.includes(id==='edit'?'vertex-hit-analog-16.svg':id==='measure'?'vertex-response':'vertex-next-tests'));
  assert(!out.includes('undefined'));assert(!out.includes('<details open'));assert(out.includes('target="_blank"'));
  if(id==='measure'){assert(out.includes('61-fold'));assert(out.includes('7.5-fold'));assert(out.includes('fourfold'));assert.equal((out.match(/class="vertex-reason-card"/g)||[]).length,3);}
  if(id==='decide'){assert(out.includes('11%'));assert(out.includes('0.9-hour'));assert.equal((out.match(/<details>/g)||[]).length,3);assert(out.includes('priorities for further optimization'));}
 }
 click('sarPrinciple','edit');
 const expected={'7':'1.3 ± 0.3 µM','8':'0.2 ± 0.1 µM','9':'8.5 ± 1.1 µM','10':'1.5 ± 0.4 µM','11':'0.2 ± 0.05 µM','12':'0.8 ± 0.02 µM','13':'0.2 ± 0.05 µM','14':'0.8 ± 0.3 µM','15':'6.1 ± 0.9 µM','16':'0.1 ± 0.06 µM'};
 const out=node('#sar-visual-panel').innerHTML;
 assert.equal((out.match(/<figure class="vertex-molecule/g)||[]).length,10);
 assert.equal((out.match(/class="vertex-potency"/g)||[]).length,10);
 assert(!out.includes('<details'));assert(!out.includes('vertex-hit1-amine.svg'));assert(!out.includes('vertex-analog"'));
 for(const [id,value] of Object.entries(expected)){
  assert(out.includes(value));assert(out.includes('vertex-hit-analog-'+id+'.svg'));assert(fs.existsSync('dist/assets/vertex-hit-analog-'+id+'.svg'));
 }
 assert(out.includes('Para isopropyl'));assert(!out.includes('tert-butyl'));
 const before=node('#sar-visual-panel').innerHTML;click('sarPrinciple','invalid');assert.equal(before,node('#sar-visual-panel').innerHTML);
 for(const t of run('level().leadGuide.topics')){click('leadTopic',t.id);assert(!node('#lead-topic-panel').innerHTML.includes('undefined'));}
 assert(run("state.progress['discovery-target'].completed"));
 run("startLevel('discovery-leads',0)");
 for(const id of ['2','1','0']){click('lessonStep',id);assert.equal(run('state.step'),Number(id));assert(node('#lesson').innerHTML.includes('data-lesson-step="'+id+'" aria-current="step"'));}
 assert(!node('#lesson').innerHTML.includes('THE CONCEPT'));assert(!node('#lesson').innerHTML.includes('class="lesson-meta"'));assert.equal((node('#lesson').innerHTML.match(/<h1>/g)||[]).length,1);
 click('lessonStep','9');assert.equal(run('state.step'),0);
 assert(run("state.progress['discovery-target'].completed"));
 let renders=0;for(const id of run('LEVELS.map(l=>l.id)'))for(let step=0;step<(run('LEVELS.find(l=>l.id==='+JSON.stringify(id)+').reasoningGuide?.format')==='case-tabs'?1:3);step++){
  run(`state.lesson='${id}';state.step=${step};state.hitProgram=undefined;state.hitStage=undefined;state.leadTopic=undefined;state.selected=null;state.feedback=false`);assert(!run('lessonView()').includes('undefined'));renders++;
 }
 run("startLevel('discovery-optimization',1);state.vertexDecisions=undefined");
 assert.equal(run('hitProgram().stages.length'),3);
 const coverage=new Set();let checked=0;
 for(const stageId of ['profile','candidate']){
  click('hitStage',stageId);
  const stage=run('hitProgram().stages.find(s=>s.id===state.hitStage)');
  const page=node('#hit-example-panel').innerHTML;
  assert(page.includes('vertex-opt-nav'));assert.equal((page.match(/aria-controls="vertex-opt-detail"/g)||[]).length,stage.decisions.length);
  for(const d of stage.decisions){
   click('vertexDecision',d.id);assert.equal(run('state.vertexDecisions[state.hitStage]'),d.id);
   const out=node('#vertex-opt-detail').innerHTML;
   assert(out.includes(d.title));assert(out.includes(d.action));assert(out.includes(d.limit));
   assert(!/undefined|NaN/.test(out));
   for(const r of d.table.rows)for(const v of r){assert(out.includes(run("escapeHtml("+JSON.stringify(v)+")")),'Missing table value '+v);if(stageId==='profile'&&/^\d+$/.test(r[0]))coverage.add(Number(r[0]));}
   assert(out.includes('https://doi.org/10.1021/jm5012808'));assert(out.includes('target="_blank" rel="noopener noreferrer"'));
   if(d.figure){assert(fs.existsSync('dist/'+d.figure.src));assert(out.includes(d.figure.src));}
   if(d.id==='compare'){assert.equal((out.match(/class="evidence-selected"/g)||[]).length,1);assert(out.includes('48 · selected'));}
   if(d.id==='exposure'){assert(!out.includes('evidence-selected'));assert(out.includes('13.5'));}
   checked++;
  }
  const vertexBefore=node('#vertex-opt-detail').innerHTML;click('vertexDecision','invalid');assert.equal(node('#vertex-opt-detail').innerHTML,vertexBefore);
 }
 for(let n=16;n<=48;n++)assert(coverage.has(n),'Missing compound '+n);
 click('hitStage','profile');assert(node('#hit-example-panel').innerHTML.includes('Use a potency plateau'));
 click('hitStage','lead-profile');const vertexBefore=node('#vertex-opt-detail').innerHTML;click('vertexDecision','compare');assert.equal(node('#vertex-opt-detail').innerHTML,vertexBefore);
 run("startLevel('discovery-leads',1)");click('vertexDecision','compare');assert.equal(node('#vertex-opt-detail').innerHTML,vertexBefore);
 run("startLevel('discovery-optimization',0)");click('vertexDecision','compare');assert.equal(node('#vertex-opt-detail').innerHTML,vertexBefore);
 console.log('PASS: '+checked+' new decision views; every compound 16–48 represented; all table values render; original assets exist; source links open separately; selected-row highlighting and invalid/out-of-context actions checked.');


 run("startLevel('discovery-optimization',1)");
 let molecularCards=0;
 for(const stageId of ['profile','candidate']){
  click('hitStage',stageId);
  for(const d of run('hitProgram().stages.find(s=>s.id===state.hitStage).decisions')){
   if(!d.molecules)continue;
   click('vertexDecision',d.id);const markup=node('#vertex-opt-detail').innerHTML;
   assert.equal((markup.match(/alt="Compound /g)||[]).length,d.molecules.length);
   for(const m of d.molecules){assert(fs.existsSync('dist/'+m.src));assert(markup.includes(m.src));assert(markup.includes(m.activity));molecularCards++;}
   if(stageId==='profile'){assert(markup.includes('Original paper table'));assert(markup.includes(d.figure.src));}
  }
 }
 console.log('PASS: '+molecularCards+' structure cards render with activity, valid assets and preserved original references.');

  run("startLevel('discovery-optimization',1)");
 const ids=['baseline','core','rings','substitutions','ringopen','phenol','compare','confirm'];
 assert.equal(run('VERTEX_EXAMPLE_TABS.map(t=>t[0]).join(",")'),ids.join(','));
 const nodes=run('VERTEX_OVERVIEW_NODES');assert.equal(nodes.length,9);
 assert.deepEqual([...new Set(nodes.map(n=>n.tab))],ids);
 for(const n of nodes){
  click('vertexExampleTab',n.tab);const out=node('#hit-program-panel').innerHTML;
  assert.equal(run('vertexCurrentExampleTab()'),n.tab);
  assert(out.indexOf('vertex-overview-diagram')<out.indexOf('role="tablist"'));
  assert.equal((out.match(/role="tab"/g)||[]).length,8);
  const diagram=run('vertexOverviewDiagram()');
  const buttons=[...diagram.matchAll(/<button\b[^>]*data-vertex-diagram-node="([^"]+)"[^>]*data-vertex-example-tab="([^"]+)"[^>]*aria-pressed="([^"]+)"[\s\S]*?<\/button>/g)];
  assert.equal(buttons.length,9);
  for(const b of buttons){assert.equal(b[3],String(b[2]===n.tab));assert(b[0].includes('>'+String(ids.indexOf(b[2])+1)+'</span>'));}
  assert(out.includes('id="vertex-tab-'+n.tab+'" aria-selected="true"'));
  assert(n.x>=10&&n.y>=10&&n.x+n.w<=1320&&n.y+n.h<=300);
 }
 click('vertexExampleTab','core');let prevented=false;
 for(const fn of handlers.keydown||[])fn({target:{closest:s=>s==='.vertex-example-tabs [role="tab"]'?{dataset:{vertexExampleTab:'core'}}:null},key:'ArrowRight',preventDefault(){prevented=true}});
 assert(prevented);assert.equal(run('vertexCurrentExampleTab()'),'rings');
 assert(node('#hit-program-panel').innerHTML.includes('data-vertex-example-tab="core"'));
 click('vertexExampleTab','invalid');assert.equal(run('vertexCurrentExampleTab()'),'rings');
 run("startLevel('discovery-optimization',0)");click('vertexExampleTab','core');assert.equal(run('vertexCurrentExampleTab()'),'rings');
 console.log('PASS: linker/indole tab order, all nine diagram-node mappings and numbered labels, active highlighting, tab navigation and action guards.');
console.log('PASS: five lead-optimization topics and four connected dimensions, previous/next links, valid sources, revised exercise, preserved hit-to-lead interactions, saved progress, and '+renders+' lesson views. Local bundle matches source files.');

 await run('saveQueue');run('state.progress={};state.loading=false');
 let map=run('overview()');
 assert.equal((map.match(/class="map-part"/g)||[]).length,4);
 assert.equal((map.match(/class="topic-grid(?: |")/g)||[]).length,6);
 assert.equal((map.match(/class="topic-card /g)||[]).length,25);
 assert.equal((map.match(/class="map-branch"/g)||[]).length,3);
 assert(map.includes('map-development-overview'));assert(map.includes('Special topic · 2026 pilot'));
 const development=run('CATALOG.parts[2]');assert.equal(development.overview,'candidate-nomination');
 for(const branch of development.branches)assert(map.includes('Part '+branch.label));
 const branchIds=run('CATALOG.parts[2].branches.flatMap(b=>LEVELS.filter(l=>b.categories.includes(l.category)).map(l=>l.id))');
 assert.equal(new Set(branchIds).size,9);assert(!branchIds.includes('candidate-nomination'));assert(!branchIds.includes('pre-ind'));assert(!branchIds.includes('people'));assert(branchIds.includes('clinical-dose'));
 const mappedIds=run('CATALOG.parts.flatMap(p=>LEVELS.filter(l=>p.categories.includes(l.category)).map(l=>l.id))');
 assert.equal(new Set(mappedIds).size,25);assert.equal(mappedIds.length,25);
 for(const id of run('ids'))assert.equal((map.match(new RegExp('class="topic-card [^>]*data-level="'+id+'"','g'))||[]).length,1,'One map card per lesson');
 assert(!map.includes('Start here'));assert(!map.includes('learning-part-header'));assert(!map.includes('map-category-heading'));assert(!map.includes('map-toolbar'));
 assert(map.includes('<span>Part 1:</span> The purpose of an IND'));
 assert(map.includes('What an IND Is and Why It Exists — Up next'));
 for(const [i,p] of run('CATALOG.parts').entries())assert(map.includes('<span>Part '+(i+1)+':</span> '+p.title));
 run("state.progress={'discovery-leads':{completed:true},'discovery-optimization':{step:1,updatedAt:1}}");
 map=run('overview()');assert(map.includes('Hit to Lead — Completed'));assert(map.includes('Lead Optimization — In progress'));assert(map.includes('1 / 25 completed'));
 for(const l of run('LEVELS')){click('level',l.id);assert.equal(run('state.lesson'),l.id);}
 await run('saveQueue');run('state.progress=Object.fromEntries(LEVELS.map(l=>[l.id,{completed:true}]))');
 map=run('overview()');assert.equal((map.match(/class="topic-card complete/g)||[]).length,25);assert(map.includes('25 / 25 completed'));
 run("startLevel('candidate-nomination',0)");
 for(const id of ['nomination','questions','plan','contingency','backup']){click('transitionTab',id);assert.equal(run('state.transitionTab'),id);assert(!/undefined|NaN/.test(node('#lesson').innerHTML));}
 assert.deepEqual(Array.from(run('level().transitionGuide.tabs.map(t=>t.id)')),['plan','nomination','questions','contingency','backup']);
 const backup=node('#lesson').innerHTML;
 assert(backup.includes('candidate-backup-case'));
 assert(backup.includes('https://www.ncbi.nlm.nih.gov/books/NBK92015/'));
 assert(backup.includes('https://pmc.ncbi.nlm.nih.gov/articles/PMC11413853/'));
 assert(backup.includes('not a documented failure after formal DC nomination'));
 assert(backup.includes('uncertainty, optionality, time, and capital'));
 assert(backup.includes('5 / 5'));
 click('transitionTab','contingency');const contingency=node('#lesson').innerHTML;
 assert(contingency.includes('candidate-conviction'));
 assert(contingency.includes('serious money'));
 for(const area of run('level().transitionGuide.contingency.areas')){assert(contingency.includes(area.name));for(const item of area.items)assert(contingency.includes(item));}
 assert(!contingency.includes('candidate-backup-case'));
 assert(contingency.includes('4 / 5'));
 click('transitionTab','questions');assert(!node('#lesson').innerHTML.includes('candidate-conviction'));
 click('transitionTab','backup');assert(node('#lesson').innerHTML.includes('candidate-backup-case'));
 console.log('PASS: four parts, an overview above three development branches, 25 unique named topics, progress states, lesson navigation and transition tabs.');


 // The nine reasoning chapters have their own behavioral coverage below.
 const newLessons=run('LEVELS.filter(l=>l.reasoningGuide)');assert.equal(newLessons.length,9);
 for(const l of newLessons){
  if(l.reasoningGuide.format==='case-tabs'){
   run('startLevel('+JSON.stringify(l.id)+',0)');
   run('selectReasoningTopic('+JSON.stringify(l.reasoningGuide.lessons.id)+')');
   await run('completeReadingChapter()');
   assert.equal(run('state.progress['+JSON.stringify(l.id)+'].completionKind'),'reading');
  }else{
   run('startLevel('+JSON.stringify(l.id)+',2)');
   const correct=l.question.options.findIndex(o=>o[2]);
   run('state.selected='+correct+';state.feedback=true');await run('completeLevel()');
  }
  assert.equal(run('state.screen'),'complete');assert(run('done('+JSON.stringify(l.id)+')'));
 }
 run("startLevel('discovery-leads',0)");click('evidenceStep','1');assert.equal(run('state.evidenceStep'),undefined);
 run("startLevel('candidate-nomination',0)");
 for(const tab of ['nomination','questions','plan']){
  click('transitionTab',tab);const out=node('#lesson').innerHTML;
  assert(!/Osimertinib|osimertinib|AZD9291/.test(out),'Osimertinib case narrative stays in the example');
  assert(!/undefined|NaN/.test(out));assert(out.includes('Sources for these principles'));
  if(tab==='nomination'){assert(out.includes('candidate-transition-flow'));assert(out.includes('Which molecule should we develop?'));assert(out.includes('What evidence do we need before testing in humans?'));for(const n of [16,28,30,36,44,45,48]){const asset='assets/candidate-transition-'+n+'.svg';assert(out.includes(asset));assert(fs.existsSync('dist/'+asset));}assert.equal((out.match(/<img src="assets\/candidate-transition-/g)||[]).length,7);}
  if(tab==='questions'){assert(out.includes('candidate-evidence-table'));assert(out.includes('Reuse suitable evidence'));assert(out.includes('Overlap: evidence we can reuse'));assert.equal((out.match(/class="candidate-overlap"/g)||[]).length,5);assert.equal((out.match(/scope="row"/g)||[]).length,4);}
 }
 run('moveStep(1)');
 const candidateCases=run('level().candidateBridge.cases');assert.equal(candidateCases.length,2);
 assert.equal(candidateCases.map(c=>c.label).join('|'),'Ivacaftor · Compound 48|RLY-2608');
 const candidateProgress=run('JSON.stringify(state.progress)');
 for(const c of candidateCases){
  click('candidateBridgeCase',c.id);assert.equal(run('state.candidateBridgeCase'),c.id);
  const out=node('#lesson').innerHTML;assert(out.includes('role="tabpanel"'));assert(out.includes('aria-labelledby="candidate-bridge-tab-'+c.id+'"'));
  assert(out.includes('id="candidate-bridge-tab-'+c.id+'" data-candidate-bridge-case="'+c.id+'" aria-selected="true" tabindex="0"'));
  assert(out.includes('IND-enabling development'));assert(out.includes('Public visibility is not completeness.'));
  assert(out.includes(c.timing));assert(out.includes(c.chronology));assert(out.includes(c.image));assert(fs.existsSync('dist/'+c.image));
  assert.equal((out.match(/class="candidate-bridge-row"/g)||[]).length,3);
  for(const row of c.rows){assert(out.includes(row.question));assert(out.includes(row.status));assert(out.includes('data-level="'+row.lesson+'"'));}
  for(const source of c.sources){assert(out.includes('href="'+source.url+'" target="_blank" rel="noopener noreferrer"'));}
  assert(!/osimertinib|AZD9291|undefined|NaN/i.test(out));
 }
 assert.equal(run('JSON.stringify(state.progress)'),candidateProgress,'Example tabs do not change learning progress');
 click('candidateBridgeCase','not-a-case');assert.equal(run('state.candidateBridgeCase'),'rly2608');
 let candidatePrevented=false;const candidateTab={dataset:{candidateBridgeCase:'rly2608'}};
 for(const fn of handlers.keydown||[])fn({key:'ArrowLeft',target:{closest:q=>q==='[data-candidate-bridge-case]'?candidateTab:null},preventDefault(){candidatePrevented=true;}});
 assert(candidatePrevented);assert.equal(run('state.candidateBridgeCase'),'ivacaftor');
 assert(node('#lesson').innerHTML.includes('500 mg'));assert(node('#lesson').innerHTML.includes('800 mg'));
 run('moveStep(1)');click('candidateBridgeCase','rly2608');assert.equal(run('state.candidateBridgeCase'),'ivacaftor','Example controls only operate in the example');

 run("startLevel('candidate-nomination',0)");click('transitionTab','plan');
 assert(node('#lesson').innerHTML.includes('data-level="nonclinical-pharmacology"'));assert(node('#lesson').innerHTML.includes('data-level="cmc-material"'));
 const plan=run('level().transitionGuide.plan');assert.equal(plan.streams.length,3);
 assert.equal(plan.streams[0].lessons.length,4);assert.equal(plan.streams[1].lessons.length,3);
 assert.equal(plan.streams[2].lessons.length,2);assert(node('#lesson').innerHTML.includes('When to seek FDA input'));
 for(const id of plan.streams.flatMap(s=>s.lessons)){
  assert(node('#lesson').innerHTML.includes('data-level="'+id+'"'));
  click('level',id);assert.equal(run('state.lesson'),id);
  run("startLevel('candidate-nomination',0)");click('transitionTab','plan');
 }
 assert(!node('#lesson').innerHTML.includes('Planned in parallel'));assert(!node('#lesson').innerHTML.includes('Seven lessons after this planning introduction'));assert(!node('#lesson').innerHTML.includes('Explore clinical planning'));
 run("startLevel('nonclinical-pharmacology',0)");assert(node('#lesson').innerHTML.includes('Part 3A · Nonclinical evidence'));
 run("startLevel('cmc-material',0)");assert(node('#lesson').innerHTML.includes('Part 3B · Drug material and CMC'));
 run("startLevel('clinical',0)");assert(node('#lesson').innerHTML.includes('Part 3C · Clinical plan'));
 run("startLevel('pre-ind',0)");assert(node('#lesson').innerHTML.includes('Part 4 · FDA engagement, IND submission, and review'));
 await run('saveQueue');const beforeRevisit=run('JSON.stringify(ids.filter(done))');run("startLevel('people',0)");await run('saveQueue');assert.equal(run('JSON.stringify(ids.filter(done))'),beforeRevisit);assert(run("done('nonclinical-pharmacology')"));

 run("startLevel('expedited-ind-pilot',0)");
 const pilot=run('level().pilotGuide');assert(node('#lesson').innerHTML.includes('Checked 16 September 2026'));
 for(let i=0;i<pilot.sections.length;i++){
  click('pilotStep',String(i));assert.equal(run('state.pilotStep'),i);const out=node('#lesson').innerHTML;
  assert(out.includes(pilot.sections[i].title));assert(out.includes(pilot.sections[i].note));assert(!/undefined|NaN/.test(out));
  assert(out.includes('data-pilot-step="'+i+'" aria-pressed="true"'));
  for(const source of pilot.sections[i].sources)assert(out.includes(run('level().sources['+source+'].url')));
  if(i===1){assert(out.includes('30-day review window'));assert.equal((out.match(/class="pilot-flow-number"/g)||[]).length,4);}
  if(i===2){assert(out.includes('30 Oct 2026'));assert(out.includes('18 Dec 2026'));}
 }
 for(const bad of ['bad','-1','3']){click('pilotStep',bad);assert.equal(run('state.pilotStep'),2);}
 run('moveStep(1)');assert(node('#lesson').innerHTML.includes('HYPOTHETICAL PILOT SCENARIO'));click('pilotStep','0');assert.equal(run('state.pilotStep'),2);
 run('moveStep(1)');run('state.selected=0;state.feedback=true');await run('completeLevel()');assert.equal(run('state.screen'),'lesson');
 run('state.selected=2;state.feedback=true');await run('completeLevel()');assert.equal(run('state.screen'),'complete');assert(run("done('expedited-ind-pilot')"));
 run("startLevel('clinical',0)");click('pilotStep','1');assert.equal(run('state.pilotStep'),undefined);
 console.log('PASS: Part 3A/B/C locations, Part 4 FDA engagement, three pilot views, dated sources, navigation guards, exercise and saved pilot completion.');

 for(const id of ['clinical-plan-package','model','toxicology-tk-glp','risk-recovery','substance-product','process-impurities','cmc','stability-product-changes']){run('startLevel('+JSON.stringify(id)+',0)');assert.equal(run('state.lesson'),id);}
 await run('saveQueue');
 console.log('PASS: one reading and eight exercise completion paths, Part 3 sequence, and preserved legacy links; detailed map/case interactions covered in reasoning-guide.cjs.');

})().catch(e=>{console.error(e);process.exitCode=1});

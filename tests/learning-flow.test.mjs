import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync, readdirSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { handleProgress } from '../server/progress.mjs';
import { d1Adapter } from '../scripts/sqlite-adapter.mjs';
const catalog=JSON.parse(readFileSync('training/small-molecule-course.json','utf8'));

// This tests our state and rendering functions at a minimal DOM boundary, without a browser.
function createApp(env,hash=''){
 const nodes=new Map(),events=new Map(),tools=new Map();
 const make=()=>({innerHTML:'',textContent:'',value:'',open:false,classList:{toggle(){}},focus(){},scrollIntoView(){},addEventListener(){},showModal(){this.open=true;},close(){this.open=false;},setAttribute(){}});
 const document={querySelector(s){if(!nodes.has(s))nodes.set(s,make());return nodes.get(s);},body:make(),addEventListener(n,f){events.set('document:'+n,f);},title:'',modelContext:{registerTool(t){tools.set(t.name,t);}}};
 const location={hash},historyEntries=[hash];let historyPosition=0;
 const history={pushState(_a,_b,next){location.hash=next;historyEntries.splice(++historyPosition);historyEntries.push(next);},replaceState(_a,_b,next){location.hash=next;historyEntries[historyPosition]=next;},back(){if(historyPosition){location.hash=historyEntries[--historyPosition];events.get('hashchange')?.();}}};
 const context=vm.createContext({document,window:{addEventListener(n,f){events.set(n,f);},scrollTo(){},matchMedia:()=>({matches:false,addEventListener(){}})},history,location,navigator:{},console,setTimeout,clearTimeout,AbortController,fetch:async(path,options={})=>handleProgress(new Request('https://learn.test'+path,{...options,headers:{...options.headers,'oai-authenticated-user-id':'flow-learner'}}),env)});
 vm.runInContext(['content.js','catalog.js','app.js'].map(f=>readFileSync('dist/'+f,'utf8')).join('\n'),context);
 return {run:code=>vm.runInContext(code,context),html:()=>nodes.get('#lesson').innerHTML,back:()=>history.back(),hash:()=>location.hash,tools};
}
function setup(){const db=new DatabaseSync(':memory:');for(const name of readdirSync('drizzle').filter(x=>x.endsWith('.sql')))db.exec(readFileSync('drizzle/'+name,'utf8'));return {db,env:{DB:d1Adapter(db)}};}

test('portal → category map → one idea → exercise → saved star and resume',async()=>{
 const {db,env}=setup();const app=createApp(env);await app.run('ready');
 assert.match(app.html(),/Choose your learning path/);assert.match(app.html(),/Biologics/);assert.match(app.html(),/Under construction/);assert.doesNotMatch(app.html(),/map-category/);
 app.run('showOverview()');assert.equal((app.html().match(/class="map-category"/g)||[]).length,8);assert.equal((app.html().match(/data-preview=/g)||[]).length,32);assert.match(app.html(),/Start learning/);
 app.run("startLevel('target-question',0)");await app.run('saveQueue');assert.match(app.html(),/THE CONCEPT/);assert.doesNotMatch(app.html(),/YOUR TURN|WORKED EXAMPLE/);
 app.run('moveStep(1)');await app.run('saveQueue');assert.match(app.html(),/WORKED EXAMPLE/);assert.doesNotMatch(app.html(),/fieldset/);
 app.run('moveStep(1)');await app.run('saveQueue');const answer=catalog.levels[0].question.options.findIndex(o=>o[2]);
 app.run(`state.selected=${(answer+1)%3};checkAnswer()`);await app.run('completeLevel()');assert.equal(app.run('countDone()'),0);
 app.run(`state.selected=${answer};checkAnswer()`);await app.run('completeLevel()');assert.equal(app.run('countDone()'),1);assert.match(app.html(),/LEVEL 1 COMPLETE/);
 app.run("startLevel('target-prioritization',1)");await app.run('saveQueue');const reloaded=createApp(env);await reloaded.run('ready');assert.match(reloaded.html(),/Choose your learning path/);
 reloaded.run('showOverview()');assert.match(reloaded.html(),/Continue/);assert.match(reloaded.html(),/1 \/ 32/);assert.match(reloaded.html(),/aria-hidden="true">★/);assert.equal(reloaded.run('resumeId()'),'target-prioritization');
 reloaded.run("startLevel('target-prioritization')");await reloaded.run('saveQueue');assert.equal(reloaded.run('state.step'),1);db.close();
});

test('every numbered box has three separate screens, one answer, sources and AI prompt',async()=>{
 const {db,env}=setup();const app=createApp(env);await app.run('ready');
 for(const {id} of catalog.levels){
  for(const step of [0,1,2]){app.run(`startLevel('${id}',${step})`);await app.run('saveQueue');assert.match(app.html(),/lesson-card/);assert.equal((app.html().match(/<h1>/g)||[]).length,1);assert.doesNotMatch(app.html(),/undefined/);}
  assert.equal(app.run(`QUESTIONS['${id}'].options.filter(x=>x[2]).length`),1);
  app.run('sources()');app.run('ai()');
 }
 db.close();
});

test('route reload and Back preserve the portal → map → lesson hierarchy',async()=>{
 const {db,env}=setup();const app=createApp(env);await app.run('ready');app.run('showOverview()');app.run("startLevel('sar-tradeoffs',0)");app.run('moveStep(1)');await app.run('saveQueue');
 assert.equal(app.hash(),'#small-molecule/sar-tradeoffs/1');const deep=createApp(env,app.hash());await deep.run('ready');await deep.run('saveQueue');assert.equal(deep.run('state.lesson'),'sar-tradeoffs');assert.equal(deep.run('state.step'),1);
 app.back();assert.equal(app.run('state.screen'),'overview');app.back();assert.equal(app.run('state.screen'),'portal');await app.run('saveQueue');
 const invalid=createApp(env,'#small-molecule/missing/99');await invalid.run('ready');assert.equal(invalid.run('state.screen'),'portal');
 const legacy=createApp(env,'#model/1');await legacy.run('ready');await legacy.run('saveQueue');assert.equal(legacy.run('state.lesson'),'model');assert.equal(legacy.run('state.step'),1);db.close();
});

test('model and navigation tool inputs reject invalid values without altering valid state',async()=>{
 const {db,env}=setup();const app=createApp(env);await app.run('ready');await app.run('registerAgentTools()');app.run('setExposure(1,8)');assert.equal(app.run('exposureMetrics().initial'),100);assert.ok(Math.abs(app.run('exposureMetrics().auc')-1154.156)<.01);
 assert.throws(()=>app.run('setExposure(.5,0)'));assert.equal(app.run('state.halfLife'),8);assert.throws(()=>app.run("setModel('yes')"));assert.equal(app.run('state.modelEngaged'),false);
 const navigate=app.tools.get('navigate_learning_lesson');assert.throws(()=>navigate.execute({lesson:'portal',step:99}));assert.throws(()=>navigate.execute({lesson:'missing'}));assert.throws(()=>navigate.execute({lesson:'model',complete:true}));
 navigate.execute({lesson:'small-molecule'});assert.equal(app.run('state.screen'),'overview');navigate.execute({lesson:'target-validation',step:1});await app.run('saveQueue');assert.equal(app.run('countDone()'),0);db.close();
});

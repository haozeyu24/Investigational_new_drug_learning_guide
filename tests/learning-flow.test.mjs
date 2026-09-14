import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync, readdirSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { handleProgress } from '../server/progress.mjs';
import { d1Adapter } from '../scripts/sqlite-adapter.mjs';

// A minimal DOM boundary exercises application state without browser automation.
function createApp(env){
 const nodes=new Map();const make=()=>({innerHTML:'',textContent:'',value:'',open:false,classList:{toggle(){}},focus(){},scrollIntoView(){},addEventListener(){},showModal(){this.open=true;},close(){this.open=false;},setAttribute(){}});
 const document={querySelector(s){if(!nodes.has(s))nodes.set(s,make());return nodes.get(s);},body:make(),addEventListener(){},title:''};
 const context=vm.createContext({document,window:{addEventListener(){},scrollTo(){},matchMedia:()=>({matches:false,addEventListener(){}})},history:{replaceState(){}},location:{hash:''},navigator:{},console,setTimeout,clearTimeout,AbortController,fetch:async(path,options={})=>handleProgress(new Request('https://learn.test'+path,{...options,headers:{...options.headers,'oai-authenticated-user-id':'flow-learner'}}),env)});
 vm.runInContext(readFileSync('dist/content.js','utf8')+'\n'+readFileSync('dist/app.js','utf8'),context);
 return {run:code=>vm.runInContext(code,context),html:()=>nodes.get('#lesson').innerHTML};
}
function setup(){const db=new DatabaseSync(':memory:');for(const name of readdirSync('drizzle').filter(x=>x.endsWith('.sql')))db.exec(readFileSync('drizzle/'+name,'utf8'));return {db,env:{DB:d1Adapter(db)}};}

test('overview → one concept → example → exercise → completion → resume after reload',async()=>{
 const {db,env}=setup();const app=createApp(env);await app.run('loadProgress()');assert.match(app.html(),/Start level 1/);assert.doesNotMatch(app.html(),/notebook|lesson-nav/);
 app.run("startLevel('map',0)");await app.run('saveQueue');assert.match(app.html(),/THE CONCEPT/);assert.doesNotMatch(app.html(),/YOUR TURN|WORKED EXAMPLE/);
 app.run('moveStep(1)');await app.run('saveQueue');assert.match(app.html(),/WORKED EXAMPLE/);assert.doesNotMatch(app.html(),/fieldset/);
 app.run('moveStep(1)');await app.run('saveQueue');app.run('state.selected=1;checkAnswer()');await app.run('completeLevel()');assert.equal(app.run('countDone()'),0);
 app.run('state.selected=0;checkAnswer()');await app.run('completeLevel()');assert.equal(app.run('countDone()'),1);assert.match(app.html(),/LEVEL 1 COMPLETE/);
 app.run("startLevel('model',1)");await app.run('saveQueue');const reloaded=createApp(env);await reloaded.run('loadProgress()');assert.match(reloaded.html(),/Resume level 2/);assert.match(reloaded.html(),/1 of 7 completed/);reloaded.run("startLevel('model')");await reloaded.run('saveQueue');assert.equal(reloaded.run('state.step'),1);db.close();
});

test('all levels have three distinct steps and a supported answer',async()=>{const {db,env}=setup();const app=createApp(env);await app.run('loadProgress()');for(const id of ['map','model','exposure','cmc','clinical','people','review']){for(const step of [0,1,2]){app.run(`startLevel('${id}',${step})`);await app.run('saveQueue');assert.match(app.html(),/lesson-card/);assert.equal((app.html().match(/<h1>/g)||[]).length,1);}assert.equal(app.run(`QUESTIONS['${id}'].options.filter(x=>x[2]).length`),1);}db.close();});

test('model inputs reject invalid values and retain valid state',async()=>{const {db,env}=setup();const app=createApp(env);await app.run('loadProgress()');app.run('setExposure(1,8)');assert.equal(app.run('exposureMetrics().initial'),100);assert.ok(Math.abs(app.run('exposureMetrics().auc')-1154.156)<.01);assert.throws(()=>app.run('setExposure(.5,0)'));assert.equal(app.run('state.halfLife'),8);assert.throws(()=>app.run("setModel('yes')"));assert.equal(app.run('state.modelEngaged'),false);db.close();});

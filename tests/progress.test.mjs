import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { handleProgress } from '../server/progress.mjs';
import { d1Adapter } from '../scripts/sqlite-adapter.mjs';

function setup(){const db=new DatabaseSync(':memory:');for(const file of readdirSync('drizzle').filter(n=>n.endsWith('.sql')))db.exec(readFileSync('drizzle/'+file,'utf8'));return {db,env:{DB:d1Adapter(db)}};}
function req(path,body,user='learner-a',origin='https://learn.test'){return new Request('https://learn.test'+path,{method:body?'POST':'GET',headers:{...(user?{'oai-authenticated-user-id':user}:{}),...(body?{'content-type':'application/json',origin}:{})},body:body?JSON.stringify(body):undefined});}

test('saved place survives reads, correct exercise completes, replay preserves completion',async()=>{const {db,env}=setup();let r=await handleProgress(req('/api/progress',{lesson:'map',step:1}),env);assert.equal(r.status,200);assert.equal((await r.json()).lessons[0].step,1);r=await handleProgress(req('/api/complete',{lesson:'map',answer:1}),env);assert.equal(r.status,422);r=await handleProgress(req('/api/progress'),env);assert.equal((await r.json()).lessons[0].completed,false);r=await handleProgress(req('/api/complete',{lesson:'map',answer:0}),env);assert.equal((await r.json()).lessons[0].completed,true);await handleProgress(req('/api/progress',{lesson:'map',step:0}),env);r=await handleProgress(req('/api/progress'),env);assert.equal((await r.json()).lessons[0].completed,true);db.close();});

test('all seven answer keys complete exactly their level',async()=>{const {db,env}=setup();for(const [lesson,answer] of Object.entries({map:0,model:2,exposure:1,cmc:1,clinical:0,people:2,review:1})){const r=await handleProgress(req('/api/complete',{lesson,answer}),env);assert.equal(r.status,200);}const r=await handleProgress(req('/api/progress'),env);assert.equal((await r.json()).lessons.filter(l=>l.completed).length,7);db.close();});

test('progress is isolated by authenticated user and client identity overrides fail',async()=>{const {db,env}=setup();await handleProgress(req('/api/complete',{lesson:'map',answer:0}),env);const other=await handleProgress(req('/api/progress',null,'learner-b'),env);assert.deepEqual((await other.json()).lessons,[]);assert.equal((await handleProgress(req('/api/progress',null,null),env)).status,401);assert.equal((await handleProgress(req('/api/progress',{lesson:'map',step:1,userId:'learner-b'}),env)).status,400);db.close();});

test('invalid and cross-origin writes cannot change progress',async()=>{const {db,env}=setup();for(const body of [{lesson:'missing',step:1},{lesson:'map',step:3},{lesson:'map',step:'1'},{lesson:'__proto__',step:1}])assert.equal((await handleProgress(req('/api/progress',body),env)).status,400);assert.equal((await handleProgress(req('/api/complete',{lesson:'map',answer:0},'learner-a','https://other.test'),env)).status,403);const r=await handleProgress(req('/api/progress'),env);assert.deepEqual((await r.json()).lessons,[]);assert.equal((await handleProgress(req('/api/progress'),{})).status,503);db.close();});

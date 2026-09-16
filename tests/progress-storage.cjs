const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const script=fs.readFileSync('dist/index.html','utf8').match(/<script data-local-bundle>\n([\s\S]*?)\n<\/script>/)[1];
const key='first-in-class-progress';
function storageFrom(values=new Map()){
 return {values,getItem:k=>values.get(k)??null,setItem:(k,v)=>values.set(k,v),removeItem:k=>values.delete(k)};
}
async function openGuide(protocol,storage,session=storageFrom()){
 const nodes=new Map();
 const node=s=>{if(!nodes.has(s))nodes.set(s,{innerHTML:'',dataset:{},open:false,focus(){},setAttribute(k,v){this[k]=v},addEventListener(){},showModal(){this.open=true},close(){this.open=false},classList:{toggle(){},add(){},remove(){}}});return nodes.get(s);};
 const location={protocol,hash:'#small-molecule'};
 const context=vm.createContext({console,setTimeout,clearTimeout,location,
  history:{pushState(a,b,h){location.hash=h},replaceState(a,b,h){location.hash=h}},
  window:{localStorage:storage,sessionStorage:session,addEventListener(){},matchMedia:()=>({matches:false,addEventListener(){}}),scrollTo(){}},
  document:{querySelector:node,querySelectorAll:()=>[],addEventListener(){},body:{classList:{toggle(){}}}},
  fetch(){throw new Error('A static guide must not request a progress backend');}});
 const run=code=>vm.runInContext(code,context);
 run(script);await run('ready');await run('saveQueue');return {run,node};
}
(async()=>{
 for(const protocol of ['file:','https:','http:']){
  const storage=storageFrom(),session=storageFrom(new Map([['first-in-class-welcome','1']]));
  const first=await openGuide(protocol,storage,session);
  assert(first.node('#modal').open,'Welcome appears even with the old session marker');
  first.run('dismissWelcome();welcome()');assert(!first.node('#modal').open,'Navigation does not reopen welcome');
  first.run('startLevel(ids[0],1)');await first.run('saveQueue');
  const resume=await openGuide(protocol,storage,session);
  assert(resume.node('#modal').open,'Welcome appears on refresh');
  assert.equal(resume.run('state.progress[ids[0]].step'),1);
  assert.equal(resume.run('countDone()'),0,'Reading alone is not completion');
  resume.run('startLevel(ids[0],2)');await resume.run('saveQueue');
  resume.run('state.selected=QUESTIONS[state.lesson].options.findIndex(o=>o[2]);state.feedback=true');
  await resume.run('completeLevel()');assert.equal(resume.run('state.screen'),'complete');
  const completed=await openGuide(protocol,storage,session);
  assert.equal(completed.run('countDone()'),1,'Completion survives a fresh page instance');
  assert(completed.node('#modal').open);assert.equal(completed.run('state.saveError'),false);
  assert.equal(completed.run('state.saveStatus'),'Progress saved in this browser');
  storage.setItem('unrelated-preference','keep');
  completed.run('startLevel(ids[1],1);confirmProgressReset()');
  await completed.run('resetLearningProgress()');
  const reset=await openGuide(protocol,storage,session);
  assert.equal(reset.run('countDone()'),0);assert.equal(storage.getItem(key),null);
  assert.equal(storage.getItem('unrelated-preference'),'keep');
 }
 const blocked=await openGuide('https:',{getItem(){throw Error('denied')}});
 assert.equal(blocked.run('state.saveError'),true);assert(blocked.node('#modal').open);
 assert.match(blocked.run('state.saveStatus'),/unavailable/);
 const quota=storageFrom(),failed=await openGuide('https:',quota);
 failed.run('startLevel(ids[0],2)');await failed.run('saveQueue');
 quota.setItem=()=>{throw Error('quota exceeded')};
 failed.run('state.selected=QUESTIONS[state.lesson].options.findIndex(o=>o[2]);state.feedback=true');
 await failed.run('completeLevel()');
 assert.equal(failed.run('state.screen'),'lesson');assert.equal(failed.run('countDone()'),0);
 assert.equal(failed.run('state.saveError'),true);assert.match(failed.run('state.saveStatus'),/could not be saved/);
 for(const raw of ['invalid JSON','{}']){
  const corrupt=storageFrom(new Map([[key,raw]])),guide=await openGuide('https:',corrupt);
  guide.run('startLevel(ids[0],1)');await guide.run('saveQueue');
  assert.equal(guide.run('state.saveError'),true);assert.equal(corrupt.getItem(key),raw);
 }
 console.log('PASS: file/HTTPS/HTTP saves, refreshed completion and positions, welcome on every reload, reset ordering, blocked storage, failed writes, and preservation of unreadable data; no progress API calls.');
})().catch(error=>{console.error(error);process.exitCode=1});

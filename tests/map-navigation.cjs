const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('dist/index.html','utf8');
const script=html.match(/<script data-local-bundle>\n([\s\S]*?)\n<\/script>/)[1];
const progressKey='first-in-class-progress';

async function openGuide(hash='#small-molecule',stored=new Map()){
 const nodes=new Map(),documentHandlers={},windowHandlers={},focusLog=[],scrollLog=[];
 const location={protocol:'file:',hash};
 const window={scrollY:0,scrollX:0,innerHeight:900,innerWidth:1280,
  addEventListener(type,fn){(windowHandlers[type]??=[]).push(fn)},
  matchMedia:()=>({matches:false,addEventListener(){}}),
  requestAnimationFrame(fn){fn();return 1},
  scrollTo(options,y){const top=typeof options==='number'?y:options.top;this.scrollY=Number(top)||0;scrollLog.push({kind:'window',top:this.scrollY,options})}
 };
 const storage={getItem:k=>stored.get(k)??null,setItem:(k,v)=>stored.set(k,v),removeItem:k=>stored.delete(k)};
 window.localStorage=storage;window.sessionStorage=storage;
 const cardIds=()=>[...(nodes.get('#lesson')?.innerHTML||'').matchAll(/<button\b[^>]*class="[^"]*\btopic-card\b[^"]*"[^>]*data-level="([^"]+)"/g)].map(m=>m[1]);
 const cardPosition=id=>id==='cmc-stability'?1500:id==='clinical'?1950:200+cardIds().indexOf(id)*150;
 function node(selector){
  if(selector.includes('.topic-card')){
   const id=selector.match(/\[data-level=["']?([^"'\]]+)["']?\]/)?.[1];
   if(!id||!cardIds().includes(id))return null;
   selector='.topic-card[data-level="'+id+'"]';
  }
  if(!nodes.has(selector)){
   const id=selector.match(/\.topic-card\[data-level="([^"]+)"\]/)?.[1];
   nodes.set(selector,{innerHTML:'',dataset:id?{level:id}:{},open:false,
    focus(options){focusLog.push({selector,options});},
    scrollIntoView(options){scrollLog.push({kind:'element',selector,options});if(id){const top=cardPosition(id);window.scrollY=Math.max(0,options?.block==='center'?top-window.innerHeight/2+55:top)}},
    getBoundingClientRect(){const top=(id?cardPosition(id):0)-window.scrollY;return {top,bottom:top+110,left:0,right:600,width:600,height:110}},
    setAttribute(k,v){this[k]=v},addEventListener(){},showModal(){this.open=true},close(){this.open=false},
    classList:{toggle(){},add(){},remove(){}}
   });
  }
  return nodes.get(selector);
 }
 const document={querySelector:node,querySelectorAll:selector=>selector.includes('.topic-card')?cardIds().map(id=>node('.topic-card[data-level="'+id+'"]')):[],addEventListener(type,fn){(documentHandlers[type]??=[]).push(fn)},body:{classList:{toggle(){}}},documentElement:{get scrollTop(){return window.scrollY},clientHeight:900,clientWidth:1280}};
 const history={scrollRestoration:'auto',pushState(a,b,h){location.hash=h},replaceState(a,b,h){location.hash=h}};
 const context=vm.createContext({console,setTimeout,clearTimeout,requestAnimationFrame:window.requestAnimationFrame,location,history,window,document,fetch(){throw Error('Unexpected network request')}});
 const run=source=>vm.runInContext(source,context);
 const click=(key,value)=>{
  const selector='[data-'+key.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())+']',button={dataset:{[key]:value}};
  for(const fn of documentHandlers.click||[])fn({target:{closest:s=>s===selector?button:null}});
 };
 const route=hash=>{location.hash=hash;for(const fn of windowHandlers.hashchange||[])fn({type:'hashchange'});};
 const clearLogs=()=>{focusLog.length=0;scrollLog.length=0;};
 run(script);await run('ready');run('dismissWelcome()');await run('saveQueue');clearLogs();
 return {run,click,route,node,window,focusLog,scrollLog,clearLogs,stored,location,history};
}
function focusedCard(guide,id){
 const focus=guide.focusLog.findLast(entry=>entry.selector==='.topic-card[data-level="'+id+'"]');
 assert(focus,'Returning to the map focuses '+id);assert.equal(focus.options?.preventScroll,true,'Focus must not undo the chosen map position');
}
function locatedCard(guide,id){
 focusedCard(guide,id);
 assert(guide.scrollLog.some(entry=>entry.kind==='element'&&entry.selector==='.topic-card[data-level="'+id+'"]'&&['center','nearest'].includes(entry.options?.block)),'Locate the current chapter when no matching map position exists');
}
(async()=>{
 // Leave a real later map card, change a lesson tab, and return through the left-arrow action.
 const guide=await openGuide();assert(guide.node('.topic-card[data-level="cmc-stability"]'));
 assert.equal(guide.history.scrollRestoration,'manual','Native history restoration must not race application scrolling');
 guide.window.scrollY=1400;guide.click('level','cmc-stability');
 assert.equal(guide.run('readState().screen'),'lesson');assert.equal(guide.window.scrollY,0,'Opening a lesson starts at the top');
 assert.equal(guide.node('.topic-card[data-level="cmc-stability"]'),null,'Map cards do not exist inside lesson views');
 guide.window.scrollY=650;guide.click('lessonStep','1');assert.equal(guide.window.scrollY,0,'Opening another lesson view starts at the top');
 guide.window.scrollY=480;guide.clearLogs();guide.click('action','overview');
 assert.equal(guide.run('readState().screen'),'overview');assert.equal(guide.window.scrollY,1400,'Lesson tabs do not overwrite the previous map position');focusedCard(guide,'cmc-stability');
 // Returning after moving to another chapter must locate that chapter rather than reuse the old scroll offset.
 guide.click('level','cmc-stability');guide.click('level','clinical');assert.equal(guide.window.scrollY,0);
 guide.clearLogs();guide.click('action','overview');locatedCard(guide,'clinical');assert.notEqual(guide.window.scrollY,1400);
 // Browser back to the map uses the same restoration behavior as the lesson's left arrow.
 const back=await openGuide();back.window.scrollY=1400;back.click('level','cmc-stability');back.window.scrollY=600;
 back.clearLogs();back.route('#small-molecule');assert.equal(back.window.scrollY,1400);focusedCard(back,'cmc-stability');
 // Direct links and reloads lack a current-session map origin, even when lesson progress exists.
 const progress=new Map([[progressKey,JSON.stringify([{lesson:'clinical',step:1,completed:false}])]]);
 for(const hash of ['#small-molecule/clinical/0','#clinical/1']){
  const direct=await openGuide(hash,progress);assert.equal(direct.window.scrollY,0);
  direct.window.scrollY=720;direct.clearLogs();direct.click('action','overview');locatedCard(direct,'clinical');
 }
 const reloaded=await openGuide('#small-molecule/cmc-stability/0',guide.stored);
 reloaded.clearLogs();reloaded.route('#small-molecule');locatedCard(reloaded,'cmc-stability');
 // Re-entering through the landing page is a fresh overview, not a return from a lesson.
 guide.click('action','portal');guide.window.scrollY=500;guide.clearLogs();guide.click('action','overview');
 assert.equal(guide.window.scrollY,0,'Opening the map from the portal starts at the top');
 assert(!guide.scrollLog.some(entry=>entry.kind==='element'&&entry.selector.includes('.topic-card')),'Portal entry does not jump to an earlier chapter');
 // Supplemental legacy lessons have no map card; returning must use a safe top-of-map fallback.
 const supplemental=await openGuide('#small-molecule/model/0');
 assert.equal(supplemental.run('LEVELS.some(l=>l.id==="model")'),false,'Fixture is a supplemental lesson');
 supplemental.window.scrollY=640;supplemental.clearLogs();supplemental.click('action','overview');
 assert.equal(supplemental.run('readState().screen'),'overview');assert.equal(supplemental.node('.topic-card[data-level="model"]'),null);
 assert.equal(supplemental.window.scrollY,0,'A missing card falls back to the top without throwing');
 assert(!supplemental.focusLog.some(entry=>entry.selector.includes('.topic-card')));
 // The completion screen retains the map origin; resetting progress deliberately discards it.
 const completed=await openGuide();completed.window.scrollY=1400;completed.click('level','cmc-stability');
 completed.click('reasoningNode',String(completed.run('reasoningGuide().nodes.length-1')));
 await completed.run('completeConceptChapter()');assert.equal(completed.run('readState().screen'),'complete');
 completed.window.scrollY=300;completed.clearLogs();completed.click('action','overview');
 assert.equal(completed.window.scrollY,1400,'Completion-screen return restores the same map origin');focusedCard(completed,'cmc-stability');
 completed.click('action','reset-progress');completed.clearLogs();await completed.run('resetLearningProgress()');
 assert.equal(completed.run('readState().screen'),'overview');assert.equal(completed.window.scrollY,0,'Progress reset opens the map at the top');
 assert(!completed.scrollLog.some(entry=>entry.kind==='element'&&entry.selector.includes('.topic-card')),'Reset does not restore the old chapter position');
 assert.equal(completed.stored.has(progressKey),false,'Reset clears saved lesson progress');
 console.log('PASS: map scroll restoration, current-card focus, direct links and reloads, changed chapters, portal entry, lesson/tab scrolling, browser back/manual restoration, supplemental fallback, completion return and reset.');
})().catch(error=>{console.error(error);process.exitCode=1});

const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync('dist/ind-evidence-map.html','utf8'),data=JSON.parse(fs.readFileSync('dist/ind-evidence-map.json','utf8'));
const matches=[...html.matchAll(/<section class="lesson" id="([^"]+)" data-lesson="([^"]+)">([\s\S]*?)<\/section>/g)];
const sections=matches.map(m=>({dataset:{lesson:m[2]},hidden:false,rows:[...m[3].matchAll(/<tr data-record="([^"]+)">([\s\S]*?)<\/tr>/g)].map(r=>({id:r[1],textContent:r[2].replace(/<[^>]+>/g,' '),hidden:false})),querySelectorAll(){return this.rows;}}));
assert.equal(sections.length,9);assert.equal(sections.flatMap(s=>s.rows).length,data.records.length);
for(const r of data.records){const section=sections.find(s=>s.dataset.lesson===r.lessonId);assert(section.rows.some(row=>row.id===r.id));assert(r.sourceUrl.endsWith('#page='+r.pdfPages[0]));assert.equal(r.confidence,'verified passage');}
const nodes={};for(const id of ['lesson-filter','evidence-search','map-count','empty'])nodes[id]={value:id==='lesson-filter'?'all':'',hidden:false,handlers:{},addEventListener(k,fn){this.handlers[k]=fn;}};
vm.runInNewContext(html.match(/<script>([\s\S]*?)<\/script>/)[1],{document:{getElementById:id=>nodes[id],querySelectorAll:()=>sections}});
const filter=(id,value,event)=>{nodes[id].value=value;nodes[id].handlers[event]();};
const visible=()=>sections.filter(s=>!s.hidden).flatMap(s=>s.rows.filter(r=>!r.hidden));
filter('lesson-filter','clinical-dose','change');assert.equal(visible().length,data.records.filter(r=>r.lessonId==='clinical-dose').length);
filter('evidence-search','  IVACAFTOR ','input');assert(visible().some(r=>r.id==='clinical-dose-boundary'));assert(visible().every(r=>r.textContent.toLowerCase().includes('ivacaftor')));
filter('evidence-search','no-such-drug-12345','input');assert.equal(visible().length,0);assert.equal(nodes.empty.hidden,false);
filter('lesson-filter','all','change');filter('evidence-search','','input');assert.equal(visible().length,data.records.length);assert.equal(nodes.empty.hidden,true);
for(const a of html.matchAll(/<a\b([^>]+)>/g)){if(a[1].includes('href="https:')){assert(a[1].includes('target="_blank"'));assert(a[1].includes('rel="noopener noreferrer"'));}}
assert(!/fetch\(|localStorage|sessionStorage/.test(html));
console.log('PASS: nine lesson groups, all verified assignments, combined search/filter and empty-state recovery, exact PDF anchors, offline behavior.');

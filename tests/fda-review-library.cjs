const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const html=fs.readFileSync('dist/fda-review-library.html','utf8');
const data=JSON.parse(fs.readFileSync('research/fda-review-records.json','utf8'));
assert.deepEqual(JSON.parse(fs.readFileSync('dist/fda-review-records.json','utf8')),data);
const matches=[...html.matchAll(/<tr id="([^"]+)" data-kind="([^"]+)" data-stage="([^"]+)" data-modality="([^"]+)" data-status="([^"]+)">([\s\S]*?)<\/tr>/g)];
const rows=matches.map(m=>({id:m[1],dataset:{kind:m[2],stage:m[3],modality:m[4],status:m[5]},textContent:m[6].replace(/<[^>]+>/g,' '),hidden:false}));
assert.equal(rows.length,34);assert.equal(new Set(rows.map(r=>r.id)).size,34);
assert.deepEqual(rows.map(r=>r.id),data.records.map(r=>r.id));
const nodes={};for(const id of ['review-search','review-type','review-stage','review-modality','review-status','reset-filters','result-count','no-results'])nodes[id]={value:['review-type','review-stage','review-modality','review-status'].includes(id)?'all':'',hidden:false,handlers:{},addEventListener(k,fn){this.handlers[k]=fn;}};
vm.runInNewContext(html.match(/<script>([\s\S]*?)<\/script>/)[1],{document:{getElementById:id=>nodes[id],querySelectorAll:()=>rows}});
const visible=()=>rows.filter(r=>!r.hidden).map(r=>r.id);
const change=(id,value,event='change')=>{nodes[id].value=value;nodes[id].handlers[event]();};
change('review-search','  IVAcaftor  ','input');assert.deepEqual(visible(),['ivacaftor']);
nodes['reset-filters'].handlers.click();assert.equal(visible().length,34);
change('review-status','unapproved');assert.deepEqual(visible(),['tabelecleucel','clemidsogene','vusolimogene','phenobarbital-hikma']);
change('review-modality','small');assert.deepEqual(visible(),['phenobarbital-hikma']);
change('review-stage','initial');assert.equal(visible().length,0);assert.equal(nodes['no-results'].hidden,false);
nodes['reset-filters'].handlers.click();assert.equal(nodes['no-results'].hidden,true);assert.equal(visible().length,34);
change('review-stage','initial');change('review-type','reproduced');assert(visible().includes('ivacaftor'));assert(visible().includes('glycopyrrolate'));assert(!visible().includes('baricitinib'));
change('review-search','nebulization','input');assert.deepEqual(visible(),['glycopyrrolate']);
nodes['reset-filters'].handlers.click();change('review-type','meeting');assert.deepEqual(visible(),['sotorasib']);
nodes['reset-filters'].handlers.click();change('review-type','crl');assert.equal(visible().length,10);assert(!visible().includes('paxlovid'));
nodes['reset-filters'].handlers.click();assert(nodes['result-count'].textContent.startsWith('34 of 34'));
for(const r of data.records){
 assert(r.summary&&r.limitation&&r.approvalStatus&&r.sources.length&&r.verificationDate==='2026-09-16');
 assert(['initial','later','marketing'].includes(r.stage));
 const m=matches.find(m=>m[1]===r.id);
 assert.deepEqual([...m[6].matchAll(/#page=(\d+)/g)].map(x=>Number(x[1])),r.sources.map(s=>s.pdfPages[0]));
 for(const source of r.sources){assert(source.pdfPages.every(p=>Number.isInteger(p)&&p>0));assert(source.evidenceAnchor);assert(source.url.endsWith('#page='+source.pdfPages[0]));}
}
for(const m of html.matchAll(/<a\b([^>]+)>/g)){
 const href=m[1].match(/href="([^"]+)"/)[1];
 if(href.startsWith('https:')){assert(m[1].includes('target="_blank"'));assert(m[1].includes('rel="noopener noreferrer"'));assert(['www.accessdata.fda.gov','download.open.fda.gov','open.fda.gov','api.fda.gov','www.fda.gov','www.ecfr.gov'].includes(new URL(href).hostname));}
 else assert(fs.existsSync(path.join('dist',href.split('#')[0])));
}
assert(!/fetch\(|localStorage|sessionStorage/.test(html));
assert(html.includes('does not claim to contain every public IND-related record'));
assert(html.includes('not a manual reading of every page of all 458 letters'));
assert.equal(data.metadata.crlScreen.totalRecords,458);assert.equal(data.metadata.crlScreen.keywordHits,26);assert.equal(data.metadata.crlScreen.retained,10);
assert.equal(fs.readFileSync('research/ind-review-crl-screen.csv','utf8').trim().split('\n').length,27);
assert(fs.readFileSync('dist/fda-review-records.csv','utf8').includes('Letter of Authorization'));
assert.equal((fs.readFileSync('dist/app.js','utf8').match(/href="fda-review-library.html"/g)||[]).length,2);
console.log('PASS: 34 FDA records, 10 CRLs, exact page anchors, combined search/stage/type/modality/status filters, reset and empty-state recovery, local exports, external-link safety, and coverage disclosures.');

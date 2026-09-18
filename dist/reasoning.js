/* A shared reading surface for the nine IND-enabling reasoning chapters. */
function reasoningGuide(){return level().reasoningGuide;}
function isReadingChapter(lesson=level()){return lesson?.reasoningGuide?.format==='case-tabs';}
function isConceptChapter(lesson=level()){return Boolean(lesson?.reasoningGuide)&&!isReadingChapter(lesson);}
function isReadOnlyChapter(lesson=level()){return Boolean(lesson?.reasoningGuide);}
function reasoningReadingTopics(){const g=reasoningGuide();return [g.opening,g.bridge,g.workedCase,g.lessons];}
function reasoningReadingIndex(){const g=reasoningGuide(),id=g.readingTopics.some(t=>t.id===state.reasoningTopic)?g.lessons.id:state.reasoningTopic;return Math.max(0,reasoningReadingTopics().findIndex(t=>t.id===id));}
function reasoningReadingTopic(){return reasoningReadingTopics()[reasoningReadingIndex()];}
function reasoningPastTopics(){const g=reasoningGuide();return [...g.lessons.sequence,...g.readingTopics];}
function reasoningPastTopicId(){const topics=reasoningPastTopics();return topics.find(t=>t.id===state.reasoningPastTopic)?.id||topics.find(t=>t.id===state.reasoningTopic)?.id;}
function reasoningSavedPosition(lesson){
 const g=lesson?.reasoningGuide;if(!g)return undefined;
 if(g.format==='case-tabs')return {topic:reasoningReadingTopic().id,...(reasoningPastTopicId()?{pastTopic:reasoningPastTopicId()}:{})};
 return g.minimal?{}:{node:reasoningIndex()};
}
function reasoningIndex(){const g=reasoningGuide();return Number.isInteger(state.reasoningNode)&&g.nodes[state.reasoningNode]?state.reasoningNode:0;}
function reasoningCase(){const g=reasoningGuide();return g.cases.find(c=>c.id===state.reasoningCase)||g.cases[0];}
function reasoningOpeningActive(){return isReadingChapter()?reasoningReadingIndex()===0:Boolean(reasoningGuide().opening)&&state.reasoningIntro!==false;}
function reasoningReadingTabs(){
 const e=escapeHtml,index=reasoningReadingIndex();
 return `<nav class="hit-stage-nav lead-topic-nav reasoning-reading-tabs" aria-label="Chapter topics">${reasoningReadingTopics().map((t,i)=>`<button type="button" data-reasoning-topic="${e(t.id)}" aria-pressed="${i===index}" aria-controls="reasoning-reading-panel"><span aria-hidden="true">${i+1}</span>${e(t.label)}</button>`).join('')}</nav>`;
}
function reasoningReadingCase(c){
 const e=escapeHtml;
 return `<article class="reasoning-story" aria-labelledby="case-${e(c.id)}"><header><div><span class="reasoning-story-drug">${e(c.drug)} <small>${e(c.modality)}</small></span><h3 id="case-${e(c.id)}">${e(c.title)}</h3></div><p class="reasoning-story-stage"><strong>Source stage</strong>${e(c.stage)}</p></header><ol class="reasoning-story-steps">${c.steps.map((s,i)=>`<li><span aria-hidden="true">${String(i+1).padStart(2,'0')}</span><h4>${e(s.label)}</h4><p>${e(s.text)}</p></li>`).join('')}</ol><div class="reasoning-story-lesson"><span>What this teaches</span><p>${e(c.lesson)}</p></div><footer><p class="reasoning-story-limit"><strong>Keep the scope clear.</strong> ${e(c.limit)}</p><div class="reasoning-reading-sources">${c.sources.map(indSourceLink).join('')}</div></footer></article>`;
}
function reasoningSupportingCase(c){
 const e=escapeHtml;
 return `<details class="reasoning-support-case"><summary><strong>${e(c.drug)}</strong><span>${e(c.lesson)}</span></summary><div><p class="reasoning-support-stage">${e(c.modality)} · ${e(c.stage)}</p><p>${e(c.finding)}</p><p class="reasoning-story-limit"><strong>Keep the scope clear.</strong> ${e(c.limit)}</p><div class="reasoning-reading-sources">${c.sources.map(indSourceLink).join('')}</div></div></details>`;
}
function reasoningPastTopic(t){
 const e=escapeHtml;
 return `<div class="reasoning-past-content"><p class="reasoning-past-principle">${e(t.principle)}</p>${reasoningReadingCase(t.cases[0])}<details class="reasoning-comparison"><summary><span>Compare with</span><strong>${e(t.cases[1].drug)}</strong><span class="reasoning-comparison-title">${e(t.cases[1].title)}</span></summary>${reasoningReadingCase(t.cases[1])}</details>${t.moreCases.length?`<section class="reasoning-supporting" aria-label="More cases from FDA reviews"><h3>More from the FDA reviews <span>${t.moreCases.length}</span></h3>${t.moreCases.map(reasoningSupportingCase).join('')}</section>`:''}</div>`;
}
function reasoningHistoryVisual(v){
 const e=escapeHtml;
 return `<figure class="reasoning-history-visual history-${e(v.kind)}"><ol aria-label="${e(v.label)}" role="list">${v.nodes.map(n=>`<li class="history-evidence-${e(n.status)}"><span>${e(n.label)}</span><strong>${e(n.title)}</strong><p>${e(n.text)}</p></li>`).join('')}</ol>${v.note?`<figcaption>${e(v.note)}</figcaption>`:''}</figure>`;
}
function reasoningHistoryLesson(c,index,active){
 const e=escapeHtml;
 return `<details class="reasoning-history-case" id="past-lesson-${e(c.id)}" data-past-topic="${e(c.id)}" ${active===c.id?'open':''}><summary><span class="history-lesson-number">${String(index+1).padStart(2,'0')}</span><div><h3>${e(c.title)}</h3><p>${e(c.preview)}</p></div><span class="history-drug">${e(c.drug)}</span></summary><div class="reasoning-history-body"><div class="history-provenance"><strong>${e(c.stage)}</strong><span>${e(c.provenance)}</span></div><header><h4>${e(c.question)}</h4><p>${e(c.setup)}</p></header>${reasoningHistoryVisual(c.visual)}<div class="history-decision"><section><h4>${e(c.decision.label)}</h4><p>${e(c.decision.text)}</p></section><aside><h4>${e(c.lesson.label)}</h4><p>${e(c.lesson.text)}</p></aside></div><footer><p>${e(c.limit)}</p>${c.sources.map(indSourceLink).join('')}</footer></div></details>`;
}
function reasoningPastLessons(){
 const g=reasoningGuide(),p=g.lessons,e=escapeHtml,saved=reasoningPastTopicId(),active=saved||p.sequence[0].id,archiveOpen=g.readingTopics.some(t=>t.id===saved);
 return `<section class="reasoning-past-lessons" aria-labelledby="past-lessons-title"><header class="reasoning-learning-heading"><h2 id="past-lessons-title">${e(p.title)}</h2><p>${e(p.intro)}</p></header><nav class="reasoning-history-path" aria-label="Follow three lessons from FDA records">${p.sequence.map((c,i)=>`<button type="button" data-past-lesson="${e(c.id)}" aria-controls="past-lesson-${e(c.id)}"><span aria-hidden="true">${String(i+1).padStart(2,'0')}</span><strong>${e(c.label)}</strong><small>${e(c.drug)}</small></button>`).join('')}</nav>${p.sequence.map((c,i)=>reasoningHistoryLesson(c,i,active)).join('')}<div class="reasoning-history-takeaway"><h3>${e(p.takeaway.title)}</h3><p>${e(p.takeaway.text)}</p><small>${e(p.takeaway.note)}</small></div><details class="reasoning-history-archive" ${archiveOpen?'open':''}><summary><strong>${e(p.archive.label)}</strong><span>${e(p.archive.description)}</span></summary><div class="history-archive-body"><p>${e(p.archive.intro)}</p>${g.readingTopics.map((t,i)=>`<details class="reasoning-past-topic" data-past-topic="${e(t.id)}" ${saved===t.id?'open':''}><summary><span class="reasoning-past-number">${String(i+1).padStart(2,'0')}</span><div><strong>${e(t.label)}</strong><span>${e(t.cases.map(c=>c.drug).join(' · '))}</span></div></summary>${reasoningPastTopic(t)}</details>`).join('')}</div></details></section>`;
}
function selectPastLesson(id){
 if(state.screen!=='lesson'||!isReadingChapter()||reasoningReadingTopic().id!==reasoningGuide().lessons.id||!reasoningGuide().lessons.sequence.some(c=>c.id===id))return;
 state.reasoningPastTopic=id;render(false);queueStepSave(state.lesson,0);
 const summary=$(`#past-lesson-${id}>summary`);summary.focus({preventScroll:true});summary.scrollIntoView({block:'nearest',behavior:'instant'});
}
function reasoningSourceComparison(c){
 const e=escapeHtml;
 return `<div class="reasoning-comparison-scroll" tabindex="0" role="region" aria-label="Discovery paper, initial IND review and scientific rationale"><table class="reasoning-source-comparison" aria-describedby="source-comparison-rationale source-comparison-note"><caption class="sr-only">Compare biological evidence and why it matters for the IND.</caption><colgroup><col class="comparison-question-column"><col class="comparison-paper-column"><col class="comparison-ind-column"><col class="comparison-rationale-column"></colgroup><thead><tr><th scope="col">Scientific question</th><th scope="col">Discovery paper <span>Hadida et al. · 2014</span></th><th scope="col">Initial IND review <span>Written in 2006 · released in 2012</span></th><th scope="col" class="comparison-rationale">Why this matters for the IND <span>Scientific interpretation</span></th></tr></thead>${c.rows.map(r=>`<tbody><tr class="comparison-evidence"><th scope="row">${e(r.question)}</th><td><p>${e(r.paper.text)}</p>${indSourceLink(r.paper.source)}</td><td><p>${e(r.ind.text)}</p>${indSourceLink(r.ind.source)}</td><td class="comparison-rationale"><strong>${e(r.addition.label)}</strong><p>${e(r.addition.text)}</p></td></tr></tbody>`).join('')}</table></div><p class="reasoning-source-note reasoning-rationale-note" id="source-comparison-rationale">${e(c.rationaleNote)}</p><p class="reasoning-source-note" id="source-comparison-note">${e(c.note)}</p>`;
}
function reasoningCasePart(number,title,className,body){
 return `<details class="reasoning-case-part ${className}"><summary class="reasoning-case-part-heading"><span aria-hidden="true">${number}</span><h3>${escapeHtml(title)}</h3></summary><div class="reasoning-case-part-body">${body}</div></details>`;
}
function reasoningDiscoveryAssays(d){
 const e=escapeHtml;
 return `<p class="reasoning-assay-intro">${e(d.intro)}</p><ol class="reasoning-assay-map" aria-label="Questions addressed by the assay work">${d.assayMap.map(x=>`<li><strong>${e(x.label)}</strong><span>${e(x.text)}</span></li>`).join('')}</ol><div class="reasoning-assay-scroll" tabindex="0" role="region" aria-label="Ivacaftor experiments, assay systems and results"><table class="reasoning-assay-table" aria-describedby="assay-reading-note"><caption class="sr-only">Experimental evidence reported in the ivacaftor discovery paper.</caption><colgroup><col class="assay-name-column"><col class="assay-system-column"><col class="assay-result-column"><col></colgroup><thead><tr><th scope="col">Experiment</th><th scope="col">System and readout</th><th scope="col">Reported result</th><th scope="col">Interpretation</th></tr></thead><tbody>${d.assays.map(a=>`<tr><th scope="row"><span class="reasoning-assay-format">${e(a.format)}</span><strong>${e(a.label)}</strong>${indSourceLink(a.source)}</th><td><p>${e(a.system)}</p><p class="reasoning-assay-readout"><span>Readout</span>${e(a.readout)}</p></td><td><p>${e(a.result)}</p></td><td><p>${e(a.meaning)}</p></td></tr>`).join('')}</tbody></table></div><p class="reasoning-source-note" id="assay-reading-note">${e(d.note)}</p>`;
}
function reasoningIndCase(){
 const c=reasoningGuide().workedCase,e=escapeHtml;
 const discovery=`${reasoningDiscoveryAssays(c.discovery)}<footer><div class="reasoning-publication-caveat"><strong>Caveat: publication timing</strong><p>${e(c.discovery.limit)}</p></div><div class="reasoning-discovery-sources">${indSourceLink(c.discovery.source)}${indSourceLink(c.discovery.approvalSource)}</div></footer>`;
 const comparison=`<p class="reasoning-part-intro">${e(c.comparison.intro)}</p>${reasoningSourceComparison(c.comparison)}`;
 return `<article class="reasoning-ind-case" aria-labelledby="ind-case-title"><header class="reasoning-learning-heading"><span class="reasoning-ind-stage">${e(c.stage)}</span><h2 id="ind-case-title">${e(c.title)}</h2></header><section class="reasoning-ind-start"><figure><img src="${e(c.image)}" alt="${e(c.imageAlt)}"><figcaption><strong>${e(c.drug)}</strong><span>${e(c.identity)}</span></figcaption></figure><div><span class="reasoning-ind-label">The biological question</span><h3>${e(c.question)}</h3><p>${e(c.rationale)}</p></div></section><p class="reasoning-ind-timing">${e(c.timing)}</p>${reasoningCasePart(1,c.discovery.title,'reasoning-discovery-evidence',discovery)}${reasoningCasePart(2,c.comparison.title,'reasoning-compare-evidence',comparison)}<p class="reasoning-case-takeaway">${e(c.takeaway)}</p></article>`;
}
function reasoningBridge(){
 const b=reasoningGuide().bridge,e=escapeHtml;
 return `<article class="reasoning-bridge" aria-labelledby="bridge-title"><header class="reasoning-learning-heading"><h2 id="bridge-title">${e(b.title)}</h2><p>${e(b.intro)}</p></header>
 <ol class="reasoning-bridge-flow" role="list" aria-label="From discovery evidence to a biological rationale">${b.stages.map((s,i)=>`<li><span class="bridge-stage-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><span class="bridge-stage-label">${e(s.label)}</span><h3>${e(s.question)}</h3><p>${e(s.text)}</p></li>`).join('')}</ol>
 <section class="reasoning-bridge-connections" aria-labelledby="bridge-connections-title"><header><h3 id="bridge-connections-title">${e(b.gapTitle)}</h3><p>${e(b.gapIntro)}</p></header><div class="reasoning-bridge-scroll" tabindex="0" role="region" aria-label="Evidence available, unanswered questions, and possible additional work"><table class="reasoning-bridge-table"><thead><tr><th scope="col">Evidence in hand</th><th scope="col">Question for this candidate</th><th scope="col">Work that could close the gap</th></tr></thead><tbody>${b.gaps.map(g=>`<tr><th scope="row"><span>${e(g.label)}</span><p>${e(g.have)}</p></th><td><strong>${e(g.question)}</strong></td><td><p>${e(g.work)}</p></td></tr>`).join('')}</tbody></table></div></section>
 <div class="reasoning-bridge-close"><section><h3>${e(b.judgment.title)}</h3><p>${e(b.judgment.text)}</p><p class="bridge-scope">${e(b.judgment.scope)}</p></section><aside><span class="reasoning-kicker">${e(b.output.title)}</span><p>${e(b.output.text)}</p><p class="bridge-boundary">${e(b.output.boundary)}</p></aside></div>
 <footer class="reasoning-bridge-sources">${b.sources.map(indSourceLink).join('')}</footer></article>`;
}
function reasoningReadingContent(){
 const g=reasoningGuide(),id=reasoningReadingTopic().id;
 return id===g.opening.id?reasoningOpening():id===g.bridge.id?reasoningBridge():id===g.workedCase.id?reasoningIndCase():reasoningPastLessons();
}
function reasoningReadingView(){
 const l=level(),e=escapeHtml,topics=reasoningReadingTopics(),i=reasoningReadingIndex(),group=LEVELS.filter(x=>x.category===l.category);
 return `<div class="reasoning-chapter reasoning-reading-chapter"><header class="lesson-header"><div class="lesson-heading"><button class="lesson-map-back" data-action="overview" aria-label="Back to all levels">←</button><div class="lesson-title-block"><span class="lesson-location">${e(lessonLocation(l))}</span><h1>${e(l.title)}</h1></div></div><span class="reasoning-chapter-count">${group.indexOf(l)+1} <span>/ ${group.length}${done(l.id)?' · ✓':''}</span></span></header>${reasoningReadingTabs()}<div id="reasoning-reading-panel" class="reasoning-reading-panel">${reasoningReadingContent()}</div><div class="lesson-controls reasoning-controls reasoning-reading-controls">${i?`<button class="text-button" data-reasoning-topic="${e(topics[i-1].id)}">← ${e(topics[i-1].label)}</button>`:'<span></span>'}${i<topics.length-1?`<button class="button primary" data-reasoning-topic="${e(topics[i+1].id)}">${e(topics[i+1].label)} →</button>`:`<div class="reasoning-reading-finish"><button class="button primary" data-action="complete-reading" ${state.saving?'disabled':''}>${state.saving?'Saving…':done(l.id)?'Chapter complete ✓':'Mark chapter complete ✓'}</button><small>Saves your reading progress.</small></div>`}</div><div class="reasoning-footer"><p id="save-status" class="save-status ${state.saveError?'error':''}" role="status">${e(state.saveStatus)}</p><button class="text-button" data-action="sources">Sources &amp; reading ↗</button></div></div>`;
}
function selectReasoningTopic(id){
 if(state.screen!=='lesson'||!isReadingChapter()||!reasoningReadingTopics().some(t=>t.id===id))return;
 state.reasoningTopic=id;state.step=0;state.selected=null;state.feedback=false;
 navigateHash(`#small-molecule/${state.lesson}/0`,true);render(false);queueStepSave(state.lesson,0);
 const tab=$(`[data-reasoning-topic="${id}"]`);tab.focus({preventScroll:true});tab.scrollIntoView({block:'nearest',inline:'nearest',behavior:'instant'});
}
async function completeReadingChapter(){
 if(state.saving||state.screen!=='lesson'||!isReadingChapter()||reasoningReadingIndex()!==reasoningReadingTopics().length-1)return;
 const lesson=state.lesson,topic=reasoningReadingTopic().id;state.saving=true;render(false);
 saveQueue=saveQueue.then(async()=>{try{
  applyProgress(await request('/api/complete-reading',{lesson,topic,acknowledge:true}));state.saveStatus='Progress saved in this browser';state.saveError=false;
  if(state.screen==='lesson'&&state.lesson===lesson&&reasoningReadingTopic().id===topic){state.screen='complete';announce('Chapter completed and progress saved.');}
 }catch(e){state.saveStatus=e.message;state.saveError=true;}state.saving=false;render();});
 return saveQueue;
}
function reasoningContext(){
 const g=reasoningGuide(),e=escapeHtml;
 return `<details class="reasoning-context"><summary><span>At candidate nomination</span> Bring your existing evidence forward <span aria-hidden="true">+</span></summary><div><p><strong>Already in hand</strong>${e(g.inherited)}</p><p><strong>The study in view</strong>${e(g.context)}</p></div></details>`;
}
function reasoningTopicTabs(){
 const g=reasoningGuide(),e=escapeHtml,intro=reasoningOpeningActive();
 return `<nav class="hit-stage-nav lead-topic-nav reasoning-topic-tabs" aria-label="Chapter topics"><button type="button" data-reasoning-intro="${e(g.opening.id)}" aria-pressed="${intro}" aria-controls="reasoning-topic-panel"><span>1</span>${e(g.opening.label)}</button>${g.nodes.map((n,i)=>`<button type="button" data-reasoning-node="${i}" aria-pressed="${!intro&&i===reasoningIndex()}" aria-controls="reasoning-topic-panel"><span>${i+2}</span>${e(n.label)}</button>`).join('')}</nav>`;
}
function reasoningOpening(){
 const o=reasoningGuide().opening,e=escapeHtml;
 return `<article class="reasoning-fda" aria-labelledby="fda-opening-title"><header><span class="reasoning-kicker">The regulatory starting point</span><h2 id="fda-opening-title">${e(o.title)}</h2><p>${e(o.intro)}</p></header><ol class="reasoning-fda-requirements" aria-label="Three parts of the IND rationale">${o.requirements.map((r,i)=>`<li><span class="fda-requirement-number">${i+1}</span><h3>${e(r.title)}</h3><p>${e(r.text)}</p>${indSourceLink(r.source)}</li>`).join('')}</ol><aside class="reasoning-fda-focus"><div><strong>${e(o.reviewFocus.title)}</strong><p>${e(o.reviewFocus.text)}</p></div>${indSourceLink(o.reviewFocus.source)}</aside><section class="reasoning-fda-limits" aria-labelledby="fda-limits-title"><header><h3 id="fda-limits-title">${e(o.limitsTitle)}</h3><p>${e(o.limitsIntro)}</p></header><div class="reasoning-fda-limits-grid">${o.limits.map((x,i)=>`<article><header><span class="fda-limit-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><h4>${e(x.title)}</h4></header><div class="fda-limit-open"><p class="fda-limit-claim">${e(x.open)}</p><p>${e(x.text)}</p></div><div class="fda-limit-needed"><h5>Still needed</h5><p>${e(x.needed)}</p></div></article>`).join('')}</div><div class="reasoning-fda-sources">${o.limitsSources.map(indSourceLink).join('')}</div></section><footer class="reasoning-fda-takeaway">${e(o.takeaway)}</footer></article>`;
}
function reasoningStatus(status){return {supported:'Supported',inferred:'Inference',open:'Open question',challenged:'Needs reconsideration'}[status]||'Open question';}
function reasoningRail(){
 const g=reasoningGuide(),active=state.step===1?reasoningCase().mapFocus:state.step===2?g.nodes.length-1:reasoningIndex(),e=escapeHtml;
 return `<nav class="reasoning-rail" aria-label="Reasoning map" style="--reasoning-count:${g.nodes.length}">${g.nodes.map((n,i)=>`<button type="button" data-reasoning-node="${i}" aria-current="${i===active?'step':'false'}" aria-label="Understand: ${e(n.label)}" title="Explore ${e(n.label)}"><span class="reasoning-dot">${String(i+1).padStart(2,'0')}</span><span class="reasoning-node-label">${e(n.label)}</span></button>`).join('')}</nav>`;
}
function reasoningDiagram(v){
 const e=escapeHtml,type=['chain','bridge','contrast','timeline','matrix'].includes(v.type)?v.type:'chain';
 return `<figure class="reasoning-visual visual-${type}" aria-label="${e(level().reasoningGuide.nodes[reasoningIndex()].question)}"><div class="reasoning-visual-items" style="--visual-count:${v.items.length}">${v.items.map((item,i)=>`<div class="reasoning-evidence status-${e(item.status)}"><span class="reasoning-evidence-mark" aria-hidden="true">${item.status==='supported'?'●':item.status==='inferred'?'◐':item.status==='challenged'?'!':'?'}</span><h4>${e(item.label)}</h4><p>${e(item.text)}</p><span class="reasoning-status">${e(reasoningStatus(item.status))}</span></div>`).join('')}</div><figcaption>Conceptual map · assess each connection against your evidence.</figcaption></figure>`;
}
function reasoningUnderstanding(){
 const g=reasoningGuide(),i=reasoningIndex(),n=g.nodes[i],e=escapeHtml;
 if(reasoningOpeningActive())return reasoningOpening();
 return `${g.opening?reasoningContext():''}<section class="reasoning-focus" aria-labelledby="reasoning-question"><div class="reasoning-principle"><span class="reasoning-kicker">${String(i+1+(g.opening?1:0)).padStart(2,'0')} / ${String(g.nodes.length+(g.opening?1:0)).padStart(2,'0')}</span><h2 id="reasoning-question">${e(n.question)}</h2><p class="reasoning-principle-line">${e(n.principle)}</p><p class="reasoning-explanation">${e(n.body)}</p></div><div class="reasoning-drawing">${reasoningDiagram(n.visual)}</div><div class="reasoning-carry"><span>Carry forward</span><p>${e(n.decision)}</p></div></section><div class="reasoning-node-controls">${i?`<button class="text-button" data-reasoning-node="${i-1}">← ${e(g.nodes[i-1].label)}</button>`:g.opening?`<button class="text-button" data-reasoning-intro="${e(g.opening.id)}">← ${e(g.opening.label)}</button>`:'<span></span>'}${i<g.nodes.length-1?`<button class="text-button" data-reasoning-node="${i+1}">${e(g.nodes[i+1].label)} →</button>`:'<span></span>'}</div>${reasoningBoundary()}`;
}
function reasoningBoundary(){
 const b=reasoningGuide().boundary,e=escapeHtml;
 return `<details class="reasoning-boundary"><summary>FDA expectations &amp; scientific judgment</summary><div class="reasoning-boundary-grid"><div><h3>Regulatory requirement</h3><p>${e(b.required)}</p></div><div><h3>Guidance &amp; context</h3><p>${e(b.recommended)}</p></div><div><h3>The team's judgment</h3><p>${e(b.judgment)}</p></div></div><p class="reasoning-source">${indSourceLink(b.source)}${b.recommendationSource?' · '+indSourceLink(b.recommendationSource):''}</p></details>`;
}
function reasoningExamples(){
 const g=reasoningGuide(),c=reasoningCase(),e=escapeHtml;
 const entries=[['What was known',c.known,'known'],['What it supported',c.supports,'supports'],['What remained open',c.uncertain,'uncertain'],['Decision it informs',c.decision,'decision']];
 return `<div class="reasoning-case-layout"><nav class="reasoning-case-selector" aria-label="Documented cases">${g.cases.map((x,i)=>`<button type="button" data-reasoning-case="${e(x.id)}" aria-pressed="${x.id===c.id}" aria-controls="reasoning-case"><span>${i?'A different angle':'Follow the evidence'}</span><strong>${e(x.name)}</strong><small>${e(x.kicker)}</small></button>`).join('')}</nav><article id="reasoning-case" class="reasoning-case"><header><span class="reasoning-stage">${e(c.stage)}</span><h2>${e(c.name)}</h2><p>${e(c.context)}</p></header><div class="reasoning-case-trace">${entries.map(([label,text,tone],i)=>`<section class="case-trace-${tone}"><span class="case-trace-index">${String(i+1).padStart(2,'0')}</span><h3>${label}</h3><p>${e(text)}</p></section>`).join('')}</div><div class="reasoning-case-lesson"><span>Read the decision</span><p>${e(c.lesson)}</p></div><footer class="reasoning-case-sources">${c.sources.map(indSourceLink).join('')}</footer></article></div>`;
}
function reasoningPractice(){
 const g=reasoningGuide(),q=g.exercise,e=escapeHtml,selected=q.options[state.selected],correct=state.feedback&&selected?.correct;
 return `<section class="reasoning-practice"><div class="reasoning-practice-setup"><span class="reasoning-kicker">A decision to make · learning exercise</span><h2>${e(q.title)}</h2><p>${e(q.context)}</p><div class="reasoning-claim"><span>The proposed conclusion</span><blockquote>${e(q.claim)}</blockquote></div></div><div class="reasoning-practice-choices"><h3>${e(q.prompt)}</h3><fieldset class="choices"><legend class="sr-only">Choose the most defensible next decision</legend>${q.options.map((o,i)=>`<label class="choice ${state.selected===i?'selected':''}"><input type="radio" name="answer" value="${i}" ${state.selected===i?'checked':''}><span class="choice-letter">${String.fromCharCode(65+i)}</span><span>${e(o.label)}</span></label>`).join('')}</fieldset>${state.feedback&&selected?`<div id="feedback" class="feedback ${correct?'correct':''}" role="status"><strong>${correct?'A stronger argument.':'Reconsider the connection.'}</strong><p>${e(selected.feedback)}</p></div>`:''}</div>${correct?reasoningResult(q.result):''}</section>`;
}
function reasoningResult(r){
 const e=escapeHtml;
 return `<div class="reasoning-result"><header><span>Your revised argument</span><p>A conclusion with its evidence and limits attached.</p></header><dl>${[['Claim',r.claim],['Support',r.support],['Uncertainty',r.uncertainty],['Next decision',r.next]].map(([label,text])=>`<div><dt>${label}</dt><dd>${e(text)}</dd></div>`).join('')}</dl></div>`;
}
function reasoningMinimal(){
 const m=reasoningGuide().minimal,e=escapeHtml,d=m.distinction;
 return `<article class="reasoning-minimal" aria-labelledby="minimal-title"><header class="minimal-heading"><h2 id="minimal-title">${e(m.headline)}</h2><p>${e(m.intro)}</p></header><ol class="minimal-path" aria-label="The reasoning path" style="--minimal-count:${m.stages.length}">${m.stages.map((s,i)=>`<li><span class="minimal-marker" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><span class="minimal-stage-label">${e(s.label)}</span><h3>${e(s.question)}</h3><p>${e(s.text)}</p></li>`).join('')}</ol><section class="minimal-handoff" aria-label="How the purpose changes after lead optimization"><div><span>${e(d.beforeLabel)}</span><p>${e(d.before)}</p></div><div><span>${e(d.nowLabel)}</span><p>${e(d.now)}</p></div></section><p class="minimal-takeaway">${e(m.takeaway)}</p></article>`;
}
function conceptAtEnd(){return Boolean(reasoningGuide().minimal)||reasoningIndex()===reasoningGuide().nodes.length-1;}
function reasoningConceptView(){
 const l=level(),g=reasoningGuide(),e=escapeHtml,group=LEVELS.filter(x=>x.category===l.category);
 return `<div class="reasoning-chapter reasoning-concept-chapter${g.minimal?' reasoning-minimal-chapter':''}"><header class="lesson-header"><div class="lesson-heading"><button class="lesson-map-back" data-action="overview" aria-label="Back to all levels">←</button><div class="lesson-title-block"><span class="lesson-location">${e(lessonLocation(l))}</span><h1>${e(l.title)}</h1></div></div><span class="reasoning-chapter-count">${group.indexOf(l)+1} <span>/ ${group.length}${done(l.id)?' · ✓':''}</span></span></header>${g.minimal?reasoningMinimal():`<p class="reasoning-premise">${e(g.premise)}</p>${reasoningContext()}${reasoningRail()}<div class="reasoning-surface">${reasoningUnderstanding()}</div>`}${conceptAtEnd()?`<div class="lesson-controls reasoning-controls"><span></span><button class="button primary" data-action="complete-concept" ${state.saving?'disabled':''}>${state.saving?'Saving…':done(l.id)?'Chapter complete ✓':'Mark chapter complete ✓'}</button></div>`:''}<div class="reasoning-footer"><p id="save-status" class="save-status ${state.saveError?'error':''}" role="status">${e(state.saveStatus)}</p><button class="text-button" data-action="sources">Sources &amp; reading ↗</button></div></div>`;
}
async function completeConceptChapter(){
 if(state.saving||state.screen!=='lesson'||!isConceptChapter()||!conceptAtEnd())return;
 const lesson=state.lesson,node=reasoningGuide().minimal?undefined:reasoningIndex();state.saving=true;render(false);
 saveQueue=saveQueue.then(async()=>{try{
  applyProgress(await request('/api/complete-concept',{lesson,node,acknowledge:true}));state.saveStatus='Progress saved in this browser';state.saveError=false;
  if(state.screen==='lesson'&&state.lesson===lesson&&conceptAtEnd()){state.screen='complete';announce('Chapter completed and progress saved.');}
 }catch(e){state.saveStatus=e.message;state.saveError=true;}state.saving=false;render();});
 return saveQueue;
}
function reasoningLessonView(){return isReadingChapter()?reasoningReadingView():reasoningConceptView();}
function selectReasoningNode(value){
 if(state.screen!=='lesson'||!level().reasoningGuide||isReadingChapter()||reasoningGuide().minimal)return;
 const n=Number(value);if(!Number.isInteger(n)||n<0||n>=reasoningGuide().nodes.length)return;
 state.reasoningNode=n;state.reasoningIntro=false;state.step=0;state.selected=null;state.feedback=false;
 navigateHash(`#small-molecule/${state.lesson}/0`,true);render(false);queueStepSave(state.lesson,0);
 $(`[data-reasoning-node="${n}"]`).focus({preventScroll:true});
}
function selectReasoningOpening(id){
 if(state.screen!=='lesson'||isReadingChapter()||!level().reasoningGuide?.opening||id!==reasoningGuide().opening.id)return;
 state.reasoningIntro=true;state.step=0;state.selected=null;state.feedback=false;
 navigateHash(`#small-molecule/${state.lesson}/0`,true);render(false);queueStepSave(state.lesson,0);
 $('[data-reasoning-intro]').focus({preventScroll:true});
}
document.addEventListener('click',event=>{
 const past=event.target.closest('[data-past-lesson]');if(past){selectPastLesson(past.dataset.pastLesson);return;}
 const topic=event.target.closest('[data-reasoning-topic]');if(topic){selectReasoningTopic(topic.dataset.reasoningTopic);return;}
 const intro=event.target.closest('[data-reasoning-intro]');if(intro){selectReasoningOpening(intro.dataset.reasoningIntro);return;}
 const n=event.target.closest('[data-reasoning-node]');if(n){selectReasoningNode(n.dataset.reasoningNode);return;}
});
document.addEventListener('toggle',event=>{
 const group=event.target;if(state.screen!=='lesson'||!isReadingChapter()||reasoningReadingTopic().id!==reasoningGuide().lessons.id||!(group.matches?.('.reasoning-past-topic')||group.matches?.('.reasoning-history-case')))return;
 const id=group.dataset.pastTopic;if(!reasoningPastTopics().some(t=>t.id===id))return;
 if(group.open)state.reasoningPastTopic=id;else if(reasoningPastTopicId()===id)state.reasoningPastTopic=undefined;else return;
 queueStepSave(state.lesson,0);
},true);
document.addEventListener('keydown',event=>{
 const reading=event.target.closest('.reasoning-reading-tabs button');
 if(reading&&isReadingChapter()&&['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
  event.preventDefault();const topics=reasoningReadingTopics(),index=topics.findIndex(t=>t.id===reading.dataset.reasoningTopic);
  const next=event.key==='Home'?0:event.key==='End'?topics.length-1:(index+(event.key==='ArrowRight'?1:-1)+topics.length)%topics.length;
  selectReasoningTopic(topics[next].id);return;
 }
 const topic=event.target.closest('.reasoning-topic-tabs button');
 if(topic&&!isReadingChapter()&&level().reasoningGuide?.opening&&['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
  event.preventDefault();const count=reasoningGuide().nodes.length+1,index=topic.dataset.reasoningIntro?0:Number(topic.dataset.reasoningNode)+1;
  const next=event.key==='Home'?0:event.key==='End'?count-1:(index+(event.key==='ArrowRight'?1:-1)+count)%count;
  if(next===0)selectReasoningOpening(reasoningGuide().opening.id);else selectReasoningNode(next-1);
  return;
 }
 const n=event.target.closest('.reasoning-rail [data-reasoning-node]');
 if(!n||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)||!level().reasoningGuide||isReadingChapter()||reasoningGuide().minimal)return;
 event.preventDefault();const count=reasoningGuide().nodes.length,index=Number(n.dataset.reasoningNode);
 selectReasoningNode(event.key==='Home'?0:event.key==='End'?count-1:(index+(event.key==='ArrowRight'?1:-1)+count)%count);
});

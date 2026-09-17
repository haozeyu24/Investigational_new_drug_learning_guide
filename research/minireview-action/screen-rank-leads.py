#!/usr/bin/env python3
"""Manually adjudicated leads from the fixed cached-text census; no web changes."""
import csv,gzip,json,sqlite3,re
from pathlib import Path
from datetime import datetime,timezone
BASE=Path(__file__).resolve().parent
snapshot=json.load(open(BASE/'screen-snapshot.json'));rows=snapshot['documents']
def source(ending,pages,role):
 r=next(x for x in rows if x['url'].endswith(ending));text=json.load(gzip.open(r['text_file'],'rt'))['pages']
 return {'url':r['url'],'pdfPages':pages,'role':role,'textFile':r['text_file'],'cachedPDF':r['source_file'],'sha256':r['sha256'],'passages':[{'pdfPage':p,'text':text[p-1]} for p in pages]}
A='A: explicit IND pharmacology review or summary'
B='B: substantive IND-stage decision; stage-specific teaching'
C='C: useful contextual lead; pharmacology timing not established as IND'
leads=[]
def add(id,drug,modality,area,tier,stage,claim,lesson,limit,sources):
 leads.append({'rank':len(leads)+1,'id':id,'drug':drug,'modality':modality,'diseaseArea':area,'evidenceTier':tier,'stage':stage,'textVerifiedFinding':claim,'teachingQuestion':lesson,'limitation':limit,'sources':sources,'manualStatus':'Selected passages text-verified; not a complete review of every page in the document','checkedAt':datetime.now(timezone.utc).isoformat(timespec='seconds')})
add('avacincaptad','Avacincaptad pegol (Izervay)','RNA aptamer','Geographic atrophy',A,'NDA summary explicitly identifies studies reviewed under initial IND77902 in2008',
 'The review connects C5 binding and specificity to functional inhibition of classical/alternative complement pathways, cross-species activity, and ex-vivo pharmacodynamic assays. It explicitly identifies these as initial-IND pharmacology studies.',
 'What connects target binding to the intended biological effect, and what does a complement assay still leave unanswered about retinal benefit?',
 'The public2023 summary includes later ocular/systemic exposure comparisons; do not label all2023 interpretation as present in the2008 IND. Secondary pharmacology and safety belong mainly in neighboring lessons.',
 [source('217225Orig1s000PharmR.pdf',[20,22,23,24,25,26,27,28],'Initial-IND provenance and pharmacology')])
add('nemolizumab','Nemolizumab (Nemluvio)','Monoclonal antibody','Atopic dermatitis/pruritus',A,'BLA summary explicitly states studies originally submitted/reviewed under IND117122',
 'IL31RA binding and inhibition of IL31 signaling are followed by transfected-cell functional assays, patient-lesion receptor localization, and an IL31-induced itch model in cynomolgus monkeys.',
 'Does this candidate block the relevant pathway and change a disease-relevant function, rather than merely bind the target?',
 'The induced itch model is not the full human dermatitis syndrome. IND2013 and later2017 dose/endpoint discussions are distinct. One line in the source calls the antibody mepolizumab; retain correct nemolizumab attribution from context and do not reproduce the apparent typo.',
 [source('761391Orig1s000IntegratedR.pdf',[131,135,136],'IND provenance and binding-to-function-to-model chain')])
add('fosdenopterin','Fosdenopterin (Nulibry)','Small-molecule cofactor replacement','Molybdenum cofactor deficiency typeA',A,'Reproduced IND117502 assessment completed2020 on studies submitted2015–2019; reviewed at NDA stage',
 'The IND assessment links MOCS1 deficiency to missing cPMP, candidate replacement, restored sulfite-oxidase activity, disease-model biochemical changes and growth. Plasma SSC/urinary uric acid did not give a useful dose relationship despite biological activity.',
 'Which biomarker tells us the intended biology changed, and which biomarker can actually guide a treatment decision?',
 'The assessment expressly says these IND-submitted studies had not been reviewed before NDA submission. It is not an original first-dose clearance review, and model rescue is not proof of clinical benefit.',
 [source('214018Orig1s000IntegratedR.pdf',[168,170,179,180,181,182,183,184],'Original IND assessment cover, recommendation, and primary pharmacology')])
add('doxecitine-doxribtimine','Doxecitine/doxribtimine (Kygevvi)','Nucleoside combination','Thymidine kinase2 deficiency',A,'NDA summary identifies nonclinical studies submitted to IND134073 and reviewedMarch2023',
 'Published disease-model work and in-vitro mechanism studies connect pyrimidine nucleoside supplementation to skeletal-muscle mtDNA restoration, respiratory-chain function and survival/locomotor outcomes in TK2-deficient mice.',
 'How do molecular correction, tissue function and meaningful organism-level outcomes support one another?',
 'The reviewed literature includes both nucleotides dCMP/dTMP and nucleosides dC/dT, as well as different mouse models; they are not interchangeable candidate-material experiments. The text must distinguish supportive literature from studies of the final combination.',
 [source('219792Orig1s000IntegratedR.pdf',[143,144,145],'Explicit IND provenance, model mechanism and functional outcomes')])
add('evinacumab','Evinacumab (Evkeeza)','Monoclonal antibody','Homozygous familial hypercholesterolemia',A,'Most nonclinical studies described as previously IND-reviewed; separate earlier IND116398 meeting history',
 'The BLA pharmacology review links ANGPTL3 blockade to lipase activity and lipid effects in multiple models, with LDLR-independent VLDL-clearance rationale. Earlier IND correspondence called the LDL-lowering mechanism unknown and required more proof-of-concept experience before EOP2 discussion.',
 'What can be established about target action and patient relevance while the downstream mechanism is still being refined?',
 'The BLA says most, not every, nonclinical study was previously IND-reviewed. Its2020 mechanistic interpretation must not be backdated to the earlier correspondence. This is a chronology example, not a claim that the current mechanism remains unknown.',
 [source('761181Orig1s000PharmR.pdf',[17,18,20,21,22,23],'IND-linked pharmacology synthesis'),source('761181Orig1s000AdminCorres.pdf',[4,5],'Earlier IND uncertainty and proof-of-concept timing')])
add('romiplostim','Romiplostim (Nplate)','Peptibody','Hematopoietic acute radiation syndrome',B,'Actual October2017 pre-IND132396 meeting minutes for an additional indication',
 'FDA addressed whether mouse survival/PK/PD studies and proposed primate studies could predict human effectiveness, emphasizing model-human differences and the totality of evidence.',
 'When human efficacy experiments are impossible, how should the disease model and functional outcome be justified?',
 'This is the Animal Rule and an already-marketed drug being developed for a new indication; it is not a general requirement for two species in ordinary IND pharmacology. Some adjacent pages are image-only and remain unreviewed.',
 [source('125268Orig1s167.pdf',[210,211],'Reproduced pre-IND meeting and explicit model-to-human effectiveness discussion')])
add('brincidofovir','Brincidofovir (Tembexa)','Small-molecule nucleotide analog','Smallpox',B,'NDA virology synthesis explicitly references IND67681 and prior virology reviews throughout development',
 'FDA synthesized orthopoxvirus activity, resistance, survival in rabbit/mouse challenge models, dependence on immune status and uncertain benefit from emergency human cases. The record explicitly describes prior IND virology review.',
 'What makes an animal antiviral result relevant to human disease, and where do immunity, timing and concomitant treatment limit the inference?',
 'The source is an NDA-stage retrospective synthesis, not a reproduced original IND review. Animal Rule evidence and lack of controlled human efficacy are special circumstances.',
 [source('214460Orig1s000, 214461Orig1s000MicroR.pdf',[25,26],'Model relevance and explicit prior IND virology-review history')])
add('tividenofusp','Tividenofusp alfa (Avlayah/DNL310)','CNS-directed enzyme replacement fusion protein','Neuronopathic mucopolysaccharidosisII',B,'Actual IND139904 pre-BLA meeting and breakthrough review',
 'The sponsor linked CNS substrate reduction to downstream injury markers and cognitive/adaptive outcomes. FDA considered animal PD plus clinical/nonclinical dose-response potentially reasonable confirmatory evidence, while requiring raw data and adequate biomarker assay validation.',
 'How does a measured substrate reduction connect to the disease compartment and the patient outcome we hope to change?',
 'These are late-development accelerated-approval discussions, not first-human requirements. Sponsor proposals and FDA provisional agreement must remain distinguishable; a biomarker is not automatically a validated surrogate.',
 [source('761485Orig1s000AdminCorres.pdf',[6,9,40,41],'IND meeting discussion and biomarker-to-CNS-benefit rationale')])
add('levacetylleucine','Levacetylleucine (Aqneursa)','Small molecule','Niemann–Pick diseaseC',B,'NDA history of2018pre-IND and2019initial IND134369 decisions; separate later NDA pharmacology',
 'FDA allowed an exploratory study to proceed after protocol revision while warning that open-label data would not establish interpretable efficacy. Later NDA pharmacology discussed modest cellular/model effects and unclear molecular targets.',
 'What can a program learn when action is incompletely understood, and what kind of evidence can distinguish an apparent response from useful clinical benefit?',
 'The mechanism/model passage is explicitly under NDA studies and cannot be claimed as the initial IND rationale. Keep the2018–2019 trial-design decision separate from later mechanistic interpretation.',
 [source('219132Orig1s000IntegratedR.pdf',[140,143,144],'Specific pre-IND/IND decision and separately labeled NDA mechanism evidence')])
add('paltusotine','Paltusotine (Palsonify)','Small-molecule somatostatin receptor agonist','Acromegaly',B,'NDA summary recounts IND137912 phase2 protocol and later FDA meetings',
 'FDA considered the phase2 studies safe to proceed but questioned design; prior somatostatin therapy could confound apparent PD response, and the available data did not establish an adequate dose-response for proposed phase3 doses.',
 'Could an apparent pharmacodynamic effect belong to prior treatment or study design rather than to this candidate?',
 'These are clinical proof-of-concept and dose-selection decisions after human work began. They enrich the translational boundary, not a mandatory pre-IND assay list.',
 [source('219070Orig1s000IntegratedR.pdf',[150,151],'IND-stage control/washout and interpretation of IGF1 response')])
add('copper-histidinate','Copper histidinate (Zycubo)','Metal replacement compound','Menkes disease',B,'Reproduced IND034166 pre-NDA meeting history and review of investigator-initiated evidence',
 'FDA and sponsor discussed natural-history comparison, survival as the primary outcome, clinical progression at entry, and PD biomarkers while developing evidence from NIH treatment studies.',
 'How do disease stage, treatment timing and a meaningful outcome determine whether a biological replacement hypothesis can be evaluated?',
 'This source mainly informs clinical translation and rare-disease evidence design, not an original preclinical IND pharmacology package. Historical controls and retrospective data have limitations.',
 [source('211241Orig1s000AdminCorres.pdf',[5,17,19],'IND-stage evidence and endpoint discussions')])
add('tralokinumab','Tralokinumab (Adbry)','Monoclonal antibody','Atopic dermatitis',B,'Actual IND123797 TypeB written responses',
 'The sponsor proposed identifying biomarker-defined patients with enhanced efficacy. FDA distinguished a surrogate-endpoint claim from a biomarker-selected subgroup and required prespecification, error control and replication; the sponsor clarified the intended enrichment claim.',
 'Is a biomarker being used to show drug action, select patients, or replace a clinical outcome? These are different claims.',
 'This is phase3/labeling strategy within IND development. The correspondence records a discussion and clarification, not a rule that every enrichment biomarker must itself be a surrogate.',
 [source('761180Orig1s000AdminCorres.pdf',[69,70],'Actual sponsor/FDA exchange on biomarker-defined benefit')])
add('trofinetide','Trofinetide (Daybue)','Small-molecule peptide analog','Rett syndrome',B,'NDA controlled-substance review recounts IND-stage questions and responses',
 'Receptor binding only at micromolar concentrations did not straightforwardly explain hypothesized low-nanomolar neuroprotection. IND-stage questions led to additional nonclinical and clinical evidence about CNS/abuse effects.',
 'Do the concentrations and functional evidence actually support the proposed mechanism, or only a possible interaction?',
 'The regulatory decision concerns abuse-potential evaluation, so it is an adjacent caution rather than a complete benefit-rationale example. The source uses IND140184 and114319 in the same account; do not silently reconcile those numbers.',
 [source('217026Orig1s000OtherR.pdf',[22],'Mechanistic concentration mismatch and IND-stage follow-up')])
add('islatravir','Islatravir/doravirine (Idvynso)','Small-molecule antiviral combination','HIV1',B,'NDA virology review explicitly evaluates follow-up to December2021 IND partial hold',
 'The review separates antiviral activity from effects on lymphocyte growth, examines preferential intracellular active-metabolite accumulation, and explains how dose-dependent findings supported evaluating a lower dose.',
 'Does the disease-relevant assay distinguish desired antiviral action from unintended effects on the host cells used to measure it?',
 'This is a later clinical-hold investigation and belongs partly in safety/PK teaching. Its mechanistic work must not be presented as a complete original first-dose IND package.',
 [source('216964s000MicroR.pdf',[22,23,24,35,36,37],'Antiviral/cellular evidence and explicit IND-hold follow-up')])
add('ensitrelvir','Ensitrelvir (Xocova)','Small-molecule antiviral','COVID19',B,'NDA virology review identifies original IND157837 and substantive IND-stage clinical-virology advice',
 'The review distinguishes original IND safety history from later advice on next-generation sequencing/resistance data, while reviewing viral protease inhibition and cell-based antiviral evidence.',
 'How do resistance and the variants actually encountered by patients constrain a target-based antiviral rationale?',
 'The public passage proves IND virology engagement, but not that every antiviral experiment summarized in the NDA was part of the original IND. The initial hold was toxicology-related and is outside the benefit lesson’s central focus.',
 [source('220442Orig1s000MicroR.pdf',[12,13],'Explicit IND chronology/virology advice and action context')])
add('risankizumab','Risankizumab (Skyrizi)','Monoclonal antibody','Crohn disease',B,'NDA/BLA regulatory history of2013pre-IND118701 proof-of-concept planning',
 'The pre-IND discussion covered whether the nonclinical data and proposed phase2 design supported proof of concept in both TNF-naive patients and TNF nonresponders.',
 'Which patient groups does the existing rationale actually support, and what should the first disease-focused study resolve?',
 'The accessible page is a retrospective summary, not the meeting transcript or underlying nonclinical data. It documents that these questions were discussed, not the full reasoning or exact experiments required.',
 [source('761262Orig1s000IntegratedR.pdf',[110],'Explicit pre-IND patient-population and proof-of-concept planning')])
add('mavorixafor','Mavorixafor (Xolremdi)','Small molecule','WHIM syndrome',C,'IND history is documented, but the candidate-variant assays are explicitly summarized as NDA studies',
 'Binding and signaling assays test wild-type CXCR4, pathogenic WHIM variants and variants of uncertain significance, offering a useful structure for defining the disease context of a candidate’s action.',
 'Does candidate activity cover the biologically defined patient population rather than only one convenient experimental construct?',
 'Do not promote this table as original IND evidence: PDF109–110 explicitly calls it studies submitted with the NDA. Strong scientific teaching lead, weaker IND-stage provenance for these particular assays.',
 [source('218709Orig1s000IntegratedR.pdf',[108,109,110],'Separate IND history and NDA-stage variant pharmacology')])
add('sepiapterin','Sepiapterin (Sephience)','Small-molecule cofactor precursor','Phenylketonuria',C,'NDA review lists prior IND143698 reviews, but the highlighted mouse study appears under NDA studies',
 'PAH-mutant mouse work relates a biochemical challenge, phenylalanine reduction and increased PAH activity to the proposed action.',
 'Does the disease model test the proposed correction under a meaningful biological challenge?',
 'The adjacent IND-review history does not prove this specific mouse experiment was an initial-IND requirement. Use only as separately identified NDA-stage mechanistic support pending finer study-level provenance.',
 [source('219666Orig1s000IntegratedR.pdf',[153,154,155],'NDA/IND section boundaries and disease-model support')])
metadata={'snapshotTime':snapshot['time'],'rankedPrograms':len(leads),'scope':'Selected text-verified leads from the full fixed cached-text machine audit, not allFDA and not full manual review of every cached page. Exact page text retained below.','tiers':{'A':A,'B':B,'C':C},'interpretation':'Prioritize A for the core IND pharmacology lesson. B extends patient context, uncertainty, interpretability and translation at explicitly labeled later stages. C must not be described as direct IND pharmacology.'}
(BASE/'screen-ranked-leads.json').write_text(json.dumps({'metadata':metadata,'leads':leads},indent=2,ensure_ascii=False))
with (BASE/'screen-ranked-leads.csv').open('w',newline='') as f:
 fields=['rank','drug','modality','diseaseArea','evidenceTier','stage','textVerifiedFinding','teachingQuestion','limitation','urls_and_pdf_pages','text_files'];w=csv.DictWriter(f,fieldnames=fields);w.writeheader()
 for d in leads:w.writerow({**{k:d[k] for k in fields if k in d},'urls_and_pdf_pages':' | '.join(s['url']+' PDF '+','.join(map(str,s['pdfPages'])) for s in d['sources']),'text_files':' | '.join(s['textFile'] for s in d['sources'])})
print('Wrote',len(leads),'ranked program leads')

#!/usr/bin/env python3
"""Record the assigned third's bounded manual triage; not full-document scientific review."""
import json,collections
from pathlib import Path
from datetime import datetime,timezone
BASE=Path(__file__).resolve().parent
q=json.load(open(BASE/'screen-manual-queue.json'))
classes={'S':'substantive action-to-benefit','M':'mostly PK/safety/CMC','A':'administrative IND mention only','U':'uncertain/OCR'}
# Decisions below were made by reading candidate passages and adjacent pages where noted.
notes={
0:('S',[12,13],'Explicit original-IND and clinical-virology advice history accompanies antiviral mechanism/resistance material. Later NDA synthesis; not every assay proven to be in initial IND.'),
3:('M',[363,364],'Bio-IND is for methacholine challenge used in albuterol PD bioequivalence. Main issue is comparative study design/bridging, not a novel candidate benefit hypothesis.'),
6:('M',[2,11],'IND EOP2 discussion and regulatory action concern PK/PD comparability and therapeutic equivalence to Lantus.'),
9:('S',[33,37],'Actual IND124608 correspondence connects INI1-negative tumor cohorts, disease-control/response claims and confirmatory evidence. Later clinical development rather than initial pharmacology.'),
12:('S',[31,127,130],'Specific IND122138 FDA request to justify the need and component contribution for triple therapy; bibliography hits on127/130 add no IND evidence.'),
15:('M',[4,11,12],'Mechanistic efficacy is background; substantive FDA question is CAR-mediated rodent tumorigenesis and exposure/metabolic information.'),
18:('S',[18,19],'IND124025 exchange distinguishes overall versus EZH2-mutant populations and asks for mutation testing/efficacy evidence and appropriately powered subgroup analyses.'),
21:('U',[33,34],'Useful first-human satiety/nausea interpretability observation, but these pages do not establish that this trial or passage is IND-derived. Do not infer IND provenance from FIH alone.'),
24:('S',[21,22,23],'IND116471 meeting asks how mechanism, target expression and patient context justify extrapolation across indications for a biosimilar. Adjacent human-factors discussion is separate.'),
27:('M',[16,47],'Specific request for comparative ADCC/CDC/ADCP supports qualification of nude rats for toxicology; highly useful mechanistic safety/species case but not primarily disease-benefit validation.'),
30:('M',[39,40],'Pregnancy/lactation review uses class mechanism and PK to evaluate fetal risk and labeling; IND citation is secondary.'),
33:('S',[175,297],'PDF175 explicitly separates plausible diuretic/HF mechanism from exploratory outcome findings and points to well-designed heart-failure studies under IND. PDF297 concerns tumor-risk mechanism instead.'),
36:('M',[59,220],'Candidate dose rationale draws on surrogate ASOs and comparable PK; other passage concerns abuse potential. Study-may-proceed wording is an IDMC protocol clause, not FDA IND clearance.'),
39:('S',[30,32],'Actual EOP2 IND minutes compare lymphocyte PD with MRI lesion and relapse outcomes; a clinical-stage bridge showing that biological and disease outcomes are different measures.'),
42:('S',[25,26],'FDA virology synthesis explicitly refers to prior IND67681 virology reviews and evaluates model/immune-status limits for predicting human smallpox benefit. Retrospective Animal Rule context.'),
45:('S',[14,27,28,30],'IND131825 correspondence asks for activity by tumor type, mutation/fusion and concomitant drivers; BTD assessment links RET-mutant population to durable response. Some template text is not evidence.'),
48:('A',[7,16],'Approval-letter requirement to route future pediatric PK/PD protocols to IND119257. No reviewed action-to-benefit reasoning in matched material.'),
51:('S',[4,5],'IND116398 meeting history distinguishes known ANGPTL3 targeting, incomplete then-current downstream LDL mechanism and necessary proof-of-concept experience; later mechanistic understanding is in a different source.'),
54:('U',[9,10,11],'NDA review lists contact-lens onset/duration studies and repeats known ketotifen pharmacology. Only clinical studies are said to be under IND66883; specific pharmacology-study IND provenance is not established.'),
57:('A',[6],'Postmarketing pediatric protocol requirements/routing with PK/PD vocabulary; no IND action-to-benefit evidence assessment.'),
60:('M',[12,13],'IND meeting dates sit next to formulation/nonclinical bridging and drug-device PMOA jurisdiction. The matched mode-of-action phrase is a regulatory classification, not mechanistic benefit analysis.'),
63:('U',[122,123],'NDA supplement virology evaluates variant activity and genotype/outcome limits, but PIND/IND numbers appear as supporting-document references. The extracted pages do not identify an IND-stage scientific decision.'),
66:('M',[41],'Substantive pre-IND advice concerns fasting/fed/water bioequivalence, active metabolite exposure and first-dose cardiac monitoring.'),
69:('S',[4,16,17,18,19],'Original IND109678 BTD material connects long-acting antiviral prevention with adherence and population-specific HIV-acquisition evidence. Late clinical translational context, not initial nonclinical review.'),
72:('A',[7],'Approval-letter pediatric study and formulation requirements merely instruct submission to IND103461.'),
75:('S',[69,70],'Actual IND123797 exchange distinguishes a biomarker-defined response subgroup from a surrogate endpoint and discusses validation, prespecification and replication. Phase3/labeling context.'),
78:('M',[11],'IND correspondence requires CMC documentation for a surrogate antibody used in toxicology; material characterization/safety support is central.'),
81:('S',[44,69,70],'Specific IND110080 phase1b protocol history defines tumor cohorts and research PD-L1 selection; later pages explain immunologic mechanism/PD. Keep cohort history separate from later BLA summaries.'),
84:('M',[267],'Mechanism is contextual background in a pulmonary-risk consultation on S1P-modulator class effects.'),
87:('U',[41,42],'Drug-stabilizer mechanism and phase3 design are described in an NDA/BLA clinical-inspection summary; IND127387 is a background identifier, not evidence of an IND pharmacology decision.'),
90:('A',[16],'Hit consists of abbreviations/contents next to IND history. It does not contain substantive IND pharmacology or benefit reasoning.'),
93:('M',[4],'REMS decision and drug-interaction risk dominate; broad benefit/indication language is background.'),
96:('S',[6],'Direct IND124401 pre-NDA request for untreated-control strain growth data to judge model suitability for drug activity/PKPD targets. Clear model-interpretability teaching passage.'),
99:('M',[9,40,256],'Specific IND discussion concerns reproductive-toxicity waivers and integrated safety assessment; remaining hits are contents and bibliography.'),
102:('U',[338],'Source explicitly says the first-human trial was conducted outside theUS and not under theIND. Exclude as direct IND evidence despite FIH/PD matches.'),
105:('S',[7,110],'Retrospective but explicit pre-IND118701 discussion of nonclinical support, proof-of-concept trial and TNF-naive/nonresponder populations. Contents page adds no evidence.'),
108:('M',[212,344,345,347,348],'Matched IND-specific material reproduces genotoxicity study reviews and lists related INDs. This bounded passage triage does not adjudicate broader primary pharmacology elsewhere in the full ruxolitinib file.'),
111:('S',[106,109],'Explicit pre-IND development-plan agreement required changing the proposed clinical endpoint to time to impending relapse; later inspection concerns are distinct. Clinical-translation rather than basic pharmacology.'),
114:('A',[4],'IND program opening and cortisol-inhibition rationale are background in a pre-NDA meeting; matched material gives no specific benefit-evidence assessment.'),
117:('M',[19],'QT consult and labeling language explicitly reference earlier IND cardiac-safety review.'),
120:('S',[20,36,37,44,45],'IND127367 material identifies C5-inhibitor suboptimal responders and factorD add-on rationale/proof-of-concept hemoglobin change. Off-target safety passages and template instructions are separate.'),
123:('S',[40,41],'Actual IND140832/124865 correspondence connects IDH-mutant disease context, expansion population and clinical proof strategy. Later-stage meetings must not be labeled initialIND.'),
126:('M',[61],'Primate toxicology, immunophenotyping, TK and ADA; not disease-relevant efficacy-model evidence.'),
129:('S',[57,210,211],'Actual PIND132396 meeting directly discusses mouse/primate survival and PKPD evidence needed to predict human effectiveness under theAnimalRule. Some neighboring pages are image-only.'),
132:('M',[3,11],'Prodrug mechanism is background to relative bioavailability/clinicalPK bridging; contents hit is uninformative.'),
135:('S',[50],'Early FDA advice specifies ALK/cMET-negative patient accrual and potentialPD endpoints in theIND-enabling first-human protocol. Direct early patient-selection/biology bridge.'),
138:('M',[168,172,173],'Mostly ADME tables and first-human dose/formulation/safetyPK description. No matched candidate-to-disease-benefit decision.'),
141:('S',[40,41],'Applicant regulatory-history table explicitly ties pre-IND149842 nonclinical strategy to HER2-exon20-mutant refractoryNSCLC and subsequent IND study-may-proceed. Source is retrospective, not full meeting minutes.'),
144:('M',[15],'IND advice requires candidate-specific metabolism/THA-linker characterization and carcinogenicity information; supportive literature is insufficient for that purpose.'),
147:('S',[34,143,144],'Explicit IND134073-reviewed mechanism/model evidence links nucleosides to mtDNA restoration, tissue function and survival. Distinguish literature compounds/models from final-product experiments.'),
150:('S',[51,52,53,54],'Original IND120109 BTD review maps cMET-high/EGFR-WT tumor population, ADC mechanism and clinical-response evidence. Template questions alone are not the evidence.'),
153:('M',[48,49,50],'Pregnancy/lactation consult; FcRn mechanism and disease history support reproductive-risk/labeling discussion. IND citation partly refers to another product.'),
156:('S',[15,24,25],'IND135282 meeting distinguishes IgA PD reduction from proteinuria/eGFR outcomes; FDA advises considering clinical-response dose data. CMC receptor-blocking potency-assay discussion is a separate function.'),
159:('M',[40],'Biosimilar comparative analytical/functional characterization and rationale for omitting animaltox studies; primarily product comparability, not new patient-benefit hypothesis.'),
162:('U',[109,110,111],'NDA review distinguishes efficacy of different AML combinations; IND110159 is listed among source materials. Matched pages do not establish a specific IND-stage decision.'),
165:('S',[5,17,19],'Actual IND034166 meeting material links disease stage, survival/historical-control evidence and biomarkers in a rare-disease development program.'),
168:('A',[89,90],'Regulatory-history/ongoing postmarketing-study list with generic PKPD words; no relevant IND scientific passage.'),
171:('A',[6],'Approval-letter requirement to submit future pediatric study protocols to IND146112; routing only.'),
174:('M',[113,114],'QT labeling consultation based on earlier IND156446 cardiac-safety reviews; not disease-benefit pharmacology.'),
177:('M',[208,209],'DDI-management extrapolation across antibodies/cytokine effects; concern is drug interactions and labeling, not efficacy rationale.'),
180:('S',[25,27,28],'Actual IND127774 meeting distinguishes plasma-arginine lowering from functional motor benefit, asks for population/impairment details and sufficient study duration. Later clinical-development context.'),
183:('M',[3,4,5],'REMS benefit-risk summary, mainly hypersensitivity management. Better IND-derived biomarker evidence is in the separate AdminCorres source, not this risk-review hit.')
}
assert set(notes)=={r['index'] for r in q if r['assignedThird']==0}
items=[]
for i in sorted(notes):
 cls,pages,reason=notes[i];d=q[i]
 items.append({'queueIndex':i,'documentId':d['id'],'url':d['url'],'products':d['products'],'classification':classes[cls],'candidatePages':d['candidatePages'],'pagesReviewed':pages,'shortReason':reason,'textFile':d['textFile'],'triageScope':'Candidate passages and selected neighboring context; not full-document manual review','reviewStatus':'Manually triaged'})
counts=dict(collections.Counter(x['classification'] for x in items))
out={'metadata':{'fixedSnapshot':'screen-snapshot.json','queue':'screen-manual-queue.json','assignment':'Sorted unique source URLs; queueIndex%3==0','triagedDocuments':len(items),'classificationCounts':counts,'completedAt':datetime.now(timezone.utc).isoformat(timespec='seconds'),'warning':'Topic triage is not detailed scientific verification or a claim that all IND content in each PDF was found.'},'documents':items}
(BASE/'screen-manual-inventory.json').write_text(json.dumps(out,indent=2,ensure_ascii=False));print(json.dumps(out['metadata']))

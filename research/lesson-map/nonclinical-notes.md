# Nonclinical assignment and lesson construction

Reviewed 16 September 2026. This is the **34-record verified tranche**, not a claim that the complete 7,857-review index has been read. Every record's retained cited passages was inspected as original PDF text or rendered page images. Selected nonclinical passages were read beyond the original citation anchors. The map contains 29 verified passages across 20 records; exclusion from the map means that the inspected passages were unsuitable for substantive nonclinical teaching, not that the entire product package contains no nonclinical information.

## Deliverables

- `nonclinical.json`: passage-level assignments to the four nonclinical lesson IDs, with stage, evidence, decision, teaching use and limitations.
- `nonclinical-lessons.json`: four full replacement lesson objects for integration. The refined pharmacology custom structure is preserved. The three other lessons use the new decision-guide schema. All step source indices and handoff IDs were checked.

## Four connected lessons

| Lesson | Narrative and question | Learner action | Output | Main worked case |
|---|---|---|---|---|
| Connect drug action to potential benefit | Candidate nomination carries an evidence history. What does this candidate change, why does a relevant system respond, and what population hypothesis follows? | Retain model, molecule, assay conditions and endpoint; distinguish direct observation, causal inference and patient prediction. Reuse discovery evidence and investigate consequential gaps rather than restarting it. | Bounded therapeutic hypothesis plus a way to observe drug action. | Ivacaftor initial-IND pharmacology, PDF pp85–86: gating, signaling and disease-relevant epithelial evidence are complementary. |
| Connect dose, exposure, and effect | A dose only becomes informative when exposure and response can be connected over time. | Construct exposure and response tables; distinguish total/unbound, parent/metabolite, compartment and measured/projected data; select sampling needed to challenge the prediction. | Exposure–response argument and a useful next dosing/sampling plan. | Cinacalcet original IND, pp8/16: prior human PD/PK informs projected 75 mg exposure and animal LOAEL comparisons. |
| Identify and interpret potential harm | Observations require a judgment about severity, recovery and relevance; a favored explanation is not a result. | Build a hazard table, compare causal explanations, identify unresolved relevance, then justify a concrete action. | Risk-to-action handoff, with evidence gates before changed exposure. | Faricimab initial-IND review quoted on p26 and dose discussion on p15: an ADA explanation did not resolve the ocular concern; lower-dose human review preceded escalation. |
| Build a credible safety package | Evidence must support an actual product, route, population and duration. | Map existing knowledge and new gaps, audit study interpretability, link reports and records to claims and decision timing. | Traceable nonclinical support statement, with the scope of support and remaining conditions. | Glycopyrrolate actual initial-IND review pp31/33 and memo pp70–71: reuse systemic knowledge, evaluate local inhalation risk and the delivered product. |

Understand sections contain concepts and methods without named real programs. Cases appear separately, with historical stage and explicit decisionReview. Pharmacology's refined conceptual examples and source links were retained; its worked case now uses the actual initial-IND evidence. Case reasoning that is our teaching interpretation is identified, rather than presented as an invented FDA deficiency or a verbatim FDA instruction.

## Practical cross-lesson design

1. The reusable object is a **claim with evidence and limits**, not a drug-name card. A study can serve several questions, but the question and output must change. Ivacaftor p122 can support safety-study adequacy, and clinical-dose can use the same page for escalation limits without repeating an identical lesson.
2. Every case needs two clocks: the date of the underlying decision and the date of the public review preserving it. Original IND, later IND amendment, pre-NDA planning and marketing review remain visibly distinct.
3. The safety lesson ends with actionable uncertainty; package asks whether the whole supporting argument is interpretable and traceable. GLP, adequate exposure and biological relevance answer different questions.
4. Package hands off product identity, formulation, impurities and delivery questions to CMC. PK/PD and safety hand off dose assumptions, monitoring and conditions for escalation to clinical design. These connections are scientific dependencies, not simply navigation order.
5. Use the table-plus-decision structure for cases: proposal → evidence → concern → response → outcome → unresolved. Avoid showing the eventual approval as proof that the initial reasoning was complete.

## Full 34-record triage

| Record | Inspected passage and disposition |
|---|---|
| Ivacaftor | Initial-review provenance p79 visually verified; pp85–90,92,122 support mechanism, exposure, safety pharmacology and uncertain target-organ characterization. Retained. Initial review also includes responses/amendment. |
| Osimertinib | Appendix begins at p134 **after** NDA text. Read pp135–150, including p140 analyte/stability limitations and pp142/144 dog dosing holiday/ocular recovery. Retained. No claim that the full original IND is reproduced. |
| Suvorexant | p34 is retrospective initial-IND/formulation history; p66 explicitly summarizes prior IND pharmacology with substantive results. Both retained with different evidence stages. |
| Tofacitinib | p505 Table13 has explicit June2005 IND attribution; adjacent exposure margins are NDA interpretation and not automatically backdated. p41 gives later program/design gaps. Retained. |
| Venetoclax | pp28/64/96/99 read. p64 says starting dose based on mouse/dog pharmacology-toxicology but does not show those data. Retain as translation-limit/clinical-handoff passage, not a detailed nonclinical study case. |
| Sotorasib | pp12–13/17/20 read. p17 nonclinical package concurrence is conditional on later NDA review; no study table/results reproduced there. Retain only a short planning-versus-review checkpoint. |
| Pennsaid | Scanned pp45–46 visually read. Initial hold history, inadequate literature-only response, DMSO contribution, route/interaction questions and later accepted alternative evidence. Retained. |
| Levitra | Scanned pp16–17 visually read. Actual 1999 IND carcinogenicity protocol review requests parent/metabolite Cmax/AUC. Retained as later-development TK/planning. |
| Faricimab | pp15/16/26 read. Quoted initial assessment supports starting dose, limits high dose, discusses immune explanation/species; p16 clearly later development. Retained. |
| Atrovent | Scanned p38 visually read. Clinical comparability, lack of healthy-volunteer Phase1 data, device/valve CMC and clinical studies. Leave to CMC/clinical; not a nonclinical anchor. |
| Eovist | Scanned p72 visually read. Explicit unedited earlier IND attachments and concrete fertility-study design/provenance. Retain as audit exercise; no outcome inferred from design page. |
| Yasmin | Scanned pp34/38/40 visually read. p40 endocrine pharmacology is substantive and appendix identification p38 supplies provenance. Retain. p34 mixes initial-IND references with later evidence; do not assign every later finding to original IND. |
| Orfadin | Scanned p23 visually read. Interrupted legacy study, missing records/QA and ocular findings inform reuse limits. Retained as NDA discussion referring to IND evidence, not a reproduced initial review. |
| Halobetasol | pp103–104 read. Original-submission Q&A distinguishes initial single-dose support, bridge and later local safety. Retained; historical study recommendations remain case-specific. |
| Vestronidase | pp13/16 read, pp17/18/25 visually inspected. Retain pp17–18 for uptake/activity/translation and expose which observations use murine enzyme or literature, rather than calling all work clinical-product studies. |
| Cinacalcet | Scanned pp7/8/16 visually read. Actual original IND; proposed Phase2 study already has earlier human experience. Retained mechanism and quantitative exposure/PD case. |
| Baricitinib | pp246/248/249 read. Later IND amendment uses monitorable, reversible LOAEL effects to support longer clinical dosing, while distinguishing NDA needs. Retained. |
| Glycopyrrolate | pp31/33/70/71 read. Actual initial IND and follow-up impurity memo. Retained route-specific reuse and cross-discipline evidence. |
| Cemiplimab | pp13–14 read. Mechanism background is brief; substantive decisions concern clinical population, endpoints and BTD. Do not inflate the background paragraph into a nonclinical evidence case. |
| Futibatinib | pp35/37 read. Actual substantive discussion concerns clinical/product-quality partial hold and clinical response evidence; leave to CMC/clinical. |
| Oteseconazole | pp127/353/355 read. Initial single-dose history on p127 does not make later 2020 carcinogenicity work initial-IND support. Retain p355 as advanced later-development exposure/design audit. |
| Lenacapavir | pp319/332 read. p319 describes clinical injection-site uncertainty and product contamination; p332 mentions nonclinical pre-IND guidance but does not reproduce it. Leave primary assignment to CMC/clinical; nonclinical guidance details remain a lead. |
| Minocycline | pp140/147/148 read. Later IND review preserves EOP2 responses and sponsor's statement of earlier agreement. Retained as duration/extension planning, not initial trial package. |
| Paxlovid | p183 read. Clinical-protocol/CMC/IB deficiencies and broad mention of nonclinical advice do not establish substantive nonclinical study reasoning. Leave to integration/clinical/CMC. |
| Tabelecleucel | pp1/3 read. Marketing clinical design and external-control deficiencies; no substantive nonclinical passage. |
| Clemidsogene | pp1/2 read. Marketing population/biomarker interpretation, despite mechanism background and pre-IND history. No substantive nonclinical study assignment. |
| Vusolimogene | pp3/5 read. Clinical combination contribution and response interpretation; not a nonclinical experiment or animal model. |
| Phenobarbital-Hikma | p1 extracted and p2 visually read. Clinical dataset/authorization case; p2 also requests a more complete marketing-stage abuse-potential assessment and clarifies reliance on a listed drug. No actual nonclinical experiment is reproduced, so it is not retained as a main nonclinical case. |
| Arimoclomol | pp3/4 read. Clinical endpoint validity/estimand issue; no substantive nonclinical assignment. |
| Fosphenytoin | pp13/14 read. Product-quality monograph comment is explicitly additional/not an approvability issue; no nonclinical scientific reasoning. |
| Glucagon-Gvoke | Scanned pp1/2 visually read. Retained as marketing-stage limit on nonclinical PK scientific bridging; see anchor discrepancy below. |
| Soluprep | p7 read. Clinical control/replication deficiency; no nonclinical assignment. |
| Budesonide-Eohilia | p3 read. Clinical durability/meaningful benefit question; no nonclinical assignment. |
| StemCyte cord blood | p4 read. Donor eligibility/release distinction and IND access; no nonclinical study reasoning. |

## Coverage gaps and source corrections

- **Gvoke anchor mismatch:** the catalog's retained pp1–2 discuss the IV scientific bridge and explicitly say nonclinical PK is insufficient. They do not support the current summary's main compatibility-after-administration narrative. That narrative may belong to later pages; inspect and correct the parent record/source anchor separately. The nonclinical map intentionally uses the actual pp1–2 content.
- **Initial IND is not FIH:** cinacalcet's original US IND proposed a patient Phase2 trial after prior human studies. Several records introduce a new indication/formulation after development elsewhere. A stage filter needs more than the word “initial.”
- **Strongest mechanistic-to-patient cases are fewer than safety-package cases.** Do not fill every pharmacology lesson slot with a mechanism sentence from an administrative history. Candidate-specific experiments with causal/translation limits are preferable.
- **Nonclinical biomarker qualification, formal PK/PD model diagnostics, human dose-prediction validation, and modern NAM-based IND decisions remain thin in this tranche.** The general PK/PD teaching explains what evidence is needed; it does not imply that cinacalcet p16 supplies a full model-validation example.
- **Cell/gene modality-specific nonclinical decisions are not supplied by the retained CRLs.** Those records offer clinical and manufacturing learning; targeted pharmacology/toxicology reviews would be needed before making modality-specific claims.
- **Modern context:** FDA's current “CDER Streamlined Nonclinical Studies and Acceptable New Approach Methodologies (NAMs)” page was inspected alongside M3(R2), S3A, S7A and the S6(R1) landing page. Historical animal studies show actual reasoning, not a universal present-day checklist. No animal count, duration or waiver in these cases should be promoted to a general rule.

## Verification details

Original PDFs were already cached under `/tmp/ind-agent`, `/tmp/ind-review-library`, `/tmp/ind-part3-sources` and `/tmp/candidate-ivacaftor-fda-pharm.pdf`. PyMuPDF extracted page-specific text. Scanned cinacalcet, Pennsaid, Levitra, Eovist, Yasmin, Orfadin, Atrovent and Gvoke pages were read visually; vestronidase embedded pages and ivacaftor provenance were also rendered and inspected. An attempted local Vision OCR failed and supplied no usable evidence; no conclusion relies on that OCR attempt. Exact PDF page numbers, not printed page numbers, are used in the map URLs.

The two mapping/construction artifacts use paraphrases, with no fabricated FDA quotations. Numbers used in worked cases were checked against the original pages. The conceptual lesson source indices refer to regulatory/scientific guidance; case indices refer to the public review PDFs. Root integration should render case `stage` and `limit` prominently enough to prevent NDA-era evidence being mistaken for original IND support.

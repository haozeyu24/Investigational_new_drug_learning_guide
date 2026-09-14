# Learn IND — course architecture

**Source review date: 2026-09-14**  
**Status:** curriculum blueprint for a working prototype; chapter content and interactive assets require their own review.  
**Audience:** early R&D scientists who already understand biology/drug discovery but do not yet understand how a development candidate becomes a clinical-stage drug; this includes experimental scientists and computational biologists.  
**Jurisdiction:** United States, FDA first. Small molecules form the foundation; disease context and other modalities have separate extensions.

## Purpose and authorial voice

Start at the transition after lead optimization. Assume working knowledge of biology, discovery assays and SAR; do not reteach biology 101. Help a scientist explain what evidence a proposed human study needs, why each piece matters, who produces it, and how it reaches FDA. The outcome is useful development literacy and better collaboration with specialists. Course completion is not evidence of having led an IND or a regulatory-specialist certification.

The author's stated identity is a **“high agency mechanistic experimental and computational biologist who can use AI.”** Express that through questions such as: *What mechanism could explain this result? What can this model tell us? Which experiment would change the decision?* Use only verified biographical details; do not imply FDA affiliation or regulatory credentials.

Keep three views distinct throughout:

| View | Organizing question | What the learner sees |
|---|---|---|
| Scientific development | What uncertainty must we reduce for the proposed study? | Experiments, models, interpretation, dependencies and remaining gaps |
| Submission | Where is the evidence explained and documented? | IND components, summaries, reports, protocols and eCTD organization |
| Regulation and trial conduct | Under what conditions may this investigation proceed? | Sponsor obligations, FDA status, IRB review, consent and ongoing oversight |

A filing structure is not an experimental plan. Completing an experiment does not by itself establish that its evidence supports a particular clinical study. An effective IND is not marketing approval. [FDA IND overview][S1]

## Learning layers and navigation

- **Understand:** a 300–400-word explanation, one diagram, and three or fewer new terms. Chapters contain several of these short lessons rather than one long lecture.
- **See:** an optional 30–60-second animation or narrated drawing that reveals one relationship at a time. Captions, transcript, static alternative and pause controls are part of the asset.
- **Try:** one short manipulation or decision with immediate explanatory feedback. Allow skipping and returning; do not require a long fictional campaign.
- **Go deeper:** source excerpts in context, a glossary, worked examples and optional computational notebooks.

Borrow the useful interaction pattern of a branching simulator: inspect evidence → change one assumption or action → see which conclusions change → compare or reset. The displayed state records evidence and uncertainty, not invented probabilities of FDA success. Learning progress can record completed concepts; it must never masquerade as an FDA readiness score.

**Suggested routes:** start with chapter 1. A discovery scientist can then follow 2–12. A computational biologist can prioritize 3, 4, 8 and 16 while returning to the regulatory foundation. Chapters 13–15 are context extensions, not universal requirements. Prior knowledge can shorten the route; chapter numbers are navigation, not a mandatory development sequence.

## Foundation: small-molecule development

### 01 · What an IND enables

- **Outcomes:** distinguish discovery, candidate nomination, investigational use and marketing approval; identify separate conditions for starting a trial.
- **Visual:** three parallel lanes—evidence, FDA status and trial/site readiness—converging at first dosing. A brief cartoon can show the same dossier viewed by a scientist, reviewer and investigator.
- **Exercise:** reveal which prerequisite remains missing when an IND is effective but the study lacks IRB approval.
- **Boundary:** the initial 30 days run from FDA receipt, with earlier notification possible and clinical holds possible. Consent precedes study-specific research procedures. [IND overview][S1], [312.40][R1]

### 02 · From discovery result to development candidate

- **Outcomes:** explain nomination as an internal decision to advance a specific molecule; turn target validation, phenotypic screening and SAR results into testable development questions.
- **Visual:** an evidence map with separate branches for biology, molecule, exposure, safety, product and clinical use.
- **Exercise:** compare two candidate profiles and choose the next discriminating experiment; justify what result would change the choice.
- **Boundary:** no single potency ranking, nomination meeting or fully resolved mechanism guarantees clinical suitability. Discovery continues to inform development after nomination. [IND scientific content][S2]

### 03 · Translate discovery pharmacology into development evidence

- **Outcomes:** connect familiar potency, selectivity and phenotype data to the new development questions of exposure, target engagement, dosing schedule and interpretable clinical PD; identify which causal gaps matter for the proposed study.
- **Visual:** perturbation → engagement → pathway effect → phenotype, with each arrow independently inspectable.
- **Exercise:** identify what an orthogonal assay, rescue experiment or matched control would add to a causal claim.
- **Boundary:** a phenotype is not automatically evidence of the proposed mechanism; activity in one model is not proof of human benefit. Neither an in-vivo model nor a particular assay is a universal requirement. [IND scientific content][S2]

### 04 · DMPK and the dose–exposure–effect bridge

- **Outcomes:** define drug metabolism and pharmacokinetics (DMPK), pharmacokinetics (PK) and pharmacodynamics (PD); interpret dose, concentration, AUC, Cmax, half-life and oral bioavailability.
- **Visual:** linked dose, plasma/tissue concentration and PD plots; optionally compare equal-AUC curves with different peaks.
- **Exercise:** change dose timing in an explicitly simplified model and inspect exposure and time above a stated threshold. A second optional exercise compares oral and IV PK assumptions.
- **Boundary:** potency is not exposure; total plasma concentration is not automatically unbound tissue exposure; half-life is not effect duration. An exposure multiple depends on metric, interval, dosing context and reference finding. [FDA pharmacology/PK/TK teaching resource][S3]

### 05 · Design the nonclinical safety strategy

- **Outcomes:** match the study questions to patient population, route, schedule and planned duration; explain species selection using pharmacology, exposure, metabolism and model limitations.
- **Visual:** clinical-plan inputs linked to general toxicity, safety pharmacology, genetic/reproductive risks and other justified assessments.
- **Exercise:** select what evidence is needed to interpret a negative safety finding in a species with weak target inhibition.
- **Boundary:** do not teach “FDA requires dogs” or a fixed list for every IND. Explain the general M3(R2) framework before the separate S9 oncology context; label evolving non-animal approaches and their applicability. [M3(R2)][S4], [FDA nonclinical approaches][S5]

### 06 · Toxicology, TK and GLP

- **Outcomes:** distinguish exploratory dose ranging from safety studies supporting the clinical plan; read organ findings, severity, exposure, duration and recovery; explain toxicokinetics (TK) and good laboratory practice (GLP).
- **Visual:** an annotated study timeline connected to dose-formulation analysis, TK, clinical observations, laboratories and pathology.
- **Exercise:** trace one safety conclusion back to its source observations and identify missing exposure or recovery information.
- **Boundary:** GLP concerns study quality and integrity; it does not prove a compound safe or a model relevant. There is no universal 28-day design, mandatory recovery group or toxicity-free high dose. Recovery in animals supports inference, not certainty about humans. [GLP regulation][R2], [FDA TK resource][S3]

### 07 · CMC: the product that people will receive

- **Outcomes:** distinguish drug substance/API and drug product; explain identity, manufacture, impurities, specifications, batch results, stability and phase-appropriate good manufacturing practice (GMP).
- **Visual:** substance → formulation → batch → release/use, with evidence attached to each transition.
- **Exercise:** inspect a simplified specification and certificate of analysis; identify the difference between assay, chromatographic purity and a batch-release decision.
- **Boundary:** initial Phase 1 CMC need not be the commercial package. Formulation or process changes call for assessment of their implications, not automatic repetition of toxicology. GLP is not GMP; adequate characterization of toxicology material is not a blanket clinical-GMP-batch requirement. [Phase 1 CMC clarification][S6], [Phase 1 CGMP][S7]

### 08 · Biomarkers, assays and meaningful measurements

- **Outcomes:** distinguish predictive, prognostic, PD/response and safety uses; separate assay performance, biological interpretation, clinical evidence and formal biomarker qualification.
- **Visual:** sample → assay → measured feature → interpretation → decision. Show a separate bridge from a biomarker to clinical benefit.
- **Exercise:** assign different intended uses to an expression signature and identify the additional evidence each use needs.
- **Boundary:** a classifier's accuracy does not establish clinical utility; a PD change is not automatically a surrogate endpoint. Qualification is context-specific and is not a universal prerequisite for using every biomarker in an IND program. [FDA biomarker framework/BEST links][S8], [surrogate endpoints][S9]

### 09 · Clinical protocol, first dose and GCP

- **Outcomes:** identify objectives, endpoints, eligibility, dose/schedule, escalation, monitoring and stopping rules; understand how safety, PK, PD and uncertainty inform the starting dose; explain good clinical practice (GCP).
- **Visual:** a protocol annotated by the question each section answers; a dose-escalation path includes review and stopping branches.
- **Exercise:** connect one nonclinical finding to a proposed eligibility criterion or monitoring measure.
- **Boundary:** one IND can contain multiple protocols. Phase 1 does not universally mean healthy volunteers, 3+3 escalation or selection of the maximum tolerated dose. Starting-dose approaches depend on context; later optimization is a distinct task. [Clinical protocols][S10], [E6(R3)][S11]

### 10 · People, responsibilities and the investigator's brochure

- **Outcomes:** identify sponsor, investigator, sponsor-investigator, regulatory lead, scientific specialists, medical writers and publishing support; explain the general investigational plan and investigator's brochure (IB).
- **Visual:** “who produces, interprets, integrates and uses this evidence?” around a shared dossier; a comparison of protocol, IB and participant consent information.
- **Exercise:** assign a small startup's information gaps to appropriate expertise and identify decisions that require several disciplines.
- **Boundary:** this is a typical collaboration model, not a required organization chart. Outsourcing tasks is distinct from documented transfer of sponsor obligations. IB review is at least annual under E6(R3), revision as needed, with important new information communicated sooner when warranted. [Sponsor responsibilities][R3], [CRO transfers][R4], [IB guidance][S11]

### 11 · Assemble and navigate the submission

- **Outcomes:** map evidence into regional administrative material, summaries, quality, nonclinical reports and clinical material; distinguish the CTD content organization from eCTD electronic submission and document lifecycle.
- **Visual:** switch between an evidence-dependency graph and the five-module dossier tree.
- **Exercise:** place a study report, summary, clinical protocol and IB in their high-level US locations, then inspect the relationships.
- **Boundary:** US IBs sit in Module 1; clinical protocols sit in Module 5. Initial INDs need not populate every later-stage section. Electronic technical acceptance is not scientific authorization to proceed. [FDA eCTD overview][S12], [FDA CTD module teaching page][S13]

### 12 · Interact with FDA and maintain the IND

- **Outcomes:** distinguish a pre-IND request from its briefing package; formulate specific questions; interpret initial review, requests for information and holds; identify protocol amendments, information amendments, safety reports and annual reports.
- **Visual:** a correspondence timeline with parallel regulatory and trial-conduct actions.
- **Exercise:** improve a vague FDA question using a proposed plan and evidence, or route a new finding to the appropriate actions.
- **Boundary:** pre-IND advice is not authorization or a guarantee. A hold can affect some investigations and can occur after initial review; any FDA question is not automatically a hold. Annual reporting cannot replace expedited safety reporting, and ordinary amendments do not trigger a universal fresh 30-day wait. [Formal meetings][S14], [holds][R5], [maintenance sources][S15]

## Context and modality extensions

### 13 · Advanced oncology: a different benefit–risk setting

**Entry:** chapters 4–9. **Scope:** adults with advanced cancer and limited therapeutic options; do not silently extend to prevention, healthy volunteers or every cancer setting.

- **Outcomes:** identify where S9 changes nonclinical timing and expectations; understand why a NOAEL is not essential in this setting; distinguish initial dose, dose-limiting toxicity and later dosage optimization.
- **Visual/exercise:** switch the same program between patient contexts and reveal which assumptions need reconsideration; compare tumor control with normal-tissue recovery across schedules.
- **Boundary:** neither a xenograft response nor absent injury in a target-insensitive host establishes a human therapeutic window. Higher target selectivity cannot eliminate all on-target injury. [S9 and Q&A][S16], [oncology dose optimization][S17]

### 14 · Biologics and ADCs: change the model, not just the label

**Entry:** foundation plus chapter 13 for advanced-cancer examples. **Separate subpaths:** proteins/antibodies; antibody–drug conjugates (ADCs).

- **Outcomes:** recognize the implications of pharmacologically relevant species, immunogenicity and product attributes; distinguish conjugate, released payload and other relevant analytes in ADC interpretation.
- **Visual/exercise:** compare the evidence map for a small molecule, antibody and ADC; identify assumptions that cannot be copied across them.
- **Boundary:** do not automatically transfer the small-molecule species or PK rules. Refresh modality-specific guidance and emerging nonclinical alternatives when writing each lesson. [S6(R1)][S18], [FDA nonclinical approaches][S5]

### 15 · Cell and gene therapies: product, persistence and follow-up

**Entry:** foundation; teach gene delivery and cell products in distinct subpaths.

- **Outcomes:** recognize product identity/potency, process-change questions, biodistribution or persistence, delivery and longer-term risks as applicable; identify when specialized CBER expertise is needed.
- **Visual/exercise:** follow a manufactured cell product or delivered gene product across manufacture, administration and follow-up; identify where a conventional plasma concentration curve leaves important questions unanswered.
- **Boundary:** an advanced-cancer indication does not make S9's framework universally applicable to cell/gene products. Modality-specific lessons require current specialist review. [FDA CGT nonclinical framework][S19], [current CGT guidance library][S20]

### 16 · Computational evidence and AI: from prediction to a supported decision

**Entry:** chapters 3, 4 and 8. **Optional laboratory path:** reproducible analysis; PK/PD models; biomarker classifiers; AI-supported evidence assessment.

- **Outcomes:** define the decision and context of use before choosing a model; distinguish code verification, model validation and prospective experimental confirmation; recognize leakage, batch effects, missingness, transportability and uncertainty.
- **Visual/exercise:** compare an impressive random-split score with performance on an independent study; inspect calibration and subgroup failures, then choose the experiment or dataset most likely to change the decision. A PK/PD lab can vary assumptions and show uncertainty bands.
- **Boundary:** computational confidence is not biological proof or regulatory acceptance. State data provenance, excluded populations, model version and limitations. FDA's January 2025 AI guidance remains **draft**; its regulatory-evidence scope is not a blanket rule for every discovery algorithm or writing tool. [FDA AI draft guidance][S21]

## Assessment and reusable teaching assets

Use short explanations and an optional evidence notebook, not a constant examination. Feedback should identify the supported inference, the unsupported inference and a useful next observation. Accept more than one defensible experiment when assumptions differ.

Recurring assets should be reusable across chapters: a dose/exposure/effect drawing; an evidence-versus-inference label; a GLP/GMP/GCP comparison; a study/IND/marketing distinction; a glossary with units; and a source panel. A chapter can stand alone without the learner remembering a fictional company. Short cases illustrate a concept rather than drive every lesson.

The foundation capstone is a brief proposed-study evidence map: **what is known, what remains uncertain, which expertise is needed, and what would resolve the gap?** It assesses reasoning and communication, not a simulated FDA approval decision. Advanced capstones can add an oncology schedule comparison or a computational credibility memo.

## Accuracy and source governance

1. **Label the kind of claim.** Separate regulation, final guidance, draft guidance, scientific interpretation, illustrative model and author teaching choice. Use “required” only when the stated rule and scope support it; guidance recommendations need their own wording.
2. **Keep a claim record per lesson.** Record the claim, source title/URL and section, document date/status, applicable modality/population/stage, reviewer/date and next review trigger. Put the source link near the claim in public content.
3. **Review the lesson, not only its text.** Diagrams, cartoon implications, exercise feedback, equations and code can teach errors. Independently check units, intervals, unbound/total measurements, dose context and model assumptions. Make simplifications visible.
4. **Use appropriate reviewers.** A scientific author can own the narrative; toxicology, CMC, clinical/regulatory and computational sections need relevant reviewers before being presented as reviewed. Display actual review status, not an implied expert endorsement.
5. **Update deliberately.** Recheck time-sensitive rules, electronic standards and draft/final status before publication or revision. Use a scheduled editorial review interval plus event-triggered updates; preserve a dated change log and correct affected exercises.
6. **Protect evidence boundaries.** No invented FDA readiness percentages, precise hold probabilities or unsupported cost/time savings. Clearly mark fictional data, schematic exposure curves and reconstructed public cases; public documents rarely establish the complete content of a confidential IND.

This map is a substantial starting curriculum, not every issue in drug development. Detailed pediatric development, pregnancy, renal/hepatic impairment, drug interactions, vaccines, radiopharmaceuticals, combination products, expanded access, multinational submissions and marketing applications need separately scoped lessons and current sources.

## Source register

Sources below anchor the architecture; drafting each full lesson requires checking the relevant section and any newer product-specific material. Links and key status distinctions were reviewed on **2026-09-14**. Regulatory URLs identify the controlling topics; the review used FDA explanatory pages where direct eCFR access was unavailable.

| ID | Source and status/use |
|---|---|
| S1 | [FDA IND overview][S1] — investigational-use foundation |
| S2 | [FDA IND pharmacology/toxicology information][S2] — scope of scientific evidence |
| S3 | [FDA Pharmacology & Toxicology in the IB][S3] — December 2024 training, not a standalone regulation |
| S4 | [ICH M3(R2), FDA version][S4] — final general nonclinical framework |
| S5 | [FDA streamlined nonclinical studies and NAMs][S5] — living resource; individual entries may reference drafts |
| S6 | [FDA FIH small-molecule CMC clarification][S6] — phase-appropriate information |
| S7 | [FDA Phase 1 CGMP guidance][S7] — final July 2008 |
| S8 | [FDA biomarkers and qualification][S8] — links to FDA/NIH BEST terminology |
| S9 | [FDA surrogate endpoint resources][S9] — distinction from direct clinical benefit |
| S10 | [FDA IND clinical protocols][S10] — protocol contents and purpose |
| S11 | [FDA E6(R3)][S11] — final September 2025; includes IB Appendix A |
| S12 | [FDA eCTD][S12] — current standards and commercial/noncommercial applicability |
| S13 | [FDA CTD triangle teaching page][S13] — high-level US module placement |
| S14 | [FDA formal meetings guidance][S14] — final August 2026, supersedes the 2023 draft |
| S15 | [FDA annual reports][S15] — annual-report/DSUR relationship; pair with [protocol amendments][S22] and [safety reporting][S23] |
| S16 | [FDA S9][S16] and [S9 Q&A][S24] — final March 2010 / June 2018, defined advanced-cancer scope |
| S17 | [FDA oncology dosage optimization][S17] — final August 2024; does not address initial FIH starting-dose selection |
| S18 | [FDA S6(R1)][S18] — final May 2012; read with current product-specific developments |
| S19 | [FDA CGT nonclinical guidance][S19] — final November 2013 foundational document |
| S20 | [FDA CGT guidance library][S20] — current modality-specific documents and statuses |
| S21 | [FDA AI regulatory-evidence guidance][S21] — draft January 2025, not for implementation |
| R1–R5 | [312.40 investigational use][R1], [Part 58 GLP][R2], [312.50 sponsor responsibilities][R3], [312.52 CRO transfers][R4], [312.42 holds][R5] — regulation topics |

[S1]: https://www.fda.gov/drugs/types-applications/investigational-new-drug-ind-application
[S2]: https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-pharmacology-and-toxicology-pt-information
[S3]: https://www.fda.gov/media/185123/download
[S4]: https://www.fda.gov/media/71542/download
[S5]: https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/cder-streamlined-nonclinical-studies-and-acceptable-new-approach-methodologies-nams
[S6]: https://www.fda.gov/media/193163/download?attachment=
[S7]: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/current-good-manufacturing-practice-phase-1-investigational-drugs
[S8]: https://www.fda.gov/drugs/biomarker-qualification-program/about-biomarkers-and-qualification
[S9]: https://www.fda.gov/drugs/development-resources/surrogate-endpoint-resources-drug-and-biologic-development
[S10]: https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-clinical-protocols
[S11]: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/e6r3-good-clinical-practice-gcp
[S12]: https://www.fda.gov/drugs/electronic-regulatory-submission-and-review/electronic-common-technical-document-ectd
[S13]: https://www.accessdata.fda.gov/scripts/cder/training/eCTD/backgr/backgr/fd_02_01_0030.htm
[S14]: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/formal-meetings-between-fda-and-sponsors-or-applicants-pdufa-products
[S15]: https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-application-reporting-annual-reports
[S16]: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/s9-nonclinical-evaluation-anticancer-pharmaceuticals
[S17]: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/optimizing-dosage-human-prescription-drugs-and-biological-products-treatment-oncologic-diseases
[S18]: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/s6r1-preclinical-safety-evaluation-biotechnology-derived-pharmaceuticals
[S19]: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/preclinical-assessment-investigational-cellular-and-gene-therapy-products
[S20]: https://www.fda.gov/vaccines-blood-biologics/biologics-guidances/cellular-gene-therapy-guidances
[S21]: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-use-artificial-intelligence-support-regulatory-decision-making-drug-and-biological
[S22]: https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-application-reporting-protocol-amendments
[S23]: https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-application-reporting-ind-safety-reports
[S24]: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/s9-nonclinical-evaluation-anticancer-pharmaceuticals-questions-and-answers
[R1]: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-C/section-312.40
[R2]: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-58
[R3]: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D/section-312.50
[R4]: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D/section-312.52
[R5]: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-C/section-312.42

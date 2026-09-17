# Rebuilding IND-enabling development from public FDA decisions

Research and construction plan · 16 September 2026 · Work in progress

## Objective

Part 3 should teach how a program team turns a nominated candidate and existing knowledge into a justified, executable human study. The reader should be able to explain what additional evidence is needed, why it is needed for this study, how different functions depend on one another, and what findings would change the plan.

The source collection supports that account. It is not the curriculum itself. A long reading list or a separate list of principles for each discipline will not meet the objective.

## Search scope and completion rules

Search the public FDA record systematically, retaining both approved and unapproved application contexts. Small-molecule cases form the main teaching path; biologics, established-drug reformulations, and later-development cases are clearly labeled comparisons. Do not exclude a program from research merely because it is unsuitable as the main beginner example.

| Search stratum | Starting population | Required work | Completion means |
| --- | --- | --- | --- |
| Drugs@FDA Review index | All 7,857 Review-type rows in the downloaded snapshot | Deduplicate URLs; resolve package pages to their linked reviews; retrieve PDFs; extract page-level text; identify relevant sections; verify substantive passages | Every index row has a documented disposition; accessible relevant passages are adjudicated; unresolved retrieval and OCR failures remain visible |
| Other Drugs@FDA document types | Full ApplicationDocs table: 81,081 rows in this snapshot, including Review rows | Audit type labels; enumerate correspondence, meeting, multidisciplinary, and related records not reached through Review packages; deduplicate against the first stratum | Relevant document-type queues have counts and dispositions, rather than being assumed covered by the Review filter |
| Public complete response letters | All 458 records in the saved openFDA snapshot | Re-screen beyond literal IND keywords; review clinical, nonclinical, CMC, protocol, reference-rights, and historical-advice passages; inspect original PDFs | All records accounted for; keyword-negative alone is not a final exclusion; distinguish marketing-stage concerns from initial-IND decisions |
| CBER supporting documents | FDA product supporting-document pages and annual approval indexes | Enumerate accessible review and regulatory-action documents; follow explicit earlier IND references | Defined indexes and dates, retrieved files, exclusions, and failures recorded; no claim that Drugs@FDA covers all CBER records |
| Advisory-committee and other public records | FDA meeting indexes and targeted searches | Search named programs and uncovered issues; inspect FDA briefing documents and public correspondence for substantive investigational evidence | Search log and program-level follow-up completed for the defined scope; this stratum is not represented as a closed census of every possible web page |
| Cross-references | Earlier review dates, IND numbers, studies, and meeting references found in the above | Seek actual public source; preserve an unresolved-source list when the underlying document is unavailable | Every useful reference is located or explicitly unresolved; a secondary mention is not promoted to an original review |

“Exhaustive” can describe a completed screen of a defined public index and date. It cannot describe confidential IND files or guarantee that no unindexed public document exists. The final report must state precisely which strata were completed. It must never call the entire task complete because one batch or a keyword search finished.

Track separately: index rows, unique URLs, package pages, discovered PDFs, successfully extracted PDFs, image-only/OCR-needed files, keyword candidates, verified passages, exclusions, retryable errors, and unreviewed documents. Keep source dates and review dates distinct. Save checksums and a resumable manifest. Retrieval should be conservative and retain failures rather than bypass access restrictions.

## Passage-level extraction

One application can supply several passages; one passage can support more than one lesson. Store:

- Drug, modality, application, IND identity where visible, source URL, PDF viewer page, printed page where useful, and underlying review date.
- Stage: pre-IND, initial IND, later IND/amendment, or marketing review; distinguish reproduced earlier review from retrospective summary.
- Proposed population, route, schedule, duration, and clinical purpose when available.
- Existing evidence; unresolved question; sponsor proposal; FDA assessment; requested work or study restriction; subsequent response/outcome only when documented.
- Primary lesson and justified secondary lessons; what this would teach; what the public source cannot establish.
- Verification method and confidence. Keep machine-detected leads outside the verified teaching collection.

Do not infer missing work from missing disclosure. Do not invent exact development chronology or formal DC nomination dates. Do not transplant historical doses, margins, impurity limits, or study requirements into current recommendations.

## The common story across Part 3

Candidate and inherited evidence → Proposed human study → Evidence gaps and connected work → Integrated assessment → Study conditions and remaining uncertainties.

This is the reading order, not a claim that development happens in a straight line. A clinical-plan change can require different nonclinical coverage or product supply. A material change can require analytical or biological bridging. New toxicity or exposure information can change dose, monitoring, duration, or candidate choice.

The overview should show this shared decision. The nine lessons should each resolve one part of it and produce an output that another lesson uses.

## Nine lessons and their concrete outputs

| Existing lesson | The decision the reader should learn to make | Evidence to reconstruct from reviews | Output carried forward |
| --- | --- | --- | --- |
| 3A · Connect mechanism to disease benefit | What does this candidate do, in which biological context, and why is the proposed population reasonable? | Candidate versus tool evidence, relevant pharmacology, response and nonresponse, model limitations, mechanistic uncertainty, justification of biomarkers | A bounded candidate-specific therapeutic and population hypothesis; what the early study can test |
| 3A · Connect dose, exposure, and effect | What exposure pattern is needed for the intended effect, and can it inform a feasible human regimen? | Bioanalysis, PK/PD and time course, target-tissue considerations, metabolites, species relevance, projections and their uncertainty | An exposure–effect account with assumptions and gaps, passed to toxicology and dose planning |
| 3A · Identify and interpret potential harm | Which findings matter for people at the proposed exposure, and what should change because of them? | Target organs, severity, exposure relationship, reversibility, on/off-target interpretation, metabolite and species issues, monitoring feasibility | A prioritized hazard assessment linked to exposure, monitoring, exclusions, or further work |
| 3A · Build a credible safety package | Is the total evidence reliable and sufficient for this particular study? | Study design, species and route rationale, duration coverage, test material, GLP where applicable, report quality, bridging, unresolved findings | A study-support matrix: what is covered, what is not, and which conditions or studies remain necessary |
| 3B · Define the drug people will receive | Is the intended clinical product adequately defined, and how does it relate to tested material? | Drug substance/product identity, salt or solid form, formulation, strength, route, excipients, device, nonclinical-to-clinical differences | A product definition and a map of material differences that require justification |
| 3B · Make and control consistent material | Can the process and tests consistently supply material of appropriate quality? | Manufacturing controls, characterization, analytical methods, specifications, impurities, batch information, changes and bridging | A control strategy with justified acceptance criteria and unresolved process questions |
| 3B · Keep the product suitable through dosing | Will the product remain suitable during storage, preparation, and administration? | Stability, container/closure compatibility, particles, degradation, in-use conditions, dilution, device delivery | Supported storage and handling conditions, use period, and administration instructions |
| 3C · The first clinical study | Who should enter, what should be learned, and how will participants be protected? | Population and eligibility rationale, study objectives, endpoints, design, safety monitoring, stopping rules, protocol changes and responsibilities | An interpretable, operational study outline connected to the known uncertainties |
| 3C · Justifying a first dose | What starting exposure and escalation plan does the combined evidence support? | Applicable starting-dose approaches, projected human PK, pharmacological and toxicological boundaries, uncertainty, escalation/maximum exposure restrictions | A reasoned starting-dose and escalation proposal with explicit evidence, assumptions, and review points |

Working boundary: exposure–effect explains the biology and disposition; hazard interpretation explains the concerning findings; package adequacy judges the collective support; clinical dose planning integrates them into a protocol. These distinctions prevent four repetitions of PK/PD or toxicology principles.

## How lessons should look and behave

Keep concepts and published examples distinct. The user has specifically authorized a short backup case in the overview; that exception does not make every Understand page a mixture of programs.

**Understand:** begin with a concrete team question. Show one visual explanation of the work and decision, then a compact evidence table where needed. End with the output and the handoff to another lesson. Supporting definitions belong beside the relevant decision or in optional detail, not in a long block below the main figure. Internal tabs should follow the actual reasoning; do not impose an arbitrary number on all lessons.

**See an example:** reconstruct a documented decision. Present the proposed study and evidence available at that time, the concern, the sponsor/FDA exchange, and the consequence. Use a small table for measured findings, not a wall of review prose. Offer exact PDF pages and stage labels. Reveal a response or decision after the learner has inspected the evidence where that helps learning.

**Try it:** ask for a justified next step, interpretation, or missing piece of evidence. Plausible alternatives should expose the real tradeoff. Do not turn historical numbers into universal thresholds. Explain why a choice is insufficient for this study, and which new finding would change the answer.

A consistent visual grammar should connect the section: horizontal decision flow, readable evidence tables, one clearly marked uncertainty, and a handoff to the related lesson. A research librarian view can be dense; the lesson itself should remain selective.

## Choosing cases after the search

Select the strongest cases by decision clarity and source completeness, not by fame or a quota of examples. Prefer an initial-IND case for the core story; add later-stage examples only to explain how evidence requirements evolve. Do not force one drug to cover all nine lessons if public CMC or clinical records are inadequate.

Initial candidate anchors, pending the complete passage map:

- Ivacaftor: nominated molecule to nonclinical assessment and proposed clinical-dose limits.
- Glycopyrrolate inhalation: existing knowledge, route-specific work, impurity/stability assessment, and administration conditions; explicitly an established-drug presentation.
- Faricimab: starting-dose support versus escalation concerns; biologics comparison.
- Paxlovid: initial submission completeness and inability to assess risk; do not portray missing information as molecular toxicity.
- Baricitinib: how amended evidence supports a longer trial without automatically supporting a chronic marketing indication; historical case, not current numerical rules.
- Additional cases should earn a place by filling a decision gap. CRLs with late-stage efficacy problems may illuminate downstream consequences but should not dominate initial-study teaching.

Use current FDA/ICH material to check the interpretation and distinguish requirements from recommendations and program-specific judgment. Historical FDA reviews explain what happened; they do not by themselves define today's universally required package.

## Deliverables and order of work

1. **Coverage ledger and search protocol:** this plan plus the full-index manifest and failure/OCR queue. Already started; full screen incomplete.
2. **Verified passage map:** nine-lesson assignments with source pages, decisions, stage, and limits. The existing 34 records are the first tranche, not the end of the search.
3. **Lesson construction blueprint:** one connected narrative and proposed diagrams/tables/exercises per lesson; highlight unsupported or thin areas.
4. **Case short list and deep reconstructions:** enough detail to teach decisions across lessons, with explicit boundaries between programs.
5. **Website enrichment:** revise Part 3 in coherent groups (3A, 3B, 3C), preserve Part 2 and learning progress, verify all interactions, then integrate the overview across all three.
6. **Evidence audit:** verify source links/pages, scientific interpretation, chronology, units, historical/current distinction, and that every lesson's main question leads to an answer or defined unresolved issue.

Do not mark the search complete when the first tranche, first machine pass, or first set of rewritten lessons is complete. Research may continue in the background while verified lessons are developed. Every interim delivery must state its coverage.

## Search starting points

- [Drugs@FDA database download and schema](https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files)
- [FDA public complete response letters](https://open.fda.gov/apis/transparency/completeresponseletters/)
- [CBER product approval information](https://www.fda.gov/vaccines-blood-biologics/center-biologics-evaluation-and-research-cber-product-approval-information)
- [FDA advisory committees and public meeting materials](https://www.fda.gov/advisory-committees)
- [IND information disclosure rule](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-F/section-312.130)

## First implementation delivered for review

All nine Part 3 lessons now have a developed draft: 27 internal Understand views, nine worked FDA cases, and decision exercises. Part 2 and the overview content were preserved. The source-to-lesson map contains 70 verified assignments across 29 programs from the original 34-record tranche. The complete source index retrieval and screening is still running; no exhaustive-search completion is claimed.

The website separates conceptual explanations from the worked cases, labels historical stages explicitly, and distinguishes our pharmacology interpretation from an actual FDA deficiency. CMC concepts were edited to keep named-program narratives in the examples. A Gvoke source anchor was corrected to PDF page 3. Lesson handoffs point to active lessons.

Validation: source-index and table schemas, all 27 internal views, nine case views, exercise completion guards, handoff navigation, progress preservation, library filters, and the source-map filters. This validation used source and mocked-DOM checks, not a browser visual review.

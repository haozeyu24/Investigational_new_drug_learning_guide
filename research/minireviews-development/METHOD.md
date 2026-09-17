# Search and review method

*Eight focused reviews of IND-enabling development · September 17, 2026*

## Scope

These reviews extend the previous [drug-action-to-benefit mini-review](../minireview-action/drug-action-potential-benefit.md) to the other eight topics in Parts 3A, 3B and 3C. Their purpose is to guide lesson construction using documented scientific and regulatory decisions. They do not modify the guide or establish a universal IND checklist.

## Frozen search denominator

At **2026-09-17 15:02:43 UTC**, the available extracted corpus was frozen at **7,979 PDF URLs, 7,933 unique file hashes and 467,510 PDF pages**. Of those pages, **77,998 had low text or needed OCR**. The upstream index began with 7,857 rows resolving to 7,179 normalized URLs; package expansion yielded additional PDF links. Index rows, URLs, unique files, applications and drug programs are different units.

The script read all available page text in that frozen corpus, then searched for topic terms near stronger IND references, review language, clinical-hold decisions or other development context. It produced the following retrieval queues:

| Topic | Candidate documents | Candidate pages |
|---|---:|---:|
| Connect dose, exposure, and effect | 462 | 818 |
| Identify and interpret potential harm | 557 | 1,270 |
| Build a credible safety package | 938 | 2,178 |
| Define the drug people will receive | 1,570 | 5,268 |
| Make and control consistent material | 1,301 | 3,685 |
| Keep the product suitable through dosing | 971 | 2,443 |
| The first clinical study | 732 | 1,418 |
| Justifying a first dose | 302 | 502 |

There are **2,097 distinct candidate documents across these overlapping queues**. Counts must not be summed as distinct documents. Generic terms, especially in CMC, produce false positives. A topic word next to an IND number is a retrieval lead, not proof that the passage describes an initial IND study. The [rules](screen/rules.json), [summary](screen/summary.json), [document dispositions](screen/dispositions.json) and topic queues are retained. [File hashes](screen/freeze.json) identify the frozen snapshot.

## Manual reading and case selection

Reviewers used bounded selections from the new queues, previously verified FDA records and targeted retrieval of additional FDA documents. They read relevant source pages and neighboring stage-identifying context, including report covers, meeting headers and study-summary headings. Scanned passages and important tables were rendered when needed. The individual evidence files retain verification methods and limitations; the manual audits describe what was actually inspected.

Selection aimed for contrasting decisions rather than a quota of favorable cases: an accepted rationale versus an unresolved concern; measurable exposure versus an inadequate comparison; existing evidence that could be reused versus a product-specific gap; a supported starting dose versus an unsupported higher dose. Several biologic, oligonucleotide and Animal Rule examples are included as explicitly labeled contrasts. They should not silently become rules for ordinary small-molecule development.

**Not every candidate document was manually reviewed.** The screening denominator is much larger than the close-reading sample. A review case can come from the earlier library or targeted retrieval and need not be a member of the frozen candidate queue. Repeated use of a program across topics is counted as a topic assignment, not a new independent drug program.

The completed reviews retain **85 topic assignments across 51 explicitly normalized development programs**. Their case evidence cites **52 FDA PDF URLs and 157 distinct document-pages**. The combined manual audits record **178 pages across 64 PDF URLs**, including triage beyond the retained cases. These are counts of selected pages inspected, not entire PDFs read. All retained case-source pages appear in the recorded manual audits. The [coverage summary](coverage.json), [case index](case-index.md) and [manual reading index](manual-reading-index.json) preserve the counts, program aliases and underlying records. Guidance documents are outside the case-source denominator.

## Source-stage rules

1. **Initial IND:** distinguish a reproduced contemporaneous review from a later summary of initial-IND history or studies.
2. **Later IND:** identify study amendments, protocol discussions, clinical holds, subsequent reviews and pre-NDA interactions as later development.
3. **NDA/BLA assessment:** preserve this label when study timing or initial-IND use cannot be established. Such material can show why an early question matters without becoming a pre-first-dose requirement.
4. **Guidance and regulation:** distinguish legal requirements, nonbinding final recommendations, draft proposals, historical case decisions and our teaching interpretation.

An accepted study design is not a completed study. A preliminary meeting comment is not necessarily the final meeting agreement. A reviewer recommendation is not automatically the final agency action. A public marketing review does not reproduce the complete IND submission.

## Scientific interpretation rules

- Keep dose, route, formulation, schedule, population and exposure metric attached to a claim.
- Preserve NOEL, NOAEL, LOAEL and tolerated-dose distinctions; do not silently substitute them.
- Distinguish measured data from model predictions, extrapolations and values obtained in separate experiments.
- Preserve partial recovery, analytical limitations, lower limits of quantification and missing controls.
- Do not reconstruct redactions, identify undisclosed excipients or impurities, or smooth over conflicting source statements.
- A request for information does not prove that the sponsor never collected it.
- A later successful marketing review does not prove that the original IND package was complete or that every earlier concern was resolved in the same way.

## Current regulatory context

Current FDA sources were checked alongside the historical records. The nonclinical streamlining resource contains both established approaches and newer **draft** recommendations; context and status matter. [FDA nonclinical streamlining and NAMs resource](https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/cder-streamlined-nonclinical-studies-and-acceptable-new-approach-methodologies-nams).

Most Phase 1 investigational drugs are exempt from the detailed Part 211 regulations under the specified conditions, but remain subject to statutory CGMP. That is a distinction about the applicable quality framework, not an exemption from manufacturing quality. [21 CFR 210.2(c)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-210/section-210.2); [FDA Phase 1 CGMP guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/current-good-manufacturing-practice-phase-1-investigational-drugs).

The June 2026 QSP/MABEL document is **draft guidance**. It should not be described as a final universal replacement for existing first-dose approaches. [FDA newly added guidance list](https://www.fda.gov/drugs/guidances-drugs/newly-added-guidance-documents); [draft document](https://www.fda.gov/media/193230/download).

## Limits

This is a set of focused narrative reviews with an auditable retrieval process, not an exhaustive census or a systematic estimate of development success/failure. The upstream FDA index is incomplete; failed and never-approved programs are underrepresented in public marketing packages. Redactions, inaccessible or unextracted records, scanned pages and historical document inconsistencies limit inference. Negative keyword results do not establish absence of IND information. Exact FDA URLs and **PDF file pages** are supplied so that consequential claims can be checked against their source.

# Cached-review audit for “Connect drug action to potential benefit”

## Frozen scope

The snapshot is fixed at **2026-09-17 05:15:26 UTC** (September16,22:15 PDT): **1,412 extracted PDF documents, 1,411 distinct source hashes, and118,491 file pages**. Every extracted page in this snapshot was included in the automated text audit. The independent full-index census continues; documents retrieved after this time are not silently added to these results.

The upstream StageA census begins with all **7,857 Review-type index rows**, reduced to **7,179 normalized unique starting URLs**. Package pages expand into linked PDFs, including correspondence, labels and other package documents. Therefore1,412 is a count of available extracted PDFs, not1,412 drugs and not all FDA reviews. The73,224 other document-type rows in the full81,081-row index remain a separate search stratum. The CRL collection, advisory materials, CBER pages and other sources are also separate from this snapshot.

## What “screened” means

The machine pass searched page text for explicit original/initial IND reviews, IND/PIND numbers and discussions, clinical holds, study-may-proceed wording and first-human terminology. It combined these with mechanism, target engagement, disease-model, functional-effect, biomarker and mechanistic-uncertainty terms on the same or adjacent page. It preserved full extracted text and candidate context rather than treating a keyword hit as proof of relevance.

This produced **420 candidate pages in184 documents**. The remaining document dispositions are:

| Machine disposition | PDFs |
|---|---:|
| Candidate context requiring manual review |184|
| IND and pharmacology terms present, but no qualifying proximity candidate |252|
| IND terms present without a pharmacology candidate |243|
| Pharmacology terms present without explicit IND provenance found |242|
| No matched text |430|
| Entirely image-only or unreadable by the text extractor |61|

None of the negative categories establishes absence of IND information. **26,772 pages** were flagged as low-text across **903 PDFs**; those pages can contain scans, figures, blank material or redactions. They remain an OCR/visual-review limitation. There were no missing extracted-text files in this fixed snapshot.

## Manual review is a different step

`screen-manual-queue.json` contains the184 unique candidate source URLs, sorted lexicographically, with a stable zero-based `index`. The three manual assignments use `index%3`. This agent's assigned62 documents (`index%3==0`) are recorded in `screen-manual-inventory.json`:

-26 substantive action-to-benefit candidates;
-23 mostly PK, safety or CMC;
-7 administrative IND mentions only;
-6 uncertain or inadequately established IND provenance, including a trial explicitly stated to be outside theIND.

This is **bounded document triage based on candidate passages and selected adjacent context**. The file lists pages reviewed separately from machine candidate pages. It is not a manual reading of every page in each PDF, and a topic-relevant classification does not automatically establish original-IND timing. Other agents are adjudicating the other two thirds; their files must be combined before claiming all184 candidate documents were manually triaged.

`screen-ranked-leads.json` and `.csv` separately provide18 deliberately selected program leads with page text, exact URLs, cached paths, source hashes, stage limits and teaching questions. Five have explicit IND pharmacology-review/summary provenance; eleven document substantive IND-development decisions at clearly labeled stages; two are useful scientific leads whose specific pharmacology was presented under NDA sections and **must not** be called direct IND pharmacology. These18 are a selection, not an additional denominator or a claim of exhaustive detailed review.

## Stage distinctions used

1. A reproduced IND assessment is not necessarily an initial first-dose review. The fosdenopterin appendix expressly reviews IND-submitted studies at the time of NDA assessment.
2. A later NDA statement that studies were previously IND-reviewed supports that provenance, but does not establish when every experiment was conducted or every interpretation formed.
3. An IND meeting can concern later proof-of-concept, population selection, biomarkers or confirmatory development. Those discussions inform translational reasoning but should not become a universal pre-IND checklist.
4. “First-in-human,” an IND number in a source list, a template field or an instruction to submit a future protocol does not by itself establish substantive IND evidence.
5. Binding, pathway effects, disease-model responses, patient-selection hypotheses, clinical biomarkers and patient benefit are distinct claims. The source should identify which link was actually tested.

## Useful additions beyond the initial selected cases

The manual third identified particularly concrete passages worth later detailed review:

- **Rezafungin:** untreated-control strain growth is needed to judge whether an animal model can evaluate drug activity/PKPD targets (IND124401; NDA217417 AdminCorres,PDF6).
- **Ensartinib:** early protocol advice addresses ALK/cMET-defined versus double-negative patients and potentialPD endpoints (IND111695; NDA218171 AdminCorres,PDF50).
- **Pegzilarginase:** plasma arginine lowering must be connected to motor/mobility change, baseline impairment and adequate observation duration (IND127774; NDA761211 AdminCorres,PDF25/27/28).

These belong to the source-specific stages stated in the records. They do not prove that every development program requires the same studies.

## Freeze and reproducibility

`screen-freeze.json` stores SHA-256 hashes for the fixed snapshot, summary, candidate passages, dispositions and shared manual queue. Do not overwrite those frozen files when the live census grows. New retrieval should become a later dated snapshot. Manual annotations and later scientific verification can be added separately without changing this denominator.

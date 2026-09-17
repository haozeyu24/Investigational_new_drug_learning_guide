# CMC expansion 01: bounded background curation

Date: 16 September 2026 (America/Los_Angeles). Output: `cmc-expansion-01.json`, nine verified passages across five programs. Seven candidate programs were inspected; two were not promoted. This is a separate research artifact. No built lesson, catalog, baseline mapping, source library or bulk-screen state was edited.

## Best new material

**Teplizumab is the strongest addition.** The actual December 13, 2018 end-of-Phase-2 meeting under IND 100262 survives in the compiled FDA PDF at pages 309–313. Page 312 rejects an outline of a new-supply comparability plan and asks for a detailed manufacturing-transfer protocol. Page 313 recommends a CMC meeting once preliminary process data and a finalized comparability plan exist. This is a meaningful sponsor proposal and FDA response, not a mere IND-number mention.

The same file supplies a useful longitudinal comparison: page 136 recounts the 2021 PK-comparability CRL and additional PK/PD evidence supporting the 2022 application outcome; pages 139–140 show a later setting in which the proposed commercial product itself was used in the clinical trial. These passages explain why material applicability and dose rationale are connected without suggesting that every manufacturing change requires dose adjustment.

**Dupilumab adds a trial-interpretation consequence.** PDF 61 describes a manufacturing change after a stability-related contaminant finding and FDA-recommended efficacy sensitivity analysis by material exposure. The hidden constituent must remain hidden. The case connects the version of the drug supplied to the credibility of pooled clinical evidence.

**Fiasp adds the administration-system question.** PDF 300 shows why an authorization to reference a master file plus a high-level summary did not substitute for the missing in-use report. PDF 335–336 connects low-flow pump conditions to pediatric extrapolation and explicitly distinguishes sponsor data from reviewer interpretation. This is a later NDA/supplement example, not an initial-IND stability program.

**Omnitrope and Wixela are supporting comparisons.** Omnitrope shows a completed liquid-versus-powder PK/PD bridge in a marketing supplement. Wixela gives an unusually clear batch-record exercise: the same emitted-dose result was expressed relative to different development and commercial targets. Neither should be labeled an initial-IND CMC decision merely because the document also identifies an IND.

## Scope and selection

Discovery used `manual-review-priority.csv`, `machine-hit-pages.jsonl`, candidate metadata, and a read-only connection to `/tmp/ind-full-screen/screen.sqlite` to locate already cached FDA PDFs and extracted page text. The exported priority list was sparse for CMC at this point. A local, read-only co-occurrence scan of existing text identified better pages in newly cached documents. No download worker, queue ordering, status or export was changed. Candidate keyword screening is distinct from the seven-program manual pass below.

The read snapshot of `progress.json` was timestamped 2026-09-17T04:33:50Z and reported 185 unique screened PDF hashes. This number is only context for the discovery snapshot, not a current bulk-process status or a completeness claim. Many queue records were package expansions or still pending.

A limit of ten was treated as a maximum, not a requirement to fill the output with weaker cases. The pass stopped at seven reviewed programs once the strongest available additions were documented.

| Candidate program | Review outcome | Pages manually considered |
|---|---|---|
| Teplizumab | Three mappings retained: actual later-IND manufacturing-transfer discussion and two stage-labeled clinical-material comparisons | 309–313,136,139–140,219–220 |
| Dupilumab | One mapping retained: stability-related manufacturing change and clinical sensitivity analysis | 60–61,242–243 |
| Somatropin / Omnitrope | One marketing-stage formulation bridge retained, with explicit limitation on the IND link | 51–55 |
| Insulin aspart / Fiasp | Three mappings retained: later-development excipient advice, missing in-use report, low-flow extrapolation | 80,252,300,335–336; related stability hits scoped before selection |
| Fluticasone/salmeterol / Wixela Inhub | One ANDA-stage denominator/specification exercise retained; adjacent Bio-IND context kept separate | 854,944 |
| Uridine triacetate / Vistogard | Not promoted to this IND-related expansion. Substantive commercial shelf-life extension exists, but the apparent IND hit is the header “RELATED IND, NDA, DMF: N/A” | 6,8–9,14 |
| Budesonide / Entocort EC | Not promoted. PRE-IND and CMC text appears on a generic consultation form; actual matter concerns a nursing-label supplement | 38; adjacent extracted CMC hits screened |

Entocort is a separate product program from the baseline Eohilia oral-suspension record, but uses the same active ingredient. It was retained only in the rejection audit, not counted as a newly mapped active ingredient.

## Source and stage safeguards

- `recordId` values in the expansion are proposed research identifiers, not additions to `fda-review-records.json`. Linking or importing these into the public library remains separate work.
- URL directory year is not the date of every embedded review. For example, the `/2026/761183Orig1s010.pdf` compilation includes the actual 2018 teplizumab meeting; the Fiasp `/2026/` file includes 2019-era pump-review material. Stage comes from the embedded document, not the URL.
- Teplizumab PDF 312 is image-only and important; it was manually rendered and read. A text-negative page cannot be treated as irrelevant. The visible response rejects the outline, but the reasons/technical details are partly redacted.
- No new complete initial-IND CMC package was found. The strongest actual IND addition is later development. New initial-IND manufacturing-flow and unredacted stability-data gaps remain.
- Omnitrope's historical review has an apparent original-approval-year inconsistency; the mapping avoids that date and uses the formulation-bridge evidence only.
- Dupilumab PDF61 mixes OCR text and redactions. The original rendered page was used to verify the contaminant/stability/manufacturing-change relationship without naming hidden material.
- Fiasp's device review contains font-encoding corruption. PDF300 was read visually; the mapping does not decode or guess corrupt text. Pages335–336 explicitly label the sponsor material and the separate reviewer assessment.
- Fiasp's no-additional-animal-study agreement is a reported decision without the full underlying rationale. It does not support general excipient safety or waivers for other formulations.
- Wixela's accepted percentage explanation is a discrete ANDA CMC-related assessment. The neighboring clinical Bio-IND decision does not establish its source stage as initial IND.
- No mapped source is a template-form keyword hit. Template-only and unrelated IND hits were recorded as exclusions.

## Potential later integration

1. Use teplizumab as the principal biologic extension for the manufacturing-controls lesson: preliminary outline → detailed comparability plan → evidence → final material applicability. Keep its IND and BLA stages visible.
2. Add the dupilumab process-change history as a clinical handoff example, showing which patients received which material and why that matters when analyzing a trial.
3. Use Fiasp as a stability-transfer exercise after glycopyrrolate: device-specific conditions, supporting report, low-flow use and explicit extrapolation. Preserve sponsor/reviewer attribution and intermediate-review status.

These are research suggestions only; the first built lessons were left unchanged for user review.

## Cached source provenance

| Program | FDA source | SHA-256 of cached PDF |
|---|---|---|
| teplizumab | [FDA PDF](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2026/761183Orig1s010.pdf) | `9900f9577d615c56a105fd51200288aeca2d12fbdf2ef51a319c0b0fd096da76` |
| dupilumab | [FDA PDF](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2020/761055Orig1s007.pdf) | `91e6a27578a4578f0b7bf2278335cf7b966fe7e236788b44a9ea9ca75ffd717e` |
| somatropin-omnitrope | [FDA PDF](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2008/021426Orig1s002.pdf) | `2b51a169ee49240c905b1007f165095e55f10576a08704ecc7d207ab051609d1` |
| insulin-aspart-fiasp | [FDA PDF](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2026/208751Orig1s011.pdf) | `62e319e9753fdc088f210380a2aafab2a9661c5ecf1ba995591b34aba2de78b6` |
| wixela-inhub | [FDA PDF](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2022/208891Orig1s000.pdf) | `3d3223e5c862434dfc299576533a5017f197a5d6f7f3102a7cf2e3fe18890c56` |
| uridine-triacetate | [FDA PDF](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2026/208159Orig1s002.pdf) | `125436c478c4e3f051ce7227185070f7fefeb4996614cd2cd3a86e72471c4aae` |
| budesonide-entocort | [FDA PDF](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2009/021324Orig1s008.pdf) | `e5c92042920e97bf15b89bdcb2ff44ba47047e84544d9e12c468a41518b374b3` |

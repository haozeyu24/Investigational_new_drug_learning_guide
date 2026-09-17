# FDA IND-related record search — 16 September 2026

## Scope and result

34 verified reading-library entries: 6 retained from the earlier search, 18 newly inspected approval-review programs, and 10 complete-response-letter records. Four entries concern applications classified Unapproved in the openFDA snapshot. Approved/Unapproved is not a live global product status and does not equate an NDA/BLA nonapproval with an IND hold.

The requested all-drug search cannot be represented as an exhaustive list of actual IND reviews: confidential records are absent, public files are inconsistently indexed, some PDF text is scanned, and an original U.S. IND can follow foreign human experience. This work completes a bounded CRL text screen and expands a targeted approval-PDF search. It does **not** claim that every approval package has been inspected.

## What was enumerated

1. `https://api.fda.gov/transparency/crl.json?limit=1000`: all 458 API records returned; total agrees with API metadata. Metadata last_updated = 2026-08-13. Search terms: case-insensitive whole-word IND and investigational-new-drug variants. 26 records contained hits. Those passages were manually triaged; 10 were selected and verified against downloaded original PDFs, with one-based file pages. The other 432 text records were keyword-screened, **not manually read in full**. OCR errors and indirect phrasing can create false negatives.
2. `https://www.fda.gov/media/89850/download?attachment=`: Drugs@FDA downloadable database enumerated. ApplicationDocs contains 81,081 index rows across 9,987 application numbers. 7,857 rows have Review type ID 3. These index entries may point to packages or review documents and are **not 7,857 verified IND sources**. The unreviewed queue is saved in `fda-review-index-unverified.csv`. No claim of full CDER/CBER public-record coverage is made.
3. FDA search-engine discovery and direct PDF inspection: 18 additional programs documented in `ind-review-expansion-agent.json`. The original six entries retain their earlier evidence and locators.

## Inclusion

Identify substantive earlier IND assessment, an explicit extract, concrete study/dose/quality or hold decision, FDA meeting advice, or a marketing-stage letter with a specific link to investigational evidence or future study planning. Bare IND numbers, name-review instructions, routine submission-routing boilerplate, and OCR logo/conjunction errors do not qualify. Tabelecleucel and StemCyte are explicitly broader IND-related pathway records, not original IND reviews.

## Search families used

FDA-domain combinations of: “initial IND” + “clinical hold”; “IND reviews” + “Appendix”; “original IND review”; “IND review” + “appended”; “starting dose” + “initial IND”; “initial IND” + “safety concerns”; “clinical hold” + “nonclinical”; “IND review” + named products (pembrolizumab, dupilumab, nusinersen); and “initial IND” + recent years. Some highly constrained combinations returned no hits; this is not evidence of absence.

Strong discovery leads were followed into the actual PharmR, MedR, AdminCorres, MultidisciplineR, IntegratedR, or OtherR PDF. Old scanned PDFs were rendered and inspected visually. Modern text PDFs were searched locally and complete relevant pages read. Some official pages contain internal date inconsistencies, typographical IND-number truncation, or historical scientific characterizations; these are not silently corrected or generalized in the library.

## CRL adjudication

See `ind-review-crl-screen.csv` for every one of the 26 hits and its reason for inclusion or non-promotion. All 10 retained PDF files were successfully fetched directly from `https://download.open.fda.gov/crl/`. The attempted bulk ZIP downloads were incomplete and failed ZIP validation; they were **not** used as evidence. The direct PDFs and API records supplied the verified sources.

## Verification and limitations

- PDF page references are one-based file pages, including cover sheets; printed pagination often differs dramatically.
- Representative rendered pages were inspected for scanned sources (cinacalcet, diclofenac, vardenafil, gadoxetate, ipratropium, drospirenone/ethinyl estradiol, nitisinone) and the scanned phenobarbital CRL. Local text extraction was used for searchable PDFs. Native OCR was attempted but failed; no OCR output from that attempt was relied on.
- Selected passages, not every page of every PDF, were substantively reviewed. The site labels record types, stages, interpretation limits, and status provenance.
- Approvals for the 18 added review-package programs were checked against original AP actions in the Drugs@FDA Submissions table. Drug/formulation names were cross-checked in Products. These are historical approval actions, not claims that a product remains commercially available.
- Approval packages can contain earlier negative reviews and later positive reviews together. In particular lenacapavir's cited hold/nonapproval passage predates approval, and CRLs concerning arimoclomol, budesonide, and other Approved-snapshot entries describe earlier refusals or specific supplements.
- Potential follow-up leads: naloxone nasal spray NDA 212045 prior human-factors IND correspondence; cladribine NDA 022561 safety-case records; other CBER summary-basis-of-regulatory-action and advisory-committee records. These were not added without sufficiently verified IND-specific context.
- The existing log `fda-review-library.md` retains the six initial verifications and exclusions for the first search. Old unsuccessful Ibrutinib/Olaparib/Mavacamten checks do not establish that useful IND material is absent elsewhere.

## Artifacts

- `fda-review-records.json`: canonical 34-record library, metadata and exact evidence anchors.
- `ind-review-expansion-agent.json`: 28 newly verified additions.
- `ind-review-crl-screen.csv`: complete adjudication of the 26 keyword hits.
- `fda-review-index-unverified.csv`: 7,857 unreviewed Review-type FDA index records.
- `build-fda-review-library.py`: generates standalone local HTML plus CSV/JSON exports without network access.
- FDA PDFs remain temporary local research files; the public site links directly to FDA rather than redistributing PDFs.

## Snapshot integrity

- CRL API JSON: SHA-256 `5733d38e2978c254dca7f5f89d07a83c155a4df393177bf99c8e5f7369b907d9`; 5,266,330 bytes.
- Drugs@FDA ZIP: SHA-256 `e145bc0f21e0da7a6fa54dadac35ab6b66396b8e8ccde41171c761acf89af9ba`; 6,081,382 bytes.

# Nonclinical expansion 01 — separate research tranche

Completed 16 September 2026 (local time). This tranche adds **8 verified passage assignments across 3 new programs**, after substantive triage of 10 new-program candidates from the current index export and one targeted extra hit. No app, lesson, baseline map or library record was modified. The bulk index process was neither stopped nor changed.

The requested priority file is actually `research/index-screen/manual-review-priority.csv`. At inspection it held 14 rows, many of them weak despite the “strong-term hit” status. Cached PDFs, rather than the machine hints, determined eligibility. Full text from the specific pages and adjacent provenance pages was read; selected tables, figures and scanned pages were also rendered and visually checked.

## Retained sources and provenance

| New record ID | Actual underlying decision | Public source and artifact fingerprint |
|---|---|---|
| romiplostim-hsars | October 12, 2017 Type B guidance meeting and September 26, 2018 Type B/EOP2 meeting under **PIND 132396**, for radiation injury/HS-ARS under the Animal Rule. Actual minutes are preserved, not just mentioned. | [BLA 125268/S-167 package](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2025/125268Orig1s167.pdf#page=192). Cover records January 28, 2021 approval; URL directory says 2025 and must not be treated as the meeting or approval date. Cache document `2212a1243a7f5b3929c64455`; SHA256 `13fdea487a6ea02f6c686566d1e18968fee58de69fb35876516697b9f84ca286`. |
| lumateperone | Retrospective 2014/2016 nonclinical exposure restrictions and 2018 clinical-extension monitoring, followed by 2021 supplemental-NDA human metabolite findings. | [NDA 209500/S-005 redacted package](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2022/209500Orig1s005_Redacted.pdf#page=58), internally covering S-05 and S-06. Cache `2419343bdfa6193ae401a49a`; SHA256 `f163f0ffe303822ff11779964b0156c71e6a7f9b1dac85222fa45cd52f5f9eb2`. |
| adagrasib-cetuximab-crc | 2024 supplemental-NDA pharmacology assessment for a combination and proposed mechanism-of-action labeling revision. **These particular studies are not established as original-IND evidence.** | [NDA 216340/S-005 package](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2024/216340Orig1s005.pdf#page=71). Cache `035c6e3d4e90abf0e3199efc`; SHA256 `82727e309e4716b0cefb347c08d0cbac100b2147865a164ea56b4777798a2ec1`. |

All 3 source URLs are new relative to the baseline 34-record source list. Repeated URLs within the expansion are deliberate: different passages answer different lesson questions. The new record IDs are provisional research IDs and are not silently inserted into the public library.

## What the new evidence adds

**Romiplostim is the strongest expansion case.** It addresses a genuine gap in the first tranche: model-informed human dose translation and assay comparability. In the 2017 minutes, FDA objects that no adequate dose-translation strategy has been provided; it wants PK/PD and modeling before choosing the definitive NHP efficacy-study regimen. A highest-feasible dose might maximize the chance of an animal effect yet leave the human dosing question poorly informed. In 2018, FDA directs attention to platelet response because systemic drug concentrations differ substantially across monkeys and humans. The adjacent assay discussion is unusually useful: older study reports may be missing, but individual data exist, so FDA requests laboratory/method-change information and a validated pivotal assay. Those are specific reviewable requests, not generic advice to “validate a biomarker.”

Keep the **Animal Rule and new indication** visible. Romiplostim already had human experience in another indication. This case must not imply that survival models usually replace clinical efficacy trials or that these meetings establish initial-human safety requirements. No final model estimates or validation diagnostics are claimed from meeting agreement alone.

The lumateperone history connects nonclinical findings to a clinical exposure ceiling and actual metabolite sampling. The later human interaction studies make an instructive next chapter: two relevant metabolites remain below quantification under the tested conditions. “Below quantification” must remain different from “absent.” The earlier one-tenth restriction does not specify all details needed to calculate a threshold; a complete original pharmacology review remains a valuable next source.

Adagrasib fills the **candidate-specific pharmacology** gap with a concrete limiting case. The combination is not better than adagrasib alone during dosing in every model. The reviewer therefore uses a bounded “some models” statement. The figures also separate dosing and regrowth periods. It is valuable supplementary teaching, but its provenance is marketing-stage and should not be upgraded into an original-IND decision.

## Candidate disposition

The 10 new-program candidates below received substantive relevance triage. Budesonide/Entocort was additionally screened out as a baseline-active-ingredient overlap; ticagrelor text was incidentally inspected during batch extraction and did not receive a substantive nonclinical review. Those incidental reads are not counted as additional fully reviewed programs.

| Candidate | Pages inspected | Disposition |
|---|---|---|
| Wixela Inhub (fluticasone/salmeterol) | Cover and 854/944 | Bio-IND for high-dose clinical bioequivalence/clinical safety. No substantive animal or in-vitro nonclinical decision at these anchors. The “nonclinical-pkpd” machine hint is misleading. |
| Adagrasib/cetuximab CRC | Cover, 67, 70–79, figures 71–72 | Retain one actual candidate-specific pharmacology decision, explicitly marketing stage. p67 only records May Proceed dates and is not its evidence anchor. |
| Vortioxetine | Cover, 125 | Exclude. “30-day IND Review” is a consult-form option; the actual request concerns PLLR labeling. “IND review” is not a substantive prior nonclinical review here. |
| Cefiderocol | Cover, 126 | Exclude retained anchor. It recounts original IND receipt and safe-to-proceed dates while discussing a later pneumonia supplement. No nonclinical adequacy rationale on that page. |
| Pembrolizumab HNSCC | Cover, 120 | Exclude from nonclinical map. Initial **indication-specific** IND and clinical DMC enrollment pause; no substantive animal/in-vitro decision. |
| Eculizumab gMG | Cover, 150 | Exclude. Clinical endpoints, infection risk, trial duration, patient selection and immunogenicity meeting history; no retained nonclinical experiment/design evidence. |
| Ibrutinib WM | Cover, 73 | Exclude. The investigator-brochure hit belongs to a clinical protocol-amendment table. |
| Eltrombopag | Cover, 59 | Exclude. Clinical dose escalation, endpoint amendments and IB updates. No substantive nonclinical passage at this anchor. |
| Romiplostim HS-ARS | Cover, 56, 192–201, 210–217; scanned 198/212/215 and 200/201 visually checked | Retain five complementary passages on model relevance, dose translation, PD bridging, assay evidence and interpretable animal endpoints. |
| Lumateperone | Cover, 56–67, contextual label text 21/25/26; p59 visually checked | Retain later-IND exposure/monitoring history and separate later human metabolite update. p62 expressly says no new nonclinical information was supplied for S-05/S-06; do not call the historical passages a newly reviewed toxicity package. |

Additional triage note: Entocort p38 contains generic form options such as PRE-IND and ANIMAL-to-HUMAN SCALING, but the filled request concerns a lactation labeling supplement. These form options should be filtered from future strong-hit prioritization. This is separate from the baseline Eohilia record, but not a useful nonclinical expansion in either case.

## Exact map scope and verification cautions

- PDF numbers are one-based page positions in the linked combined packages, not printed page numbers.
- Romiplostim meeting covers are at PDF pp192 and 210. References are 4341478 (2018 meeting) and 4179961/4740441 (2017 minutes as included in the package).
- The romiplostim source contains inconsistent study identifiers and at least one conflicting historical approval date in a summary. The map avoids repairing these silently and uses meeting covers plus actual discussion to establish provenance.
- Some 2017 passages are scans with no extractable text. They were rendered and read, particularly pp212 and 215. The key dose-selection and assay requests on pp200–201 were visually checked too.
- The adagrasib figures on p72 were viewed. The map makes no invented numerical synergy estimate, no uniform-response claim and no claim that these experiments occurred before the initial IND.
- No “lead only” item is mixed into the eight-entry verified map. Unproductive anchors and potential next sources are recorded here instead.
- This is a bounded tranche, not an exhaustive nonclinical review of every cached package. The running bulk screen remains independent and can yield additional priorities.

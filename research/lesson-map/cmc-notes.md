# CMC mapping and construction notes

Verified 16 September 2026. This is a bounded source-pass over all 34 retained programs in `research/fda-review-records.json`, not a claim that every page of every approval package or all 7,857 indexed review records has been read. The map contains 28 passage mappings across 22 programs. Every promoted passage was read in the underlying FDA PDF, not copied from the library summary. All PDFs were screened for CMC-related terms; textless legacy PDFs were instead inspected visually at retained anchors. Targeted adjacent sections were read when the anchor suggested a CMC decision. Negative screening means “no additional substantive passage retained in this pass,” not proof that no public CMC evidence exists.

## The connected learning sequence

1. **Define the drug people will receive.** Start with an identified substance and formulation, then compare the material behind each supporting study with the proposed clinical material. Finish with a material comparison and a decision about the evidence bridge. Suvorexant is the primary initial-IND decision; ivacaftor supplies a positive exposure-comparison counterpart. Halobetasol shows formulation selection and staged support. Atrovent and faricimab extend the reasoning to delivery devices and biologics.
2. **Make and control consistent material.** Carry that material definition into a process/batch genealogy and risk-linked specification argument. Finish with an impurity/control register connecting test, acceptance criterion, observed lot result, dose/route/duration and qualification evidence. Glycopyrrolate is the unusually strong actual initial-IND anchor: dated IR, sponsor response, CMC/nonclinical consultation and an explicit conclusion for a 14-day study. Osimertinib's comparison of batches from different processes is useful as a clearly labeled NDA extension.
3. **Keep the product suitable through dosing.** Follow the released material through container, storage, preparation, delivery and the supported interval. Finish with an evidence-to-handling matrix and rules for assessing changes. Glycopyrrolate provides initial-IND pre/post-nebulization questions; lenacapavir supplies a full later-IND/NDA failure-and-resolution narrative. Gvoke gives a sharp transfer test: data from another IND formulation did not cover the proposed vial formulation and actual IV use.

The lessons should show a single connected decision diagram, a compact evidence table, an explicit FDA concern/response/outcome and one learner output. Keep general concepts separate from real cases. A repeated grid of principle cards would bury the causal structure. “What would change the decision?” is more useful than a list of tests detached from an intended use.

Handoffs: material comparison → nonclinical relevance and clinical PK bridge; impurity register → toxicological qualification and exposure estimate; handling matrix → site preparation instructions and clinical administration schedule. Clinical dose, route, duration and maximal-use assumptions must return to CMC because they change the qualification question. CMC does not operate only after toxicology has finished.

## Evidence strength and public gaps

- **Strong initial-IND anchors:** glycopyrrolate (actual 2011 reviews and memo), suvorexant (retrospective initial decision with later follow-up), halobetasol (actual original-submission questions/answers), ivacaftor (actual original-IND PK formulation comparison), Pennsaid (retrospective ingredient-role/route-safety challenge).
- **Strong later-development anchors:** baricitinib salt-form bridge; Atrovent valve/canister and delivery changes; faricimab formulation/pH explanation; lenacapavir container incompatibility and full hold. These cannot be presented as initial-IND requirements.
- **Substantive marketing-stage extensions:** osimertinib process/batch comparison; Gvoke actual-formulation admixture evidence; SoluPrep maximal-use impurity qualification; lenacapavir long-term and in-use stability resolution; StemCyte release-status distinctions. Show stage prominently.
- **Context anchors only:** Paxlovid and futibatinib state insufficient CMC/product-quality information but do not reveal enough detail to teach specific manufacturing deficiencies or their resolutions.
- **Public CMC is sparse, not absent.** Glycopyrrolate PDF 36 retains composition-table dose headings but redacts content; 37 retains some ingredient names/functions/standards; 71–74 largely redact analytical support. Suvorexant hides excipient identity. Faricimab hides prior buffer/pH details. Vestronidase hides many extractable identities and calculations. These gaps must remain visible in lesson data.
- **Still missing from this tranche:** a largely unredacted initial-IND synthesis/manufacturing flow tied to process controls and lot disposition; analytical method suitability datasets; a complete initial-IND stability timecourse with specified container and handling conditions; a concrete initial biologic potency/sterility/process consistency example. Eovist offers test-material traceability, not a substitute for those data. Do not fabricate a complete CoA or process recipe around the snippets.

## Corrections and boundary checks

- **Gvoke:** the retained library record anchors PDF 1–2, but the explicit CMC statement about XP-9164 under IND 156281 and the Gvoke vial formulation is on **PDF 3**. Pages 1–3 together cover scientific bridging; page 3 alone anchors the direct compatibility/stability deficiency.
- **Lenacapavir:** PDF 319 is an earlier, negative review embedded in a larger compiled package. PDF 14 records the later favorable approval assessment after resubmission; PDF 83 explains later stability support. PDF 177 considers the drug depot a more likely explanation for injection-site reactions than glass. Do not say glass caused nodules or imply the historical hold remains active.
- **Glycopyrrolate:** the initial memo's benzoic-acid characterization should not be promoted as a current general toxicological fact. The later NDA text discusses genotoxicity differently. Preserve the historical decision and do not reconstruct redacted limits. PDF 38 contains an apparent dose-unit inconsistency (200 mg/day in one sentence versus mcg/ampoule and 200 mcg/day elsewhere); avoid using that sentence for a numeric calculation.
- **Osimertinib:** PDF 121–122 process-comparison material is outside the IND appendix beginning on PDF 134. Its reference back to an initial-IND batch does not make the new comparison study initial-IND evidence.
- **Fosphenytoin and budesonide:** the mapped recommendations are explicitly not approvability issues. Do not call them causes of the CRLs.
- **Eovist:** the expiry, batch and CoA fields concern animal test material. They do not establish a clinical release decision or clinical shelf life.

Current FDA Phase 1 framing was verified separately from the historical cases. FDA's [small-molecule FIH CMC flexibilities](https://www.fda.gov/media/193163/download?attachment=) permit representative-batch support and evolving specifications; final commercial formulation/route, analytical validation data and an established drug-product shelf life are not generally expected at the original FIH Phase 1 IND. Stability support and an ongoing plan still need a reasoned relationship to the proposed study. The scope is CDER-regulated small molecules; do not silently extrapolate every flexibility to all modalities. The [FDA IND CMC overview](https://www.fda.gov/drugs/investigational-new-drug-application-ind/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information) also asks sponsors to identify differences between clinical and animal-study products.

## All-34 program triage

| Program | Disposition in this pass | Source evidence considered |
|---|---|---|
| Ivacaftor | Retain material bridge | Original-IND PDF 79/90; comparable dog PK across formulation vehicles, partly redacted. |
| Osimertinib | Retain later process/batch comparison | PDF 121–122; separate from IND appendix. |
| Suvorexant | Retain core material decision | PDF 34; initial proceed with formulation concern, later development distinguished. |
| Tofacitinib | No additional core CMC mapping | PDF 41 and later impurity consultations 517–528 concern NDA qualification; heavily redacted and less useful than retained cases. Retained IND Table 13 is pharmacology. |
| Venetoclax | Retain optional batch genealogy | PDF 29 quality summary; applicant attribution and NDA stage preserved. |
| Sotorasib | No substantive CMC case retained | PDF 28 points to a separate CMC-only pre-submission meeting; 32–33 contain generic marketing-facility instructions, not the missing initial CMC decision. |
| Pennsaid | Retain ingredient-role bridge | Scanned PDF 45–46 visually read. |
| Vardenafil/Levitra | No CMC mapping | Scanned PDF 16–17 concern carcinogenicity protocol/TK; no substantive clinical-product control argument at retained anchors. |
| Faricimab | Retain later formulation change | PDF 15–16; 2017 Type C meeting distinct from initial 2013 IND. |
| Atrovent | Retain device/formulation change | Scanned PDF 38–39 visually read; IND, device-change and pre-NDA stages separated. |
| Eovist | Retain traceability exercise | Scanned PDF 72: formulation, batch, expiry, CoA and dilution fields. |
| Yasmin | No CMC mapping | Scanned retained PDF 34/38/40 are nonclinical history/pharmacology. |
| Orfadin | No CMC mapping | Scanned PDF 23 concerns reuse of interrupted toxicology study, not manufacture or product stability. |
| Halobetasol | Retain core formulation-selection evidence | PDF 103–105 actual original-submission questions; later requirements separated. |
| Vestronidase | Retain limited container-extractable example | PDF 11–13 BLA section; not automatically part of later expressly IND-derived study list. |
| Cinacalcet | No substantive CMC mapping | Scanned PDF 7–8/16; original-IND clinical/toxicology planning; formulation field redacted. |
| Baricitinib | Retain salt bridge and impurity plan | PDF 53–54 dated later-IND history/advice. |
| Glycopyrrolate | Retain core in all three lessons | Original-IND PDF 31,35–37,70–75; later NDA comparator 10/21. |
| Cemiplimab | No CMC mapping | PDF 13–14 concerns population/evidence design; keyword hits do not establish product control decisions. |
| Futibatinib | Retain context only | PDF 35/37 states quality/clinical partial hold without exposing the underlying quality data. |
| Oteseconazole | Retain clinical formulation-bridge handoff | PDF 178; NDA review of later tablet/capsule comparison. Generic quality approval text 123–124 is insufficient as a core manufacturing lesson. |
| Lenacapavir | Retain core later hold and resolution | PDF 318–319; second-cycle PDF 14,83,91,177 prevents incomplete or causal misreading. |
| Minocycline | Retain product-to-clinical bridge | PDF 27; route/formulation and adult/pediatric maximal-use applicability. |
| Paxlovid | Retain context only | PDF 183; missing-category narrative cannot reveal the specific CMC solution. |
| Tabelecleucel | No substantive CMC mapping | PDF 4 states prior facility inspection deficiency resolved but hides facts needed to teach the control question. |
| Clemidsogene | No CMC mapping | Retained letter focuses on population, controls and biomarkers; no substantive CMC passage identified. |
| Vusolimogene | No CMC mapping | Retained letter concerns clinical interpretation and component contribution. |
| Phenobarbital Hikma | No substantive CMC mapping | Product-quality section/inspection text heavily redacted or generic; PDF 5 biowaiver comment is contingent on clinical evidence. |
| Arimoclomol | No CMC mapping | Sample stability in PDF 7 concerns a biomarker bioanalytical assay, not drug-product stability. |
| Fosphenytoin | Retain specification issue log | PDF 13–14, additional nonapprovability comment recalling pre-IND advice. |
| Gvoke | Retain actual-formulation compatibility and bridge | Scanned PDF 1–3 visually read; direct CMC anchor corrected to 3. |
| SoluPrep | Retain impurity/maximal-use handoff | PDF 2–3 later NDA deficiency; original retained IND anchor was clinical efficacy advice. |
| Budesonide Eohilia | Retain limited release-profile extension | PDF 5 additional marketing-stage comment; not initial IND data. |
| StemCyte cord blood | Retain release-status distinction | PDF 4 BLA letter with a specific IND exception and collection-site qualification issue. |

No app, catalog or style changes were made by this mapping task. The proposed replacement lessons are supplied separately for root integration and visual review.

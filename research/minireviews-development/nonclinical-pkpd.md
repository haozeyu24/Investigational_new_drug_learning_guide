# Connect dose, exposure, and effect

*A focused review of public FDA development records for lesson construction · September 17, 2026*

**The central question is what exposure a dose produced, what changed over time, and which part of that relationship can inform the next human investigation.** The records repeatedly expose failures of comparability: mismatched formulations, incomplete metabolite measurements, different dosing intervals, and biological responses that do not discriminate among doses.

This review closely examines ten programs: nine small molecules and one explicitly labeled protein/Animal Rule comparator. It combines earlier verified records with targeted reading of the current FDA corpus. It does not claim exhaustive coverage. The matching JSON records the facts, interpretations and limitations case by case; the separate audit lists pages actually checked. References use PDF file pages. A study reproduced in an NDA can be an original IND study, a later IND study, or a marketing-stage assessment; those categories remain visible below.

Manual scope for this review: **13 PDFs and 27 document-pages** checked across retained cases and additional triage; **10 programs** retained in detail. The frozen automated queue contains 462 candidate PDFs and 818 candidate pages; it was not reviewed exhaustively. Some earlier verified PDFs lie outside that queue.

## 1. Start with the quantity the experiment actually established

**Ivacaftor’s original IND review** carries formulations into its exposure interpretation. It describes a dog comparison between clinical and nonclinical presentations and a rat experiment comparing vehicles at the same nominal dose. The reviewer considers systemic exposure similar in the specified rat comparison. This is more informative than an assertion that animals and humans received “the same drug,” but it supports a bounded comparison rather than every possible form of equivalence. Important formulation identifiers are redacted. [FDA review, PDF 90, 92](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000PharmR.pdf#page=90).

The lesson should make formulation, route, dosing schedule and sampled matrix inseparable from an exposure value. A compound name is insufficient metadata. This creates a practical handoff to CMC: if the presentation changes, which existing comparisons still apply and which need re-examination? It also avoids turning PK into a calculation performed after the scientific work is over. Exposure is part of what establishes what the experiment tested.

**Osimertinib’s rat toxicokinetic assessment** adds an analytical boundary. The method quantified the parent and one metabolite, but a co-eluting peak limited another metabolite to presence/absence reporting. The review also noted possible analyte decline during storage. Satisfactory assay-batch performance and reproducibility did not erase those limitations. [NDA pharmacology review, PDF 140](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2015/208065Orig1s000PharmR.pdf#page=140).

That passage is a retained study assessment, not a demonstrated account of the entire initial IND. Its teaching value is precise: “measured,” “quantified,” “not detected” and “not reliably quantifiable” should occupy different cells in the learner’s evidence table. Otherwise an apparently complete exposure profile can conceal the very analyte that matters for interpretation.

## 2. Design sampling for the question, not for the spreadsheet

In **vardenafil’s actual 1999 IND review of carcinogenicity protocols**, the sponsor planned a concentration measurement at one clock time. FDA found this inadequate and requested parent and active M1 metabolite Cmax and AUC across dose levels and specified study weeks. The same review qualified the human reference data: the available observations came from single doses in young volunteers, whereas the intended users were generally older men. [FDA review, PDF 16–17](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2003/21-400_Levitra_Pharmr_P2.pdf#page=16).

This was long-term study planning, not a requirement before the first human exposure. It nevertheless provides an unusually concrete lesson: a blood sample can be analytically excellent and scientifically insufficient. Its value depends on whether its timing captures peak, accumulated or sustained exposure, whether active metabolites are included, and whether the reference population fits the inference. The learner should explain why the proposed measurements answer the decision rather than merely supply a customary parameter list.

**Vadadustat** shows why biological sampling also needs a time axis. In the FDA section summarizing IND-submitted pharmacology, erythropoietin rose after a single dose in normoxic rats and later returned to baseline. The response was blunted during repeated dosing. The cited pages show a change in response over treatment, not a demonstrated explanation for that change. [FDA review, PDF 374–375](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2024/215192Orig1s000IntegratedR.pdf#page=374).

A single-dose response cannot simply be copied into a repeated-dose model. Conversely, a smaller subsequent response does not itself prove tolerance, loss of exposure or treatment failure. The lesson should ask what paired PK and PD observations would distinguish those explanations. Timing of individual studies relative to the original IND is not established in this summary, and EPO induction is not the same endpoint as correction of anemia.

**Rezafungin’s later pre-NDA comments** identify another prerequisite for an interpretable PK/PD target: the untreated trajectory. FDA requested growth information for the fungal strains in control mice to judge whether the model and strains were suitable for activity and PK/PD evaluation. These are preliminary comments, not a final target determination. [IND correspondence, PDF 5–6](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/217417Orig1s000AdminCorres.pdf#page=5).

This extends the sampling question beyond drug concentrations. A fitted target can look precise even when the experiment’s untreated disease trajectory is unclear. The learner should show what happened without treatment before interpreting suppression, killing or another effect as a transferable exposure target.

## 3. A margin is an interpreted comparison, not a verdict

**Cinacalcet’s original US IND** already had previous human experience. The proposed study was in patients, not the first administration to any human. The reviewer used earlier clinical PK to extrapolate exposure at the proposed maximum dose and compared it with animal exposures at lowest-observed-adverse-effect levels. Prior human PTH suppression and calcium reductions were part of the context, and the recommendation retained attention to toxicity and monitoring. [Original IND reproduced in NDA, PDF 16](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2004/21-688.pdf_Sensipar_Pharmr_P5.pdf#page=16).

This is a strong anchor because it prevents three common substitutions: LOAEL becoming NOAEL, an extrapolated denominator becoming a measured value, and an original US IND becoming first-in-human. The lesson should show the numerator’s biological meaning beside the ratio. A low or high multiple is not self-interpreting; severity, reversibility, uncertainty and the proposed investigation determine its significance. The historical ratios should not become a universal safety-factor algorithm.

**Tovorafenib’s NDA review** presents a different comparability problem. Humans received a weekly regimen while toxicity-study animals were dosed every other day. The review converted each interval’s AUC to a mean daily basis for the exposure comparison, while separately using free human peak concentration for off-target assessments. [FDA review, PDF 47](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2024/217700Orig1s000,%20218033Orig1s000MultidisciplineR.pdf#page=47).

The important lesson is to retain the schedule after normalization. Comparable mean daily exposure does not make peak concentrations, time above a threshold or periods without exposure identical. The source documents a reviewer’s chosen comparison at marketing review; it does not prove that daily-average AUC explains every lesion. A useful exercise asks learners to choose and defend an exposure metric before calculating a margin.

## 4. Give each PD marker a decision it can actually support

In **fosdenopterin’s retained IND assessment**, several effects in MOCS1-deficient mice supported biological activity. However, plasma S-sulfocysteine and urinary uric acid did not show useful dose discrimination under the tested conditions; the sponsor concluded they might be inadequate to guide therapeutic dosing. Brain and liver measures supplied different information. Untreated knockout animals also did not survive long enough to support all later comparisons. [Assessment cover, PDF 168; pharmacology, PDF 179–180](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2021/214018Orig1s000IntegratedR.pdf#page=168).

This assessment was completed after NDA submission for reports previously submitted under IND. It was not the first-dose review. Its broader lesson is that a marker may identify disease or show treatment activity while contributing little to dose choice. A flat response can reflect a saturated or insensitive measurement, insufficiently informative doses, timing, or a more complicated relationship. The cited passage does not establish which explanation dominates. The learner should state what additional observation would make the marker useful for the proposed decision instead of relabeling all pathway measurements as “validated PD.”

## 5. Translation can require a different bridge from the one initially expected

**Romiplostim in radiation injury** is deliberately a contrast case: an already-marketed protein developed under the Animal Rule. In 2017 pre-IND discussions, FDA found that a human dose-translation strategy was missing and requested PK/PD information and modeling before finalizing the definitive primate study. The sponsor favored a high animal dose to maximize efficacy; FDA noted that lower doses could offer more translation options. Subsequent minutes directed human dose selection toward platelet counts because drug doses and systemic concentrations differed substantially between monkeys and humans. [2017 minutes, PDF 212, 214–215](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2025/125268Orig1s167.pdf#page=212); [2018 minutes, PDF 198–200](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2025/125268Orig1s167.pdf#page=198).

The transferable idea is experimental informativeness. Showing the largest possible animal effect can leave the human regimen unidentified. This is not a general rule that PD always replaces PK, and agreement with a modeling framework does not validate its final predictions. The Animal Rule context must remain prominent rather than quietly becoming the default pathway for an ordinary initial IND.

**Lumateperone** illustrates translation in the other direction: a specific animal concern motivated a human measurement. Later human studies examined two aniline metabolites associated with dog neuropathology, including conditions with selected UGT inhibitors. Both remained below the quantification limit. [Supplemental marketing review, PDF 67](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2022/209500Orig1s005_Redacted.pdf#page=67).

That finding updates the evidence under the tested conditions; it does not mean the metabolites never form or that every population and interaction is covered. This is a late-development follow-up, not initial-IND reassurance. The useful handoff to safety is a precisely narrowed risk statement: which exposure concern became less plausible, why, and what remains outside the experiment.

## Regulatory floor and sponsor judgment

The regulation requires adequate pharmacology/toxicology information to support the proposed investigation, with disposition information if known and further safety information as development proceeds. It does not prescribe one universal PK/PD model or a fixed exposure multiple. [21 CFR 312.23(a)(8)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23).

ICH S3A describes toxicokinetics as relating animal systemic exposure to dose, time and toxicity, supporting species/regimen choices and clinical relevance. Parent, metabolites, appropriate sampling and sometimes unbound concentrations depend on the question. It explicitly favors a case-specific, iterative approach. This is guidance, not a mechanical statutory checklist. [FDA ICH S3A, PDF 5–6](https://www.fda.gov/media/71990/download#page=5).

The sponsor’s scientific responsibility is to make the comparison intelligible: show measured versus predicted quantities, keep assay limitations attached, investigate consequential mismatches, and define how new human observations will update the model. These tasks continue even when a minimal submission requirement has been met.

## Implications for constructing this lesson

Build the lesson around an annotated exposure–effect comparison, with four successive decisions:

1. **What was administered and measured?** Record formulation, route, schedule, matrix, parent/metabolites and analytical limits.
2. **What relationship is supported?** Align exposure and effect through time; distinguish observations from fitted or extrapolated values.
3. **What transfers to people?** Select the metric and reference population, identify assumptions, and explain discordant evidence.
4. **What should be learned next?** Specify the measurement that could change the exposure target or risk interpretation.

Cinacalcet can anchor the main worked decision; vardenafil and fosdenopterin challenge sampling and marker selection. Romiplostim belongs in an advanced comparison. The final output should be a defensible exposure–effect argument and explicit unresolved questions for safety and clinical design. Choosing the actual clinical starting dose belongs in the clinical-dose lesson, where this evidence becomes an input.

// Nine reasoning maps, grounded in the reviewed FDA case library.
const REASONING_GUIDES = {
  "nonclinical-pharmacology": {
    "id": "nonclinical-pharmacology",
    "title": "Connect drug action to potential benefit",
    "question": "What supports expecting this candidate to help, and where does that expectation still depend on an assumption?",
    "handoff": {
      "id": "nonclinical-pkpd",
      "label": "Connect dose, exposure, and effect",
      "text": "Carry the action-to-benefit argument forward; examine the exposure and measurement assumptions on which it depends."
    },
    "opening": {
      "id": "fda-requirements",
      "label": "FDA requirements",
      "title": "What must the IND explain?",
      "intro": "Explain why this candidate is being investigated, what biological effects have been observed, and who will enter the proposed study.",
      "requirements": [
        {
          "title": "Why investigate it?",
          "text": "Describe the rationale for the drug or study and the indication to be investigated.",
          "source": {
            "label": "21 CFR 312.23(a)(3)(iv) · Rationale and indication",
            "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23#p-312.23(a)(3)(iv)"
          }
        },
        {
          "title": "What does the drug do?",
          "text": "Describe pharmacological effects and mechanisms of action in animals, alongside disposition information. Identify what remains unknown.",
          "source": {
            "label": "21 CFR 312.23(a)(8)(i) · Pharmacology",
            "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23#p-312.23(a)(8)(i)"
          }
        },
        {
          "title": "Who will be studied?",
          "text": "Specify participant selection and exclusion criteria appropriate to the study. Phase 1 protocols emphasize safety exclusions.",
          "source": {
            "label": "21 CFR 312.23(a)(6) · Study participants",
            "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23#p-312.23(a)(6)"
          }
        }
      ],
      "reviewFocus": {
        "title": "For a first Phase 1 study",
        "text": "FDA’s review focuses on participant safety. In Phases 2 and 3, review also addresses whether the study can adequately evaluate effectiveness and safety.",
        "source": {
          "label": "21 CFR 312.22 · Phase-specific review",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.22"
        }
      },
      "limitsTitle": "What need not be fully settled",
      "limits": [
        {
          "title": "The complete mechanism",
          "open": "You do not have to map every step from drug action to possible clinical benefit.",
          "text": "A biological effect can be observed even when the full explanation for that effect remains incomplete.",
          "needed": "Describe known pharmacology and identify unknowns. Provide pharmacology information needed to assess safety or interpret toxicology."
        },
        {
          "title": "A predictive biomarker",
          "open": "You do not have to identify a molecular marker that predicts responders for every study.",
          "text": "Participants may be selected using clinical features such as diagnosis, disease stage, or treatment history.",
          "needed": "Specify selection and exclusion criteria. A particular program may still need a marker for scientific or safety reasons."
        },
        {
          "title": "Proof of clinical benefit",
          "open": "You do not have to demonstrate efficacy in patients before a first Phase 1 study.",
          "text": "The proposed benefit can remain a hypothesis. Early human investigation begins testing the drug without assuming that it will help.",
          "needed": "Present the study rationale, relevant existing evidence, and enough information to assess the risks of the proposed investigation."
        }
      ],
      "limitsSources": [
        {
          "label": "FDA Phase 1 guidance · Pharmacology, PDF 12",
          "url": "https://www.fda.gov/media/71203/download#page=12"
        },
        {
          "label": "21 CFR 312.23(a)(6) · Study participants",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23#p-312.23(a)(6)"
        }
      ],
      "takeaway": "This chapter builds the biological rationale. Safety, drug material, and the clinical plan must also support the proposed investigation.",
      "sources": [
        {
          "label": "21 CFR 312.23(a)(3)(iv) · Rationale and indication",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23#p-312.23(a)(3)(iv)"
        },
        {
          "label": "21 CFR 312.23(a)(8)(i) · Pharmacology",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23#p-312.23(a)(8)(i)"
        },
        {
          "label": "21 CFR 312.23(a)(6) · Study participants",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23#p-312.23(a)(6)"
        },
        {
          "label": "21 CFR 312.22 · Phase-specific review",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.22"
        },
        {
          "label": "FDA Phase 1 guidance · Pharmacology, PDF 12",
          "url": "https://www.fda.gov/media/71203/download#page=12"
        }
      ],
      "limitsIntro": "For an initial Phase 1 study, these are not universal prerequisites. The evidence needed depends on the drug, its risks, and the proposed investigation."
    },
    "format": "case-tabs",
    "takeaway": "Connect what the drug does to a plausible benefit, explain who might benefit, and distinguish a biological response from a better outcome for patients.",
    "readingTopics": [
      {
        "id": "existing-evidence",
        "label": "Use what is already known",
        "principle": "Candidate nomination does not restart the science. Use earlier findings where they apply, and identify what changes with this product, route or clinical setting.",
        "cases": [
          {
            "id": "glycopyrrolate-existing-evidence",
            "drug": "Glycopyrrolate inhalation solution",
            "title": "Bronchodilation had already been observed in people",
            "stage": "Initial US IND review, 2011, reproduced in the 2017 NDA; earlier human studies already existed",
            "modality": "Small molecule",
            "steps": [
              {
                "label": "Before the US IND",
                "text": "Two UK single-dose studies had tested glycopyrrolate in people with COPD. The studies included 12 and 42 participants; the larger study reported bronchodilation."
              },
              {
                "label": "The next investigation",
                "text": "The US IND proposed a 14-day crossover dose-finding study with a nebulized presentation. The team was moving from earlier single-dose observations to a repeated regimen."
              },
              {
                "label": "What FDA reviewed",
                "text": "The initial review used established systemic safety information alongside new inhalation studies addressing local respiratory effects. It considered the proposed trial reasonably safe to proceed."
              }
            ],
            "lesson": "Earlier human observations can change the next question. Here, the team already knew the drug could produce bronchodilation in people.",
            "limit": "Initial US IND does not mean first human exposure. Single-dose bronchodilation did not establish long-term symptom or exacerbation benefit, or suitability of every inhaled presentation.",
            "sources": [
              {
                "label": "Initial review and assessment · PDF 31, 33",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2017/208437Orig1s000PharmR.pdf#page=31"
              },
              {
                "label": "Proposed study and prior UK experience · PDF 38–39",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2017/208437Orig1s000PharmR.pdf#page=38"
              }
            ]
          },
          {
            "id": "vestronidase-existing-evidence",
            "drug": "Vestronidase alfa",
            "title": "Related-enzyme studies did not answer every product question",
            "stage": "2014 preliminary IND review excerpt reproduced in the 2017 BLA; not all studies are established as preceding first human exposure",
            "modality": "Biologic · Enzyme replacement",
            "steps": [
              {
                "label": "Earlier enzyme experiments",
                "text": "Published mouse studies used recombinant murine enzyme. Tissue correction differed between repeated treatment from birth and a later single injection; not every tissue improved."
              },
              {
                "label": "The human product",
                "text": "The review separately summarized uptake of recombinant human enzyme into cells from people with MPS VII. That addressed whether the product could enter relevant cells."
              },
              {
                "label": "Activity after uptake",
                "text": "A separate product study compared two lots by following intracellular enzyme activity after removing enzyme from the medium. It examined persistence of activity, not just initial uptake."
              }
            ],
            "lesson": "Keep related-product evidence, but ask what the actual candidate must still demonstrate: entry into cells, continued function and access to affected tissues.",
            "limit": "The uptake study report was not submitted. Intracellular persistence is not plasma half-life, and murine-enzyme experiments do not establish human brain benefit or a human dosing interval.",
            "sources": [
              {
                "label": "IND-review provenance · PDF 13",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2017/761047Orig1s000PharmR.pdf#page=13"
              },
              {
                "label": "Product studies and published mouse experiments · PDF 16–20",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2017/761047Orig1s000PharmR.pdf#page=16"
              }
            ]
          }
        ],
        "moreCases": []
      },
      {
        "id": "drug-action",
        "label": "Show what this drug actually does",
        "principle": "Binding a target, changing a cell and changing a disease model are different findings. Describe what the experiment showed before claiming what the drug will do in people.",
        "cases": [
          {
            "id": "faricimab-drug-action",
            "drug": "Faricimab",
            "title": "The second target was tested against an anti-VEGF comparator",
            "stage": "Studies explicitly attributed to the initial IND, summarized in the 2022 BLA; corrected study data are identified",
            "modality": "Biologic · Bispecific antibody",
            "steps": [
              {
                "label": "Two binding activities",
                "text": "Binding experiments showed that faricimab could bind VEGF-A and ANG-2 independently and simultaneously. This established two interactions, but did not show what the second interaction added."
              },
              {
                "label": "A functional comparison",
                "text": "A study of laser-induced abnormal blood vessels in the choroid used three monkeys per group. Faricimab was compared with ranibizumab, an anti-ANG-2 antibody and an antibody control."
              },
              {
                "label": "What changed",
                "text": "At matched anti-VEGF binding sites, 90 micrograms of faricimab reduced lesion severity more than 30 micrograms of ranibizumab in this experiment."
              }
            ],
            "lesson": "A functional comparison can test whether a proposed additional action changes an outcome beyond what the existing action achieves.",
            "limit": "A small induced-lesion model does not establish better vision in people, clinical superiority or pharmacological synergy. The review identifies corrected data without supplying the full correction history.",
            "sources": [
              {
                "label": "Initial-IND binding studies · PDF 18–19",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2022/761235Orig1s000PharmR.pdf#page=18"
              },
              {
                "label": "Monkey comparator experiment · PDF 20–21",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2022/761235Orig1s000PharmR.pdf#page=20"
              }
            ]
          },
          {
            "id": "lumateperone-drug-action",
            "drug": "Lumateperone",
            "title": "Receptor occupancy did not establish D2 partial agonism",
            "stage": "NDA account of the 2007 initial IND and 2014 meeting, followed by a separate NDA mechanism assessment",
            "modality": "Small molecule",
            "steps": [
              {
                "label": "Initial human question",
                "text": "The initial IND proposed an open-label receptor-occupancy study. FDA allowed it to proceed in November 2007: the study could examine engagement of receptors in people."
              },
              {
                "label": "Later dose planning",
                "text": "In 2014, FDA suggested considering receptor occupancy together with dose-response information when choosing Phase 3 doses."
              },
              {
                "label": "The broader claim",
                "text": "At NDA review, FDA questioned the claim of presynaptic D2 partial agonism. In-vitro tests showed D2 antagonism; the reviewer found the evidence insufficient for the proposed presynaptic action."
              }
            ],
            "lesson": "Measuring receptor engagement is different from identifying what the drug does at that receptor or how patients benefit.",
            "limit": "The initial IND history is retrospective. The later mechanistic criticism and labeling decision must not be presented as findings made before the 2007 study.",
            "sources": [
              {
                "label": "Initial IND and later meeting history · PDF 34",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/209500Orig1s000MultidisciplineR.pdf#page=34"
              },
              {
                "label": "Later pharmacology assessment · PDF 46–49",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/209500Orig1s000MultidisciplineR.pdf#page=46"
              },
              {
                "label": "NDA mechanism wording · PDF 263",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/209500Orig1s000MultidisciplineR.pdf#page=263"
              }
            ]
          }
        ],
        "moreCases": [
          {
            "id": "baricitinib-drug-action",
            "drug": "Baricitinib",
            "finding": "JAK1/JAK2 selectivity seen in isolated-enzyme experiments was not reproduced in human-leukocyte assays. The reviewer also noted that exposure estimates for a rat efficacy experiment came from a separate experiment.",
            "lesson": "An enzyme-assay label may not describe intact-cell behavior. State where exposure and response were actually measured together.",
            "stage": "2018 NDA pharmacology assessment; these studies are not established as the original IND set",
            "modality": "Small molecule",
            "limit": "Cell assays do not settle clinical selectivity in every tissue, and separate-animal exposure estimates are not paired exposure-response observations.",
            "sources": [
              {
                "label": "Enzyme versus cellular selectivity · PDF 65",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2018/207924Orig1s000PharmR.pdf#page=65"
              },
              {
                "label": "Rat efficacy and exposure limitation · PDF 84–86",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2018/207924Orig1s000PharmR.pdf#page=84"
              }
            ]
          },
          {
            "id": "rezafungin-drug-action",
            "drug": "Rezafungin",
            "finding": "FDA requested fungal-growth information from untreated control mice to judge whether the models and strains were suitable for interpreting drug activity and PK/PD targets.",
            "lesson": "To interpret a treated group, first understand what happened without treatment.",
            "stage": "March 2022 preliminary pre-NDA comments under an IND; not final meeting agreements or initial-IND advice",
            "modality": "Small molecule · Antifungal",
            "limit": "A request for control data does not prove that the sponsor never collected those data.",
            "sources": [
              {
                "label": "Model and untreated-control questions · PDF 4–6",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/217417Orig1s000AdminCorres.pdf#page=4"
              }
            ]
          },
          {
            "id": "pacritinib-drug-action",
            "drug": "Pacritinib",
            "finding": "The review describes activity in models driven by FLT3 or JAK2 mutations and links kinase inhibition with reduced activated STAT proteins. Its history records two initial Phase 1 malignancy protocols considered safe to proceed in February 2008.",
            "lesson": "Kinase inhibition, pathway changes and tumor-model activity each contribute a different observation to the rationale.",
            "stage": "2022 NDA account of initial IND history plus IND-submitted pharmacology summaries; individual study submission dates are not all specified",
            "modality": "Small molecule",
            "limit": "Later clinical-exposure analyses in the review were not knowledge available before first dosing; model activity did not establish the eventual best population.",
            "sources": [
              {
                "label": "Initial history and IND pharmacology · PDF 101–103",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2022/208712Orig1s000IntegratedR.pdf#page=101"
              }
            ]
          },
          {
            "id": "trofinetide-drug-action",
            "drug": "Trofinetide",
            "finding": "FDA noted a concentration mismatch: proposed neuroprotection at low-to-mid nanomolar concentrations, but glutamate-receptor binding at micromolar concentrations. Separate functional NMDA-receptor experiments showed no significant agonism or antagonism up to 30 micromolar.",
            "lesson": "A mechanism must make sense at the concentrations where the relevant effect occurs.",
            "stage": "2023 NDA controlled-substance consultation recounting later IND assessment and reviewing additional NDA functional data",
            "modality": "Synthetic peptide analogue",
            "limit": "This consultation examines particular mechanistic claims; it does not establish the complete rationale for benefit in Rett syndrome.",
            "sources": [
              {
                "label": "Concentration mismatch and functional assays · PDF 22–23",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/217026Orig1s000OtherR.pdf#page=22"
              }
            ]
          }
        ]
      },
      {
        "id": "possible-benefit",
        "label": "Explain why that could help",
        "principle": "Connect the observed drug action to the problem being treated. The drug may work around a defect, and a useful treatment can still have an incomplete explanation of benefit.",
        "cases": [
          {
            "id": "nitisinone-possible-benefit",
            "drug": "Nitisinone",
            "title": "Blocking an earlier step could reduce harmful products",
            "stage": "NDA assessment in the 2002 approval package; its pathway figure is explicitly drawn from a January 1995 IND review",
            "modality": "Small molecule",
            "steps": [
              {
                "label": "The disease defect",
                "text": "Hereditary tyrosinemia type 1 involves a deficient enzyme late in tyrosine breakdown. Harmful metabolites accumulate along that pathway."
              },
              {
                "label": "The drug’s action",
                "text": "Nitisinone inhibits an enzyme earlier in the pathway. The intervention reduces production of harmful downstream substances rather than replacing the deficient enzyme."
              },
              {
                "label": "Another consequence",
                "text": "The review describes reduced urinary succinylacetone during treatment, but also increased tyrosine and ocular injury in rat studies. Blocking a pathway can create a different metabolic problem."
              }
            ],
            "lesson": "A drug can help without repairing the original defect. Explain both the useful change and the other consequences of changing the pathway.",
            "limit": "Only the pathway figure is explicitly attributed to the 1995 IND here. The surrounding animal and clinical summaries come from the later NDA assessment.",
            "sources": [
              {
                "label": "Disease pathway and drug action · PDF 9–10",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2002/21-232_ORFADIN_pharmr_P1.pdf#page=9"
              },
              {
                "label": "IND-derived pathway figure · PDF 13",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2002/21-232_ORFADIN_pharmr_P1.pdf#page=13"
              },
              {
                "label": "NDA rat-study discussion · PDF 14–15",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2002/21-232_ORFADIN_pharmr_P1.pdf#page=14"
              }
            ]
          },
          {
            "id": "brexanolone-possible-benefit",
            "drug": "Brexanolone",
            "title": "The replacement hypothesis did not explain everything",
            "stage": "NDA account of the 2014 postpartum-depression IND, followed by later pharmacology and benefit-risk assessments",
            "modality": "Small molecule",
            "steps": [
              {
                "label": "The starting hypothesis",
                "text": "Allopregnanolone falls after childbirth. A replacement hypothesis helped focus brexanolone development on postpartum depression; the drug is chemically identical to allopregnanolone and modulates GABA-A receptors."
              },
              {
                "label": "The proposed test",
                "text": "The June 2014 indication-specific IND proposed an open-label Phase 2a study in adult women with severe postpartum depression. FDA found the protocol safe to proceed."
              },
              {
                "label": "The later assessment",
                "text": "The NDA review notes that allopregnanolone levels did not predict postpartum depression and that the mechanism of benefit remained unknown. Controlled trials supplied clinical evidence beyond the replacement hypothesis."
              }
            ],
            "lesson": "A hypothesis can guide a useful clinical investigation without becoming a complete explanation of the disease or the treatment’s benefit.",
            "limit": "The initial postpartum-depression IND was not necessarily first human exposure. The review does not date when the replacement explanation weakened; later findings must not be backdated to that IND.",
            "sources": [
              {
                "label": "Rationale and later uncertainty · PDF 19",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/211371Orig1s000MultidisciplineR.pdf#page=19"
              },
              {
                "label": "Initial indication-specific IND · PDF 27–28",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/211371Orig1s000MultidisciplineR.pdf#page=27"
              },
              {
                "label": "NDA pharmacology assessment · PDF 35–36",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/211371Orig1s000MultidisciplineR.pdf#page=35"
              }
            ]
          }
        ],
        "moreCases": [
          {
            "id": "minocycline-possible-benefit",
            "drug": "Minocycline foam",
            "finding": "A 2017 IND review reported no pharmacology studies with the foam and an unknown acne mechanism. Later formulation testing showed antibacterial activity, while pivotal trials measured acne lesions and investigator-rated severity rather than clinical microbiology outcomes.",
            "lesson": "Knowing an antibacterial action is different from proving how that action accounts for improvement in acne.",
            "stage": "2017 later IND review reproduced in the 2019 NDA; separate later microbiology and clinical assessments",
            "modality": "Small molecule · Topical formulation of an established drug",
            "limit": "The statement about absent foam pharmacology concerns that retained review. It is not a general exemption for novel candidates or all later studies.",
            "sources": [
              {
                "label": "Retained IND pharmacology discussion · PDF 149–150",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/212379Orig1s000MultidisciplineR.pdf#page=149"
              },
              {
                "label": "Later formulation microbiology · PDF 133–136",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/212379Orig1s000MultidisciplineR.pdf#page=133"
              },
              {
                "label": "Clinical criteria and assessments · PDF 57",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/212379Orig1s000MultidisciplineR.pdf#page=57"
              }
            ]
          },
          {
            "id": "dimethyl-fumarate-possible-benefit",
            "drug": "Dimethyl fumarate",
            "finding": "The sponsor emphasized Nrf2 signaling, but the NDA review described several possible pathways. Nrf2 contributed to one macrophage effect without being required for it, and gene responses differed across tissues.",
            "lesson": "Evidence that a pathway participates does not establish that it is the only explanation, or that it is necessary for every effect.",
            "stage": "2013 NDA primary-pharmacology assessment; these findings are not established as the initial IND evidence",
            "modality": "Small molecule",
            "limit": "The passage does not establish FDA acceptance of Nrf2 as the initial IND efficacy mechanism or a predictive patient-selection marker.",
            "sources": [
              {
                "label": "Multiple pathways and model findings · PDF 41–42",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2013/204063Orig1s000PharmR.pdf#page=41"
              }
            ]
          },
          {
            "id": "pimavanserin-possible-benefit",
            "drug": "Pimavanserin",
            "finding": "Parkinson disease psychosis posed a practical problem: some antipsychotics worsened movement. Selective serotonergic pharmacology offered a different approach, but the clinical reviewer still described the disease mechanism and explanation of benefit as uncertain.",
            "lesson": "A drug can address a specific clinical problem without explaining the whole disease. Animal effects do not establish that clinical advantage.",
            "stage": "2016 NDA clinical and pharmacology assessments; not established as the original IND package",
            "modality": "Small molecule",
            "limit": "These are reviewer assessments, not proof that the proposed motor advantage follows from receptor selectivity alone.",
            "sources": [
              {
                "label": "Clinical problem and uncertain mechanism · PDF 21–22, 27",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2016/207318Orig1s000MedR.pdf#page=21"
              },
              {
                "label": "Functional and animal pharmacology · PDF 47–50",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2016/207318Orig1s000PharmR.pdf#page=47"
              }
            ]
          },
          {
            "id": "drospirenone-possible-benefit",
            "drug": "Drospirenone",
            "finding": "The original-IND appendix combines receptor profiling with ovulation-inhibition and other functional experiments. It tests a physiological intervention for contraception rather than repair of a disease-causing defect.",
            "lesson": "Connect pharmacology to the intended useful function; potential benefit need not mean correcting a disease mechanism.",
            "stage": "Original IND appendix reproduced in the 2001 NDA pharmacology review",
            "modality": "Small molecule",
            "limit": "Receptor activity and animal ovulation inhibition do not, by themselves, establish clinical contraceptive effectiveness.",
            "sources": [
              {
                "label": "Original-IND receptor and functional studies · PDF 38–40",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2001/21-098_Yasmin_pharmr_P1.pdf#page=38"
              }
            ]
          },
          {
            "id": "auvelity-possible-benefit",
            "drug": "Dextromethorphan–bupropion (Auvelity)",
            "finding": "Bupropion increases dextromethorphan exposure by inhibiting its metabolism. At the 2019 end-of-Phase-2 meeting, FDA agreed that dextromethorphan alone at the combination dose would be metabolized too rapidly for the proposed direct comparison; component-contribution evidence still mattered.",
            "lesson": "When drugs are combined, ask what each adds at the exposure the combination actually produces.",
            "stage": "NDA account of later IND/end-of-Phase-2 advice in 2019, plus NDA pharmacology assessment",
            "modality": "Small-molecule combination",
            "limit": "Conditional study-design advice was not a promise of approval. The exact antidepressant mechanism remained unknown.",
            "sources": [
              {
                "label": "Component comparison and meeting advice · PDF 31–32",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/215430Orig1s000MultidisciplineR.pdf#page=31"
              },
              {
                "label": "Combination pharmacology · PDF 69",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/215430Orig1s000MultidisciplineR.pdf#page=69"
              }
            ]
          }
        ]
      },
      {
        "id": "patient-selection",
        "label": "Choose patients from the evidence",
        "principle": "Patient selection can change as evidence accumulates. Explain why the drug might help the proposed population, what a test does and does not identify, and what would justify including or excluding other patients.",
        "cases": [
          {
            "id": "crizotinib",
            "drug": "Crizotinib",
            "title": "Two stable-disease observations led to an ALK-positive extension",
            "stage": "Early Phase 1 study and later IND protocol amendments; reconstructed in the 2011 NDA review",
            "modality": "Small molecule · kinase inhibitor",
            "steps": [
              {
                "label": "Start broadly, with a hypothesis",
                "text": "The original Phase 1 study investigated a c-Met/HGFR inhibitor in advanced cancers, excluding leukemia. It included pathway-related pharmacodynamic measurements and preliminary antitumor activity."
              },
              {
                "label": "Notice a clinical signal",
                "text": "Two patients with ALK-positive non-small cell lung cancer in the 50 mg cohort had stable disease at 1.5 and 7 months. These were reported as stable disease, not objective responses."
              },
              {
                "label": "Test the narrower population",
                "text": "The study added an ALK-positive lung-cancer extension. The October 2007 amendment allowed EML4-ALK-positive patients; later amendments also included an ALK-negative cohort."
              }
            ],
            "lesson": "An early observation can justify testing a narrower population without establishing that the marker already predicts benefit.",
            "limit": "This is an NDA reconstruction, not the full original IND. Stable disease in two people did not establish predictive validity or clinical benefit.",
            "sources": [
              {
                "label": "Original study objectives · PDF 35",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2011/202570Orig1s000MedR.pdf#page=35"
              },
              {
                "label": "Stable disease and protocol amendments · PDF 37–38",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2011/202570Orig1s000MedR.pdf#page=37"
              }
            ]
          },
          {
            "id": "ensartinib",
            "drug": "Ensartinib",
            "title": "Marker-negative enrollment was an explicit protocol question",
            "stage": "Later IND 111695 correspondence recounting June 2011 pre-IND advice and the March 2012 initial IND",
            "modality": "Small molecule · kinase inhibitor",
            "steps": [
              {
                "label": "State the proposed biology",
                "text": "The pre-IND discussion considered possible activity in tumors with ALK or cMET alterations."
              },
              {
                "label": "Plan who else to study",
                "text": "FDA agreed that the protocol should specify how many patients negative for both ALK and cMET would enroll. It also advised identifying potential pharmacodynamic endpoints."
              },
              {
                "label": "Separate escalation from expansion",
                "text": "The initial dose-escalation study enrolled advanced solid tumors. Expansion enrollment was limited to ALK-positive non-small cell lung cancer, identified by fluorescence in situ hybridization."
              }
            ],
            "lesson": "Broad enrollment can be planned learning. Say what marker-negative patients will help establish rather than treating their inclusion as incidental.",
            "limit": "The advice is recounted in later correspondence. It neither demonstrates benefit in marker-negative patients nor establishes a general requirement to enroll them.",
            "sources": [
              {
                "label": "Pre-IND advice and initial study · PDF 49–50",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2025/218171Orig1s000AdminCorres.pdf#page=49"
              }
            ]
          }
        ],
        "moreCases": [
          {
            "id": "tazemetostat",
            "drug": "Tazemetostat",
            "finding": "FDA noted that the EZH2 assay detected seven variants but not copy-number gains. It agreed with testing archival samples for copy-number gain and requested better characterization of the mutation- and amplification-defined populations.",
            "lesson": "A negative test result means negative for what the assay detects; it does not necessarily mean the pathway is unaltered.",
            "stage": "December 2018 end-of-Phase-2 meeting under IND 124025; later development",
            "modality": "Small molecule · EZH2 inhibitor",
            "limit": "FDA raised possible misclassification; it did not establish that every assay-negative tumor carried another EZH2 alteration.",
            "sources": [
              {
                "label": "Assay coverage and subgroup discussion · PDF 33–38",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2020/213400Orig1s000AdminCorres.pdf#page=33"
              }
            ]
          },
          {
            "id": "ruxolitinib",
            "drug": "Ruxolitinib",
            "finding": "The FDA genomics review reported benefit in both JAK2V617F-positive and negative myelofibrosis groups. It concluded that pretreatment mutation testing was not warranted, citing the exploratory analysis, benefit regardless of mutation status and lack of a safety implication.",
            "lesson": "A mutation can explain disease biology without becoming a required treatment-selection test.",
            "stage": "2011 NDA clinical/genomics assessment reproduced in the public FDA review package",
            "modality": "Small molecule · JAK inhibitor",
            "limit": "Exploratory subgroup results do not establish equal benefit or identical mechanisms. This recommendation cannot be backdated to initial IND clearance.",
            "sources": [
              {
                "label": "FDA genomics assessment · PDF 466–467",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2024/202192Orig1s000.pdf#page=466"
              }
            ]
          },
          {
            "id": "vorasidenib",
            "drug": "Vorasidenib",
            "finding": "The initial study enrolled IDH1/2-mutant advanced solid tumors, including gliomas. A later meeting focused on grade 2 glioma after surgery alone. The sponsor reported different preliminary activity in enhancing and non-enhancing gliomas.",
            "lesson": "A shared mutation does not settle disease stage, prior treatment or the population in which benefit should be tested.",
            "stage": "April 2019 end-of-Phase-2 meeting, IND 140832, recounting earlier IND 124865 development",
            "modality": "Small molecule · mutant IDH inhibitor",
            "limit": "Nonrandomized subgroup observations do not prove comparative efficacy. The discussion concerned later trial design, not first-in-human clearance.",
            "sources": [
              {
                "label": "Population and prior-study history · PDF 39–42",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2024/218784Orig1s000AdminCorres.pdf#page=39"
              }
            ]
          },
          {
            "id": "zuranolone",
            "drug": "Zuranolone",
            "finding": "FDA initially discussed a possible postpartum-depression package combining one positive postpartum study with two positive major-depression studies. Later discussions asked for another postpartum study and raised possible differences in response between the two populations.",
            "lesson": "Shared symptoms and pharmacology do not establish that treatment effects can be borrowed between populations.",
            "stage": "2020–2021 later IND and pre-NDA discussions, recounted in the 2023 postpartum-depression NDA review",
            "modality": "Small molecule · neuroactive steroid; GABA-A receptor modulator",
            "limit": "Major-depression passages are partly redacted. This record does not establish a single mechanism explaining response differences.",
            "sources": [
              {
                "label": "Population bridge and later advice · PDF 150–153",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/217369Orig2s000IntegratedR.pdf#page=150"
              }
            ]
          }
        ]
      },
      {
        "id": "measured-benefit",
        "label": "Separate drug effects from patient benefit",
        "principle": "A change in a receptor assay, hormone or blood marker can show that a drug acts. State what that measurement establishes and what still needs to be measured to show that patients benefit.",
        "cases": [
          {
            "id": "cinacalcet",
            "drug": "Cinacalcet",
            "title": "PTH lowering was measurable; bone benefit was expected",
            "stage": "1998 original US IND review, reproduced in the 2004 NDA; prior human Phase 1 data already existed",
            "modality": "Small molecule · calcimimetic",
            "steps": [
              {
                "label": "Measure the physiological effect",
                "text": "In normal and hyperparathyroid rats, AMG073 lowered serum parathyroid hormone (PTH) and calcium. The review linked its action to increased parathyroid-cell sensitivity to extracellular calcium."
              },
              {
                "label": "See both action and risk",
                "text": "Prior healthy-volunteer dosing also lowered PTH. Five participants receiving repeated 100 mg doses withdrew because of mild hypocalcemia or related symptoms."
              },
              {
                "label": "Test the patient setting",
                "text": "The proposed Phase 2 study in secondary hyperparathyroidism measured PTH, calcium, calcitonin and pharmacokinetics. Improvement in bone pathology was an expectation, not an established outcome in these pages."
              }
            ],
            "lesson": "Measure the intended physiological response and its unwanted consequences, while keeping the expected patient benefit a separate claim.",
            "limit": "Original US IND does not mean first-ever human dosing. These passages do not establish fracture prevention, improved bone disease or overall patient benefit.",
            "sources": [
              {
                "label": "Original US IND rationale and clinical plan · PDF 8–9",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2004/21-688.pdf_Sensipar_Pharmr_P5.pdf#page=8"
              }
            ]
          },
          {
            "id": "eplontersen",
            "drug": "Eplontersen",
            "title": "Lower TTR was not accepted as the proposed primary endpoint",
            "stage": "February 2019 pre-IND advice about a planned Phase 3 study, quoted in the NDA review; not a Phase 1 entry requirement",
            "modality": "Antisense oligonucleotide · modality comparator",
            "steps": [
              {
                "label": "Propose a molecular readout",
                "text": "The sponsor proposed serum transthyretin (TTR) reduction as a primary efficacy endpoint, based on the drug’s intended effect."
              },
              {
                "label": "Ask what patients gain",
                "text": "FDA acknowledged the importance of TTR reduction but did not agree to use it as the planned Phase 3 primary endpoint."
              },
              {
                "label": "Measure clinical outcomes",
                "text": "FDA recommended neuropathy impairment and patient-reported quality-of-life measures as coprimary endpoints, with TTR reduction as a secondary endpoint."
              }
            ],
            "lesson": "A marker can measure the intended drug effect while remaining insufficient as the main evidence of patient benefit.",
            "limit": "This advice concerned a specific Phase 3 plan. It is not a universal rule for first-in-human studies or every proposed biomarker.",
            "sources": [
              {
                "label": "FDA endpoint advice · PDF 37",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2024/217388Orig1s000IntegratedR.pdf#page=37"
              }
            ]
          }
        ],
        "moreCases": [
          {
            "id": "avacincaptad-pegol",
            "drug": "Avacincaptad pegol",
            "finding": "Studies previously reviewed under the initial IND showed C5 binding and inhibition of complement activation. C5a generation was inhibited while upstream C3a generation was not under the tested conditions. These assays measured drug action, not retinal benefit.",
            "lesson": "Keep target binding, pathway inhibition and benefit in the affected tissue as separate claims.",
            "stage": "2023 NDA summary of studies previously reviewed under initial IND 77902 in 2008; retinal disease rationale is the later reviewer’s synthesis",
            "modality": "PEGylated RNA aptamer · modality comparator",
            "limit": "Systemic monkey complement inhibition does not establish intravitreal benefit in geographic atrophy. The later disease rationale should not be backdated.",
            "sources": [
              {
                "label": "Initial-IND pharmacology summaries · PDF 23–28",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/217225Orig1s000PharmR.pdf#page=23"
              }
            ]
          },
          {
            "id": "fosdenopterin",
            "drug": "Fosdenopterin",
            "finding": "Studies in MOCS1-knockout mice measured enzyme activity, biochemical markers, growth and survival-related observations. The reviewer reports the sponsor’s conclusion that plasma S-sulfocysteine and urinary uric acid lacked a useful dose relationship for guiding treatment under the tested conditions.",
            "lesson": "A disease-related marker can be measurable without being useful for choosing dose.",
            "stage": "October 2020 IND 117502 assessment of studies submitted earlier but not reviewed before NDA submission; not a first-dose review",
            "modality": "Small molecule · synthetic cyclic pyranopterin monophosphate",
            "limit": "These mouse findings do not establish whether the markers can guide human dosing or measure clinical benefit.",
            "sources": [
              {
                "label": "Assessment provenance · PDF 168",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2021/214018Orig1s000IntegratedR.pdf#page=168"
              },
              {
                "label": "Mouse pharmacology and marker limitations · PDF 179–180",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2021/214018Orig1s000IntegratedR.pdf#page=179"
              }
            ]
          },
          {
            "id": "pegzilarginase",
            "drug": "Pegzilarginase",
            "finding": "FDA distinguished lowering plasma arginine from improving motor function and mobility. In discussion of a Phase 3 plan, it said the proposed duration might detect biochemical changes without being long enough to assess functional outcomes.",
            "lesson": "Biochemical correction and functional improvement may require different observation periods.",
            "stage": "Later IND 127774 meeting on a Phase 3 plan; reproduced in the 2026 marketing package",
            "modality": "PEGylated recombinant enzyme · biologic comparator",
            "limit": "Some timing and endpoint details are redacted. The discussion does not establish that biochemical correction always produces functional recovery.",
            "sources": [
              {
                "label": "Biochemical and functional endpoint discussion · PDF 23–27",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2026/761211Orig1s000AdminCorres.pdf#page=23"
              }
            ]
          }
        ]
      }
    ],
    "workedCase": {
      "id": "ivacaftor-ind",
      "label": "Ivacaftor: follow the evidence",
      "title": "What does the initial IND review add to the discovery account?",
      "stage": "2014 discovery paper compared with the reproduced 2006 initial IND review",
      "drug": "Ivacaftor · VX-770",
      "identity": "Compound 48 in the discovery chapter; VRT-813077 in the FDA review.",
      "image": "assets/candidate-transition-48.svg",
      "imageAlt": "Chemical structure of ivacaftor, the nominated development candidate",
      "question": "Could this candidate improve the function of defective CFTR in human airway tissue?",
      "rationale": "CFTR dysfunction reduces chloride transport. The team’s hypothesis was that helping channels already at the cell surface open more often could restore useful function.",
      "timing": "This is a comparison of sources, not a timeline of new experiments. The discovery paper is retrospective; neither source dates each study relative to candidate nomination.",
      "discovery": {
        "title": "What lead optimization contributes",
        "claims": [
          {
            "label": "The actual candidate was active",
            "text": "Compound 48 increased CFTR activity in engineered cells. Table 8 reports an EC₅₀ of 3 ± 1 nM in the F508del assay."
          },
          {
            "label": "Human CF cells were already studied",
            "text": "The paper reports chloride-transport responses in patient-derived bronchial cells, including F508del-homozygous and G551D/F508del cells. Human-tissue testing was part of this account."
          },
          {
            "label": "A mechanism and patient hypothesis existed",
            "text": "The authors describe compound 48 as a CFTR potentiator and say its G551D-cell activity guided their choice of a CF patient population to study."
          }
        ],
        "limit": "The discovery paper was published in 2014, after ivacaftor received FDA marketing approval in 2012. It looks back across discovery and later development, so we cannot assume every reported result was available by the end of lead optimization or identify exactly which studies were added after candidate nomination.",
        "source": {
          "label": "Hadida et al., 2014 · pp. 9780–9781, Tables 8–9",
          "url": "https://doi.org/10.1021/jm5012808"
        },
        "approvalSource": {
          "label": "FDA marketing approval · January 31, 2012",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000Approv.pdf"
        }
      },
      "comparison": {
        "title": "What the initial IND review adds",
        "intro": "Compare the same biological questions in the discovery paper and the FDA review. The review summarizes three submitted pharmacology reports: B227, B228 and B229.",
        "rows": [
          {
            "id": "function",
            "question": "Does the candidate increase chloride transport?",
            "paper": {
              "text": "Table 8 reports 3 ± 1 nM potency for compound 48 in the engineered NIH3T3 F508del assay. This was a candidate result, not just evidence from a tool compound.",
              "source": {
                "label": "Discovery paper · p. 9780, Table 8",
                "url": "https://doi.org/10.1021/jm5012808"
              }
            },
            "ind": {
              "text": "B227 describes fluorescence and electrophysiology experiments in NIH3T3 and FRT cells. With forskolin stimulation, FRT-cell EC₅₀ values were 18 ± 6 nM for F508del and 36 ± 6 nM for G551D.",
              "source": {
                "label": "Study report B227 · FDA PDF 85",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000PharmR.pdf#page=85"
              }
            },
            "addition": {
              "label": "More detail about the experimental systems",
              "text": "The same activity question was tested across cell backgrounds and CFTR variants. The assay system matters when comparing potency values."
            }
          },
          {
            "id": "mechanism",
            "question": "Does it change channel gating or upstream signaling?",
            "paper": {
              "text": "The paper describes CFTR potentiation and includes a cAMP-measurement method. Its main results do not present the detailed single-channel and phosphodiesterase findings summarized in the IND review.",
              "source": {
                "label": "Discovery paper · pp. 9780–9781; cAMP method p. 9793",
                "url": "https://doi.org/10.1021/jm5012808"
              }
            },
            "ind": {
              "text": "B228 reports increased channel open probability without changed single-channel conductance. The candidate did not increase cAMP in the reported assay; phosphodiesterase inhibition occurred only at concentrations much higher than those needed for potentiation.",
              "source": {
                "label": "Study report B228 · FDA PDF 86",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000PharmR.pdf#page=86"
              }
            },
            "addition": {
              "label": "More detail supporting the mechanism",
              "text": "Single-channel behavior and upstream-signaling assays help distinguish channel potentiation from an indirect increase in cAMP."
            }
          },
          {
            "id": "tissue",
            "question": "Does the effect extend to human CF airway tissue?",
            "paper": {
              "text": "Table 9 reports F508del bronchial-cell potency of 22 ± 10 nM. The text also reports G551D/F508del bronchial-cell activity and chloride secretion approaching half the non-CF level. Patient-derived tissue was already part of this published account.",
              "source": {
                "label": "Discovery paper · p. 9780; p. 9781, Table 9",
                "url": "https://doi.org/10.1021/jm5012808"
              }
            },
            "ind": {
              "text": "B229 describes F508del-homozygous bronchial cells and nasal-polyp tissue, plus non-CF controls. Forskolin-stimulated activity increased; some bronchial experiments used a corrector. In nasal tissue, glibenclamide blocked the stimulated response.",
              "source": {
                "label": "Study report B229 · FDA PDF 86",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000PharmR.pdf#page=86"
              }
            },
            "addition": {
              "label": "Different tissue details and controls",
              "text": "This excerpt documents F508del patient tissue, not G551D patient-derived bronchial cells. The stimulation, corrector and inhibitor conditions matter when interpreting what it showed."
            }
          }
        ],
        "note": "Forskolin stimulates the cAMP pathway; a corrector helps CFTR reach the cell surface. B229’s F508del tissue findings and the discovery paper’s G551D tissue findings concern different CFTR genotypes."
      },
      "assessment": {
        "title": "How FDA assessed the evidence",
        "items": [
          {
            "label": "The reviewer’s interpretation",
            "text": "The reviewer summarized increased chloride transport in engineered cells and human bronchial cells, and interpreted the mechanism experiments as direct potentiation of channel gating rather than an effect through increased cAMP signaling."
          },
          {
            "label": "Requests or changes in these passages",
            "text": "We did not identify a request to add or repeat primary pharmacology studies in the reviewed B227–B229 passages. That does not establish what happened in every FDA interaction or mean the whole IND was accepted without changes."
          },
          {
            "label": "What remained unproven",
            "text": "These experiments did not demonstrate improved lung function or establish which CF populations would benefit from treatment. Results obtained with stimulation or a corrector cannot be treated as proof that ivacaftor alone would work across CF genotypes."
          }
        ],
        "source": {
          "label": "FDA initial-IND pharmacology assessment · PDF 85–86",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000PharmR.pdf#page=85"
        }
      },
      "takeaway": "The biological case rests on the candidate’s activity, an explanation for that activity, and evidence from relevant human tissue. Whether that produces meaningful benefit in patients remains a clinical question.",
      "sources": [
        {
          "label": "Hadida et al., 2014 · Discovery paper, pp. 9780–9781 and 9793",
          "url": "https://doi.org/10.1021/jm5012808"
        },
        {
          "label": "FDA · Reproduced initial-IND review, PDF 78–86",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000PharmR.pdf#page=78"
        },
        {
          "label": "Study report B227 · FDA PDF 85",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000PharmR.pdf#page=85"
        },
        {
          "label": "Study reports B228–B229 · FDA PDF 86",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000PharmR.pdf#page=86"
        },
        {
          "label": "FDA marketing approval · January 31, 2012",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000Approv.pdf"
        }
      ]
    },
    "lessons": {
      "id": "lessons-from-the-past",
      "label": "Lessons from the past"
    }
  },
  "nonclinical-pkpd": {
    "id": "nonclinical-pkpd",
    "title": "Connect dose, exposure, and effect",
    "question": "Which exposure–effect relationships can inform the next human investigation, and what makes that comparison credible?",
    "premise": "The program already has exposure and response data. The next task is to understand what those observations establish and whether they transfer.",
    "inherited": "Candidate PK/PD, ADME and toxicokinetics; formulation history; assay limitations; relevant prior human observations.",
    "context": "The product, route, regimen, biological response and population involved in the proposed comparison.",
    "nodes": [
      {
        "id": "define-measurements",
        "label": "Identify the measurements",
        "question": "What was administered, and what did the assay actually measure?",
        "principle": "A dose or concentration is interpretable only with its experimental context.",
        "body": "Keep formulation, route, schedule, sampling time and analytes attached to each exposure value. Distinguish quantified observations from predictions, presence-only findings and results below quantification. A change in presentation may reopen an existing comparison.",
        "visual": {
          "type": "chain",
          "items": [
            {
              "label": "Administered product",
              "text": "Formulation, route and schedule define what entered the experiment.",
              "status": "supported"
            },
            {
              "label": "Measured exposure",
              "text": "Analyte, sampling and assay limits define what was observed.",
              "status": "supported"
            },
            {
              "label": "Unmeasured exposure",
              "text": "A prediction or unquantified analyte needs an explicit limitation.",
              "status": "open"
            }
          ]
        },
        "decision": "Retain usable measurements and identify any product or analytical difference that changes their interpretation."
      },
      {
        "id": "exposure-response",
        "label": "Relate exposure and response",
        "question": "What relationship is supported across doses and time?",
        "principle": "Showing biological activity is different from distinguishing doses or regimens.",
        "body": "Align exposure and response over time, including repeated dosing and the untreated trajectory where relevant. A marker can demonstrate activity yet offer little dose discrimination. Do not infer a cause for a changing response without supporting observations.",
        "visual": {
          "type": "contrast",
          "items": [
            {
              "label": "Activity question",
              "text": "Does treatment change the measured biology?",
              "status": "open"
            },
            {
              "label": "Regimen question",
              "text": "Does the measurement distinguish relevant exposures, doses or schedules?",
              "status": "open"
            },
            {
              "label": "Transfer question",
              "text": "Will that relationship remain informative in the proposed setting?",
              "status": "inferred"
            }
          ]
        },
        "decision": "Choose a response measure for the decision it can support, not merely because it belongs to the pathway."
      },
      {
        "id": "human-comparison",
        "label": "Examine the comparison",
        "question": "What makes the animal-to-human comparison informative?",
        "principle": "An exposure margin is an interpreted comparison, not a verdict.",
        "body": "Name the animal effect level and human reference, including measured versus extrapolated values. Consider schedule, population and analyte differences. Preserve what the numerator means: a LOAEL exposure cannot silently become a NOAEL exposure.",
        "visual": {
          "type": "bridge",
          "items": [
            {
              "label": "Animal reference",
              "text": "Exposure belongs to a defined effect level, study and regimen.",
              "status": "supported"
            },
            {
              "label": "Comparable metric",
              "text": "Explain which exposure feature supports the proposed comparison.",
              "status": "inferred"
            },
            {
              "label": "Human reference",
              "text": "Identify the population and whether exposure was measured or predicted.",
              "status": "open"
            }
          ]
        },
        "decision": "Interpret the comparison with its biological meaning and assumptions before using it to support a human investigation."
      },
      {
        "id": "update-model",
        "label": "Choose the next observation",
        "question": "Which new observation could change the exposure target or risk interpretation?",
        "principle": "The next measurement should resolve a consequential uncertainty rather than simply add another parameter.",
        "body": "Identify the uncertain comparison and what result would change it. Existing data or reanalysis may answer the question; targeted new measurements may be needed. Carry unresolved assumptions into safety interpretation and clinical design.",
        "visual": {
          "type": "chain",
          "items": [
            {
              "label": "Current relationship",
              "text": "The evidence supports a bounded exposure–effect argument.",
              "status": "supported"
            },
            {
              "label": "Decisive uncertainty",
              "text": "Identify the assumption that could alter the proposed path.",
              "status": "open"
            },
            {
              "label": "Next observation",
              "text": "Specify how a result would strengthen, narrow or challenge the relationship.",
              "status": "inferred"
            }
          ]
        },
        "decision": "State what remains uncertain and how the next informative observation would update the development argument."
      }
    ],
    "cases": [
      {
        "id": "cinacalcet-exposure",
        "name": "Cinacalcet",
        "kicker": "Read the margin’s meaning",
        "stage": "Original US IND review reproduced in NDA · Proposed Phase 2, prior human data",
        "context": "The reviewer evaluated proposed patient dosing using prior clinical PK and pharmacodynamic observations alongside animal toxicity exposures. This was not the first administration to any human.",
        "mapFocus": 2,
        "known": "The comparison used animal exposures at lowest-observed-adverse-effect levels and an extrapolated human AUC at the proposed maximum dose. Prior human observations included hormone suppression and calcium reductions.",
        "supports": "A context-specific exposure comparison could inform the proposed investigation together with the nature of the findings and monitoring.",
        "uncertain": "The human denominator was extrapolated. Animal LOAEL exposures were not NOAELs, and these ratios do not establish a universal safety factor.",
        "decision": "The reviewer considered the comparison and prior human responses while retaining attention to toxicity and monitoring.",
        "lesson": "Keep the effect level, human reference and clinical context visible beside the ratio.",
        "sources": [
          {
            "label": "Original IND exposure assessment · PDF 16",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2004/21-688.pdf_Sensipar_Pharmr_P5.pdf#page=16"
          }
        ]
      },
      {
        "id": "fosdenopterin-dose-marker",
        "name": "Fosdenopterin",
        "kicker": "A marker with the wrong job",
        "stage": "IND study assessment completed after NDA submission · Not the first-dose review",
        "context": "Studies in MOCS1-deficient mice examined biological responses to treatment. The retained assessment considered whether particular plasma and urinary measurements could inform therapeutic dosing.",
        "mapFocus": 1,
        "known": "Plasma S-sulfocysteine and urinary uric acid lacked useful dose discrimination under the tested conditions; brain and liver measurements supplied different information.",
        "supports": "A disease-related measurement can contribute biological information while being inadequate for choosing among doses.",
        "uncertain": "The passage does not establish why these measurements lacked dose discrimination or reject every possible future use of them.",
        "decision": "The sponsor concluded that these plasma and urinary measurements might be inadequate to guide therapeutic dosing; the assessment preserves that limitation.",
        "lesson": "Define the marker’s intended decision before deciding whether it is useful.",
        "sources": [
          {
            "label": "Assessment provenance · PDF 168",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2021/214018Orig1s000IntegratedR.pdf#page=168"
          },
          {
            "label": "Pharmacology assessment · PDF 179–180",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2021/214018Orig1s000IntegratedR.pdf#page=179"
          }
        ]
      }
    ],
    "exercise": {
      "title": "Read the exposure comparison",
      "context": "In cinacalcet’s original US IND review, animal reference exposures came from LOAELs. Human exposure at the proposed maximum was extrapolated from earlier clinical information. Prior human responses also informed the assessment.",
      "claim": "This is a measured animal-to-human NOAEL margin establishing a generally safe first-human dose.",
      "prompt": "Which correction makes the comparison scientifically usable?",
      "options": [
        {
          "label": "Treat the animal reference as a NOAEL because FDA considered it when assessing the proposed clinical doses.",
          "feedback": "Use in a review does not change the biological meaning of the animal reference. LOAEL and NOAEL are not interchangeable.",
          "correct": false
        },
        {
          "label": "Keep LOAEL and extrapolated-human labels; interpret the comparison with the findings, prior human responses and proposed investigation.",
          "feedback": "Correct. These labels change the meaning of the ratio. The original US IND already had human information, and the comparison cannot be turned into a general first-human dose rule.",
          "correct": true
        },
        {
          "label": "Treat the extrapolated exposure as measured because it was derived from previous human observations.",
          "feedback": "Prior observations can inform a prediction without making the predicted value an observation. Keep that uncertainty attached to the human reference.",
          "correct": false
        }
      ],
      "result": {
        "claim": "The exposure comparison informs this proposed investigation within explicit biological and predictive limits.",
        "support": "Animal LOAEL exposures, extrapolated human exposure and prior human physiological responses contribute different information.",
        "uncertainty": "The ratio alone does not establish a risk-free dose or a universal exposure threshold.",
        "next": "Carry the comparison’s assumptions into the interpretation of potential harm and the clinical dosing rationale."
      }
    },
    "boundary": {
      "required": "Provide pharmacology/toxicology information adequate to support the proposed investigation, including disposition information if known.",
      "recommended": "ICH S3A recommends relating animal systemic exposure to dose, time and toxicity through a case-specific, iterative approach.",
      "judgment": "Choose informative metrics, preserve analytical limits and distinguish measured from predicted quantities. No single exposure ratio replaces the interpretation.",
      "source": {
        "label": "21 CFR 312.23(a)(8) · Pharmacology and toxicology",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23"
      },
      "recommendationSource": {
        "label": "ICH S3A · Toxicokinetics, PDF 5–6",
        "url": "https://www.fda.gov/media/71990/download#page=5"
      }
    },
    "handoff": {
      "id": "nonclinical-safety",
      "label": "Identify and interpret potential harm",
      "text": "Use the exposure–effect argument to interpret the conditions, severity and possible human relevance of observed harm."
    }
  },
  "nonclinical-safety": {
    "id": "nonclinical-safety",
    "title": "Identify and interpret potential harm",
    "question": "What do the findings imply for people, and which parts of that interpretation remain uncertain?",
    "premise": "Safety interpretation starts with existing findings and their conditions. A negative result, plausible mechanism or reassuring ratio cannot substitute for the whole argument.",
    "inherited": "Prior hazards, negative findings, candidate pharmacology, exposure data, recovery observations and relevant human experience.",
    "context": "The proposed population, product, route and regimen, interpreted against the conditions of existing observations.",
    "nodes": [
      {
        "id": "describe-finding",
        "label": "Describe the observation",
        "question": "What happened, and what did the experiment have a reasonable chance of detecting?",
        "principle": "Describe the observation before turning it into a safety conclusion.",
        "body": "Identify the affected function or tissue, tested conditions and relevant controls. Keep negative findings bounded by exposure, timing and assay sensitivity. A broad label such as ‘acceptable safety’ hides information needed for interpretation.",
        "visual": {
          "type": "matrix",
          "items": [
            {
              "label": "Observed finding",
              "text": "What changed in the tested system?",
              "status": "supported"
            },
            {
              "label": "Negative finding",
              "text": "What was not detected within the experiment’s limits?",
              "status": "supported"
            },
            {
              "label": "Untested condition",
              "text": "What remains outside the observation?",
              "status": "open"
            }
          ]
        },
        "decision": "Write the observation and its limits so another reader can distinguish the evidence from your interpretation."
      },
      {
        "id": "interpret-course",
        "label": "Follow the time course",
        "question": "How did the finding change with exposure, interruption and recovery?",
        "principle": "Improvement and complete recovery support different conclusions.",
        "body": "Place onset, dose changes and post-treatment observations on one timeline. Distinguish less severe findings during lower exposure from resolution after stopping. A residual finding at the last observation remains part of the risk account.",
        "visual": {
          "type": "timeline",
          "items": [
            {
              "label": "During treatment",
              "text": "Record onset and exposure alongside the observed finding.",
              "status": "supported"
            },
            {
              "label": "After dose change",
              "text": "Document improvement, persistence or worsening without assuming its cause.",
              "status": "supported"
            },
            {
              "label": "After treatment",
              "text": "State what resolved and what remained at the last assessment.",
              "status": "supported"
            },
            {
              "label": "Beyond observation",
              "text": "Later recovery or delayed effects remain unobserved.",
              "status": "open"
            }
          ]
        },
        "decision": "Match the recovery claim to the observed trajectory, including what the study did not follow long enough to establish."
      },
      {
        "id": "human-relevance",
        "label": "Examine human relevance",
        "question": "What supports the proposed explanation and its relevance to people?",
        "principle": "A plausible mechanism can inform relevance without settling it.",
        "body": "Separate the observed harm from its proposed cause. Ask whether supporting evidence reaches the affected tissue and clinical context. Species differences, pharmacology and exposure can refine the inference; they do not automatically erase an inconvenient observation.",
        "visual": {
          "type": "bridge",
          "items": [
            {
              "label": "Observed harm",
              "text": "The finding remains part of the evidence.",
              "status": "supported"
            },
            {
              "label": "Causal explanation",
              "text": "A mechanism needs evidence in the relevant system or tissue.",
              "status": "inferred"
            },
            {
              "label": "Human relevance",
              "text": "Consider whether the proposed clinical setting shares the conditions that matter.",
              "status": "open"
            }
          ]
        },
        "decision": "Keep a human-relevance explanation provisional wherever the supporting evidence does not establish the necessary link."
      },
      {
        "id": "risk-implication",
        "label": "Define the trial implication",
        "question": "What should this interpretation change about the proposed investigation?",
        "principle": "A risk account should identify an action and the evidence that would change it.",
        "body": "Connect severity, reversibility and human relevance with a proposed precaution or further question. Monitoring only helps when the finding can be detected and acted on. Preserve uncertainty for clinical planning and update the account when human observations arrive.",
        "visual": {
          "type": "chain",
          "items": [
            {
              "label": "Current concern",
              "text": "State the potential harm and the conditions supporting it.",
              "status": "supported"
            },
            {
              "label": "Proposed response",
              "text": "Explain how a precaution or additional evidence addresses that concern.",
              "status": "inferred"
            },
            {
              "label": "Reassessment trigger",
              "text": "Specify which observation would change the risk interpretation.",
              "status": "open"
            }
          ]
        },
        "decision": "Carry a bounded risk statement and justified proposed response into package assessment and clinical planning."
      }
    ],
    "cases": [
      {
        "id": "osimertinib-recovery",
        "name": "Osimertinib",
        "kicker": "Improvement is not full recovery",
        "stage": "IND dog study reproduced in NDA appendix · Original-IND timing not established here",
        "context": "A one-month dog study included gastrointestinal toxicity, dose interruption and reduction, corneal findings and post-treatment observations. These observations support distinct claims about severity and recovery.",
        "mapFocus": 1,
        "known": "Corneal changes partly regressed after dose modification, but opacity was not fully reversible in recovery animals. Gastrointestinal toxicity had prompted interruption and dose reduction.",
        "supports": "The study shows partial regression under specified changes and residual findings at the end of observation.",
        "uncertain": "Small groups and no vehicle-control recovery cohort limit interpretation. The passage does not establish the eventual human monitoring schedule.",
        "decision": "In reading the assessment, preserve partial regression and incomplete recovery separately; do not replace them with a blanket ‘reversible’ conclusion.",
        "lesson": "Recovery is a claim about an observed trajectory, not a label awarded because a finding improved.",
        "sources": [
          {
            "label": "Dog study assessment · PDF 142, 144–145",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2015/208065Orig1s000PharmR.pdf#page=142"
          }
        ]
      },
      {
        "id": "faricimab-relevance",
        "name": "Faricimab",
        "kicker": "An explanation still needs evidence",
        "stage": "Initial IND findings quoted in later BLA review · Bispecific antibody comparator",
        "context": "Severe ocular inflammation raised a question about animal toxicity and its relevance to intravitreal human dosing. The sponsor proposed an anti-drug-antibody explanation.",
        "mapFocus": 2,
        "known": "The reviewer found that evidence for the proposed antibody explanation did not establish it in the eye. Lower proposed clinical dosing was supported; higher dosing was not.",
        "supports": "The observed lesion and the evidence for its proposed cause required separate judgments.",
        "uncertain": "The cause of the ocular findings remained unresolved. Preserved excerpts do not reconstruct the complete initial submission or every later decision.",
        "decision": "The review supported the lower proposed dose and sought lower-dose human information before escalation, retaining the unresolved concern.",
        "lesson": "Do not convert a plausible animal-specific explanation into established absence of human relevance.",
        "sources": [
          {
            "label": "Retained initial assessment · PDF 26",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2022/761235Orig1s000PharmR.pdf#page=26"
          },
          {
            "label": "Development history · PDF 15",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2022/761235Orig1s000PharmR.pdf#page=15"
          }
        ]
      }
    ],
    "exercise": {
      "title": "Revise the recovery claim",
      "context": "In the osimertinib dog study, corneal changes partially regressed after dose interruption and reduction. Corneal opacity was not fully reversible in recovery animals. The study had small groups and no vehicle-control recovery cohort.",
      "claim": "The eye findings were reversible, so the study establishes that continued dosing poses no persistent ocular concern.",
      "prompt": "Which interpretation best matches the observed trajectory?",
      "options": [
        {
          "label": "Improvement after dose reduction establishes that the original dosing conditions can be resumed without concern.",
          "feedback": "Improvement under changed exposure does not establish the acceptability of the original exposure. The residual finding also remains relevant.",
          "correct": false
        },
        {
          "label": "Residual opacity at the last assessment proves that every affected animal would have permanent injury.",
          "feedback": "Persistence through the observation period is not proof of lifelong persistence. Match the conclusion to the period and animals actually observed.",
          "correct": false
        },
        {
          "label": "Partial regression occurred, but residual opacity remained; longer-term recovery and human relevance remain separate questions.",
          "feedback": "This preserves both improvement and persistence. It neither dismisses the finding nor claims that incomplete recovery within observation establishes permanent damage.",
          "correct": true
        }
      ],
      "result": {
        "claim": "Corneal findings partly regressed after dose modification, while opacity remained incompletely reversible within the observed recovery period.",
        "support": "The treatment changes and subsequent observations show both improvement and residual findings.",
        "uncertainty": "The study does not establish complete later recovery, permanent injury in every animal or the eventual human monitoring plan.",
        "next": "Carry the bounded recovery claim into human-relevance assessment and the judgment of what evidence supports the proposed trial."
      }
    },
    "boundary": {
      "required": "Provide an integrated toxicology summary and information adequate to support the safety of the proposed investigation, with further safety information as development proceeds.",
      "recommended": "ICH S7A recommends safety-pharmacology studies informed by intended use, relevant systems, prior findings, timing, sensitivity and appropriate controls.",
      "judgment": "Integrate severity, exposure, recovery and human relevance. Make consequential uncertainty visible rather than treating individual findings as automatic passes or failures.",
      "source": {
        "label": "21 CFR 312.23(a)(8) · Toxicology information",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23"
      },
      "recommendationSource": {
        "label": "ICH S7A · Safety pharmacology, PDF 5–7",
        "url": "https://www.fda.gov/media/72033/download#page=5"
      }
    },
    "handoff": {
      "id": "nonclinical-package",
      "label": "Build a credible safety package",
      "text": "Ask whether the studies, applicability arguments and records can support this risk account for the proposed investigation."
    }
  },
  "nonclinical-package": {
    "id": "nonclinical-package",
    "title": "Build a credible safety package",
    "question": "Can the available studies and records support this proposed investigation—and what remains conditional?",
    "premise": "A credible package carries applicable evidence forward and explains its limits. Completeness has meaning only in relation to a defined clinical investigation.",
    "inherited": "Benefit rationale, exposure comparisons, interpreted hazards, prior-product experience, study designs and available reports.",
    "context": "The proposed product, route, population, regimen, duration and next clinical step.",
    "nodes": [
      {
        "id": "define-investigation",
        "label": "Define the investigation",
        "question": "What exactly does this evidence package need to support now?",
        "principle": "Adequacy is relative to a proposed investigation, not an abstract endpoint called ‘complete.’",
        "body": "State the product, route, population, dose pattern and duration before evaluating the studies. Evidence supporting a short investigation may leave work for extended treatment or a changed product. Keep the next expansion visible without making it today’s claim.",
        "visual": {
          "type": "matrix",
          "items": [
            {
              "label": "Product and route",
              "text": "What will people receive, and where will exposure occur?",
              "status": "open"
            },
            {
              "label": "Population and regimen",
              "text": "Who receives it, how often and for how long?",
              "status": "open"
            },
            {
              "label": "Current investigation",
              "text": "Which concrete clinical step must the package support?",
              "status": "open"
            },
            {
              "label": "Future expansion",
              "text": "Which later change would require reassessment?",
              "status": "open"
            }
          ]
        },
        "decision": "Write a proposed-use statement against which every claim of study adequacy can be assessed."
      },
      {
        "id": "applicable-evidence",
        "label": "Test evidence applicability",
        "question": "Which existing conclusions carry forward, and which need a bridge?",
        "principle": "Reuse is strongest when its applicability is explained rather than assumed.",
        "body": "Compare the tested product, route, species and exposure with the proposed investigation. Preserve prior evidence that answers the question. A different formulation or exposure site may require a bridge, narrower claim, changed product or new evidence.",
        "visual": {
          "type": "bridge",
          "items": [
            {
              "label": "Existing conclusion",
              "text": "What did the prior evidence establish in its original setting?",
              "status": "supported"
            },
            {
              "label": "Relevant difference",
              "text": "Identify what changed and why that difference could matter.",
              "status": "open"
            },
            {
              "label": "Proposed reliance",
              "text": "Explain which part of the earlier conclusion still supports this investigation.",
              "status": "inferred"
            }
          ]
        },
        "decision": "Use existing evidence where it applies and address the specific difference that limits further reliance."
      },
      {
        "id": "study-credibility",
        "label": "Examine study credibility",
        "question": "Can the study design and available records carry the intended conclusion?",
        "principle": "A study title or compliance label cannot substitute for an informative design and reviewable evidence.",
        "body": "Check exposure, timing, relevant endpoints, controls and the records supporting interpretation. Distinguish useful incomplete evidence from an unsupported conclusion. Planned work, an accepted design and a completed adequate report are different states.",
        "visual": {
          "type": "chain",
          "items": [
            {
              "label": "Informative design",
              "text": "Does the experiment address the biological question at the relevant time and exposure?",
              "status": "open"
            },
            {
              "label": "Reviewable records",
              "text": "Can the observations, methods and limitations be examined?",
              "status": "open"
            },
            {
              "label": "Supported conclusion",
              "text": "The strength of the claim must fit both design and available evidence.",
              "status": "inferred"
            }
          ]
        },
        "decision": "Match the intended conclusion to what the study actually tested and what its records can substantiate."
      },
      {
        "id": "stage-remaining-work",
        "label": "Stage remaining work",
        "question": "What supports the next step, what remains conditional, and when must the argument be revisited?",
        "principle": "Work deferred to a later decision is not evidence that the underlying question is unnecessary.",
        "body": "State what supports the proposed investigation and any unresolved conditions. Tie remaining work to the change it must support. A case-specific agreement on reports or timing is not a general waiver, and new findings can reopen earlier conclusions.",
        "visual": {
          "type": "timeline",
          "items": [
            {
              "label": "Current support",
              "text": "Evidence supports a defined investigation within stated limits.",
              "status": "supported"
            },
            {
              "label": "Pending condition",
              "text": "Identify unfinished reports, unresolved relevance or another required decision.",
              "status": "open"
            },
            {
              "label": "Before expansion",
              "text": "Reassess adequacy when the product, population, exposure or duration changes.",
              "status": "open"
            }
          ]
        },
        "decision": "Produce a trial-specific adequacy argument with explicit conditions and the trigger for the next assessment."
      }
    ],
    "cases": [
      {
        "id": "glycopyrrolate-reuse",
        "name": "Glycopyrrolate inhalation",
        "kicker": "Reuse systemic knowledge; address the new route",
        "stage": "Reproduced initial US IND review · Prior approved products and human experience",
        "context": "The inhaled presentation could draw on established systemic safety information, while local respiratory exposure created a product- and route-specific question.",
        "mapFocus": 1,
        "known": "The reviewer considered prior systemic information alongside draft 28-day rat and dog inhalation reports addressing the new route.",
        "supports": "Existing systemic knowledge and local respiratory evidence could contribute different parts of support for the proposed trial.",
        "uncertain": "This case does not establish general acceptance of draft reports or the adequacy of every new formulation of an approved ingredient.",
        "decision": "The reviewer considered the proposed trial reasonably safe to proceed and requested final reports within 120 days.",
        "lesson": "Reuse what remains applicable; explain and address the new question created by the proposed presentation.",
        "sources": [
          {
            "label": "Initial IND cover and assessment · PDF 31, 33",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2017/208437Orig1s000PharmR.pdf#page=31"
          }
        ]
      },
      {
        "id": "suvorexant-relevance",
        "name": "Suvorexant",
        "kicker": "A completed study can still need a bridge",
        "stage": "NDA retrospective account of initial IND advice and later IND development",
        "context": "Initial animal studies supported the first trial, but an excipient present in the animal formulation and absent from the clinical formulation raised a question about relevance.",
        "mapFocus": 1,
        "known": "FDA retained concern that the animal-study excipient could affect the safety profile. Later discussions addressed justification or work using the relevant formulation.",
        "supports": "Initial trial support did not establish unrestricted applicability of the same studies to all later development decisions.",
        "uncertain": "Key formulation and excipient identities are redacted. The public account does not establish a universal requirement to repeat all toxicology.",
        "decision": "The sponsor later chose extensive additional studies rather than the requested justification for reuse; distinguish that choice from FDA’s initial trial assessment.",
        "lesson": "Assess the bridge before deciding whether existing work should be reused, supplemented or replaced.",
        "sources": [
          {
            "label": "Initial and later IND history · PDF 34",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2014/204569Orig1s000PharmR.pdf#page=34"
          }
        ]
      }
    ],
    "exercise": {
      "title": "Reassess a changed proposal",
      "context": "Illustrative continuation of the glycopyrrolate case: the program has prior systemic safety information and local inhalation studies. A team now proposes substantially longer clinical treatment. No additional study results are supplied in this exercise.",
      "claim": "Because the initial trial had adequate support, the same package necessarily supports the longer trial.",
      "prompt": "What is the most useful first update to the adequacy argument?",
      "options": [
        {
          "label": "Confirm that draft reports became final; their final status alone establishes support for the longer treatment.",
          "feedback": "Final reports improve the available record, but report status does not extend what a study tested. Duration and biological relevance still matter.",
          "correct": false
        },
        {
          "label": "Keep applicable prior evidence and identify which duration, exposure and local-safety questions must be reassessed for the longer investigation.",
          "feedback": "Correct. The changed proposal creates a new adequacy question. Reassessment preserves useful evidence while identifying the specific bridge or additional support that may be needed.",
          "correct": true
        },
        {
          "label": "Rely on the approved ingredient’s systemic history to cover the longer inhaled treatment without revisiting local respiratory exposure.",
          "feedback": "Systemic experience remains useful, but it does not automatically answer duration-dependent local effects at a new exposure site.",
          "correct": false
        }
      ],
      "result": {
        "claim": "Adequacy must be reassessed for the longer proposed investigation without discarding applicable prior evidence.",
        "support": "Established systemic information and existing inhalation studies remain inputs with defined conditions and durations.",
        "uncertainty": "The exercise supplies no evidence establishing that the new duration is adequately covered.",
        "next": "Identify the specific duration and exposure questions, then determine whether existing analysis, a justified bridge or additional evidence can address them."
      }
    },
    "boundary": {
      "required": "Provide adequate safety information, integrated summaries and reviewable supporting data; for each study subject to GLP, state compliance or explain noncompliance.",
      "recommended": "ICH M3(R2) links nonclinical scope and timing to the proposed clinical development, with context-dependent approaches and exceptions.",
      "judgment": "Explain applicability, design adequacy and consequential gaps. A longer study list does not substitute for support of the actual proposed investigation.",
      "source": {
        "label": "21 CFR 312.23(a)(8) · Study information and GLP statements",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23"
      },
      "recommendationSource": {
        "label": "ICH M3(R2) · Nonclinical scope and timing",
        "url": "https://www.fda.gov/media/71542/download"
      }
    },
    "handoff": {
      "id": "clinical",
      "label": "The first clinical study",
      "text": "Translate the supported scope, unresolved risks and conditions into a concrete clinical investigation; revisit the package when that proposal changes."
    }
  },
  "cmc-material": {
    "id": "cmc-material",
    "title": "Define the drug people will receive",
    "question": "Does the evidence describe the preparation people will actually receive?",
    "premise": "A drug name does not establish that the material tested before has the same relevant properties as the preparation proposed now.",
    "inherited": "You have a candidate and supporting evidence. Their relevance depends on which material was studied.",
    "context": "Define the product for this study, including preparation and delivery.",
    "nodes": [
      {
        "id": "supplied-to-administered",
        "label": "Define the preparation",
        "question": "What is supplied, and what reaches the participant?",
        "principle": "The administered preparation connects chemistry, formulation and delivery.",
        "body": "Describe substance form, composition, strength, route and presentation. Include preparation steps that could change what is delivered. Keep unknown composition explicit.",
        "visual": {
          "type": "chain",
          "items": [
            {
              "label": "Drug substance",
              "text": "Identity and chemical form",
              "status": "inferred"
            },
            {
              "label": "Drug product",
              "text": "Composition, strength and presentation",
              "status": "inferred"
            },
            {
              "label": "Administration",
              "text": "Preparation, route and delivery",
              "status": "inferred"
            }
          ]
        },
        "decision": "Write one product definition tied to the proposed study."
      },
      {
        "id": "compare-materials",
        "label": "Locate the differences",
        "question": "How does this preparation differ from the material supporting the evidence?",
        "principle": "Borrowed evidence needs an explicit material comparison.",
        "body": "Compare clinical material with toxicology material, earlier clinical material or a reference product. A shared active ingredient does not answer every formulation or delivery question.",
        "visual": {
          "type": "contrast",
          "items": [
            {
              "label": "Evidence material",
              "text": "What was tested, and under which conditions?",
              "status": "supported"
            },
            {
              "label": "Proposed material",
              "text": "What changes in form, vehicle, route or presentation?",
              "status": "open"
            },
            {
              "label": "Potential consequence",
              "text": "Could exposure, local contact or delivered dose change?",
              "status": "inferred"
            }
          ]
        },
        "decision": "Identify each difference that could alter the meaning of the evidence."
      },
      {
        "id": "bridge-consequence",
        "label": "Bridge the consequence",
        "question": "Which comparison would resolve the consequential difference?",
        "principle": "A bridge tests the implication of a change.",
        "body": "Choose evidence suited to the uncertainty: exposure, local compatibility or physical delivery. Comparable systemic exposure answers a narrower question than complete product equivalence.",
        "visual": {
          "type": "bridge",
          "items": [
            {
              "label": "Difference",
              "text": "A material or presentation changes",
              "status": "supported"
            },
            {
              "label": "Consequence",
              "text": "A relevant exposure or performance may change",
              "status": "open"
            },
            {
              "label": "Bridge evidence",
              "text": "Measure the consequence the argument depends on",
              "status": "inferred"
            },
            {
              "label": "Supported scope",
              "text": "State which uncertainty the comparison resolves",
              "status": "inferred"
            }
          ]
        },
        "decision": "Select evidence that can support or challenge the proposed bridge."
      },
      {
        "id": "bound-material-claim",
        "label": "Bound the claim",
        "question": "What may be carried forward, and what remains unresolved?",
        "principle": "An acceptable bridge has a stated scope.",
        "body": "Separate support for this study from support for later formulations, populations or commercial material. Record changes that would reopen the comparison.",
        "visual": {
          "type": "matrix",
          "items": [
            {
              "label": "Carry forward",
              "text": "Evidence applicable to the defined preparation",
              "status": "supported"
            },
            {
              "label": "Keep open",
              "text": "Attributes or uses the comparison did not establish",
              "status": "open"
            },
            {
              "label": "Revisit after change",
              "text": "A new form, route, formulation or device may break the bridge",
              "status": "inferred"
            }
          ]
        },
        "decision": "State the material claim, its limits and the next change that requires reassessment."
      }
    ],
    "cases": [
      {
        "id": "ivacaftor-material",
        "name": "Ivacaftor",
        "kicker": "An exposure comparison with a limited claim",
        "stage": "Initial IND 74633 review, reproduced in the 2012 NDA",
        "context": "Dog PK compared clinical-associated and nonclinical-associated materials using different stated vehicles. Important material identifiers are redacted.",
        "mapFocus": 2,
        "known": "The review reports comparable dog PK for materials in PEG/PVP/KOAc and SLS/methylcellulose/water vehicles.",
        "supports": "The comparison supports interpreting systemic exposure across the materials discussed.",
        "uncertain": "Redacted identifiers prevent reconstruction of the full formulations. Local tolerability and final commercial-product equivalence are not established here.",
        "decision": "Use this as evidence for a specific exposure bridge, with the material and attribute limits visible.",
        "lesson": "Different preparations can be connected by relevant evidence without claiming they are identical.",
        "sources": [
          {
            "label": "Original IND comparison · PDF 90",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000PharmR.pdf#page=90"
          }
        ]
      },
      {
        "id": "atrovent-material",
        "name": "Atrovent HFA",
        "kicker": "A valve change reopens the comparison",
        "stage": "Later IND development after Phase 3; described in the 2004 NDA",
        "context": "The proposed inhaler used a third-generation valve after the Phase 3 program had finished.",
        "mapFocus": 1,
        "known": "FDA requested further delivery information, particle-size distribution and plume geometry; additional PK and dose-ranging studies were agreed.",
        "supports": "The device presentation belonged in the bridge between trial evidence and the proposed product.",
        "uncertain": "The public history does not provide full valve specifications. The separate initial IND hold concerned missing Phase 1 data.",
        "decision": "Assess the changed delivery attributes and clinical relevance before carrying earlier inhaler evidence forward.",
        "lesson": "The active ingredient can stay the same while the evidence needed for the product changes.",
        "sources": [
          {
            "label": "Development history · PDF 38–39",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2004/021527s000_MedR.pdf#page=38"
          }
        ]
      }
    ],
    "exercise": {
      "title": "A familiar drug, a new presentation",
      "context": "Hypothetical: a team changes the delivery device after completing studies. The active ingredient and nominal strength remain unchanged, but delivered-dose performance has not been compared.",
      "claim": "The earlier evidence fully supports the new presentation because the active ingredient and strength are unchanged.",
      "prompt": "Which response best repairs the argument?",
      "options": [
        {
          "label": "Carry the evidence forward without further comparison.",
          "feedback": "The unchanged ingredient and nominal strength do not establish how the new device delivers the preparation.",
          "correct": false
        },
        {
          "label": "Compare delivery attributes, then choose evidence for consequential differences.",
          "feedback": "This connects the changed presentation to its possible effect and selects a bridge proportionate to the unresolved question.",
          "correct": true
        },
        {
          "label": "Repeat every earlier study before examining the change.",
          "feedback": "A complete repetition is not justified merely by a change. First establish which attributes and conclusions may be affected.",
          "correct": false
        }
      ],
      "result": {
        "claim": "Earlier evidence may support the new presentation if consequential delivery differences are adequately bridged.",
        "support": "The ingredient and nominal strength match; the delivery comparison is still needed.",
        "uncertainty": "The new device may alter the delivered preparation or dose.",
        "next": "Compare performance and choose additional evidence for any consequential difference."
      }
    },
    "boundary": {
      "required": "IND CMC information must support identity, strength, quality and purity at the proposed stage.",
      "recommended": "FDA recommends explaining differences between clinical and toxicology products and their possible safety implications.",
      "judgment": "Choose the comparison that resolves the relevant consequence; a formulation difference does not automatically require repeating every study.",
      "source": {
        "label": "21 CFR 312.23(a)(7) · CMC information",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23"
      },
      "recommendationSource": {
        "label": "FDA Phase 1 IND guidance · PDF 6–7; cites 21 CFR 312.23(a)(7)",
        "url": "https://www.fda.gov/media/71203/download#page=6"
      }
    },
    "handoff": {
      "id": "cmc-controls",
      "label": "Make this material consistently",
      "text": "Carry the product definition and material bridge into tests, limits and controls that support consistent clinical supply."
    }
  },
  "cmc-controls": {
    "id": "cmc-controls",
    "title": "Make and control consistent material",
    "question": "Can the process and controls reliably produce material whose relevant properties are understood?",
    "premise": "A test result supports release only when the method, acceptance rule and manufacturing knowledge address the properties that matter for use.",
    "inherited": "The clinical preparation is defined, and differences from supporting materials have a stated bridge.",
    "context": "Turn product and process knowledge into a defensible decision about each clinical batch.",
    "nodes": [
      {
        "id": "trace-variation",
        "label": "Trace possible variation",
        "question": "What could change between batches, and why would it matter?",
        "principle": "Controls begin with a plausible source of consequential variation.",
        "body": "Consider materials, process steps and resulting attributes. Connect impurities or performance changes to exposure and use. Distinguish an identified hazard from an unresolved signal.",
        "visual": {
          "type": "chain",
          "items": [
            {
              "label": "Source of variation",
              "text": "Material, process step or equipment",
              "status": "inferred"
            },
            {
              "label": "Product attribute",
              "text": "Impurity, strength or release performance",
              "status": "inferred"
            },
            {
              "label": "Consequence",
              "text": "Potential effect on clinical exposure or safety",
              "status": "open"
            }
          ]
        },
        "decision": "Name the variation to prevent, detect or qualify."
      },
      {
        "id": "give-tests-jobs",
        "label": "Give tests jobs",
        "question": "What decision is each test intended to support?",
        "principle": "A useful method must distinguish what the decision depends on.",
        "body": "Separate development experiments, patient-acceptability assessments and routine release tests. Show that the chosen method can detect a meaningful difference before interpreting a passing result.",
        "visual": {
          "type": "matrix",
          "items": [
            {
              "label": "Development",
              "text": "Understand how formulation or process affects performance",
              "status": "inferred"
            },
            {
              "label": "Release",
              "text": "Decide whether this batch meets justified criteria",
              "status": "inferred"
            },
            {
              "label": "Patient experience",
              "text": "Assess an acceptability claim with relevant evidence",
              "status": "inferred"
            }
          ]
        },
        "decision": "Keep tests with a defined purpose and evidence that they can perform it."
      },
      {
        "id": "justify-acceptance",
        "label": "Justify the limit",
        "question": "Why is the proposed acceptance rule appropriate for this use?",
        "principle": "Limits connect measured attributes with a safety or performance basis.",
        "body": "Distinguish observed batch values from permitted limits. Consider dose, route and duration when interpreting impurity exposure. A favorable result cannot repair a method that misses the relevant change.",
        "visual": {
          "type": "bridge",
          "items": [
            {
              "label": "Measured attribute",
              "text": "A result from a suitable method",
              "status": "supported"
            },
            {
              "label": "Use conditions",
              "text": "Dose, route and duration",
              "status": "supported"
            },
            {
              "label": "Acceptance basis",
              "text": "Evidence supporting the permitted range",
              "status": "open"
            }
          ]
        },
        "decision": "Explain what supports the limit and what further evidence or tighter control is needed."
      },
      {
        "id": "respond-to-change",
        "label": "Respond to change",
        "question": "What happens when results or manufacturing changes challenge the control strategy?",
        "principle": "A control strategy includes investigation and reassessment.",
        "body": "Investigate failures and unexpected trends. Compare changed material with the evidence supporting use. Revise the method, process, limit or qualification argument when its basis no longer holds.",
        "visual": {
          "type": "timeline",
          "items": [
            {
              "label": "Signal",
              "text": "Failure, trend or planned manufacturing change",
              "status": "challenged"
            },
            {
              "label": "Investigation",
              "text": "Distinguish plausible causes with evidence",
              "status": "open"
            },
            {
              "label": "Response",
              "text": "Correct the cause and reassess affected claims",
              "status": "inferred"
            },
            {
              "label": "Continuity",
              "text": "Document which evidence still applies",
              "status": "inferred"
            }
          ]
        },
        "decision": "Define the action that follows a failed rule or a consequential change."
      }
    ],
    "cases": [
      {
        "id": "vamorolone-controls",
        "name": "Vamorolone",
        "kicker": "An impurity signal changes initial permission",
        "stage": "Initial IND 118942, 2014–2015; described in the 2023 NDA",
        "context": "The initial submission contained two drug-substance impurities with structural alerts for genotoxicity.",
        "mapFocus": 0,
        "known": "FDA placed the IND on partial clinical hold in January 2015. Completed genotoxicity studies were submitted, and the hold was removed in March.",
        "supports": "Uncertainty about impurities can materially affect whether proposed clinical work may proceed.",
        "uncertain": "This history does not disclose impurity identities or test results. Hold removal does not establish that every alert was a false positive.",
        "decision": "Address the impurity uncertainty with relevant evidence; preserve the distinction between a structural alert and an established hazard.",
        "lesson": "The active substance’s evidence does not automatically cover everything present in the batch.",
        "sources": [
          {
            "label": "Initial IND history · PDF 116",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/215239Orig1s000IntegratedR.pdf#page=116"
          }
        ]
      },
      {
        "id": "acer-controls",
        "name": "ACER-001",
        "kicker": "A test needs the right job",
        "stage": "Later IND 143822: April 2021 pre-NDA meeting",
        "context": "The sponsor proposed taste-mask coating testing alongside dissolution controls for sodium phenylbutyrate.",
        "mapFocus": 1,
        "known": "FDA requested discriminating dissolution methods and multi-timepoint data. It clarified that exploratory taste-coating integrity testing was not required routine QC.",
        "supports": "Development understanding, taste acceptability and batch release were separate questions requiring appropriate evidence.",
        "uncertain": "Final specifications remained an NDA review issue. Coating details are partly redacted.",
        "decision": "Establish adequate coating controls and a discriminating dissolution method; use patient-relevant evidence for taste-specific acceptability claims.",
        "lesson": "More tests do not improve control unless they answer a useful question.",
        "sources": [
          {
            "label": "Pre-NDA discussion · PDF 7–8",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/214860Orig1s000AdminCorres.pdf#page=7"
          }
        ]
      }
    ],
    "exercise": {
      "title": "A passing result that cannot discriminate",
      "context": "Hypothetical: a candidate dissolution method gives the same result for batches independently shown to release drug differently. The team proposes the method for batch release.",
      "claim": "All batches pass, so the method establishes consistent release performance.",
      "prompt": "What is the strongest next decision?",
      "options": [
        {
          "label": "Accept the method because every tested batch passes.",
          "feedback": "A passing result is uninformative when the method cannot reveal a difference relevant to the intended release decision.",
          "correct": false
        },
        {
          "label": "Tighten the numerical limit without changing the method.",
          "feedback": "A narrower rule does not make an insensitive measurement distinguish relevant differences.",
          "correct": false
        },
        {
          "label": "Establish a method that detects relevant release differences, then justify its acceptance rule.",
          "feedback": "Method capability comes before interpreting compliance. Development comparisons should show that the test can support the proposed batch decision.",
          "correct": true
        }
      ],
      "result": {
        "claim": "The current method does not establish consistent release performance.",
        "support": "Independent evidence shows differences that the candidate method does not detect.",
        "uncertainty": "A suitable method and justified acceptance rule remain to be established.",
        "next": "Evaluate discriminating methods using relevant batch differences, then define the release criterion."
      }
    },
    "boundary": {
      "required": "Most Phase 1 investigational drugs remain subject to statutory CGMP despite their Part 211 exemption; scope exclusions apply.",
      "recommended": "FDA recommends appropriate QC responsibilities and reliable laboratory testing for Phase 1 material.",
      "judgment": "Choose controls proportionate to the product and study; neither an uncontrolled process nor a universal commercial validation package follows from phase-appropriate quality.",
      "source": {
        "label": "21 CFR 210.2(c) · Phase 1 scope",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-210/section-210.2"
      },
      "recommendationSource": {
        "label": "FDA Phase 1 CGMP guidance · PDF 4, 7, 10, 13",
        "url": "https://www.fda.gov/media/70975/download#page=4"
      }
    },
    "handoff": {
      "id": "cmc-stability",
      "label": "Preserve suitable material",
      "text": "Carry the justified attributes and limits into storage, preparation and delivery, where time and handling may change the product."
    }
  },
  "cmc-stability": {
    "id": "cmc-stability",
    "title": "Keep the product suitable through dosing",
    "question": "Does the quality evidence cover the product’s entire journey to administration?",
    "premise": "Suitability at release does not establish suitability after storage, preparation or delivery. Each transition can change the material or the evidence that applies.",
    "inherited": "The product has a defined identity and justified controls for clinical supply.",
    "context": "Follow the preparation from manufacture through the last administration supported by the evidence.",
    "nodes": [
      {
        "id": "map-use-journey",
        "label": "Map the journey",
        "question": "Which conditions and times must the evidence cover?",
        "principle": "A stability claim names its material, conditions and duration.",
        "body": "Trace storage, shipping, preparation, waiting and delivery. Distinguish unopened shelf life from the period after dilution or transfer. Use the actual proposed clinical procedure.",
        "visual": {
          "type": "timeline",
          "items": [
            {
              "label": "Supply",
              "text": "Container, storage and shipment",
              "status": "inferred"
            },
            {
              "label": "Preparation",
              "text": "Thaw, dilute or transfer as applicable",
              "status": "inferred"
            },
            {
              "label": "In use",
              "text": "Waiting conditions and duration",
              "status": "inferred"
            },
            {
              "label": "Administration",
              "text": "Material delivered through the intended system",
              "status": "inferred"
            }
          ]
        },
        "decision": "Specify the supported conditions and duration for each segment."
      },
      {
        "id": "identify-time-failures",
        "label": "Look beyond assay",
        "question": "What could make the product unsuitable even if its active content remains acceptable?",
        "principle": "Stability includes chemical, physical, microbial and delivery performance.",
        "body": "Select relevant failure modes for this product. A container may contribute particles; dilution may cause aggregation; a device may alter delivery. Test the property whose change would matter.",
        "visual": {
          "type": "matrix",
          "items": [
            {
              "label": "Chemical",
              "text": "Active loss or increasing degradants",
              "status": "open"
            },
            {
              "label": "Physical",
              "text": "Particles, precipitation or aggregation",
              "status": "open"
            },
            {
              "label": "Microbial",
              "text": "Protection through the proposed storage and use",
              "status": "open"
            },
            {
              "label": "Delivery",
              "text": "Dose or performance after handling",
              "status": "open"
            }
          ]
        },
        "decision": "Match each plausible failure to evidence collected under relevant conditions."
      },
      {
        "id": "convert-to-instructions",
        "label": "Set usable boundaries",
        "question": "What instructions follow, and what would invalidate them?",
        "principle": "Instructions should preserve the conditions demonstrated by evidence.",
        "body": "Translate findings into storage, preparation, in-use duration and delivery instructions. A new diluent, container or procedure can reopen the claim. Preserve uncertainty about causes that remain unresolved.",
        "visual": {
          "type": "bridge",
          "items": [
            {
              "label": "Evidence",
              "text": "Performance under tested conditions",
              "status": "supported"
            },
            {
              "label": "Instruction",
              "text": "Use conditions the evidence supports",
              "status": "inferred"
            },
            {
              "label": "Change trigger",
              "text": "A different container, diluent or delivery procedure",
              "status": "challenged"
            }
          ]
        },
        "decision": "State the supported procedure and when reassessment is required."
      }
    ],
    "cases": [
      {
        "id": "lenacapavir-stability",
        "name": "Lenacapavir",
        "kicker": "The container becomes an exposure",
        "stage": "Later IND full holds in December 2021; subsequent NDA resubmission review",
        "context": "Borosilicate vials showed incompatibility with lenacapavir injection, surface degradation and glass particles.",
        "mapFocus": 1,
        "known": "FDA lacked information to assess injection risk and possible particulate contribution to persistent local reactions. Later review addressed alternative packaging, light protection and in-use stability.",
        "supports": "Container compatibility and preparation conditions belonged in the safety and stability assessment.",
        "uncertain": "Glass particles were a possible contributor to local reactions, not an established cause of every reaction.",
        "decision": "Investigate the particle exposure and support the proposed presentation through expiry and preparation; do not assume a container substitution alone resolves every concern.",
        "lesson": "The package can change what is administered, even when the active ingredient is unchanged.",
        "sources": [
          {
            "label": "Later IND holds · PDF 318–319",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/215973%2C215974Orig1s000IntegratedR.pdf#page=318"
          },
          {
            "label": "Resubmission storage and in-use assessment · PDF 83",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/215973%2C215974Orig1s000IntegratedR.pdf#page=83"
          }
        ]
      },
      {
        "id": "cytalux-stability",
        "name": "Cytalux",
        "kicker": "Dilution changes the physical preparation",
        "stage": "2021 NDA quality review describing IND experience; initial IND timing not established",
        "context": "Pafolacianine prepared with saline was associated with hypersensitivity reactions in IND participants.",
        "mapFocus": 2,
        "known": "The investigation identified aggregation as the most likely explanation. The reviewed instructions specified 5% dextrose only, with supported storage and preparation conditions.",
        "supports": "Diluent compatibility can determine whether an administration procedure is supported.",
        "uncertain": "The causal explanation remains qualified. The NDA review does not disclose the original IND stability package.",
        "decision": "Use the supported diluent and preparation conditions. Treat a proposed substitution as a new compatibility question.",
        "lesson": "A preparation instruction is part of the quality argument, not an incidental detail.",
        "sources": [
          {
            "label": "Diluent investigation and instructions · PDF 6, 12",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2021/214907Orig1s000ChemR.pdf#page=6"
          }
        ]
      }
    ],
    "exercise": {
      "title": "A convenient diluent substitution",
      "context": "Hypothetical: stability evidence supports a product in its vial and after dilution with one specified diluent. A clinical site proposes another diluent. Compatibility after substitution has not been evaluated.",
      "claim": "The substitute is acceptable because the undiluted vial remains stable.",
      "prompt": "Which decision follows from the available evidence?",
      "options": [
        {
          "label": "Use the substitute because the vial passed stability testing.",
          "feedback": "Vial stability does not establish compatibility after a different dilution step. The material and conditions have changed.",
          "correct": false
        },
        {
          "label": "Keep the supported preparation while evaluating compatibility of the proposed substitute.",
          "feedback": "This preserves the demonstrated procedure and identifies the evidence needed before extending the claim to different preparation conditions.",
          "correct": true
        },
        {
          "label": "Extend unopened-vial storage testing to establish the substitute’s compatibility.",
          "feedback": "More time in the original container does not test the transformation introduced by the new diluent.",
          "correct": false
        }
      ],
      "result": {
        "claim": "The existing evidence supports the specified preparation, not the proposed diluent substitution.",
        "support": "The tested vial and specified diluted preparation remained suitable under their assessed conditions.",
        "uncertainty": "The substitute may change physical, chemical or other relevant properties.",
        "next": "Evaluate the alternative preparation before revising administration instructions."
      }
    },
    "boundary": {
      "required": "IND stability information must support the planned studies; the needed extent depends on the product and investigation.",
      "recommended": "FDA recommends representative Phase 1 stability work covering manufacture through last administration and protective storage, handling and shipping.",
      "judgment": "Choose relevant conditions and failure modes. A commercial registration stability package is not a universal initial IND requirement.",
      "source": {
        "label": "21 CFR 312.23(a)(7) · CMC information",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23"
      },
      "recommendationSource": {
        "label": "FDA Phase 1 CGMP guidance · PDF 13–14; cites 21 CFR 312.23(a)(7)",
        "url": "https://www.fda.gov/media/70975/download#page=13"
      }
    },
    "handoff": {
      "id": "clinical-dose",
      "label": "Make dosing operational",
      "text": "Carry the supported strength, preparation, delivery conditions and use period into the clinical dosing plan."
    }
  },
  "clinical": {
    "id": "clinical",
    "title": "Design the first clinical study",
    "question": "What can this study teach us, in whom, and under what protections?",
    "premise": "A promising candidate needs a bounded human investigation with a clear question, interpretable measurements, and instructions for responding to risk.",
    "inherited": "Candidate pharmacology, exposure predictions, safety findings, and available human experience inform the study.",
    "context": "The first study under a US IND is not always the first human exposure.",
    "nodes": [
      {
        "id": "choose-question",
        "label": "Choose the question",
        "question": "What should we know after this study that we do not know now?",
        "principle": "Match the study's claim to the evidence its design can generate.",
        "body": "An early study may characterize safety, human exposure, or biological response. Establishing clinical benefit usually requires a different comparison, duration, and scale. Define the intended conclusion before choosing measurements.",
        "visual": {
          "type": "contrast",
          "items": [
            {
              "label": "Early learning",
              "text": "Characterize human exposure, tolerability, and biological response.",
              "status": "supported"
            },
            {
              "label": "Definitive efficacy",
              "text": "Determine whether treatment produces a clinically meaningful benefit using an appropriate comparison.",
              "status": "open"
            },
            {
              "label": "Unsupported leap",
              "text": "A study may proceed, therefore its design will prove efficacy.",
              "status": "challenged"
            }
          ]
        },
        "decision": "State one primary learning objective and the conclusions this design will not establish."
      },
      {
        "id": "define-participants",
        "label": "Define the participants",
        "question": "Who can appropriately enter this investigation?",
        "principle": "Participant selection joins the biological question to the study's benefit-risk context.",
        "body": "Choose healthy volunteers or patients based on the intervention and question. Specify relevant disease features, prior treatment, and safety exclusions. A later population or longer exposure may need additional support.",
        "visual": {
          "type": "matrix",
          "items": [
            {
              "label": "Biological fit",
              "text": "Does this population let us investigate the intended drug action?",
              "status": "open"
            },
            {
              "label": "Clinical context",
              "text": "How do disease severity, existing treatments, and potential benefit affect acceptable risk?",
              "status": "open"
            },
            {
              "label": "Individual protection",
              "text": "Which findings or circumstances should exclude someone or require additional precautions?",
              "status": "open"
            }
          ]
        },
        "decision": "Define an eligible population and explain the scientific or safety reason for each important restriction."
      },
      {
        "id": "make-results-interpretable",
        "label": "Make results interpretable",
        "question": "Will the observations distinguish the drug's effect from other explanations?",
        "principle": "A measurement becomes useful when its timing and comparison support an interpretation.",
        "body": "Connect dose and sampling times to the expected exposure and response. Consider prior-treatment effects, baseline variation, controls, and assessment duration. A biomarker change may answer a pharmacology question without establishing patient benefit.",
        "visual": {
          "type": "chain",
          "items": [
            {
              "label": "Observation",
              "text": "Measure exposure, biological response, or a clinical outcome at defined times.",
              "status": "supported"
            },
            {
              "label": "Interpretation",
              "text": "Check whether the design separates treatment effects from competing explanations.",
              "status": "inferred"
            },
            {
              "label": "Next decision",
              "text": "Identify which result would change the next study or dose strategy.",
              "status": "open"
            }
          ]
        },
        "decision": "Retain measurements that answer the study question or change a safety or development decision."
      },
      {
        "id": "define-actions",
        "label": "Define action rules",
        "question": "What finding changes what happens next?",
        "principle": "Translate foreseeable risks into observations, review responsibilities, and actions.",
        "body": "Specify what to monitor and when, who reviews the findings, and when dosing or enrollment pauses. Distinguish an individual interruption from a cohort or study pause. Monitoring does not guarantee that every injury is preventable.",
        "visual": {
          "type": "timeline",
          "items": [
            {
              "label": "Before dosing",
              "text": "Confirm eligibility, baseline findings, and required precautions.",
              "status": "supported"
            },
            {
              "label": "After dosing",
              "text": "Collect the observations needed to detect and interpret emerging risk.",
              "status": "open"
            },
            {
              "label": "Before proceeding",
              "text": "Apply prespecified review and action rules to continue, modify, or pause.",
              "status": "inferred"
            }
          ]
        },
        "decision": "Write an operating plan that investigators can implement consistently, including the information required before escalation."
      }
    ],
    "cases": [
      {
        "id": "oteseconazole-first-study",
        "name": "Oteseconazole",
        "kicker": "A bounded first question",
        "stage": "Initial IND, 2011; retrospective NDA history also describes later Phase 2a advice.",
        "context": "An oral antifungal entered an initial randomized, blinded, placebo-controlled single-dose study in healthy adults.",
        "mapFocus": 0,
        "known": "The protocol specified safety, tolerability, and pharmacokinetics as its early human questions.",
        "supports": "The design could characterize single-dose human exposure and tolerability within the studied conditions.",
        "uncertain": "It did not establish clinical benefit. The public history does not reproduce the complete original protocol.",
        "decision": "FDA identified no initial clinical-hold issues. Later, it called a Phase 2a study exploratory and requested stronger statistical testing for definitive conclusions.",
        "lesson": "Choose the question first; an early learning study and a definitive efficacy study need different support.",
        "sources": [
          {
            "label": "FDA regulatory history · PDF127",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2022/215888Orig1s000IntegratedR.pdf#page=127"
          }
        ]
      },
      {
        "id": "levacetylleucine-study-claim",
        "name": "Levacetylleucine",
        "kicker": "Permission and interpretation",
        "stage": "Pre-IND, 2018, and initial IND, 2019; retrospective NDA history. Not a conventional first-ever-human study of an entirely unfamiliar intervention.",
        "context": "An open-label study in Niemann–Pick disease type C followed earlier experience with racemic acetylleucine.",
        "mapFocus": 2,
        "known": "FDA considered an open-label design potentially useful for proof of concept, but inadequate for interpretable marketing-application efficacy evidence.",
        "supports": "A limited exploratory investigation could provide short-term safety information and inform further study design.",
        "uncertain": "Without an adequate comparison, observed changes could not reliably establish treatment benefit. Several details in the public history are redacted.",
        "decision": "The sponsor acknowledged the exploratory purpose, removed an extension, and limited the study to six weeks. FDA issued a may-proceed letter and recommended further design discussion.",
        "lesson": "Permission to conduct a study does not establish that its design can prove efficacy.",
        "sources": [
          {
            "label": "FDA initial-IND history · PDF140",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2024/219132Orig1s000IntegratedR.pdf#page=140"
          }
        ]
      }
    ],
    "exercise": {
      "title": "Define what the study can conclude",
      "context": "A team proposes a short, uncontrolled study in patients. It will measure safety, drug exposure, and a disease biomarker. Prior therapy may still influence that biomarker. The supporting package addresses the proposed exposure and known risks.",
      "claim": "If the study can proceed and the biomarker improves, we will have established clinical benefit.",
      "prompt": "Which revision best connects the design to an appropriate conclusion?",
      "options": [
        {
          "label": "Keep the claim because the package supports exposing participants.",
          "feedback": "Support for the proposed exposure does not establish that the study can distinguish treatment benefit from other explanations.",
          "correct": false
        },
        {
          "label": "Define the study as exploratory, address prior-treatment effects, and plan the comparison needed to test benefit.",
          "feedback": "This preserves useful early learning while matching the claim to what the design can establish. The safety plan and the efficacy interpretation remain separate judgments.",
          "correct": true
        },
        {
          "label": "Add more biomarkers and keep the same efficacy claim.",
          "feedback": "More measurements do not remove confounding or provide a missing comparison. Select observations that resolve the question rather than multiplying endpoints.",
          "correct": false
        }
      ],
      "result": {
        "claim": "The study can support exploratory human learning within its stated limits.",
        "support": "Safety, exposure, and biomarker observations answer defined early questions.",
        "uncertainty": "Prior therapy and the missing comparison limit attribution of benefit.",
        "next": "Revise the interpretation plan and define the later study needed to test clinical benefit."
      }
    },
    "boundary": {
      "required": "The IND protocol must describe objectives, participant selection, dose determination, exposure duration, observations, and procedures to minimize risk, with safety-critical details appropriate to the phase.",
      "recommended": "FDA guidance and program-specific advice can inform study design. A historical protocol is not a universal template.",
      "judgment": "The team chooses the learning objective, population, measurements, and action rules, and must explain how they fit the evidence and remaining uncertainty.",
      "source": {
        "label": "21 CFR 312.23(a)(6) · Protocol requirements",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23"
      },
      "recommendationSource": {
        "label": "FDA · Clinical protocols",
        "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-clinical-protocols"
      }
    },
    "handoff": {
      "id": "clinical-dose",
      "label": "Justify the starting dose and escalation",
      "text": "Use the defined population and study conditions to justify the first dose and the evidence needed before going higher."
    }
  },
  "clinical-dose": {
    "id": "clinical-dose",
    "title": "Justify the starting dose and escalation",
    "question": "Why begin at this dose, and what evidence would justify the next step?",
    "premise": "The first dose is a prediction with uncertainty. A reassuring starting margin does not justify every later dose or schedule.",
    "inherited": "Relevant pharmacology, toxicology, exposure measurements, formulation information, and any prior human experience support the dosing rationale.",
    "context": "Healthy volunteers, advanced cancer, local administration, and first dosing in children require different considerations.",
    "nodes": [
      {
        "id": "choose-framework",
        "label": "Choose the framework",
        "question": "Which dose-selection approach fits this population and intervention?",
        "principle": "Select the clinical context before selecting a calculation.",
        "body": "Healthy-volunteer MRSD guidance has a defined scope; it does not determine escalation limits. Advanced-cancer and locally administered products require their own context. Prior human experience may inform a new population without eliminating its uncertainties.",
        "visual": {
          "type": "contrast",
          "items": [
            {
              "label": "Healthy volunteers",
              "text": "Consider the scoped MRSD framework and pharmacological activity.",
              "status": "supported"
            },
            {
              "label": "Advanced cancer",
              "text": "Consider disease severity, available therapy, and relevant oncology guidance.",
              "status": "supported"
            },
            {
              "label": "New population",
              "text": "Ask what prior human experience can support and what does not transfer.",
              "status": "open"
            }
          ]
        },
        "decision": "State the selected framework and explain why it applies to this study."
      },
      {
        "id": "identify-anchor",
        "label": "Identify the anchor",
        "question": "Which biological findings meaningfully constrain human dosing?",
        "principle": "A tested dose, observed effect, and relevant exposure must be interpreted together.",
        "body": "Identify the relevant species or human system, observed toxicity or pharmacological effect, and exposure conditions. A NOAEL describes the study performed; absent findings do not establish that all higher exposures are harmless.",
        "visual": {
          "type": "matrix",
          "items": [
            {
              "label": "Observed finding",
              "text": "What happened at the doses and durations actually tested?",
              "status": "supported"
            },
            {
              "label": "Human relevance",
              "text": "Does the system represent the drug's human pharmacology and possible hazards?",
              "status": "inferred"
            },
            {
              "label": "Evidence limit",
              "text": "Which effects, exposures, or populations remain uncharacterized?",
              "status": "open"
            }
          ]
        },
        "decision": "Identify the reference finding, its exposure basis, and the uncertainty it leaves."
      },
      {
        "id": "predict-first-dose",
        "label": "Predict the start",
        "question": "How does the evidence support the proposed first human exposure?",
        "principle": "A numerical dose proposal needs explicit assumptions about human exposure and response.",
        "body": "Use a justified translation method and account for uncertainty. Compare the predicted exposure with relevant safety and pharmacology findings. An animal-equivalent dose or model output is a prediction, not a measured human result.",
        "visual": {
          "type": "bridge",
          "items": [
            {
              "label": "Measured evidence",
              "text": "Relevant experimental exposure and biological effects.",
              "status": "supported"
            },
            {
              "label": "Translation",
              "text": "Scaling or modeling, species differences, and justified uncertainty allowances.",
              "status": "inferred"
            },
            {
              "label": "Proposed start",
              "text": "A bounded first dose with an expected exposure range to test.",
              "status": "open"
            }
          ]
        },
        "decision": "Document the starting-dose rationale and identify which human observations will test its assumptions."
      },
      {
        "id": "constrain-escalation",
        "label": "Constrain and update",
        "question": "What must be learned before increasing dose or repeating treatment?",
        "principle": "Starting dose, escalation, and the eventual regimen are separate decisions.",
        "body": "Assess the upper-dose and repeat-dose support separately. Use observed human PK, biological response, and safety to update the plan. Specify review conditions and actions when exposure or effects differ from predictions.",
        "visual": {
          "type": "timeline",
          "items": [
            {
              "label": "Begin within bounds",
              "text": "Use the justified starting dose and planned precautions.",
              "status": "supported"
            },
            {
              "label": "Measure and compare",
              "text": "Compare observed exposure and effects with the prediction.",
              "status": "open"
            },
            {
              "label": "Decide the next step",
              "text": "Proceed, modify, or pause using the evidence and specified rules.",
              "status": "inferred"
            }
          ]
        },
        "decision": "Define what supports going higher, what remains unsupported, and what would change the dosing plan."
      }
    ],
    "cases": [
      {
        "id": "ivacaftor-escalation-boundary",
        "name": "Ivacaftor",
        "kicker": "A start is not a ceiling",
        "stage": "Original initial IND review, reproduced in the 2012 NDA package.",
        "context": "Short repeat-dose animal studies supported a proposed first dose, but did not identify target organs to guide monitoring at higher exposure.",
        "mapFocus": 3,
        "known": "The reviewer reported large margins at the proposed 25 mg start, but only about twofold at the proposed 800 mg maximum. Target-organ toxicity remained incompletely characterized.",
        "supports": "The evidence supported a limited initial clinical plan, with separate consideration of the upper dose.",
        "uncertain": "No target organ was identified in the short repeat-dose studies. Absence of findings did not characterize the potential toxicity at higher exposures.",
        "decision": "The reviewer accepted a modified 500 mg maximum and recommended higher-dose nonclinical work to characterize potential target organs. These are historical study-specific numbers.",
        "lesson": "A large starting margin does not establish an unrestricted escalation path.",
        "sources": [
          {
            "label": "FDA original IND assessment · PDF122",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2012/203188Orig1s000PharmR.pdf#page=122"
          },
          {
            "label": "Healthy-volunteer MRSD guidance: scope · PDF4–5",
            "url": "https://www.fda.gov/files/drugs/published/Estimating-the-Maximum-Safe-Starting-Dose-in-Initial-Clinical-Trials-for-Therapeutics-in-Adult-Healthy-Volunteers.pdf#page=4"
          }
        ]
      },
      {
        "id": "risdiplam-infant-dose",
        "name": "Risdiplam",
        "kicker": "Predict, measure, then revise",
        "stage": "First infant dosing during clinical development, after adult exposure; described retrospectively in the NDA review. Not first-ever-human dosing.",
        "context": "In infantile-onset spinal muscular atrophy, the team needed to begin dosing a vulnerable population and learn how measured exposure compared with predictions.",
        "mapFocus": 2,
        "known": "A conservative physiologically based PK prediction and an additional safety factor informed the first infant's single dose. Human PK was then measured.",
        "supports": "The observed single-dose PK informed subsequent repeated dosing and exposure targets linked to expected biological response.",
        "uncertain": "The first observation did not establish long-term safety or clinical benefit. The public account does not reproduce an original FDA approval of the dose calculation.",
        "decision": "After evaluating single-dose PK and tolerability, the team selected repeat dosing. Internal and independent committees reviewed safety, PK, and PD for further dose decisions.",
        "lesson": "Use human observations to test a dose prediction before extending the regimen.",
        "sources": [
          {
            "label": "FDA clinical development context · PDF24",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2020/213535Orig1s000MedR.pdf#page=24"
          },
          {
            "label": "First infant dose and reassessment · PDF73–74",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2020/213535Orig1s000MedR.pdf#page=73"
          }
        ]
      }
    ],
    "exercise": {
      "title": "Separate the starting point from the path",
      "context": "A candidate's short repeat-dose studies found no adverse effects at the highest doses tested. The proposed human starting dose has a reassuring margin. The planned escalation reaches much higher predicted exposures, where the toxicity profile remains uncertain.",
      "claim": "The large starting-dose margin supports the entire escalation plan.",
      "prompt": "Which team decision best reflects the evidence?",
      "options": [
        {
          "label": "Proceed through every planned dose because the animal studies were clean.",
          "feedback": "The studies characterize tested conditions. They do not establish that higher exposure is harmless or identify what would need monitoring there.",
          "correct": false
        },
        {
          "label": "Reject the candidate because no target-organ toxicity was found.",
          "feedback": "An incompletely characterized hazard does not itself require abandoning the molecule. A narrower plan and targeted evidence may address the uncertainty.",
          "correct": false
        },
        {
          "label": "Assess upper-dose support separately, bound escalation, and define the human observations and additional evidence needed to proceed.",
          "feedback": "The starting point can be supported while later steps remain uncertain. Define the permitted path from the actual evidence and revise it as human findings accumulate.",
          "correct": true
        }
      ],
      "result": {
        "claim": "The evidence may support a bounded initial study, not every planned escalation.",
        "support": "The proposed starting exposure has a justified relationship to the available findings.",
        "uncertainty": "Higher-exposure hazards and appropriate monitoring remain incompletely characterized.",
        "next": "Set a supported escalation boundary and specify the evidence needed before extending it."
      }
    },
    "boundary": {
      "required": "The protocol must describe dose determination, planned maximum dosage, exposure duration, and procedures to monitor effects and minimize participant risk.",
      "recommended": "FDA's adult healthy-volunteer MRSD framework primarily addresses systemic starting doses. It does not determine escalation limits or apply unchanged to every patient population.",
      "judgment": "The team selects relevant evidence, translation methods, uncertainty allowances, and escalation conditions appropriate to the intervention and study.",
      "source": {
        "label": "21 CFR 312.23(a)(6) · Dosing and protocol requirements",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23"
      },
      "recommendationSource": {
        "label": "FDA · Starting doses in adult healthy volunteers",
        "url": "https://www.fda.gov/files/drugs/published/Estimating-the-Maximum-Safe-Starting-Dose-in-Initial-Clinical-Trials-for-Therapeutics-in-Adult-Healthy-Volunteers.pdf#page=4"
      }
    },
    "handoff": {
      "id": "pre-ind",
      "label": "Ask a useful pre-IND question",
      "text": "Bring the study, dosing proposal, supporting evidence, and unresolved question together for a focused discussion."
    }
  }
};

for (const [id, guide] of Object.entries(REASONING_GUIDES)) {
 const lesson = CATALOG.levels.find(l => l.id === id);
 if (!lesson) throw new Error('Unknown reasoning chapter: ' + id);
 lesson.reasoningGuide = guide;
 if (guide.title) lesson.title = guide.title;
 lesson.goal = guide.question;
 lesson.takeaway = guide.takeaway || guide.nodes[guide.nodes.length - 1].decision;
 if (guide.format === 'case-tabs') delete lesson.question;
 else lesson.question = {
  title: guide.exercise.title,
  prompt: guide.exercise.context + ' ' + guide.exercise.prompt,
  options: guide.exercise.options.map(o => [o.label, o.feedback, o.correct])
 };
 const cases = guide.readingTopics ? guide.readingTopics.flatMap(t => [...t.cases, ...t.moreCases]) : guide.cases;
 const comparisonSources = guide.workedCase ? [guide.workedCase.discovery.source, ...guide.workedCase.comparison.rows.flatMap(r => [r.paper.source, r.ind.source]), guide.workedCase.assessment.source] : [];
 const sources = [...(guide.format === 'case-tabs' ? [] : lesson.sources), ...cases.flatMap(c => c.sources), ...(guide.workedCase?.sources || []), ...comparisonSources, ...(guide.opening?.sources || []), ...[guide.boundary?.source, guide.boundary?.recommendationSource].filter(Boolean)];
 lesson.sources = sources.filter((s, i) => sources.findIndex(x => x.url === s.url) === i);
}

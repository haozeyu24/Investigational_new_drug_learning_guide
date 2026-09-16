// Small Molecule guide: four connected learning parts.
const CATALOG = {
  "parts": [
    {
      "id": "purpose",
      "title": "The purpose of an IND",
      "description": "Purpose, marketing approval, clinical phases, and the history behind the safeguards.",
      "categories": [
        "start"
      ]
    },
    {
      "id": "discovery",
      "title": "Can we make a good drug candidate?",
      "categories": [
        "discovery"
      ],
      "description": "Target identification and validation, hit identification, hit to lead, and lead optimization."
    },
    {
      "id": "development",
      "title": "Can we build the evidence for human testing?",
      "categories": [
        "candidate",
        "nonclinical",
        "cmc"
      ],
      "description": "Candidate planning, nonclinical evidence, and chemistry, manufacturing & controls."
    },
    {
      "id": "clinical-entry",
      "title": "Can we begin the first human study?",
      "categories": [
        "clinical",
        "ind"
      ],
      "description": "Clinical and regulatory planning, IND submission, and review."
    }
  ],
  "categories": [
    {
      "id": "start",
      "title": "The purpose of an IND",
      "description": "Purpose, marketing approval, clinical phases, and the history behind the safeguards."
    },
    {
      "id": "discovery",
      "title": "Can we make a good drug candidate?",
      "description": "Four short steps from a biological hypothesis to an optimized lead."
    },
    {
      "id": "candidate",
      "title": "From candidate to development plan",
      "description": "What nomination means, what remains unresolved, and how the work fits together."
    },
    {
      "id": "nonclinical",
      "title": "Nonclinical evidence for human testing",
      "description": "Connect pharmacology, exposure, and safety to the proposed study."
    },
    {
      "id": "cmc",
      "title": "Chemistry, manufacturing & controls",
      "description": "Define and control the material that people will receive."
    },
    {
      "id": "clinical",
      "title": "Clinical & regulatory planning",
      "description": "Develop the first-study plan, assign responsibilities, and engage FDA."
    },
    {
      "id": "ind",
      "title": "IND submission & review",
      "description": "Assemble the evidence, navigate review, and prepare to start."
    }
  ],
  "levels": [
    {
      "id": "ind-foundations",
      "category": "start",
      "title": "What an IND Is and Why It Exists",
      "goal": "Explain what an IND supports and why human investigation needs a defined evidence and safety plan.",
      "concept": "An Investigational New Drug (IND) application is a submission to the US Food and Drug Administration (FDA) supporting investigational use of a drug in people. It provides a route to study a drug before marketing approval. FDA reviews the evidence and proposed study to assess whether participants would face unreasonable risks. The application connects nonclinical findings, product quality, and the clinical plan. Its purpose is to make human investigation justified and accountable while important uncertainties remain.",
      "takeaway": "The IND connects the evidence about a drug to a specific plan for studying it in people.",
      "diagram": [
        [
          "Rationale",
          "Why investigate this drug?"
        ],
        [
          "Evidence",
          "What is known about its effects, risks, and quality?"
        ],
        [
          "Study plan",
          "Who receives it, how, and with which safeguards?"
        ]
      ],
      "exampleTitle": "Promising activity is the beginning",
      "example": "A small molecule slows tumor growth in a mouse model, and the team wants to start a first human study. The finding supports further investigation. To support that study, the team brings together evidence about potential harms and exposure, the material people will receive, and the proposed dosing and monitoring plan.",
      "worked": "The IND connects the rationale for testing the drug to the evidence and safeguards for the proposed investigation. A mouse response alone cannot provide that support, and an IND does not establish that the treatment benefits patients.",
      "exampleSteps": [
        [
          "Rationale",
          "Why is this drug worth investigating?"
        ],
        [
          "Evidence",
          "What is known about exposure, potential harms, and product quality?"
        ],
        [
          "Study plan",
          "Who will receive it, under what conditions, and with which safeguards?"
        ]
      ],
      "question": {
        "title": "What is the IND trying to establish?",
        "prompt": "A team has a promising development candidate and is preparing its first IND. What is the central question?",
        "options": [
          [
            "Does the evidence support the proposed human study without exposing participants to unreasonable risks?",
            "Yes. The initial IND connects supporting evidence to a defined investigation and its safeguards.",
            true
          ],
          [
            "Has the drug already been proven effective enough to sell?",
            "That is a marketing-approval question. An IND supports investigation before that later decision.",
            false
          ],
          [
            "Has the team eliminated every possible risk?",
            "All uncertainty cannot be eliminated before clinical research. The study needs adequate evidence, justification, and safeguards.",
            false
          ]
        ],
        "hint": "Distinguish the decision to study a drug from the decision to market it."
      },
      "sources": [
        {
          "label": "FDA: IND purpose and application contents",
          "url": "https://www.fda.gov/drugs/types-applications/investigational-new-drug-ind-application"
        },
        {
          "label": "FDA: the separate marketing application and review",
          "url": "https://www.fda.gov/drugs/information-consumers-and-patients-drugs/fdas-drug-review-process-ensuring-drugs-are-safe-and-effective"
        }
      ],
      "presentation": "purpose"
    },
    {
      "id": "ind-not-approval",
      "category": "start",
      "presentation": "approval",
      "title": "IND Is Not Marketing Approval",
      "goal": "Use two documented development failures to distinguish investigational use from marketing approval.",
      "concept": "An IND supports clinical investigation while benefits and risks are still being learned. For a small molecule, a New Drug Application (NDA) is a separate request for marketing approval. Even a Phase 3 trial that meets its primary endpoint does not guarantee approval: FDA independently evaluates the full evidence for the proposed use, including the reliability of the efficacy findings, safety, and the overall benefit–risk balance. Unresolved issues can require additional analyses or studies before approval.",
      "takeaway": "IND in effect ≠ marketing approval.",
      "terminology": "An IND being “in effect” or a study being “allowed to proceed” does not mean FDA has approved the drug for sale.",
      "clearances": [
        {
          "date": "July 13, 2026",
          "candidate": "ABSK211",
          "sponsor": "Abbisko Therapeutics",
          "mechanism": "Oral pan-KRAS inhibitor",
          "study": "Phase 1 in advanced solid tumors with KRAS alterations; assess safety, tolerability, pharmacokinetics, and activity.",
          "source": {"label": "Sponsor announcement", "url": "https://www.abbisko.com/newsDetail/253.html"}
        },
        {
          "date": "June 22, 2026",
          "candidate": "PTD802",
          "sponsor": "Pheno Therapeutics",
          "mechanism": "GPR17 antagonist developed to promote remyelination",
          "study": "First-in-human US study assessing safety and tolerability in healthy volunteers; the program initially focuses on multiple sclerosis.",
          "source": {"label": "Sponsor announcement via Zyme", "url": "https://www.zymecommunications.com/pheno-therapeutics-granted-fda-ind-clearance-for-lead-multiple-sclerosis-therapeutic-candidate-ptd802/"}
        },
        {
          "date": "March 5, 2026",
          "candidate": "KST-6051",
          "sponsor": "Kestrel Therapeutics",
          "mechanism": "Oral pan-KRAS inhibitor",
          "study": "FALCON Phase 1 dose escalation in advanced or metastatic KRAS-mutant solid tumors; assess safety, tolerability, and preliminary antitumor activity.",
          "source": {"label": "Sponsor announcement (PDF)", "url": "https://kestreltherapeutics.com/wp-content/uploads/2026/03/FDA-Approves-KST-6051.pdf"}
        },
        {
          "date": "October 13, 2025",
          "candidate": "VS-041",
          "sponsor": "Vasa Therapeutics",
          "mechanism": "Oral matrix metalloproteinase inhibitor",
          "study": "Phase 1c in heart failure with preserved ejection fraction and elevated endotrophin; assess safety, tolerability, and biomarkers.",
          "source": {"label": "Sponsor announcement", "url": "https://www.prnewswire.com/news-releases/vasa-therapeutics-receives-fda-ind-clearance-to-advance-novel-small-molecule-vs-041-for-the-treatment-of-heart-failure-with-preserved-ejection-fraction-hfpef-302581657.html"}
        },
        {
          "date": "April 23, 2025",
          "candidate": "VS-7375",
          "sponsor": "Verastem Oncology",
          "mechanism": "Oral KRAS G12D inhibitor targeting ON and OFF states",
          "study": "US Phase 1/2a in advanced KRAS G12D-mutant solid tumors, with expansion cohorts; assess safety and efficacy.",
          "source": {"label": "Sponsor announcement", "url": "https://investor.verastem.com/news-releases/news-release-details/verastem-oncology-announces-us-ind-clearance-vs-7375-oral-kras"}
        },
        {
          "date": "October 24, 2024",
          "candidate": "ATX-559",
          "sponsor": "Accent Therapeutics",
          "mechanism": "Oral DHX9 inhibitor",
          "study": "Phase 1/2 in selected solid tumors, including BRCA1/2-deficient breast cancer and tumors with microsatellite instability or deficient mismatch repair.",
          "source": {"label": "Sponsor announcement", "url": "https://www.prnewswire.com/news-releases/accent-therapeutics-announces-fda-clearance-of-ind-application-for-atx-559-a-first-in-class-oral-dhx9-inhibitor-302285845.html"}
        },
        {
          "date": "June 18, 2024",
          "candidate": "NMD670",
          "sponsor": "NMD Pharma",
          "mechanism": "Skeletal-muscle ClC-1 chloride-channel inhibitor",
          "study": "SYNAPSE-CMT Phase 2 in patients with Charcot–Marie–Tooth disease types 1 and 2.",
          "source": {"label": "Sponsor announcement", "url": "https://www.nmdpharma.com/news/nmd-pharma-receives-ind-clearance-from-the-fda-to-initiate-a-phase-2-clinical-trial-of-nmd670-in-cmt-disease-in-the-us"}
        }
      ],
      "cases": [
        {
          "title": "Xevinapant · Phase 3 stopped in June 2024",
          "intro": "Merck KGaA studied the oral IAP inhibitor xevinapant with chemoradiotherapy for locally advanced head and neck cancer.",
          "result": "The TrilynX trial was discontinued after an interim analysis found it unlikely to meet its primary objective of prolonging event-free survival. The related XRay Vision Phase 3 trial was also stopped. Published results followed in 2025.",
          "meaning": "Reaching Phase 3 did not establish the clinical benefit needed to bring this treatment approach to market.",
          "sources": [
            {
              "label": "Sponsor: xevinapant program update, June 24, 2024",
              "url": "https://www.emdserono.com/us-en/company/news/press-releases/update-on-xevinapant-program-2024-highlights-24-06-2024.html"
            },
            {
              "label": "Published TrilynX Phase 3 results, 2025",
              "url": "https://pubmed.ncbi.nlm.nih.gov/40902136/"
            }
          ]
        },
        {
          "title": "Simufilam · Alzheimer’s program ended in 2025",
          "intro": "Cassava Sciences evaluated simufilam in the Phase 3 RETHINK-ALZ and REFOCUS-ALZ studies for mild-to-moderate Alzheimer’s disease.",
          "result": "RETHINK’s failure was announced in November 2024. REFOCUS results reported in March 2025 also missed the prespecified cognitive and functional endpoints. The company announced that it would end the Alzheimer’s program; the trial results were published in 2026.",
          "meaning": "This is a failure of the Alzheimer’s development program to establish benefit. It does not determine the outcome of studies in other indications.",
          "sources": [
            {
              "label": "Sponsor: REFOCUS-ALZ results, March 25, 2025",
              "url": "https://www.filanatx.com/news-releases/news-release-details/cassava-sciences-reports-topline-phase-3-refocus-alz-data"
            },
            {
              "label": "Published Phase 3 simufilam results, 2026",
              "url": "https://pubmed.ncbi.nlm.nih.gov/41500915/"
            }
          ]
        }
      ],
      "diagram": [
        [
          "IND",
          "Investigate under a supported protocol"
        ],
        [
          "Clinical evidence",
          "Learn whether benefits justify risks"
        ],
        [
          "Marketing review",
          "A separate assessment of an application"
        ]
      ],
      "exampleLabel": "DOCUMENTED CASES",
      "exampleTitle": "Two recent Phase 3 programs did not deliver the expected benefit",
      "example": "These two programs reached Phase 3, but their clinical results did not establish the intended benefit. Compare what was tested, what happened, and what the findings mean for marketing approval.",
      "worked": "An IND allows a supported investigation to take place; the resulting evidence may still fail to justify marketing. These examples concern clinical failures and discontinued programs, rather than FDA rejection of submitted NDAs.",
      "exampleSteps": [
        [
          "Xevinapant · 2024",
          "The Phase 3 study did not establish the intended benefit in head and neck cancer."
        ],
        [
          "Simufilam · 2024–2025",
          "The Alzheimer’s trials did not meet their prespecified cognitive and functional endpoints."
        ],
        [
          "Different decisions",
          "The basis for starting a study is not the evidence needed to market a treatment."
        ]
      ],
      "question": {
        "title": "What did the clinical trials change?",
        "prompt": "A drug is being studied under an IND, but later trials fail to establish the intended clinical benefit. What follows?",
        "options": [
          [
            "The existing IND obliges FDA to approve the drug for sale.",
            "An IND creates no entitlement to marketing approval.",
            false
          ],
          [
            "The later clinical results must inform whether development and marketing can be justified.",
            "Correct. The IND permits investigation; the resulting evidence can show that the drug should not advance.",
            true
          ],
          [
            "Reaching Phase 3 is enough to establish efficacy.",
            "A phase label cannot replace the trial results.",
            false
          ]
        ],
        "hint": "A reason to investigate is different from evidence supporting use as a marketed treatment."
      },
      "sources": [
        {
          "label": "Sponsor: xevinapant program update, June 24, 2024",
          "url": "https://www.emdserono.com/us-en/company/news/press-releases/update-on-xevinapant-program-2024-highlights-24-06-2024.html"
        },
        {
          "label": "Published TrilynX Phase 3 results, 2025",
          "url": "https://pubmed.ncbi.nlm.nih.gov/40902136/"
        },
        {
          "label": "Sponsor: REFOCUS-ALZ results, March 25, 2025",
          "url": "https://www.filanatx.com/news-releases/news-release-details/cassava-sciences-reports-topline-phase-3-refocus-alz-data"
        },
        {
          "label": "Published Phase 3 simufilam results, 2026",
          "url": "https://pubmed.ncbi.nlm.nih.gov/41500915/"
        },
        {
          "label": "FDA: the separate marketing application and review",
          "url": "https://www.fda.gov/patients/drug-development-process/step-4-fda-drug-review"
        }
      ]
    },
    {
      "id": "ind-clinical-phases",
      "category": "start",
      "presentation": "phases",
      "title": "Where IND Fits Across Clinical Trials",
      "goal": "Explain how an IND supports studies across phases and interpret combined or subdivided phase labels.",
      "concept": "For a new, unapproved drug studied in the US, Phases 1, 2, and 3 generally all run under an IND. A sponsor can add later protocols to an existing IND; moving to the next phase does not automatically require a new IND application.",
      "takeaway": "Clinical phases describe study objectives. They are not separate IND types.",
      "indOverview": {
        "coverage": "For a new, unapproved drug studied in the US, Phases 1, 2, and 3 generally all run under an IND. A sponsor can add later protocols to an existing IND; moving to the next phase does not automatically require a new IND application.",
        "coverageSource": {
          "label": "FDA: adding protocols to an IND",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-application-reporting-protocol-amendments"
        },
        "coverageNote": "Each study still needs adequate supporting evidence, appropriate FDA submissions, IRB approval, and applicable safeguards. The original IND is not a blanket authorization for any later trial. Certain studies of already marketed drugs can be IND-exempt; the phase label alone does not determine the requirement.",
        "phases": [
          {
            "id": "phase1",
            "label": "Phase 1",
            "title": "How does the drug behave in people?",
            "body": "Usually emphasizes safety, tolerability, pharmacokinetics, and dose exploration. Participants may be healthy volunteers or patients; oncology studies commonly enroll patients.",
            "example": "For example, measure exposure and adverse effects as doses are explored. Early signs of activity can also be collected.",
            "keep": "Phase 1 is an initial investigation, not a declaration that the drug is safe in every setting.",
            "source": {
              "label": "FDA: clinical trial phases",
              "url": "https://www.fda.gov/patients/drug-development-process/step-3-clinical-research"
            }
          },
          {
            "id": "phase2",
            "label": "Phase 2",
            "title": "Is there evidence of benefit, and which dose or regimen merits further study?",
            "body": "Studies in the intended patient population explore efficacy, dose or regimen choices, and continuing safety questions.",
            "example": "For example, compare candidate doses on a disease-relevant endpoint to inform a later trial.",
            "keep": "An encouraging Phase 2 result can fail to hold up in a larger or longer study.",
            "source": {
              "label": "FDA: clinical trial phases",
              "url": "https://www.fda.gov/patients/drug-development-process/step-3-clinical-research"
            }
          },
          {
            "id": "phase3",
            "label": "Phase 3",
            "title": "Does the broader evidence support the intended clinical benefit?",
            "body": "Usually gathers more extensive efficacy and safety evidence in the intended population, often through larger comparative trials, to inform the benefit–risk assessment and marketing application.",
            "example": "For example, test whether a drug improves a clinically meaningful outcome compared with an appropriate control.",
            "keep": "Even successful Phase 3 results do not guarantee marketing approval. Meeting a trial’s primary endpoint is one part of the evidence; FDA separately reviews the full application and benefit–risk balance for the proposed use.",
            "source": {
              "label": "FDA: purposes of Phase 1, 2, and 3 studies",
              "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/drug-development-and-review-definitions"
            }
          },
          {
            "id": "phase12",
            "label": "Phase 1/2",
            "title": "Why combine phases?",
            "body": "A single protocol can connect early dose and safety work to a subsequent activity assessment. This can reduce delays between separate studies while retaining distinct objectives and criteria for proceeding.",
            "example": "An oncology trial might begin with dose escalation, then open specified patient cohorts to study activity at selected doses. Additional safety and dose optimization may still be needed.",
            "keep": "Combined phases connect questions; they do not remove evidence requirements or safeguards. Later parts depend on the protocol and emerging findings.",
            "source": {
              "label": "FDA: expansion cohorts in early oncology trials",
              "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/expansion-cohorts-use-first-human-clinical-trials-expedite-development-oncology-drugs-and-biologics"
            }
          },
          {
            "id": "phase2ab",
            "label": "Phase 2a / 2b",
            "title": "Why divide Phase 2?",
            "body": "Phase 2a often describes exploratory proof-of-concept work: is there a useful activity or efficacy signal in patients? Phase 2b often emphasizes dose or regimen selection and a more developed efficacy assessment.",
            "example": "A program might first explore activity at a plausible dose, then compare several doses before designing its confirmatory trial.",
            "keep": "These labels describe development aims and vary across programs. They are not separate IND types; read the actual objectives and design.",
            "source": {
              "label": "FDA: early development and Phase 2A/2B terminology",
              "url": "https://www.fda.gov/media/94428/download"
            }
          }
        ]
      },
      "diagram": [
        [
          "Phase 1",
          "Initial safety, exposure, and dose exploration"
        ],
        [
          "Phase 2",
          "Activity, dose or regimen, and continued safety"
        ],
        [
          "Phase 3",
          "Broader benefit–risk evidence"
        ]
      ],
      "exampleTitle": "The next protocol can fit within the same IND",
      "example": "A sponsor completes an initial Phase 1 study and proposes a Phase 2 trial with a different schedule and longer treatment. The sponsor assesses the supporting safety and product information, submits the new protocol under the existing IND, and obtains the required IRB review. It does not assume that the initial IND automatically supports any new regimen.",
      "worked": "A phase change does not itself demand a new IND. The proposed study must be covered by the appropriate submissions and supporting evidence, with applicable approvals and safeguards.",
      "exampleSteps": [
        [
          "Define",
          "Specify the Phase 2 question, population, and regimen."
        ],
        [
          "Support",
          "Address evidence gaps raised by the new schedule and duration."
        ],
        [
          "Submit and review",
          "Add the protocol and obtain appropriate review before starting."
        ]
      ],
      "question": {
        "title": "Does Phase 2 automatically need a new IND?",
        "prompt": "A sponsor with an IND in effect plans a later Phase 2 study. Which statement is most accurate?",
        "options": [
          [
            "The study can generally be added to the existing IND with the appropriate protocol amendment and supporting information.",
            "Correct. Separate phase objectives do not automatically mean separate IND applications; trial-start requirements still apply.",
            true
          ],
          [
            "A new IND is mandatory solely because the phase number changed.",
            "A phase change alone does not establish that requirement.",
            false
          ],
          [
            "The original IND allows the sponsor to start any later trial without further submissions.",
            "The later protocol and relevant changes must be properly submitted and supported.",
            false
          ]
        ],
        "hint": "Separate the continuing IND from the individual trial protocols it contains."
      },
      "sources": [
        {
          "label": "FDA: clinical trial phases",
          "url": "https://www.fda.gov/patients/drug-development-process/step-3-clinical-research"
        },
        {
          "label": "FDA: adding protocols to an IND",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-application-reporting-protocol-amendments"
        },
        {
          "label": "FDA: expansion cohorts in early oncology trials",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/expansion-cohorts-use-first-human-clinical-trials-expedite-development-oncology-drugs-and-biologics"
        },
        {
          "label": "FDA: early development and Phase 2A/2B terminology",
          "url": "https://www.fda.gov/media/94428/download"
        },
        {
          "label": "FDA: purposes of Phase 1, 2, and 3 studies",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/drug-development-and-review-definitions"
        }
      ]
    },
    {
      "id": "ind-history",
      "category": "start",
      "presentation": "history",
      "title": "How FDA’s IND Framework Developed",
      "goal": "Connect historical failures and reforms to the reasons for evidence review and participant protection.",
      "concept": "The IND framework developed as drug regulation moved toward reviewing evidence before exposing people to investigational treatments. Public-health tragedies exposed gaps in oversight; legislation and regulations strengthened both marketing standards and clinical-trial safeguards.",
      "takeaway": "Modern safeguards grew from the recognition that plausible treatments can still harm people.",
      "historySource": {
        "label": "FDA and Clinical Drug Trials: A Short History (PDF)",
        "url": "https://www.fda.gov/media/110437/download"
      },
      "history": [
        {
          "year": "1937",
          "title": "An untested formulation causes a disaster",
          "body": "Elixir Sulfanilamide used diethylene glycol as a solvent and killed more than 100 people. The tragedy accelerated reform.",
          "lesson": "A useful active ingredient does not make its formulation safe.",
          "source": {
            "label": "FDA: the sulfanilamide disaster",
            "url": "https://www.fda.gov/about-fda/histories-product-regulation/sulfanilamide-disaster"
          }
        },
        {
          "year": "1938",
          "title": "Safety evidence before marketing",
          "body": "The Federal Food, Drug, and Cosmetic Act required safety information for new drugs before marketing. It also provided for investigational use under an exemption.",
          "lesson": "Marketing review and investigational use serve different purposes.",
          "source": {
            "label": "FDA and Clinical Drug Trials: A Short History (PDF)",
            "url": "https://www.fda.gov/media/110437/download"
          }
        },
        {
          "year": "1960–1961",
          "title": "Thalidomide challenges assurances",
          "body": "Frances Kelsey sought stronger safety evidence and kept thalidomide from US marketing approval. Reports abroad linked it to severe birth defects.",
          "lesson": "Confident assurances cannot replace adequate evidence.",
          "source": {
            "label": "FDA: Frances Oldham Kelsey and thalidomide",
            "url": "https://www.fda.gov/about-fda/fda-history-exhibits/frances-oldham-kelsey-medical-reviewer-famous-averting-public-health-tragedy"
          }
        },
        {
          "year": "1962",
          "title": "Effectiveness and participant protections",
          "body": "The Kefauver–Harris amendments added effectiveness requirements for marketing and strengthened oversight of investigation, including informed consent provisions.",
          "lesson": "Both credible results and protection of participants matter.",
          "source": {
            "label": "FDA: milestones in US food and drug law",
            "url": "https://www.fda.gov/about-fda/fda-history/milestones-us-food-and-drug-law"
          }
        },
        {
          "year": "1963",
          "title": "Stronger investigational-drug rules",
          "body": "Regulations strengthened the submission of supporting information before human trials and oversight of sponsors and investigators. The modern IND system took shape.",
          "lesson": "The proposed clinical study must have a reviewable foundation.",
          "source": {
            "label": "FDA and Clinical Drug Trials: A Short History (PDF)",
            "url": "https://www.fda.gov/media/110437/download"
          }
        },
        {
          "year": "Today",
          "title": "A continuing IND throughout development",
          "body": "An IND contains protocols and supporting evidence that are updated as development continues. Marketing approval remains a separate decision.",
          "lesson": "The initial IND is the beginning of ongoing oversight.",
          "source": {
            "label": "FDA: adding protocols to an IND",
            "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-application-reporting-protocol-amendments"
          }
        }
      ],
      "diagram": [
        [
          "Historical problem",
          "Harm and unreliable evidence"
        ],
        [
          "Regulatory response",
          "Review, accountability, and participant safeguards"
        ]
      ],
      "exampleLabel": "DOCUMENTED HISTORY",
      "exampleTitle": "The formulation was part of the danger",
      "example": "In 1937, a liquid sulfanilamide preparation used diethylene glycol without adequate safety testing. The resulting deaths helped accelerate passage of the 1938 law. FDA’s account shows why knowing the active drug was insufficient: the finished preparation introduced a lethal hazard.",
      "worked": "This predates the modern IND system. Its relevance today is the need to evaluate the actual material people will receive, not just the intended biological activity of the active ingredient.",
      "exampleSteps": [
        [
          "Product",
          "An active drug was put into a liquid formulation."
        ],
        [
          "Failure",
          "The solvent introduced a lethal risk."
        ],
        [
          "Lasting lesson",
          "Product composition and safety evidence belong in the development argument."
        ]
      ],
      "question": {
        "title": "What is the lesson for an IND today?",
        "prompt": "Why does the sulfanilamide history matter when a team prepares an IND?",
        "options": [
          [
            "Every formulation containing a known active ingredient has the same safety profile.",
            "The historical hazard came from the formulated product.",
            false
          ],
          [
            "History can determine a safe dose for a modern candidate.",
            "Historical cases explain why safeguards matter; they cannot select a candidate-specific dose.",
            false
          ],
          [
            "The actual product and its components need evidence and controls before human use.",
            "Correct. Biological promise alone cannot establish the suitability of the material given to people.",
            true
          ]
        ],
        "hint": "Consider the difference between an active ingredient and the complete product."
      },
      "sources": [
        {
          "label": "FDA and Clinical Drug Trials: A Short History (PDF)",
          "url": "https://www.fda.gov/media/110437/download"
        },
        {
          "label": "FDA: the sulfanilamide disaster",
          "url": "https://www.fda.gov/about-fda/histories-product-regulation/sulfanilamide-disaster"
        },
        {
          "label": "FDA: Frances Oldham Kelsey and thalidomide",
          "url": "https://www.fda.gov/about-fda/fda-history-exhibits/frances-oldham-kelsey-medical-reviewer-famous-averting-public-health-tragedy"
        },
        {
          "label": "FDA: milestones in US food and drug law",
          "url": "https://www.fda.gov/about-fda/fda-history/milestones-us-food-and-drug-law"
        },
        {
          "label": "FDA: adding protocols to an IND",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-application-reporting-protocol-amendments"
        }
      ]
    },
    {
      "id": "discovery-target",
      "category": "discovery",
      "title": "Target Identification & Validation",
      "goal": "Distinguish the biological target from the proposed intervention and binding site, then identify evidence that would validate the therapeutic hypothesis.",
      "concept": "Target identification does not mean starting from knowing nothing. A program can begin with an unfamiliar disease mechanism, a genetic association, or an established target that existing drugs do not address well enough. The task is to identify or select a biological target and explain why changing its activity could help in a defined disease context.",
      "takeaway": "Name the target. Specify the intervention. Test whether that intervention changes disease biology for the right reason.",
      "targetGuide": {
        "validation": "Target validation tests that therapeutic hypothesis in a relevant system. Expression or a computational ranking can suggest a target; independent perturbations, controls, and rescue experiments help establish causality. In phenotypic discovery, the activity finding may come before target identification.",
        "perturbationNote": "Genetic depletion, partial inhibition, and allosteric modulation are different perturbations. Evidence for one does not automatically validate the others; keep conclusions specific to the model and intervention tested.",
        "caseTitle": "Three decisions to define",
        "caseIntro": "A target is the biological entity you want to modulate. A binding site is a location through which a drug can act on that target.",
        "layers": [
          {
            "label": "Biological target",
            "question": "What should change?",
            "example": "Specify the protein, RNA, or other biological entity—and the relevant disease context."
          },
          {
            "label": "Therapeutic hypothesis",
            "question": "What intervention could help?",
            "example": "Define the desired change in activity and the expected disease benefit."
          },
          {
            "label": "Binding site and mechanism",
            "question": "Where and how can a drug act?",
            "example": "Identify a feasible way to modulate the target, with the selectivity and exposure the hypothesis requires."
          }
        ],
        "questions": [
          "Does the intended perturbation change a disease-relevant phenotype?",
          "Do independent tests support target attribution rather than an alternative explanation?",
          "Can the intervention produce a useful effect while preserving essential normal functions?"
        ]
      },
      "exampleTitle": "PI3K inhibition: from a biological clue to a therapeutic strategy",
      "example": "Follow selected milestones from 1985 to 2025. Each answers a different question: what is the target, does it drive disease, can a drug modulate it, and do patients benefit?",
      "worked": "PI3K was not validated by one experiment. Biochemical discovery, tumor genetics, functional perturbation, and clinical trials built different parts of the evidence. Later drugs refined the isoform, patient population, combination, and binding strategy; an established target still leaves important therapeutic questions open.",
      "diagram": [
        [
          "Define the intervention",
          "Which activity should change, in which disease context?"
        ],
        [
          "Challenge causality",
          "Do independent tests support the intended mechanism?"
        ]
      ],
      "exampleSteps": [],
      "question": {
        "title": "What does mutant selectivity establish?",
        "prompt": "The allosteric PI3Kα discovery studies report mutant-selective activity and antitumor effects in preclinical models. Which conclusion is supported?",
        "options": [
          [
            "They support the proposed binding strategy and further development toward clinical testing.",
            "Correct. These findings strengthen the intervention hypothesis. Clinical testing also requires appropriate safety, product-quality, and clinical-plan evidence; patient benefit still needs clinical evidence.",
            true
          ],
          [
            "They show that PI3Kα was an entirely new biological target.",
            "PI3Kα was already an established cancer target; these programs pursued a different binding and selectivity strategy.",
            false
          ],
          [
            "They establish that allosteric inhibitors outperform approved regimens in patients.",
            "Preclinical selectivity and early observations cannot substitute for comparative clinical evidence.",
            false
          ]
        ],
        "hint": "Separate identifying the protein from choosing how to modulate it, and distinguish preclinical evidence from patient benefit."
      },
      "sources": [
        {
          "label": "Assay Guidance Manual: RNAi validation and rescue",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK91998/?report=classic"
        },
        {
          "label": "Huang et al.: Complementary genetic and pharmacological target tests",
          "url": "https://pubmed.ncbi.nlm.nih.gov/28926338/"
        },
        {
          "label": "RLY-2608: target, allosteric pocket, and mutant selectivity",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10850943/"
        },
        {
          "label": "Whitman et al. · Nature, 1985",
          "url": "https://pubmed.ncbi.nlm.nih.gov/2987699/"
        },
        {
          "label": "Whitman et al. · Nature, 1988",
          "url": "https://pubmed.ncbi.nlm.nih.gov/2833705/"
        },
        {
          "label": "Vlahos et al. · Journal of Biological Chemistry, 1994",
          "url": "https://pubmed.ncbi.nlm.nih.gov/8106507/"
        },
        {
          "label": "Cheatham et al. · PI3K and insulin responses, 1994",
          "url": "https://pubmed.ncbi.nlm.nih.gov/8007986/"
        },
        {
          "label": "Samuels et al. · Science, 2004",
          "url": "https://pubmed.ncbi.nlm.nih.gov/15016963/"
        },
        {
          "label": "Kang et al. · PNAS, 2005",
          "url": "https://pubmed.ncbi.nlm.nih.gov/15647370/"
        },
        {
          "label": "Furman et al. · NEJM, 2014",
          "url": "https://pubmed.ncbi.nlm.nih.gov/24450857/"
        },
        {
          "label": "FDA · 2014 CLL approval letter",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2014/206545Orig1s000Approv.pdf"
        },
        {
          "label": "Baselga et al. · Lancet Oncology, 2017",
          "url": "https://pubmed.ncbi.nlm.nih.gov/28576675/"
        },
        {
          "label": "André et al. · SOLAR-1, NEJM, 2019",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31091374/"
        },
        {
          "label": "SOLAR-1 · final overall survival, 2021",
          "url": "https://pubmed.ncbi.nlm.nih.gov/33246021/"
        },
        {
          "label": "FDA-issued release · May 24, 2019",
          "url": "https://www.prnewswire.com/news-releases/fda-approves-first-pi3k-inhibitor-for-breast-cancer-300856695.html"
        },
        {
          "label": "Buckbinder et al. · STX-478, Cancer Discovery, 2023",
          "url": "https://pubmed.ncbi.nlm.nih.gov/37623743/"
        },
        {
          "label": "Varkaris et al. · RLY-2608, Cancer Discovery, 2024",
          "url": "https://pubmed.ncbi.nlm.nih.gov/37916956/"
        },
        {
          "label": "ReDiscover · NCT05216432",
          "url": "https://clinicaltrials.gov/study/NCT05216432"
        },
        {
          "label": "STX-478-101 · NCT05768139",
          "url": "https://clinicaltrials.gov/study/NCT05768139"
        },
        {
          "label": "Turner et al. · INAVO120, NEJM, 2024",
          "url": "https://pubmed.ncbi.nlm.nih.gov/39476340/"
        },
        {
          "label": "FDA · inavolisib approval and trial population",
          "url": "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-inavolisib-palbociclib-and-fulvestrant-endocrine-resistant-pik3ca-mutated-hr-positive"
        },
        {
          "label": "Jhaveri et al. · INAVO120 overall survival, NEJM, 2025",
          "url": "https://pubmed.ncbi.nlm.nih.gov/40454641/"
        }
      ],
      "exampleLabel": "DOCUMENTED HISTORY",
      "pi3kExample": {
        "toxicity": {
          "title": "The challenge: normal PI3Kα also has an essential job",
          "mechanism": "Wild-type PI3Kα helps transmit insulin signals in normal tissues. Inhibiting it can disrupt glucose regulation, raising blood glucose and triggering compensatory insulin release. This is on-target toxicity in normal tissue: a drug can inhibit the intended protein and still cause harm.",
          "clinical": "Hyperglycemia was an important adverse effect in SOLAR-1 with alpelisib. Preclinical research also showed that the resulting insulin feedback can reactivate tumor signaling. These findings motivate a more selective intervention, while other adverse effects and resistance mechanisms still require attention.",
          "sources": [
            {"label": "Hopkins et al. · insulin feedback, Nature, 2018", "url": "https://pubmed.ncbi.nlm.nih.gov/30051890/"},
            {"label": "SOLAR-1 · clinical efficacy and adverse effects, 2019", "url": "https://pubmed.ncbi.nlm.nih.gov/31091374/"}
          ]
        },
        "allostericRationale": {
          "toxicity": "Improve the therapeutic window. Preferential inhibition of mutant PI3Kα aims to preserve more wild-type insulin signaling while suppressing tumor signaling. Sparing normal tissue requires demonstrated mutant selectivity; an allosteric binding site alone does not ensure it.",
          "resistance": "Address some binding-site resistance. Orthosteric inhibitors bind at the ATP site. Certain secondary PIK3CA mutations can weaken their binding; RLY-2608 retained activity against studied resistant variants in preclinical models by using a different pocket. This does not establish that allosteric drugs overcome every resistance mechanism in patients.",
          "sources": [
            {"label": "Hopkins et al. · metabolic toxicity and insulin feedback", "url": "https://pubmed.ncbi.nlm.nih.gov/30051890/"},
            {"label": "Varkaris et al. · secondary PIK3CA mutations and allosteric inhibition, 2024", "url": "https://pubmed.ncbi.nlm.nih.gov/37916958/"}
          ]
        },
        "rationale": "PI3Kα is a lipid kinase whose signaling supports cell growth, survival, and metabolism. Activating mutations in PIK3CA, which encodes its p110α catalytic subunit, can drive tumor biology. Inhibiting that signal is a therapeutic hypothesis—but normal PI3Kα also participates in insulin signaling, creating a reason to seek tumor benefit while limiting disruption of normal physiology.",
        "rationaleSource": {
          "label": "RLY-2608 discovery: biological rationale and selectivity problem",
          "url": "https://pubmed.ncbi.nlm.nih.gov/37916956/"
        },
        "distinction": {
          "title": "PI3Kα: target, intervention, and binding site",
          "intro": "The protein is the biological target. The allosteric pocket is a binding site used to modulate it.",
          "layers": [
            {
              "label": "Biological target",
              "question": "What should we modulate?",
              "example": "Mutant PI3Kα in cancers driven by activating PIK3CA mutations."
            },
            {
              "label": "Therapeutic hypothesis",
              "question": "What intervention could help?",
              "example": "Preferentially inhibit mutant PI3Kα while preserving more wild-type activity in normal tissues."
            },
            {
              "label": "Binding site and mechanism",
              "question": "Where and how can a drug act?",
              "example": "Bind an allosteric pocket rather than the ATP-binding site to inhibit PI3Kα."
            }
          ],
          "discovery": "Both programs built on an established cancer target, but their mechanistic evidence differs. RLY-2608’s discovery used protein dynamics and structural studies to explain and exploit differences in access to an allosteric pocket. For STX-478, crystal structures did not explain mutant selectivity; differences in binding kinetics supported a mechanistic hypothesis. The STX-478 pocket is present in both mutant and wild-type PI3Kα.",
          "questions": [
            "Does inhibiting mutant PI3Kα reduce tumor growth in relevant disease models?",
            "Is the effect attributable to PI3Kα inhibition?",
            "Can the intended intervention achieve that effect while sufficiently sparing normal tissue?"
          ],
          "source": {
            "label": "RLY-2608 discovery paper",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10850943/"
          }
        },
        "scope": "Selected milestones, not an exhaustive history. Dates identify publications or specified FDA decisions. PI3Kδ in blood cancers is a separate branch from PI3Kα in solid tumors. Trial outcomes below cannot be used for direct comparisons across different studies.",
        "milestones": [
          {
            "id": "activity-1985",
            "year": "1985",
            "label": "An activity linked to transformation",
            "kind": "Target discovery",
            "title": "Begin with a biochemical clue",
            "evidence": "Whitman and colleagues associated phosphatidylinositol kinase activity with transformation-competent polyoma middle-T protein.",
            "meaning": "A signaling activity associated with an oncogenic system provided a direction for investigation before today’s PI3Kα drug-target hypothesis existed.",
            "limit": "Association with transformation did not yet identify the relevant human cancer mutations or demonstrate that a drug would benefit patients.",
            "sources": [
              {
                "label": "Whitman et al. · Nature, 1985",
                "url": "https://pubmed.ncbi.nlm.nih.gov/2987699/"
              }
            ]
          },
          {
            "id": "chemistry-1988",
            "year": "1988",
            "label": "Identify the 3-position chemistry",
            "kind": "Target discovery",
            "title": "Define what the enzyme actually does",
            "evidence": "Whitman and colleagues showed that the associated kinase could produce phosphatidylinositol-3-phosphate, distinguishing its chemistry from other phosphatidylinositol kinases.",
            "meaning": "Biochemical characterization turned an associated activity into a defined molecular function—the basis for measuring and modulating the target.",
            "limit": "Identifying an enzyme activity is distinct from selecting an isoform, disease context, or therapeutic intervention.",
            "sources": [
              {
                "label": "Whitman et al. · Nature, 1988",
                "url": "https://pubmed.ncbi.nlm.nih.gov/2833705/"
              }
            ]
          },
          {
            "id": "tools-1994",
            "year": "1994",
            "label": "Chemical tools test pathway function",
            "kind": "Pharmacological investigation",
            "title": "Use inhibitors to ask causal questions",
            "evidence": "Vlahos and colleagues reported LY294002 as a PI3K inhibitor. Subsequent experiments used it to investigate PI3K’s contribution to insulin responses, including glucose transport.",
            "meaning": "Chemical perturbation helped connect pathway activity to cell function and highlighted normal metabolic biology relevant to later toxicity.",
            "limit": "A research inhibitor is an experimental tool. Effects still require controls for selectivity and exposure; these experiments did not establish a clinically usable drug.",
            "sources": [
              {
                "label": "Vlahos et al. · Journal of Biological Chemistry, 1994",
                "url": "https://pubmed.ncbi.nlm.nih.gov/8106507/"
              },
              {
                "label": "Cheatham et al. · PI3K and insulin responses, 1994",
                "url": "https://pubmed.ncbi.nlm.nih.gov/8007986/"
              }
            ]
          },
          {
            "id": "mutations-2004",
            "year": "2004",
            "label": "Find PIK3CA mutations in cancers",
            "kind": "Human genetics",
            "title": "Connect the target to human disease",
            "evidence": "Samuels and colleagues identified recurrent somatic PIK3CA mutations in human cancers, with clustering in the helical and kinase domains.",
            "meaning": "Tumor genetics sharpened the hypothesis from broadly inhibiting a growth pathway to targeting cancers with particular molecular alterations.",
            "limit": "Recurrence is a strong clue, but mutation frequency alone does not prove functional dependence or sensitivity to a drug.",
            "sources": [
              {
                "label": "Samuels et al. · Science, 2004",
                "url": "https://pubmed.ncbi.nlm.nih.gov/15016963/"
              }
            ]
          },
          {
            "id": "function-2005",
            "year": "2005",
            "label": "Test whether mutations are oncogenic",
            "kind": "Functional validation",
            "title": "Move from association to function",
            "evidence": "Kang, Bader, and Vogt introduced hotspot mutations into p110α and showed oncogenic transformation in chicken embryo fibroblasts.",
            "meaning": "Perturbation experiments supported an oncogenic function for the mutations, strengthening the biological rationale for intervention.",
            "limit": "Transformation in this model did not establish that inhibiting endogenous mutant PI3Kα would safely treat a patient’s established cancer.",
            "sources": [
              {
                "label": "Kang et al. · PNAS, 2005",
                "url": "https://pubmed.ncbi.nlm.nih.gov/15647370/"
              }
            ]
          },
          {
            "id": "idelalisib-2014",
            "year": "2014",
            "label": "Idelalisib: the PI3Kδ branch",
            "kind": "Phase 3 and FDA decision",
            "title": "Clinical benefit in a different PI3K context",
            "evidence": "In relapsed chronic lymphocytic leukemia (CLL), idelalisib plus rituximab improved progression-free survival versus placebo plus rituximab in patients less able to receive chemotherapy. FDA approved the specified CLL combination on July 23, 2014.",
            "meaning": "This demonstrated clinical utility for PI3Kδ inhibition in a defined blood-cancer setting.",
            "limit": "PI3Kδ and PI3Kα are different isoforms. This result did not validate mutant PI3Kα inhibition in breast cancer or imply that all PI3K inhibitors share a benefit–risk profile.",
            "trial": "Study 116 · randomized Phase 3 · idelalisib + rituximab versus placebo + rituximab.",
            "sources": [
              {
                "label": "Furman et al. · NEJM, 2014",
                "url": "https://pubmed.ncbi.nlm.nih.gov/24450857/"
              },
              {
                "label": "FDA · 2014 CLL approval letter",
                "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2014/206545Orig1s000Approv.pdf"
              }
            ]
          },
          {
            "id": "belle-2017",
            "year": "2017",
            "label": "BELLE-2: benefit constrained by toxicity",
            "kind": "Phase 3 publication",
            "title": "Pathway activity is not enough",
            "evidence": "In postmenopausal patients with HR-positive, HER2-negative advanced breast cancer resistant to aromatase inhibitors, pan-PI3K inhibitor buparlisib plus fulvestrant improved median progression-free survival to 6.9 months versus 5.0 months with placebo plus fulvestrant (hazard ratio 0.78). The publication reported that no further studies of this combination were being pursued because of toxicity.",
            "meaning": "The study supported pathway activity while showing why tolerability and more selective strategies mattered.",
            "limit": "A positive efficacy endpoint did not make this particular combination a satisfactory treatment strategy.",
            "trial": "BELLE-2 · randomized Phase 3 · 1,147 patients · buparlisib + fulvestrant versus placebo + fulvestrant.",
            "sources": [
              {
                "label": "Baselga et al. · Lancet Oncology, 2017",
                "url": "https://pubmed.ncbi.nlm.nih.gov/28576675/"
              }
            ]
          },
          {
            "id": "solar-2019",
            "year": "2019",
            "label": "SOLAR-1: PI3Kα and biomarker selection",
            "kind": "Phase 3 and FDA decision",
            "title": "Establish benefit for a defined population",
            "evidence": "In the PIK3CA-mutated cohort with HR-positive, HER2-negative advanced breast cancer previously treated with endocrine therapy, alpelisib plus fulvestrant produced median progression-free survival of 11.0 months versus 5.7 months with placebo plus fulvestrant (hazard ratio 0.65). FDA approved the specified combination on May 24, 2019.",
            "meaning": "PI3Kα-selective inhibition and mutation-based patient selection translated the target hypothesis into clinical benefit.",
            "limit": "Hyperglycemia and other adverse effects remained important. The later overall-survival analysis did not cross its prespecified significance boundary; progression-free survival and overall survival are different endpoints.",
            "trial": "SOLAR-1 · randomized Phase 3 · alpelisib + fulvestrant versus placebo + fulvestrant.",
            "sources": [
              {
                "label": "André et al. · SOLAR-1, NEJM, 2019",
                "url": "https://pubmed.ncbi.nlm.nih.gov/31091374/"
              },
              {
                "label": "SOLAR-1 · final overall survival, 2021",
                "url": "https://pubmed.ncbi.nlm.nih.gov/33246021/"
              },
              {
                "label": "FDA-issued release · May 24, 2019",
                "url": "https://www.prnewswire.com/news-releases/fda-approves-first-pi3k-inhibitor-for-breast-cancer-300856695.html"
              }
            ]
          },
          {
            "id": "allosteric-2023",
            "year": "2023–2024",
            "label": "RLY-2608 and STX-478: change how to bind",
            "kind": "Discovery publications",
            "title": "An established target, a new binding strategy",
            "evidence": "The STX-478 (2023) and RLY-2608 (2024 issue; online 2023) discovery papers described allosteric inhibitors with mutant-selective activity. They investigated whether tumor inhibition could be separated more effectively from wild-type PI3Kα-related metabolic effects.",
            "meaning": "The protein target was already known. Allosteric binding offered a way to pursue a different therapeutic window; the evidence explaining mutant selectivity differed between programs.",
            "limit": "Biochemical selectivity, xenografts, and early clinical observations do not establish comparative clinical superiority. The allosteric pocket is not simply absent from wild-type protein.",
            "trial": "Clinical translation: ReDiscover (RLY-2608) and STX-478-101. Trial records describe study designs; the discovery papers are not pivotal randomized efficacy trials.",
            "sources": [
              {
                "label": "Buckbinder et al. · STX-478, Cancer Discovery, 2023",
                "url": "https://pubmed.ncbi.nlm.nih.gov/37623743/"
              },
              {
                "label": "Varkaris et al. · RLY-2608, Cancer Discovery, 2024",
                "url": "https://pubmed.ncbi.nlm.nih.gov/37916956/"
              },
              {
                "label": "ReDiscover · NCT05216432",
                "url": "https://clinicaltrials.gov/study/NCT05216432"
              },
              {
                "label": "STX-478-101 · NCT05768139",
                "url": "https://clinicaltrials.gov/study/NCT05768139"
              }
            ]
          },
          {
            "id": "inavo-2024",
            "year": "2024",
            "label": "INAVO120: a PI3Kα-based triplet",
            "kind": "Phase 3 and FDA decision",
            "title": "Test the intervention within a treatment regimen",
            "evidence": "In 325 patients with endocrine-resistant, PIK3CA-mutated, HR-positive, HER2-negative advanced breast cancer, inavolisib + palbociclib + fulvestrant produced median progression-free survival of 15.0 months versus 7.3 months with placebo + palbociclib + fulvestrant (hazard ratio 0.43). FDA approved the specified combination on October 10, 2024.",
            "meaning": "The therapeutic hypothesis includes the combination and clinical setting, not just the target or molecule.",
            "limit": "Patients had relapsed during or within 12 months of adjuvant endocrine therapy and had no prior systemic therapy for advanced disease. This was not a head-to-head comparison against alpelisib or an allosteric inhibitor.",
            "trial": "INAVO120 · randomized Phase 3 · inavolisib or placebo added to palbociclib + fulvestrant.",
            "sources": [
              {
                "label": "Turner et al. · INAVO120, NEJM, 2024",
                "url": "https://pubmed.ncbi.nlm.nih.gov/39476340/"
              },
              {
                "label": "FDA · inavolisib approval and trial population",
                "url": "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-inavolisib-palbociclib-and-fulvestrant-endocrine-resistant-pik3ca-mutated-hr-positive"
              }
            ]
          },
          {
            "id": "survival-2025",
            "year": "2025",
            "label": "INAVO120: overall-survival follow-up",
            "kind": "Phase 3 follow-up",
            "title": "Learn beyond the initial endpoint",
            "evidence": "The final overall-survival analysis reported median survival of 34.0 months with inavolisib + palbociclib + fulvestrant versus 27.0 months with placebo + palbociclib + fulvestrant (hazard ratio for death 0.67; P = 0.02).",
            "meaning": "Longer follow-up added evidence on survival after the initial progression-free-survival finding and FDA approval.",
            "limit": "This is follow-up of the same INAVO120 study, not an independent second trial. The finding applies to the studied population and regimen.",
            "trial": "INAVO120 · final overall-survival analysis published in 2025.",
            "sources": [
              {
                "label": "Jhaveri et al. · INAVO120 overall survival, NEJM, 2025",
                "url": "https://pubmed.ncbi.nlm.nih.gov/40454641/"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "discovery-hits",
      "category": "discovery",
      "title": "Hit Identification",
      "goal": "Choose a screen that matches the intended activity, then distinguish a screening signal from a confirmed chemical hit.",
      "concept": "Hit identification finds chemical starting points for a drug-discovery program. A primary hit meets the screen’s selection criteria. A confirmed hit retains interpretable activity when the material and the result are checked independently. Neither term means that the molecule is ready for development.",
      "takeaway": "A screen nominates. Experiments confirm. A hit is a starting point.",
      "exampleTitle": "Two routes from a screening signal to a hit",
      "example": "Compare the initial readout, the confirmation experiments, and what the evidence justified next.",
      "worked": "Match each claim to the measurement that supports it.",
      "question": {
        "title": "What turns enrichment into credible hit evidence?",
        "prompt": "A DNA-encoded selection enriches a chemical series with mutant PI3Kα. Which next step most directly tests whether the molecule itself binds and inhibits the target?",
        "options": [
          [
            "Advance the most enriched DNA barcode directly into animal efficacy studies",
            "Enrichment prioritizes a candidate; it has not yet established the activity of the independently prepared molecule.",
            false
          ],
          [
            "Synthesize the compound without DNA, verify the material, and measure binding and enzyme inhibition against mutant and wild-type protein",
            "Correct. This separates the compound from the selection format and tests interaction, function, and selectivity with appropriate comparisons.",
            true
          ],
          [
            "Use a stronger docking score as confirmation of mutant-selective inhibition",
            "A prediction can guide selection, but cannot replace measurements of binding and functional activity.",
            false
          ]
        ],
        "hint": "The selection produces a candidate binder. Which experiments test the independent molecule and its function?"
      },
      "sources": [
        {
          "label": "Assay Guidance Manual · HTS assay validation",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK83783/"
        },
        {
          "label": "Assay Guidance Manual · Reporter interference",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK374281/"
        },
        {
          "label": "Assay Guidance Manual · Chemical reactivity and material quality",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK326709/"
        },
        {
          "label": "DEL methods · Selecting molecules for synthesis and confirmation",
          "url": "https://pubmed.ncbi.nlm.nih.gov/36083558/"
        },
        {
          "label": "Virtual screening · Lyu et al., Nature (2019)",
          "url": "https://www.nature.com/articles/s41586-019-0917-9"
        },
        {
          "label": "Fragment discovery · Shuker et al., SAR by NMR (1996)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/8929414/"
        },
        {
          "label": "Varkaris et al. · Discovery paper, Figure 2 and results (2024; online 2023)",
          "url": "https://aacrjournals.org/cancerdiscovery/article/14/2/240/734065/Discovery-and-Clinical-Proof-of-Concept-of-RLY"
        },
        {
          "label": "Hadida et al. · Ivacaftor hit discovery and medicinal chemistry, J. Med. Chem. (2014)",
          "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
        },
        {
          "label": "Ivacaftor discovery case history · Hit-confirmation assays",
          "url": "https://www.sciencedirect.com/science/chapter/bookseries/pii/B9780128001677000249"
        },
        {
          "label": "Van Goor et al. · VX-770 in human airway cells, PNAS (2009)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/19846789/"
        }
      ],
      "exampleLabel": "PUBLISHED DISCOVERY",
      "hitGuide": {
        "objective": "Find a molecule worth investigating—and know why you trust the signal.",
        "methods": [
          {
            "title": "High-throughput screening (HTS)",
            "text": "Test many compounds in a standardized assay, often in plates. HTS describes scale and workflow; either target-based or phenotypic biology can supply the readout. Controls, reproducibility, and a useful signal range matter before screening."
          },
          {
            "title": "DNA-encoded libraries (DEL)",
            "text": "In a typical affinity selection, DNA tags identify library members retained with a protein. Enrichment nominates possible binders. Synthesis without the tag and independent testing are needed to establish the compound’s activity."
          },
          {
            "title": "Fragment screening",
            "text": "Look for binding by small chemical fragments, often using sensitive biophysical or structural methods. Weak binding can provide a useful starting point if it is credible and offers a tractable route for chemistry."
          },
          {
            "title": "Virtual screening and AI",
            "text": "Use structures, known ligands, or learned patterns to prioritize molecules for experiments. A docking score or model prediction is a selection hypothesis. Check chemical diversity, uncertainty, and experimental activity before calling a predicted molecule a confirmed hit."
          }
        ],
        "planning": "Define the desired effect, the assay’s actual measurement, and the rules for advancing a compound before the screen. A technically robust assay can still measure the wrong biology.",
        "checks": [
          {
            "title": "Is the material what we think it is?",
            "text": "Confirm chemical identity and purity. Retest fresh or independently prepared material when feasible; an impurity or sample-handling problem can masquerade as activity."
          },
          {
            "title": "Does the activity reproduce?",
            "text": "Measure a concentration–response relationship with appropriate controls and independent repeats. Inspect the full curve and solubility limits. A single percentage inhibition or an attractive IC₅₀ is insufficient."
          },
          {
            "title": "Does a different readout support it?",
            "text": "An orthogonal assay tests the same biological question using a different detection method. Agreement reduces dependence on the original reporter; it does not by itself prove the molecular mechanism."
          },
          {
            "title": "Can another explanation account for it?",
            "text": "Counterscreens test alternatives such as reporter inhibition, fluorescence interference, aggregation, or cell loss. Choose them for the assay and chemical series. A clean result in one counterscreen does not exclude every artifact."
          },
          {
            "title": "Is this a useful starting point?",
            "text": "Examine relevant selectivity, cellular activity, and chemical tractability. For a phenotypic hit, plan mechanism studies. Hit-to-lead work then builds and compares a chemical series; full candidate-quality potency, exposure, and safety are not prerequisites for every initial hit."
          }
        ],
        "bridge": "The output is a justified starting point for hit-to-lead work: defined material, reproducible activity, tested alternative explanations, and explicit remaining questions.",
        "sources": [
          {
            "label": "Assay Guidance Manual · HTS assay validation",
            "url": "https://www.ncbi.nlm.nih.gov/books/NBK83783/"
          },
          {
            "label": "Assay Guidance Manual · Reporter interference",
            "url": "https://www.ncbi.nlm.nih.gov/books/NBK374281/"
          },
          {
            "label": "Assay Guidance Manual · Chemical reactivity and material quality",
            "url": "https://www.ncbi.nlm.nih.gov/books/NBK326709/"
          }
        ],
        "comparison": [
          {
            "label": "Starting question",
            "target": "Can a molecule modulate the selected target?",
            "phenotype": "Can a molecule produce the desired biological change?"
          },
          {
            "label": "Primary readout",
            "target": "Target binding or a defined target’s activity.",
            "phenotype": "A functional response in cells, tissue, or an organism."
          },
          {
            "label": "Key uncertainty",
            "target": "Will target modulation produce useful biology?",
            "phenotype": "What causes the response, and is it relevant to disease?"
          }
        ],
        "structureNote": "Structure-enabled strategies can support target-based hit identification: structural information can reveal binding pockets, guide virtual screening, or inform experimental screen design. A solved structure is not required for target-based discovery. Structural information can also help explain and optimize hits found through phenotypic screening.",
        "comparisonNote": "These approaches can overlap. A phenotypic screen can start with a known disease gene or target; a cellular readout does not automatically make a program target-agnostic."
      },
      "hitExample": {
        "programs": [
          {
            "id": "rly2608",
            "label": "Target-based · RLY-2608",
            "title": "RLY-2608: from a binding screen to a chemical starting point",
            "intro": "Follow the initial hit, compound 1, before the later optimized inhibitor RLY-2608.",
            "note": "Structure and protein dynamics informed the design; a DNA-encoded library selection generated the candidate binders.",
            "stages": [
              {
                "id": "design",
                "label": "Design the screen",
                "title": "Build the desired selectivity into the experiment",
                "observation": "The team used full-length PI3Kα, occupied the ATP-binding site with the orthosteric inhibitor Taselisib (GDC-0032), and prioritized DEL enrichment for mutants over wild type.",
                "meaning": "The selection favored the desired binding strategy.",
                "limit": "Enrichment alone did not establish inhibition.",
                "diagram": [
                  [
                    "Protein",
                    "Full-length PI3Kα"
                  ],
                  [
                    "Selection",
                    "Mutant versus wild type"
                  ],
                  [
                    "Output",
                    "Candidate binders"
                  ]
                ],
                "figures": [
                  {
                    "src": "assets/rly-del-screen-design.svg",
                    "width": 760,
                    "height": 610,
                    "label": "DEL selection with the ATP site occupied",
                    "alt": "Teaching schematic: Taselisib (GDC-0032) occupies the ATP pocket of immobilized PI3Kα. Incubate DNA-tagged compounds, wash and recover retained tags, then sequence and compare enrichment in separate mutant and wild-type selections. Binding and enzyme inhibition are tested afterward.",
                    "caption": "The same blocking condition is used in separate protein-variant selections. Barcode enrichment nominates candidates for independent testing; it does not establish inhibition.",
                    "layout": "wide"
                  }
                ],
                "figureHeading": "SCREEN DESIGN · TEACHING SCHEMATIC",
                "figureCredit": "Original teaching schematic based on the DEL selection Results and Methods in Varkaris et al., Cancer Discovery (2024), and the Taselisib (GDC-0032) condition in Figure 2A. Protein shapes and binding poses are illustrative.",
                "hideSummaryDiagram": true
              },
              {
                "id": "confirm",
                "label": "Confirm the hit",
                "title": "Test the molecule independently of its DNA tag",
                "observation": "Candidates were synthesized off-DNA and tested independently. Figure 2B shows compound 1. Figure 2D reports its SPR binding kinetics and affinity: KD is 0.36 µM for H1047R and 2.9 µM for wild-type PI3Kα, approximately an eightfold difference.",
                "meaning": "The independently synthesized compound binds with mutant preference under the measured conditions.",
                "limit": "Binding affinity alone does not establish enzyme inhibition. The next stage compares biochemical inhibition.",
                "diagram": [
                  [
                    "Material",
                    "Compound 1"
                  ],
                  [
                    "Measurement",
                    "SPR binding"
                  ],
                  [
                    "Comparison",
                    "Mutant versus wild type"
                  ]
                ],
                "figures": [
                  {
                    "src": "assets/rly-fig2b-compound.png",
                    "width": 496,
                    "height": 486,
                    "label": "Figure 2B · Compound 1",
                    "alt": "Original Figure 2B showing the chemical structure of initial hit compound 1.",
                    "caption": "The initial chemical starting point, synthesized without its DNA tag for follow-up testing.",
                    "layout": "compact"
                  },
                  {
                    "src": "assets/rly-fig2d-binding.png",
                    "width": 774,
                    "height": 236,
                    "label": "Figure 2D · Binding kinetics and affinity",
                    "alt": "Original Figure 2D. Compound 1 has KD 0.36 ± 0.04 micromolar for H1047R and 2.9 ± 0.6 micromolar for wild-type PI3Kα; association and dissociation rates are also reported.",
                    "caption": "ka is the association rate constant, kd the dissociation rate constant, and KD the equilibrium dissociation constant. Lower KD means tighter binding.",
                    "layout": "wide"
                  }
                ]
              },
              {
                "id": "advance",
                "label": "Decide what follows",
                "title": "Improve potency and mutant selectivity",
                "observation": "Table 1 compares compound 1, compound 3, and RLY-2608. H1047R enzyme IC50 improves from 334 to 16 to 4 nM, while the reported mutant selectivity increases from 1.9-fold to 4.3-fold to 12-fold.",
                "meaning": "The series improves both biochemical potency and selectivity for H1047R over wild type.",
                "limit": "These biochemical results do not establish cellular selectivity, human tolerability, or clinical efficacy.",
                "diagram": [
                  [
                    "Starting point",
                    "Compound 1"
                  ],
                  [
                    "Intermediate",
                    "Compound 3"
                  ],
                  [
                    "Optimized molecule",
                    "RLY-2608"
                  ]
                ],
                "figures": [
                  {
                    "src": "assets/rly-table1-optimization.png",
                    "width": 1677,
                    "height": 684,
                    "label": "Table 1 · Biochemical inhibition and selectivity",
                    "alt": "Original Table 1 comparing structures and enzyme inhibition. Wild-type IC50 values for compound 1, compound 3, and RLY-2608 are 647, 69, and 48 nM; H1047R values are 334, 16, and 4 nM. Reported selectivity values are 1.9, 4.3, and 12.",
                    "caption": "The original table is reproduced as printed. Its numerical selectivity values correspond to WT IC50 divided by H1047R IC50 (for example, 48 ÷ 4 = 12).",
                    "layout": "wide"
                  }
                ]
              }
            ],
            "sources": [
              {
                "label": "Varkaris et al. · Discovery paper, Figure 2 and results (2024; online 2023)",
                "url": "https://aacrjournals.org/cancerdiscovery/article/14/2/240/734065/Discovery-and-Clinical-Proof-of-Concept-of-RLY"
              }
            ],
            "figureCredit": "Varkaris et al., Cancer Discovery 14, 240–257 (2024). © 2023 The Authors. Selected panels extracted from the supplied PDF; original labels and data retained."
          },
          {
            "id": "ivacaftor",
            "label": "Phenotypic / functional · Ivacaftor",
            "title": "Vertex: select for restored CFTR function",
            "intro": "Cystic fibrosis disrupts epithelial salt and fluid transport. This program sought molecules that improved CFTR channel function in cells.",
            "note": "A known-target cellular functional screen: CFTR was already implicated in disease. The screen selected an ion-transport response, without requiring a binding-site model.",
            "sources": [
              {
                "label": "Hadida et al. · Ivacaftor hit discovery and medicinal chemistry, J. Med. Chem. (2014)",
                "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
              },
              {
                "label": "Ivacaftor discovery case history · Hit-confirmation assays",
                "url": "https://www.sciencedirect.com/science/chapter/bookseries/pii/B9780128001677000249"
              },
              {
                "label": "Van Goor et al. · VX-770 in human airway cells, PNAS (2009)",
                "url": "https://pubmed.ncbi.nlm.nih.gov/19846789/"
              }
            ],
            "stages": [
              {
                "id": "design",
                "label": "Design the screen",
                "title": "Make cellular function the selection readout",
                "observation": "NIH-3T3 cells expressed F508del-CFTR. Low-temperature incubation helped the mutant reach the cell surface; a fluorescent membrane-potential assay detected changes associated with chloride efflux after forskolin stimulation.",
                "meaning": "The assay sought potentiators of channels already at the surface.",
                "limit": "This setup did not establish correction of protein trafficking at body temperature.",
                "diagram": [
                  [
                    "Model",
                    "F508del-CFTR cells"
                  ],
                  [
                    "Readout",
                    "Membrane potential"
                  ],
                  [
                    "Selection",
                    "Improved channel function"
                  ]
                ],
                "sources": [
                  {
                    "label": "Hadida et al. · Ivacaftor hit discovery and medicinal chemistry, J. Med. Chem. (2014)",
                    "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
                  }
                ]
              },
              {
                "id": "confirm",
                "label": "Confirm the hit",
                "title": "Ask whether the fluorescence signal reflects ion transport",
                "observation": "The published case history describes follow-up patch-clamp, selectivity, cell-viability, and Ussing-chamber experiments in human bronchial epithelial cells.",
                "meaning": "Electrical measurements tested function beyond the optical reporter; viability and selectivity checks challenged alternative explanations.",
                "limit": "A cellular response alone did not locate the compound’s binding site.",
                "diagram": [
                  [
                    "Cross-check",
                    "Electrical recordings"
                  ],
                  [
                    "Controls",
                    "Viability and selectivity"
                  ],
                  [
                    "Context",
                    "Human airway cells"
                  ]
                ],
                "sources": [
                  {
                    "label": "Ivacaftor discovery case history · Hit-confirmation assays",
                    "url": "https://www.sciencedirect.com/science/chapter/bookseries/pii/B9780128001677000249"
                  }
                ]
              },
              {
                "id": "advance",
                "label": "Decide what follows",
                "title": "Carry the functional evidence into optimization",
                "observation": "The 2014 medicinal chemistry paper traces initial hit compound 1 to optimized compound 48, ivacaftor (VX-770). The earlier 2009 pharmacology paper showed that VX-770 improved chloride secretion, surface hydration, and ciliary beating in G551D/F508del human airway cultures.",
                "meaning": "The later molecule connected channel potentiation to several disease-relevant cellular functions.",
                "limit": "Those findings concerned VX-770, not the original hit, and were not proof of clinical benefit.",
                "diagram": [
                  [
                    "Hit",
                    "Compound 1"
                  ],
                  [
                    "Optimization",
                    "VX-770"
                  ],
                  [
                    "Follow-up",
                    "Airway function"
                  ]
                ],
                "sources": [
                  {
                    "label": "Hadida et al. · Ivacaftor hit discovery and medicinal chemistry, J. Med. Chem. (2014)",
                    "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
                  },
                  {
                    "label": "Van Goor et al. · VX-770 in human airway cells, PNAS (2009)",
                    "url": "https://pubmed.ncbi.nlm.nih.gov/19846789/"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "id": "discovery-leads",
      "category": "discovery",
      "title": "Hit to Lead",
      "goal": "Explain how chemistry, biology, and DMPK evidence guide hit-to-lead decisions; choose which compounds need deeper profiling, and distinguish lead selection from lead optimization and DC nomination.",
      "concept": "Hit to lead tests whether a confirmed hit can become a useful, improvable chemical series. Teams connect structure–activity relationships (SAR) with compound quality, cellular function, selectivity, early properties, and selected exposure studies. Different compounds answer different questions; each analog does not need the same test package.",
      "takeaway": "Profile broadly enough to learn the series, and deeply enough on selected compounds to test its main risks.",
      "exampleLabel": "PUBLISHED MEDICINAL CHEMISTRY",
      "exampleTitle": "Two ways SAR can define a promising direction",
      "example": "Follow the core and amine branches that produced Vertex lead 16, then examine how substitutions changed the kinase activity profile in the imatinib program.",
      "worked": "Use each chemical comparison to identify a useful direction and the evidence still needed before further optimization.",
      "diagram": [
        [
          "Hit to lead",
          "Select an improvable chemical series"
        ],
        [
          "Lead optimization",
          "Build an integrated development profile"
        ],
        [
          "DC nomination",
          "Select a molecule for development"
        ]
      ],
      "exampleSteps": [
        [
          "Explore the scaffold",
          "Follow how substitutions changed the activity profile of the imatinib series."
        ],
        [
          "Tune selectivity",
          "Compare effects across kinases, not just the desired target."
        ],
        [
          "Improve properties",
          "Connect structural changes to solubility and exposure, then integrate the biological evidence."
        ]
      ],
      "question": {
        "title": "Which compounds need the next round of profiling?",
        "prompt": "Teaching exercise: a new analog set includes weak compounds, potent but poorly soluble compounds, and several with reproducible cellular activity and workable early properties. You want to decide whether the series deserves lead optimization. Which testing plan is most informative?",
        "options": [
          [
            "Use a representative subset for focused ADME and selectivity work, then choose compounds for PK and exposure-linked PD where the question and model justify it.",
            "Correct. Use activity, property trends, diversity, and information value to choose the subset. A weak analog may still be useful as a control. Record missing data, and let the results guide the next chemistry cycle.",
            true
          ],
          [
            "Run the same complete ADME, animal PK, PD, and efficacy package on every synthesized analog.",
            "A complete package on every analog is usually unnecessary. Broad early assays and selective deeper profiling answer different questions; animal studies should resolve a defined uncertainty.",
            false
          ],
          [
            "Run PK only on the most potent analog and treat its result as representative of the whole series.",
            "One potency winner may have atypical properties. Select compounds that test relevant structural and property differences; do not generalize one molecule’s PK to every analog.",
            false
          ],
          [
            "Finish potency optimization before collecting any ADME or PK information.",
            "Deferring every property measurement can hide a series-wide liability. Early ADME and selected exploratory PK can inform chemistry before a lead is chosen.",
            false
          ]
        ],
        "hint": "The aim is to learn enough to choose a series. Different analogs can be selected for different questions; unmeasured properties remain unknown."
      },
      "sources": [
        {
          "label": "NIDDK · Hit-to-lead research and SAR",
          "url": "https://www.niddk.nih.gov/research-funding/research-programs/translational-research-therapeutic-discovery-development/hit-to-lead"
        },
        {
          "label": "Assay Guidance Manual · Discovery stages and progression decisions",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK92015/"
        },
        {
          "label": "Assay Guidance Manual · Early ADME and PK assessment",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK326710/"
        },
        {
          "label": "Lydon · Firsthand imatinib discovery account, Figure 3 (2009, PDF)",
          "url": "https://laskerfoundation.org/wp-content/uploads/2021/01/2009_c_lydon.pdf"
        },
        {
          "label": "Zimmermann et al. · Original PKC-series chemistry (1996)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/8764886/"
        },
        {
          "label": "Druker et al. · Activity in BCR-ABL-positive cells (1996)",
          "url": "https://pubmed.ncbi.nlm.nih.gov/8616716/"
        },
        {
          "label": "FDA · The separate evidence needed for an IND",
          "url": "https://www.fda.gov/drugs/types-applications/investigational-new-drug-ind-application"
        },
        {
          "label": "NCATS · Discovery activities and progressive testing",
          "url": "https://toolkit.ncats.nih.gov/module/getting-started/understand-the-rd-process/discovery-of-therapeutic-approach/"
        },
        {
          "label": "FDA–NIH BEST · Response and pharmacodynamic biomarkers",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK402286/"
        },
        {
          "label": "Assay Guidance Manual · Design and validation of in vivo assays",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK92013/"
        },
        {
          "label": "Hadida et al. · Ivacaftor chemistry and selective compound profiling",
          "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
        }
      ],
      "leadGuide": {
        "objective": "Build a lead series by connecting chemistry, activity, exposure, and effect. Learn what to test—and on which compounds.",
        "sarDiagram": {
          "title": "One position. Three analogs. Different trade-offs.",
          "label": "ILLUSTRATIVE SERIES · INVENTED ASSAY VALUES",
          "scaffold": "Keep the benzamide scaffold; change only the group at R. Amber marks the substitution being compared.",
          "analogs": [
            {
              "id": "a",
              "label": "A",
              "group": "H",
              "potency": "800",
              "selectivity": "10×",
              "solubility": "120"
            },
            {
              "id": "b",
              "label": "B",
              "group": "CH₃",
              "potency": "80",
              "selectivity": "20×",
              "solubility": "8"
            },
            {
              "id": "c",
              "label": "C",
              "group": "OH",
              "potency": "160",
              "selectivity": "40×",
              "solubility": "100"
            }
          ],
          "conclusion": "B has the lowest target IC50. C combines a potency gain over A with higher solubility and selectivity than B. The next design should consider all three measurements.",
          "note": "All values are invented for teaching, not reported activity of these molecules. Assume matched assay conditions and the same solubility pH. Selectivity = off-target IC50 ÷ target IC50 for one illustrative off-target; it is not a safety margin."
        },
        "topics": [
          {
            "id": "stages",
            "label": "Place the stage",
            "title": "Three different decisions",
            "intro": "Hit to lead is a team decision about a chemical series. SAR, biological relevance, early absorption/distribution/metabolism/excretion (ADME), and selected pharmacokinetic/pharmacodynamic (PK/PD) studies help reveal whether it has a credible path forward.",
            "comparison": [
              [
                "Hit to lead",
                "Can this series be improved?",
                "Make informative analogs, confirm activity, investigate early properties and liabilities, and profile representative compounds more deeply.",
                "Lead series, representative molecules, interpretable evidence, and a plan for unresolved risks."
              ],
              [
                "Lead optimization",
                "Can we achieve the intended development profile?",
                "Continue SAR while balancing cellular activity, selectivity, exposure, safety signals, and product feasibility.",
                "An optimized molecule, often with backup options."
              ],
              [
                "DC nomination",
                "Which molecule should enter development?",
                "Integrate the evidence, record remaining risks, and commit to the next development studies.",
                "A named development candidate and an accountable plan."
              ]
            ],
            "note": "These are working definitions, not FDA-defined milestones. Organizations draw the boundaries differently; experiments and decisions overlap.",
            "sources": [
              0,
              1,
              2
            ],
            "scope": "The depth of testing grows with the decision. Early ADME can start alongside SAR; exploratory PK or in vivo PD may occur during hit to lead when useful. A complete in vivo PK/PD package is not a universal entry requirement for lead optimization."
          },
          {
            "id": "pockets",
            "label": "Explore the pocket",
            "title": "Can this hit become a lead series?",
            "intro": "A tractable series offers chemical changes worth testing. Pocket features can suggest those changes when structural information is available; experimental SAR can also develop without a solved binding structure.",
            "rightTitle": "Turn pocket hypotheses into SAR",
            "rightIntro": "Pocket shape, interaction chemistry, and flexibility help determine whether a hit has room for useful modification. Structure–activity relationships (SAR) test those opportunities: synthesize related molecules, measure their activity, and learn which structural changes help. The pocket suggests a design; comparisons across analogs reveal whether it works.",
            "details": [
              [
                "1 · Form a pocket-based hypothesis",
                "Identify a growth direction and the interaction it might add. For example, a nearby polar feature may suggest testing a group capable of a complementary hydrogen bond. Treat the proposed contact as a hypothesis, not an established benefit."
              ],
              [
                "2 · Make comparisons that test the idea",
                "Keep the core scaffold and vary a defined region. Compare the parent hit with analogs that change group size, polarity, or position. Confirm identity and purity, then test the compounds under matched conditions."
              ],
              [
                "3 · Let measured SAR guide the next edit",
                "Compare potency, cellular activity, and selectivity alongside solubility and other properties. A gain supports further investigation; a loss can expose a wrong assumption. SAR can guide chemistry even without a solved structure, and a potency change alone does not prove a proposed contact."
              ]
            ],
            "keep": "Pocket hypothesis → chemical modification → measured SAR → next design.",
            "nextTopic": {
              "id": "sar",
              "label": "Explore SAR"
            },
            "sources": [
              0,
              1,
              2
            ]
          },
          {
            "id": "sar",
            "label": "Build SAR around potency",
            "title": "Design → make → test → analyze",
            "intro": "Each chemistry cycle should resolve an uncertainty. Start with a testable question, choose informative analogs, and decide what result would change your next design.",
            "cycle": [
              [
                "Design",
                "Choose a small set of structural changes that can distinguish competing ideas."
              ],
              [
                "Make",
                "Synthesize and purify the analogs; verify identity, purity, and relevant stereochemistry."
              ],
              [
                "Test",
                "Apply the planned activity and property assays; send selected compounds into deeper profiling."
              ],
              [
                "Analyze",
                "Compare activity and properties, investigate surprises, then design the next set."
              ]
            ],
            "keep": "Change the structure to test a hypothesis. Advance the profile, not just the potency.",
            "sources": [
              0,
              1,
              2
            ],
            "principlesTitle": "One published series, three questions",
            "principlesIntro": "Follow compounds 7–16 from the Vertex ivacaftor program: what changed, what the activity teaches, and what to investigate next. The paper explicitly identifies 16 as a lead, giving this example a clear endpoint.",
            "principles": [
              {
                "title": "Make each chemical comparison interpretable",
                "summary": "Scaffold · substituent position · stereochemistry · conformation",
                "points": [
                  [
                    "Map the editable regions",
                    "Keep a shared core and vary defined positions. Compare deletion, substitution, and positional changes. A matched molecular pair isolates one structural edit, although that edit can affect several properties."
                  ],
                  [
                    "Test geometry and interactions",
                    "Stereoisomers, linker lengths, ring constraints, and hydrogen-bonding groups test different hypotheses. A bioisostere is a proposed replacement, not a guarantee of equivalent binding or better properties."
                  ],
                  [
                    "Include the chemistry that did not help",
                    "Inactive analogs and activity cliffs can be informative. Verify unexpected results before inferring a specific protein contact. Consider whether the synthesis can efficiently access the next informative set."
                  ]
                ],
                "visual": {
                  "id": "edit",
                  "label": "Compare edits",
                  "title": "Explore one published branch",
                  "src": "assets/sar-principle-edit.svg",
                  "alt": "Benzamide compared with para-hydroxybenzamide. One substitution keeps the scaffold but may affect activity, solubility, and membrane entry.",
                  "caption": "Published amine-side SAR from the ivacaftor discovery program."
                }
              },
              {
                "title": "Separate potency from the cause of the response",
                "summary": "Concentration–response · selectivity · cellular mechanism · measurement quality",
                "points": [
                  [
                    "Keep comparisons matched",
                    "Use consistent assay conditions, reference compounds, units, and repeat measurements. IC50 or EC50 reflects the assay; it is not automatically binding affinity. For functional assays, compare maximum response as well as potency."
                  ],
                  [
                    "Ask whether activity translates",
                    "Compare biochemical activity with cellular engagement or function where appropriate. Evaluate relevant off-target effects and separate the desired response from general cytotoxicity."
                  ],
                  [
                    "Investigate apparent SAR",
                    "Check identity, purity, solubility, aggregation, and assay interference. A dramatic potency change may reflect changed assay behavior rather than a new interaction."
                  ]
                ],
                "visual": {
                  "id": "measure",
                  "label": "Read the response",
                  "title": "One assay does not describe the whole compound",
                  "src": "assets/sar-principle-measure.svg",
                  "alt": "An analog branches into primary activity, cellular function, and selectivity measurements, with material quality and assay behavior checked across comparisons.",
                  "caption": "Combine complementary readouts on selected compounds. The exact panel depends on the question."
                }
              },
              {
                "title": "Choose the next experiment from the whole profile",
                "summary": "Trade-offs · synthetic access · uncertainty · computational support",
                "points": [
                  [
                    "Define what must improve",
                    "Read biological activity alongside measured properties. Decide which analog answers the next question and which assay can distinguish the competing explanations."
                  ],
                  [
                    "Use models to propose testable edits",
                    "Computational tools and AI can organize matched pairs and suggest missing experiments. Label predictions separately from measurements, consider uncertainty, and check synthetic feasibility."
                  ],
                  [
                    "Keep the stage decision explicit",
                    "During hit to lead, ask whether the series has a credible path forward. SAR continues during lead optimization; a development candidate requires a broader, integrated evidence package."
                  ]
                ],
                "visual": {
                  "id": "decide",
                  "label": "Choose the next test",
                  "title": "Let the discrepancy choose the experiment",
                  "src": "assets/sar-principle-decide.svg",
                  "alt": "An illustrative discrepancy, retained biochemical activity but weak cellular response, branches into exposure, biological context, and assay-artifact explanations, each with a different follow-up test.",
                  "caption": "Illustrative reasoning. These are possible explanations to distinguish, not an exhaustive list or a diagnosis."
                }
              }
            ],
            "nextTopic": {
              "id": "testing",
              "label": "Plan the testing funnel"
            }
          },
          {
            "id": "testing",
            "label": "Beyond potency: early profiling",
            "title": "A promising series needs more than potency",
            "intro": "Hit-to-lead work extends beyond potency. Teams assess relevant properties and liabilities early, and may perform exploratory PK or exposure-linked PD studies on selected compounds. The testing depends on the question; not every analog receives the same panel.",
            "summaryCards": [
              {
                "title": "Early properties and ADME",
                "text": "Solubility, permeability, or metabolic stability can help reveal limitations while the chemistry is still being explored. Choose tests for the series and intended use."
              },
              {
                "title": "Biology and selectivity",
                "text": "Confirm relevant function and investigate off-target effects or cytotoxicity. Useful controls and weaker analogs can be informative alongside potent compounds."
              },
              {
                "title": "Selected PK and PD studies",
                "text": "When the question and model justify them, measure exposure or an exposure-linked biological response on selected representatives."
              }
            ],
            "note": "Early profiling can be systematic without being identical for every compound. These activities become more extensive and integrated during lead optimization. Tool compounds are profiled for the experiment they support: a cellular tool and an in vivo tool can require different evidence. Being a research tool does not remove the need to establish suitable selectivity and exposure.",
            "caseNote": "The paper reports cellular functional SAR across compounds 1–16 and additional physicochemical, selectivity, and animal PK characterization of lead 16. It does not provide a uniform ADME/PK dataset for compounds 1–15. Compound 16’s solubility, exposure, and off-target liabilities helped define the subsequent optimization objectives.",
            "caseSource": {
              "label": "Hadida et al. · Table 2 (2014)",
              "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
            },
            "keep": "Select the experiment and the compound together: each study should resolve a useful uncertainty.",
            "sources": [
              1,
              2,
              7
            ],
            "nextTopic": {
              "id": "tool-compound",
              "label": "Next: tool compounds"
            },
            "related": [
              [
                "discovery-optimization",
                "Explore ADME and PK/PD in lead optimization"
              ]
            ]
          },
          {
            "id": "tool-compound",
            "label": "Tool compound",
            "title": "Where tool compounds fit",
            "toolCompounds": {
              "title": "Where tool compounds fit",
              "intro": "A tool compound is used to answer an experimental question—for example, whether inhibiting a target changes a disease-relevant phenotype. Tools can be developed deliberately or selected from an existing series; they need not become clinical candidates.",
              "keep": "Tool compound describes an experimental role, not an additional stage between a hit and a lead. A molecule can serve as both a research tool and a development lead if the evidence supports each use.",
              "details": [
                [
                  "What makes a reliable tool?",
                  "For a mechanistic claim, establish identity and purity, relevant activity, target engagement, and selectivity at the concentrations used. “Tool compound” is a broad label; a well-characterized chemical probe supports a specific target-based interpretation. Potency alone is insufficient."
                ],
                [
                  "Which properties does it need?",
                  "Match the profile to the experiment. A cell-based tool needs usable solubility, stability, and access to its target. An animal-study tool also needs suitable exposure, duration of target modulation, and tolerability for the experiment. A useful cellular tool may have poor oral bioavailability; that would still matter if oral dosing were required."
                ],
                [
                  "Which controls strengthen the conclusion?",
                  "Where available, use a structurally related inactive or less-active analog and a second active probe with a different scaffold. Concordant results strengthen the interpretation, but neither control guarantees the absence of off-target effects."
                ]
              ],
              "sources": [
                {
                  "label": "Chemical Probes Portal · Tools, probes, and drugs",
                  "url": "https://www.chemicalprobes.org/faq"
                },
                {
                  "label": "Choosing probe controls",
                  "url": "https://www.chemicalprobes.org/info/controls"
                },
                {
                  "label": "Requirements for animal studies",
                  "url": "https://www.chemicalprobes.org/info/guidelines-animals"
                }
              ]
            },
            "sources": []
          },
          {
            "id": "selection",
            "label": "Make the team decision",
            "title": "The team behind hit to lead",
            "intro": "Each function contributes evidence to one shared decision: which chemical series merits further optimization, and what should the team do next?",
            "detailsLeft": [
              [
                "Biology and assay confidence",
                "Confirm reproducible activity, relevant cellular function, appropriate controls, and an interpretable mechanism. Develop useful PD readouts even if an in vivo model is not ready."
              ],
              [
                "Chemistry and material readiness",
                "Assess synthetic access, purity, stereochemistry, stability, and supply for the next studies. Review novelty and intellectual-property questions with suitable expertise."
              ],
              [
                "Properties and exposure",
                "Explain early ADME trends and any exploratory PK. Distinguish measured data from predictions and identify a plan for gaps."
              ],
              [
                "Early safety and selectivity",
                "Investigate relevant off-target effects and cytotoxicity. Depending on the series and risks, selected compounds may enter hERG, CYP interaction, or other focused liability assays. Structural alerts need investigation; a clean small panel does not establish safety."
              ],
              [
                "The next decision",
                "State why the lead series is preferable, what a backup offers, the uncertainty that matters most, and the experiment that could change the decision."
              ]
            ],
            "rightTitle": "Who brings the evidence?",
            "rightIntro": "Functions collaborate throughout hit to lead. In a startup, several responsibilities may sit with one person or a specialist partner.",
            "details": [
              [
                "Medicinal and analytical chemistry",
                "Design and make analogs, verify material, interpret SAR, and assess routes that can supply the next studies."
              ],
              [
                "Biology and pharmacology",
                "Maintain assays, test mechanism and selectivity, and connect engagement to function in appropriate models."
              ],
              [
                "DMPK, bioanalysis, and formulation",
                "Investigate properties and exposure, measure drug in samples, and make dosing feasible for selected studies."
              ],
              [
                "Safety, computational, and project expertise",
                "Identify liabilities, organize data and predictive models, and integrate scientific priorities, resources, and advancement criteria."
              ]
            ],
            "note": "This is exploratory discovery work. It does not substitute for the formal nonclinical safety and quality work needed to support the proposed clinical study.",
            "keep": "Choose a promising series, document the uncertainties, and agree on the next experiments.",
            "sources": [
              1,
              2,
              7,
              6
            ],
            "related": [
              [
                "discovery-optimization",
                "Continue into lead optimization"
              ],
              [
                "candidate-nomination",
                "Understand DC nomination"
              ]
            ],
            "functionMap": {
              "center": "Hit to Lead",
              "question": "Advance the series?",
              "decision": "Integrate the evidence. Agree on the next experiments.",
              "caption": "Functions collaborate throughout the work. In a startup, one person may cover several roles, and specialist partners may provide additional expertise.",
              "functions": [
                {
                  "id": "chemistry",
                  "title": "Medicinal & analytical chemistry",
                  "purpose": "Make the chemistry informative",
                  "tasks": [
                    "Design and synthesize analogs to test SAR hypotheses.",
                    "Confirm identity, purity, and stereochemistry.",
                    "Assess stability, synthetic access, and material supply.",
                    "Connect structural changes to activity and properties."
                  ]
                },
                {
                  "id": "biology",
                  "title": "Biology & pharmacology",
                  "purpose": "Make the biological effect interpretable",
                  "tasks": [
                    "Develop and maintain relevant assays and controls.",
                    "Confirm activity, target engagement, and mechanism.",
                    "Test selectivity and cellular function in suitable models.",
                    "Choose informative PD and disease-model readouts."
                  ]
                },
                {
                  "id": "dmpk",
                  "title": "DMPK, bioanalysis & formulation",
                  "purpose": "Explain properties and exposure",
                  "tasks": [
                    "Assess relevant early ADME properties on selected compounds.",
                    "Measure drug concentrations with suitable analytical methods.",
                    "Enable dosing through practical formulation.",
                    "Design and interpret exploratory PK when needed."
                  ],
                  "definition": "DMPK: drug metabolism and pharmacokinetics."
                },
                {
                  "id": "safety",
                  "title": "Safety & toxicology",
                  "purpose": "Identify liabilities early",
                  "tasks": [
                    "Investigate cytotoxicity and relevant off-target signals.",
                    "Select focused liability assays according to the series.",
                    "Help interpret tolerability findings from exploratory studies.",
                    "Identify risks that need follow-up before advancement."
                  ]
                },
                {
                  "id": "project",
                  "title": "Project leadership & coordination",
                  "purpose": "Turn evidence into a decision",
                  "tasks": [
                    "Define advancement criteria and the next decision.",
                    "Integrate findings, uncertainty, and backup options.",
                    "Coordinate priorities, resources, partners, and timelines.",
                    "Document the rationale and assign the next experiments."
                  ]
                },
                {
                  "id": "computational",
                  "title": "Computational chemistry & data science",
                  "purpose": "Guide design and connect the data",
                  "tasks": [
                    "Analyze SAR and structure–property relationships.",
                    "Use structural models to propose testable chemical changes.",
                    "Organize assay data and identify informative comparisons.",
                    "Use predictive models or AI with explicit uncertainty."
                  ]
                }
              ]
            }
          }
        ],
        "vertexBranch": {
          "title": "Compare the amine-side SAR: compounds 7–16",
          "intro": "What changed in the chemistry? Use compound 7 as the reference and compare substituent identity, position, and ring changes. Potency stays visible for orientation; the next tab interprets the patterns.",
          "source": {
            "label": "Hadida et al. · Table 2 (2014)",
            "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
          },
          "note": "Structures redrawn from Table 2. Numbering identifies published compounds, not a step-by-step synthesis sequence. Compound 16 was selected as a lead; potency was only one part of that decision.",
          "compounds": [
            {
              "id": "7",
              "edit": "Unsubstituted phenyl · reference",
              "result": "1.3 ± 0.3 µM"
            },
            {
              "id": "8",
              "edit": "Ortho ethyl",
              "result": "0.2 ± 0.1 µM"
            },
            {
              "id": "9",
              "edit": "Ortho cyanomethyl",
              "result": "8.5 ± 1.1 µM"
            },
            {
              "id": "10",
              "edit": "2,6-Diethyl",
              "result": "1.5 ± 0.4 µM"
            },
            {
              "id": "11",
              "edit": "Ortho isopropyl",
              "result": "0.2 ± 0.05 µM"
            },
            {
              "id": "12",
              "edit": "Para ethyl",
              "result": "0.8 ± 0.02 µM"
            },
            {
              "id": "13",
              "edit": "Para isopropyl",
              "result": "0.2 ± 0.05 µM"
            },
            {
              "id": "14",
              "edit": "Naphthalen-2-yl",
              "result": "0.8 ± 0.3 µM"
            },
            {
              "id": "15",
              "edit": "Indol-5-yl",
              "result": "6.1 ± 0.9 µM"
            },
            {
              "id": "16",
              "edit": "Indol-6-yl · lead",
              "result": "0.1 ± 0.06 µM"
            }
          ],
          "response": {
            "title": "Which changes actually improved potency?",
            "intro": "Read selected comparisons from the same assay. Each pair answers a different SAR question.",
            "pairs": [
              {
                "title": "Position matters",
                "ids": [
                  "8",
                  "12"
                ],
                "question": "What happens when ethyl moves from ortho to para?",
                "observation": "Compound 8 has a fourfold lower mean EC₅₀ than 12. The same group at a different position gives a different response."
              },
              {
                "title": "More substitution is not always better",
                "ids": [
                  "8",
                  "10"
                ],
                "question": "Does adding a second ortho ethyl help?",
                "observation": "Compound 10 has a 7.5-fold higher mean EC₅₀ than 8. Adding a group reduced potency in this comparison."
              },
              {
                "title": "Attachment geometry can be decisive",
                "ids": [
                  "15",
                  "16"
                ],
                "question": "What changes when the indole attaches through C6 instead of C5?",
                "observation": "Compound 16 has a 61-fold lower mean EC₅₀ than 15. This sharp activity change makes the attachment position worth investigating."
              }
            ],
            "limit": "Ratios use the reported mean EC₅₀ values. These cellular results identify useful SAR patterns; they do not establish binding affinity, a specific protein contact, or statistical significance."
          },
          "nextTests": {
            "title": "Compound 16 is a lead. What needs testing next?",
            "intro": "After compound 16 was identified as a lead, broader testing revealed limitations in solubility, drug exposure, and selectivity. These findings helped define the priorities for further optimization.",
            "items": [
              {
                "title": "Solubility",
                "question": "Can enough compound be dissolved for meaningful experiments?",
                "test": "Measure solubility under relevant conditions; investigate solid-state packing and formulation options.",
                "finding": "The authors reported low aqueous and organic solubility and investigated its planar structure and crystal packing."
              },
              {
                "title": "Exposure",
                "question": "Can dosing produce useful, sustained exposure?",
                "test": "Use selected in vivo PK studies, alongside appropriate formulation and bioanalysis.",
                "finding": "Compound 16 had 11% oral bioavailability in rats and a 0.9-hour intravenous half-life in dogs."
              },
              {
                "title": "Selectivity",
                "question": "Which off-target activity needs attention?",
                "test": "Profile selected leads against a relevant panel, then investigate meaningful hits.",
                "finding": "A panel of more than 60 targets identified GABAₐ receptor binding activity, with an IC₅₀ of approximately 0.1 µM."
              }
            ],
            "note": "These are reported findings for lead 16, not evidence that every compound from 7–16 underwent the same panel. The next topic explains how teams choose which compounds receive deeper testing."
          }
        }
      },
      "hitExample": {
        "programs": [
          {
            "id": "ivacaftor",
            "label": "Ivacaftor",
            "title": "Vertex: two SAR branches leading to compound 16",
            "intro": "Starting from hit 1, the chemists explored the quinolinone core and the attached amine separately. Core exploration mapped features important for activity; amine exploration produced the indolyl lead 16.",
            "note": "Compounds 1–6 and 7–16 illustrate two SAR branches within the same discovery program. They are not a sequence in which each numbered compound was converted into the next. Table 2 reports selected examples from a larger amine screen.",
            "sources": [
              {
                "label": "Hadida et al. · Original ivacaftor discovery paper (2014)",
                "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
              }
            ],
            "stages": [
              {
                "id": "early-sar",
                "label": "Core branch · 1–6",
                "title": "Branch 1: test the quinolinone core",
                "observation": "Compounds 1–6 compare changes to the quinolinone region while retaining the dibenzylamide portion. This branch asks which core features can change without losing CFTR potentiation.",
                "hideSummaryDiagram": true,
                "meaning": "Systematic edits reveal tolerated and sensitive regions. Both retained activity and losses help define the next chemistry cycle.",
                "limit": "Functional SAR supports chemical hypotheses, not a proven binding pose. Changes in compound properties and assay behavior remain possible explanations for an activity shift.",
                "sources": [
                  {
                    "label": "Hadida et al. · Original ivacaftor discovery paper (2014)",
                    "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
                  }
                ],
                "figureHeading": "FROM THE DISCOVERY PAPER",
                "reading": [
                  [
                    "Follow the structural edit",
                    "Compare 1 with 2: removing the 4-oxo group shifted EC50 from 2.1 ± 1.4 to 16 ± 4 µM. Naphthol analog 6 retained micromolar activity (3.5 ± 0.6 µM), suggesting an alternative core worth considering."
                  ],
                  [
                    "Read the two kinds of measurement",
                    "Rows 3–5 report response at 30 µM relative to VRT-532, not EC50 values. They cannot be plotted as potencies beside 1, 2, and 6. The EC50 entries are means ± standard deviations from at least three determinations."
                  ],
                  [
                    "What this branch contributes",
                    "Several core changes reduced activity, while naphthol analog 6 retained micromolar activity. These findings map important features; they do not establish that every alternative core was abandoned."
                  ]
                ],
                "figures": [
                  {
                    "src": "assets/ivacaftor-table1-early-sar.png",
                    "width": 607,
                    "height": 1200,
                    "layout": "portrait",
                    "label": "Table 1 · Probe the hit’s core",
                    "alt": "Original Table 1: chemical structures of compounds 1–6 and CFTR potentiation in NIH-3T3 cells expressing F508del-CFTR. EC50 is reported in µM for 1, 2, and 6; rows 3–5 are single-concentration response measurements.",
                    "caption": "Change one region, then compare the response. These are analog comparisons, not a sequence of synthesis steps. Paper p. 9778."
                  }
                ]
              },
              {
                "id": "amine-sar",
                "label": "Amine branch · 7–16",
                "title": "Branch 2: explore the attached amine",
                "observation": "With the quinolinone-carboxamide framework retained, the team screened a diverse set of approximately 70 amines. Compounds 7–16 show part of that SAR: phenyl substitution and fused-ring changes culminate in indolyl compound 16.",
                "compoundGrid": true,
                "meaning": "The amine exploration produced lead 16 while retaining the core framework. Changes in substituent position and ring attachment gave markedly different cellular potencies.",
                "limit": "The displayed set is a selection from the published amine SAR, not the complete screen or a documented sequence of synthesis decisions.",
                "sources": [
                  {
                    "label": "Hadida et al. · Original ivacaftor discovery paper (2014)",
                    "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
                  }
                ]
              },
              {
                "id": "lead16",
                "label": "Lead 16",
                "title": "The amine branch delivers lead 16",
                "observation": "The authors explicitly identify the 6-indolyl derivative 16 as a lead. Its EC₅₀ of 0.1 ± 0.06 µM represents approximately a 20-fold potency improvement over screening hit 1 in the same NIH-3T3 CFTR potentiation assay.",
                "reading": [
                  [
                    "The branch that yielded the lead",
                    "Compound 16 retains the quinolinone-carboxamide framework and uses an indol-6-yl amine fragment."
                  ],
                  [
                    "The boundary of this example",
                    "Lead identification provides the starting point for further optimization. Improved potency alone does not establish a development-ready profile."
                  ]
                ],
                "meaning": "Amine-side SAR produced a potent lead for broader characterization and further chemistry.",
                "limit": "The publication identifies a lead; it does not describe a formal internal stage-gate meeting.",
                "hideSummaryDiagram": true,
                "figureHeading": "LEAD IDENTIFIED",
                "figures": [
                  {
                    "src": "assets/vertex-hit-analog-16.svg",
                    "width": 420,
                    "height": 240,
                    "layout": "lead",
                    "label": "Compound 16 · Lead",
                    "alt": "Lead compound 16. The indole extension relative to compound 7 is highlighted in amber.",
                    "caption": "EC₅₀ 0.1 ± 0.06 µM; mean ± SD from at least three determinations. Table 2 and text, pp. 9777–9778."
                  }
                ],
                "sources": [
                  {
                    "label": "Hadida et al. · Original ivacaftor discovery paper (2014)",
                    "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
                  }
                ],
                "figureCredit": "Structure redrawn from Hadida et al., Table 2. Amber highlights the added ring atoms and bonds relative to compound 7."
              }
            ],
            "figureCredit": "Source: Hadida et al., Journal of Medicinal Chemistry 2014, 57, 9776–9795. Panels extracted from the supplied PDF; original structures, units, compound numbers, and footnotes retained.",
            "branchMap": [
              {
                "stage": "early-sar",
                "label": "Core exploration · 1–6",
                "text": "Vary the quinolinone region; retain the dibenzylamide portion.",
                "result": "Learn which core features support activity."
              },
              {
                "stage": "amine-sar",
                "label": "Amine exploration · 7–16",
                "text": "Retain the quinolinone-carboxamide framework; vary the attached amine.",
                "result": "This branch yields lead 16."
              }
            ]
          },
          {
            "id": "imatinib",
            "label": "Imatinib",
            "title": "Imatinib: SAR redirects the activity profile",
            "intro": "Substitutions in the phenylaminopyrimidine class changed cellular activity and shifted kinase inhibition from PKC toward ABL and PDGFR.",
            "note": "These comparisons illustrate how SAR can reveal a direction worth pursuing. Lydon presents them within an optimization history and does not identify a formal hit-to-lead endpoint. The property-improvement example continues in Lead Optimization.",
            "sources": [
              {
                "label": "Lydon · Discovery-team account and Figure 3 (2009, PDF)",
                "url": "https://laskerfoundation.org/wp-content/uploads/2021/01/2009_c_lydon.pdf"
              }
            ],
            "stages": [
              {
                "id": "scaffold",
                "label": "Explore the scaffold",
                "title": "Use substitutions to learn what the series can do",
                "observation": "A pyridyl substitution improved cellular activity; adding a benzamide group introduced activity against ABL and PDGFR tyrosine kinases.",
                "diagram": [
                  [
                    "Starting core",
                    "Phenylaminopyrimidine"
                  ],
                  [
                    "Chemical edits",
                    "Pyridyl / benzamide"
                  ],
                  [
                    "Readouts",
                    "Cell activity / kinase profile"
                  ]
                ],
                "meaning": "An analog program can reveal a useful direction beyond the initial screen. Compare the activity profile as well as potency when deciding which branch of a series to pursue.",
                "limit": "A change in cellular activity does not by itself identify its cause. Binding, permeability, stability, and assay conditions can all affect the readout.",
                "sources": [
                  {
                    "label": "Lydon · Figure 3 and discovery narrative (PDF)",
                    "url": "https://laskerfoundation.org/wp-content/uploads/2021/01/2009_c_lydon.pdf"
                  },
                  {
                    "label": "Zimmermann et al. · Original PKC-series chemistry (1996)",
                    "url": "https://pubmed.ncbi.nlm.nih.gov/8764886/"
                  },
                  {
                    "label": "PubChem · Imatinib structure (CID 5291)",
                    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5291"
                  }
                ],
                "hideSummaryDiagram": true,
                "figureHeading": "LOCATE THE CHANGE · IMATINIB",
                "figures": [
                  {
                    "src": "assets/imatinib-sar-scaffold.svg",
                    "width": 900,
                    "height": 360,
                    "label": "Pyridyl and benzamide regions",
                    "alt": "Final imatinib structure. Blue: pyridyl group. Teal: benzamide region.",
                    "caption": "Blue: pyridyl group. Teal: benzamide region.",
                    "layout": "wide"
                  }
                ]
              },
              {
                "id": "selectivity",
                "label": "Tune selectivity",
                "title": "A small edit can change the target profile",
                "observation": "The ‘flag-methyl’ substitution on the anilino phenyl ring suppressed PKC inhibition while enhancing ABL and PDGFR inhibition.",
                "diagram": [
                  [
                    "Chemical edit",
                    "Add a methyl group"
                  ],
                  [
                    "Reduced activity",
                    "PKC inhibition"
                  ],
                  [
                    "Enhanced activity",
                    "ABL / PDGFR inhibition"
                  ]
                ],
                "meaning": "Selectivity can be an explicit SAR objective. This is the kind of comparison that makes a series interpretable: one region can influence the balance of activities.",
                "limit": "This profile is not exclusive to ABL and does not establish safety. A selectivity claim is bounded by the targets, concentrations, and assays tested. The diagram summarizes observations, not a complete synthesis route.",
                "hideSummaryDiagram": true,
                "figureHeading": "LOCATE THE CHANGE · IMATINIB",
                "figures": [
                  {
                    "src": "assets/imatinib-sar-selectivity.svg",
                    "width": 900,
                    "height": 360,
                    "label": "The flag-methyl substitution",
                    "alt": "Final imatinib structure. Amber: the methyl substituent on the anilino phenyl ring.",
                    "caption": "Amber: the methyl substituent on the anilino phenyl ring.",
                    "layout": "wide"
                  }
                ],
                "sources": [
                  {
                    "label": "Lydon · Discovery-team account and Figure 3 (2009, PDF)",
                    "url": "https://laskerfoundation.org/wp-content/uploads/2021/01/2009_c_lydon.pdf"
                  },
                  {
                    "label": "PubChem · Imatinib structure (CID 5291)",
                    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5291"
                  }
                ]
              }
            ],
            "figureCredit": "Original structural diagrams of imatinib (free base), drawn from PubChem CID 5291. Highlights identify regions discussed in Lydon’s Figure 3; these are views of the final molecule, not synthetic intermediates."
          }
        ]
      }
    },
    {
      "id": "discovery-optimization",
      "category": "discovery",
      "title": "Lead Optimization",
      "goal": "Explain how a program team uses SAR and coordinated profiling to improve a lead series toward an agreed development-candidate profile.",
      "concept": "Hit to lead identifies a series worth investing in; lead optimization refines it toward a profile suitable for development. SAR and the design–make–test–analyze cycle continue while the team balances biological activity, selectivity, exposure, safety signals, and feasible formulation and synthesis. The intended use guides these trade-offs. Development-candidate (DC) nomination is the later internal selection decision. Early development work informs that choice and need not wait for a formal nomination meeting. State what is measured, what is predicted, and which remaining risk could change the decision.",
      "takeaway": "Every chemistry cycle should improve a relevant profile or resolve an uncertainty that changes the program decision.",
      "exampleTitle": "Vertex: from lead 16 to DC compound 48",
      "example": "Start with the lead’s liabilities, choose where to modify it, and compare the profiles that emerge.",
      "worked": "Use the measured liability to define the next comparison, and integrate the resulting profile.",
      "diagram": [
        [
          "Lead A",
          "5 nM · variable exposure"
        ],
        [
          "Lead B",
          "30 nM · reproducible exposure"
        ]
      ],
      "exampleSteps": [
        [
          "Define the objective",
          "Run an interpretable oral PK/PD experiment."
        ],
        [
          "Compare relevant evidence",
          "Exposure reproducibility matters alongside cellular potency."
        ],
        [
          "Preserve uncertainty",
          "Prioritize B for this step while retaining A and documenting unresolved risks."
        ]
      ],
      "question": {
        "title": "What should guide the next SAR cycle?",
        "prompt": "The team has a reproducible submicromolar series. Several properties remain uncertain. Which approach best supports lead optimization?",
        "options": [
          [
            "Define the required profile, prioritize the limiting questions, and design analogs with a matched testing plan.",
            "Correct. Coordinate the chemistry and measurements around what could change the decision, while preserving useful properties and documenting unknowns.",
            true
          ],
          [
            "Focus on enzyme potency until the series reaches single-digit nanomolar activity.",
            "No. No universal potency threshold replaces the need to understand cellular activity, selectivity, disposition, safety, and practical chemistry.",
            false
          ],
          [
            "Run the full animal efficacy and safety package on every new analog.",
            "No. Use a risk-informed testing strategy. Deeper studies belong on informative compounds with a defined question; some liabilities warrant earlier targeted testing.",
            false
          ]
        ],
        "hint": "Choose the plan that joins the intended treatment, chemical hypotheses, and informative experiments."
      },
      "sources": [
        {
          "label": "FDA: moving from a viable candidate to evidence supporting human investigation",
          "url": "https://www.fda.gov/drugs/types-applications/investigational-new-drug-ind-application"
        },
        {
          "label": "Assay Guidance Manual: SAR, properties, and PK during lead optimization",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK326710/"
        },
        {
          "label": "NIDDK · Hit-to-lead research and SAR",
          "url": "https://www.niddk.nih.gov/research-funding/research-programs/translational-research-therapeutic-discovery-development/hit-to-lead"
        },
        {
          "label": "Assay Guidance Manual · Discovery stages and progression decisions",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK92015/"
        },
        {
          "label": "Assay Guidance Manual · Early ADME and PK assessment",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK326710/"
        },
        {
          "label": "FDA · The separate evidence needed for an IND",
          "url": "https://www.fda.gov/drugs/types-applications/investigational-new-drug-ind-application"
        },
        {
          "label": "NCATS · Discovery activities and progressive testing",
          "url": "https://toolkit.ncats.nih.gov/module/getting-started/understand-the-rd-process/discovery-of-therapeutic-approach/"
        },
        {
          "label": "FDA–NIH BEST · Response and pharmacodynamic biomarkers",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK402286/"
        },
        {
          "label": "Assay Guidance Manual · Design and validation of in vivo assays",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK92013/"
        },
        {
          "label": "Hadida et al. · Ivacaftor chemistry and selective compound profiling",
          "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
        },
        {
          "label": "Owen et al., Science (2021) · Figure 1",
          "url": "https://doi.org/10.1126/science.abl4784",
          "title": "Owen et al., Science (2021) · Figure 1"
        },
        {
          "label": "Holford · Pharmacodynamic principles and immediate effects",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7033401/"
        },
        {
          "label": "Wright et al. · Understanding the time course of pharmacological effect",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3099368/"
        },
        {
          "label": "Owen et al., Science (2021) · Figures 3–4",
          "url": "https://doi.org/10.1126/science.abl4784"
        },
        {
          "label": "FDA / ICH · Integrated cardiac risk assessment",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/e14-and-s7b-clinical-and-nonclinical-evaluation-qtqtc-interval-prolongation-and-proarrhythmic"
        },
        {
          "label": "FDA · Chemistry, manufacturing, and control information for INDs",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information"
        },
        {
          "label": "WIPO · Patentability requirements",
          "url": "https://www.wipo.int/en/web/patents/protection"
        }
      ],
      "leadGuide": {
        "objective": "From a lead series to a development candidate: place the stage, define the goal, balance trade-offs, and make the decision.",
        "navigationLabel": "Lead optimization learning topics",
        "caseSource": {
          "label": "Hadida et al. · Table 2 (2014)",
          "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
        },
        "topics": [
          {
            "id": "stages",
            "label": "Place the stage",
            "title": "From an improvable series to a development candidate",
            "introEmphasis": "SAR continues",
            "intro": "Lead optimization builds on a credible lead series. SAR continues, but the team now works toward an agreed development profile across activity, selectivity, exposure, safety, and practical chemistry.",
            "strategic": true,
            "sources": [
              3,
              4,
              0
            ],
            "stageMap": [
              {
                "title": "Hit to lead",
                "question": "Is this a credible, improvable series?",
                "work": "Establish interpretable SAR, relevant activity, chemical tractability, and an initial view of properties and liabilities.",
                "output": "A lead series and a plan for its unresolved questions."
              },
              {
                "title": "Lead optimization",
                "question": "Can this series meet the intended development profile?",
                "work": "Design and compare analogs across the whole profile. Resolve the liabilities and uncertainties that could prevent useful treatment.",
                "output": "A well-characterized candidate proposal, often with backup options.",
                "current": true
              },
              {
                "title": "DC nomination",
                "question": "Which molecule will the team commit to developing?",
                "work": "Review the evidence against agreed criteria, document remaining risks, and select the molecule for the next development studies.",
                "output": "A named candidate and a development plan—not a completed IND."
              }
            ],
            "stageNote": "These are working definitions, not FDA-defined milestones. Activities overlap: ADME, selectivity, and exploratory PK/PD can contribute before lead optimization. Potency alone does not define the transition."
          },
          {
            "id": "profile",
            "label": "Define the goal",
            "title": "Define what the drug must achieve",
            "intro": "Use hit-to-lead findings to decide what to preserve, what to improve, and what to test next.",
            "strategic": true,
            "profileFlow": [
              {
                "id": "use",
                "label": "Starting series",
                "brief": "Carry forward useful activity, interpretable SAR, known liabilities, and untested properties."
              },
              {
                "id": "requirements",
                "label": "Required profile",
                "brief": "Define the activity, exposure, safety, and delivery needed for the intended treatment."
              },
              {
                "id": "risk",
                "label": "Biggest risk",
                "brief": "Identify the gap most likely to prevent the lead series from reaching that goal."
              },
              {
                "id": "test",
                "label": "Next experiment",
                "brief": "Design analogs and tests that address the gap while preserving useful properties."
              },
              {
                "id": "decide",
                "label": "Decision",
                "brief": "Compare with the starting leads. Continue, redesign, or stop the chemical direction."
              }
            ],
            "sources": [
              3,
              4,
              0
            ],
            "vertexProfile": {
              "title": "Vertex: let the liabilities of a lead guide the path to DC",
              "intro": "Hit-to-lead work identified compound 16 with CFTR activity around 0.1 µM. Broader profiling of the lead then revealed liabilities that helped guide the lead-optimization effort.",
              "caption": "Compound 16 · from a lead’s measured liabilities to optimization questions",
              "rows": [
                [
                  "Off-target activity",
                  "GABAₐ benzodiazepine-receptor binding IC₅₀ ≈ 0.1 µM.",
                  "Can structural changes reduce GABAₐ activity while preserving or improving CFTR potentiation?"
                ],
                [
                  "Poor solubility",
                  "Low aqueous and organic solubility. Thermodynamic solubility in water was not detectable; ethanol: 1.2 mg/mL; Miglyol 810: 0.057 mg/mL.",
                  "Can changes to conformation and crystal packing improve useful solubility without sacrificing activity?"
                ],
                [
                  "Low oral bioavailability",
                  "Rat oral bioavailability: 11%.",
                  "What limits systemic availability, and which chemistry or formulation changes could improve it? Low oral F alone does not identify the cause."
                ],
                [
                  "Short duration of exposure",
                  "Dog IV half-life: 0.9 h, with clearance of 17 mL/min/kg.",
                  "Can the disposition profile support useful exposure? Compare clearance, distribution, and exposure as the series evolves."
                ]
              ],
              "takeaway": "The lead supplies both the starting activity and the problems that guide the next SAR cycle.",
              "note": "The paper describes this profiling after lead identification. The final column translates the findings into learning questions; it is not a published set of DC acceptance criteria. CFTR activity and GABAₐ binding were measured in different assays.",
              "source": {
                "label": "Hadida et al., J. Med. Chem. (2014) · Tables 2–3, profiling text, footnotes 17–18",
                "url": "https://doi.org/10.1021/jm5012808"
              }
            }
          },
          {
            "id": "balance",
            "label": "Balance & trade-offs",
            "title": "One molecule. Several connected requirements.",
            "intro": "Every structural change can affect more than one property. Read the results together and choose the next SAR cycle around the requirement that matters most.",
            "balanceMap": true,
            "dimensions": [
              {
                "id": "activity",
                "label": "Activity & selectivity",
                "question": "Useful biology, fewer unwanted activities",
                "tradeoff": "A potency gain may also strengthen unwanted activity. Compare mechanisms and assay conditions before treating a lower IC₅₀ as progress.",
                "sources": [
                  3,
                  4,
                  6
                ],
                "measures": [
                  "Reproducible activity, purity, and assay controls",
                  "Cellular engagement and functional response",
                  "Relevant target-family and off-target activity",
                  "Activity in disease-relevant models"
                ],
                "interpret": "Does the structural change improve the intended mechanism in the relevant cells? A biochemical-to-cellular potency gap has several possible causes.",
                "nextDesign": "Use matched pairs and informative controls to separate effects. Preserve useful selectivity; track molecular size and lipophilicity alongside potency."
              },
              {
                "id": "adme",
                "label": "Properties & ADME",
                "question": "Can the molecule reach the right place?",
                "tradeoff": "Increasing polarity may improve solubility while reducing permeability. Slower turnover can help exposure but may also increase persistence of unwanted effects.",
                "sources": [
                  1,
                  4
                ],
                "measures": [
                  "Solubility, pKa, logD, and stability",
                  "Permeability, transport, and tissue / plasma binding",
                  "Turnover, metabolites, and relevant elimination routes",
                  "CYP / transporter interaction risks"
                ],
                "interpret": "Which property could limit delivery or exposure? Interpret each measurement in its assay conditions; distinguish predictions from measured results.",
                "nextDesign": "Test edits to polarity, ionization, conformation, or metabolic soft spots. Check whether the intended property gain preserves activity and the rest of the profile."
              },
              {
                "id": "pkpd",
                "label": "PK & PD",
                "question": "Does exposure produce the intended effect?",
                "tradeoff": "Greater exposure is useful only if it supports the intended biology at tolerable conditions. Plasma exposure, mechanistic PD, and disease benefit are distinct measurements.",
                "sources": [
                  4,
                  7,
                  8,
                  11,
                  12
                ],
                "measures": [
                  "Concentration over time: Cmax, AUC, clearance, half-life",
                  "Unbound exposure and relevant tissue access",
                  "Depth and duration of target engagement / PD",
                  "Efficacy and tolerability at measured exposures"
                ],
                "interpret": "Is the limitation delivery, duration, or the biological response? Compare species, dose, route, and formulation; make assumptions in human translation explicit.",
                "nextDesign": "Change clearance, tissue access, binding kinetics, or metabolite formation according to the evidence. Measure response over time rather than optimizing plasma exposure alone."
              },
              {
                "id": "safety",
                "label": "Early safety",
                "question": "Can useful and harmful effects separate?",
                "tradeoff": "A change that improves potency or PK may reduce the safety margin. Negative screening results reduce specific concerns but do not establish overall safety.",
                "sources": [
                  3,
                  14,
                  0
                ],
                "measures": [
                  "Normal-tissue and off-target effects",
                  "Relevant hERG, genotoxicity, liver, or reactivity screens",
                  "Exposure associated with useful and unwanted effects",
                  "Severity, duration, and reversibility of findings"
                ],
                "interpret": "Does the liability follow the target, scaffold, substituent, or metabolite? Structural alerts and screening results identify questions; they do not settle overall safety.",
                "nextDesign": "Compare analogs that test the suspected cause. Move critical safety assays earlier, and redirect or stop a chemical direction when the liability outweighs its benefits."
              }
            ],
            "sources": [
              3,
              4,
              6,
              1,
              7,
              8,
              11,
              12,
              14,
              0
            ]
          },
          {
            "id": "developability",
            "label": "Practical development",
            "title": "Can we make it and use it reliably?",
            "intro": "As activity improves, check that the compound can support the next studies.",
            "strategic": true,
            "sources": [
              3,
              15,
              16
            ],
            "practicalFlow": [
              {
                "title": "Make it",
                "question": "Can we supply enough compound?",
                "text": "Find a repeatable synthesis that gives enough material for the planned studies."
              },
              {
                "title": "Know the material",
                "question": "Are we testing what we think we are?",
                "text": "Confirm identity, purity, and stability so results can be compared across batches."
              },
              {
                "title": "Deliver the dose",
                "question": "Can we give the intended dose?",
                "text": "Find a workable formulation that keeps the compound stable and delivers it by the planned route."
              }
            ],
            "decision": "If a practical barrier persists, change the chemistry, improve the formulation, or prioritize another analog.",
            "scope": "During lead optimization, identify these barriers early. A finished commercial manufacturing process is not required.",
            "ipNote": "Alongside this work, IP specialists assess patentability and freedom to operate."
          },
          {
              "id": "optimization",
              "label": "Ready for DC nomination?",
              "title": "Ready for DC nomination?",
              "intro": "Bring the goal, the trade-offs, and practical feasibility together. Does the combined evidence support taking this compound forward?",
              "strategic": true,
              "nominationHandoff": true,
              "outcomes": [
                {
                  "id": "advance",
                  "title": "Advance for nomination",
                  "text": "The overall profile supports further development. Bring the evidence and remaining risks to the candidate review."
                },
                {
                  "id": "continue",
                  "title": "Continue optimization",
                  "text": "Specific gaps remain. Set the next chemistry or testing priority around the gap most likely to change the decision."
                },
                {
                  "id": "redirect",
                  "title": "Stop or change direction",
                  "text": "The series cannot meet the intended profile. Reconsider the chemistry or the program strategy."
                }
              ],
              "note": "DC nomination is an internal development decision. It does not mean the IND package is complete or human dosing is authorized.",
              "related": [
                [
                  "candidate-nomination",
                  "Explore DC nomination"
                ]
              ],
              "sources": [
                3,
                4,
                6,
                0
              ]
            }
        ],
        "strategicOverview": true
      },
      "hitExample": {
        "programs": [
          {
            "id": "ivacaftor",
            "label": "Ivacaftor",
            "title": "Vertex: from lead 16 to ivacaftor (48)",
            "intro": "Lead 16 supplied activity and exposed liabilities. Follow the chemistry branches, then read the activity, selectivity, properties, and exposure evidence that supported selecting 48.",
            "note": "Compound numbers identify published analogs, not a dated experimental sequence. The paper shows selected experiments, not the complete internal development record. The decision lessons below interpret the authors’ reported results.",
            "sources": [
              {
                "label": "Hadida et al. · Original ivacaftor discovery paper (2014)",
                "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
              }
            ],
            "stages": [
              {
                "id": "lead-profile",
                "label": "Start with lead 16",
                "title": "Define what lead 16 still needs",
                "observation": "Broader profiling of lead 16 revealed low solubility, GABAₐ benzodiazepine-receptor binding activity, and exposure limitations. These findings established objectives beyond cellular potency.",
                "reading": [
                  [
                    "Set three explicit chemistry objectives",
                    "The authors sought a further tenfold increase in potency, reduced GABAₐ activity, and added three-dimensionality to improve organic solubility."
                  ],
                  [
                    "Investigate the physical cause",
                    "Lead 16 had undetectable thermodynamic water solubility, ethanol solubility of 1.2 mg/mL, and Miglyol 810 solubility of 0.057 mg/mL. Crystal structure and calculations supported a planar, internally hydrogen-bonded conformation. Its measured logP was 3.2; the quoted cLogP of 1.6 depends on the tautomer used."
                  ],
                  [
                    "Measure the off-target liability",
                    "In a panel of more than 60 targets, 16 showed GABAₐ benzodiazepine-receptor binding with IC₅₀ ≈ 0.1 µM. This is a different assay from CFTR potentiation."
                  ],
                  [
                    "Establish the PK baseline",
                    "Rat IV: dose 2.5 mg/kg, clearance 28 mL/min/kg, half-life 1.3 h, Vss 2.4 L/kg; oral F 11%. Dog IV: dose 1 mg/kg, clearance 17 mL/min/kg, half-life 0.9 h, Vss 1.6 L/kg; oral F not determined."
                  ],
                  [
                    "Source",
                    "Tables 2–3, Figure 3, pp. 9778–9779, and footnotes 15, 17–18. Low oral F identifies a problem; it does not by itself distinguish poor absorption from first-pass loss."
                  ]
                ],
                "meaning": "The next chemistry cycle needed to improve the overall profile while retaining useful CFTR potentiation.",
                "limit": "The reported cellular activity and animal PK are separate measurements, not a paired in vivo PK/PD study.",
                "hideSummaryDiagram": true,
                "figureHeading": "LEAD IDENTIFIED",
                "figures": [
                  {
                    "src": "assets/vertex-hit-analog-16.svg",
                    "width": 420,
                    "height": 240,
                    "layout": "lead",
                    "label": "Compound 16 · Lead",
                    "alt": "Lead compound 16. The indole extension relative to compound 7 is highlighted in amber.",
                    "caption": "EC₅₀ 0.1 ± 0.06 µM; mean ± SD from at least three determinations. Table 2 and text, pp. 9777–9778."
                  }
                ],
                "sources": [
                  {
                    "label": "Hadida et al. · Original ivacaftor discovery paper (2014)",
                    "url": "https://pubs.acs.org/doi/10.1021/jm5012808"
                  }
                ],
                "figureCredit": "Structure redrawn from Hadida et al., Table 2. Amber highlights the added ring atoms and bonds relative to compound 7."
              },
              {
                "id": "profile",
                "label": "Follow the chemistry · 16–48",
                "title": "Six decisions that shaped the lead-optimization path",
                "observation": "Preserve what works, test alternatives, and carry more than one promising branch into broader profiling.",
                "decisionKind": "chemistry",
                "assayNote": "NIH-3T3 cells expressing F508del-CFTR; EC₅₀ in µM unless stated otherwise. Values are mean ± SD, at least three determinations. Single-concentration responses are % of the VRT-532 reference response at 30 µM; they are not EC₅₀ values.",
                "decisions": [
                  {
                    "id": "recognize",
                    "label": "Map essential features",
                    "range": "16–22",
                    "title": "Protect useful activity while testing alternative ring systems",
                    "question": "Can the indole be made less planar or more polar without losing CFTR activity?",
                    "action": "Keep the indole NH available and retain indoline 17 as a useful alternative starting point; do not assume that adding polarity will improve the whole profile.",
                    "table": {
                      "title": "Explore the ring around lead 16",
                      "caption": "Explore the ring around lead 16",
                      "columns": [
                        "Compound",
                        "Change from 16",
                        "Measured activity"
                      ],
                      "rows": [
                        [
                          "16",
                          "Indole lead",
                          "0.1 ± 0.06 µM"
                        ],
                        [
                          "17",
                          "Reduce indole to indoline",
                          "0.4 ± 0.08 µM"
                        ],
                        [
                          "18",
                          "Methylate indole nitrogen",
                          "6.4 ± 1.1 µM"
                        ],
                        [
                          "19",
                          "Azaindole",
                          "13% at 30 µM"
                        ],
                        [
                          "20",
                          "Indazole",
                          "5.6 ± 0.2 µM"
                        ],
                        [
                          "21",
                          "Benzimidazole",
                          "12% at 30 µM"
                        ],
                        [
                          "22",
                          "Oxyindole",
                          "21% at 30 µM"
                        ]
                      ]
                    },
                    "notes": [
                      "17 retained submicromolar activity and motivated the later ring-opening branch.",
                      "18 and the more polar heterocycles lost substantial activity. The proposed NH interaction was a SAR hypothesis, not a directly observed target–ligand hydrogen bond."
                    ],
                    "limit": "These analogs surround lead identification in the paper’s narrative. No solubility or PK panel is reported for each of 17–22; added polarity is a design intent, not a demonstrated ADME improvement.",
                    "source": "Table 2 and text, pp. 9777–9779.",
                    "figure": {
                      "src": "assets/vertex-lead-16-22.svg",
                      "label": "Table 2 · Shared scaffold and structures 16–22 (selected rows)",
                      "width": 241,
                      "height": 318,
                      "alt": "Original Table 2 excerpt showing the shared quinolinone scaffold, the ring structures of compounds 16 through 22, and their measured CFTR potentiation activity. Includes EC50 values and single-concentration response footnotes."
                    }
                  },
                  {
                    "id": "linker",
                    "label": "Test the linker",
                    "range": "23–26",
                    "title": "Use an unsuccessful design to define what should stay",
                    "question": "Would disrupting the internal hydrogen bond reduce planarity and improve solubility?",
                    "action": "Retain the quinolinone–amide portion and redirect optimization toward the amine-derived region.",
                    "table": {
                      "title": "Linker modifications",
                      "caption": "Linker modifications",
                      "columns": [
                        "Compound",
                        "Linker",
                        "Measured activity"
                      ],
                      "rows": [
                        [
                          "16",
                          "Amide: –CONH–",
                          "0.1 ± 0.06 µM"
                        ],
                        [
                          "23",
                          "Ester: –CO₂–",
                          "19% at 30 µM"
                        ],
                        [
                          "24",
                          "Sulfonamide: –SO₂NH–",
                          "1% at 30 µM"
                        ],
                        [
                          "25",
                          "Reduced linker: –CH₂NH–",
                          "1% at 30 µM"
                        ],
                        [
                          "26",
                          "Reverse amide: –NHCO–",
                          "8% at 30 µM"
                        ]
                      ]
                    },
                    "notes": [
                      "X-ray crystallography showed a near-planar solid-state conformation of 16. Calculations found a favored intramolecular hydrogen bond and a rotational barrier above 10 kcal/mol.",
                      "All four linker alternatives produced weak responses. A plausible property hypothesis was rejected because useful activity was lost."
                    ],
                    "limit": "The paper does not report improved solubility for these linker analogs. The crystal structure is of compound 16 itself, not a CFTR–ligand complex.",
                    "source": "Figure 3 and Table 4, p. 9779.",
                    "figure": {
                      "src": "assets/vertex-lead-linkers.svg",
                      "label": "Table 4 · Test the linker",
                      "width": 244,
                      "height": 185,
                      "alt": "Table 4 · Test the linker from Hadida et al. Original chemical structures and assay data."
                    },
                    "molecules": [
                      {
                        "number": 16,
                        "src": "assets/vertex-lead-compound-16.svg",
                        "edit": "Amide: –CONH–",
                        "metric": "EC₅₀",
                        "activity": "0.1 ± 0.06 µM",
                        "badge": "Starting lead"
                      },
                      {
                        "number": 23,
                        "src": "assets/vertex-lead-compound-23.svg",
                        "edit": "Ester: –CO₂–",
                        "metric": "Response",
                        "activity": "19% at 30 µM"
                      },
                      {
                        "number": 24,
                        "src": "assets/vertex-lead-compound-24.svg",
                        "edit": "Sulfonamide: –SO₂NH–",
                        "metric": "Response",
                        "activity": "1% at 30 µM"
                      },
                      {
                        "number": 25,
                        "src": "assets/vertex-lead-compound-25.svg",
                        "edit": "Reduced linker: –CH₂NH–",
                        "metric": "Response",
                        "activity": "1% at 30 µM"
                      },
                      {
                        "number": 26,
                        "src": "assets/vertex-lead-compound-26.svg",
                        "edit": "Reverse amide: –NHCO–",
                        "metric": "Response",
                        "activity": "8% at 30 µM"
                      }
                    ],
                    "structureNote": "Complete structures redrawn from the paper. Amber marks the linker or substituent being explored; unchanged reference structures and hydrogen-only positions are unhighlighted."
                  },
                  {
                    "id": "indole",
                    "label": "Grow the indole",
                    "range": "27–30",
                    "title": "Keep an active branch while exploring a second route",
                    "question": "Can substituents at the indole 3- or 5-position improve activity?",
                    "action": "Carry the potent indoles 28 and 30 into human airway-cell and rat PK profiling, alongside the ring-opened series.",
                    "table": {
                      "title": "Indole substitutions",
                      "caption": "Indole substitutions",
                      "columns": [
                        "Compound",
                        "Position 3",
                        "Position 5",
                        "EC₅₀ (µM)"
                      ],
                      "rows": [
                        [
                          "16",
                          "H",
                          "H",
                          "0.1 ± 0.06"
                        ],
                        [
                          "27",
                          "Ethyl",
                          "H",
                          "0.1 ± 0.02"
                        ],
                        [
                          "28",
                          "tert-Butyl",
                          "H",
                          "0.009 ± 0.004"
                        ],
                        [
                          "29",
                          "H",
                          "Ethyl",
                          "0.020 ± 0.003"
                        ],
                        [
                          "30",
                          "H",
                          "tert-Butyl",
                          "0.011 ± 0.002"
                        ]
                      ]
                    },
                    "notes": [
                      "Changing position and group size mattered: 27 stayed near 16, while 28 and 30 achieved roughly tenfold lower EC₅₀.",
                      "This was one of two parallel chemistry approaches. The indole branch did not simply disappear when ring-opened analogs were made."
                    ],
                    "limit": "Greater potency does not demonstrate improved solubility, selectivity, or clearance. Table 9 supplies the later comparison for selected indoles.",
                    "source": "Table 5, p. 9779; selected follow-up in Table 9.",
                    "figure": {
                      "src": "assets/vertex-lead-indoles.svg",
                      "label": "Table 5 · Preserve the indole branch",
                      "width": 244,
                      "height": 179,
                      "alt": "Table 5 · Preserve the indole branch from Hadida et al. Original chemical structures and assay data."
                    },
                    "molecules": [
                      {
                        "number": 16,
                        "src": "assets/vertex-lead-compound-16.svg",
                        "edit": "Unsubstituted indole · lead",
                        "metric": "EC₅₀",
                        "activity": "0.1 ± 0.06 µM",
                        "badge": "Starting lead"
                      },
                      {
                        "number": 27,
                        "src": "assets/vertex-lead-compound-27.svg",
                        "edit": "Indole 3-ethyl",
                        "metric": "EC₅₀",
                        "activity": "0.1 ± 0.02 µM"
                      },
                      {
                        "number": 28,
                        "src": "assets/vertex-lead-compound-28.svg",
                        "edit": "Indole 3-tert-butyl",
                        "metric": "EC₅₀",
                        "activity": "0.009 ± 0.004 µM"
                      },
                      {
                        "number": 29,
                        "src": "assets/vertex-lead-compound-29.svg",
                        "edit": "Indole 5-ethyl",
                        "metric": "EC₅₀",
                        "activity": "0.020 ± 0.003 µM"
                      },
                      {
                        "number": 30,
                        "src": "assets/vertex-lead-compound-30.svg",
                        "edit": "Indole 5-tert-butyl",
                        "metric": "EC₅₀",
                        "activity": "0.011 ± 0.002 µM"
                      }
                    ],
                    "structureNote": "Complete structures redrawn from the paper. Amber marks the linker or substituent being explored; unchanged reference structures and hydrogen-only positions are unhighlighted."
                  },
                  {
                    "id": "open",
                    "label": "Open and rebuild",
                    "range": "31–36",
                    "title": "Recover activity after opening the ring",
                    "question": "Can the active indoline motif be simplified into a tunable aniline series?",
                    "action": "Use systematic 4-position substitution to recover activity, then investigate replacements for the remaining aniline group.",
                    "table": {
                      "title": "Ring opening and alkyl substitution",
                      "caption": "Ring opening and alkyl substitution",
                      "columns": [
                        "Compound",
                        "4-position group",
                        "cLogP",
                        "EC₅₀ (µM)"
                      ],
                      "rows": [
                        [
                          "31",
                          "H",
                          "0.4",
                          "6.9 ± 1.2"
                        ],
                        [
                          "32",
                          "Methyl",
                          "0.8",
                          "6.0 ± 1.5"
                        ],
                        [
                          "33",
                          "Ethyl",
                          "1.3",
                          "1.7 ± 0.3"
                        ],
                        [
                          "34",
                          "Isopropyl",
                          "1.5",
                          "0.3 ± 0.08"
                        ],
                        [
                          "35",
                          "n-Propyl",
                          "1.9",
                          "0.4 ± 0.05"
                        ],
                        [
                          "36",
                          "tert-Butyl",
                          "2.1",
                          "0.1 ± 0.05"
                        ]
                      ]
                    },
                    "notes": [
                      "Opening indoline 17 to 31 lost activity. Increasing alkyl size and branching recovered it, reaching lead-like potency in 36.",
                      "The reported calculated lipophilicity also rose. Read this as a potency–property relationship to investigate, not a reason to maximize lipophilicity."
                    ],
                    "limit": "cLogP is calculated, not a permeability or solubility measurement. The table does not establish a cause for the potency trend or a complete ADME profile.",
                    "source": "Table 6 and text, pp. 9779–9780.",
                    "figure": {
                      "src": "assets/vertex-lead-ring-open.svg",
                      "label": "Table 6 · Rebuild the ring-opened branch",
                      "width": 245,
                      "height": 210,
                      "alt": "Table 6 · Rebuild the ring-opened branch from Hadida et al. Original chemical structures and assay data."
                    },
                    "molecules": [
                      {
                        "number": 31,
                        "src": "assets/vertex-lead-compound-31.svg",
                        "edit": "4-position: H",
                        "metric": "EC₅₀",
                        "activity": "6.9 ± 1.2 µM",
                        "property": "cLogP 0.4"
                      },
                      {
                        "number": 32,
                        "src": "assets/vertex-lead-compound-32.svg",
                        "edit": "4-position: Methyl",
                        "metric": "EC₅₀",
                        "activity": "6.0 ± 1.5 µM",
                        "property": "cLogP 0.8"
                      },
                      {
                        "number": 33,
                        "src": "assets/vertex-lead-compound-33.svg",
                        "edit": "4-position: Ethyl",
                        "metric": "EC₅₀",
                        "activity": "1.7 ± 0.3 µM",
                        "property": "cLogP 1.3"
                      },
                      {
                        "number": 34,
                        "src": "assets/vertex-lead-compound-34.svg",
                        "edit": "4-position: Isopropyl",
                        "metric": "EC₅₀",
                        "activity": "0.3 ± 0.08 µM",
                        "property": "cLogP 1.5"
                      },
                      {
                        "number": 35,
                        "src": "assets/vertex-lead-compound-35.svg",
                        "edit": "4-position: n-Propyl",
                        "metric": "EC₅₀",
                        "activity": "0.4 ± 0.05 µM",
                        "property": "cLogP 1.9"
                      },
                      {
                        "number": 36,
                        "src": "assets/vertex-lead-compound-36.svg",
                        "edit": "4-position: tert-Butyl",
                        "metric": "EC₅₀",
                        "activity": "0.1 ± 0.05 µM",
                        "property": "cLogP 2.1"
                      }
                    ],
                    "structureNote": "Complete structures redrawn from the paper. Amber marks the linker or substituent being explored; unchanged reference structures and hydrogen-only positions are unhighlighted."
                  },
                  {
                    "id": "phenol",
                    "label": "Find the phenol",
                    "range": "37–45",
                    "title": "Test replacements instead of assuming the original amine is essential",
                    "question": "Which replacements for the 3-position aniline group preserve or improve activity?",
                    "action": "Advance the phenol series: 45 gave a large potency gain and strong activity in patient-derived airway cells.",
                    "table": {
                      "title": "Replace the aniline group in 36",
                      "caption": "Replace the aniline group in 36",
                      "columns": [
                        "Compound",
                        "Replacement group",
                        "Measured activity"
                      ],
                      "rows": [
                        [
                          "36",
                          "NH₂ · reference",
                          "0.1 ± 0.05 µM"
                        ],
                        [
                          "37",
                          "Acetamide: NHCOCH₃",
                          "24% at 30 µM"
                        ],
                        [
                          "38",
                          "Carbamate: NHCO₂CH₃",
                          "3.5 ± 1.5 µM"
                        ],
                        [
                          "39",
                          "Benzylamine: CH₂NH₂",
                          "20% at 30 µM"
                        ],
                        [
                          "40",
                          "Hydroxymethyl: CH₂OH",
                          "0.1 ± 0.02 µM"
                        ],
                        [
                          "41",
                          "Carboxylic acid: CO₂H",
                          "13% at 30 µM"
                        ],
                        [
                          "42",
                          "Sulfonamide: SO₂NH₂",
                          "5.1 ± 1.8 µM"
                        ],
                        [
                          "43",
                          "H · remove the amine",
                          "0.1 ± 0.1 µM"
                        ],
                        [
                          "44",
                          "F",
                          "0.1 ± 0.09 µM"
                        ],
                        [
                          "45",
                          "Phenol: OH",
                          "0.003 ± 0.002 µM"
                        ]
                      ]
                    },
                    "notes": [
                      "Removing the amine (43) retained activity; a hydrogen-bond donor at that position was not an absolute requirement. Phenol 45 nevertheless improved potency markedly.",
                      "The authors describe an approximately 40-fold activity gain. The rounded table means (0.1 versus 0.003 µM) give about 33-fold; the exact fold should not be overinterpreted.",
                      "45 also reached 5 ± 2 nM in F508del human bronchial epithelium. Its proposed binding interactions remained hypotheses."
                    ],
                    "limit": "Replacing an aniline here is an observed SAR strategy, not evidence that the paper demonstrated or eliminated aniline-related toxicity.",
                    "source": "Table 7, p. 9780; Table 9, p. 9781.",
                    "figure": {
                      "src": "assets/vertex-lead-phenols.svg",
                      "label": "Table 7 · Discover the phenol series",
                      "width": 245,
                      "height": 245,
                      "alt": "Table 7 · Discover the phenol series from Hadida et al. Original chemical structures and assay data."
                    },
                    "molecules": [
                      {
                        "number": 36,
                        "src": "assets/vertex-lead-reference-36.svg",
                        "edit": "Reference · Aniline replacement: NH₂ · reference",
                        "metric": "EC₅₀",
                        "activity": "0.1 ± 0.05 µM"
                      },
                      {
                        "number": 37,
                        "src": "assets/vertex-lead-compound-37.svg",
                        "edit": "Aniline replacement: Acetamide: NHCOCH₃",
                        "metric": "Response",
                        "activity": "24% at 30 µM"
                      },
                      {
                        "number": 38,
                        "src": "assets/vertex-lead-compound-38.svg",
                        "edit": "Aniline replacement: Carbamate: NHCO₂CH₃",
                        "metric": "EC₅₀",
                        "activity": "3.5 ± 1.5 µM"
                      },
                      {
                        "number": 39,
                        "src": "assets/vertex-lead-compound-39.svg",
                        "edit": "Aniline replacement: Benzylamine: CH₂NH₂",
                        "metric": "Response",
                        "activity": "20% at 30 µM"
                      },
                      {
                        "number": 40,
                        "src": "assets/vertex-lead-compound-40.svg",
                        "edit": "Aniline replacement: Hydroxymethyl: CH₂OH",
                        "metric": "EC₅₀",
                        "activity": "0.1 ± 0.02 µM"
                      },
                      {
                        "number": 41,
                        "src": "assets/vertex-lead-compound-41.svg",
                        "edit": "Aniline replacement: Carboxylic acid: CO₂H",
                        "metric": "Response",
                        "activity": "13% at 30 µM"
                      },
                      {
                        "number": 42,
                        "src": "assets/vertex-lead-compound-42.svg",
                        "edit": "Aniline replacement: Sulfonamide: SO₂NH₂",
                        "metric": "EC₅₀",
                        "activity": "5.1 ± 1.8 µM"
                      },
                      {
                        "number": 43,
                        "src": "assets/vertex-lead-compound-43.svg",
                        "edit": "Aniline replacement: H · remove the amine",
                        "metric": "EC₅₀",
                        "activity": "0.1 ± 0.1 µM"
                      },
                      {
                        "number": 44,
                        "src": "assets/vertex-lead-compound-44.svg",
                        "edit": "Aniline replacement: F",
                        "metric": "EC₅₀",
                        "activity": "0.1 ± 0.09 µM"
                      },
                      {
                        "number": 45,
                        "src": "assets/vertex-lead-compound-45.svg",
                        "edit": "Aniline replacement: Phenol: OH",
                        "metric": "EC₅₀",
                        "activity": "0.003 ± 0.002 µM"
                      }
                    ],
                    "structureNote": "Complete structures redrawn from the paper. Amber marks the linker or substituent being explored; unchanged reference structures and hydrogen-only positions are unhighlighted."
                  },
                  {
                    "id": "substitute",
                    "label": "Vary the whole profile",
                    "range": "45–48",
                    "title": "Use a potency plateau to explore other properties",
                    "question": "What happens when substituent size and lipophilicity change at the 2-position of the aniline-derived ring?",
                    "action": "Compare the phenols alongside potent indoles using human airway-cell activity and rat IV PK; the optical assay alone cannot select 48.",
                    "table": {
                      "title": "Phenol substitutions",
                      "caption": "Phenol substitutions",
                      "columns": [
                        "Compound",
                        "Variable group",
                        "EC₅₀ (nM)"
                      ],
                      "rows": [
                        [
                          "45",
                          "H",
                          "3 ± 2"
                        ],
                        [
                          "46",
                          "F",
                          "2 ± 1"
                        ],
                        [
                          "47",
                          "CF₃",
                          "3 ± 1"
                        ],
                        [
                          "48",
                          "tert-Butyl",
                          "3 ± 1"
                        ]
                      ]
                    },
                    "notes": [
                      "The variable position is para to the phenolic OH. These edits vary molecular volume and lipophilic character while retaining similar optical-assay potency.",
                      "No one analog clearly wins this assay. The next decision must use measurements that distinguish their broader profiles."
                    ],
                    "limit": "Units here are nM, not µM. Similar EC₅₀ values do not establish identical maximal response, PK, or safety.",
                    "source": "Table 8 and text, p. 9780.",
                    "figure": {
                      "src": "assets/ivacaftor-table8-phenol-analogs.png",
                      "label": "Table 8 · Similar potency, different substituents",
                      "width": 607,
                      "height": 424,
                      "alt": "Table 8 · Similar potency, different substituents from Hadida et al. Original chemical structures and assay data."
                    },
                    "molecules": [
                      {
                        "number": 45,
                        "src": "assets/vertex-lead-reference-45.svg",
                        "edit": "Reference · 2-position: H",
                        "metric": "EC₅₀",
                        "activity": "3 ± 2 nM"
                      },
                      {
                        "number": 46,
                        "src": "assets/vertex-lead-compound-46.svg",
                        "edit": "2-position: F",
                        "metric": "EC₅₀",
                        "activity": "2 ± 1 nM"
                      },
                      {
                        "number": 47,
                        "src": "assets/vertex-lead-compound-47.svg",
                        "edit": "2-position: CF₃",
                        "metric": "EC₅₀",
                        "activity": "3 ± 1 nM"
                      },
                      {
                        "number": 48,
                        "src": "assets/vertex-lead-compound-48.svg",
                        "edit": "2-position: tert-Butyl",
                        "metric": "EC₅₀",
                        "activity": "3 ± 1 nM",
                        "badge": "Selected molecule"
                      }
                    ],
                    "structureNote": "Complete structures redrawn from the paper. Amber marks the linker or substituent being explored; unchanged reference structures and hydrogen-only positions are unhighlighted."
                  }
                ],
                "sourceUrl": "https://doi.org/10.1021/jm5012808"
              },
              {
                "id": "candidate",
                "label": "Integrate the evidence",
                "title": "Why 48 advanced: a decision across the whole profile",
                "observation": "Compare all six deeply profiled analogs, then examine the additional evidence for 48. A strong selection resolves several liabilities while making the remaining gaps explicit.",
                "decisionKind": "evidence",
                "decisions": [
                  {
                    "id": "compare",
                    "label": "Compare six analogs",
                    "range": "28, 30, 45–48",
                    "title": "Bring both chemistry branches into the same decision",
                    "question": "Which compounds combine activity in human airway cells with a useful disposition profile?",
                    "action": "Favor 48 for its combined profile, while recognizing that other compounds win individual activity measurements.",
                    "table": {
                      "title": "All six compounds in Table 9",
                      "highlightRows": [
                        5
                      ],
                      "caption": "Table 9 with optical-assay results added from Tables 5 and 8. PK measurements are rat IV; AUC is AUC₀–∞.",
                      "columns": [
                        "Compound",
                        "Optical EC₅₀ (nM)¹",
                        "HBE EC₅₀ (nM)",
                        "IV dose (mg/kg)",
                        "AUC (µg·h/mL)",
                        "CL (mL/min/kg)",
                        "t½ (h)",
                        "Vss (L/kg)"
                      ],
                      "rows": [
                        [
                          "28 · indole",
                          "9 ± 4",
                          "42",
                          "2.45",
                          "0.70",
                          "60.7",
                          "1.3",
                          "4.4"
                        ],
                        [
                          "30 · indole",
                          "11 ± 2",
                          "97 ± 63",
                          "2.49",
                          "2.64",
                          "15.8",
                          "2.9",
                          "3.3"
                        ],
                        [
                          "45 · phenol",
                          "3 ± 2",
                          "5 ± 2",
                          "1.29",
                          "0.26",
                          "85.6",
                          "0.7",
                          "2.9"
                        ],
                        [
                          "46 · phenol",
                          "2 ± 1",
                          "45 ± 61",
                          "1.57",
                          "0.52",
                          "62.9",
                          "1.1",
                          "2.9"
                        ],
                        [
                          "47 · phenol",
                          "3 ± 1",
                          "22 ± 14",
                          "0.65",
                          "0.65",
                          "17.7",
                          "2.9",
                          "3.2"
                        ],
                        [
                          "48 · selected",
                          "3 ± 1",
                          "22 ± 10",
                          "1.3",
                          "3.04",
                          "5.5",
                          "9.5",
                          "3.6"
                        ]
                      ]
                    },
                    "notes": [
                      "28 versus 30: similar optical potency, but different HBE activity and clearance. The same chemistry branch contains meaningful trade-offs.",
                      "45 versus 46: the very low optical EC₅₀ of 46 did not make it the strongest HBE compound.",
                      "47 versus 48: HBE means were both 22 nM; 48 had lower clearance (5.5 versus 17.7) and a longer half-life (9.5 versus 2.9 h).",
                      "48 versus all six: 48 had the lowest measured clearance and longest half-life in this selected set. 45 remained more potent in HBE."
                    ],
                    "limit": "Raw AUC cannot be ranked as if doses were equal. ¹Optical values for 28 and 30 are converted from µM to nM. HBE and optical assays are different systems; variation matters. This is selective profiling, not a PK panel for every analog.",
                    "source": "Tables 5, 8–9, pp. 9779–9781.",
                    "molecules": [
                      {
                        "number": 28,
                        "src": "assets/vertex-lead-compound-28.svg",
                        "edit": "Indole 3-tert-butyl",
                        "metric": "Optical EC₅₀",
                        "activity": "9 ± 4 nM"
                      },
                      {
                        "number": 30,
                        "src": "assets/vertex-lead-compound-30.svg",
                        "edit": "Indole 5-tert-butyl",
                        "metric": "Optical EC₅₀",
                        "activity": "11 ± 2 nM"
                      },
                      {
                        "number": 45,
                        "src": "assets/vertex-lead-reference-45.svg",
                        "edit": "2-position: H",
                        "metric": "Optical EC₅₀",
                        "activity": "3 ± 2 nM"
                      },
                      {
                        "number": 46,
                        "src": "assets/vertex-lead-compound-46.svg",
                        "edit": "2-position: F",
                        "metric": "Optical EC₅₀",
                        "activity": "2 ± 1 nM"
                      },
                      {
                        "number": 47,
                        "src": "assets/vertex-lead-compound-47.svg",
                        "edit": "2-position: CF₃",
                        "metric": "Optical EC₅₀",
                        "activity": "3 ± 1 nM"
                      },
                      {
                        "number": 48,
                        "src": "assets/vertex-lead-compound-48.svg",
                        "edit": "2-position: tert-Butyl",
                        "metric": "Optical EC₅₀",
                        "activity": "3 ± 1 nM",
                        "badge": "Selected molecule"
                      }
                    ],
                    "structureNote": "The two indoles and four phenols compared below. Card values are from the optical assay; the table separately reports human bronchial epithelial-cell activity and rat IV PK."
                  },
                  {
                    "id": "exposure",
                    "label": "Test oral exposure",
                    "range": "48 across species",
                    "title": "Ask whether the selected profile survives oral dosing and another species",
                    "question": "Does low IV clearance translate into useful oral exposure, and how consistent is the disposition across species?",
                    "action": "Use IV and oral studies together to support further development; treat human extrapolation as a prediction to test.",
                    "table": {
                      "title": "Compound 48: multi-species PK",
                      "caption": "Table 10. AUC₀–∞ is oral exposure; ND = not determined. The rat IV dose is reported as 2.5 mg/kg here, versus 1.3 mg/kg for 48 in Table 9.",
                      "columns": [
                        "Species",
                        "IV dose (mg/kg)",
                        "CL (mL/min/kg)",
                        "t½ (h)",
                        "Vss (L/kg)",
                        "Oral dose (mg/kg)",
                        "F (%)",
                        "Oral AUC (µg·h/mL)"
                      ],
                      "rows": [
                        [
                          "Mouse",
                          "3",
                          "20.0",
                          "1.3",
                          "2.8",
                          "ND",
                          "ND",
                          "ND"
                        ],
                        [
                          "Rat",
                          "2.5",
                          "5.5",
                          "9.5",
                          "3.6",
                          "3",
                          "55",
                          "4.8"
                        ],
                        [
                          "Dog",
                          "0.9",
                          "0.7",
                          "13",
                          "0.7",
                          "3.8",
                          "43",
                          "13.5"
                        ],
                        [
                          "Monkey",
                          "0.8",
                          "7.4",
                          "6.7",
                          "2.2",
                          "ND",
                          "ND",
                          "ND"
                        ]
                      ]
                    },
                    "notes": [
                      "From lead 16 to 48: rat clearance 28 → 5.5 mL/min/kg, IV half-life 1.3 → 9.5 h, and oral F 11% → 55%. These are reported profiles, not a controlled one-edit experiment.",
                      "Dog clearance 17 → 0.7 mL/min/kg and IV half-life 0.9 → 13 h. The paper reports dog oral F of 43% for 48; F for 16 was not determined.",
                      "Oral AUC and Cmax reportedly increased linearly over rat doses 1–200 mg/kg and dog doses 3–80 mg/kg. Numerical AUC/Cmax values for each dose are not tabulated.",
                      "Four-species allometric scaling predicted human hepatic clearance of 4.7 mL/min/kg, approximately 23% of hepatic blood flow. This was not measured human clearance."
                    ],
                    "limit": "IV PK separates disposition from oral absorption and first-pass effects. The data do not identify the mechanism of every improvement, establish human dosing, or define a safety margin. The methods report n = 3 animals per group.",
                    "source": "Tables 3 and 10; text p. 9780; PK methods p. 9793."
                  },
                  {
                    "id": "properties",
                    "label": "Check physical properties",
                    "range": "16 → phenols",
                    "title": "Improve a practical property without claiming every property is solved",
                    "question": "Did the chemistry address the original solubility limitation, and what remains unresolved?",
                    "action": "Retain the improved organic-solubility profile while carrying poor aqueous solubility forward as a formulation challenge.",
                    "table": {
                      "title": "Physical properties and synthesis evidence",
                      "caption": "Physical properties and synthesis evidence",
                      "columns": [
                        "Measurement / evidence",
                        "Reported finding",
                        "What it supports"
                      ],
                      "rows": [
                        [
                          "Lead 16 thermodynamic solubility",
                          "Water: not detectable; ethanol: 1.2 mg/mL; Miglyol 810: 0.057 mg/mL",
                          "A measured liability beyond potency."
                        ],
                        [
                          "Experimental logP",
                          "16: 3.2; 45: 4.8",
                          "Measured lipophilicity differs from the displayed tautomer-dependent cLogP values."
                        ],
                        [
                          "Compound 48 solubility",
                          "Main text reports improved organic solubility; conclusion says aqueous solubility remains poor",
                          "A partial improvement, not a universal solubility solution."
                        ],
                        [
                          "Compound 48 synthesis",
                          "Five synthetic steps from commercially available 2,4-di-tert-butylphenol; nitration gave an 8:1 isomer mixture separated by chromatography",
                          "A disclosed preparation route; not proof of scalable GMP manufacture."
                        ]
                      ]
                    },
                    "notes": [
                      "The chemistry preserved the amide-linked core while varying the amine-derived region. The conclusion associates 4-alkyl substitution with improved organic solubility.",
                      "Source ambiguity: footnote 23 is cited in the discussion of 48, but names “compound 38” and gives water not detectable, ethanol 5.7 mg/mL, and Miglyol 810 15.2 mg/mL. Those numerical values are not assigned to 48 here.",
                      "Synthetic accessibility belongs in the profile, but this paper does not present a head-to-head process-cost or scale-up analysis as the reason for choosing 48."
                    ],
                    "limit": "No systematic permeability, microsomal stability, plasma protein binding, metabolite-identification, or excretion dataset is reported for analogs 16–48 in this article. Missing data do not mean the team never measured them.",
                    "source": "Text pp. 9779–9781; Scheme 10 and chemistry discussion; footnotes 15, 18 and 23."
                  },
                  {
                    "id": "selectivity",
                    "label": "Resolve off-target signals",
                    "range": "16, 36, 45, 48",
                    "title": "Revisit the liability that potency optimization alone would miss",
                    "question": "Does the later compound retain the original GABAₐ signal or introduce other screening concerns?",
                    "action": "Combine the broader selectivity panel with CYP and hERG follow-up before advancing 48.",
                    "table": {
                      "title": "Reported selectivity and early safety-related evidence",
                      "caption": "Reported selectivity and early safety-related evidence",
                      "columns": [
                        "Test",
                        "Compounds and results",
                        "Interpretation"
                      ],
                      "rows": [
                        [
                          "GABAₐ benzodiazepine-receptor binding",
                          "16: IC₅₀ ≈ 0.1 µM",
                          "A lead liability, measured separately from CFTR functional potency."
                        ],
                        [
                          "GABAₐ assay at 10 µM",
                          "36: 47%; 45: 52%; 48: 18% reported activity",
                          "Single-concentration assay results; do not convert these percentages into IC₅₀ values."
                        ],
                        [
                          "Broad target panel",
                          "16: >60 targets, with the GABAₐ hit. 48: no significant activity against 160 tested targets, including GABAₐ",
                          "Expanded selectivity evidence; the panels are not identical."
                        ],
                        [
                          "CYP inhibition by 48",
                          "IC₅₀ >20 µM for 1A2, 2C9, 2C19, 2E1, 3A4 and 2D6",
                          "Limited inhibition in the reported assays; not a metabolic-clearance or complete drug-interaction assessment."
                        ],
                        [
                          "hERG inhibition by 48",
                          "IC₅₀ >10 µM",
                          "A cardiac ion-channel screen, not proof of absence of cardiac toxicity."
                        ]
                      ]
                    },
                    "notes": [
                      "Changing the molecule was followed by remeasurement of the original off-target concern. The phenol potency gain in 45 did not alone close the GABAₐ question.",
                      "The 160-target panel, CYP assays, and hERG result support a broader profile for 48; their meaning depends on assay conditions and relevant exposure."
                    ],
                    "limit": "The article does not present a full repeat-dose toxicology, genotoxicity, organ-toxicity, or safety-pharmacology package, a NOAEL, or an exposure-based safety margin. “No significant activity” is the authors’ panel description, not zero activity at every concentration.",
                    "source": "Text p. 9780 and footnote 17."
                  },
                  {
                    "id": "translation",
                    "label": "Connect to disease biology",
                    "range": "48 and the evidence boundary",
                    "title": "Confirm relevant function, then separate pharmacology from PK/PD",
                    "question": "Does 48 restore useful CFTR function in a relevant human system?",
                    "action": "Use patient-derived airway pharmacology to support the G551D clinical rationale, alongside the PK and selectivity evidence.",
                    "table": {
                      "title": "Pharmacology, translation, and remaining evidence",
                      "caption": "Pharmacology, translation, and remaining evidence",
                      "columns": [
                        "Evidence area",
                        "What the article reports",
                        "What it does not establish"
                      ],
                      "rows": [
                        [
                          "F508del human bronchial epithelium",
                          "48 EC₅₀ 22 ± 10 nM; comparator data for all six selected analogs in Table 9",
                          "Cellular EC₅₀ is not a required human plasma concentration."
                        ],
                        [
                          "F508del/G551D human bronchial epithelium",
                          "48 EC₅₀ 0.236 ± 0.200 µM; maximal chloride secretion close to 50% of non-CF HBE levels",
                          "Response is measured ex vivo/in vitro, not clinical efficacy."
                        ],
                        [
                          "Mechanistic function",
                          "Increased chloride secretion in Ussing chambers; activity across more than one CFTR mutation",
                          "The SAR hypotheses are not a solved CFTR-bound structure."
                        ],
                        [
                          "In vivo PK/PD",
                          "Cellular concentration–response and animal plasma PK are reported separately",
                          "No paired animal exposure–PD time course or in vivo efficacy dose–response across 16–48 is presented."
                        ],
                        [
                          "Subsequent clinical experience",
                          "The paper cites later randomized trials in G551D CF and reports clinical benefit and general tolerability",
                          "Later trial outcomes cannot be used as evidence available at the original candidate-selection decision."
                        ]
                      ]
                    },
                    "notes": [
                      "The G551D HBE evidence helped guide the first clinical population, as the authors state. Potency, response magnitude, and genotype all matter.",
                      "The paper supports selecting 48 for further preclinical and clinical evaluation. It does not document the complete internal DC gate or establish IND readiness."
                    ],
                    "limit": "Keep three claims separate: functional rescue in cells, exposure in animals, and benefit–risk in people. This paper connects the rationale, but does not supply every experimental bridge.",
                    "source": "Tables 9–10; text pp. 9780–9781; cited clinical studies 12–13."
                  }
                ],
                "sourceUrl": "https://doi.org/10.1021/jm5012808"
              }
            ],
            "figureCredit": "Source: Hadida et al., Journal of Medicinal Chemistry 2014, 57, 9776–9795. Panels extracted from the supplied PDF; original structures, units, compound numbers, and footnotes retained.",
            "decisionMap": {
              "title": "From lead 16 to 48: the program decision map",
              "intro": "Begin with compounds 16–22: compare the ring edits and see why indole 16 and indoline 17 led to two chemistry routes. Select a node for the evidence and trade-off table.",
              "note": "Branches follow the published rationale, not a dated internal decision log. Lower-priority judgments are interpretations of the results; unreported follow-up is not treated as failure.",
              "nodes": [
                {
                  "id": "rings",
                  "label": "Compare 16–22",
                  "numbers": "16–22",
                  "title": "Start with 16–22: which ring changes preserve a useful starting point?",
                  "question": "What did reduction, N-methylation and heterocycle replacement teach the team before pursuing the 16 and 17 routes?",
                  "action": "Retain indole 16 for substitution at positions 3 and 5. Use the retained activity of indoline 17 to justify exploring a ring-opened aniline route. Give the tested 18–22 variants lower priority on activity evidence.",
                  "routes": [
                    {
                      "kind": "reported",
                      "label": "Indole route pursued",
                      "compounds": "16",
                      "why": "The lead’s indole framework was retained and substituted at positions 3 and 5 to make 27–30."
                    },
                    {
                      "kind": "reported",
                      "label": "Ring-opened route motivated by retained activity",
                      "compounds": "17",
                      "why": "Reduction to indoline retained submicromolar activity. The authors explicitly say this encouraged ring-opened analogs, starting with 31."
                    },
                    {
                      "kind": "inferred",
                      "label": "Lower-priority variants as tested",
                      "compounds": "18–22",
                      "why": "N-methylation and the tested polar heterocycle replacements reduced activity. The paper does not document a formal stop decision for every analog."
                    }
                  ],
                  "comparison": {
                    "title": "Ring edits around 16: the evidence behind the fork",
                    "caption": "Ring edits around 16: the evidence behind the fork",
                    "columns": [
                      "Compound",
                      "What changed from 16?",
                      "Measured optical activity",
                      "What the comparison teaches",
                      "Route supported"
                    ],
                    "structures": true,
                    "highlightRows": [
                      0,
                      1
                    ],
                    "rows": [
                      [
                        "16",
                        "Indole reference; NH left free",
                        "EC₅₀ 0.1 ± 0.06 µM",
                        "Useful activity to retain while testing substitutions elsewhere.",
                        "16 → substituted indoles 27–30"
                      ],
                      [
                        "17",
                        "Reduce the indole 2,3 double bond → indoline",
                        "EC₅₀ 0.4 ± 0.08 µM",
                        "About fourfold weaker by the reported means, but still submicromolar: full indole aromaticity is not essential for activity.",
                        "17 → ring-opened 31 → substituted anilines 32–36"
                      ],
                      [
                        "18",
                        "Methylate the indole nitrogen",
                        "EC₅₀ 6.4 ± 1.1 µM",
                        "Large activity loss is consistent with an important role for the free NH; it does not prove a specific target hydrogen bond.",
                        "Retain the free NH in subsequent indole SAR."
                      ],
                      [
                        "19",
                        "Replace a ring carbon with nitrogen → azaindole",
                        "13% reference response at 30 µM",
                        "The attempt to add polarity did not preserve useful activity in this analog.",
                        "Lower priority as tested."
                      ],
                      [
                        "20",
                        "Introduce another ring nitrogen → indazole",
                        "EC₅₀ 5.6 ± 0.2 µM",
                        "The tested polar ring replacement substantially weakened activity.",
                        "Lower priority as tested."
                      ],
                      [
                        "21",
                        "Change the five-membered ring to benzimidazole",
                        "12% reference response at 30 µM",
                        "Retaining an NH alone was insufficient to preserve activity.",
                        "Lower priority as tested."
                      ],
                      [
                        "22",
                        "Use a 2-oxoindoline (oxindole) ring",
                        "21% reference response at 30 µM",
                        "Adding a carbonyl did not preserve useful activity in this analog.",
                        "Lower priority as tested."
                      ]
                    ]
                  },
                  "comparisonNote": "NIH-3T3 F508del-CFTR potentiation assay. EC₅₀ values are mean ± SD from at least three determinations. Single-concentration responses are relative to VRT-532 at 30 µM; they are not EC₅₀ values. Rows 16 and 17 identify the frameworks used in the subsequent routes.",
                  "unknown": "This table supports the chemical starting points for the two routes. It does not show that 17 had better solubility, ADME, PK or safety than 16: no matched property panel for 17–22 is reported. Broader profiling of 16 and the linker experiments 23–26 supplied additional context for the optimization strategy.",
                  "refs": [
                    "recognize"
                  ],
                  "source": "Table 2 and text pp. 9777–9779; the two-pronged strategy is described on p. 9779.",
                  "rationale": {
                    "title": "Why work on the indole region?",
                    "intro": "It offered a productive place to vary the molecule while retaining the quinolinone–amide framework. Other regions had also been tested.",
                    "regions": [
                      [
                        "Quinolinone core",
                        "Most early replacements or modifications weakened activity.",
                        "Keep a productive core; it was not uniquely irreplaceable—naphthol 6 retained activity."
                      ],
                      [
                        "Amide linker",
                        "The tested linker replacements 23–26 lost substantial activity.",
                        "Retain the amide connection while exploring another region."
                      ],
                      [
                        "Indole / amine-derived region",
                        "Earlier amine-region SAR produced lead 16; this region offered further ring and substitution choices.",
                        "Test which edits preserve or improve activity, including more polar heterocycles."
                      ]
                    ],
                    "question": "Can changing the indole ring improve activity—or preserve enough activity to open another chemistry route?",
                    "note": "These observations are organized by design rationale, not a known experiment-by-experiment chronology. Compounds 17–22 are discussed around lead identification; the linker studies are described later. Table 2 does not establish better ADME, PK or solubility for 17–22."
                  }
                },
                {
                  "id": "baseline",
                  "label": "Profile the lead",
                  "numbers": "16",
                  "brief": "Activity is a starting point.",
                  "side": "Expose the liabilities first.",
                  "title": "Define what lead 16 still needs",
                  "question": "Is 16 ready to develop, or a lead worth improving?",
                  "action": "Continue optimizing the series. Preserve CFTR activity while addressing selectivity, solubility, and exposure.",
                  "routes": [
                    {
                      "kind": "reported",
                      "label": "Lead carried into optimization",
                      "compounds": "16",
                      "why": "The paper identifies 16 as the lead and uses its broader profile to motivate further chemistry."
                    },
                    {
                      "kind": "inferred",
                      "label": "Not a ready candidate",
                      "compounds": "16",
                      "why": "Submicromolar activity does not resolve poor solubility, GABAₐ binding, low oral bioavailability, or short exposure."
                    }
                  ],
                  "cards": [
                    {
                      "number": 16,
                      "src": "assets/vertex-lead-compound-16.svg",
                      "fields": [
                        [
                          "Optical EC₅₀",
                          "0.1 ± 0.06 µM"
                        ],
                        [
                          "Rat oral F",
                          "11%"
                        ],
                        [
                          "Dog IV t½",
                          "0.9 h"
                        ],
                        [
                          "GABAₐ binding IC₅₀",
                          "≈0.1 µM"
                        ]
                      ],
                      "badge": "Starting lead"
                    }
                  ],
                  "readouts": [
                    [
                      "Activity",
                      "CFTR potentiation supplied useful biological activity to preserve."
                    ],
                    [
                      "Properties / ADME",
                      "Water solubility was not detectable; ethanol 1.2 mg/mL; Miglyol 810 0.057 mg/mL. Measured logP 3.2. Planarity and crystal packing were investigated."
                    ],
                    [
                      "PK and oral delivery",
                      "Rat CL 28 mL/min/kg, t½ 1.3 h, Vss 2.4 L/kg; dog CL 17, t½ 0.9 h, Vss 1.6. Low rat F identifies a problem, but not its absorption-versus-first-pass cause."
                    ],
                    [
                      "Selectivity",
                      "A >60-target panel identified GABAₐ benzodiazepine-receptor binding. This is a different assay from CFTR functional potency."
                    ]
                  ],
                  "unknown": "The stated chemistry objectives were approximately tenfold greater potency, reduced GABAₐ activity, and more three-dimensionality to improve organic solubility. This is not a published list of formal DC acceptance thresholds.",
                  "refs": [],
                  "source": "Tables 2–3, Figure 3; footnotes 15, 17–18.",
                  "comparison": {
                    "title": "The starting profile of lead 16",
                    "caption": "The starting profile of lead 16",
                    "columns": [
                      "Dimension",
                      "Measured evidence for 16",
                      "Optimization question"
                    ],
                    "rows": [
                      [
                        "Activity",
                        "Optical EC₅₀ 0.1 ± 0.06 µM",
                        "Can potency improve while useful function is preserved?"
                      ],
                      [
                        "Selectivity",
                        "GABAₐ binding IC₅₀ ≈0.1 µM",
                        "Can chemistry reduce this off-target activity?"
                      ],
                      [
                        "Solubility",
                        "Water: not detectable; ethanol: 1.2 mg/mL; Miglyol 810: 0.057 mg/mL",
                        "Can shape and packing changes improve useful solubility?"
                      ],
                      [
                        "Lipophilicity",
                        "Measured logP 3.2",
                        "Read measured properties alongside activity; cLogP depends on the tautomer."
                      ],
                      [
                        "Oral exposure",
                        "Rat oral F 11%",
                        "What limits systemic availability? Low F alone does not identify the cause."
                      ],
                      [
                        "Disposition",
                        "Rat CL 28 mL/min/kg, IV t½ 1.3 h; dog CL 17, IV t½ 0.9 h",
                        "Can the series sustain more useful exposure?"
                      ]
                    ],
                    "structures": false
                  },
                  "simpleProfile": {
                    "title": "Define what lead 16 still needs",
                    "intro": "Lead 16 provides useful CFTR activity. Its measured liabilities set the next chemistry priorities.",
                    "columns": [
                      "What is known about 16",
                      "What this means for lead optimization"
                    ],
                    "rows": [
                      [
                        "CFTR activity · EC₅₀ 0.1 ± 0.06 µM",
                        "Preserve activity and seek a further ~10-fold potency gain."
                      ],
                      [
                        "Off-target binding · GABAₐ IC₅₀ ≈0.1 µM",
                        "Reduce GABAₐ activity while retaining CFTR potentiation."
                      ],
                      [
                        "Low aqueous and organic solubility",
                        "Test shape and packing changes; the authors sought greater three-dimensionality to improve organic solubility."
                      ],
                      [
                        "Rat oral bioavailability · 11%",
                        "Improve useful oral exposure and investigate what limits it."
                      ],
                      [
                        "Dog IV half-life · 0.9 h; clearance · 17 mL/min/kg",
                        "Seek a more suitable disposition profile, then remeasure across selected analogs."
                      ]
                    ],
                    "takeaway": "Keep the activity. Reduce off-target binding. Improve useful solubility and exposure.",
                    "note": "The authors explicitly state goals for potency, GABAₐ activity and organic solubility. Exposure is an additional priority supported by the reported PK liabilities. CFTR and GABAₐ values come from different assays."
                  }
                },
                {
                  "id": "core",
                  "label": "Protect useful features",
                  "numbers": "16–26",
                  "brief": "Preserve the core; test alternatives.",
                  "side": "18–26 expose activity losses.",
                  "title": "Which structural changes are worth carrying forward?",
                  "question": "Can the series gain useful properties without destroying its activity?",
                  "action": "Retain the quinolinone–amide core. Keep the indole route and use indoline 17 to motivate a ring-opened branch.",
                  "routes": [
                    {
                      "kind": "reported",
                      "label": "Routes used in later chemistry",
                      "compounds": "16 and 17",
                      "why": "Indole 16 was substituted further; active indoline 17 motivated ring opening. The authors retained the quinolinone–amide portion after the linker experiments."
                    },
                    {
                      "kind": "inferred",
                      "label": "Lower-priority designs on activity evidence",
                      "compounds": "18–22 and 23–26",
                      "why": "NH methylation, the tested polar ring replacements, and alternative linkers substantially reduced activity. This supports deprioritizing these designs as tested."
                    },
                    {
                      "kind": "unknown",
                      "label": "Property benefit unproven",
                      "compounds": "18–26",
                      "why": "The paper does not report an ADME/PK panel showing that these intended property changes succeeded."
                    }
                  ],
                  "cards": [
                    {
                      "number": 16,
                      "src": "assets/vertex-lead-compound-16.svg",
                      "fields": [
                        [
                          "Role",
                          "Core retained"
                        ],
                        [
                          "Optical EC₅₀",
                          "0.1 ± 0.06 µM"
                        ]
                      ],
                      "badge": ""
                    },
                    {
                      "number": 24,
                      "src": "assets/vertex-lead-compound-24.svg",
                      "fields": [
                        [
                          "Edit",
                          "Sulfonamide linker"
                        ],
                        [
                          "Response at 30 µM",
                          "1% of reference"
                        ],
                        [
                          "Solubility improvement",
                          "Not reported"
                        ]
                      ],
                      "badge": ""
                    }
                  ],
                  "readouts": [
                    [
                      "Test the hypothesis",
                      "Crystal structure and calculations supported a planar, internally hydrogen-bonded conformation. Changing the linker was intended to disrupt it."
                    ],
                    [
                      "Preserve functional activity",
                      "17 retained activity at 0.4 ± 0.08 µM. N-methyl analog 18 fell to 6.4 ± 1.1 µM; 20 measured 5.6 ± 0.2 µM. 19, 21 and 22 had only 13%, 12% and 21% reference response at 30 µM."
                    ],
                    [
                      "Reject an unproductive route",
                      "Ester 23, sulfonamide 24, reduced linker 25 and reverse amide 26 gave 19%, 1%, 1% and 8% reference response at 30 µM. These percentages are not EC₅₀ values."
                    ]
                  ],
                  "unknown": "This is a reconstructed priority decision, not evidence that every weak analog was formally terminated on a particular date. No solubility improvement for 23–26 is established here.",
                  "refs": [
                    "recognize",
                    "linker"
                  ],
                  "source": "Tables 2 and 4; Figure 3; text pp. 9778–9779.",
                  "comparison": {
                    "title": "The linker experiment: a plausible property idea loses activity",
                    "caption": "The linker experiment: a plausible property idea loses activity",
                    "columns": [
                      "Compound",
                      "Linker / design",
                      "Activity",
                      "Decision supported"
                    ],
                    "rows": [
                      [
                        "16",
                        "Original amide",
                        "EC₅₀ 0.1 ± 0.06 µM",
                        "Retain this core for the next chemistry routes."
                      ],
                      [
                        "23",
                        "Ester",
                        "19% response at 30 µM",
                        "Lower priority as tested: poor functional activity."
                      ],
                      [
                        "24",
                        "Sulfonamide",
                        "1% response at 30 µM",
                        "Lower priority as tested: poor functional activity."
                      ],
                      [
                        "25",
                        "Reduced linker",
                        "1% response at 30 µM",
                        "Lower priority as tested: poor functional activity."
                      ],
                      [
                        "26",
                        "Reverse amide",
                        "8% response at 30 µM",
                        "Lower priority as tested: poor functional activity."
                      ]
                    ],
                    "structures": true
                  },
                  "comparisonNote": "Single-concentration responses are relative to VRT-532, not EC₅₀ values. The paper does not demonstrate better solubility for these linker analogs. Ring analogs 17–22 and their structures remain available below."
                },
                {
                  "id": "branches",
                  "label": "Grow the indole",
                  "numbers": "16 → 27–30",
                  "brief": "Indoles and ring-opened analogs.",
                  "side": "29: follow-up rationale unknown.",
                  "title": "Branch A: preserve the indole and vary its substituents",
                  "question": "Can substitutions at positions 3 and 5 improve activity while the amide core is retained?",
                  "action": "Profile 28 and 30 more deeply. Keep their activity–PK trade-offs visible when they meet the phenol branch.",
                  "routes": [
                    {
                      "kind": "reported",
                      "label": "Broader profiling shown",
                      "compounds": "28 and 30",
                      "why": "Both appear later in the human bronchial epithelial-cell and rat IV PK comparison."
                    },
                    {
                      "kind": "unknown",
                      "label": "Follow-up choice not explained",
                      "compounds": "27 and 29",
                      "why": "27 did not improve the optical EC₅₀; 29 was potent. The paper does not explain why 29 is absent from the later PK comparison."
                    }
                  ],
                  "cards": [
                    {
                      "number": 28,
                      "src": "assets/vertex-lead-compound-28.svg",
                      "fields": [
                        [
                          "Optical EC₅₀",
                          "0.009 ± 0.004 µM"
                        ],
                        [
                          "Next reported evidence",
                          "HBE activity + rat IV PK"
                        ]
                      ],
                      "badge": ""
                    },
                    {
                      "number": 30,
                      "src": "assets/vertex-lead-compound-30.svg",
                      "fields": [
                        [
                          "Optical EC₅₀",
                          "0.011 ± 0.002 µM"
                        ],
                        [
                          "Next reported evidence",
                          "HBE activity + rat IV PK"
                        ]
                      ],
                      "badge": ""
                    },
                    {
                      "number": 36,
                      "src": "assets/vertex-lead-compound-36.svg",
                      "fields": [
                        [
                          "Optical EC₅₀",
                          "0.1 ± 0.05 µM"
                        ],
                        [
                          "cLogP",
                          "2.1 · calculated"
                        ],
                        [
                          "Next chemistry",
                          "Replace the aniline group"
                        ]
                      ],
                      "badge": ""
                    }
                  ],
                  "readouts": [
                    [
                      "Indole route",
                      "27: 0.1; 28: 0.009; 29: 0.020; 30: 0.011 µM optical EC₅₀ means. Potency nominated useful analogs for follow-up; it did not settle their development suitability."
                    ],
                    [
                      "Ring-opened route",
                      "31 → 36 improved optical EC₅₀ from 6.9 to 0.1 µM. Calculated logP increased from 0.4 to 2.1. This is a property trend, not a measured permeability or solubility gain."
                    ],
                    [
                      "Testing allocation",
                      "The publication shows deeper PK profiling for selected analogs, not every molecule. Absence from the table does not prove that an assay was never run."
                    ]
                  ],
                  "unknown": "Do not draw a single chain 28 → 30 → 36. The substituted indoles and ring-opened series are parallel chemistry branches that meet at a later profile comparison.",
                  "refs": [
                    "indole"
                  ],
                  "source": "Tables 5–6 and later Table 9.",
                  "comparison": {
                    "title": "Indole substitutions and the subsequent profiling choice",
                    "caption": "Indole substitutions and the subsequent profiling choice",
                    "columns": [
                      "Compound",
                      "Change",
                      "Optical EC₅₀ (µM)",
                      "Later HBE EC₅₀ (nM)",
                      "Later rat CL (mL/min/kg)",
                      "How to read the decision"
                    ],
                    "rows": [
                      [
                        "16",
                        "Unsubstituted indole",
                        "0.1 ± 0.06",
                        "Not reported here",
                        "28",
                        "Starting lead; broader liabilities motivate optimization."
                      ],
                      [
                        "27",
                        "3-Ethyl",
                        "0.1 ± 0.02",
                        "Not reported",
                        "Not reported",
                        "No optical potency gain; individual stop decision not documented."
                      ],
                      [
                        "28",
                        "3-tert-Butyl",
                        "0.009 ± 0.004",
                        "42",
                        "60.7",
                        "Follow-up reported: potent, but clearance becomes a concern."
                      ],
                      [
                        "29",
                        "5-Ethyl",
                        "0.020 ± 0.003",
                        "Not reported",
                        "Not reported",
                        "Potent; absence from the later table is not a documented failure."
                      ],
                      [
                        "30",
                        "5-tert-Butyl",
                        "0.011 ± 0.002",
                        "97 ± 63",
                        "15.8",
                        "Follow-up reported: lower CL than 28, weaker HBE potency."
                      ]
                    ],
                    "structures": true
                  },
                  "comparisonNote": "Tables 5 and 9 are joined here to show the full decision story; the later PK results are not asserted to have been known when the substitutions were first designed."
                },
                {
                  "id": "ringopen",
                  "label": "Open the ring",
                  "numbers": "17 → 31–36",
                  "brief": "Indoles and ring-opened analogs.",
                  "side": "29: follow-up rationale unknown.",
                  "title": "Branch B: use active indoline 17 to explore a ring-opened series",
                  "question": "Can an alternative, tunable aniline framework retain activity while offering new substitution options?",
                  "action": "Use 36 as the next chemical starting point, then test replacements for its remaining aniline group.",
                  "routes": [
                    {
                      "kind": "reported",
                      "label": "Next chemistry starting point",
                      "compounds": "36",
                      "why": "Alkyl substitution recovered activity; the paper then tested aniline replacements 37–45."
                    },
                    {
                      "kind": "unknown",
                      "label": "Exploratory SAR, not documented failures",
                      "compounds": "31–35",
                      "why": "These compounds establish the substitution trend. Their individual advancement or termination decisions and matched ADME/PK profiles are not published."
                    }
                  ],
                  "cards": [
                    {
                      "number": 28,
                      "src": "assets/vertex-lead-compound-28.svg",
                      "fields": [
                        [
                          "Optical EC₅₀",
                          "0.009 ± 0.004 µM"
                        ],
                        [
                          "Next reported evidence",
                          "HBE activity + rat IV PK"
                        ]
                      ],
                      "badge": ""
                    },
                    {
                      "number": 30,
                      "src": "assets/vertex-lead-compound-30.svg",
                      "fields": [
                        [
                          "Optical EC₅₀",
                          "0.011 ± 0.002 µM"
                        ],
                        [
                          "Next reported evidence",
                          "HBE activity + rat IV PK"
                        ]
                      ],
                      "badge": ""
                    },
                    {
                      "number": 36,
                      "src": "assets/vertex-lead-compound-36.svg",
                      "fields": [
                        [
                          "Optical EC₅₀",
                          "0.1 ± 0.05 µM"
                        ],
                        [
                          "cLogP",
                          "2.1 · calculated"
                        ],
                        [
                          "Next chemistry",
                          "Replace the aniline group"
                        ]
                      ],
                      "badge": ""
                    }
                  ],
                  "readouts": [
                    [
                      "Indole route",
                      "27: 0.1; 28: 0.009; 29: 0.020; 30: 0.011 µM optical EC₅₀ means. Potency nominated useful analogs for follow-up; it did not settle their development suitability."
                    ],
                    [
                      "Ring-opened route",
                      "31 → 36 improved optical EC₅₀ from 6.9 to 0.1 µM. Calculated logP increased from 0.4 to 2.1. This is a property trend, not a measured permeability or solubility gain."
                    ],
                    [
                      "Testing allocation",
                      "The publication shows deeper PK profiling for selected analogs, not every molecule. Absence from the table does not prove that an assay was never run."
                    ]
                  ],
                  "unknown": "Indoline 17 retained activity, but opening it to 31 weakened activity. Recovery through 36 justified further chemistry; no matched permeability, solubility or PK dataset is reported for 31–36.",
                  "refs": [
                    "open"
                  ],
                  "source": "Table 2; Table 6; text pp. 9779–9780.",
                  "comparison": {
                    "title": "Recover activity in the ring-opened series",
                    "caption": "Recover activity in the ring-opened series",
                    "columns": [
                      "Compound",
                      "4-position group",
                      "Optical EC₅₀ (µM)",
                      "cLogP (calculated)",
                      "Trade-off / next decision"
                    ],
                    "rows": [
                      [
                        "31",
                        "H",
                        "6.9 ± 1.2",
                        "0.4",
                        "Ring opening loses activity relative to 17 (0.4 ± 0.08 µM)."
                      ],
                      [
                        "32",
                        "Methyl",
                        "6.0 ± 1.5",
                        "0.8",
                        "Little recovery of activity."
                      ],
                      [
                        "33",
                        "Ethyl",
                        "1.7 ± 0.3",
                        "1.3",
                        "Activity improves as the alkyl group changes."
                      ],
                      [
                        "34",
                        "Isopropyl",
                        "0.3 ± 0.08",
                        "1.5",
                        "Submicromolar activity; more lipophilic than 31."
                      ],
                      [
                        "35",
                        "n-Propyl",
                        "0.4 ± 0.05",
                        "1.9",
                        "Similar activity range; branching is another variable to compare."
                      ],
                      [
                        "36",
                        "tert-Butyl",
                        "0.1 ± 0.05",
                        "2.1",
                        "Activity recovered; proceed to test aniline replacements."
                      ]
                    ],
                    "structures": true
                  },
                  "comparisonNote": "Increasing calculated lipophilicity accompanied the potency trend. This is not evidence of improved permeability, solubility or oral bioavailability."
                },
                {
                  "id": "phenol",
                  "label": "Build the phenol branch",
                  "numbers": "36 → 45 → 48",
                  "brief": "Gain activity; keep checking liabilities.",
                  "side": "Weak replacements lose priority.",
                  "title": "Use 45 as a strong starting point, not as the finished answer",
                  "question": "Does the potency gain solve the other problems of the lead?",
                  "action": "Explore phenols 46–48 while carrying 45 into the broader comparison. Keep selectivity and exposure as open questions.",
                  "routes": [
                    {
                      "kind": "reported",
                      "label": "Phenol direction pursued",
                      "compounds": "45, then 46–48",
                      "why": "45 improved optical and HBE activity. The authors varied substituent size and lipophilic character to create 46–48, which retained similar optical potency."
                    },
                    {
                      "kind": "inferred",
                      "label": "Lower priority than the phenol direction",
                      "compounds": "37–44",
                      "why": "37–39, 41 and 42 had weaker activity. 40, 43 and 44 retained activity near 36, but did not reproduce 45’s potency gain."
                    },
                    {
                      "kind": "inferred",
                      "label": "Selectivity still needs resolution",
                      "compounds": "36 and 45",
                      "why": "GABAₐ assay activity at 10 µM was reported as 47% for 36 and 52% for 45. The phenol’s potency gain alone did not resolve the original off-target question."
                    }
                  ],
                  "cards": [
                    {
                      "number": 36,
                      "src": "assets/vertex-lead-compound-36.svg",
                      "fields": [
                        [
                          "Optical EC₅₀",
                          "0.1 ± 0.05 µM"
                        ],
                        [
                          "GABAₐ assay at 10 µM",
                          "47% reported activity"
                        ]
                      ],
                      "badge": ""
                    },
                    {
                      "number": 45,
                      "src": "assets/vertex-lead-compound-45.svg",
                      "fields": [
                        [
                          "Optical EC₅₀",
                          "3 ± 2 nM"
                        ],
                        [
                          "HBE EC₅₀",
                          "5 ± 2 nM"
                        ],
                        [
                          "Measured logP",
                          "4.8"
                        ],
                        [
                          "GABAₐ assay at 10 µM",
                          "52% reported activity"
                        ]
                      ],
                      "badge": ""
                    }
                  ],
                  "readouts": [
                    [
                      "Potency and relevant cells",
                      "45 was markedly more potent than 36 and retained strong activity in human airway cells. The proposed binding explanation remained a hypothesis."
                    ],
                    [
                      "Properties",
                      "Measured logP increased from 3.2 for 16 to 4.8 for 45. Do not infer improved solubility from this increase or from improved potency."
                    ],
                    [
                      "Selectivity",
                      "The GABAₐ percentages are single-concentration results, not IC₅₀ estimates. They belong beside potency when deciding what to test next."
                    ],
                    [
                      "The next discriminator",
                      "45–48 measured 2–3 nM in the optical assay. Similar values made HBE activity and PK useful discriminators."
                    ]
                  ],
                  "unknown": "The paper does not publish formal stop decisions for 37–44. Removing or replacing an aniline is not, by itself, proof that toxicity was demonstrated or eliminated.",
                  "refs": [
                    "phenol",
                    "substitute"
                  ],
                  "source": "Tables 7–8; footnotes 15 and 17; HBE follow-up in Table 9.",
                  "comparison": {
                    "title": "Which replacement provides the most useful next starting point?",
                    "caption": "Which replacement provides the most useful next starting point?",
                    "columns": [
                      "Compound",
                      "Aniline replacement",
                      "Optical activity",
                      "Other reported evidence",
                      "Decision supported"
                    ],
                    "rows": [
                      [
                        "36",
                        "NH₂ · reference",
                        "EC₅₀ 0.1 ± 0.05 µM",
                        "GABAₐ assay: 47% at 10 µM",
                        "Starting point for replacements."
                      ],
                      [
                        "37",
                        "NHCOCH₃",
                        "24% at 30 µM",
                        "Matched ADME/PK not reported",
                        "Lower priority as tested: weak activity."
                      ],
                      [
                        "38",
                        "NHCO₂CH₃",
                        "EC₅₀ 3.5 ± 1.5 µM",
                        "Matched ADME/PK not reported",
                        "Lower priority as tested: activity loss."
                      ],
                      [
                        "39",
                        "CH₂NH₂",
                        "20% at 30 µM",
                        "Matched ADME/PK not reported",
                        "Lower priority as tested: weak activity."
                      ],
                      [
                        "40",
                        "CH₂OH",
                        "EC₅₀ 0.1 ± 0.02 µM",
                        "Matched ADME/PK not reported",
                        "Activity retained; no phenol-like potency gain."
                      ],
                      [
                        "41",
                        "CO₂H",
                        "13% at 30 µM",
                        "Matched ADME/PK not reported",
                        "Lower priority as tested: weak activity."
                      ],
                      [
                        "42",
                        "SO₂NH₂",
                        "EC₅₀ 5.1 ± 1.8 µM",
                        "Matched ADME/PK not reported",
                        "Lower priority as tested: activity loss."
                      ],
                      [
                        "43",
                        "H",
                        "EC₅₀ 0.1 ± 0.1 µM",
                        "Matched ADME/PK not reported",
                        "Amine can be removed while retaining activity."
                      ],
                      [
                        "44",
                        "F",
                        "EC₅₀ 0.1 ± 0.09 µM",
                        "Matched ADME/PK not reported",
                        "Activity retained."
                      ],
                      [
                        "45",
                        "OH",
                        "EC₅₀ 0.003 ± 0.002 µM",
                        "HBE EC₅₀ 5 ± 2 nM; logP 4.8; GABAₐ assay 52% at 10 µM",
                        "Phenol direction pursued; exposure and selectivity remain open."
                      ]
                    ],
                    "structures": true
                  },
                  "comparisonNote": "45 led to 46–48 by varying another ring position. All four had similar optical EC₅₀ (2–3 nM), making broader profiling essential. GABAₐ percentages are reported single-concentration assay activity, not IC₅₀ values."
                },
                {
                  "id": "compare",
                  "label": "Compare whole profiles",
                  "numbers": "28, 30, 45–48",
                  "brief": "Activity + disposition separate choices.",
                  "side": "48 leads the selected PK set.",
                  "title": "Which molecules would you prioritize after Table 9?",
                  "question": "When potency and PK point in different directions, which trade-off is acceptable?",
                  "action": "Prioritize 48 for its combined profile, then examine oral exposure and broader selectivity before concluding that it is suitable to advance.",
                  "routes": [
                    {
                      "kind": "reported",
                      "label": "Best rat IV profile in the selected set",
                      "compounds": "48",
                      "why": "Lowest clearance and longest half-life, while retaining activity in human airway cells. The paper identifies 48 as the favored profile."
                    },
                    {
                      "kind": "inferred",
                      "label": "Lower priority for this combined objective",
                      "compounds": "28, 30, 45, 46 and 47",
                      "why": "Each has a limitation relative to 48 in the reported activity/PK comparison. This is not proof of a documented termination decision for each compound."
                    },
                    {
                      "kind": "unknown",
                      "label": "Do not invent comparative oral data",
                      "compounds": "28, 30, 45–47",
                      "why": "Table 9 is an IV PK comparison. A matched oral-F, permeability, metabolic-stability, or toxicity panel for these six is not reported."
                    }
                  ],
                  "cards": [
                    {
                      "number": 28,
                      "src": "assets/vertex-lead-compound-28.svg",
                      "fields": [
                        [
                          "HBE EC₅₀ (nM)",
                          "42"
                        ],
                        [
                          "Rat CL (mL/min/kg)",
                          "60.7"
                        ],
                        [
                          "Rat IV t½ (h)",
                          "1.3"
                        ]
                      ],
                      "badge": ""
                    },
                    {
                      "number": 30,
                      "src": "assets/vertex-lead-compound-30.svg",
                      "fields": [
                        [
                          "HBE EC₅₀ (nM)",
                          "97 ± 63"
                        ],
                        [
                          "Rat CL (mL/min/kg)",
                          "15.8"
                        ],
                        [
                          "Rat IV t½ (h)",
                          "2.9"
                        ]
                      ],
                      "badge": ""
                    },
                    {
                      "number": 45,
                      "src": "assets/vertex-lead-compound-45.svg",
                      "fields": [
                        [
                          "HBE EC₅₀ (nM)",
                          "5 ± 2"
                        ],
                        [
                          "Rat CL (mL/min/kg)",
                          "85.6"
                        ],
                        [
                          "Rat IV t½ (h)",
                          "0.7"
                        ]
                      ],
                      "badge": ""
                    },
                    {
                      "number": 46,
                      "src": "assets/vertex-lead-compound-46.svg",
                      "fields": [
                        [
                          "HBE EC₅₀ (nM)",
                          "45 ± 61"
                        ],
                        [
                          "Rat CL (mL/min/kg)",
                          "62.9"
                        ],
                        [
                          "Rat IV t½ (h)",
                          "1.1"
                        ]
                      ],
                      "badge": ""
                    },
                    {
                      "number": 47,
                      "src": "assets/vertex-lead-compound-47.svg",
                      "fields": [
                        [
                          "HBE EC₅₀ (nM)",
                          "22 ± 14"
                        ],
                        [
                          "Rat CL (mL/min/kg)",
                          "17.7"
                        ],
                        [
                          "Rat IV t½ (h)",
                          "2.9"
                        ]
                      ],
                      "badge": ""
                    },
                    {
                      "number": 48,
                      "src": "assets/vertex-lead-compound-48.svg",
                      "fields": [
                        [
                          "HBE EC₅₀ (nM)",
                          "22 ± 10"
                        ],
                        [
                          "Rat CL (mL/min/kg)",
                          "5.5"
                        ],
                        [
                          "Rat IV t½ (h)",
                          "9.5"
                        ]
                      ],
                      "badge": "Favored combined profile"
                    }
                  ],
                  "readouts": [
                    [
                      "28 versus 30",
                      "28 had the stronger HBE potency; 30 had lower clearance. Both deserved comparison—neither potency nor half-life alone settled the choice."
                    ],
                    [
                      "45 versus 46",
                      "45 had the strongest HBE potency in this set, but high clearance. 46’s 2 nM optical EC₅₀ did not translate into the strongest HBE result or a leading PK profile."
                    ],
                    [
                      "47 versus 48",
                      "Mean HBE EC₅₀ was 22 nM for both. 48 had lower CL (5.5 versus 17.7) and longer t½ (9.5 versus 2.9 h)."
                    ],
                    [
                      "Dose-aware comparison",
                      "IV doses ranged from 0.65 to 2.49 mg/kg. Raw AUC is not a same-dose ranking. Lower clearance and longer half-life are profile observations, not proven differences in metabolic mechanism."
                    ]
                  ],
                  "unknown": "HBE and optical assays are different biological systems. These are separate cellular pharmacology and rat PK results, not a paired in vivo PK/PD experiment. No universal pass/fail thresholds are supplied.",
                  "refs": [
                    "compare"
                  ],
                  "source": "Tables 5, 8 and 9.",
                  "comparison": {
                    "title": "Both branches meet: activity, disposition and the limits of the comparison",
                    "caption": "Both branches meet: activity, disposition and the limits of the comparison",
                    "columns": [
                      "Compound",
                      "Optical EC₅₀ (nM)",
                      "HBE EC₅₀ (nM)",
                      "Rat IV CL (mL/min/kg)",
                      "Rat IV t½ (h)",
                      "Oral F",
                      "Trade-off"
                    ],
                    "rows": [
                      [
                        "28",
                        "9 ± 4",
                        "42",
                        "60.7",
                        "1.3",
                        "Not reported",
                        "Stronger HBE activity than 30; higher clearance."
                      ],
                      [
                        "30",
                        "11 ± 2",
                        "97 ± 63",
                        "15.8",
                        "2.9",
                        "Not reported",
                        "Lower clearance than 28; weaker HBE activity."
                      ],
                      [
                        "45",
                        "3 ± 2",
                        "5 ± 2",
                        "85.6",
                        "0.7",
                        "Not reported",
                        "Strongest HBE potency in the set; highest clearance."
                      ],
                      [
                        "46",
                        "2 ± 1",
                        "45 ± 61",
                        "62.9",
                        "1.1",
                        "Not reported",
                        "Optical potency does not distinguish a leading HBE/PK profile."
                      ],
                      [
                        "47",
                        "3 ± 1",
                        "22 ± 14",
                        "17.7",
                        "2.9",
                        "Not reported",
                        "Similar mean HBE potency to 48; higher clearance."
                      ],
                      [
                        "48",
                        "3 ± 1",
                        "22 ± 10",
                        "5.5",
                        "9.5",
                        "Rat 55%; dog 43% · follow-up",
                        "Best rat IV profile of this set with useful HBE activity."
                      ]
                    ],
                    "structures": true,
                    "highlightRows": [
                      5
                    ]
                  },
                  "comparisonNote": "Oral F for 48 comes from additional profiling (Table 10), not a matched six-compound oral study. IV doses differed; do not rank raw AUC as a same-dose comparison. Full dose, AUC and Vss data are available below."
                },
                {
                  "id": "confirm",
                  "label": "Test oral use and liabilities",
                  "numbers": "48 versus the lead",
                  "brief": "Oral PK, properties and selectivity.",
                  "side": "Aqueous solubility remains poor.",
                  "title": "Does the promising profile survive broader testing?",
                  "question": "Has 48 addressed the liabilities that made 16 an optimization starting point?",
                  "action": "Support further development of 48 using oral exposure, multi-species PK and broader screens; carry the unresolved formulation and safety questions forward.",
                  "routes": [
                    {
                      "kind": "reported",
                      "label": "Evidence supporting further development",
                      "compounds": "48",
                      "why": "Oral bioavailability in rat and dog; more favorable disposition than lead 16; improved organic solubility; broader selectivity, CYP and hERG results."
                    },
                    {
                      "kind": "reported",
                      "label": "Residual limitation",
                      "compounds": "48",
                      "why": "The conclusion still describes poor aqueous solubility. An improved profile is not a problem-free molecule."
                    },
                    {
                      "kind": "unknown",
                      "label": "Incomplete ADME and safety picture",
                      "compounds": "16–48",
                      "why": "The article does not report a full metabolism, permeability, excretion, or toxicology package for the series."
                    }
                  ],
                  "cards": [
                    {
                      "number": 16,
                      "src": "assets/vertex-lead-compound-16.svg",
                      "fields": [
                        [
                          "Rat oral F",
                          "11%"
                        ],
                        [
                          "Dog IV t½",
                          "0.9 h"
                        ],
                        [
                          "GABAₐ binding",
                          "IC₅₀ ≈0.1 µM"
                        ]
                      ],
                      "badge": "Starting lead"
                    },
                    {
                      "number": 48,
                      "src": "assets/vertex-lead-compound-48.svg",
                      "fields": [
                        [
                          "Rat / dog oral F",
                          "55% / 43%"
                        ],
                        [
                          "Dog IV t½",
                          "13 h"
                        ],
                        [
                          "Broad selectivity",
                          "No significant activity in 160-target panel"
                        ],
                        [
                          "Aqueous solubility",
                          "Still poor"
                        ]
                      ],
                      "badge": "Selected molecule"
                    }
                  ],
                  "readouts": [
                    [
                      "Oral exposure / PK",
                      "48: rat CL 5.5 mL/min/kg, t½ 9.5 h; dog CL 0.7, t½ 13 h. Oral AUC and Cmax reportedly rose linearly over 1–200 mg/kg in rats and 3–80 mg/kg in dogs. Dose-specific values are not tabulated."
                    ],
                    [
                      "Selectivity",
                      "48’s GABAₐ assay activity at 10 µM was 18%, versus 47% for 36 and 52% for 45. The authors report no significant activity in a 160-target panel including GABAₐ. These are not identical panels to the original >60-target screen."
                    ],
                    [
                      "Early safety and interaction screens",
                      "48: hERG IC₅₀ >10 µM; CYP IC₅₀ >20 µM for 1A2, 2C9, 2C19, 2E1, 3A4 and 2D6. These screens do not establish absence of toxicity or a clinical exposure margin."
                    ],
                    [
                      "Properties and practical development",
                      "Organic solubility improved, but aqueous solubility stayed poor. The article discloses a synthesis of 48; it does not demonstrate a GMP-ready manufacturing process."
                    ]
                  ],
                  "unknown": "The solubility footnote cited for 48 names compound 38. Its numerical values are not silently reassigned to 48. The paper also lacks a full matched ADME panel, NOAEL, and integrated exposure-based safety margin.",
                  "refs": [
                    "exposure",
                    "properties",
                    "selectivity"
                  ],
                  "source": "Tables 3 and 10; text pp. 9780–9781; footnotes 17–18 and 23.",
                  "comparison": {
                    "title": "Did 48 address the liabilities of lead 16?",
                    "caption": "Did 48 address the liabilities of lead 16?",
                    "columns": [
                      "Dimension",
                      "Lead 16",
                      "Compound 48",
                      "Interpretation"
                    ],
                    "rows": [
                      [
                        "Rat oral bioavailability",
                        "11%",
                        "55%",
                        "Improved systemic availability; mechanism of improvement is not isolated."
                      ],
                      [
                        "Dog oral bioavailability",
                        "Not determined",
                        "43%",
                        "Oral exposure demonstrated for 48; no paired F comparison with 16."
                      ],
                      [
                        "Rat IV disposition",
                        "CL 28 mL/min/kg; t½ 1.3 h",
                        "CL 5.5; t½ 9.5 h",
                        "Lower clearance and longer half-life."
                      ],
                      [
                        "Dog IV disposition",
                        "CL 17 mL/min/kg; t½ 0.9 h",
                        "CL 0.7; t½ 13 h",
                        "Disposition improvement is also seen in a non-rodent species."
                      ],
                      [
                        "Solubility",
                        "Low aqueous and organic solubility",
                        "Improved organic solubility; aqueous solubility still poor",
                        "Partial improvement; formulation remains important."
                      ],
                      [
                        "GABAₐ binding",
                        "IC₅₀ ≈0.1 µM",
                        "18% reported assay activity at 10 µM; no significant signal in broader panel",
                        "Different readouts; do not calculate an IC₅₀ improvement from the percentage."
                      ],
                      [
                        "Broad selectivity",
                        ">60-target panel; GABAₐ signal",
                        "No significant activity against 160 targets",
                        "Expanded evidence from non-identical panels."
                      ],
                      [
                        "CYP inhibition",
                        "Not reported here",
                        "IC₅₀ >20 µM for six listed isoforms",
                        "Inhibition screen, not metabolic clearance or a complete interaction assessment."
                      ],
                      [
                        "hERG inhibition",
                        "Not reported here",
                        "IC₅₀ >10 µM",
                        "An early cardiac-risk screen, not a complete safety conclusion."
                      ]
                    ],
                    "structures": false
                  },
                  "comparisonNote": "The solubility footnote cited for 48 names compound 38; its numerical solubility values are not reassigned to 48. Additional species, dose-proportionality findings and assay details remain below."
                },
                {
                  "id": "advance",
                  "label": "Advance with open questions",
                  "numbers": "48",
                  "brief": "A supported development decision.",
                  "side": "Further studies remain necessary.",
                  "title": "What exactly does the decision to advance 48 mean?",
                  "question": "Can the team explain both why this molecule merits investment and which evidence still needs to be generated?",
                  "action": "Advance 48 for further preclinical and clinical evaluation, as the authors report. Build the next evidence package around the remaining uncertainties.",
                  "routes": [
                    {
                      "kind": "reported",
                      "label": "Selected for further evaluation",
                      "compounds": "48",
                      "why": "Potency, relevant human-cell pharmacology, selectivity and the favorable PK profile supported the authors’ selection."
                    },
                    {
                      "kind": "inferred",
                      "label": "Program owner’s next evidence priorities",
                      "compounds": "48",
                      "why": "Resolve formulation needs; connect relevant exposure to pharmacology; complete appropriate nonclinical safety and product-quality work."
                    },
                    {
                      "kind": "unknown",
                      "label": "Not established by this article",
                      "compounds": "Formal internal DC gate / IND readiness",
                      "why": "A discovery paper is not the full decision dossier, toxicology package or IND submission."
                    }
                  ],
                  "cards": [
                    {
                      "number": 48,
                      "src": "assets/vertex-lead-compound-48.svg",
                      "fields": [
                        [
                          "G551D/F508del HBE EC₅₀",
                          "0.236 ± 0.200 µM"
                        ],
                        [
                          "Maximal chloride secretion",
                          "Close to 50% of non-CF HBE"
                        ],
                        [
                          "Paired in vivo PK/PD",
                          "Not presented across 16–48"
                        ]
                      ],
                      "badge": "Selected molecule"
                    }
                  ],
                  "readouts": [
                    [
                      "Disease-relevant pharmacology",
                      "48 potentiated F508del and G551D CFTR in patient-derived airway cells. The G551D results helped guide the initial clinical population, as the authors state."
                    ],
                    [
                      "PK/PD bridge",
                      "The article presents cellular concentration–response data and animal PK separately. It does not provide a paired animal exposure–PD time course across the analog series. Cellular EC₅₀ is not automatically a target human plasma concentration."
                    ],
                    [
                      "Selection rationale",
                      "48 was not the winner of every potency assay. Its combination of pharmacology, disposition, selectivity and workable properties supported advancement."
                    ],
                    [
                      "Keep the decision time-consistent",
                      "Later clinical benefit and tolerability were reported in the article’s retrospective discussion. They were not evidence available at the original selection decision."
                    ]
                  ],
                  "unknown": "No dates or universal stage thresholds are inferred. The map reconstructs the published reasoning; it does not claim access to Vertex’s internal meeting records or every experiment.",
                  "refs": [
                    "translation"
                  ],
                  "source": "Text pp. 9780–9781; Tables 9–10; cited clinical studies 12–13.",
                  "comparison": {
                    "title": "What supports advancement, and what remains to establish?",
                    "caption": "What supports advancement, and what remains to establish?",
                    "columns": [
                      "Evidence",
                      "Reported result for 48",
                      "Supports",
                      "Remaining boundary"
                    ],
                    "rows": [
                      [
                        "Relevant human-cell activity",
                        "G551D/F508del HBE EC₅₀ 0.236 ± 0.200 µM; maximal secretion close to 50% of non-CF HBE",
                        "Disease-relevant functional rescue and the G551D clinical rationale",
                        "Cellular response is not clinical efficacy."
                      ],
                      [
                        "Exposure",
                        "Oral exposure in rat/dog and IV PK across four species",
                        "Further development of an orally delivered molecule",
                        "Human clearance prediction and human dosing remain to be tested."
                      ],
                      [
                        "PK/PD",
                        "Cellular concentration–response and animal PK reported separately",
                        "A pharmacology/exposure rationale",
                        "No paired in vivo exposure–PD time course across 16–48."
                      ],
                      [
                        "Selectivity and early screens",
                        "Broader target panel, CYP and hERG results",
                        "A more thoroughly characterized profile",
                        "Not a full toxicology package, NOAEL or safety margin."
                      ],
                      [
                        "Practical development",
                        "Improved organic solubility; synthetic route disclosed",
                        "A basis for further formulation and process work",
                        "Aqueous solubility remains poor; GMP manufacture is not established here."
                      ]
                    ],
                    "structures": false
                  },
                  "comparisonNote": "The paper reports selection of 48 for further preclinical and clinical evaluation. It does not document the complete internal DC gate or IND readiness."
                }
              ]
            }
          }
        ]
      },
      "exampleLabel": "PUBLISHED OPTIMIZATION"
    },
    {
      "id": "candidate-nomination",
      "category": "candidate",
      "title": "From candidate to development plan",
      "goal": "Distinguish lead optimization from candidate development, explain why laboratory work continues, and turn remaining questions into a study-specific development plan.",
      "concept": "Lead optimization establishes a molecule worth developing. Candidate development builds the evidence and product needed to support a proposed human study.",
      "takeaway": "A promising molecule is the starting point. Readiness for human testing depends on the evidence for a defined product and proposed study.",
      "exampleTitle": "Follow one program across different kinds of evidence.",
      "example": "Osimertinib provides a published oncology case for Part 3. The discovery paper describes biological activity and PK/PD; the public FDA review includes material from the IND review and later NDA assessments. Keep those sources and stages distinct.",
      "worked": "Use a source for the claim it actually supports. The case illustrates development reasoning; the collection of public documents is not a reconstruction of the full initial IND.",
      "diagram": [
        [
          "Selected molecule",
          "A documented development candidate"
        ],
        [
          "Development commitment",
          "Build evidence for the proposed study"
        ]
      ],
      "exampleSteps": [
        [
          "Nonclinical rationale",
          "Connect mutant-EGFR activity to disease-model responses and exposure."
        ],
        [
          "Safety support",
          "Inspect the study design, organ findings, and quantitative limits of exposure measurements."
        ],
        [
          "Product quality",
          "Connect the active ingredient to its formulation, controls, and stability support."
        ]
      ],
      "question": {
        "title": "Why does laboratory work continue?",
        "prompt": "The selected candidate meets the team’s lead-optimization goals. What should determine the next laboratory work?",
        "options": [
          [
            "Repeat every discovery assay under GLP before planning a study.",
            "No. Reuse suitable evidence and identify specific gaps. GLP does not apply to every discovery or development experiment.",
            false
          ],
          [
            "Compare existing evidence with the proposed human study, then address the important gaps.",
            "Correct. The next work characterizes risks and exposure, controls the material, and supports the proposed study. It builds on the selection evidence.",
            true
          ],
          [
            "Keep making analogs until there are no remaining uncertainties.",
            "No. Development usually concentrates on the chosen molecule. New findings may justify revisiting the choice, but uncertainty cannot be eliminated before human testing.",
            false
          ]
        ],
        "hint": "Ask what the current evidence supports—and what the proposed study still requires."
      },
      "sources": [
        {
          "label": "Cross et al., Cancer Discovery (2014): AZD9291 preclinical and early clinical studies",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4315625/"
        },
        {
          "label": "FDA pharmacology review (2015), appendix from IND 117879: printed pp. 127–134 (PDF pp. 134–141)",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2015/208065Orig1s000PharmR.pdf#page=134"
        },
        {
          "label": "FDA quality review (2015): drug product summary, printed p. 6 (PDF p. 7)",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2015/208065Orig1s000ChemR.pdf#page=7"
        },
        {
          "label": "FDA: the evidence and clinical plan in an IND",
          "url": "https://www.fda.gov/drugs/types-applications/investigational-new-drug-application-ind"
        }
      ],
      "transitionGuide": {
        "tabs": [
          {
            "id": "nomination",
            "label": "Why lab work continues"
          },
          {
            "id": "questions",
            "label": "What remains to establish"
          },
          {
            "id": "plan",
            "label": "Plan the work"
          }
        ],
        "nomination": {
          "title": "The molecule is selected. The question changes.",
          "intro": "Potency, selectivity, and acceptable PK/PD can justify selecting a candidate. Each finding still has a boundary: the assay, model, exposure, dosing duration, and material tested.",
          "stages": [
            {
              "title": "Lead optimization",
              "question": "Which molecule should we develop?",
              "action": "Use SAR and profiling to improve and compare molecules.",
              "output": "A selected molecule with a promising overall profile."
            },
            {
              "title": "Candidate development",
              "question": "What evidence do we need before testing in humans?",
              "action": "Characterize the selected molecule, control its material, and address the risks relevant to the proposed study.",
              "output": "An evidence package and product that can support the planned clinical investigation."
            }
          ],
          "bridge": "DC nomination",
          "keep": "Selecting a candidate commits the team to development. It does not establish readiness to dose people.",
          "note": "The molecule’s structure usually remains fixed while synthesis, formulation, and analytical controls develop. New findings can still require revisiting the candidate. Work often begins before nomination; this is a change in emphasis, not a sharp experimental boundary."
        },
        "questions": {
          "title": "Carry the evidence forward. Resolve what it does not yet answer.",
          "intro": "The same disciplines remain involved. The depth and purpose of the work change: a result useful for choosing an analog may not answer the questions needed for a human study.",
          "columns": [
            "Evidence from lead optimization",
            "Question for candidate development"
          ],
          "rows": [
            {
              "area": "Activity & selectivity",
              "before": "Reproducible activity, selectivity, and efficacy in relevant models.",
              "after": "How strong is the rationale for the intended patient population? Which on-target and off-target effects could matter at the planned exposures?"
            },
            {
              "area": "Exposure & effect",
              "before": "PK and PD at selected doses, schedules, and in selected models.",
              "after": "What supports human dose and schedule selection? Assess species relevance, accumulation, metabolites, and the connection between exposure and effect as needed."
            },
            {
              "area": "Safety",
              "before": "Early screens and tolerability findings that helped rank candidates.",
              "after": "Which organs or functions are at risk, at what exposures, and with what reversibility? Design the safety assessment around the proposed clinical study."
            },
            {
              "area": "Drug material",
              "before": "A workable synthesis and material suitable for discovery experiments.",
              "after": "Can controlled material be supplied for toxicology and clinical use? Establish appropriate identity, purity, strength, and stability; assess relevant differences between study materials."
            }
          ],
          "keep": "Reuse suitable evidence. Add or confirm studies where a decision-critical gap remains.",
          "note": "An existing study may already address a question. Its design, material, exposure measurements, and records determine how it can be used. Not every experiment needs repeating or GLP; applicable pivotal safety studies require the appropriate quality standard."
        },
        "plan": {
          "title": "Turn the remaining questions into a development plan.",
          "intro": "Begin with a proposed study: who will receive the drug, by which route, for how long, and on what schedule? Use that context to prioritize the remaining evidence and coordinate the work.",
          "streams": [
            {
              "title": "Nonclinical evidence",
              "text": "Select the pharmacology, exposure, and safety work needed to address the study’s remaining risks.",
              "lesson": "nonclinical-pharmacology",
              "link": "Explore nonclinical evidence"
            },
            {
              "title": "Drug material · CMC",
              "text": "Coordinate chemistry, manufacturing, and controls: supply suitable material, characterize it, and support its formulation and storage.",
              "lesson": "cmc-material",
              "link": "Explore CMC"
            },
            {
              "title": "Clinical & regulatory planning",
              "text": "Translate the evidence into dose selection, monitoring, a protocol, and a regulatory strategy.",
              "lesson": "clinical",
              "link": "Explore clinical planning"
            }
          ],
          "keep": "For each gap: define the evidence needed → assign an owner and dependencies → set the decision the result will inform.",
          "note": "Plan these streams together. Material must be ready for studies, and new exposure or safety findings may change the formulation or clinical plan. The initial IND supports the proposed investigation; later studies require further evidence."
        },
        "sources": [
          {
            "label": "FDA: pharmacology and toxicology evidence for the proposed study",
            "url": "https://www.fda.gov/drugs/investigational-new-drug-application-ind/ind-applications-clinical-investigations-pharmacology-and-toxicology-pt-information"
          },
          {
            "label": "FDA: phase-appropriate chemistry, manufacturing, and controls",
            "url": "https://www.fda.gov/drugs/investigational-new-drug-application-ind/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information"
          },
          {
            "label": "ICH M3(R2): timing and scope of nonclinical safety studies",
            "url": "https://www.fda.gov/media/71542/download"
          }
        ]
      },
      "exampleLabel": "OSIMERTINIB · EVIDENCE PLANNING",
      "sourceChecked": "16 September 2026"
    },
    {
      "id": "nonclinical-pharmacology",
      "category": "nonclinical",
      "title": "Connect mechanism to disease benefit",
      "goal": "Carry a specific, bounded rationale into the development plan.",
      "concept": "A candidate needs a biological rationale for the intended patients. Connect target modulation to a useful effect in relevant systems, and make the limits of those systems explicit.",
      "takeaway": "Target modulation, disease-model activity, and human benefit are different claims.",
      "evidenceGuide": {
        "steps": [
          {
            "label": "Choose the context",
            "question": "Does the model represent the intended disease?",
            "evidence": "Check the target, disease driver, relevant resistance mechanisms, and whether the compound acts on the model’s target.",
            "decision": "Choose complementary models that address the clinical hypothesis and its main limitations."
          },
          {
            "label": "Test the mechanism",
            "question": "Did the compound produce the intended biological effect?",
            "evidence": "Measure target or pathway modulation alongside concentration. Use controls and independent evidence to challenge alternative explanations.",
            "decision": "Decide whether the observed activity supports the proposed mechanism."
          },
          {
            "label": "Test disease benefit",
            "question": "Does the biological effect change a relevant disease outcome?",
            "evidence": "Read disease endpoints with controls, exposure, dose schedule, and variability. A tumor response in one model does not establish a human response.",
            "decision": "Carry a specific, bounded rationale into the development plan."
          }
        ],
        "case": {
          "title": "Osimertinib: resistance defines the biological question.",
          "intro": "AZD9291 was developed to inhibit sensitizing EGFR mutants and the T790M resistance mutant with less activity against wild-type EGFR. Read the models in the context of that original development question.",
          "rows": [
            {
              "label": "PC-9 xenografts",
              "value": "EGFR exon 19 deletion: a sensitizing-mutant model.",
              "status": "REPORTED"
            },
            {
              "label": "H1975 xenografts",
              "value": "EGFR L858R/T790M: a resistance-mutant model.",
              "status": "REPORTED"
            },
            {
              "label": "Tumor response",
              "value": "Regression occurred in both models with oral treatment.",
              "status": "MEASURED"
            }
          ],
          "limit": "These findings support the rationale in the tested models. They do not establish human efficacy or normal-tissue safety. Wild-type EGFR cancer cells are not a substitute for normal human tissue.",
          "sources": [
            0
          ]
        },
        "terms": [
          {
            "term": "Pharmacology",
            "definition": "The drug’s biological actions."
          },
          {
            "term": "Model relevance",
            "definition": "How well a system addresses the particular disease and intervention question."
          }
        ],
        "scope": "The oncology example illustrates the reasoning. Model selection must follow each program’s target, mechanism, and proposed use."
      },
      "question": {
        "title": "Which claim does the model support?",
        "prompt": "A resistant-tumor model shows pathway suppression and tumor regression. Which conclusion is defensible?",
        "options": [
          [
            "The drug has demonstrated clinical benefit in resistant lung cancer.",
            "A nonclinical tumor response does not establish benefit in patients.",
            false
          ],
          [
            "The findings support the mechanism and activity in that model; translation and safety remain to be assessed.",
            "Correct. Keep the positive finding and its model boundaries visible.",
            true
          ],
          [
            "A tumor response makes normal-tissue safety studies unnecessary.",
            "A tumor model does not provide a complete assessment of potential harm.",
            false
          ]
        ],
        "hint": "Keep the conclusion at the level of the evidence."
      },
      "sources": [
        {
          "label": "Cross et al., Cancer Discovery (2014): AZD9291 preclinical and early clinical studies",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4315625/"
        },
        {
          "label": "FDA: pharmacology and toxicology supporting the proposed study",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-pharmacology-and-toxicology-pt-information"
        },
        {
          "label": "ICH S9: nonclinical evaluation in its defined advanced-cancer setting",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/s9-nonclinical-evaluation-anticancer-pharmaceuticals"
        }
      ],
      "sourceChecked": "16 September 2026"
    },
    {
      "id": "nonclinical-pkpd",
      "category": "nonclinical",
      "title": "Connect dose, exposure, and effect",
      "goal": "Use the relationship to plan informative dosing studies and cautious human predictions.",
      "concept": "Administered dose starts the experiment. Concentration over time and the resulting biological effect help explain what that dose actually did.",
      "takeaway": "A short plasma half-life does not automatically mean a short biological effect.",
      "evidenceGuide": {
        "steps": [
          {
            "label": "Follow the drug",
            "question": "What concentrations were achieved, where, and for how long?",
            "evidence": "Examine PK, unbound fraction where relevant, target-site distribution, active metabolites, and assay reliability. Distinguish measured concentrations from modeled estimates.",
            "decision": "Identify which exposure measure is informative for this mechanism."
          },
          {
            "label": "Follow the response",
            "question": "How does the biological effect change over time?",
            "evidence": "Measure target engagement or pathway response at informative times. Effects can lag behind concentration or persist after plasma levels fall.",
            "decision": "Check whether the dose schedule produces the intended duration of biological activity."
          },
          {
            "label": "Connect the evidence",
            "question": "Does exposure explain the desired effect and potential harm?",
            "evidence": "Compare exposure, PD, disease endpoints, and tolerability. Align species, compartments, assay conditions, and timing before comparing values.",
            "decision": "Use the relationship to plan informative dosing studies and cautious human predictions."
          }
        ],
        "case": {
          "title": "Osimertinib: concentration and response run on different clocks.",
          "intro": "The 2014 paper reported an irreversible inhibitor. After a single 5 mg/kg dose in H1975-bearing mice, tumor samples were collected through 30 hours.",
          "rows": [
            {
              "label": "Mouse plasma half-life",
              "value": "Approximately 3 hours.",
              "status": "MEASURED"
            },
            {
              "label": "Tumor phospho-EGFR",
              "value": "Suppression was still observed at 30 hours.",
              "status": "MEASURED"
            },
            {
              "label": "Interpretation",
              "value": "Persistent target inhibition is consistent with irreversible binding.",
              "status": "INTERPRETATION"
            }
          ],
          "limit": "Downstream markers recovered sooner than phospho-EGFR. These observations do not define a human dose or prove sustained tumor control from every short exposure.",
          "sources": [
            0
          ],
          "visual": {
            "kind": "duration"
          }
        },
        "terms": [
          {
            "term": "ADME",
            "definition": "Absorption, distribution, metabolism, and excretion: processes shaping drug disposition."
          },
          {
            "term": "PK",
            "definition": "Pharmacokinetics: drug concentrations over time."
          },
          {
            "term": "PD",
            "definition": "Pharmacodynamics: biological effects of the drug."
          },
          {
            "term": "DMPK",
            "definition": "Drug metabolism and pharmacokinetics: a discipline studying disposition and exposure, working with pharmacology on PK/PD."
          }
        ],
        "scope": "The graphic compares reported time points; it is not a fitted PK curve or a dosing recommendation."
      },
      "question": {
        "title": "What should guide the schedule?",
        "prompt": "Mouse plasma half-life is about 3 hours, but tumor phospho-EGFR remains suppressed at 30 hours. What is the best next step?",
        "options": [
          [
            "Use a dosing interval of exactly three hours.",
            "Half-life alone does not establish the dosing interval for an irreversible inhibitor.",
            false
          ],
          [
            "Assume the tumor will remain controlled for thirty hours in humans.",
            "A mouse biomarker observation does not establish a human efficacy duration.",
            false
          ],
          [
            "Examine downstream PD, tumor response, active metabolites, and tolerability alongside the concentration profile.",
            "Correct. Integrate the biological time course with exposure and relevant outcomes.",
            true
          ]
        ],
        "hint": "The concentration clock and the effect clock need not match."
      },
      "sources": [
        {
          "label": "Cross et al., Cancer Discovery (2014): AZD9291 preclinical and early clinical studies",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4315625/"
        },
        {
          "label": "FDA: exposure–response relationships",
          "url": "https://www.fda.gov/media/71277/download"
        },
        {
          "label": "ICH S3A: exposure measurement within toxicity studies",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/s3a-toxicokinetics-assessment-systemic-exposure-toxicity-studies"
        }
      ],
      "sourceChecked": "16 September 2026"
    },
    {
      "id": "nonclinical-safety",
      "category": "nonclinical",
      "title": "Identify and interpret potential harm",
      "goal": "Decide what further investigation and potential clinical safeguards the findings call for.",
      "concept": "Safety work asks what can be harmed, at what exposure, and under which conditions. Findings guide risk assessment; a single negative assay does not establish that a candidate is safe.",
      "takeaway": "Interpret the finding together with severity, exposure, duration, reversibility, and human relevance.",
      "evidenceGuide": {
        "steps": [
          {
            "label": "Anticipate the risks",
            "question": "What could the drug do beyond the intended disease effect?",
            "evidence": "Consider normal-tissue target biology, off-target activity, metabolites, and known class effects. Examine vital functions as well as tissue injury.",
            "decision": "Select focused investigations and meaningful endpoints instead of relying on one safety screen."
          },
          {
            "label": "Read the findings",
            "question": "What changed during dosing?",
            "evidence": "Combine clinical observations, laboratory measurements, organ findings, and histopathology with toxicokinetic exposure. Survival alone is not a safety conclusion.",
            "decision": "Identify target organs and exposure-associated findings that could constrain development."
          },
          {
            "label": "Assess recovery",
            "question": "What improves, persists, or progresses after dosing stops?",
            "evidence": "Examine the affected tissue, function, severity, and follow-up time. Improvement in one endpoint does not establish full recovery.",
            "decision": "Decide what further investigation and potential clinical safeguards the findings call for."
          }
        ],
        "case": {
          "title": "Osimertinib: no deaths did not mean no injury.",
          "intro": "The FDA’s later public review reproduces a one-month rat study from IND 117879. Its record separates survival from organ findings.",
          "rows": [
            {
              "label": "Survival",
              "value": "No preterm deaths.",
              "status": "REPORTED"
            },
            {
              "label": "Tissue findings",
              "value": "Target organs included the gastrointestinal tract, eyes, skin, and reproductive organs.",
              "status": "REPORTED"
            },
            {
              "label": "Decision to investigate",
              "value": "Evaluate which findings matter for the intended participants and exposure.",
              "status": "INTERPRETATION"
            }
          ],
          "limit": "This is a specific study summary, not an overall safety verdict. Recovery and human relevance require their own evidence.",
          "sources": [
            0
          ]
        },
        "terms": [
          {
            "term": "Safety pharmacology",
            "definition": "Assessment of potentially undesirable effects on physiological functions, including cardiovascular, respiratory, and central nervous system function."
          },
          {
            "term": "General toxicology",
            "definition": "Assessment of adverse effects across tissues and systems during specified exposure conditions."
          },
          {
            "term": "Histopathology",
            "definition": "Microscopic examination of tissues for structural changes."
          }
        ],
        "scope": "Study choices and timing depend on the clinical context. ICH S9 applies within its defined advanced-cancer scope; it is not a universal small-molecule checklist."
      },
      "question": {
        "title": "What does survival tell us?",
        "prompt": "All animals survived, but histopathology identifies treatment-related tissue injury. What should the team do?",
        "options": [
          [
            "Integrate injury, exposure, severity, and recovery evidence before deciding what the study supports.",
            "Correct. Safety interpretation depends on the complete pattern of findings.",
            true
          ],
          [
            "Mark the candidate safe because no animals died.",
            "Survival does not exclude clinically important harm.",
            false
          ],
          [
            "Discard the histopathology because it was not accompanied by mortality.",
            "Tissue injury may matter even without deaths.",
            false
          ]
        ],
        "hint": "Look beyond mortality."
      },
      "sources": [
        {
          "label": "FDA pharmacology review (2015), appendix from IND 117879: printed pp. 127–134 (PDF pp. 134–141)",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2015/208065Orig1s000PharmR.pdf#page=134"
        },
        {
          "label": "ICH S9: nonclinical evaluation in its defined advanced-cancer setting",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/s9-nonclinical-evaluation-anticancer-pharmaceuticals"
        },
        {
          "label": "ICH M3(R2): nonclinical support and study timing",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/m3r2-nonclinical-safety-studies-conduct-human-clinical-trials-and-marketing-authorization"
        },
        {
          "label": "FDA: pharmacology and toxicology supporting the proposed study",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-pharmacology-and-toxicology-pt-information"
        }
      ],
      "sourceChecked": "16 September 2026"
    },
    {
      "id": "nonclinical-package",
      "category": "nonclinical",
      "title": "Build a credible safety package",
      "goal": "Address gaps in reliability or interpretation before using the study to support a clinical plan.",
      "concept": "A safety finding is useful only when the study design, test material, exposure measurements, and records allow the team to interpret it for the proposed investigation.",
      "takeaway": "Study quality, exposure coverage, and biological relevance answer different questions.",
      "evidenceGuide": {
        "steps": [
          {
            "label": "Match the study",
            "question": "Does the design support the proposed human investigation?",
            "evidence": "Relate population, route, schedule, duration, and prior evidence to the supporting studies. Use relevant species and justify the study strategy.",
            "decision": "Identify which evidence is needed before the proposed study and which work can occur later."
          },
          {
            "label": "Measure exposure",
            "question": "Do the TK measurements actually quantify the relevant analytes?",
            "evidence": "Check sensitivity, selectivity, sample stability, time points, metabolites, and the relationship to the toxicity findings. A detected peak is not always a quantitative result.",
            "decision": "Decide whether exposure comparisons are reliable enough for the intended conclusion."
          },
          {
            "label": "Check integrity",
            "question": "Can the study and its interpretation be reconstructed?",
            "evidence": "Review the applicable GLP status, protocol, quality assurance, raw records, deviations, test-item characterization, and final report.",
            "decision": "Address gaps in reliability or interpretation before using the study to support a clinical plan."
          }
        ],
        "case": {
          "title": "Osimertinib: a metabolite was detected, but not quantified.",
          "intro": "In the rat study reproduced from the IND review, FDA examined the analytical evidence alongside the reported study status.",
          "rows": [
            {
              "label": "Study conduct",
              "value": "GLP compliance and a QA statement were recorded.",
              "status": "REPORTED"
            },
            {
              "label": "Exposure sampling",
              "value": "TK was assessed on dosing Days 1 and 28.",
              "status": "MEASURED"
            },
            {
              "label": "Analytical limitation",
              "value": "A co-eluting peak prevented quantitative assessment of AZ5104; results were present/absent.",
              "status": "LIMITATION"
            }
          ],
          "limit": "GLP status did not remove this analytical limitation. A binary detection result cannot establish a metabolite AUC or a quantitative exposure margin.",
          "sources": [
            0
          ]
        },
        "terms": [
          {
            "term": "TK",
            "definition": "Toxicokinetics: exposure measurements within toxicity studies."
          },
          {
            "term": "GLP",
            "definition": "Good Laboratory Practice: requirements for organization, conduct, documentation, and quality assurance of covered nonclinical studies."
          },
          {
            "term": "Exposure margin",
            "definition": "A comparison between relevant animal and human exposures; its interpretation depends on the endpoint, analyte, and uncertainty."
          }
        ],
        "scope": "Before human data exist, clinical exposure may be predicted. Label the prediction and its uncertainty; do not present it as measured."
      },
      "question": {
        "title": "Can this result support an exposure margin?",
        "prompt": "A metabolite was reported as present/absent because an interfering peak prevented quantification. Can the team calculate its exposure margin from that result?",
        "options": [
          [
            "Yes, because the study was GLP-compliant.",
            "GLP does not turn a non-quantitative measurement into a concentration.",
            false
          ],
          [
            "No. Reliable quantitative exposure data or other justified evidence are needed for that comparison.",
            "Correct. Resolve the analytical limitation or justify an appropriate alternative evidence strategy.",
            true
          ],
          [
            "Yes, by assigning the parent drug’s AUC to the metabolite.",
            "Parent and metabolite exposures are not interchangeable.",
            false
          ]
        ],
        "hint": "Separate confidence in study conduct from the capability of a particular assay."
      },
      "sources": [
        {
          "label": "FDA pharmacology review (2015), appendix from IND 117879: printed pp. 127–134 (PDF pp. 134–141)",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2015/208065Orig1s000PharmR.pdf#page=134"
        },
        {
          "label": "ICH S3A: exposure measurement within toxicity studies",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/s3a-toxicokinetics-assessment-systemic-exposure-toxicity-studies"
        },
        {
          "label": "21 CFR Part 58: Good Laboratory Practice for nonclinical laboratory studies",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-58"
        },
        {
          "label": "ICH M3(R2): nonclinical support and study timing",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/m3r2-nonclinical-safety-studies-conduct-human-clinical-trials-and-marketing-authorization"
        },
        {
          "label": "ICH S9: nonclinical evaluation in its defined advanced-cancer setting",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/s9-nonclinical-evaluation-anticancer-pharmaceuticals"
        }
      ],
      "sourceChecked": "16 September 2026"
    },
    {
      "id": "cmc-material",
      "category": "cmc",
      "title": "Define the drug people will receive",
      "goal": "Determine whether existing support is adequate or additional bridging work is needed.",
      "concept": "The molecular structure does not fully define the administered product. Specify the active ingredient, its form, the formulation, the dose basis, and the material used in each supporting study.",
      "takeaway": "Connect the molecule, the drug substance, and the finished product before comparing doses or study results.",
      "evidenceGuide": {
        "steps": [
          {
            "label": "Define the substance",
            "question": "Which chemical material is being made and tested?",
            "evidence": "Establish identity and the relevant salt, solid form, composition, and purity. Track the batch used in each study.",
            "decision": "Make the test item unambiguous."
          },
          {
            "label": "Define the product",
            "question": "What formulation and dose will actually be administered?",
            "evidence": "Specify the active content, excipients, dosage form, route, and relevant package. Distinguish mass of salt from mass of active moiety.",
            "decision": "Make the dose and product composition interpretable."
          },
          {
            "label": "Connect study materials",
            "question": "Does existing evidence apply to the proposed clinical material?",
            "evidence": "Compare nonclinical and clinical batches and formulations. Assess differences in impurities, stability, delivered dose, or exposure.",
            "decision": "Determine whether existing support is adequate or additional bridging work is needed."
          }
        ],
        "case": {
          "title": "Osimertinib: 95.4 mg of salt is not 95.4 mg of active drug.",
          "intro": "The 2015 FDA quality review describes the mesylate salt and the dose basis of the film-coated tablet.",
          "rows": [
            {
              "label": "Drug substance",
              "value": "95.4 mg osimertinib mesylate.",
              "status": "REPORTED"
            },
            {
              "label": "Active-moiety equivalent",
              "value": "80 mg osimertinib free base.",
              "status": "REPORTED"
            },
            {
              "label": "Drug product",
              "value": "The formulated film-coated tablet also contains excipients.",
              "status": "REPORTED"
            }
          ],
          "limit": "This is the later NDA product, not a reconstruction of the first clinical formulation. The 80 mg value is not the total tablet mass.",
          "sources": [
            0
          ],
          "visual": {
            "kind": "salt"
          }
        },
        "terms": [
          {
            "term": "Drug substance",
            "definition": "The active ingredient material used to formulate the product."
          },
          {
            "term": "Drug product",
            "definition": "The dosage form prepared for administration."
          },
          {
            "term": "Bridging",
            "definition": "Evidence used to assess whether findings with one material or formulation support another."
          }
        ],
        "scope": "Early clinical products can differ from the final marketed form. The supporting comparison is specific to the changes and proposed use."
      },
      "question": {
        "title": "Which dose basis should be compared?",
        "prompt": "One record gives the mass of osimertinib mesylate and another gives the free-base equivalent. What comes first?",
        "options": [
          [
            "Treat both numbers as the same chemical mass.",
            "Salt and free-base masses are not numerically interchangeable.",
            false
          ],
          [
            "Compare total tablet mass with drug concentration.",
            "Tablet mass includes excipients and is not the active dose.",
            false
          ],
          [
            "Identify the dose basis and convert to the same active-moiety basis where appropriate.",
            "Correct. First make the dose definitions comparable, then assess the materials and exposure.",
            true
          ]
        ],
        "hint": "A counterion contributes mass without being the same as the active moiety."
      },
      "sources": [
        {
          "label": "FDA quality review (2015): drug product summary, printed p. 6 (PDF p. 7)",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2015/208065Orig1s000ChemR.pdf#page=7"
        },
        {
          "label": "FDA: CMC information for investigational drugs",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-application-ind/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information"
        },
        {
          "label": "FDA: CMC flexibilities for original first-in-human Phase 1 small-molecule INDs",
          "url": "https://www.fda.gov/media/193163/download?attachment="
        }
      ],
      "sourceChecked": "16 September 2026"
    },
    {
      "id": "cmc-controls",
      "category": "cmc",
      "title": "Make and control consistent material",
      "goal": "Release, investigate, or hold the batch through the responsible quality process.",
      "concept": "A reliable supply depends on understanding what the process can change and using tests that answer the relevant quality questions. A high purity value alone is not a batch-release decision.",
      "takeaway": "Choose controls for identity, dose, impurities, and performance—not a single reassuring number.",
      "evidenceGuide": {
        "steps": [
          {
            "label": "Understand the process",
            "question": "What can introduce variability or unwanted material?",
            "evidence": "Trace starting materials, reaction by-products, solvents, purification, and formulation steps. Focus on differences that can affect product safety or performance.",
            "decision": "Identify where the process needs controls and what a process change could invalidate."
          },
          {
            "label": "Choose the tests",
            "question": "Does each measurement answer the right question?",
            "evidence": "Distinguish identity, active content, impurity profile, dose uniformity, and drug release where relevant. Use methods fit for their intended purpose.",
            "decision": "Set appropriate tests and acceptance criteria for this product and stage."
          },
          {
            "label": "Review the batch",
            "question": "Do results and records support use of this material?",
            "evidence": "Read the relevant test results together with batch records and deviations. Investigate an unexpected result rather than averaging it away.",
            "decision": "Release, investigate, or hold the batch through the responsible quality process."
          }
        ],
        "case": {
          "title": "Osimertinib: a tablet breaking apart did not establish drug release.",
          "intro": "The FDA quality review distinguishes disintegration from dissolution in evaluating the tablet control strategy.",
          "rows": [
            {
              "label": "Disintegration",
              "value": "Tablet breakup was not a reliable substitute for dissolution in this product.",
              "status": "REPORTED"
            },
            {
              "label": "Dissolution",
              "value": "The review supported a method to assess drug release across batches and during stability testing.",
              "status": "REPORTED"
            },
            {
              "label": "General lesson",
              "value": "A convenient test must demonstrate that it answers the intended quality question.",
              "status": "INTERPRETATION"
            }
          ],
          "limit": "This was an NDA-stage assessment. Early-phase controls should be appropriate to the product, risks, and development stage; do not copy a commercial specification wholesale.",
          "sources": [
            0
          ]
        },
        "terms": [
          {
            "term": "Specification",
            "definition": "Tests, methods, and acceptance criteria used to assess quality."
          },
          {
            "term": "Assay",
            "definition": "A measurement of active content; it is distinct from a chromatographic purity percentage."
          },
          {
            "term": "Dissolution",
            "definition": "Measurement of drug entering solution from a dosage form."
          },
          {
            "term": "CGMP",
            "definition": "Current good manufacturing practice; manufacturing controls are appropriate to the development stage."
          }
        ],
        "scope": "CMC develops during lead optimization and continues after nomination. An established commercial synthesis is not a prerequisite for every first-in-human study."
      },
      "question": {
        "title": "Does matching purity settle the question?",
        "prompt": "A changed synthesis gives the same overall chromatographic purity but introduces a different impurity. What is the sound next step?",
        "options": [
          [
            "Assess the new impurity and the process change before deciding whether the material is supported.",
            "Correct. Consider identity, amount, safety significance, existing qualification, and appropriate controls.",
            true
          ],
          [
            "Release the batch because the total purity is unchanged.",
            "The same aggregate purity can conceal a different risk.",
            false
          ],
          [
            "Ignore the impurity if the active compound is potent.",
            "Biological potency does not qualify an impurity.",
            false
          ]
        ],
        "hint": "The identity of the impurity matters, not just the total area."
      },
      "sources": [
        {
          "label": "FDA quality review: dissolution assessment, printed pp. 144–145 (PDF pp. 63–64)",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2015/208065Orig1s000ChemR.pdf#page=63"
        },
        {
          "label": "FDA: CMC flexibilities for original first-in-human Phase 1 small-molecule INDs",
          "url": "https://www.fda.gov/media/193163/download?attachment="
        },
        {
          "label": "FDA: CGMP for Phase 1 investigational drugs",
          "url": "https://www.fda.gov/media/70975/download"
        },
        {
          "label": "FDA: CMC information for investigational drugs",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-application-ind/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information"
        }
      ],
      "sourceChecked": "16 September 2026"
    },
    {
      "id": "cmc-stability",
      "category": "cmc",
      "title": "Keep the product suitable through dosing",
      "goal": "Set supported handling and use limits, or obtain additional evidence before extending them.",
      "concept": "A batch that is suitable today must remain suitable during storage, shipment, preparation, and use. Stability support belongs to a defined material, package, and set of conditions.",
      "takeaway": "A stability conclusion travels with its material, packaging, conditions, and supported period.",
      "evidenceGuide": {
        "steps": [
          {
            "label": "Define the conditions",
            "question": "Which storage and use conditions need support?",
            "evidence": "Identify the formulation, container, temperature, light exposure, shipment, and any preparation or in-use period that can affect quality.",
            "decision": "Specify the conditions under which the clinical supply will be managed."
          },
          {
            "label": "Follow the changes",
            "question": "Which quality attributes could change with time?",
            "evidence": "Track relevant active content, degradation products, physical changes, and product performance using suitable methods. Read trends as well as pass/fail results.",
            "decision": "Determine what the available data support over the proposed period of use."
          },
          {
            "label": "Reassess changes",
            "question": "Does the conclusion still apply after a change?",
            "evidence": "Review new formulation, packaging, storage, or use conditions against existing data. Plan proportionate ongoing stability work.",
            "decision": "Set supported handling and use limits, or obtain additional evidence before extending them."
          }
        ],
        "case": {
          "title": "Osimertinib: stability support had a defined boundary.",
          "intro": "At the 2015 NDA review, the available evidence supported an initial product shelf life under specified conditions.",
          "rows": [
            {
              "label": "Supported period",
              "value": "12 months in the finished package.",
              "status": "REPORTED"
            },
            {
              "label": "Conditions",
              "value": "USP controlled room temperature; the reviewed product used an HDPE bottle.",
              "status": "REPORTED"
            },
            {
              "label": "Continuing work",
              "value": "Stability studies continued, with later reassessment as evidence accumulated.",
              "status": "REPORTED"
            }
          ],
          "limit": "This is a historical commercial-product decision, not a 12-month requirement for an initial IND. FDA’s first-in-human CMC framework scales support to the proposed study.",
          "sources": [
            0,
            1
          ]
        },
        "terms": [
          {
            "term": "Stability",
            "definition": "How product quality changes over time under specified conditions."
          },
          {
            "term": "In-use stability",
            "definition": "Support for the period after opening, reconstitution, dilution, or other preparation, where relevant."
          }
        ],
        "scope": "For an initial Phase 1 IND, evidence and the ongoing stability plan should support the intended use. A final commercial shelf life is not the starting requirement."
      },
      "question": {
        "title": "Can we carry the old conclusion forward?",
        "prompt": "The team changes the bottle and storage conditions. Existing stability data cover the earlier package and conditions. What should happen?",
        "options": [
          [
            "Keep the same supported period because the molecular structure is unchanged.",
            "Packaging and conditions can affect product quality even when the molecule is unchanged.",
            false
          ],
          [
            "Assess whether the existing data support the changes and obtain additional evidence where needed.",
            "Correct. Carry forward supported conclusions, not assumptions about unchanged performance.",
            true
          ],
          [
            "Assume an earlier passing release test establishes stability for any storage condition.",
            "Release testing describes a point in time; stability addresses change during storage and use.",
            false
          ]
        ],
        "hint": "Ask exactly what material and conditions the evidence covers."
      },
      "sources": [
        {
          "label": "FDA quality review: stability decision, printed p. 93 (PDF p. 40)",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2015/208065Orig1s000ChemR.pdf#page=40"
        },
        {
          "label": "FDA: CMC flexibilities for original first-in-human Phase 1 small-molecule INDs",
          "url": "https://www.fda.gov/media/193163/download?attachment="
        },
        {
          "label": "FDA: CMC information for investigational drugs",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-application-ind/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information"
        }
      ],
      "sourceChecked": "16 September 2026"
    },
    {
      "id": "clinical",
      "title": "The first clinical study",
      "goal": "Turn a recognized safety concern into clear study instructions.",
      "concept": "The clinical protocol defines objectives, participants, dose and schedule, measurements, and decision rules. Its safety plan should explain what to monitor, when, who reviews the findings, and what actions follow. The specific plan depends on the drug and proposed study.",
      "takeaway": "A concern becomes actionable when the protocol says what the team will do.",
      "exampleTitle": "“Monitor kidney safety” needs a plan.",
      "example": "An animal study identifies kidney injury at higher exposures. The clinical team uses this finding with the rest of the evidence to plan relevant assessments, their timing, who reviews them, and findings that trigger interruption or further evaluation. The program determines the appropriate measures.",
      "worked": "A safety observation informs a plan that investigators can apply consistently. No single assay, threshold, or schedule is universal.",
      "category": "clinical",
      "question": {
        "title": "Make a vague safety plan actionable.",
        "prompt": "A draft protocol says “watch closely for liver toxicity,” with no assessment schedule or action rules. What addresses the gap?",
        "options": [
          [
            "Specify relevant assessments, timing, review responsibilities, and justified action rules.",
            "These instructions tell the team what to measure and how to act on the findings.",
            true
          ],
          [
            "Add a longer description of the target’s molecular biology.",
            "Mechanism can inform risk, but a longer explanation does not supply the missing study instructions.",
            false
          ],
          [
            "Let each site invent its own monitoring plan after enrollment.",
            "That leaves safety-critical decisions unspecified. Define the plan before conducting the study.",
            false
          ]
        ],
        "hint": "Could two sites read that sentence and make different safety decisions?"
      },
      "diagram": [
        [
          "Safety concern",
          "What could happen?"
        ],
        [
          "Protocol",
          "What will the team do?"
        ]
      ],
      "exampleSteps": [
        [
          "Finding",
          "Kidney injury at higher exposures"
        ],
        [
          "Plan",
          "Assessments, timing, reviewer"
        ],
        [
          "Action",
          "Justified interruption or evaluation rules"
        ]
      ],
      "sources": [
        {
          "label": "FDA: clinical protocols",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-clinical-protocols"
        }
      ]
    },
    {
      "id": "clinical-dose",
      "category": "clinical",
      "title": "Justifying a first dose",
      "goal": "Explain why a starting dose needs a context-specific rationale.",
      "concept": "A first human dose is a justified starting point for learning. Its rationale integrates relevant toxicology, pharmacology, and exposure information with the proposed population and regimen. The applicable framework matters: FDA’s adult healthy-volunteer guidance has a defined scope; it is not a universal recipe for patients with advanced cancer.",
      "takeaway": "Choose the dosing framework for the study context before interpreting the calculations.",
      "exampleTitle": "A mouse efficacy dose is not a human starting dose.",
      "example": "A discovery team proposes the same milligrams per kilogram in humans that slowed tumor growth in mice. The development team asks how that relates to toxicity findings, pharmacology, predicted human exposure, and the intended participants. A direct dose match supplies none of those connections. The first-dose rationale must address them together.",
      "worked": "An activity dose is useful evidence, but it does not independently establish a defensible human starting dose.",
      "diagram": [
        [
          "Animal activity",
          "A biological observation"
        ],
        [
          "Human starting dose",
          "A context-specific justification"
        ]
      ],
      "exampleSteps": [
        [
          "Identify context",
          "Healthy volunteers or patients?"
        ],
        [
          "Integrate evidence",
          "Toxicology, exposure, pharmacology"
        ],
        [
          "Justify the plan",
          "Starting dose and safeguards"
        ]
      ],
      "question": {
        "title": "Which argument is incomplete?",
        "prompt": "A proposed starting dose is justified only by matching the mouse efficacy dose in mg/kg. What should the team do?",
        "options": [
          [
            "Accept it because mg/kg adjusts for species differences.",
            "Weight adjustment alone does not resolve differences in pharmacology, kinetics, or risk.",
            false
          ],
          [
            "Assume a lower dose must be effective.",
            "A lower starting dose does not guarantee activity or define later dose optimization.",
            false
          ],
          [
            "Develop a rationale using the relevant safety, pharmacology, exposure, and population context.",
            "The rationale needs to connect the evidence to the actual human study.",
            true
          ]
        ],
        "hint": "Which human-relevant assumptions are missing from the dose match?"
      },
      "sources": [
        {
          "label": "FDA starting-dose guidance: adult healthy volunteers, final 2005",
          "url": "https://www.fda.gov/media/72309/download"
        },
        {
          "label": "ICH S9: defined advanced-cancer context",
          "url": "https://www.fda.gov/media/73161/download"
        }
      ]
    },
    {
      "id": "people",
      "title": "Who prepares the IND",
      "goal": "Distinguish contracted work from transferred sponsor obligations.",
      "concept": "An IND is a team effort. Scientific specialists generate and interpret evidence; a regulatory lead often coordinates strategy and submission; writers and publishing specialists may help prepare the documents. The sponsor has regulatory responsibilities. Hiring a vendor does not automatically transfer them.",
      "takeaway": "Who performs a task and who holds an obligation are different questions.",
      "exampleTitle": "A startup works with a CRO.",
      "example": "A biotech hires a contract research organization (CRO) for a toxicology study. Toxicology and drug metabolism/pharmacokinetics specialists interpret findings and exposure; the clinical lead considers implications for the protocol. A regulatory lead coordinates the presentation. This is one possible team arrangement. Any transfer of sponsor obligations under the IND regulation must be described in writing.",
      "worked": "Contracting a task does not automatically transfer obligations. Those not covered by a written transfer remain with the sponsor.",
      "category": "clinical",
      "question": {
        "title": "Who retains the responsibility?",
        "prompt": "A biotech hires a vendor to assemble the electronic submission. No sponsor obligations are transferred in writing. Who retains those obligations?",
        "options": [
          [
            "The vendor, automatically, because it handles the files.",
            "Performing a service does not automatically transfer sponsor obligations.",
            false
          ],
          [
            "FDA, once it receives the submission.",
            "FDA reviews the application; receipt does not transfer the sponsor’s duties to FDA.",
            false
          ],
          [
            "The biotech sponsor.",
            "Obligations not covered by a written transfer remain with the sponsor.",
            true
          ]
        ],
        "hint": "Separate who did the task from which obligations were transferred."
      },
      "diagram": [
        [
          "Contracted task",
          "Who performs the work?"
        ],
        [
          "Sponsor obligation",
          "Who is responsible?"
        ]
      ],
      "exampleSteps": [
        [
          "CRO",
          "Performs an agreed task"
        ],
        [
          "Team",
          "Interprets and integrates evidence"
        ],
        [
          "Sponsor",
          "Retains obligations not transferred"
        ]
      ],
      "sources": [
        {
          "label": "21 CFR 312.50 and 312.52: sponsor responsibilities and CRO transfers",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D"
        }
      ]
    },
    {
      "id": "pre-ind",
      "category": "clinical",
      "title": "Ask a useful pre-IND question",
      "goal": "Turn an uncertainty into a focused question with evidence and a proposed approach.",
      "concept": "A pre-IND interaction can help a team discuss development questions with FDA before submission. A useful question identifies the decision, explains the evidence, and presents a proposed approach with its rationale. General requests for reassurance are harder to resolve than questions about a defined program. Feedback informs development; it is not permission to begin a trial.",
      "takeaway": "Bring a proposed approach and the uncertainty that needs resolving.",
      "exampleTitle": "Replace “Is our package enough?”",
      "example": "A team has data supporting a short oral study and is considering a longer regimen. Instead of asking FDA whether the program looks good, it summarizes the proposed population and schedule, relevant existing studies, and its plan for additional support. It then asks whether that approach addresses the identified duration question.",
      "worked": "The question is answerable because the study, supporting evidence, and proposed next step are explicit.",
      "diagram": [
        [
          "Broad reassurance",
          "Is our program good?"
        ],
        [
          "Focused question",
          "Does this approach address this gap?"
        ]
      ],
      "exampleSteps": [
        [
          "Decision",
          "Support a longer regimen"
        ],
        [
          "Evidence",
          "What current studies cover"
        ],
        [
          "Proposal",
          "Additional support and rationale"
        ]
      ],
      "question": {
        "title": "Which question is more useful?",
        "prompt": "You are preparing a pre-IND briefing package. Which question best supports a focused discussion?",
        "options": [
          [
            "Given this population, regimen, evidence, and proposed study, does the approach address the identified safety gap?",
            "A specific proposal gives the discussion a concrete decision and rationale.",
            true
          ],
          [
            "Can FDA confirm that the drug will succeed?",
            "FDA cannot establish future development success from a briefing package.",
            false
          ],
          [
            "Can we omit the proposed clinical plan and discuss the data alone?",
            "The intended study gives the data their development context.",
            false
          ]
        ],
        "hint": "Can the reviewer see both the decision and the evidence behind your proposal?"
      },
      "sources": [
        {
          "label": "FDA pre-IND consultation overview",
          "url": "https://www.fda.gov/drugs/types-applications/investigational-new-drug-ind-application"
        },
        {
          "label": "FDA formal meetings guidance, final August 2026",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/formal-meetings-between-fda-and-sponsors-or-applicants-pdufa-products"
        }
      ]
    },
    {
      "id": "map",
      "title": "What the IND supports",
      "goal": "Explain what an IND supports—and what an activity result cannot establish.",
      "concept": "A development candidate is a molecule your team chooses to advance. An Investigational New Drug (IND) application brings together evidence supporting a specific proposed human study. It connects biological activity, exposure, potential harms, product quality, and the clinical plan.",
      "takeaway": "The question is: does this evidence support this proposed study?",
      "exampleTitle": "A tumor response is one piece of the argument.",
      "example": "Suppose a candidate slows tumor growth in mice. That gives the team a reason to investigate further. Before proposing a human study, the team also needs to understand achieved exposure, potential harms, the material to be administered, and the study design.",
      "worked": "Keep the useful activity result. Then identify the questions it leaves unanswered.",
      "category": "ind",
      "question": {
        "title": "A stronger result. A narrower claim.",
        "prompt": "A candidate produces convincing tumor growth inhibition in mice. What does that result most directly support?",
        "options": [
          [
            "A biological rationale to investigate the candidate further.",
            "Yes. Retain the activity result and define its limits. It does not answer product quality, human risk, or clinical benefit by itself.",
            true
          ],
          [
            "That the candidate is ready to dose in humans.",
            "Activity is one part of the argument. Exposure, safety, product quality, and the proposed study still need support.",
            false
          ],
          [
            "That the same dose will work in humans.",
            "A dose in one species does not establish human exposure, target effects, or a useful human regimen.",
            false
          ]
        ]
      },
      "diagram": [
        [
          "Discovery result",
          "A reason to develop"
        ],
        [
          "IND",
          "Support a proposed study"
        ]
      ],
      "exampleSteps": [
        [
          "Biology",
          "Why investigate this drug?"
        ],
        [
          "Support",
          "Exposure, safety, product quality"
        ],
        [
          "Proposed study",
          "Dose, schedule, population, safeguards"
        ]
      ],
      "sources": [
        {
          "label": "FDA: what an IND contains",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23"
        },
        {
          "label": "FDA: purpose of IND review",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.22"
        }
      ]
    },
    {
      "id": "submission",
      "category": "ind",
      "title": "Assemble a traceable submission",
      "goal": "Connect a summary claim to its source report and proposed clinical use.",
      "concept": "An IND joins scientific and administrative material into a reviewable submission. In the eCTD, Module 1 holds regional material, Module 2 summaries, Module 3 quality, Module 4 nonclinical reports, and Module 5 clinical material. The summaries should accurately connect source findings to the proposed study. File organization supports review; it does not establish scientific adequacy.",
      "takeaway": "Every important summary claim should be traceable to the right evidence.",
      "exampleTitle": "A reassuring sentence loses its context.",
      "example": "An IND summary says that a candidate was tolerated. The source report shows that exposure was low in the high-dose group. A reviewer needs the exposure result alongside the injury observations to interpret the statement. The team revises the summary to describe the actual study conditions and the remaining uncertainty, with a reference to the source report.",
      "worked": "Traceability means preserving the meaning of the evidence, not merely placing a file in the correct folder.",
      "diagram": [
        [
          "Source report",
          "Observations and conditions"
        ],
        [
          "Summary claim",
          "Accurate, qualified interpretation"
        ]
      ],
      "exampleSteps": [
        [
          "Find the claim",
          "Candidate was tolerated"
        ],
        [
          "Check its support",
          "Exposure and observed findings"
        ],
        [
          "Preserve context",
          "Conditions, limits, source reference"
        ]
      ],
      "question": {
        "title": "What should be corrected?",
        "prompt": "A summary describes a high dose as reassuring, but the study report shows little systemic exposure. Which revision best preserves the evidence?",
        "options": [
          [
            "Delete the exposure result because it complicates the story.",
            "The exposure result is important to interpreting the observations.",
            false
          ],
          [
            "State the observed findings and achieved exposure, explain the limitation, and reference the report.",
            "This lets the reviewer assess the claim in its actual experimental context.",
            true
          ],
          [
            "Keep the sentence because the file is in the correct eCTD module.",
            "Correct organization does not make an unsupported inference adequate.",
            false
          ]
        ],
        "hint": "What information changes the meaning of the absence of observed injury?"
      },
      "sources": [
        {
          "label": "FDA eCTD overview",
          "url": "https://www.fda.gov/drugs/electronic-regulatory-submission-and-review/electronic-common-technical-document-ectd"
        },
        {
          "label": "21 CFR 312.23: IND content and format",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23"
        }
      ]
    },
    {
      "id": "fda-review",
      "category": "ind",
      "title": "Review, questions, and holds",
      "goal": "Distinguish submission receipt, an effective IND, and a clinical hold.",
      "concept": "The IND goes into effect 30 days after FDA receipt unless a clinical hold applies, or earlier on FDA notification. Other trial-start requirements still apply. A hold delays or suspends the affected investigation. Responding to a hold means addressing the identified issues; sending a response does not itself lift the hold.",
      "takeaway": "Track the actual regulatory status, not simply whether documents were sent.",
      "exampleTitle": "A response is not a release from hold.",
      "example": "FDA places a proposed study on clinical hold because the information is insufficient to assess risk. The sponsor submits additional evidence and a revised explanation. The team still must receive the relevant FDA notification that the investigation may proceed. It cannot treat uploading the response as an automatic end to the hold.",
      "worked": "The response is an action by the sponsor; permission to resume the held investigation requires the applicable FDA decision.",
      "diagram": [
        [
          "Sponsor action",
          "Submit the hold response"
        ],
        [
          "Regulatory status",
          "Await FDA permission to proceed"
        ]
      ],
      "exampleSteps": [
        [
          "Identify issue",
          "What led to the hold?"
        ],
        [
          "Respond",
          "Evidence and justified revisions"
        ],
        [
          "Track status",
          "FDA notification is still needed"
        ]
      ],
      "question": {
        "title": "Can the held study proceed?",
        "prompt": "The sponsor has submitted a complete response to a clinical hold. FDA has not notified the sponsor that the study may proceed. What is the correct interpretation?",
        "options": [
          [
            "The hold is automatically lifted on upload.",
            "Submission of a response is not an automatic lifting of the hold.",
            false
          ],
          [
            "A favorable animal result independently lifts the hold.",
            "An individual study result does not change the regulatory status by itself.",
            false
          ],
          [
            "The affected investigation remains on hold pending the relevant FDA notification.",
            "Responding and being permitted to proceed are distinct events.",
            true
          ]
        ],
        "hint": "Who determines whether the identified hold issues have been resolved?"
      },
      "sources": [
        {
          "label": "21 CFR 312.40: beginning an investigation",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-C/section-312.40"
        },
        {
          "label": "21 CFR 312.42: clinical holds",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-C/section-312.42"
        }
      ]
    },
    {
      "id": "review",
      "title": "Ready for the first participant",
      "goal": "Distinguish an effective IND from trial and participant readiness.",
      "concept": "An IND may go into effect 30 days after FDA receipt unless a clinical hold applies, or earlier on FDA notification. That is one condition for starting. Institutional review board (IRB) approval, informed consent, and applicable participant and site requirements also matter. An effective IND is not marketing approval. The IND remains active during clinical development; safety reporting, amendments, and annual reporting continue as applicable.",
      "takeaway": "FDA status, ethical review, and participant readiness are separate conditions.",
      "exampleTitle": "The IND is effective. The IRB review is pending.",
      "example": "Thirty days have elapsed since FDA received an initial IND, with no clinical hold. The IND is in effect, but the IRB has not approved the protocol. The team cannot begin this ordinary first-in-human trial while that approval is missing. The effective IND does not establish efficacy or permit marketing.",
      "worked": "Resolve the missing IRB approval and other applicable requirements. Passage of the IND review period does not replace them.",
      "category": "ind",
      "question": {
        "title": "Check the participant’s readiness.",
        "prompt": "The IND is effective and the IRB has approved this ordinary first-in-human study. A prospective participant has not completed informed consent. May the team give the study drug now?",
        "options": [
          [
            "Yes. IRB approval substitutes for the participant’s decision.",
            "IRB review and individual informed consent serve different purposes. One does not replace the other.",
            false
          ],
          [
            "No. Legally effective informed consent is still needed before participation.",
            "Consent is a separate prerequisite in this ordinary study. Other participant and site conditions must also be satisfied.",
            true
          ],
          [
            "No. Every effective IND requires another 30-day wait.",
            "There is no automatic second 30-day wait. The missing condition here is consent.",
            false
          ]
        ],
        "hint": "Which decision belongs to the prospective participant?"
      },
      "diagram": [
        [
          "IND status",
          "May investigation proceed?"
        ],
        [
          "Trial readiness",
          "Can this participant start?"
        ]
      ],
      "exampleSteps": [
        [
          "IND status",
          "Effective"
        ],
        [
          "IRB approval",
          "Pending"
        ],
        [
          "First participant",
          "Cannot start yet"
        ]
      ],
      "sources": [
        {
          "label": "21 CFR 312.40: conditions for beginning an investigation",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-C/section-312.40"
        },
        {
          "label": "21 CFR 56.103: IRB review requirements",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-56/subpart-A/section-56.103"
        },
        {
          "label": "21 CFR 50.20: informed consent",
          "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.20"
        },
        {
          "label": "FDA: IND annual reports and continuing responsibilities",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-application-reporting-annual-reports"
        }
      ]
    }
  ],
  "supplementalLevels": [
    {
      "id": "exposure",
      "category": "candidate",
      "title": "Dose Is Not Exposure",
      "goal": "Reassess exposure and its safety support when formulation changes at the same administered dose.",
      "concept": "Dose is the amount administered. Exposure describes drug concentration over time in a specified compartment. Bioavailability is the fraction of a dose reaching systemic circulation; for an oral drug it reflects absorption and presystemic loss. AUC, the area under a concentration–time curve, measures exposure over a stated interval. The same administered dose can produce different exposure, so its safety interpretation may change.",
      "takeaway": "When exposure changes, revisit the evidence supporting the regimen.",
      "exampleTitle": "Same dose. More drug reaches circulation.",
      "example": "In the simplified model below, changing bioavailability from 50% to 100% doubles initial concentration and AUC when the other assumptions stay fixed. The dose has not changed. This illustrates why a new formulation can change the exposure that a safety assessment must address. It does not tell us whether the new exposure is effective or tolerable.",
      "worked": "The same dose now produces more exposure. Compare that exposure with the supporting evidence before carrying an earlier safety conclusion forward.",
      "diagram": [
        [
          "Dose",
          "Amount administered"
        ],
        [
          "Exposure",
          "Concentration over time"
        ]
      ],
      "exampleSteps": [
        [
          "Hold dose constant",
          "Both formulations deliver 10 mg/kg orally."
        ],
        [
          "Measure what changes",
          "Total plasma AUC0–24 increases threefold; other relevant metrics also need review."
        ],
        [
          "Reassess support",
          "Compare exposure and safety findings, then assess regimen or bridging needs."
        ]
      ],
      "question": {
        "title": "The formulation changed",
        "prompt": "A new oral formulation increases exposure at the same administered dose. What is the best next step?",
        "options": [
          [
            "Keep the old safety conclusion because the administered dose is unchanged.",
            "No. The body can experience a different concentration-time profile at the same dose.",
            false
          ],
          [
            "Compare the new exposure with the safety evidence and reassess the regimen or bridging needs.",
            "Correct. The relevant question is whether the existing evidence supports the changed exposure and material, not merely the same mg/kg dose.",
            true
          ],
          [
            "Automatically repeat every toxicology study before examining the existing data.",
            "No. First assess the change and the existing evidence; the appropriate bridging work depends on what remains unsupported.",
            false
          ]
        ],
        "hint": "Follow the concentration-time profile, then ask which safety evidence applies."
      },
      "sources": [
        {
          "label": "FDA training: PK, exposure and toxicokinetics",
          "url": "https://www.fda.gov/media/185123/download"
        },
        {
          "label": "FDA: clinical and toxicology material differences",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information"
        }
      ]
    },
    {
      "id": "candidate-evidence",
      "category": "candidate",
      "title": "Connect Activity, Exposure & Effects",
      "goal": "Assess whether a candidate's biological rationale holds under relevant exposure and model conditions.",
      "concept": "Candidate selection integrates exposure, biological effects, and model relevance. Pharmacokinetics (PK) describes concentration over time; pharmacodynamics (PD) describes biological effects. Pathway suppression can support a mechanism but does not alone establish disease benefit. An efficacy model tests an intervention under particular conditions. Its controls, exposure, endpoints, and relationship to intended patients determine what the result supports.",
      "takeaway": "Carry the exposure, effect, and model limitations into the candidate decision.",
      "exampleTitle": "A responsive tumor model",
      "example": "Invented oncology example: drug E reduces a human tumor xenograft's volume by 45% from baseline over 21 days, while vehicle controls grow. Tumor pathway suppression is measured during treatment. The host mice are immunodeficient, and the implanted cells were selected for high XYZ1 expression. The result supports activity in this setting; it does not establish responses across heterogeneous human tumors or an intact immune system.",
      "worked": "Use the result to define a testable clinical rationale and the biological variation that further experiments should examine.",
      "diagram": [
        [
          "Observed activity",
          "Regression in one selected xenograft model"
        ],
        [
          "Unresolved transfer",
          "Tumor diversity · immune context · human treatment conditions"
        ]
      ],
      "exampleSteps": [
        [
          "Identify the observation",
          "Controlled tumor regression accompanies measured pathway suppression."
        ],
        [
          "Identify the model boundaries",
          "Selected cells and immunodeficient hosts constrain the inference."
        ],
        [
          "Choose informative follow-up",
          "Test relevant biological variation with interpretable exposure and PD measurements."
        ]
      ],
      "question": {
        "title": "What would broaden the evidence?",
        "prompt": "Which follow-up most directly examines whether the finding extends beyond the selected model?",
        "options": [
          [
            "Study relevant biological variation while measuring exposure and PD.",
            "Correct. This tests the boundary of the current inference; the exact model choice should follow the intended clinical question.",
            true
          ],
          [
            "Only increase the sample size in the same model and claim broad clinical relevance.",
            "No. More animals may improve precision in that model, but do not by themselves address its biological limits.",
            false
          ],
          [
            "Treat the regression percentage as the predicted human response rate.",
            "No. A model's tumor-volume change is not a prediction of the proportion of patients who will respond.",
            false
          ]
        ],
        "hint": "Distinguish precision within a model from applicability beyond it."
      },
      "sources": [
        {
          "label": "FDA: nonclinical evidence supporting the proposed investigation",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-pharmacology-and-toxicology-pt-information"
        },
        {
          "label": "ICH S9: pharmacology in the advanced-cancer context",
          "url": "https://www.fda.gov/media/73161/download"
        },
        {
          "label": "FDA/NIH BEST: pharmacodynamic and response biomarkers",
          "url": "https://www.fda.gov/drugs/biomarker-qualification-program/about-biomarkers-and-qualification"
        },
        {
          "label": "FDA: exposure–response study design",
          "url": "https://www.fda.gov/media/71277/download"
        }
      ]
    },
    {
      "id": "candidate-development-plan",
      "category": "candidate",
      "title": "Plan the IND-Enabling Program",
      "goal": "Turn the candidate decision into a coordinated plan supporting a proposed human study.",
      "concept": "Development candidate (DC) nomination is an internal milestone. IND preparation can begin before it, while the dedicated program often expands around selection. Use the intended population, route, and dosing schedule to identify the supporting evidence. Coordinate nonclinical studies, chemistry, manufacturing and controls (CMC), and clinical planning, with named owners and clear decisions.",
      "takeaway": "Use the proposed human study to organize the work and its dependencies.",
      "exampleTitle": "Three teams need a shared material plan",
      "example": "A team proposes an oral study. The safety team is planning repeat-dose studies while the CMC team is changing the formulation. Before finalizing the studies, they agree how the test and clinical materials will be characterized and how differences will be assessed. The clinical team specifies the proposed regimen to guide the evidence needed.",
      "worked": "Coordination makes the studies interpretable for the intended clinical use. The nomination date alone does not determine their design.",
      "diagram": [
        [
          "Proposed study",
          "Population, route, and regimen"
        ],
        [
          "Development plan",
          "Evidence, material, responsibilities, and decisions"
        ]
      ],
      "exampleSteps": [
        [
          "Specify",
          "Describe the intended initial human study."
        ],
        [
          "Coordinate",
          "Align material plans with nonclinical and clinical needs."
        ],
        [
          "Assign",
          "Name owners and the evidence needed before submission."
        ]
      ],
      "question": {
        "title": "Plan around a material change",
        "prompt": "When should the team discuss formulation changes with the safety team?",
        "options": [
          [
            "Only after IND submission.",
            "That can leave avoidable gaps between the tested and proposed materials.",
            false
          ],
          [
            "Never, because CMC and safety information are independent.",
            "Material differences can change exposure and interpretation.",
            false
          ],
          [
            "During planning, before committing to studies affected by the change.",
            "Correct. Early coordination helps establish what the studies will support.",
            true
          ]
        ],
        "hint": "The material being tested is part of the meaning of the result."
      },
      "sources": [
        {
          "label": "FDA: the candidate-to-IND transition",
          "url": "https://www.fda.gov/drugs/types-applications/investigational-new-drug-ind-application"
        },
        {
          "label": "FDA: CMC information for an initial IND",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information"
        }
      ]
    },
    {
      "id": "clinical-plan-package",
      "category": "nonclinical",
      "title": "Start With the Clinical Plan",
      "goal": "Explain how intended clinical use determines the nonclinical questions.",
      "concept": "A nonclinical package supports a particular clinical plan. Population, route, schedule, duration, expected exposure, and existing evidence determine which risks need investigation and when. Changing that plan can change the supporting evidence needed. ICH M3(R2) provides a general framework; ICH S9 addresses anticancer development in its defined advanced-cancer context. Neither is a universal checklist of assays, species, or study durations.",
      "takeaway": "Define the proposed human use before deciding what evidence must support it.",
      "exampleTitle": "A longer dosing proposal",
      "example": "In this fictional program, Kestrel-12 was studied to support a short oral trial in adults with a serious inflammatory disease. The team now proposes months of continuous dosing. Its summary still describes only the original schedule. Before extending treatment, the team maps the longer exposure and relevant patient risks against existing evidence, identifying what additional support or justification is needed.",
      "worked": "The longer clinical schedule needs a fresh assessment of whether the evidence supports it.",
      "diagram": [
        [
          "Clinical plan",
          "Population + route + schedule"
        ],
        [
          "Evidence plan",
          "Risks + available support + gaps"
        ]
      ],
      "exampleSteps": [
        [
          "Define",
          "Describe the longer continuous dosing plan."
        ],
        [
          "Compare",
          "Check which risks the existing package addresses."
        ],
        [
          "Resolve",
          "Justify adequacy or address the remaining gaps."
        ]
      ],
      "question": {
        "title": "What changes the package?",
        "prompt": "The planned trial extends treatment from days to months. What is the strongest next step?",
        "options": [
          [
            "Reassess whether existing evidence supports the longer exposure.",
            "Correct. The package must support the revised clinical conditions.",
            true
          ],
          [
            "Keep the original package because the molecule is unchanged.",
            "The molecule is unchanged, but duration can change the risk questions.",
            false
          ],
          [
            "Copy the study list from an unrelated cancer program.",
            "Different indications and patient populations can require different evidence.",
            false
          ]
        ],
        "hint": "Start with what will change for trial participants."
      },
      "sources": [
        {
          "label": "FDA / ICH M3(R2): clinical scope and duration",
          "url": "https://www.fda.gov/media/71542/download"
        },
        {
          "label": "FDA / ICH S9: defined advanced-cancer context",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/s9-nonclinical-evaluation-anticancer-pharmaceuticals"
        }
      ]
    },
    {
      "id": "model",
      "category": "nonclinical",
      "title": "Check What the Model Tests",
      "goal": "Separate evidence of tumor activity from evidence about normal-tissue risk.",
      "concept": "A model answers only the questions its biology and drug exposure allow it to test. Tumor response can demonstrate activity in the implanted tumor while leaving effects in normal human tissues unresolved. Compare target sensitivity, pathway function, and relevant exposure before interpreting a negative safety finding. In the advanced-cancer setting, ICH S9 recommends selecting pharmacology models around the target and mechanism.",
      "takeaway": "An unperturbed mouse pathway cannot rule out risk from perturbing the human pathway.",
      "exampleTitle": "Tumor response, missing gut coverage",
      "example": "In this fictional advanced-cancer study, Lumen-8 shrinks implanted human tumors in mice. The compound inhibits a human target also used by intestinal cells, but it does not inhibit the mouse version at the tested exposure. The mice show no intestinal injury. The tumor result supports activity in that tumor model; the normal mouse intestine has not tested the proposed human intestinal mechanism.",
      "worked": "Human intestinal risk remains unresolved despite tumor response and healthy mouse intestines.",
      "diagram": [
        [
          "Human tumor",
          "Target inhibited; tumor responds"
        ],
        [
          "Mouse intestine",
          "Pathway unperturbed; risk question open"
        ]
      ],
      "exampleSteps": [
        [
          "Observe",
          "The implanted human tumor responds."
        ],
        [
          "Check",
          "The mouse intestinal target is not inhibited."
        ],
        [
          "Interpret",
          "Human intestinal risk still needs relevant evidence."
        ]
      ],
      "question": {
        "title": "What remains unresolved?",
        "prompt": "Human tumors respond in mice, but the drug leaves the mouse intestinal pathway unperturbed. What follows?",
        "options": [
          [
            "The lack of mouse intestinal injury establishes human intestinal safety.",
            "That tissue did not test the relevant pathway perturbation.",
            false
          ],
          [
            "Tumor shrinkage proves the drug acts only in tumors.",
            "Tumor response does not establish selectivity across normal human tissues.",
            false
          ],
          [
            "Human intestinal risk remains unresolved.",
            "Correct. The mouse intestine did not test the relevant human mechanism.",
            true
          ]
        ],
        "hint": "Ask whether the normal tissue experienced the mechanism that could cause harm."
      },
      "sources": [
        {
          "label": "ICH S9 §2.1: target and mechanism in model selection; advanced-cancer context",
          "url": "https://database.ich.org/sites/default/files/S9_Guideline.pdf"
        },
        {
          "label": "FDA / ICH S9 Q&A: relevance of nonclinical models; advanced-cancer context",
          "url": "https://www.fda.gov/media/100344/download"
        }
      ]
    },
    {
      "id": "toxicology-tk-glp",
      "category": "nonclinical",
      "title": "Connect Findings to Measured Exposure",
      "goal": "Distinguish the roles of toxicology, toxicokinetics, and GLP.",
      "concept": "Toxicology identifies adverse findings, while toxicokinetics (TK) measures exposure during toxicity studies so those findings can be interpreted. A nominal dose alone does not show how much drug reached the circulation. Good Laboratory Practice (GLP) addresses study conduct and data integrity; it does not guarantee human safety. These components work together, with study design and applicable GLP expectations justified for the program.",
      "takeaway": "Interpret the finding, the measured exposure, and the reliability of the study together.",
      "exampleTitle": "The same dose, different exposure",
      "example": "In a fictional toxicity study of Harbor-4, two groups receive the same nominal dose using different formulations. One group develops liver findings and has substantially higher measured exposure. A missed sampling time is documented in the study records. The team examines the exposure difference and the deviation's impact before interpreting the finding or comparing the study with expected human exposure.",
      "worked": "The dose label alone cannot explain the finding; TK and trustworthy records matter.",
      "diagram": [
        [
          "Toxicology + TK",
          "What happened + exposure reached"
        ],
        [
          "GLP",
          "Traceable conduct and reliable records"
        ]
      ],
      "exampleSteps": [
        [
          "Observe",
          "Liver findings occur in the higher-exposure group."
        ],
        [
          "Investigate",
          "Review formulation, TK results, and sampling deviation."
        ],
        [
          "Interpret",
          "Assess clinical relevance with the evidence's limitations."
        ]
      ],
      "question": {
        "title": "What does TK add?",
        "prompt": "Two groups receive the same nominal dose, but only one has liver findings. Which evidence most directly improves exposure-based interpretation?",
        "options": [
          [
            "A GLP statement by itself.",
            "GLP supports data integrity but does not measure exposure.",
            false
          ],
          [
            "Measured exposure in each group, interpreted with study records.",
            "Correct. TK helps connect the findings to systemic exposure.",
            true
          ],
          [
            "The fact that both dose labels match.",
            "Equal administered doses do not ensure equal systemic exposure.",
            false
          ]
        ],
        "hint": "The administered amount and the amount reaching circulation can differ."
      },
      "sources": [
        {
          "label": "FDA / ICH S3A: toxicokinetics and systemic exposure",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/s3a-toxicokinetics-assessment-systemic-exposure-toxicity-studies"
        },
        {
          "label": "FDA: GLP scope, quality, and integrity of safety data",
          "url": "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/fda-bioresearch-monitoring-information/scope-and-authority"
        },
        {
          "label": "FDA: GLP quality assurance and study records",
          "url": "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/nonclinical-laboratories-inspected-under-good-laboratory-practices/1981-questions-answers-good-laboratory-practice-regulations"
        }
      ]
    },
    {
      "id": "risk-recovery",
      "category": "nonclinical",
      "title": "Interpret Recovery Without Assuming Certainty",
      "goal": "Use recovery observations to refine risk without claiming guaranteed reversibility.",
      "concept": "Recovery evidence helps explain whether an adverse finding improves, persists, or progresses after dosing stops. Interpretation depends on the affected tissue, severity, exposure, observation period, and evidence of repair. Improvement in one measurement does not establish complete recovery or guarantee reversibility in humans. ICH S9 and its questions and answers discuss scientific recovery assessments within their defined advanced-cancer context, rather than automatic recovery groups.",
      "takeaway": "Describe what recovered, what persisted, and what the observation period cannot resolve.",
      "exampleTitle": "Blood markers improve, injury persists",
      "example": "In this fictional advanced-cancer program, Cedar-6 causes liver injury in a toxicity study. After dosing stops, blood markers move toward baseline, but tissue examination still shows lesions at the final observation. The team records partial improvement and remaining injury. It considers the tissue findings, drug exposure, and follow-up period when discussing clinical monitoring and whether further evidence could address the uncertainty.",
      "worked": "The study shows partial improvement; it does not demonstrate complete recovery.",
      "diagram": [
        [
          "Observed improvement",
          "Blood markers move toward baseline"
        ],
        [
          "Remaining uncertainty",
          "Lesions persist at final observation"
        ]
      ],
      "exampleSteps": [
        [
          "Separate",
          "Distinguish blood markers from tissue findings."
        ],
        [
          "Assess",
          "Consider severity, exposure, and observation duration."
        ],
        [
          "Conclude",
          "Report partial improvement with residual uncertainty."
        ]
      ],
      "question": {
        "title": "How strong is the conclusion?",
        "prompt": "Blood markers improve after dosing stops, but lesions remain. What is the best interpretation?",
        "options": [
          [
            "Partial improvement is observed; complete recovery is not demonstrated.",
            "Correct. The residual lesions limit the conclusion.",
            true
          ],
          [
            "All liver injury is reversible because the markers improved.",
            "One improving measure cannot establish that all injury has resolved.",
            false
          ],
          [
            "The lesions must be permanent because they remain at the last observation.",
            "Persistence over this interval does not establish permanence.",
            false
          ]
        ],
        "hint": "Keep the conclusion within the observations and their follow-up window."
      },
      "sources": [
        {
          "label": "FDA / ICH S9 Q&A §2: recovery assessment; advanced-cancer context",
          "url": "https://www.fda.gov/media/100344/download"
        },
        {
          "label": "ICH S9 §2.4: recovery interpretation; advanced-cancer context",
          "url": "https://database.ich.org/sites/default/files/S9_Guideline.pdf"
        }
      ]
    },
    {
      "id": "substance-product",
      "category": "cmc",
      "title": "Distinguish Substance From Finished Product",
      "goal": "Explain why drug substance and drug product need different quality evidence.",
      "concept": "Drug substance is the active ingredient; drug product is the dosage form prepared for administration, including its formulation and relevant packaging. Evidence about the ingredient does not fully characterize the finished product. Formulation and manufacturing can affect delivered dose and performance. An IND therefore describes both, including the relationship between materials used in nonclinical studies and those proposed for clinical use.",
      "takeaway": "Knowing the active ingredient is necessary but does not fully characterize the medicine administered.",
      "exampleTitle": "One ingredient, two formulations",
      "example": "In this fictional program, Finch-3 is supplied as a characterized powder for formulation work. The clinical team chooses an oral capsule containing that powder and excipients. The capsule blend distributes unevenly, so individual capsules contain different amounts despite the starting ingredient passing its tests. The team must address the finished capsule's manufacture and dose consistency before judging it suitable for the proposed trial.",
      "worked": "Acceptable drug substance alone does not establish acceptable capsule quality.",
      "diagram": [
        [
          "Drug substance",
          "Characterized active ingredient"
        ],
        [
          "Drug product",
          "Formulated dose + relevant packaging"
        ]
      ],
      "exampleSteps": [
        [
          "Identify",
          "The powder is the active ingredient."
        ],
        [
          "Formulate",
          "The capsule adds excipients and processing."
        ],
        [
          "Evaluate",
          "Review the finished capsule's dose consistency."
        ]
      ],
      "question": {
        "title": "Which evidence is missing?",
        "prompt": "The active ingredient passes its tests, but capsule contents vary. Which assessment addresses the immediate issue?",
        "options": [
          [
            "Repeat only the ingredient identity test.",
            "Identity does not resolve inconsistent capsule content.",
            false
          ],
          [
            "Accept the capsules because the ingredient passed.",
            "Formulation and processing introduce additional quality questions.",
            false
          ],
          [
            "Investigate capsule manufacture and finished-product dose consistency.",
            "Correct. The problem arises in producing the administered dosage form.",
            true
          ]
        ],
        "hint": "Follow the material from ingredient to the dose a participant receives."
      },
      "sources": [
        {
          "label": "FDA: IND CMC information for drug substance and drug product",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information"
        },
        {
          "label": "FDA: CGMP for phase 1 investigational drugs",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/current-good-manufacturing-practice-phase-1-investigational-drugs"
        }
      ]
    },
    {
      "id": "process-impurities",
      "category": "cmc",
      "title": "Trace Impurities Through the Process",
      "goal": "Connect manufacturing changes to impurity formation, removal, and control.",
      "concept": "A manufacturing process can introduce, create, or remove impurities. Understanding those routes helps explain which controls matter and why a process change deserves review. An overall purity number can hide a changed impurity profile. The assessment should consider the identity and amount of relevant impurities, their safety significance, and controls appropriate to the product and development stage, with applicable guidance interpreted in context.",
      "takeaway": "Evaluate which impurities changed and why, rather than relying on one overall purity value.",
      "exampleTitle": "A new catalyst changes the profile",
      "example": "In this fictional program, a revised synthesis of Willow-9 uses a different catalyst and improves yield. Overall chromatographic purity resembles the previous batch, but an additional trace component appears and residual catalyst testing has not been updated. The team investigates the new component and catalyst carryover, then evaluates appropriate removal steps, analytical methods, and controls before deciding whether the revised material is suitable.",
      "worked": "Similar overall purity does not resolve new impurity and catalyst questions.",
      "diagram": [
        [
          "Process change",
          "Different catalyst + new trace component"
        ],
        [
          "Control review",
          "Formation + removal + relevant testing"
        ]
      ],
      "exampleSteps": [
        [
          "Trace",
          "Map where the new component or residue could arise."
        ],
        [
          "Evaluate",
          "Assess identity, amount, and safety relevance."
        ],
        [
          "Control",
          "Justify removal steps and appropriate analytical controls."
        ]
      ],
      "question": {
        "title": "What deserves investigation?",
        "prompt": "A new catalyst increases yield, but the impurity profile changes. What is the strongest next step?",
        "options": [
          [
            "Investigate the changed impurities and justify appropriate controls.",
            "Correct. Process understanding connects the change to quality and safety.",
            true
          ],
          [
            "Accept the process because overall purity is similar.",
            "A similar aggregate number can mask different components.",
            false
          ],
          [
            "Assume every newly detected trace component is unacceptable.",
            "Detection alone does not establish its identity, risk, or acceptable control.",
            false
          ]
        ],
        "hint": "Ask what the process change introduced and whether the controls address it."
      },
      "sources": [
        {
          "label": "FDA / ICH Q11: process understanding and impurity reduction",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q11-development-and-manufacture-drug-substances"
        },
        {
          "label": "FDA: IND CMC safety questions and manufacturing information",
          "url": "https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information"
        }
      ]
    },
    {
      "id": "cmc",
      "category": "cmc",
      "title": "Read the Whole Batch Story",
      "goal": "Distinguish purity from active content and broader batch-quality review.",
      "concept": "A specification pairs tests with methods and acceptance criteria. Different tests answer different quality questions: chromatographic purity is not the same as active content per dose. Batch review also considers relevant records, deviations, and other quality results. IND controls evolve with development; ICH Q6A explains specification principles for marketing applications and should not be copied as a universal early-stage test list.",
      "takeaway": "A strong purity result cannot replace active-content testing or the rest of the quality review.",
      "exampleTitle": "High purity, too little active",
      "example": "In this fictional batch review, Maple-5 capsules show 99.6% chromatographic area purity among detected peaks. A separate assay reports only 82% of the intended active content per capsule, below this batch's justified criterion. The high purity figure describes the detected chemical profile, not the amount delivered. The quality team investigates the assay result and batch records before making a disposition decision.",
      "worked": "High chromatographic purity does not resolve the low active-content result.",
      "diagram": [
        [
          "Purity result",
          "Relative detected chemical profile"
        ],
        [
          "Active-content assay",
          "Amount of active in each dose"
        ]
      ],
      "exampleSteps": [
        [
          "Distinguish",
          "Purity and active content answer different questions."
        ],
        [
          "Compare",
          "Check the assay against the batch's criterion."
        ],
        [
          "Review",
          "Investigate results and records before disposition."
        ]
      ],
      "question": {
        "title": "Is purity enough?",
        "prompt": "A batch has high chromatographic purity but active content below its justified criterion. What follows?",
        "options": [
          [
            "Release it because high purity establishes full quality.",
            "Purity does not establish the intended amount of active per dose.",
            false
          ],
          [
            "Investigate active content and complete the quality review.",
            "Correct. Purity cannot replace active-content or broader batch-quality review.",
            true
          ],
          [
            "Ignore active content because it is another name for purity.",
            "Active content measures amount; chromatographic purity describes a different attribute.",
            false
          ]
        ],
        "hint": "Ask what each number actually measures."
      },
      "sources": [
        {
          "label": "FDA / ICH Q6A: specifications, assay, and impurities; marketing context",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q6a-specifications-test-procedures-and-acceptance-criteria-new-drug-substances-and-new-drug-products"
        },
        {
          "label": "FDA: phase 1 manufacturing quality and batch controls",
          "url": "https://www.fda.gov/media/70975/download"
        }
      ]
    },
    {
      "id": "stability-product-changes",
      "category": "cmc",
      "title": "Recheck Stability When Products Change",
      "goal": "Explain why a formulation or packaging change can require new supporting evidence.",
      "concept": "Stability support connects product quality to storage conditions, packaging, and the period of use. Changing a formulation or package can change degradation or performance, so assess whether existing evidence applies. For an initial phase 1 IND, support is proportionate to the proposed study; an established commercial shelf life is not expected. Relevant data and an ongoing stability plan help support use during the trial.",
      "takeaway": "Connect every proposed storage period to evidence relevant to the actual product and package.",
      "exampleTitle": "A smaller bottle changes exposure",
      "example": "In this fictional program, Rowan-2 tablets remain acceptable in the original sealed bottle during the observed stability period. To simplify clinic supply, the team changes to a smaller bottle with a different closure. Early testing suggests increased moisture uptake. The team reviews package protection and relevant quality trends before assigning the new presentation the same storage period as the original one.",
      "worked": "The original bottle's stability period cannot be transferred without assessing the new package.",
      "diagram": [
        [
          "Existing evidence",
          "Original tablet and sealed bottle"
        ],
        [
          "Changed presentation",
          "New closure; moisture question"
        ]
      ],
      "exampleSteps": [
        [
          "Identify",
          "The bottle and closure have changed."
        ],
        [
          "Assess",
          "Examine moisture protection and relevant stability trends."
        ],
        [
          "Support",
          "Justify storage conditions and period for the new presentation."
        ]
      ],
      "question": {
        "title": "Can the old data carry over?",
        "prompt": "A new closure allows more moisture uptake. What should guide the proposed storage period?",
        "options": [
          [
            "The original period automatically applies because the ingredient is unchanged.",
            "Packaging can affect stability even when the active ingredient is unchanged.",
            false
          ],
          [
            "A shorter period chosen without reviewing any data.",
            "An arbitrary reduction does not establish product quality during storage.",
            false
          ],
          [
            "Relevant stability evidence and a justified assessment of the packaging change.",
            "Correct. The period must be supported for the changed presentation.",
            true
          ]
        ],
        "hint": "The package is part of the conditions represented by stability data."
      },
      "sources": [
        {
          "label": "FDA: first-in-human small-molecule IND CMC expectations and flexibilities",
          "url": "https://www.fda.gov/media/193163/download?attachment="
        },
        {
          "label": "ICH Q1A(R2): background stability principles; registration context",
          "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q1ar2-stability-testing-new-drug-substances-and-products"
        }
      ]
    }
  ]
};

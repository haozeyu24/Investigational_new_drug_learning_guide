# A promising molecule. What does the evidence actually support?

Pilot lesson • about 8 minutes • US FDA IND context • source check: 14 September 2026

**Audience:** early R&D scientists, including biomedical scientists and computational biologists, who understand biology and discovery but do not yet understand how a candidate becomes a clinical-stage drug. No regulatory vocabulary is assumed.

**Learner outcome:** given a short study result, state what it supports, identify one important inference it cannot support, and propose evidence that would address that gap.

**Creator voice:** high-agency mechanistic, experimental, and computational biology, with AI as a tool for inspecting evidence. Questions lead the lesson; documents appear when they help answer those questions. The creator's identity is expressed through scientific judgment rather than an invented regulatory credential.

## The learner experience

### 0:00–0:55 — Watch the evidence split

Play the original animated diagram specified below, with captions and a replay control. A static six-frame version and transcript provide the same information.

On-screen opening: **A tumor shrank. What have we learned?**

### 0:55–1:40 — Five questions travel with the molecule

An IND is the application supporting a proposed investigation of a drug in people. Its evidence addresses the proposed study and its risks; it does not establish that the drug will work in patients. The major content areas include nonclinical evidence, manufacturing information, and clinical plans. [FDA IND overview](https://www.fda.gov/drugs/types-applications/investigational-new-drug-ind-application)

Use five connected questions to read that evidence:

| Question | Plain-language meaning | Familiar document home |
|---|---|---|
| What does it do? | Biological activity and mechanism | Pharmacology reports |
| Where does it go, and for how long? | Drug exposure over time; PK means pharmacokinetics | PK and toxicokinetic reports |
| What can it harm? | Adverse effects and the conditions in which they occur | Toxicology reports |
| What exactly are we giving? | Identity, strength, purity, manufacturing controls, stability | Chemistry, manufacturing, and controls: CMC |
| How will we test it in people? | Participants, dosing, measurements, monitoring, and stopping rules | Clinical protocol |

This is a teaching map, not five official IND sections or five boxes whose completion guarantees readiness. The IND content regulation describes the actual submission components. [21 CFR 312.23](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23)

### 1:40–2:50 — Microtask 1: Put the evidence to work

**Action:** match each evidence card to the question it most directly addresses. A card can matter to other questions too.

| Evidence card | Primary match | Feedback after placement |
|---|---|---|
| Target-pathway activity decreased in treated tumor tissue | What does it do? | This is evidence of a biological effect. Keep tumor growth and safety as separate outcomes. |
| Plasma drug concentration measured repeatedly after dosing | Where does it go, and for how long? | The time course helps interpret exposure. Plasma measurements alone do not give every tissue's concentration. |
| Intestinal tissue examined for treatment-related injury | What can it harm? | Injury is a safety observation. Interpret it with exposure, target relevance, duration, and the assessment method. |
| Batch identity, active content, impurities, and storage data | What exactly are we giving? | These address quality. Controlled material helps connect the administered product to the evidence. |
| Rules for dose escalation and treatment interruption | How will we test it in people? | These specify clinical decisions. Their rationale should connect to the available evidence. |

**If a card is misplaced:** explain the type of measurement, then invite a retry. Example: “A concentration-time curve describes exposure. Which question asks about exposure?” Do not simply show a red X.

**Connection:** one strong card cannot answer every question. CMC controls support the identity, quality, purity, and strength of the investigational drug; the needed detail develops with the program. [FDA CMC information](https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information)

### 2:50–4:20 — Microtask 2: Repair the claim

**Teaching example — invented findings, not a real drug or FDA decision.**

A human tumor is grown in a mouse: a **xenograft**. The experimental drug suppresses the human tumor's XYZ1 pathway, and tumor growth slows relative to the control. No intestinal injury is detected by the assessments used. Additional measurements show that the drug does **not** suppress the corresponding pathway in the mouse's normal intestine at the achieved exposure. For this example, assume human normal intestinal cells also need XYZ1 function.

**Draft claim:** “The drug suppresses human tumors while sparing normal human intestine.”

**Action:** cross out the unsupported part and write one sentence to replace it.

**Hint:** the tumor is human; the normal intestine is mouse. Which compartment actually experienced the relevant pathway inhibition?

**Reveal after an attempt:** “The study supports antitumor activity in this model. It does not establish that inhibiting XYZ1 will spare normal human intestine, because the mouse intestine did not experience the relevant pathway inhibition.”

**Feedback by reasoning:**

- If the answer declares human intestinal safety: “Locate the evidence that normal human intestine was tested. There is none in these findings. Narrow the safety claim to what was observed in this mouse experiment.”
- If the answer declares the drug definitely toxic to people: “You identified a gap. A gap does not establish injury. Keep the risk unresolved and name the evidence needed.”
- If the answer dismisses the entire experiment: “Retain the result it can support: activity in this tumor model. Limit the extrapolation rather than deleting valid observations.”
- If the answer identifies the species/target mismatch: “You separated the measured effect from the untested human risk. Now specify how you would investigate that risk.”

This inference follows the invented conditions above. Real species selection also considers exposure, metabolism, and other toxicities. FDA teaching material discusses pharmacological relevance in species choice. [FDA pharmacology and toxicology training, slide 13](https://www.fda.gov/media/185123/download)

**Scientist's objection — an exact line from the creator's learning conversation:**

> not necessarily, more selective for XYZ1 may still have toxicity for intestinal functions

Editorial use: this expresses the creator's mechanistic habit of questioning a reassuring claim. Preserve its meaning; do not present it as a clinical conclusion about a real target.

### 4:20–5:55 — Microtask 3: Design evidence that addresses the gap

**Action:** complete a three-line experiment sketch:

1. I would use a model where ______.
2. I would measure both ______ and ______.
3. A result that would change my next decision is ______.

**One defensible sketch:** “I would use a justified model of normal human intestinal function in which the drug engages XYZ1. I would measure pathway suppression together with tissue function or injury across measured exposure and time. If injury tracks pathway suppression, I would investigate the usable exposure and schedule further; if injury is absent, I would first check engagement, assay sensitivity, duration, and model limitations.”

**Guided feedback:**

- “Repeat the same xenograft with more mice”: more observations may improve precision, but do not introduce the missing normal-tissue target perturbation. Change the model or evidence source to address that gap.
- “Increase the oral dose”: first establish achieved exposure and whether the mouse target can be meaningfully inhibited. A larger administered dose alone does not show either.
- “Use human intestinal organoids”: a useful hypothesis-driven option. Add target engagement, measured exposure, a functional or injury readout, and limitations. Do not treat one model as a complete safety package.
- “Use a relevant animal species”: justify relevance with the target, PK/metabolism, and achievable exposure; “another species” is not a sufficient rationale by itself.

This is a scientific reasoning exercise, not an instruction that FDA universally requires one specific assay. In the advanced-cancer setting covered by ICH S9, nonclinical evidence informs pharmacology, organ toxicity, exposure relationships, and clinical design. Model and study choices require a program-specific justification. [ICH S9, sections 1.3, 1.4, 2.1, 2.4](https://www.fda.gov/media/73161/download)

### 5:55–6:40 — Optional computational lens

**Analogy, not a regulatory rule:** imagine validating a model on examples that never contain the mechanism you need it to detect. More examples from that same distribution cannot demonstrate detection of the missing mechanism.

In this experiment, the normal mouse intestine never experienced the relevant target inhibition. A clean observation there cannot establish what will happen when normal human intestine does experience it. The “out-of-domain” question becomes concrete: **which biological condition changed between the tested system and the claim?**

The analogy has limits: biological systems are not merely rows in a dataset. Exposure, tissue context, metabolism, and time can change together.

### 6:40–8:00 — Transfer: a new formulation

**New teaching example:** the team replaces its oral formulation. In a PK comparison at the same administered dose, the new formulation produces higher exposure. The team says, “The dose did not change, so the previous safety interpretation is unchanged.”

**Action:** write two sentences: identify the faulty assumption and name evidence to review before accepting the claim.

**Rubric — show after the learner commits an answer:**

| What a useful answer contains | Why it matters |
|---|---|
| Dose is distinguished from achieved exposure | The same administered amount can produce different exposure. |
| The new exposure is compared with exposures and findings in the existing safety evidence | Interpretation depends on what the studies actually covered. |
| Relevant PK, schedule, product differences, and uncertainties are identified | No single dose label settles the assessment. |
| The answer requests an assessment of whether additional support is needed | A formulation change does not automatically require repeating every study. |

**Example:** “The unchanged dose does not imply unchanged exposure or risk. I would review the new PK and product differences against the exposure, schedule, and findings covered by the existing safety studies, then determine whether the proposed clinical use needs additional support.”

**Exit card:** “I can now separate an observation, an inference, and an unanswered question.” This marks completion of the exercise, not mastery or readiness to submit an IND.

## Original 55-second animated-diagram script

107 spoken words; target natural delivery over about 55 seconds with short pauses. Timing is a storyboard estimate to refine after recording. No imitation of Andrew Ng's voice, face, or branding. Use original line drawings and restrained movement.

| Time | Visual | Narration |
|---|---|---|
| 0–8 s | A simple human tumor-cell cluster inside a labeled mouse outline; its growth curve flattens. | “A tumor grows more slowly after treatment. That is an encouraging result. But which claim does it support?” |
| 8–17 s | Zoom into the human tumor. A molecule touches XYZ1; the pathway dims. | “Inside this mouse is a human tumor. The drug suppresses the human target, and the tumor responds.” |
| 17–27 s | Pan to normal mouse intestine. The same molecule passes; the pathway remains active. | “Now look at the intestine. In this example, the mouse target stays active. No injury appears.” |
| 27–39 s | A proposed “human intestine is safe” label appears; a dotted inference arrow stops before it. | “That observation does not establish that normal human intestine would be spared. We have not tested the same biological condition.” |
| 39–49 s | Five small question nodes appear: biology, exposure, safety, quality, clinical plan. | “An IND connects several kinds of evidence: biological effects, drug exposure, potential harm, product quality, and the clinical plan.” |
| 49–55 s | Return to two labels: “What it supports” and “What remains unknown.” | “Your task is to keep the useful result, locate the gap, and choose evidence that addresses it.” |

**Accessibility and editorial notes:** use labels and shapes as well as color; provide captions, transcript, pause/replay, and a reduced-motion/static option. Do not anthropomorphize the mouse as “safe” or use a human-safety checkmark. The scene does not represent a complete toxicology study.

## Implementation notes for the pilot

- Interaction 1 can use click-to-select plus keyboard buttons; dragging must be optional.
- Interaction 2 should permit a short written repair, then reveal an explanation. If no language model is connected, label the feedback as a worked answer, not “AI analysis of your answer.”
- Interaction 3 uses a structured three-line sketch and an explicit comparison rubric. More than one experiment can be defensible.
- Optional AI tutor prompt: “Separate the learner's observation, inference, and missing evidence. Ask at most one focused follow-up. Cite the supplied source excerpt for a regulatory claim. If the supplied material does not settle the question, state the uncertainty. Do not infer regulatory approval or invent study requirements.”
- Keep immediate feedback specific; avoid points, approval probabilities, or a pretend FDA readiness score.
- The visible source drawer distinguishes **regulation**, **guidance**, **FDA educational material**, and **invented teaching example**. The five-question model and computational analogy are original teaching devices.

## Source register

Checked 14 September 2026. Regulatory scope is US FDA. ICH S9 references concern advanced cancer with limited therapeutic options; they are not generalized to healthy volunteers or all medicines.

| ID | Source | Type | Supports |
|---|---|---|---|
| FDA-IND | [FDA: Investigational New Drug application](https://www.fda.gov/drugs/types-applications/investigational-new-drug-ind-application) | FDA overview | Major IND content areas and initial human investigation context |
| CFR-31223 | [21 CFR 312.23](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.23) | Regulation | Actual content requirements; the teaching map is not the official structure |
| FDA-CMC | [FDA: CMC information](https://www.fda.gov/drugs/investigational-new-drug-ind-application/ind-applications-clinical-investigations-chemistry-manufacturing-and-control-cmc-information) | FDA overview | Quality information and development-stage context |
| FDA-IB-2024 | [FDA: Pharmacology and Toxicology in the Investigator's Brochure](https://www.fda.gov/media/185123/download) | FDA training, 11 December 2024 | Species relevance; exposure and toxicology context |
| ICH-S9 | [FDA-adopted ICH S9](https://www.fda.gov/media/73161/download) | Guidance, March 2010 | Scope, scientific justification, pharmacology/toxicology links to clinical development |

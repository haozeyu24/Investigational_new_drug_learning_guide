# IND Evidence Lab

A working interactive learning prototype for **early R&D scientists who already understand biology and drug discovery but do not yet understand how a development candidate becomes a clinical-stage drug**.

The user authorized this prototype after their initial learning-first phase. Develop it gradually with them. Preserve the perspective of a high-agency mechanistic, experimental, and computational biologist who uses AI. Do not invent biographical credentials or regulatory expertise.

## Version 0.1

- Three interactive labs: evidence workstreams, model relevance, and dose versus exposure.
- A captioned six-scene visual lesson with play, pause, scene controls, and transcript.
- Four introductory briefing cards: CMC, clinical protocol, people, and the submission.
- A 16-chapter curriculum outline, with planned material explicitly labeled.
- Contextual prompts to copy into an AI tool. No live-model connection or server-side learner data storage.
- Optional WebMCP tools expose the same navigation and model controls to supported browsers.

## Run and edit

This is a static HTML/CSS/JavaScript site. Edit `dist/index.html`, `dist/styles.css`, and `dist/app.js` directly; no build step or dependency installation is required.

Run `python3 -m http.server 4173 --bind 127.0.0.1 --directory dist`, then open http://127.0.0.1:4173/.

`.openai/hosting.json` identifies the existing private Site. Reuse that project; do not register another. Only `dist/` is served. The personal learning notebook in `learning/` is not included in the deployed assets.

## Scientific scope

US FDA, small-molecule foundation. Regulatory sources are linked in the prototype. The XYZ1 model and exposure simulation are explicitly illustrative. Do not imply that course progress measures submission readiness, animal recovery proves human recovery, or absence of injury proves safety. Keep oncology-specific and other modality guidance in their stated contexts.

`training/course-map.md` is the longer-term blueprint. `training/pilot-lesson.md` and `training/pilot-content.json` preserve reusable lesson material. `learning/` preserves the user's earlier learning context.

Source check: 2026-09-14. This is a learning prototype, not a comprehensive IND course or a submission-ready package.

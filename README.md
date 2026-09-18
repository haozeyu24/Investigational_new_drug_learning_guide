# First-in-Class.ai · IND Interactive Learning Guide

A local, interactive learning guide for early R&D scientists across drug discovery disciplines. Follow the evidence and decisions that take a small-molecule program from discovery toward an Investigational New Drug (IND) application.

## Open the guide

Open **`dist/index.html`** in a browser. Keep the entire `dist` folder together: the HTML contains the application code and styles, while molecular structures and figures are in `dist/assets`.

No server or installation is required. The same `dist` files can also be deployed to a static host such as Vercel. Progress uses browser storage on both local files and hosted URLs; no progress API or account is required.

Saved positions and completed exercises persist across refreshes in the same browser and site. Progress is not synced across devices, domains, or between the local HTML and hosted site. Clearing site data removes it. The welcome opens on every page load without clearing progress.

Returning from a lesson restores the learning map’s previous scroll position and focuses that chapter. If the page was reloaded or the learner moved to a different chapter, the map brings the current chapter into view.

## Current learning map

The guide now has four parts and 25 main lessons:

1. The purpose of an IND.
2. Can we make a good drug candidate?
3. IND-enabling development: an overview, followed by nonclinical evidence, drug material and CMC, and the clinical plan.
4. FDA engagement, IND submission, and review.

Part 3 has nine chapters: four on nonclinical evidence, three on drug material and CMC, and two on clinical planning. “Connect drug action to potential benefit” has four tabs: FDA requirements, Bridge the evidence, a worked initial-IND case for ivacaftor, and supporting lessons from past programs. All nine chapters use a reading flow without separate example or decision-exercise screens. The remaining three nonclinical chapters each use one concise page: a main message, a horizontal reasoning path, a discovery-to-IND comparison, and a takeaway. The five CMC and clinical chapters retain their concept maps. Case labels in the developed pharmacology chapter distinguish original IND reviews, later IND discussions, and marketing assessments.

Run the smoke checks from the repository root with Node.js:

```sh
node tests/guide-smoke.cjs
node tests/reasoning-guide.cjs
node tests/progress-storage.cjs
node tests/map-navigation.cjs
node tests/fda-review-library.cjs
node tests/ind-evidence-map.cjs
```

The checks exercise rendering, navigation, decision feedback, and browser-local progress in a mocked DOM. They do not replace visual browser review.

## FDA review source library

Open `dist/fda-review-library.html`, or use the source-library link on the learning map or the candidate-development examples. The library contains 34 verified records from FDA approval packages and complete response letters. It distinguishes reproduced reviews/extracts, later summaries, meeting minutes, and letters, with PDF page links and limits on interpretation.

The library works locally and on a static host. External PDFs open on FDA's website. Verification notes and the inclusion rule are recorded in `research/fda-review-library.md`.

## Current milestone

**v0.1.0 — September 16, 2026** preserves the reviewed local guide, including:

- The learning-path portal and introductory IND material.
- Expanded discovery refresher: target validation, hit identification, hit to lead, and lead optimization.
- The Vertex ivacaftor example, from lead 16 to development candidate 48.
- Structure-based SAR comparisons, the two chemistry routes, the six-candidate activity/PK comparison, and a dedicated lead-to-candidate comparison.

The guide is a learning map, not a universal regulatory checklist. Literature citations and qualifications accompany the examples. Source figures retain their original attribution.

## Edit and refresh

| File | Purpose |
| --- | --- |
| `dist/catalog.js` | Learning content and published example data |
| `dist/content.js` | Supporting guide content |
| `dist/app.js` | Rendering, navigation, exercises, and progress |
| `dist/styles.css` | Visual presentation |
| `dist/reasoning.js` / `dist/reasoning.css` | Shared reasoning maps, case views and exercises |
| `dist/reasoning-content.js` | Packaged content for the nine IND-enabling chapters |
| `research/reasoning-build/*.json` | Editable chapter content, cases and source references |
| `dist/assets/` | Structures, figures, and illustrations |
| `dist/refresh-local-html.py` | Packages the source files into the local HTML |

After editing chapter JSON, run `python3 research/reasoning-build/build.py`. After editing the source files, run from the repository root:

```sh
python3 dist/refresh-local-html.py
```

Then reopen or refresh `dist/index.html`. Commit the updated source files, assets, and HTML together so each saved version is ready to open.

## Version history

Git tracks each saved change. The tag **`v0.1.0`** marks this milestone; later development can continue without changing that snapshot.

```sh
git log --oneline
git show v0.1.0 --stat
```

To inspect the milestone separately without changing the current working files:

```sh
git worktree add --detach ../ind-guide-v0.1.0 v0.1.0
```

The GitHub repository is a backup and version history. Opening the guide remains a local workflow; GitHub Pages is not required.

### Part 3 evidence development

The opening pharmacology chapter compares ivacaftor’s discovery paper with its initial IND review in two initially collapsed sections: evidence relevant to lead optimization and a side-by-side comparison of activity/mechanism/human-tissue findings. It distinguishes additional detail in the review from experiments necessarily conducted after nomination. The case stays focused on biological rationale; dose escalation belongs to the clinical and safety discussions. “Lessons from the past” connects three main cases—cinacalcet, ensartinib and crizotinib—from interpreting a drug effect to planning patients and learning from clinical observations. The existing 26 cases remain in an optional reference collection under five expandable groups. Its completion button records a reading acknowledgement; it is not an exercise score. Old principle-tab positions migrate into their matching group, and older links and saved completion remain supported.

The other eight IND-enabling chapters now use reading acknowledgements for completion. The three remaining nonclinical pages cover dose–exposure–effect, interpretation of potential harm, and support for a specific human study. Their concise content is edited in `research/reasoning-build/nonclinical-minimal.json`. The five CMC and clinical chapters retain 19 concept-map steps. Earlier case and exercise drafts remain in the research content, but their separate screens are not exposed. Old example/exercise links and saved positions open the core content, preserving existing completion. The discovery chapters retain their established content and presentation.

Open `dist/ind-evidence-map.html` for the broader verified passage-to-lesson assignments. The focused reviews in `research/minireviews-development/` and `research/minireview-action/` are the editorial foundation for the new chapters. The full FDA search remains incomplete; its latest recorded state is in `research/index-screen/progress.json`.

Rebuild the research map with `python3 research/build-ind-evidence-map.py`; check its offline filters with `node tests/ind-evidence-map.cjs`.

# First-in-Class.ai · IND Interactive Learning Guide

A local, interactive learning guide for early R&D scientists across drug discovery disciplines. Follow the evidence and decisions that take a small-molecule program from discovery toward an Investigational New Drug (IND) application.

## Open the guide

Open **`dist/index.html`** in a browser. Keep the entire `dist` folder together: the HTML contains the application code and styles, while molecular structures and figures are in `dist/assets`.

No server or installation is required. The same `dist` files can also be deployed to a static host such as Vercel. Progress uses browser storage on both local files and hosted URLs; no progress API or account is required.

Saved positions and completed exercises persist across refreshes in the same browser and site. Progress is not synced across devices, domains, or between the local HTML and hosted site. Clearing site data removes it. The welcome opens on every page load without clearing progress.

## Current learning map

The guide now has four parts and 24 main lessons:

1. The purpose of an IND.
2. Can we make a good drug candidate?
3. Can we build the evidence for human testing?
4. Can we begin the first human study?

Part 3 uses osimertinib to illustrate pharmacology, exposure, safety, and product quality. Its examples identify whether the evidence comes from a published preclinical study, the IND-review appendix reproduced in FDA's public review, or a later NDA quality assessment. They do not reconstruct the full initial IND or treat commercial specifications as universal first-in-human requirements.

Run the smoke checks from the repository root with Node.js:

```sh
node tests/guide-smoke.cjs
node tests/progress-storage.cjs
```

The checks exercise rendering, navigation, decision feedback, and browser-local progress in a mocked DOM. They do not replace visual browser review.

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
| `dist/assets/` | Structures, figures, and illustrations |
| `dist/refresh-local-html.py` | Packages the source files into the local HTML |

After editing the source files, run from the repository root:

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

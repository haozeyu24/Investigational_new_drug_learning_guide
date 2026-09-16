# First-in-Class.ai · IND Interactive Learning Guide

A local, interactive learning guide for early R&D scientists across drug discovery disciplines. Follow the evidence and decisions that take a small-molecule program from discovery toward an Investigational New Drug (IND) application.

## Open the guide

Open **`dist/index.html`** in a browser. Keep the entire `dist` folder together: the HTML contains the application code and styles, while molecular structures and figures are in `dist/assets`.

No server or installation is required. Learning progress is stored in the browser and is not included in Git or synced through GitHub.

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

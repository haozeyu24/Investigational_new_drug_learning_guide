# IND Evidence Lab

An interactive learning prototype for early R&D scientists who know biology and drug discovery and want to understand the path from a biological question to a clinical-stage small molecule.

## Learning design

The portal offers Small Molecule and Biologics (under construction). Small Molecule opens a compact Learn Git Branching-inspired selector: eight category rows, four numbered boxes per row. Every box opens a working introductory lesson. Hovering or focusing a number reveals its title; completed exercises receive a gold star. All lessons are open, and Continue resumes the most recently visited unfinished lesson.

The categories are target identification and validation, hit discovery, hit to lead, lead optimization and candidate selection, IND-enabling nonclinical studies, CMC, clinical and regulatory planning, and IND submission and review.

Each lesson presents **Understand → See an example → Try it**, one screen at a time. A correct answer followed by Complete level saves completion. Opening or navigating a lesson does not complete it. Sources, AI prompts, and additional tools stay in disclosures. The model and exposure examples retain their interactive controls.

The user's perspective is expressed through mechanistic reasoning, experimental judgment, computational thinking, and thoughtful AI use. No personal credentials are invented.

## Development

The frontend is plain HTML/CSS/JavaScript in `dist/`. The canonical 32-lesson catalog is `training/small-molecule-course.json`. `scripts/sync-catalog.mjs` generates `dist/catalog.js` and `server/answers.mjs` from the same data. The build runs this generation automatically. After editing lesson content, run the sync script before tests.

`npm run dev` serves the site and a local progress database at http://127.0.0.1:4173/.

`npm test` validates the catalog, all lesson screens, routing, saved progress, and authenticated API with a real SQLite database and a minimal DOM boundary. `npm run build` creates the Cloudflare Worker in `dist/server/index.js`, embedding the text assets and progress API. The deployed runtime has no third-party dependencies.

The routes are `#portal`, `#small-molecule`, and `#small-molecule/LESSON/STEP`. Existing lesson links still resolve. Browser Back returns through the portal/map/lesson hierarchy; lesson steps replace the current lesson route.

`db/schema.ts` defines progress keyed by authenticated user and lesson ID. Hosted requests use the private Sites dispatcher's `oai-authenticated-user-id` header. Client identities are not accepted. The seven existing lesson IDs and answer positions are preserved. The expanded course requires no schema migration. Local preview uses its own development identity in `.local/progress.sqlite`.

`.openai/hosting.json` binds the existing private Site and D1 database. Reuse this Site ID. The personal `learning/` notebook is not published or committed.

## Scope

This is a US FDA introductory learning path, not a complete professional IND preparation course. The endpoint is initial IND review and readiness for a first participant; IND responsibilities continue during clinical development. Lesson order is instructional: real workstreams overlap and do not form a universal checklist.

Targets, compounds, measurements, and clinical scenarios are invented examples. Regulations and guidance retain their respective scopes. Completion records exercises, not regulatory mastery or submission readiness. Sources are linked from every lesson.

`training/course-map.md` retains the earlier roadmap for future depth. `training/pilot-lesson.md` and `training/pilot-content.json` preserve earlier reusable material. `training/validation.md` records current checks.

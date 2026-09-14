# IND Evidence Lab

A gradual learning prototype for early R&D scientists who understand biology and drug discovery but do not yet understand how a development candidate becomes a clinical-stage drug.

## Current learning design

The user requested the Learn Git Branching model: an overview first, one point at a time, concrete worked examples, clear goals, and saved progress. Preserve this structure as the course grows.

- The first screen is a seven-level overview with a Start / Resume action and completion marks.
- Every level follows Understand → See an example → Try it.
- Show one step at a time. Back and Next provide the primary navigation.
- A correct exercise answer followed by Complete level saves completion; opening a level does not mark it complete.
- Sources, AI prompts, visual recap, and deeper references stay in secondary disclosures.
- The 16-chapter outline is a future curriculum, not a claim that the introductory prototype covers everything.

Preserve the user's identity through mechanistic reasoning, experimental judgment, computational thinking, and thoughtful AI use. Do not invent personal credentials.

## Development

The frontend remains plain HTML/CSS/JavaScript in `dist/index.html`, `dist/styles.css`, `dist/content.js`, and `dist/app.js`.

`npm run dev` serves the site and a local progress database at http://127.0.0.1:4173/.

`npm test` validates the learning state transitions and authenticated progress API with a real SQLite database. `npm run build` creates the Cloudflare Worker in `dist/server/index.js`, embedding the static text assets and progress API. Runtime code has no third-party dependencies.

`db/schema.ts` defines the progress table. `npm run db:generate` generates Drizzle migrations. The schema stores a lesson, current step, completion flag, and update timestamp per authenticated user. Hosted requests use the private Sites dispatcher's `oai-authenticated-user-id` header. Client-supplied user identities are not accepted. Local preview uses a separate development identity and `.local/progress.sqlite`.

`.openai/hosting.json` binds the existing private Site and D1 database. Reuse this Site ID. The personal `learning/` notebook is not published or committed.

## Content and scope

US FDA, small-molecule foundation. XYZ1, batch values, clinical scenarios, and model values are invented teaching examples. Guidance and regulations retain their distinct scopes. Completion records exercises, not regulatory mastery or submission readiness.

`training/course-map.md` contains the broader curriculum; `training/pilot-lesson.md` and `training/pilot-content.json` preserve reusable material. `training/validation.md` records the current checks.

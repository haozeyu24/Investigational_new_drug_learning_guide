# Sequential prototype validation

Checked 2026-09-14.

Seven automated checks passed:

1. Overview → concept → worked example → exercise → saved completion; reload resumes a partially completed next level.
2. All seven levels have three separate steps, one main heading per active screen, and exactly one supported answer.
3. Exposure inputs preserve correct calculations and reject invalid settings; model condition validation does not change valid state on failure.
4. Saved place survives reads; an incorrect answer cannot complete a level; revisiting a completed level preserves completion.
5. All seven server-side answer keys record their corresponding level.
6. Progress is isolated by authenticated user; missing authentication and client identity overrides are rejected.
7. Invalid input and cross-origin writes do not change progress. Storage failure produces an explicit error.

The frontend state tests use a minimal DOM boundary, not a browser. API tests execute the generated schema against SQLite. JavaScript syntax and the Worker build passed; generated SQL is a bounded schema-only migration with a composite user/lesson primary key. Local HTTP readiness passed.

No browser automation was performed for this revision. The user-facing preview was reopened for review. Hosted deployment success is verified separately through Sites.

Scientific content retains the sourced US small-molecule foundation. The four new worked examples were reviewed for phase-appropriate CMC, actionable protocols, sponsor obligations, and separate IND/IRB/consent conditions. All examples are explicitly hypothetical. This is not specialist sign-off on a full curriculum or an IND package.

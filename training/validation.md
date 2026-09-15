# Portal and 32-level course validation

Checked 2026-09-14.

Nine automated checks passed:

1. Portal → eight-category map → concept → worked example → exercise → saved completion star; reload resumes a partially completed lesson.
2. All 32 levels render three distinct screens, exactly one main heading per screen, one supported answer, sources, and an AI practice prompt.
3. Deep links and legacy links resolve. Back returns from a lesson to the map and portal. Invalid routes fall back to the portal.
4. Model and navigation tool inputs reject invalid settings without altering valid state. Navigation does not complete exercises.
5. Saved place survives reads; incorrect answers cannot complete a level; replay preserves completion.
6. All 32 correct catalog answers pass server validation. Every incorrect option is rejected.
7. Progress is isolated by authenticated user; missing authentication and client identity overrides are rejected.
8. Invalid requests and cross-origin writes cannot change progress; storage failure is explicit.
9. The seven prior lesson IDs and answer positions remain compatible. There are eight categories with exactly four levels each.

State tests use a minimal DOM boundary, not a browser. API tests execute the existing schema against SQLite. JavaScript syntax and the Worker build passed. No database schema or applied migrations changed.

No browser automation or visual browser inspection was performed for this revision. Local HTTP readiness and generated Worker assets are checked separately. Deployment success is verified through Sites.

Content was reviewed for evidence versus inference, phase-appropriate CMC, clinical-plan-dependent nonclinical support, context-specific starting-dose frameworks, sponsor obligations, and separate IND/IRB/consent requirements. Primary references are attached to lessons. FDA's first-in-human small-molecule CMC clarification was added to distinguish initial IND stability support from registration expectations.

This validates an introductory prototype and its functionality; it is not specialist sign-off on an IND package or a claim of comprehensive professional training.

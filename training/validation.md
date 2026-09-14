# Prototype validation

Checked 2026-09-14 against the local served version.

- JavaScript syntax check passed; static references resolve locally.
- Browser: incorrect and correct evidence-map answers produce distinct explanatory feedback, and the successful answer advances to the model lab.
- Browser: the model condition changes the interpretation while retaining human uncertainty. The experiment note and worked comparison are usable.
- Browser: exposure controls work by keyboard; reset restores F = 0.5 and half-life = 4 h. At F = 1 and half-life = 8 h, initial concentration is 100 units, AUC is approximately 1154 unit·h, and 24-hour concentration is 12.5 units.
- Browser: visual-lesson play/pause, scene selection, next, replay state, and transcript are available; closing stops the playback timer.
- Browser: all four briefing cards and their next links work; the course outline contains 16 entries.
- Browser: the contextual AI prompt copies successfully. It explicitly states that no live model is connected.
- Browser: phone (320 px), tablet (768 px), and desktop (1440 px) layouts were inspected. No horizontal document overflow was observed at these widths. Keyboard focus and native modal labeling were checked. These checks do not constitute a full accessibility audit.
- Native WebMCP context: all four tools registered with the expected schemas and annotations. Valid calls updated the same visible state as the interface. Invalid model settings, half-life, navigation, and read parameters were rejected without changing valid state.
- No browser console errors were observed in the final local session.

Scientific review covered the US small-molecule scope, phase-appropriate CMC, PK/PD terminology, the limits of model-to-human inference, and keeping guidance distinct from regulations. This is a sourced educational prototype, not specialist sign-off on a complete curriculum or an IND package.

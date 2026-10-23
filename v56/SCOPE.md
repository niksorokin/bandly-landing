# V56 scope

V56 is an isolated copy of V55: the same design, set in the live site's Instrument Serif / Inter / JetBrains Mono. V1–V55 and their published version routes are unchanged.

## Type change (the only change)

- The Inter-only variable stylesheet (`opsz,wght`) is removed. V56 loads exactly `Inter:wght@300;400;500;600`, `Instrument+Serif:ital@0;1` and `JetBrains+Mono:wght@400;500` from Google Fonts, with no second display face.
- Inter (`'Inter', ui-sans-serif, system-ui, sans-serif`) is used for body text, buttons, nav links, ledes, form fields and FAQ questions. Body weight is 400 instead of 460. Buttons and FAQ questions use 500.
- Instrument Serif (`'Instrument Serif', Georgia, serif`) is used for display headlines, h1, section h2/h3, service names, SME card titles, stat numbers, the calculator amount and dialog titles. All are weight 400, letter-spacing -0.02em and line-height 0.98–1.05.
- JetBrains Mono (`'JetBrains Mono', ui-monospace, monospace`) is used at 11–13px with modest positive tracking for eyebrows, step numbers, service numbers, chat meta, file names, pills and chips, comparison row labels, SME category labels and calculator marks. Nothing is newly uppercased.
- Instrument Serif is not used on body paragraphs or buttons, and JetBrains Mono is not used on headlines.

## Preserved from V55

- Every color, photo, layout, glass card, the midnight wine accent (`#421d24`), the single Deep Lagoon band and the wine footer.
- Workspace-tab fix: `.app-pane[hidden]` is `display:none`.
- Skip link, `<main>` landmark, photo outlines, press scale and 16px text inputs.
- All copy, stats, prices, FAQ answers, service names and form fields.
- `data-open-intake`, `data-open-login`, intake, success and login dialogs, the honeypot, and `fetch('/api/intake')` with the same JSON keys (`service`, `industry`, `email`, `contact`, `company_website`).
- FAQ accordion, SME gallery buttons, workspace tabs and composer, the `#calcRange` pricing calculator, and the sticky `#navWrap`.
- `_worker.js` and `_routes.json` are unchanged.

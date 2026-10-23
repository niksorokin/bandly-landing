# V55 scope

V55 is a visual restyle of V54 in the Superhuman reference style. V1–V54 and their published version routes remain unchanged.

## Visual change

- Hero: the Unicorn Studio script and `data-us-project-src` layer are removed. The hero is now `assets/hero-dusk.png` full-bleed with a violet/blue dusk scrim. It has a centered white headline at weight 460, a midnight wine (`#421d24`) "Book a demo" pill, and glass cards (`rgba(255,255,255,.14)`, blur 12px, 16px radius, no shadow) built from the existing July-close chat lines.
- Announcement bar in midnight wine above the nav: "Accounting for SMEs · Dubai, UAE", with a ghost "See how we work" link to `#review`.
- Nav: transparent with light type over the photo. On scroll it turns parchment with `backdrop-filter: blur(12px)` and a 1px `#e3e3e2` border.
- Canvas is Warm Parchment `#f2f0eb`. Cards are white with a 1px `#e3e3e2` border, 16px radius and no shadow. Text is `#292827`, secondary text `#666666`.
- "Why Bandly" is the only Deep Lagoon (`#0c4243`) band. The footer is midnight wine. Lilac `#d4c7ff` is used only for secondary chips and ghost surfaces. Royal Violet `#714cb6` is used for link hover and the 2px `:focus-visible` ring.
- One type family: Inter variable from Google Fonts (`opsz,wght`). Instrument Serif and JetBrains Mono are no longer loaded. Headlines use weight 460 with negative tracking. Stats and the calculator use tabular figures.
- Added a skip link, a `<main>` landmark, 1px `oklch(0 0 0 / 0.1)` outlines on photos, and `scale(.96)` on button press. Text inputs are 16px.

## Preserved

- All copy, stats, prices, FAQ answers, service names and form fields.
- `data-open-intake`, `data-open-login`, intake, success and login dialogs, the honeypot, and `fetch('/api/intake')` with the same JSON keys (`service`, `industry`, `email`, `contact`, `company_website`).
- Ink SVG close controls (`#292827`).
- FAQ accordion, SME gallery buttons, workspace tabs and composer, the `#calcRange` pricing calculator, and the sticky `#navWrap`.
- `_worker.js` and `_routes.json` are unchanged.

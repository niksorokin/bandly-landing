# V49 scope

V49 is a versioned follow-on from V48. V1–V48 and the GitHub Pages root are unchanged.

- Expanded the demo intake to capture service interest, company industry, required work email, and optional phone/Telegram contact.
- Added responsive single-column choices on narrow screens, accessible required/error states, and retained native dialog keyboard/focus behavior.
- The intake is still a visual prototype: it does not transmit or store personal data. Recommended destination for live leads: a dedicated `Bandly inbound leads` database in the existing Notion CRM, written through a server-side endpoint. Do not expose the Notion token in browser code. Configure consent, spam protection, and clear success/failure states before connecting it.

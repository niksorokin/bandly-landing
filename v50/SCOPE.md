# V50 scope

V50 is a versioned follow-on from V49. V1–V49 and their published version routes remain unchanged.

- Replaced the preview-only demo CTA with a live submission to a private Google Sheet.
- Captures service interest, industry, work email, optional phone/Telegram, and explicit consent to store/follow up.
- The intake handler is a Pages `_worker.js` on `/api/intake`. Google OAuth credentials and the Sheet ID are Cloudflare Pages secrets. The handler validates origin, input and a honeypot; it does not return or log submitted contact details.
- The production request flow must be exercised end-to-end and the resulting test row removed before calling the feature verified.

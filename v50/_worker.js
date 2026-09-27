const SERVICE_OPTIONS = new Set([
  "Bookkeeping",
  "VAT",
  "Corporate tax",
  "Payroll",
  "Reporting",
  "Other",
]);
const INDUSTRY_OPTIONS = new Set([
  "Startups & SaaS",
  "E-commerce & retail",
  "Agencies & studios",
  "Professional services",
  "F&B & hospitality",
  "Operations & logistics",
  "Other",
]);

function reply(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

const ALLOWED_ORIGINS = new Set([
  "https://bandly.ai",
  "https://www.bandly.ai",
]);

function allowedOrigin(request) {
  const origin = request.headers.get("Origin");
  if (!origin) return false;
  try {
    const parsed = new URL(origin);
    if (parsed.origin !== origin) return false;
    if (ALLOWED_ORIGINS.has(parsed.origin)) return true;
    const target = new URL(request.url);
    return parsed.origin === target.origin && parsed.protocol === "https:";
  } catch {
    return false;
  }
}

async function handleIntake(request, env) {
  if (!allowedOrigin(request)) return reply({ error: "Request not allowed." }, 403);
  const contentType = request.headers.get("Content-Type") || "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return reply({ error: "Expected a JSON form submission." }, 415);
  }
  const declaredLength = Number(request.headers.get("Content-Length") || 0);
  if (declaredLength > 4096) return reply({ error: "Request is too large." }, 413);

  let data;
  try {
    data = await request.json();
  } catch {
    return reply({ error: "Could not read the form. Please try again." }, 400);
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return reply({ error: "Could not read the form. Please try again." }, 400);
  }
  if (String(data.company_website || "").trim()) return reply({ ok: true });

  const service = String(data.service || "").trim();
  const industry = String(data.industry || "").trim();
  const email = String(data.email || "").trim().toLowerCase();
  const contact = String(data.contact || "").trim();
  const consent = data.consent === true;
  if (!SERVICE_OPTIONS.has(service) || !INDUSTRY_OPTIONS.has(industry)) {
    return reply({ error: "Choose a service and industry." }, 400);
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reply({ error: "Enter a valid email address." }, 400);
  }
  if (contact.length > 120 || !consent) {
    return reply({ error: "Check the contact consent and try again." }, 400);
  }
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET || !env.GOOGLE_REFRESH_TOKEN || !env.SHEET_ID) {
    return reply({ error: "The form is temporarily unavailable. Please try again later." }, 503);
  }

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      refresh_token: env.GOOGLE_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  if (!tokenResponse.ok) return reply({ error: "The form is temporarily unavailable. Please try again later." }, 502);
  const token = await tokenResponse.json();
  if (!token.access_token) return reply({ error: "The form is temporarily unavailable. Please try again later." }, 502);

  const range = encodeURIComponent("Requests!A:G");
  const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(env.SHEET_ID)}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
  const sheetResponse = await fetch(appendUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values: [[new Date().toISOString(), service, industry, email, contact, "bandly.ai", "Yes"]],
    }),
  });
  if (!sheetResponse.ok) return reply({ error: "We couldn't save your request. Please try again." }, 502);
  return reply({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/intake") {
      if (request.method === "OPTIONS") {
        return new Response(null, { status: 204, headers: { Allow: "POST, OPTIONS" } });
      }
      if (request.method !== "POST") return reply({ error: "Method not allowed." }, 405);
      return handleIntake(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};

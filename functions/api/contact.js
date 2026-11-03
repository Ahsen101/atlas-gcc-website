// POST /api/contact: store a contact-form inquiry in the atlas-ges-db D1 database (binding: DB).
// Plain Cloudflare Pages Function. No npm imports; Workers runtime APIs only.
// There is deliberately no read route: submissions are read from the D1 console.

const LIMITS = { name: 120, email: 254, message: 5000, page: 200, userAgent: 300 };
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;
const RATE_MAX = 5; // submissions stored per IP hash ...
const RATE_WINDOW = '-60 minutes'; // ... within this window
const MAX_BODY_BYTES = 20000;

function json(status, body, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
      ...extra,
    },
  });
}

const invalid = () => json(400, { ok: false, error: 'validation' });

function clean(v, max) {
  if (typeof v !== 'string') return '';
  return v.replace(/\u0000/g, '').trim().slice(0, max + 1);
}

async function sha256Hex(text) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function handlePost(request, env) {
  // Same-origin only: a browser POST from another site carries a foreign Origin.
  const origin = request.headers.get('origin');
  if (origin) {
    let sameHost = false;
    try { sameHost = new URL(origin).host === new URL(request.url).host; } catch (_) { sameHost = false; }
    if (!sameHost) return json(403, { ok: false, error: 'forbidden' });
  }

  if (!(request.headers.get('content-type') || '').toLowerCase().includes('application/json')) return invalid();
  const declared = Number(request.headers.get('content-length') || '0');
  if (declared > MAX_BODY_BYTES) return invalid();

  let raw;
  try { raw = await request.text(); } catch (_) { return invalid(); }
  if (raw.length > MAX_BODY_BYTES) return invalid();

  let data;
  try { data = JSON.parse(raw); } catch (_) { return invalid(); }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return invalid();

  // Honeypot: real users never fill this hidden field. Pretend success, store nothing.
  if (typeof data.website === 'string' && data.website.trim() !== '') return json(200, { ok: true });

  const name = clean(data.name, LIMITS.name);
  const email = clean(data.email, LIMITS.email);
  const message = clean(data.message, LIMITS.message);
  const lang = data.lang === 'ar' ? 'ar' : 'en';
  const page = clean(data.page, LIMITS.page).slice(0, LIMITS.page) || null;

  if (!name || name.length > LIMITS.name) return invalid();
  if (!email || email.length > LIMITS.email || !EMAIL_RE.test(email)) return invalid();
  if (!message || message.length > LIMITS.message) return invalid();

  if (!env || !env.DB) return json(500, { ok: false, error: 'server' });

  const ip = request.headers.get('cf-connecting-ip') || '';
  const ipHash = await sha256Hex(`${env.IP_HASH_SALT || 'atlas-ges'}|${ip}`);

  const recent = await env.DB
    .prepare("SELECT COUNT(*) AS n FROM contact_submissions WHERE ip_hash = ?1 AND created_at > datetime('now', ?2)")
    .bind(ipHash, RATE_WINDOW)
    .first();
  if (recent && Number(recent.n) >= RATE_MAX) return json(429, { ok: false, error: 'rate_limited' });

  const userAgent = (request.headers.get('user-agent') || '').slice(0, LIMITS.userAgent) || null;
  await env.DB
    .prepare('INSERT INTO contact_submissions (name, email, message, lang, page, user_agent, ip_hash) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)')
    .bind(name, email, message, lang, page, userAgent, ipHash)
    .run();

  return json(201, { ok: true });
}

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method !== 'POST') {
    return json(405, { ok: false, error: 'method_not_allowed' }, { allow: 'POST' });
  }
  try {
    return await handlePost(request, env);
  } catch (_) {
    // Never leak stack traces or input back to the client, and log no PII.
    console.log('contact: server error');
    return json(500, { ok: false, error: 'server' });
  }
}

-- atlas-ges-db: contact form submissions (FR-7 / NFR-8).
-- Used only by the ATLAS GES site. No public read route exists.
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  name TEXT NOT NULL,                  -- 1..120 chars
  email TEXT NOT NULL,                 -- validated, <= 254 chars
  message TEXT NOT NULL,               -- 1..5000 chars
  lang TEXT NOT NULL,                  -- 'en' | 'ar'
  page TEXT,                           -- path the form was sent from
  user_agent TEXT,
  ip_hash TEXT,                        -- salted SHA-256 of the client IP, for rate limiting only (no raw IP stored)
  status TEXT NOT NULL DEFAULT 'new'   -- new | read | archived
);

CREATE INDEX IF NOT EXISTS idx_contact_ip_time ON contact_submissions (ip_hash, created_at);

# ATLAS GES website

Next.js 14 static export (`out/`) + Cloudflare Pages Functions (`functions/`), hosted on
Atlas CF (ATLAS GES's own Cloudflare account), Pages project `atlas-ges`,
domains https://atlasges.com (www.atlasges.com 301s to it). Contact form -> D1 `atlas-ges-db`.

## Build and deploy

```bash
npm ci
ATLAS_NOINDEX=1 NEXT_PUBLIC_SITE_URL=https://atlasges.com npm run build   # hidden (current)
npx wrangler pages deploy out --project-name atlas-ges --branch main      # production
```

## Search visibility switch: `ATLAS_NOINDEX`

One build-time env var controls whether search engines may index the site.

| `ATLAS_NOINDEX` | Robots meta on pages | `X-Robots-Tag` header (`out/_headers`) | robots.txt |
|---|---|---|---|
| `1` (hidden) | `noindex, nofollow` | `noindex, nofollow` on `/*` | `Allow: /`, no Sitemap line |
| unset (live) | none | no `_headers` file | `Allow: /` + `Sitemap:` line |

Crawling stays allowed in both modes, so Google can read the noindex and drop pages.
Canonical tags are the same in both modes.

**To go live:** build without `ATLAS_NOINDEX` (`NEXT_PUBLIC_SITE_URL=https://atlasges.com npm run build`)
and deploy. **To hide again:** build with `ATLAS_NOINDEX=1` and deploy.

## Tests

```bash
node tests/contact.test.mjs
node tests/middleware.test.mjs
python3 scripts/check_images.py
```

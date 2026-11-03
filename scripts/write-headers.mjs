// Post-build: write out/_headers for Cloudflare Pages from the same switch as the
// robots meta. ATLAS_NOINDEX=1 -> every path gets "X-Robots-Tag: noindex, nofollow"
// (covers images, sitemap and other non-HTML files). Unset -> no _headers file.
// No dependencies.
import { writeFileSync, rmSync, existsSync } from 'node:fs';

const file = new URL('../out/_headers', import.meta.url);
if (!existsSync(new URL('../out/', import.meta.url))) {
  console.error('write-headers: out/ not found (run next build first)');
  process.exit(1);
}
if (process.env.ATLAS_NOINDEX === '1') {
  writeFileSync(file, '/*\n  X-Robots-Tag: noindex, nofollow\n');
  console.log('write-headers: HIDDEN from search (X-Robots-Tag noindex on /*)');
} else {
  rmSync(file, { force: true });
  console.log('write-headers: LIVE (no X-Robots-Tag)');
}

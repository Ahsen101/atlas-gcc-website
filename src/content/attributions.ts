import fs from 'node:fs';
import path from 'node:path';

export interface CreditRow { item: string; author: string; licence: string; source: string; notes: string }
export interface CreditSection { page: string; rows: CreditRow[] }
export interface Credits { intro: string; sections: CreditSection[] }

/**
 * Read src/content/ATTRIBUTIONS.md at build time (static export) and parse its
 * "## <page>" sections and markdown tables. Text is kept exactly as written.
 */
export function readCredits(): Credits | null {
  const file = path.join(process.cwd(), 'src', 'content', 'ATTRIBUTIONS.md');
  if (!fs.existsSync(file)) return null;
  const lines = fs.readFileSync(file, 'utf-8').split(/\r?\n/);
  const sections: CreditSection[] = [];
  const intro: string[] = [];
  let current: CreditSection | null = null;
  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith('# ')) continue;
    if (line.startsWith('## ')) {
      current = { page: line.slice(3).trim(), rows: [] };
      sections.push(current);
      continue;
    }
    if (line.startsWith('|')) {
      const cells = line.replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
      if (!current || cells[0] === 'Item' || /^-+$/.test(cells[0].replace(/:/g, ''))) continue;
      const [item = '', author = '', licence = '', source = '', notes = ''] = cells;
      current.rows.push({ item, author, licence, source, notes });
      continue;
    }
    if (line && !current) intro.push(line);
  }
  return { intro: intro.join(' '), sections };
}

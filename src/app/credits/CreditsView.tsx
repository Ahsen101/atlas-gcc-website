'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import type { Credits } from '@/content/attributions';

interface Props { credits: Credits; titles: Record<string, { en: string; ar: string }> }

export default function CreditsView({ credits, titles }: Props) {
  const { t, lang } = useLanguage();
  const ar = lang === 'ar';
  const headingFont = { fontFamily: ar ? "'Noto Sans Arabic', sans-serif" : "'Space Grotesk', sans-serif" };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-atlas-950/95 backdrop-blur-lg py-3">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/images/logo-icon.png" alt="Atlas GES" width={40} height={40} className="object-contain" />
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ATLAS <span className="text-xs text-atlas-400 font-medium">GES</span></span>
          </a>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-black" style={headingFont}>{t('detail.credits')}</h1>
          <p className="mt-4 max-w-3xl text-gray-300" dir="ltr">{credits.intro}</p>
          {credits.sections.map((s) => (
            <section key={s.page} className="mt-12" aria-labelledby={`credits-${s.page}`}>
              <h2 id={`credits-${s.page}`} className="text-2xl font-bold mb-4" style={headingFont}>
                <a href={`/services/${s.page}/`} className="hover:text-atlas-400">{titles[s.page] ? (ar ? titles[s.page].ar : titles[s.page].en) : s.page}</a>
              </h2>
              <ul className="space-y-3" dir="ltr">
                {s.rows.map((r) => (
                  <li key={r.item} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-sm" data-credit-row>
                    <p className="font-semibold text-gray-200">{r.item}</p>
                    <p className="mt-1 text-gray-400">{r.notes}</p>
                    <p className="mt-1 text-gray-500">
                      {r.author} · {r.licence} ·{' '}
                      {/^https?:\/\//.test(r.source) ? (
                        <a href={r.source} target="_blank" rel="noopener noreferrer" className="underline hover:text-atlas-400 break-all">{r.source}</a>
                      ) : r.source}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </footer>
    </>
  );
}

'use client';

import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import type { DetailCard } from '@/content/types';
import type { ServiceMeta } from '@/content/services';

interface Props {
  service: ServiceMeta;
  card: DetailCard;
  siblings: { slug: string; heading: string; headingAr: string }[];
}

// A token starts and ends with a letter/digit, so sentence punctuation (".", ":") stays outside the isolate.
const LATIN_RUN = /([A-Za-z0-9](?:[A-Za-z0-9.:/+\-]*[A-Za-z0-9])?(?: [A-Za-z0-9](?:[A-Za-z0-9.:/+\-]*[A-Za-z0-9])?)*)/g;

/** Isolate Latin tokens (units, standards, acronyms) inside Arabic text so bidi ordering stays correct. */
function BidiText({ text, rtl }: { text: string; rtl: boolean }) {
  if (!rtl) return <>{text}</>;
  const parts = text.split(LATIN_RUN);
  return (
    <>
      {parts.map((p, i) => (i % 2 === 1 ? <bdi key={i} dir="ltr">{p}</bdi> : <Fragment key={i}>{p}</Fragment>))}
    </>
  );
}

export default function CapabilityDetail({ service, card, siblings }: Props) {
  const { t, lang } = useLanguage();
  const ar = lang === 'ar';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headingFont = { fontFamily: ar ? "'Noto Sans Arabic', sans-serif" : "'Space Grotesk', sans-serif" };
  const serviceTitle = ar ? service.titleAr : service.title;
  const cardHeading = ar ? card.card_heading_ar : card.card_heading;
  const serviceHref = `/services/${service.slug}/`;

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-atlas-950/95 backdrop-blur-lg shadow-2xl shadow-black/20 py-3' : 'bg-transparent py-5'}`}>
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg transition-transform group-hover:scale-110">
              <Image src="/images/logo-icon.png" alt="Atlas GES" width={40} height={40} className="object-contain" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ATLAS</span>
              <span className="text-xs text-atlas-400 ml-1 font-medium">GES</span>
            </div>
          </a>
          <div className="flex items-center gap-3 md:gap-8">
            <a href="/#services" className="hidden md:inline text-sm text-gray-300 hover:text-atlas-400 transition-colors">{t('shared.allServices')}</a>
            <a href="/#projects" className="hidden md:inline text-sm text-gray-300 hover:text-atlas-400 transition-colors">{t('nav.projects')}</a>
            <LanguageSwitcher />
            <ThemeToggle />
            <a href="/#contact" className="hidden md:inline-block rounded-full bg-atlas-600 px-5 py-2 text-sm font-semibold text-white hover:bg-atlas-500 transition-all hover:shadow-lg hover:shadow-atlas-500/20 hover:-translate-y-0.5">
              {t('nav.getInTouch')}
            </a>
          </div>
        </div>
      </nav>

      {/* Compact hero */}
      <header className="relative min-h-[340px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-atlas-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-atlas-950 via-atlas-950/40 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-12 pt-32 w-full">
          <nav aria-label={t('detail.breadcrumb')} className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
              <li><a href="/#services" className="hover:text-atlas-300 transition-colors">{t('detail.services')}</a></li>
              <li aria-hidden="true" className="text-gray-500">/</li>
              <li><a href={serviceHref} className="hover:text-atlas-300 transition-colors">{serviceTitle}</a></li>
              <li aria-hidden="true" className="text-gray-500">/</li>
              <li aria-current="page" className="text-atlas-400">{cardHeading}</li>
            </ol>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-wider text-atlas-400">{serviceTitle}</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-black leading-tight" style={headingFont}>{cardHeading}</h1>
        </div>
      </header>

      <main className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          {ar && t('detail.arReviewNote') && (
            <p className="mb-8 text-xs text-gray-500" data-ar-review-pending="true">{t('detail.arReviewNote')}</p>
          )}

          {/* In-page index */}
          <nav aria-labelledby="detail-index" className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <h2 id="detail-index" className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">{t('detail.inThisSection')}</h2>
            <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {card.items.map((item, i) => (
                <li key={item.slug}>
                  <a href={`#${item.slug}`} className="flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/[0.04] hover:text-atlas-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-400">
                    <span className="text-xs font-bold text-atlas-500" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <span><BidiText text={ar ? item.name_ar : item.name} rtl={ar} /></span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* One section per bullet */}
          <div className="mt-16 space-y-20">
            {card.items.map((item, i) => {
              const src = item.photo_file ? `/images/details/${service.slug}/${item.photo_file}` : null;
              const alt = (ar ? item.photo_alt_ar : item.photo_alt_en) || (ar ? item.name_ar : item.name);
              const flip = i % 2 === 1;
              return (
                <section key={item.slug} id={item.slug} aria-labelledby={`${item.slug}-h`} className="scroll-mt-28" data-detail-item={item.slug}>
                  <div className={`grid gap-8 ${src ? 'md:grid-cols-2 md:items-center' : ''}`}>
                    <div className={`${src && flip ? 'md:order-2' : ''}`}>
                      <p className="text-xs font-bold text-atlas-500" aria-hidden="true">{String(i + 1).padStart(2, '0')}</p>
                      <h2 id={`${item.slug}-h`} className="mt-1 text-2xl md:text-3xl font-bold" style={headingFont}>
                        <BidiText text={ar ? item.name_ar : item.name} rtl={ar} />
                      </h2>
                      <p className={`mt-4 text-gray-300 leading-relaxed text-base md:text-lg ${src ? '' : 'max-w-3xl'}`} data-detail-desc>
                        <BidiText text={ar ? item.desc_ar : item.desc_en} rtl={ar} />
                      </p>
                    </div>
                    {src && (
                      <figure className={`${flip ? 'md:order-1' : ''}`}>
                        <div className="overflow-hidden rounded-2xl border border-white/5">
                          <img
                            src={src}
                            alt={alt}
                            width={item.photo_width}
                            height={item.photo_height}
                            loading={i === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            className="w-full h-auto max-h-[560px] object-cover"
                          />
                        </div>
                        {(item.attribution || item.photo_author) && (
                          <figcaption className="mt-2 text-xs text-gray-500" dir="ltr">
                            {item.attribution || `${t('detail.photo')}: ${[item.photo_author, item.photo_licence].filter(Boolean).join(' / ')}`}
                            {item.photo_source_url && (
                              <>
                                {' '}
                                (<a href={item.photo_source_url} target="_blank" rel="noopener noreferrer" className="underline hover:text-atlas-400">source</a>)
                              </>
                            )}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Other capabilities */}
          {siblings.length > 0 && (
            <section aria-labelledby="other-caps" className="mt-24">
              <h2 id="other-caps" className="text-xl font-bold mb-6" style={headingFont}>{t('detail.otherCapabilities')}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {siblings.map((s) => {
                  const h = ar ? s.headingAr : s.heading;
                  return (
                    <a
                      key={s.slug}
                      href={`/services/${service.slug}/${s.slug}/`}
                      aria-label={`${h}, ${t('detail.viewDetails')}`}
                      className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-6 min-h-[44px] hover:border-atlas-500/20 hover:bg-white/[0.04] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-400 focus-visible:ring-offset-2 focus-visible:ring-offset-atlas-950"
                    >
                      <span className="font-semibold text-atlas-400" style={headingFont}>{h}</span>
                      <svg className="h-5 w-5 text-atlas-400 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  );
                })}
              </div>
              <a href={serviceHref} className="mt-8 inline-flex items-center gap-2 text-sm text-atlas-400 hover:text-atlas-300 transition-colors">
                <svg className="h-4 w-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                {t('detail.backToService')} {serviceTitle}
              </a>
            </section>
          )}

          {/* CTA */}
          <section className="mt-20 rounded-2xl border border-atlas-500/20 bg-atlas-600/10 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold" style={headingFont}>{t('detail.ctaTitle')}</h2>
            <p className="mt-3 text-gray-300">{t('detail.ctaBody')}</p>
            <a href="/#contact" className="mt-6 inline-block rounded-full bg-atlas-600 px-8 py-3 text-sm font-semibold text-white hover:bg-atlas-500 transition-all">
              {t('nav.getInTouch')}
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                <Image src="/images/logo-icon.png" alt="Atlas GES" width={32} height={32} className="object-contain" />
              </div>
              <span className="font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ATLAS <span className="text-atlas-400">GES</span></span>
            </div>
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
            <div className="flex items-center gap-4">
              <a href="/credits/" className="text-xs text-gray-500 hover:text-atlas-400 transition-colors">{t('detail.credits')}</a>
              <a href="https://www.atlasges.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-atlas-400 transition-colors">www.atlasges.com</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

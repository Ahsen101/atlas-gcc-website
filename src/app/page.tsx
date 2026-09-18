'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';

// ============================================================
// Scroll-reveal hook
// ============================================================
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-pop, .reveal-up')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ============================================================
// Animated counter
// ============================================================
function Counter({ end, suffix = '', labelKey }: { end: number; suffix?: string; labelKey: string }) {
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          // Respect reduced-motion: jump straight to the final value.
          const prefersReduced =
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (prefersReduced) {
            setCount(end);
            return;
          }
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-atlas-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm text-gray-400 uppercase tracking-wider">{t(labelKey)}</div>
    </div>
  );
}

// ============================================================
// Language Switcher
// ============================================================
function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      className={`flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold hover:border-atlas-500/30 hover:bg-white/5 transition-all ${className}`}
    >
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
      {lang === 'en' ? 'العربية' : 'English'}
    </button>
  );
}

// ============================================================
// Navbar
// ============================================================
function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', labelKey: 'nav.about' },
    { href: '#services', labelKey: 'nav.services' },
    { href: '#projects', labelKey: 'nav.projects' },
    { href: '#values', labelKey: 'nav.values' },
    { href: '#certifications', labelKey: 'nav.certifications' },
    { href: '#contact', labelKey: 'nav.contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-atlas-950/95 backdrop-blur-lg shadow-2xl shadow-black/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
            <Image src="/images/logo-icon.png" alt="Atlas GES" width={40} height={40} className="object-contain" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ATLAS</span>
            <span className="text-xs text-atlas-400 ml-1 font-medium">GES</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-atlas-400 transition-colors relative group">
              {t(l.labelKey)}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-atlas-400 transition-all group-hover:w-full" />
            </a>
          ))}
          <LanguageSwitcher />
          <a href="#contact" className="rounded-full bg-atlas-600 px-5 py-2 text-sm font-semibold text-white hover:bg-atlas-500 transition-all hover:shadow-lg hover:shadow-atlas-500/20 hover:-translate-y-0.5">
            {t('nav.getInTouch')}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-gray-300">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-atlas-950/98 backdrop-blur-lg border-t border-white/5 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-atlas-400 py-2">{t(l.labelKey)}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ============================================================
// Service Card with Image
// ============================================================
function ServiceCard({ image, titleKey, itemKeys, delay, slug }: { image: string; titleKey: string; itemKeys: string[]; delay: number; slug: string }) {
  const { t } = useLanguage();
  return (
    <a href={`/services/${slug}`} className="reveal group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:bg-white/[0.05] hover:border-atlas-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-atlas-500/5 block cursor-pointer" style={{ transitionDelay: `${delay}ms` }}>
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={t(titleKey)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-atlas-950 via-atlas-950/40 to-transparent" />
        <h3 className="absolute bottom-4 left-6 right-6 text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t(titleKey)}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          {itemKeys.map((key) => (
            <li key={key} className="flex items-start gap-2 text-sm text-gray-400">
              <svg className="h-4 w-4 mt-0.5 shrink-0 text-atlas-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t(key)}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-atlas-400 group-hover:gap-2 transition-all">
          {t('services.learnMore')}
          <svg className="h-4 w-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </div>
    </a>
  );
}

// ============================================================
// Project Card with Image
// ============================================================
function ProjectCard({ nameKey, idx, image, slug }: { nameKey: string; idx: number; image?: string; slug: string }) {
  const { t } = useLanguage();
  const status = t('project.approved');
  return (
    <a href={`/projects/${slug}`} className="reveal flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-atlas-500/30 hover:bg-white/[0.04] transition-all duration-300 group block cursor-pointer" style={{ transitionDelay: `${idx * 80}ms` }}>
      {image ? (
        <div className="relative h-16 w-16 shrink-0 rounded-lg overflow-hidden">
          <img src={image} alt={t(nameKey)} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
      ) : (
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-atlas-600/10 text-sm font-bold text-atlas-400 group-hover:bg-atlas-600/20 transition-colors">
          {String(idx + 1).padStart(2, '0')}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-200 leading-snug group-hover:text-white transition-colors">{t(nameKey)}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400">
          {status}
        </span>
        <svg className="h-4 w-4 text-gray-600 group-hover:text-atlas-400 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </div>
    </a>
  );
}

// ============================================================
// Main Page
// ============================================================
export default function Home() {
  useReveal();
  const { t, lang } = useLanguage();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* ======== HERO ======== */}
      <section
        ref={heroRef}
        onMouseMove={onMouseMove}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img src="/images/hero-drilling-rig.jpeg" alt="" className="hero-kenburns w-full h-full object-cover" />
          <div className="absolute inset-0 bg-atlas-950/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-atlas-950/50 via-transparent to-atlas-950" />
        </div>

        {/* Animated gradient orbs */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-[0.07] blur-[120px] transition-transform duration-[2000ms]"
          style={{
            background: 'radial-gradient(circle, #36a7f6, transparent 70%)',
            transform: `translate(${mousePos.x * 60 - 30}px, ${mousePos.y * 60 - 30}px)`,
            top: '-20%', left: '-10%',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[100px] transition-transform duration-[2500ms]"
          style={{
            background: 'radial-gradient(circle, #006fc5, transparent 70%)',
            transform: `translate(${-mousePos.x * 40 + 20}px, ${-mousePos.y * 40 + 20}px)`,
            bottom: '-10%', right: '-5%',
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-atlas-500/30 bg-atlas-500/5 px-4 py-1.5 text-xs font-semibold text-atlas-400 uppercase tracking-widest mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-atlas-400 animate-pulse-slow" />
              {t('hero.badge')}
            </span>
          </div>
          <h1 className="animate-fade-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight" style={{ fontFamily: lang === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Space Grotesk', sans-serif" }}>
            <span className="block">{t('hero.title1')}</span>
            <span className="block text-gradient">{t('hero.title2')}</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed" style={{ animationDelay: '200ms' }}>
            {t('hero.subtitle')}
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4" style={{ animationDelay: '400ms' }}>
            <a href="#services" className="group relative inline-flex items-center gap-2 rounded-full bg-atlas-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-atlas-600/25 transition-all hover:bg-atlas-500 hover:shadow-xl hover:shadow-atlas-500/30 hover:-translate-y-0.5">
              {t('hero.ourServices')}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-gray-200 hover:border-white/30 hover:bg-white/5 transition-all hover:-translate-y-0.5">
              {t('hero.contactUs')}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ======== STATS BAR ======== */}
      <section className="relative border-y border-white/5 bg-atlas-950">
        <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter end={200} suffix="m" labelKey="stats.maxDrillDepth" />
          <Counter end={50} suffix="+" labelKey="stats.projectsCompleted" />
          <Counter end={15} suffix="+" labelKey="stats.yearsExperience" />
          <Counter end={2} suffix="" labelKey="stats.countries" />
        </div>
      </section>

      {/* ======== ABOUT ======== */}
      <section id="about" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-atlas-950 via-atlas-900/20 to-atlas-950" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="reveal-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-400">{t('about.tag')}</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight" style={{ fontFamily: lang === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Space Grotesk', sans-serif" }}>
                {t('about.title1')}<br />
                <span className="text-gradient">{t('about.title2')}</span>
              </h2>
              <p className="mt-6 text-gray-400 leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                {t('about.p2')}
              </p>
              <div className="mt-8 flex gap-4">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex-1">
                  <div className="text-2xl font-bold text-atlas-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>KSA</div>
                  <div className="text-xs text-gray-500 mt-1">{t('about.headquarters')}</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex-1">
                  <div className="text-2xl font-bold text-atlas-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>BHR</div>
                  <div className="text-xs text-gray-500 mt-1">{t('about.operations')}</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex-1">
                  <div className="text-2xl font-bold text-atlas-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ISO</div>
                  <div className="text-xs text-gray-500 mt-1">{t('about.certified')}</div>
                </div>
              </div>
            </div>
            <div className="reveal-right relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden border border-white/5">
                    <img src="/images/about-cpt-rig.jpeg" alt="CPT rig in field" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/5">
                    <img src="/images/about-excavator.jpeg" alt="Excavation work" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-3 pt-6">
                  <div className="rounded-2xl overflow-hidden border border-white/5">
                    <img src="/images/about-surveyor.jpeg" alt="Atlas surveyor at work" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/5">
                    <img src="/images/service-geological-map.jpeg" alt="Geological mapping" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rtl:-left-auto rtl:-right-4 rounded-xl bg-atlas-900 border border-atlas-500/20 px-5 py-3 shadow-xl animate-float">
                <div className="text-xs text-atlas-400 font-bold">ISO 9001</div>
                <div className="text-[10px] text-gray-500">{t('about.qualityCertified')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== SERVICES ======== */}
      <section id="services" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-400">{t('services.tag')}</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black" style={{ fontFamily: lang === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Space Grotesk', sans-serif" }}>
              {t('services.title1')} <span className="text-gradient">{t('services.title2')}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              delay={0}
              slug="geotechnical"
              image="/images/service-geotechnical.jpeg"
              titleKey="service.geotechnical"
              itemKeys={['service.geo.1', 'service.geo.2', 'service.geo.3', 'service.geo.4', 'service.geo.5', 'service.geo.6']}
            />
            <ServiceCard
              delay={100}
              slug="geophysical"
              image="/images/service-seismic-field.jpeg"
              titleKey="service.geophysical"
              itemKeys={['service.gph.1', 'service.gph.2', 'service.gph.3', 'service.gph.4', 'service.gph.5', 'service.gph.6']}
            />
            <ServiceCard
              delay={200}
              slug="surveys"
              image="/images/service-bathymetric.jpeg"
              titleKey="service.surveys"
              itemKeys={['service.srv.1', 'service.srv.2', 'service.srv.3', 'service.srv.4', 'service.srv.5', 'service.srv.6']}
            />
            <ServiceCard
              delay={300}
              slug="environmental"
              image="/images/service-marine-mapping.jpeg"
              titleKey="service.environmental"
              itemKeys={['service.env.1', 'service.env.2', 'service.env.3', 'service.env.4', 'service.env.5', 'service.env.6']}
            />
            <ServiceCard
              delay={400}
              slug="geological-mapping"
              image="/images/service-geological-terrain.jpeg"
              titleKey="service.geologicalMapping"
              itemKeys={['service.gmap.1', 'service.gmap.2', 'service.gmap.3', 'service.gmap.4', 'service.gmap.5', 'service.gmap.6']}
            />
            <ServiceCard
              delay={500}
              slug="health-safety"
              image="/images/about-cpt-rig.jpeg"
              titleKey="service.healthSafety"
              itemKeys={['service.hs.1', 'service.hs.2', 'service.hs.3', 'service.hs.4', 'service.hs.5', 'service.hs.6']}
            />
          </div>
        </div>
      </section>

      {/* ======== PROJECTS ======== */}
      <section id="projects" className="py-28 bg-gradient-to-b from-atlas-950 via-atlas-900/10 to-atlas-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-400">{t('projects.tag')}</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black" style={{ fontFamily: lang === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Space Grotesk', sans-serif" }}>
              {t('projects.title1')} <span className="text-gradient">{t('projects.title2')}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {[
              { nameKey: 'project.acis-dammam', image: '/images/project-1.jpeg', slug: 'acis-dammam' },
              { nameKey: 'project.neom-bay-security', image: '/images/project-2.jpeg', slug: 'neom-bay-security' },
              { nameKey: 'project.acis-riyadh', image: '/images/project-3.jpeg', slug: 'acis-riyadh' },
              { nameKey: 'project.new-airport-al-jouf', image: '/images/project-4.jpeg', slug: 'new-airport-al-jouf' },
              { nameKey: 'project.naqel-facility-dammam', slug: 'naqel-facility-dammam' },
              { nameKey: 'project.neom-bay-geotechnical', slug: 'neom-bay-geotechnical' },
            ].map((p, i) => (
              <ProjectCard key={i} nameKey={p.nameKey} idx={i} image={p.image} slug={p.slug} />
            ))}
          </div>

          {/* Client logos */}
          <div className="reveal mt-20 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-10">{t('projects.trustedBy')}</p>
            <div className="stagger grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
              {[
                { src: '/images/partner-aramco.png', alt: 'Saudi Aramco' },
                { src: '/images/partner-redsea.png', alt: 'Red Sea Global' },
                { src: '/images/partner-worley.png', alt: 'Worley' },
                { src: '/images/partner-maaden.png', alt: "Ma'aden" },
                { src: '/images/partner-khatib-alami.png', alt: 'Khatib & Alami' },
                { src: '/images/partner-marafiq.png', alt: 'Marafiq' },
                { src: '/images/partner-rcjy.png', alt: 'Royal Commission Jubail & Yanbu' },
                { src: '/images/partner-sec.jpeg', alt: 'Saudi Electricity Company' },
                { src: '/images/partner-nwc.jpeg', alt: 'National Water Company' },
                { src: '/images/partner-swcc.jpeg', alt: 'Saline Water Conversion Corp' },
              ].map((logo) => (
                <div key={logo.alt} className="reveal-up flex items-center justify-center h-16 px-4 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                  <img src={logo.src} alt={logo.alt} className="max-h-14 max-w-[160px] object-contain brightness-200 contrast-50 hover:brightness-100 hover:contrast-100 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== VALUES ======== */}
      <section id="values" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-400">{t('values.tag')}</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black" style={{ fontFamily: lang === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Space Grotesk', sans-serif" }}>
              {t('values.title1')} <span className="text-gradient">{t('values.title2')}</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger">
            {[
              { titleKey: 'value.safety', descKey: 'value.safety.desc', icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg> },
              { titleKey: 'value.quality', descKey: 'value.quality.desc', icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg> },
              { titleKey: 'value.integrity', descKey: 'value.integrity.desc', icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.15M10.05 4.575a1.575 1.575 0 013.15 0v3.15M10.05 4.575v3.15M3.75 12h16.5M2.25 12l.894 7.608c.09.756.725 1.323 1.486 1.341h14.74a1.497 1.497 0 001.486-1.341L21.75 12M10.05 7.725V12m3.9-4.275V12" /></svg> },
              { titleKey: 'value.creativity', descKey: 'value.creativity.desc', icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg> },
              { titleKey: 'value.teamwork', descKey: 'value.teamwork.desc', icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg> },
              { titleKey: 'value.passion', descKey: 'value.passion.desc', icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" /></svg> },
            ].map((v) => (
              <div key={v.titleKey} className="reveal-pop group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.05] hover:border-atlas-500/20 transition-all duration-500">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-atlas-600/10 text-atlas-400 group-hover:bg-atlas-600/20 group-hover:scale-110 transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold" style={{ fontFamily: lang === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Space Grotesk', sans-serif" }}>{t(v.titleKey)}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{t(v.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CERTIFICATIONS ======== */}
      <section id="certifications" className="py-28 bg-gradient-to-b from-atlas-950 via-atlas-900/10 to-atlas-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-400">{t('certs.tag')}</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black" style={{ fontFamily: lang === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Space Grotesk', sans-serif" }}>
              {t('certs.title1')} <span className="text-gradient">{t('certs.title2')}</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3 stagger">
            {[
              { titleKey: 'cert.iso.title', descKey: 'cert.iso.desc', image: '/images/cert-iso.png' },
              { titleKey: 'cert.cr.title', descKey: 'cert.cr.desc', image: '/images/cert-1.jpeg' },
              { titleKey: 'cert.sce.title', descKey: 'cert.sce.desc', image: '/images/cert-2.jpeg' },
            ].map((cert) => (
              <div key={cert.titleKey} className="reveal-scale rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-atlas-500/20 hover:bg-white/[0.04] transition-all duration-500 group">
                <div className="relative h-48 overflow-hidden bg-white/5 flex items-center justify-center p-4">
                  <img src={cert.image} alt={t(cert.titleKey)} className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-atlas-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t(cert.titleKey)}</h3>
                  <p className="mt-2 text-sm text-gray-400">{t(cert.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CONTACT ======== */}
      <section id="contact" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal rounded-3xl border border-white/5 bg-gradient-to-br from-atlas-900/40 to-atlas-950 p-10 md:p-16">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-400">{t('contact.tag')}</span>
                <h2 className="mt-4 text-4xl font-black" style={{ fontFamily: lang === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Space Grotesk', sans-serif" }}>
                  {t('contact.title1')} <span className="text-gradient">{t('contact.title2')}</span>
                </h2>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {t('contact.subtitle')}
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-atlas-600/10 text-atlas-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t('contact.address')}</p>
                      <p className="text-sm text-gray-400 mt-1 whitespace-pre-line">{t('contact.addressValue')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-atlas-600/10 text-atlas-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t('contact.phone')}</p>
                      <p className="text-sm text-gray-400 mt-1" dir="ltr">+966 50 949 7591</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-atlas-600/10 text-atlas-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t('contact.email')}</p>
                      <p className="text-sm text-gray-400 mt-1" dir="ltr">info@atlasges.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-atlas-600/10 text-atlas-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t('contact.hours')}</p>
                      <p className="text-sm text-gray-400 mt-1">{t('contact.hoursValue')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.name')}</label>
                    <input type="text" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-atlas-500 focus:outline-none focus:ring-1 focus:ring-atlas-500 transition-colors" placeholder={t('contact.namePlaceholder')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
                    <input type="email" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-atlas-500 focus:outline-none focus:ring-1 focus:ring-atlas-500 transition-colors" placeholder={t('contact.emailPlaceholder')} dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.projectDetails')}</label>
                    <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-atlas-500 focus:outline-none focus:ring-1 focus:ring-atlas-500 transition-colors resize-none" placeholder={t('contact.projectPlaceholder')} />
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-atlas-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-atlas-600/25 hover:bg-atlas-500 hover:shadow-xl hover:shadow-atlas-500/30 transition-all hover:-translate-y-0.5">
                    {t('contact.sendInquiry')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== FOOTER ======== */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                <Image src="/images/logo-icon.png" alt="Atlas GES" width={32} height={32} className="object-contain" />
              </div>
              <span className="font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ATLAS <span className="text-atlas-400">GES</span></span>
            </div>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <a href="https://www.atlasges.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-atlas-400 transition-colors">
              www.atlasges.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

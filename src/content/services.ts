import { DETAIL_CONTENT } from './pages.generated';
import type { DetailCard, DetailItem } from './types';

export interface ServiceMeta {
  slug: string;
  title: string;
  titleAr: string;
  heroImage: string;
}

// Mirrors the title/hero props passed by src/app/services/<slug>/page.tsx.
export const SERVICES: ServiceMeta[] = [
  { slug: 'surveys', title: 'Survey Services', titleAr: 'خدمات المساحة', heroImage: '/images/service-bathymetric.jpeg' },
  { slug: 'geotechnical', title: 'Geotechnical Services', titleAr: 'الخدمات الجيوتقنية', heroImage: '/images/service-geotechnical.jpeg' },
  { slug: 'geophysical', title: 'Geophysical Services', titleAr: 'الخدمات الجيوفيزيائية', heroImage: '/images/service-seismic-field.jpeg' },
  { slug: 'geological-mapping', title: 'Geological Mapping Services', titleAr: 'خدمات الخرائط الجيولوجية', heroImage: '/images/service-geological-terrain.jpeg' },
  { slug: 'environmental', title: 'Environmental Consultancy', titleAr: 'الاستشارات البيئية', heroImage: '/images/service-marine-mapping.jpeg' },
  { slug: 'health-safety', title: 'Health & Safety', titleAr: 'الصحة والسلامة', heroImage: '/images/about-cpt-rig.jpeg' },
];

export function getService(slug: string): ServiceMeta | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getCards(serviceSlug: string): DetailCard[] {
  return DETAIL_CONTENT[serviceSlug] ?? [];
}

export function getCard(serviceSlug: string, cardSlug: string): DetailCard | undefined {
  return getCards(serviceSlug).find((c) => c.card_slug === cardSlug);
}

export function allDetailParams(): { service: string; card: string }[] {
  return Object.keys(DETAIL_CONTENT).flatMap((service) => getCards(service).map((c) => ({ service, card: c.card_slug })));
}

export function photoSrc(serviceSlug: string, item: DetailItem): string | null {
  return item.photo_file ? `/images/details/${serviceSlug}/${item.photo_file}` : null;
}

export function photoCredit(item: DetailItem): string | null {
  if (item.attribution) return item.attribution;
  const parts = [item.photo_author, item.photo_licence].filter(Boolean);
  return parts.length ? `Photo: ${parts.join(' / ')}` : null;
}

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://atlasges.com').replace(/\/$/, '');

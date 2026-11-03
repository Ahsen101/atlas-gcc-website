import type { MetadataRoute } from 'next';
import { SERVICES, SITE_URL, allDetailParams } from '@/content/services';

export const dynamic = 'force-static';

const PROJECTS = ['acis-dammam', 'acis-riyadh', 'naqel-facility-dammam', 'neom-bay-geotechnical', 'neom-bay-security', 'new-airport-al-jouf'];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    ...SERVICES.map((s) => `/services/${s.slug}/`),
    ...allDetailParams().map((p) => `/services/${p.service}/${p.card}/`),
    ...PROJECTS.map((p) => `/projects/${p}/`),
    '/credits/',
  ];
  return paths.map((p) => ({ url: `${SITE_URL}${p}` }));
}

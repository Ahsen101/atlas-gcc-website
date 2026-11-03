import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/services';

export const dynamic = 'force-static';

// Crawling stays allowed even while hidden: Google must be able to fetch the
// pages to see their noindex. The sitemap is only advertised when the site is live.
const hidden = process.env.ATLAS_NOINDEX === '1';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(hidden ? {} : { sitemap: `${SITE_URL}/sitemap.xml` }),
  };
}

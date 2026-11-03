import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CapabilityDetail from '../../CapabilityDetail';
import { allDetailParams, getCard, getCards, getService, photoSrc, SITE_URL } from '@/content/services';

export const dynamicParams = false;

export function generateStaticParams() {
  return allDetailParams();
}

type Params = { params: { service: string; card: string } };

export function generateMetadata({ params }: Params): Metadata {
  const service = getService(params.service);
  const card = getCard(params.service, params.card);
  if (!service || !card) return {};
  const names = card.items.map((i) => i.name);
  const description = `${card.card_heading} (${service.title}, ATLAS GES): ${names.join(', ')}. What each technique is, how it is done and when it is used.`;
  const path = `/services/${service.slug}/${card.card_slug}/`;
  const lead = card.items.map((i) => photoSrc(service.slug, i)).find(Boolean);
  return {
    title: `${card.card_heading} | ${service.title} | ATLAS GES`,
    description: description.length > 300 ? description.slice(0, 297) + '...' : description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title: `${card.card_heading} | ATLAS GES`,
      description: `${service.title}: ${names.join(', ')}`,
      url: `${SITE_URL}${path}`,
      type: 'article',
      ...(lead ? { images: [{ url: `${SITE_URL}${lead}` }] } : {}),
    },
  };
}

export default function CapabilityDetailPage({ params }: Params) {
  const service = getService(params.service);
  const card = getCard(params.service, params.card);
  if (!service || !card) notFound();
  const siblings = getCards(service.slug)
    .filter((c) => c.card_slug !== card.card_slug)
    .map((c) => ({ slug: c.card_slug, heading: c.card_heading, headingAr: c.card_heading_ar }));
  return <CapabilityDetail service={service} card={card} siblings={siblings} />;
}

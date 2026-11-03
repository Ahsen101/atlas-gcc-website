import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { readCredits } from '@/content/attributions';
import { SERVICES, canonicalMeta } from '@/content/services';
import CreditsView from './CreditsView';

export const metadata: Metadata = {
  title: 'Photo credits | ATLAS GES',
  description: 'Authors, licences and sources of the photos used on the ATLAS GES service detail pages.',
  ...canonicalMeta('/credits/'),
};

export default function CreditsPage() {
  const credits = readCredits();
  if (!credits) notFound();
  const titles = Object.fromEntries(SERVICES.map((s) => [s.slug, { en: s.title, ar: s.titleAr }]));
  return <CreditsView credits={credits} titles={titles} />;
}

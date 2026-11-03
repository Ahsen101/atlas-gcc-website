import type { Metadata } from 'next';
import { canonicalMeta } from '@/content/services';
import HomeClient from './HomeClient';

export const metadata: Metadata = canonicalMeta('/');

export default function Page() {
  return <HomeClient />;
}

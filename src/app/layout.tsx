import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';

// ATLAS_NOINDEX=1 is set only for the Cloudflare Pages build while the Vercel copy is still
// live (NFR-5 parallel run), so the two copies do not compete in search. Unset = indexable.
const noindex = process.env.ATLAS_NOINDEX === '1';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://atlas-ges.pages.dev'),
  ...(noindex ? { robots: { index: false, follow: false } } : {}),
  title: 'Atlas GES (Global Expert Services) | Geotechnical, Geophysical & Environmental Services',
  description: 'Leading provider of integrated geotechnical, geophysical, topographical and environmental services across Saudi Arabia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Apply the saved theme before first paint (no flash). Dark is the default. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(){try{var t=localStorage.getItem('atlas-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}})();",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-atlas-950 text-white" style={{ fontFamily: "'Inter', 'Noto Sans Arabic', sans-serif" }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

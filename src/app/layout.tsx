import './globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Mono, Chewy } from 'next/font/google';
import { createClient, repositoryName } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const redHatMono = Red_Hat_Mono({
  subsets: ['latin-ext'],
  weight: '500',
  variable: '--font-red-hat-mono',
  display: 'swap',
});

export const chewy = Chewy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-chewy',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle('settings');

  return {
    title: settings.data.site_title || '',
    description: settings.data.site_description || '',
    openGraph: {
      images: [settings.data.og_image.url || ''],
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pl' className={`${redHatMono.variable} ${chewy.variable}`}>
      <body className='font-body min-h-screen flex flex-col items-center justify-between'>
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

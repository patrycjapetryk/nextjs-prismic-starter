import './globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Mono, Chewy } from 'next/font/google';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pl' className={`${redHatMono.variable} ${chewy.variable}`}>
      <body className='font-body'>{children}</body>
    </html>
  );
}

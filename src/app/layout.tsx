import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Syne, DM_Sans } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const BASE_URL = 'https://projectzed.io';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ProjectZed — Efficient Business, Less Burnout',
    template: '%s | ProjectZed',
  },
  description:
    'We build websites, AI automation, and e-commerce systems for SMBs globally — welding businesses, barbershops, pharmacies, clothing stores and more.',
  keywords: [
    'website for welding business',
    'AI automation for small business',
    'WhatsApp automation',
    'e-commerce for small business',
    'website design Africa',
    'digital infrastructure SMB',
    'website for barbershop',
    'pharmacy WhatsApp bot',
    'ProjectZed',
  ],
  authors: [{ name: 'ProjectZed', url: BASE_URL }],
  creator: 'ProjectZed',
  publisher: 'ProjectZed',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'es_ES'],
    url: BASE_URL,
    siteName: 'ProjectZed',
    title: 'ProjectZed — Efficient Business, Less Burnout',
    description:
      'We build websites, AI automation, and e-commerce systems for SMBs globally.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ProjectZed — Efficient Business, Less Burnout',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProjectZed — Efficient Business, Less Burnout',
    description:
      'We build websites, AI automation, and e-commerce systems for SMBs globally.',
    images: ['/og-image.png'],
    creator: '@projectzed',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en': `${BASE_URL}/en`,
      'fr': `${BASE_URL}/fr`,
      'es': `${BASE_URL}/es`,
    },
  },
  verification: {
    google: 'VpxQq6BooSxCIJQp0euCpLGIFQrGAPFfjJAjvJfnzRk',
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" dir="ltr" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

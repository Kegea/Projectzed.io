import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Websites that work, AI automation on WhatsApp, and e-commerce stores built properly. ProjectZed serves welding businesses, barbershops, pharmacies, clothing stores and more.',
  alternates: {
    canonical: 'https://projectzed.io/services',
  },
  openGraph: {
    title: 'Services — ProjectZed',
    description:
      'Web presence, AI automation and e-commerce for small businesses globally.',
    url: 'https://projectzed.io/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

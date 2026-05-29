import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Real projects, real results. See how ProjectZed has helped welding businesses, pharmacies, barbershops and clothing stores build their digital presence and automate their operations.',
  alternates: {
    canonical: 'https://projectzed.io/work',
  },
  openGraph: {
    title: 'Our Work — ProjectZed',
    description:
      'Real projects, real results. Welding businesses, pharmacies, barbershops, clothing stores.',
    url: 'https://projectzed.io/work',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

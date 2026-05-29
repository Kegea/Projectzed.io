import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Trust Us',
  description:
    'Real testimonials from real businesses. See what welding companies, pharmacies, barbershops and SMBs say about working with ProjectZed.',
  alternates: {
    canonical: 'https://projectzed.io/trust',
  },
  openGraph: {
    title: 'Why Trust ProjectZed',
    description:
      'Real testimonials from real businesses across Africa, the Middle East and beyond.',
    url: 'https://projectzed.io/trust',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function TrustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

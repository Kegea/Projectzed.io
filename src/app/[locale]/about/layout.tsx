import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'ProjectZed is a digital infrastructure agency based in Kampala, Uganda, serving small businesses globally. We build websites, AI automations and e-commerce systems for businesses that build things.',
  alternates: {
    canonical: 'https://projectzed.io/about',
  },
  openGraph: {
    title: 'About ProjectZed',
    description:
      'Based in Kampala, Uganda. Building digital infrastructure for SMBs across Africa, the Middle East, Europe and beyond.',
    url: 'https://projectzed.io/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://projectzed.io'}/sitemap.xml`,
    host: process.env.NEXT_PUBLIC_SITE_URL || 'https://projectzed.io',
  };
}

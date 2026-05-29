import { MetadataRoute } from 'next';
import { industries } from '@/lib/industries';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://projectzed.io';
const locales = ['en', 'fr', 'es', 'ar'];

const routes = [
  '',
  '/services',
  '/services/web-design',
  '/services/ecommerce',
  '/services/ai-automation',
  '/about',
  '/work',
  '/trust',
  '/contact',
  '/industries',
  '/privacy-policy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/services' ? 0.9 : 0.8,
      });
    }

    // Industry pages
    for (const industry of industries) {
      entries.push({
        url: `${BASE_URL}/${locale}/industries/${industry.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
      });
    }
  }

  return entries;
}

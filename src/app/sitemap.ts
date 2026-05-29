import { MetadataRoute } from 'next';

const BASE_URL = 'https://projectzed.io';
const locales = ['en', 'fr', 'es', 'ar'];

const routes = [
  '',
  '/services',
  '/services/web-design',
  '/services/ai-automation',
  '/services/ecommerce',
  '/about',
  '/work',
  '/trust',
  '/contact',
  '/industries',
  '/privacy-policy',
];

const industrySlugs = [
  'welding-businesses',
  'pharmacies',
  'barbershops',
  'clothing-stores',
  'construction',
  'real-estate',
  'florists',
  'car-wash',
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
    for (const slug of industrySlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
      });
    }
  }

  return entries;
}


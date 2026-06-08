import { MetadataRoute } from 'next';
import { industries } from '@/lib/industries';

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

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      const alternates = locales.reduce((acc, l) => {
        acc[l] = `${BASE_URL}/${l}${route}`;
        return acc;
      }, {} as Record<string, string>);

      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/services' ? 0.9 : 0.8,
        alternates: {
          languages: alternates
        }
      });
    }
    
    for (const industry of industries) {
      const slug = industry.slug;
      const alternates = locales.reduce((acc, l) => {
        acc[l] = `${BASE_URL}/${l}/industries/${slug}`;
        return acc;
      }, {} as Record<string, string>);

      entries.push({
        url: `${BASE_URL}/${locale}/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: {
          languages: alternates
        }
      });
    }
  }

  return entries;
}


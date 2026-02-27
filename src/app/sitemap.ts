import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SERVICE_SLUGS } from '@/lib/services-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://expertlar.uz';

  const coreRoutes = [
    '',
    '/about',
    '/services',
    '/equipment',
    '/careers',
    '/clients',
    '/projects',
    '/news',
    '/contact',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Generate core routes for all localized versions
  coreRoutes.forEach((route) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  // 2. Generate dynamic service routes
  SERVICE_SLUGS.forEach((slug) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    });
  });

  return sitemapEntries;
}

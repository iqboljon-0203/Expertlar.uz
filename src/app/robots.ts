import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/'], // Exclude any inner routes
    },
    sitemap: 'https://expertlar.uz/sitemap.xml',
  };
}

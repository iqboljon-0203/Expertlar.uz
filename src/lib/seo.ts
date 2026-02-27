import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ServiceSlug, SERVICE_META } from './services-data';

interface AppSEOProps {
  locale: string;
  slug: ServiceSlug;
}

/**
 * Utility function to generate high-performing SEO Meta Titles & Descriptions
 * for individual service pages, targeting core keywords like 
 * "Non-destructive testing Uzbekistan", "Calibration", etc.
 */
export async function generateServiceMetadata({ locale, slug }: AppSEOProps): Promise<Metadata> {
  // Fetch the localized strings for the specific service
  const t = await getTranslations({ locale, namespace: `servicePages.${slug}` });
  
  // Base keyword strategies tailored by locale
  const keywordsByLocale: Record<string, string[]> = {
    en: ['Non-destructive testing Uzbekistan', 'Industrial Safety', 'NDT Laboratory Tashkent'],
    ru: ['Неразрушающий контроль Узбекистан', 'Промышленная безопасность', 'НК лаборатория Ташкент'],
    uz: ['Buzilmaydigan nazorat O\'zbekiston', 'Sanoat xavfsizligi', 'NDT laboratoriya Toshkent']
  };

  const baseKeywords = keywordsByLocale[locale] || keywordsByLocale.en;
  
  // Extracted data for precision
  const title = t('title');
  const description = t('subtitle');
  
  // Enhancing the title with a strong, location-based suffix
  const formattedTitle = `${title} | Expertlar Professional Services`;

  return {
    title: formattedTitle,
    description: description.length > 155 ? `${description.slice(0, 150)}...` : description,
    keywords: [...baseKeywords, title],
    openGraph: {
      title: formattedTitle,
      description: description,
      locale: locale,
      type: 'website',
      siteName: 'Expertlar',
      url: `https://expertlar.uz/${locale}/services/${slug}`,
      images: [
        {
          url: 'https://expertlar.uz/og-image-services.jpg', 
          width: 1200,
          height: 630,
          alt: `${title} - Expertlar Industrial Services`,
        }
      ]
    },
    alternates: {
      canonical: `https://expertlar.uz/${locale}/services/${slug}`,
      languages: {
        'en': `https://expertlar.uz/en/services/${slug}`,
        'ru': `https://expertlar.uz/ru/services/${slug}`,
        'uz': `https://expertlar.uz/uz/services/${slug}`,
      }
    }
  };
}

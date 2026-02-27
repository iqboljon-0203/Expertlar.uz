import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ServiceDetailPage } from '@/components/sections/service-detail-page';
import { SERVICE_SLUGS, type ServiceSlug } from '@/lib/services-data';

import { generateServiceMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!SERVICE_SLUGS.includes(slug as ServiceSlug)) {
    return { title: 'Not Found' };
  }
  return generateServiceMetadata({ locale, slug: slug as ServiceSlug });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!SERVICE_SLUGS.includes(slug as ServiceSlug)) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        <ServiceDetailPage slug={slug as ServiceSlug} />
      </main>
      <Footer />
    </div>
  );
}

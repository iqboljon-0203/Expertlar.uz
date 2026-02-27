'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SERVICE_META, SERVICE_SLUGS, type ServiceSlug } from '@/lib/services-data';

const serviceIcons: Record<ServiceSlug, React.ReactNode> = {
  'ndt-laboratory': (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  calibration: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/>
      <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/>
      <path d="M4 18v3"/><path d="M8 14v7"/>
    </svg>
  ),
  'inline-diagnostics': (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>
    </svg>
  ),
  'anti-corrosion': (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  fireproofing: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </svg>
  ),
  insulation: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
    </svg>
  ),
};

function ServiceTitle({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations(`servicePages.${slug}`);
  return <>{t('title')}</>;
}

function ServiceSubtitle({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations(`servicePages.${slug}`);
  return <>{t('subtitle')}</>;
}

export function ServicesSection() {
  const t = useTranslations('services');
  const ui = useTranslations('servicePages');

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-expert-dark via-expert-dark to-expert-dark-light py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div style={{ backgroundImage: 'linear-gradient(rgba(227,30,36,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(227,30,36,0.4) 1px,transparent 1px)', backgroundSize: '40px 40px' }} className="h-full w-full" />
        </div>
        <div className="absolute top-10 left-[15%] h-40 w-40 rounded-full bg-primary/30 blur-[80px]" />
        <div className="absolute bottom-10 right-[15%] h-48 w-48 rounded-full bg-primary/20 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">{t('subtitle')}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_SLUGS.map((slug) => {
              const meta = SERVICE_META[slug];
              return (
                <Link key={slug} href={`/services/${slug}`} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30">
                  {/* Gradient top */}
                  <div className={`h-2 bg-gradient-to-r ${meta.gradient}`} />

                  <div className="p-8">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                      {serviceIcons[slug]}
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-foreground">
                      <ServiceTitle slug={slug} />
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      <ServiceSubtitle slug={slug} />
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                      {t('learnMore')}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{ui('requestQuote')}</h2>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-white px-10 text-base font-semibold text-primary shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              {ui('requestQuote')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const services = [
  {
    titleKey: 'ndt' as const,
    descKey: 'ndtDesc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    titleKey: 'safety' as const,
    descKey: 'safetyDesc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
      </svg>
    ),
  },
  {
    titleKey: 'inspection' as const,
    descKey: 'inspectionDesc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>
        <path d="M14 2v6h6"/>
        <path d="M16 13H8"/>
        <path d="M16 17H8"/>
        <path d="M10 9H8"/>
      </svg>
    ),
  },
];

export function HomeSections() {
  const t = useTranslations('services');
  const about = useTranslations('about');
  const contact = useTranslations('contact');

  return (
    <>
      {/* Services Preview */}
      <section className="py-16 sm:py-24 bg-secondary/30" id="home-services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t('title')}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t('subtitle')}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">{t(service.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(service.descKey)}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-primary px-8 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              {t('learnMore')}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 sm:py-24" id="home-about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{about('title')}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{about('companyIntro')}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{about('missionText')}</p>

              <Link
                href="/about"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
              >
                {about('title')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Why Choose Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: about('why1Title'), icon: '🔧' },
                { title: about('why2Title'), icon: '🎯' },
                { title: about('why3Title'), icon: '🛡️' },
                { title: about('why4Title'), icon: '🤝' },
              ].map((val, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-1"
                >
                  <span className="mb-3 inline-block text-3xl transition-transform duration-300 group-hover:scale-125">
                    {val.icon}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{val.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-expert-dark py-16 sm:py-24" id="home-cta">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-[10%] h-64 w-64 rounded-full bg-primary blur-[100px]" />
          <div className="absolute bottom-10 right-[10%] h-64 w-64 rounded-full bg-primary blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {contact('title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            {contact('subtitle')}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-10 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              {contact('send')}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
              </svg>
            </Link>
            <a
              href={`tel:${contact('phoneValue').replace(/\s/g, '')}`}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-10 text-base font-semibold text-white transition-all duration-300 hover:border-white/60 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {contact('phoneValue')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

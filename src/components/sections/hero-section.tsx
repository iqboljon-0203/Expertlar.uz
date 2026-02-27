'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function HeroSection() {
  const t = useTranslations('hero');
  const stats = useTranslations('stats');

  return (
    <section className="relative overflow-hidden bg-background pt-16 lg:pt-20" id="hero-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(227, 30, 36, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(227, 30, 36, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Geometric Elements */}
        <div className="absolute top-20 right-[10%] h-72 w-72 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-[5%] h-96 w-96 rounded-full bg-primary/3 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-20 text-center lg:min-h-[calc(100vh-6rem)]">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            ISO 9001:2015 Certified
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
              {t('title')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 sm:h-14 sm:px-10 sm:text-base"
              id="hero-cta-primary"
            >
              {t('cta')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-border bg-background px-8 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5 sm:h-14 sm:px-10 sm:text-base"
              id="hero-cta-secondary"
            >
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-16">
            {[
              { value: '15+', labelKey: 'experience' as const },
              { value: '500+', labelKey: 'projects' as const },
              { value: '50+', labelKey: 'experts' as const },
              { value: '100%', labelKey: 'safety' as const },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary lg:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stats(stat.labelKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

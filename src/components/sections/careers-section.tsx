'use client';

import { useTranslations } from 'next-intl';

const benefits = [
  {
    titleKey: 'benefit1' as const,
    descKey: 'benefit1Desc' as const,
    icon: '🎓',
  },
  {
    titleKey: 'benefit2' as const,
    descKey: 'benefit2Desc' as const,
    icon: '💰',
  },
  {
    titleKey: 'benefit3' as const,
    descKey: 'benefit3Desc' as const,
    icon: '🔬',
  },
  {
    titleKey: 'benefit4' as const,
    descKey: 'benefit4Desc' as const,
    icon: '🤝',
  },
];

const positions = [
  {
    titleKey: 'position1' as const,
    deptKey: 'position1Dept' as const,
    color: 'bg-blue-500',
  },
  {
    titleKey: 'position2' as const,
    deptKey: 'position2Dept' as const,
    color: 'bg-orange-500',
  },
  {
    titleKey: 'position3' as const,
    deptKey: 'position3Dept' as const,
    color: 'bg-green-500',
  },
  {
    titleKey: 'position4' as const,
    deptKey: 'position4Dept' as const,
    color: 'bg-purple-500',
  },
];

export function CareersSection() {
  const t = useTranslations('careers');

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-expert-dark via-expert-dark to-expert-dark-light py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div style={{ backgroundImage: `linear-gradient(rgba(227, 30, 36, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(227, 30, 36, 0.4) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} className="h-full w-full" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">{t('subtitle')}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">{t('whyJoin')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div key={i} className="group rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary/20">
                <span className="mb-4 inline-block text-4xl transition-transform duration-300 group-hover:scale-125">{b.icon}</span>
                <h3 className="mb-2 text-lg font-bold text-foreground">{t(b.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(b.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-secondary/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">{t('openPositions')}</h2>
          <div className="space-y-4">
            {positions.map((pos, i) => (
              <div key={i} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <div className="flex items-center gap-4">
                  <div className={`h-3 w-3 rounded-full ${pos.color}`} />
                  <div>
                    <h3 className="font-bold text-foreground">{t(pos.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(pos.deptKey)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {t('fullTime')}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                    {t('location')}
                  </span>
                  <button className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25">
                    {t('apply')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

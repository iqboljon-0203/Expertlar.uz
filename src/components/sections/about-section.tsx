'use client';

import { useTranslations } from 'next-intl';

const serviceIcons = [
  // NDT Lab
  <svg key="s1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
  // Calibration
  <svg key="s2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg>,
  // Anti-corrosion
  <svg key="s3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>,
  // Fireproofing
  <svg key="s4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
  // Insulation
  <svg key="s5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>,
  // Measuring instruments
  <svg key="s6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>,
];

const whyIcons = [
  // Comprehensive
  <svg key="w1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
  // Precision
  <svg key="w2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  // Long-lasting
  <svg key="w3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>,
  // Client-oriented
  <svg key="w4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
];

export function AboutSection() {
  const t = useTranslations('about');

  const services = [
    { key: 'service1', icon: serviceIcons[0] },
    { key: 'service2', icon: serviceIcons[1] },
    { key: 'service3', icon: serviceIcons[2] },
    { key: 'service4', icon: serviceIcons[3] },
    { key: 'service5', icon: serviceIcons[4] },
    { key: 'service6', icon: serviceIcons[5] },
  ] as const;

  const principles = [
    { key: 'principle1' },
    { key: 'principle2' },
    { key: 'principle3' },
    { key: 'principle4' },
  ] as const;

  const whyChoose = [
    { titleKey: 'why1Title', textKey: 'why1Text', icon: whyIcons[0] },
    { titleKey: 'why2Title', textKey: 'why2Text', icon: whyIcons[1] },
    { titleKey: 'why3Title', textKey: 'why3Text', icon: whyIcons[2] },
    { titleKey: 'why4Title', textKey: 'why4Text', icon: whyIcons[3] },
  ] as const;

  return (
    <div>
      {/* ===== Page Header ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-expert-dark via-expert-dark to-expert-dark-light py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(227, 30, 36, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(227, 30, 36, 0.4) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
            className="h-full w-full"
          />
        </div>
        {/* Floating blurs */}
        <div className="absolute top-10 left-[15%] h-40 w-40 rounded-full bg-primary/30 blur-[80px]" />
        <div className="absolute bottom-10 right-[15%] h-48 w-48 rounded-full bg-primary/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            EXPERTLAR
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* ===== Company Introduction ===== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Text Content */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                <div className="pl-6">
                  <p className="text-lg leading-relaxed text-foreground font-medium">
                    {t('companyIntro')}
                  </p>
                  <p className="mt-6 text-muted-foreground leading-relaxed">
                    {t('companyServicesTitle')}
                  </p>
                </div>
              </div>

              {/* Services List */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      {s.icon}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                      {t(s.key)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Stats Card */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                {/* Quick Stats */}
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary">15+</p>
                      <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">Лет опыта</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary">500+</p>
                      <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">Проектов</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary">50+</p>
                      <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">Специалистов</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary">100%</p>
                      <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">Качество</p>
                    </div>
                  </div>
                </div>

                {/* ISO Badge */}
                <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">ISO 9001:2015</p>
                      <p className="text-xs text-muted-foreground">Certified Quality</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">ISO 45001:2018</p>
                      <p className="text-xs text-muted-foreground">Safety Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Principles Section: Reliability. Precision. Responsibility. ===== */}
      <section className="relative overflow-hidden bg-expert-dark py-16 sm:py-24">
        {/* Background glows */}
        <div className="absolute top-0 left-[20%] h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-[20%] h-48 w-48 rounded-full bg-primary/15 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t('principlesTitle')}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-gray-300 leading-relaxed">
              {t('principlesIntro')}
            </p>
            <p className="mt-4 text-sm font-medium text-gray-400">
              {t('principlesSubtitle')}
            </p>
          </div>

          <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2">
            {principles.map((p, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/10"
              >
                {/* Checkmark */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-sm text-gray-200 font-medium">
                  {t(p.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Choose EXPERTLAR ===== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t('whyTitle')}</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
              >
                {/* Number indicator */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 leading-none transition-colors group-hover:text-primary/10">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(item.textKey)}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Mission ===== */}
      <section className="border-t border-border bg-secondary/30 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t('mission')}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {t('missionText')}
          </p>
          {/* Decorative line */}
          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-primary" />
        </div>
      </section>
    </div>
  );
}

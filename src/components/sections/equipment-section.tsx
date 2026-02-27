'use client';

import { useTranslations } from 'next-intl';

const DEVICE_ICONS = [
  // A1212 MASTER - UT flaw detector
  <svg key="d1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
  // A1550 IntroVisor - phased array
  <svg key="d2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21h6"/><path d="M12 17v4"/></svg>,
  // TP-1M - magnetic particle
  <svg key="d3" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v12"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M18 9v6a3 3 0 0 1-3 3H9"/></svg>,
  // VD-12NFM - eddy current
  <svg key="d4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>,
  // A1208 - thickness gauge
  <svg key="d5" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg>,
  // TUZ-5 - hardness tester
  <svg key="d6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m7.5 4.27 9 5.15"/><path d="M3.29 7 12 12l8.71-5"/><path d="M12 22V12"/></svg>,
];

const DEVICE_GRADIENTS = [
  'from-blue-600 to-cyan-600',
  'from-purple-600 to-indigo-600',
  'from-emerald-600 to-teal-600',
  'from-orange-600 to-red-600',
  'from-cyan-600 to-blue-600',
  'from-rose-600 to-pink-600',
];

const DEVICE_BADGE_COLORS = [
  'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
];

const DEVICE_TYPES = ['UT', 'PA', 'MT', 'ET', 'UTM', 'HT'];

export function EquipmentSection() {
  const t = useTranslations('equipment');

  const devices = Array.from({ length: 6 }, (_, i) => ({
    name: t(`device${i + 1}`),
    desc: t(`device${i + 1}Desc`),
    specs: [
      t(`device${i + 1}Spec1`),
      t(`device${i + 1}Spec2`),
      t(`device${i + 1}Spec3`),
    ],
    icon: DEVICE_ICONS[i],
    gradient: DEVICE_GRADIENTS[i],
    badge: DEVICE_BADGE_COLORS[i],
    type: DEVICE_TYPES[i],
  }));

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-expert-dark py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div style={{ backgroundImage: 'linear-gradient(rgba(227,30,36,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(227,30,36,0.4) 1px,transparent 1px)', backgroundSize: '40px 40px' }} className="h-full w-full" />
        </div>
        <div className="absolute top-10 left-[15%] h-40 w-40 rounded-full bg-primary/30 blur-[80px]" />
        <div className="absolute bottom-10 right-[15%] h-48 w-48 rounded-full bg-primary/20 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
            Kropus — Russia
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">{t('subtitle')}</p>
        </div>
      </section>

      {/* Manufacturer Badge */}
      <section className="border-b border-border bg-secondary/30 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="7" height="5" x="7" y="7" rx="1"/><rect width="7" height="5" x="10" y="12" rx="1"/></svg>
          </div>
          <span className="text-sm font-medium text-muted-foreground">{t('manufacturer')}</span>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {devices.map((device, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/20">
                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${device.gradient}`} />

                <div className="p-8">
                  {/* Type badge + Icon */}
                  <div className="mb-5 flex items-start justify-between">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                      {device.icon}
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${device.badge}`}>
                      {device.type}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="mb-2 text-xl font-bold text-foreground">{device.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{device.desc}</p>

                  {/* Specs */}
                  <div className="mt-5 space-y-2 border-t border-border pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{t('specifications')}</p>
                    {device.specs.map((spec, j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary"><path d="M20 6 9 17l-5-5"/></svg>
                        <span className="text-xs text-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Download PDF button */}
                  <button className="mt-6 inline-flex w-full h-11 items-center justify-center gap-2 rounded-lg border-2 border-primary/30 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    {t('downloadPdf')}
                  </button>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{t('requestInfo')}</h2>
          <p className="mx-auto mt-2 max-w-lg text-white/70">{t('subtitle')}</p>
          <div className="mt-6">
            <a href="/contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-white px-10 text-base font-semibold text-primary shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              {t('requestInfo')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

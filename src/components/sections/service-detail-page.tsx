'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SERVICE_META, SERVICE_SLUGS, type ServiceSlug } from '@/lib/services-data';

/* ── icon helpers ── */
function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary"><path d="M20 6 9 17l-5-5"/></svg>
  );
}
function DocIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-emerald-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
  );
}
function StandardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-blue-500"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
  );
}
function AppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-orange-500"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>
  );
}
function ArrowLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
  );
}

/* ── service-specific config ── */
interface MethodConfig {
  titleKey: string;
  descKey: string;
  featureKeys?: string[];
}
interface ServiceConfig {
  methods: MethodConfig[];
  resultCount: number;
  standardCount: number;
  appCount: number;
  hasCalibrationLayout?: boolean;
}

const SERVICE_CONFIGS: Record<ServiceSlug, ServiceConfig> = {
  'ndt-laboratory': {
    methods: [
      { titleKey: 'method1Title', descKey: 'method1Desc', featureKeys: ['method1Feature1', 'method1Feature2', 'method1Feature3'] },
      { titleKey: 'method2Title', descKey: 'method2Desc', featureKeys: ['method2Feature1', 'method2Feature2', 'method2Feature3'] },
      { titleKey: 'method3Title', descKey: 'method3Desc', featureKeys: ['method3Feature1', 'method3Feature2', 'method3Feature3'] },
      { titleKey: 'method4Title', descKey: 'method4Desc', featureKeys: ['method4Feature1', 'method4Feature2', 'method4Feature3'] },
    ],
    resultCount: 4,
    standardCount: 4,
    appCount: 6,
  },
  calibration: {
    methods: [],
    resultCount: 5,
    standardCount: 4,
    appCount: 5,
    hasCalibrationLayout: true,
  },
  'inline-diagnostics': {
    methods: [
      { titleKey: 'method1Title', descKey: 'method1Desc' },
      { titleKey: 'method2Title', descKey: 'method2Desc' },
      { titleKey: 'method3Title', descKey: 'method3Desc' },
    ],
    resultCount: 4,
    standardCount: 2,
    appCount: 4,
  },
  'anti-corrosion': {
    methods: [
      { titleKey: 'method1Title', descKey: 'method1Desc' },
      { titleKey: 'method2Title', descKey: 'method2Desc' },
      { titleKey: 'method3Title', descKey: 'method3Desc' },
    ],
    resultCount: 4,
    standardCount: 3,
    appCount: 5,
  },
  fireproofing: {
    methods: [
      { titleKey: 'method1Title', descKey: 'method1Desc' },
      { titleKey: 'method2Title', descKey: 'method2Desc' },
    ],
    resultCount: 4,
    standardCount: 3,
    appCount: 4,
  },
  insulation: {
    methods: [
      { titleKey: 'method1Title', descKey: 'method1Desc' },
      { titleKey: 'method2Title', descKey: 'method2Desc' },
    ],
    resultCount: 4,
    standardCount: 2,
    appCount: 4,
  },
};

const METHOD_COLORS = [
  'border-blue-500/30 bg-blue-500/5',
  'border-purple-500/30 bg-purple-500/5',
  'border-emerald-500/30 bg-emerald-500/5',
  'border-orange-500/30 bg-orange-500/5',
];
const METHOD_ICON_BG = [
  'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'bg-orange-500/10 text-orange-600 dark:text-orange-400',
];

/* ── component ── */
export function ServiceDetailPage({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations(`servicePages.${slug}`);
  const ui = useTranslations('servicePages');
  const meta = SERVICE_META[slug];
  const config = SERVICE_CONFIGS[slug];

  const relatedSlugs = SERVICE_SLUGS.filter((s) => s !== slug).slice(0, 3);

  return (
    <div>
      {/* ══════ HERO ══════ */}
      <section className="relative overflow-hidden bg-expert-dark py-20 sm:py-28">
        {/* Grid BG */}
        <div className="absolute inset-0 opacity-10">
          <div style={{ backgroundImage: 'linear-gradient(rgba(227,30,36,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(227,30,36,0.4) 1px,transparent 1px)', backgroundSize: '40px 40px' }} className="h-full w-full" />
        </div>
        <div className="absolute top-10 left-[10%] h-48 w-48 rounded-full bg-primary/25 blur-[100px]" />
        <div className="absolute bottom-10 right-[10%] h-56 w-56 rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary">
            <ArrowLeft />
            {ui('backToServices')}
          </Link>

          <div className="max-w-3xl">
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary`}>
              EXPERTLAR
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">{t('title')}</h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-300 leading-relaxed">{t('subtitle')}</p>
          </div>
        </div>
      </section>

      {/* ══════ INTRO ══════ */}
      <section className="py-12 sm:py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">{t('intro')}</p>
          </div>
        </div>
      </section>

      {/* ══════ CALIBRATION SPECIAL LAYOUT ══════ */}
      {config.hasCalibrationLayout && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">{ui('methods')}</h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Geometric Method */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-emerald-500/30 bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:border-emerald-500/50">
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />
                <div className="p-8">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3H3v7h18V3z"/><path d="M21 14h-5v7h5v-7z"/><path d="M12 14H3v7h9v-7z"/></svg>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground">{t('geometricTitle')}</h3>
                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed">{t('geometricDesc')}</p>
                  <div className="space-y-3">
                    {(['geometricFeature1', 'geometricFeature2', 'geometricFeature3', 'geometricFeature4', 'geometricFeature5'] as const).map((k) => (
                      <div key={k} className="flex items-center gap-3">
                        <CheckIcon />
                        <span className="text-sm text-foreground">{t(k)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Volumetric Method */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-blue-500/30 bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:border-blue-500/50">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
                <div className="p-8">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground">{t('volumetricTitle')}</h3>
                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed">{t('volumetricDesc')}</p>
                  <div className="space-y-3">
                    {(['volumetricFeature1', 'volumetricFeature2', 'volumetricFeature3', 'volumetricFeature4', 'volumetricFeature5'] as const).map((k) => (
                      <div key={k} className="flex items-center gap-3">
                        <CheckIcon />
                        <span className="text-sm text-foreground">{t(k)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════ METHODS (non-calibration) ══════ */}
      {!config.hasCalibrationLayout && config.methods.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">{ui('methods')}</h2>
            <div className={`grid gap-6 ${config.methods.length <= 2 ? 'md:grid-cols-2' : config.methods.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
              {config.methods.map((method, i) => (
                <div key={i} className={`group relative overflow-hidden rounded-2xl border ${METHOD_COLORS[i % 4]} p-8 transition-all duration-500 hover:shadow-lg`}>
                  {/* Number */}
                  <div className="absolute top-4 right-4 text-5xl font-bold text-primary/5 leading-none">{String(i + 1).padStart(2, '0')}</div>
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${METHOD_ICON_BG[i % 4]} transition-transform duration-300 group-hover:scale-110`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{t(method.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(method.descKey)}</p>
                  {method.featureKeys && method.featureKeys.length > 0 && (
                    <div className="mt-5 space-y-2.5 border-t border-border/50 pt-5">
                      {method.featureKeys.map((fk) => (
                        <div key={fk} className="flex items-center gap-2.5">
                          <CheckIcon />
                          <span className="text-xs text-foreground font-medium">{t(fk)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════ RESULTS / STANDARDS / APPLICATIONS ══════ */}
      <section className="bg-expert-dark py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Results */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white">{ui('deliverables')}</h3>
              </div>
              <div className="space-y-3">
                {Array.from({ length: config.resultCount }, (_, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <DocIcon />
                    <span className="text-sm text-gray-300">{t(`result${i + 1}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white">{ui('standards')}</h3>
              </div>
              <div className="space-y-3">
                {Array.from({ length: config.standardCount }, (_, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <StandardIcon />
                    <span className="text-sm text-gray-300">{t(`standard${i + 1}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white">{ui('applications')}</h3>
              </div>
              <div className="space-y-3">
                {Array.from({ length: config.appCount }, (_, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AppIcon />
                    <span className="text-sm text-gray-300">{t(`app${i + 1}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{ui('requestQuote')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t('subtitle')}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-10 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              {ui('requestQuote')}
            </Link>
            <a href="tel:+998901234567" className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-border px-10 text-base font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +998 90 123 45 67
            </a>
          </div>
        </div>
      </section>

      {/* ══════ RELATED SERVICES ══════ */}
      <section className="border-t border-border bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">{ui('relatedServices')}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedSlugs.map((rs) => {
              const rmeta = SERVICE_META[rs];
              return (
                <Link key={rs} href={`/services/${rs}`} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20">
                  <div className={`mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r ${rmeta.gradient}`} />
                  <RelatedTitle slug={rs} />
                  <div className="mt-2 flex items-center gap-1 text-sm text-primary font-medium opacity-0 transition-opacity group-hover:opacity-100">
                    {ui('backToServices')} →
                  </div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/* Helper component for related service title */
function RelatedTitle({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations(`servicePages.${slug}`);
  return <h3 className="text-base font-bold text-foreground">{t('title')}</h3>;
}

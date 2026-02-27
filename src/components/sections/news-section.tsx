'use client';

import { useTranslations } from 'next-intl';

const newsItems = [
  {
    titleKey: 'news1Title' as const,
    descKey: 'news1Desc' as const,
    dateKey: 'news1Date' as const,
    color: 'from-green-500 to-emerald-600',
    icon: '🏆',
  },
  {
    titleKey: 'news2Title' as const,
    descKey: 'news2Desc' as const,
    dateKey: 'news2Date' as const,
    color: 'from-blue-500 to-indigo-600',
    icon: '🌍',
  },
  {
    titleKey: 'news3Title' as const,
    descKey: 'news3Desc' as const,
    dateKey: 'news3Date' as const,
    color: 'from-purple-500 to-violet-600',
    icon: '📚',
  },
];

export function NewsSection() {
  const t = useTranslations('news');

  return (
    <div>
      {/* Page Header */}
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
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* News Cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {newsItems.map((item, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Image Header */}
                <div className={`relative h-52 bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}>
                  <span className="text-6xl opacity-40 transition-all duration-500 group-hover:scale-110 group-hover:opacity-60">
                    {item.icon}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white">
                    <div className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 2v4"/>
                        <path d="M16 2v4"/>
                        <rect width="18" height="18" x="3" y="4" rx="2"/>
                        <path d="M3 10h18"/>
                      </svg>
                      {t(item.dateKey)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-foreground line-clamp-2 transition-colors group-hover:text-primary">
                    {t(item.titleKey)}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {t(item.descKey)}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                    <span>{t('readMore')}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

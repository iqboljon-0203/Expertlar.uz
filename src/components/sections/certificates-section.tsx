'use client';

import { useTranslations } from 'next-intl';

const certificates = [
  {
    nameKey: 'iso9001' as const,
    descKey: 'iso9001Desc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    badge: 'ISO',
    color: 'bg-blue-500',
  },
  {
    nameKey: 'iso14001' as const,
    descKey: 'iso14001Desc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="M12 8v4"/>
        <path d="M12 16h.01"/>
      </svg>
    ),
    badge: 'ISO',
    color: 'bg-green-500',
  },
  {
    nameKey: 'iso45001' as const,
    descKey: 'iso45001Desc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    badge: 'ISO',
    color: 'bg-orange-500',
  },
  {
    nameKey: 'ndtCert' as const,
    descKey: 'ndtCertDesc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    badge: 'ASNT',
    color: 'bg-purple-500',
  },
  {
    nameKey: 'stateLicense' as const,
    descKey: 'stateLicenseDesc' as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>
        <path d="M14 2v6h6"/>
        <path d="M9 15v-1"/>
        <path d="M12 15v-3"/>
        <path d="M15 15v-2"/>
      </svg>
    ),
    badge: 'GOV',
    color: 'bg-red-500',
  },
];

export function CertificatesSection() {
  const t = useTranslations('certificates');

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

      {/* Certificates */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30"
              >
                {/* Top Corner Badge */}
                <div className={`absolute top-4 right-4 ${cert.color} rounded-full px-3 py-1 text-xs font-bold text-white`}>
                  {cert.badge}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-105">
                  {cert.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {t(cert.nameKey)}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  {t(cert.descKey)}
                </p>

                {/* View Certificate Link */}
                <button className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white hover:border-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>
                    <path d="M14 2v6h6"/>
                  </svg>
                  {t('viewCertificate')}
                </button>

                {/* Decorative Border */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

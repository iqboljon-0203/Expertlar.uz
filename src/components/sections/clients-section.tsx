'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/* ── Client logo text components (styled as monochrome → color on hover) ── */
const CLIENT_LOGOS = [
  { key: 'client1', short: 'UNG', color: '#2563eb' },
  { key: 'client2', short: 'Airports', color: '#0891b2' },
  { key: 'client3', short: 'Maxam', color: '#dc2626' },
  { key: 'client4', short: 'TPP', color: '#ea580c' },
  { key: 'client5', short: 'Uzbeksteel', color: '#4f46e5' },
  { key: 'client6', short: 'AGMK', color: '#059669' },
  { key: 'client7', short: 'UNGQ', color: '#7c3aed' },
  { key: 'client8', short: 'Lukoil', color: '#e11d48' },
];

function LogoCard({ name, short, color }: { name: string; short: string; color: string }) {
  return (
    <div className="group flex h-24 w-56 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg">
      <div className="text-center transition-all duration-500">
        {/* Icon/Monogram */}
        <div
          className="mx-auto mb-1.5 flex h-10 w-10 items-center justify-center rounded-lg text-sm font-black transition-all duration-500 group-hover:scale-110"
          style={{
            backgroundColor: 'hsl(var(--muted))',
            color: 'hsl(var(--muted-foreground))',
          }}
        >
          <span className="transition-all duration-500 group-hover:opacity-0 absolute">{short.slice(0, 2)}</span>
          <span className="transition-all duration-500 opacity-0 group-hover:opacity-100" style={{ color }}>{short.slice(0, 2)}</span>
        </div>
        <p className="text-[11px] font-semibold text-muted-foreground transition-colors duration-500 group-hover:text-foreground truncate max-w-[180px]">{name}</p>
      </div>
    </div>
  );
}

export function ClientsSection() {
  const t = useTranslations('clients');

  const clients = CLIENT_LOGOS.map((c) => ({
    ...c,
    name: t(c.key),
  }));

  // Duplicate for infinite scroll
  const sliderItems = [...clients, ...clients, ...clients];

  const testimonials = [
    { text: t('testimonial1'), author: t('testimonial1Author'), company: t('testimonial1Company') },
    { text: t('testimonial2'), author: t('testimonial2Author'), company: t('testimonial2Company') },
    { text: t('testimonial3'), author: t('testimonial3Author'), company: t('testimonial3Company') },
  ];

  const stats = [
    { value: t('partnerCount'), icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { value: t('statsProjects'), icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg> },
    { value: t('statsIndustries'), icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg> },
    { value: t('statsExperience'), icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg> },
  ];

  const industries = [
    { key: 'oilGas', emoji: '🛢️' },
    { key: 'chemical', emoji: '⚗️' },
    { key: 'energy', emoji: '⚡' },
    { key: 'construction', emoji: '🏗️' },
    { key: 'metallurgy', emoji: '⛏️' },
    { key: 'aviation', emoji: '✈️' },
  ];

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
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">{t('subtitle')}</p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="border-b border-border bg-primary/5 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">{stat.icon}</div>
                <span className="text-sm font-bold text-foreground">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By — Infinite Logo Slider */}
      <section className="py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">{t('trustedBy')}</h2>
        </div>

        {/* Infinite slider */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {sliderItems.map((client, i) => (
              <LogoCard key={`${client.key}-${i}`} name={client.name} short={client.short} color={client.color} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">{t('industries')}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind) => (
              <div key={ind.key} className="group rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-1">
                <span className="mb-3 inline-block text-3xl transition-transform duration-300 group-hover:scale-125">{ind.emoji}</span>
                <p className="text-sm font-semibold text-foreground">{t(ind.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((test, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-5xl font-serif text-primary/10 leading-none">"</div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed italic">&ldquo;{test.text}&rdquo;</p>

                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{test.author}</p>
                      <p className="text-xs text-primary font-medium">{test.company}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

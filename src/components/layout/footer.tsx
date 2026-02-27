'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const mega = useTranslations('megaMenu');
  const common = useTranslations('common');

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/about', label: nav('about') },
    { href: '/services', label: nav('services') },
    { href: '/equipment', label: nav('equipment') },
    { href: '/careers', label: nav('careers') },
    { href: '/clients', label: nav('clients') },
    { href: '/contact', label: nav('contact') },
  ];

  const serviceLinks = [
    { href: '/services', label: mega('ndtLab') },
    { href: '/services', label: mega('inlineDiagnostics') },
    { href: '/services', label: mega('coatings') },
    { href: '/certificates', label: nav('certificates') },
    { href: '/projects', label: nav('projects') },
  ];

  return (
    <footer className="border-t border-border bg-card" id="main-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-[6px] group mb-6" id="footer-logo-link">
              {/* Logo Mark: 3 Bars & Arrow */}
              <div className="relative flex shrink-0 items-center justify-center text-[#E31E24]">
                <svg width="44" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105">
                <rect x="14" y="66" width="16" height="34" fill="currentColor" />
                <rect x="42" y="52" width="16" height="48" fill="currentColor" />
                <rect x="70" y="38" width="16" height="62" fill="currentColor" />
                {/* Thick Integrated Arrow */}
                <path d="M 12 40 L 16 54 L 70 27 L 78 38 L 96 4 L 54 5 L 60 16 Z" fill="currentColor" strokeLinejoin="miter" />
              </svg>
              </div>
              
              {/* Text Mark */}
              <div className="flex flex-col justify-center leading-none mt-1">
                <span className="text-[22px] font-black tracking-wide text-[#2B2B36] dark:text-white uppercase leading-none pb-1">EXPERTLAR</span>
                <span className="text-[11px] font-bold italic text-[#2B2B36] dark:text-gray-300 leading-none">Professional services</span>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{t('description')}</p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-white" aria-label="Telegram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-white" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-white" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-white" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{t('quickLinks')}</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{t('services')}</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{t('contactInfo')}</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-primary">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-sm text-muted-foreground">{t('address')}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+998901234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">+998 90 123 45 67</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href="mailto:info@expertlar.uz" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@expertlar.uz</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-xs text-muted-foreground">© {currentYear} Expertlar Professional Services. {common('allRightsReserved')}.</p>
            <p className="text-xs text-muted-foreground">Tashkent, Uzbekistan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

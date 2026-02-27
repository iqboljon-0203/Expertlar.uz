'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';

export function Header() {
  const t = useTranslations('nav');
  const mega = useTranslations('megaMenu');
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = React.useState(false);
  const megaMenuRef = React.useRef<HTMLDivElement>(null);
  const megaMenuTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const navLinks = [
    { href: '/about', label: t('about') },
    { href: '/equipment', label: t('equipment') },
    { href: '/careers', label: t('careers') },
    { href: '/clients', label: t('clients') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50'
          : 'bg-background/50 backdrop-blur-sm'
      }`}
      id="main-header"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" id="logo-link">
            <div className="flex items-end gap-[2px]">
              <div className="flex items-end gap-[2px] relative">
                <div className="w-[6px] h-[14px] bg-primary rounded-[1px] transition-transform group-hover:scale-y-110" />
                <div className="w-[6px] h-[20px] bg-primary rounded-[1px] transition-transform group-hover:scale-y-110" />
                <div className="w-[6px] h-[26px] bg-primary rounded-[1px] transition-transform group-hover:scale-y-110" />
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="absolute -top-2 -right-2">
                  <path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-foreground lg:text-xl">EXPERTLAR</span>
              <span className="text-[10px] font-medium tracking-widest text-muted-foreground italic lg:text-xs">Professional services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-0.5 xl:flex" id="desktop-nav">
            {/* About */}
            <Link href="/about" className="nav-link relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary group">
              {t('about')}
              <span className="absolute inset-x-3 -bottom-px h-[2px] scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
            </Link>

            {/* Services Mega Menu Trigger */}
            <div
              ref={megaMenuRef}
              className="relative"
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="nav-link relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary group"
                id="services-mega-trigger"
              >
                {t('services')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <span className={`absolute inset-x-3 -bottom-px h-[2px] bg-primary transition-transform ${isMegaMenuOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>

              {/* Mega Menu Panel */}
              <div
                className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-300 ${
                  isMegaMenuOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
                id="mega-menu-panel"
              >
                <div className="w-[780px] rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
                  {/* Mega Menu Header */}
                  <div className="border-b border-border bg-primary/5 px-6 py-4">
                    <h3 className="text-sm font-bold text-foreground">{mega('servicesTitle')}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{mega('servicesDesc')}</p>
                  </div>

                  <div className="grid grid-cols-3 divide-x divide-border">
                    {/* Column 1: NDT Laboratory */}
                    <div className="p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                          </svg>
                        </div>
                        <h4 className="text-sm font-bold text-foreground">{mega('ndtLab')}</h4>
                      </div>
                      <div className="space-y-1">
                        <Link href="/services" onClick={() => setIsMegaMenuOpen(false)} className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-accent">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/></svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{mega('ut')}</p>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{mega('utDesc')}</p>
                          </div>
                        </Link>
                        <Link href="/services" onClick={() => setIsMegaMenuOpen(false)} className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-accent">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{mega('magneticParticle')}</p>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{mega('magneticParticleDesc')}</p>
                          </div>
                        </Link>
                        <Link href="/services" onClick={() => setIsMegaMenuOpen(false)} className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-accent">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/></svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{mega('thicknessGauging')}</p>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{mega('thicknessGaugingDesc')}</p>
                          </div>
                        </Link>
                        <Link href="/services" onClick={() => setIsMegaMenuOpen(false)} className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-accent">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20"/></svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{mega('eddyCurrent')}</p>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{mega('eddyCurrentDesc')}</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Column 2: In-line Diagnostics */}
                    <div className="p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 16v5"/>
                            <path d="M16 14v7"/>
                            <path d="M20 10v11"/>
                            <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/>
                            <path d="M4 18v3"/>
                            <path d="M8 14v7"/>
                          </svg>
                        </div>
                        <h4 className="text-sm font-bold text-foreground">{mega('inlineDiagnostics')}</h4>
                      </div>
                      <div className="rounded-xl border border-border bg-card p-4 mb-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">{mega('inlineDiagnosticsDesc')}</p>
                        <p className="text-xs text-muted-foreground mt-2 italic">{mega('inlineDesc2')}</p>
                      </div>
                      
                      {/* Quick Link to Services */}
                      <Link
                        href="/services"
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="group mt-4 flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white hover:border-primary"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                        {mega('viewAll')}
                      </Link>
                    </div>

                    {/* Column 3: Specialized Coatings */}
                    <div className="p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                            <path d="m9 12 2 2 4-4"/>
                          </svg>
                        </div>
                        <h4 className="text-sm font-bold text-foreground">{mega('coatings')}</h4>
                      </div>
                      <div className="space-y-1">
                        <Link href="/services" onClick={() => setIsMegaMenuOpen(false)} className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-accent">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-orange-500/10 text-orange-600 dark:text-orange-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{mega('antiCorrosion')}</p>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{mega('antiCorrosionDesc')}</p>
                          </div>
                        </Link>
                        <Link href="/services" onClick={() => setIsMegaMenuOpen(false)} className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-accent">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-red-500/10 text-red-600 dark:text-red-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{mega('fireproofing')}</p>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{mega('fireproofingDesc')}</p>
                          </div>
                        </Link>
                      </div>
                      
                      {/* Service highlight */}
                      <div className="mt-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-4 border border-primary/10">
                        <p className="text-xs text-muted-foreground">{mega('coatingsDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other nav links */}
            {navLinks.filter(l => l.href !== '/about').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary group"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-px h-[2px] scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 xl:flex">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-foreground transition-colors hover:bg-accent"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="border-t border-border bg-background/95 backdrop-blur-xl px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary">
              {t('home')}
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary">
              {t('about')}
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                {t('services')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 border-l-2 border-primary/20 pl-4 py-2 space-y-1">
                  {/* NDT Lab */}
                  <p className="px-3 py-1.5 text-xs font-bold text-primary uppercase tracking-wider">{mega('ndtLab')}</p>
                  <Link href="/services" onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary transition-colors">
                    {mega('ut')}
                  </Link>
                  <Link href="/services" onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary transition-colors">
                    {mega('magneticParticle')}
                  </Link>
                  <Link href="/services" onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary transition-colors">
                    {mega('thicknessGauging')}
                  </Link>
                  <Link href="/services" onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary transition-colors">
                    {mega('eddyCurrent')}
                  </Link>

                  <div className="my-2 border-t border-border/50" />

                  {/* In-line Diagnostics */}
                  <p className="px-3 py-1.5 text-xs font-bold text-primary uppercase tracking-wider">{mega('inlineDiagnostics')}</p>
                  <Link href="/services" onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary transition-colors">
                    {mega('inlineDiagnosticsDesc')}
                  </Link>

                  <div className="my-2 border-t border-border/50" />

                  {/* Coatings */}
                  <p className="px-3 py-1.5 text-xs font-bold text-primary uppercase tracking-wider">{mega('coatings')}</p>
                  <Link href="/services" onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary transition-colors">
                    {mega('antiCorrosion')}
                  </Link>
                  <Link href="/services" onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary transition-colors">
                    {mega('fireproofing')}
                  </Link>

                  <div className="mt-3">
                    <Link href="/services" onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }} className="flex items-center gap-2 rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      {mega('viewAll')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/equipment" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary">
              {t('equipment')}
            </Link>
            <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary">
              {t('careers')}
            </Link>
            <Link href="/clients" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary">
              {t('clients')}
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary">
              {t('contact')}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

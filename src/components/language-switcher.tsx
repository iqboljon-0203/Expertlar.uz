'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import * as React from 'react';

const localeLabels: Record<string, string> = {
  uz: "O'z",
  ru: 'Ру',
  en: 'En',
};

const localeFullLabels: Record<string, string> = {
  uz: "O'zbekcha",
  ru: 'Русский',
  en: 'English',
};

const localeFlags: Record<string, string> = {
  uz: 'uz',
  ru: 'ru',
  en: 'gb',
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function onLocaleChange(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale as any });
    setIsOpen(false);
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-input bg-background px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        aria-label="Language"
        id="language-switcher"
      >
        <img 
          src={`https://flagcdn.com/w20/${localeFlags[locale]}.png`} 
          srcSet={`https://flagcdn.com/w40/${localeFlags[locale]}.png 2x`}
          width="20" 
          height="14" 
          alt={localeLabels[locale]} 
          className="w-5 h-3.5 rounded-[3px] object-cover shadow-sm border border-border/50 shrink-0"
        />
        <span>{localeLabels[locale]}</span>
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
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[140px] overflow-hidden rounded-md border border-border bg-popover p-1 shadow-md animate-in fade-in-0 zoom-in-95">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => onLocaleChange(loc)}
              className={`flex w-full items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition-colors hover:bg-accent text-left hover:text-accent-foreground ${
                locale === loc
                  ? 'bg-accent text-accent-foreground font-medium'
                  : 'text-popover-foreground'
              }`}
              id={`locale-${loc}`}
            >
              <img 
                src={`https://flagcdn.com/w40/${localeFlags[loc]}.png`} 
                width="24" 
                height="18" 
                alt={localeFullLabels[loc]} 
                className="w-6 h-[17px] rounded-[3px] object-cover shadow-sm border border-border/50 shrink-0"
              />
              {localeFullLabels[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    uz: "Expertlar Professional Services — Sanoat xavfsizligi va NDT",
    ru: "Expertlar Professional Services — Промышленная безопасность и НК",
    en: "Expertlar Professional Services — Industrial Safety & NDT",
  };

  const descriptions: Record<string, string> = {
    uz: "Sanoat xavfsizligi, nosozliklarni aniqlash (NDT) va texnik ekspertiza bo'yicha yetakchi kompaniya.",
    ru: "Ведущая компания в области промышленной безопасности, неразрушающего контроля (НК) и технической экспертизы.",
    en: "A leading company specializing in industrial safety, non-destructive testing (NDT), and technical expertise.",
  };

  return {
    title: {
      default: titles[locale] || titles.uz,
      template: `%s | Expertlar Professional Services`,
    },
    description: descriptions[locale] || descriptions.uz,
    keywords: [
      'Expertlar',
      'Professional Services',
      'Industrial Safety',
      'NDT',
      'Non-Destructive Testing',
      'Sanoat xavfsizligi',
      'Промышленная безопасность',
    ],
    authors: [{ name: 'Expertlar Professional Services' }],
    openGraph: {
      title: titles[locale] || titles.uz,
      description: descriptions[locale] || descriptions.uz,
      type: 'website',
      locale: locale,
    },
    icons: {
      icon: '/icon.svg',
    },
  };
}

import { SchemaMarkup } from '@/components/schema-markup';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://flagcdn.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
            <SchemaMarkup />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

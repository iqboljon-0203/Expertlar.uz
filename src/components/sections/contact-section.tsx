'use client';

import { useTranslations } from 'next-intl';
import { ContactFormDialog } from '@/components/ui/contact-form-dialog';

export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <div>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-expert-dark py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div style={{ backgroundImage: 'linear-gradient(rgba(227,30,36,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(227,30,36,0.4) 1px,transparent 1px)', backgroundSize: '40px 40px' }} className="h-full w-full" />
        </div>
        <div className="absolute top-10 left-[15%] h-40 w-40 rounded-full bg-primary/30 blur-[80px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Left: Contact Info & CTA */}
            <div className="space-y-10 group relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-lg transition-all duration-500 hover:shadow-xl hover:border-primary/20">
              {/* Animated gradient accent */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-[50px] transition-all duration-700 group-hover:bg-primary/20 group-hover:scale-150" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center sm:text-left">Let's connect</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{t('phoneValue')}</h3>
                      <p className="text-sm text-muted-foreground mt-1 cursor-pointer hover:text-primary transition-colors hover:underline">Support & Consultation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 transition-transform duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{t('emailValue')}</h3>
                      <p className="text-sm text-muted-foreground mt-1 cursor-pointer hover:text-blue-500 transition-colors hover:underline">Get answers quickly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 transition-transform duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{t('workHoursValue')}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{t('workHours')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-transform duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground max-w-[250px] leading-tight">{t('addressValue')}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{t('address')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-border/50 text-center sm:text-left">
                  <p className="text-sm text-muted-foreground mb-4">Ready to start your project?</p>
                  {/* Lead Generation Modal Trigger */}
                  <ContactFormDialog 
                    triggerText={useTranslations('common')('getQuote') || "Expert Consultation"}
                    className="w-full sm:w-auto h-14 rounded-xl px-10 text-base font-bold shadow-lg shadow-primary/25 transition-all hover:bg-primary hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40"
                  />
                </div>
              </div>
            </div>

            {/* Right: Embedded Google Map */}
            <div className="h-[500px] lg:h-auto overflow-hidden rounded-3xl border border-border shadow-lg relative group bg-card">
              <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.49673859736!2d69.28186411542472!3d41.36336587926715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cbf5e4a8ba9%3A0x6bba4c9d5e35e725!2sAmir%20Temur%20Avenue%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.4) contrast(1.1) opacity(0.9)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-700 group-hover:filter-none object-cover"
              ></iframe>

              {/* Float badge */}
              <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-md p-4 shadow-xl">
                 <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                 <span className="text-sm font-bold text-foreground">HQ Tashkent</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

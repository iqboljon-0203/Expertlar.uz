'use client';

import { useTranslations } from 'next-intl';

const projects = [
  {
    titleKey: 'project1Title' as const,
    descKey: 'project1Desc' as const,
    category: 'Oil & Gas',
    year: '2024',
    color: 'from-orange-500 to-red-600',
    icon: '🛢️',
  },
  {
    titleKey: 'project2Title' as const,
    descKey: 'project2Desc' as const,
    category: 'Chemical',
    year: '2024',
    color: 'from-blue-500 to-cyan-600',
    icon: '🏭',
  },
  {
    titleKey: 'project3Title' as const,
    descKey: 'project3Desc' as const,
    category: 'Energy',
    year: '2023',
    color: 'from-yellow-500 to-orange-600',
    icon: '⚡',
  },
  {
    titleKey: 'project4Title' as const,
    descKey: 'project4Desc' as const,
    category: 'Transport',
    year: '2023',
    color: 'from-green-500 to-emerald-600',
    icon: '🌉',
  },
  {
    titleKey: 'project5Title' as const,
    descKey: 'project5Desc' as const,
    category: 'Food',
    year: '2022',
    color: 'from-purple-500 to-violet-600',
    icon: '🍽️',
  },
  {
    titleKey: 'project6Title' as const,
    descKey: 'project6Desc' as const,
    category: 'Metallurgy',
    year: '2022',
    color: 'from-gray-500 to-zinc-600',
    icon: '⚙️',
  },
];

export function ProjectsSection() {
  const t = useTranslations('projects');

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

      {/* Projects Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Project Image Placeholder */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-5xl opacity-50 transition-transform duration-500 group-hover:scale-125 group-hover:opacity-80">
                    {project.icon}
                  </span>
                  <div className="absolute inset-0 bg-black/10" />
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground line-clamp-2">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {t(project.descKey)}
                  </p>
                </div>

                {/* Hover Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export type ServiceSlug =
  | 'ndt-laboratory'
  | 'calibration'
  | 'inline-diagnostics'
  | 'anti-corrosion'
  | 'fireproofing'
  | 'insulation';

export const SERVICE_SLUGS: ServiceSlug[] = [
  'ndt-laboratory',
  'calibration',
  'inline-diagnostics',
  'anti-corrosion',
  'fireproofing',
  'insulation',
];

export interface ServiceMeta {
  slug: ServiceSlug;
  color: string;
  gradient: string;
  icon: string;
}

export const SERVICE_META: Record<ServiceSlug, ServiceMeta> = {
  'ndt-laboratory': {
    slug: 'ndt-laboratory',
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-600',
    icon: 'eye',
  },
  calibration: {
    slug: 'calibration',
    color: 'emerald',
    gradient: 'from-emerald-600 to-teal-600',
    icon: 'ruler',
  },
  'inline-diagnostics': {
    slug: 'inline-diagnostics',
    color: 'purple',
    gradient: 'from-purple-600 to-indigo-600',
    icon: 'activity',
  },
  'anti-corrosion': {
    slug: 'anti-corrosion',
    color: 'orange',
    gradient: 'from-orange-600 to-red-600',
    icon: 'shield',
  },
  fireproofing: {
    slug: 'fireproofing',
    color: 'red',
    gradient: 'from-red-600 to-rose-700',
    icon: 'flame',
  },
  insulation: {
    slug: 'insulation',
    color: 'cyan',
    gradient: 'from-cyan-600 to-blue-600',
    icon: 'thermometer',
  },
};

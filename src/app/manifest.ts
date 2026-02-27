import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Expertlar Professional Services',
    short_name: 'Expertlar NDT',
    description: 'We offer comprehensive Non-Destructive Testing (NDT), pipeline diagnostics, and protective coating services across Uzbekistan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#E31E24',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

export const siteConfig = {
  name: 'LSD',
  title: 'LSD Documentation',
  description: 'LSD Component Library Documentation',
  url: 'https://lsd.nipsys.dev',
  version: '1.1.2',
  github: 'https://github.com/nipsysdev/lsd',
} as const;

export type SiteConfig = typeof siteConfig;

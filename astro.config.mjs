import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pawrank.com',
  integrations: [sitemap()],
  build: {
    assets: '_assets',
  },
  redirects: {
    '/pricing': '/seo-pricing',
    '/new-seo-pricing': '/seo-pricing',
    '/contact': '/contact-us',
    '/about': '/about-us',
    '/your-last-veterinary-seo-company-paw-rank': '/about-us',
    '/blog': '/blogs',
    '/blog/veterinary-seo-guide': '/blogs/veterinary-seo-guide',
    '/veterinary-seo-guide': '/blogs/veterinary-seo-guide',
    '/blog/veterinary-seo-signal-alignment': '/blogs/veterinary-seo-signal-alignment',
    '/veterinary-seo-signal-alignment': '/blogs/veterinary-seo-signal-alignment',
    '/why-your-veterinary-practice-isnt-ranking': '/blogs/veterinary-seo-signal-alignment',
    '/schedule-an-appointment': '/contact-us',
  },
});

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
    '/schedule-an-appointment': '/contact-us',
  },
});

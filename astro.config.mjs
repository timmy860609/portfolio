import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://timmylee.io',
  compressHTML: true,
  integrations: [vue(), sitemap()],
});

import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://timmylee.io',
  compressHTML: true,
  integrations: [vue()],
});

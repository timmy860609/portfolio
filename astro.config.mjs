import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://timmy860609.github.io',
  base: '/portfolio',
  integrations: [vue()],
});

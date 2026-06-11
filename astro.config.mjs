import { defineConfig } from 'astro/config';

// Bilingual at launch — EN at /, ZH at /zh per planning/03-sitemap.md.
// No prefix on the default locale keeps EN URLs clean while ZH is namespaced.
export default defineConfig({
  site: 'https://will.sigworld.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';
import { sanityIntegration } from '@sanity/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanityIntegration({
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset: import.meta.env.VITE_SANITY_DATASET,
      apiVersion: '2021-03-25',
      useCdn: true,
      token: import.meta.env.VITE_SANITY_TOKEN,
    }),
  ],
  output: 'server',
  adapter: netlify(),
});

import netlify from '@astrojs/netlify/functions';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
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

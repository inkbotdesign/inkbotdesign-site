import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [sanity({
    projectId: 'furwbwrk',
    dataset: 'production',
    apiVersion: '2026-03-25',
    studioBasePath: '/admin'
  }), react()],

  output: 'static',
  adapter: netlify()
});
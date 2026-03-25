import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [sanity({
    projectId: 'furwbwrk',
    dataset: 'production',
    apiVersion: '2026-03-25',
    studioBasePath: '/admin'
  }), react()],
  output: 'static'
});
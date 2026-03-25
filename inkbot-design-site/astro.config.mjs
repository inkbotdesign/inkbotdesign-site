import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

export default defineConfig({
  integrations: [sanity({
    projectId: 'furwbwrk',
    dataset: 'production',
    apiVersion: '2026-03-25',
    studioBasePath: '/admin'
  })],
  output: 'hybrid'
});

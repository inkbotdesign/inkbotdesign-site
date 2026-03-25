import { homeSchema } from './homeSchema';
import { serviceSchema } from './schema';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'Inkbot Design CMS',

  // We will replace this with your real ID in a moment!
  projectId: 'furwbwrk', 
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: [serviceSchema, homeSchema],
  },
});
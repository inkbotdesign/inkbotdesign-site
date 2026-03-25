export const homeSchema = {
  name: 'homePage',
  title: 'Home Page Settings',
  type: 'document',
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Your main H1 value proposition',
    },
    {
      name: 'heroSubhead',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
    },
    {
      name: 'ctaText',
      title: 'Call to Action Button Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'Call to Action URL',
      type: 'string',
    }
  ],
};
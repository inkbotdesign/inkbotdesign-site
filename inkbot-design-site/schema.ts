export const serviceSchema = {
  name: 'service',
  title: 'Service Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'e.g., Web Design Services',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'bodyCopy',
      title: 'Main Body Content',
      type: 'array',
      of: [{ type: 'block' }], // This creates a rich-text editor!
    },
  ],
};
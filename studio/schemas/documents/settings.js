export default {
  name: 'settings',
  title: 'settings',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'This will override the page title.',
      validation: (Rule) =>
        Rule.max(60).warning('Should be under 60 characters').required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description:
        'Important for SEO. This will appear in search engines below the title.',
      validation: (Rule) =>
        Rule.max(155).warning('Should be under 155 characters').required(),
    },
    {
      title: 'Favicon',
      name: 'favicon',
      type: 'image',
    },
    {
      title: 'Preview Image',
      description: '1200x630 recommended (will be auto resized)',
      name: 'image',
      type: 'image',
    },
    {
      type: 'color',
      name: 'textColor',
      title: 'Text color',
    },
    {
      type: 'color',
      name: 'bgColor',
      title: 'Background color',
    },
  ],
};

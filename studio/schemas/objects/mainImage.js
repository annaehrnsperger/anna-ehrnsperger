export default {
  name: 'mainImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
  },
};

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'mainImage' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};

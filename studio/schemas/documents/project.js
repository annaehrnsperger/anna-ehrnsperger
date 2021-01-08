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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
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

export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'project' }],
    },
    {
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blogPost' }],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage',
      };
    },
  },
};

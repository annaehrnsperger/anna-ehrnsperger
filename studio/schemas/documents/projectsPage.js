export default {
  name: 'projectsPage',
  title: 'Projects Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Projects Page',
      };
    },
  },
};

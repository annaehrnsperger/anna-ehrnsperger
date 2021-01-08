export default {
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Blog Page',
      };
    },
  },
};

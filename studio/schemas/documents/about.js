export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'About',
      };
    },
  },
};

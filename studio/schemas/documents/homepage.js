export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'portableText',
      title: 'Description',
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

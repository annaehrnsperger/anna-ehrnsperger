export default {
  name: 'legalNotice',
  title: 'Legal Notice',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'portableText',
      title: 'Content',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Legal',
      };
    },
  },
};

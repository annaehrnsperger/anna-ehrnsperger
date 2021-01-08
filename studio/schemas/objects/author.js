export default {
  name: 'author',
  title: 'Author',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'portableText',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      descriptioin: 'Are you...?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};

// preview: {
//   select: {
//     title: 'mainImage',
//   },
//   prepare({ title }) {
//     return {
//       title: title.alt,
//     };
//   },
// },

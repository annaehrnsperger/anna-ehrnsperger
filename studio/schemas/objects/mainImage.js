export default {
  name: 'mainImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
  },
};

// preview: {
//   select: {
//     title: 'image.alt',
//   },
//   prepare({ title }) {
//     return {
//       title,
//       media: FiUsers,
//     };
//   },
// },

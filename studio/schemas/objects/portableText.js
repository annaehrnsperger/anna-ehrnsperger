export default {
  title: 'Portable Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        // {title: 'Normal', value: 'normal'},
        // {title: 'H1', value: 'h1'},
        // {title: 'H2', value: 'h2'},
        { title: 'H3', value: 'h3' },
        // {title: 'H4', value: 'h4'},
        // {title: 'Quote', value: 'blockquote'}
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        // { title: 'Number', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          // {title: 'Emphasis', value: 'em'},
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'mainImage',
    },
    { type: 'code' },
  ],
};

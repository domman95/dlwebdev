export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytul',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'markdown',
    },
    {
      title: 'Hashtags',
      name: 'hashtags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Zdjęcia',
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },
    {
      title: 'Technogolie',
      name: 'stack',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'stack' }] }],
    },
  ],
};

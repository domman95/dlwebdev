export default {
  name: 'offer',
  title: 'Oferta',
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
      name: 'description',
      title: 'Opis',
      type: 'text',
    },
    {
      name: 'illustration',
      title: 'Ilustracja',
      type: 'image',
    },
  ],
};

export default {
  name: 'stack',
  title: 'Technologie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nazwa',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

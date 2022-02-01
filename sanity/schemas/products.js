export default {
  name: 'products',
  title: 'Produkty',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Kategoria produktu',
      type: 'string',
    },
    {
      name: 'products',
      title: 'Produkty',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nazwa produktu',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Cena',
              type: 'string',
            },
            {
              name: 'nutritional',
              title: 'Wartości odzywcze',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'kind',
                      title: 'Rodzaj',
                      type: 'array',
                      of: [
                        {
                          type: 'reference',
                          to: [
                            {
                              type: 'string',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
        editModal: 'fullscreen',
      },
    },
  ],
};

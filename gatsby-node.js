const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const offerTemplate = path.resolve('src/templates/detailsOffer.js');
  const result = await graphql(`
    query {
      allSanityOffer {
        edges {
          node {
            id
            slug {
              current
            }
            title
            description
            illustration {
              asset {
                url
              }
            }
          }
        }
      }
    }
  `);

  // REDIRECTS
  createRedirect({
    fromPath: '/oferta',
    toPath: '/oferta/strony-internetowe',
  });

  // CREATE PAGES
  result.data.allSanityOffer.edges.forEach((edge) => {
    createPage({
      path: `/oferta/${edge.node.slug.current}`,
      component: offerTemplate,
      context: [{ ...edge.node }],
    });
  });
};

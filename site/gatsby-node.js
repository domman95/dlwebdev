const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const offerTemplate = path.resolve('src/templates/detailsOffer.js');
  const portfolioTemplate = path.resolve('src/templates/detailsPortfolio.js');
  const resultOffer = await graphql(`
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

  const resultPortfolio = await graphql(`
    query {
      allSanityPortfolio {
        edges {
          node {
            id
            title
            description
            hashtags
            slug {
              current
            }
            images {
              asset {
                id
                url
                gatsbyImageData
              }
            }
            stack {
              id
              title
              image {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  // CREATE PAGES
  resultOffer.data.allSanityOffer.edges.forEach((edge) => {
    createPage({
      path: `/oferta/${edge.node.slug.current}`,
      component: offerTemplate,
      context: { ...edge.node },
    });
  });

  resultPortfolio.data.allSanityPortfolio.edges.forEach((edge) => {
    createPage({
      path: `/portfolio/${edge.node.slug.current}`,
      component: portfolioTemplate,
      context: { ...edge.node },
    });
  });
};

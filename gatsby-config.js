require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: 'https://dlwebdev.com',
    title: 'dlwebdev',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '18gj91ct',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        grapqlTag: 'default',
        watchMode: true,
      },
    },
  ],
};

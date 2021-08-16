require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: 'https://dlwebdev.com',
    title: 'dlwebdev',
    titleTemplate: 'dlwebdev | %s',
    description:
      'dlwebdev jest firmą zajmującą się tworzeniem stron internetowych, aplikacji internetowych oraz projektów graficznych, logotypów, wizytówek. Swoje prace opieram głównie na JAMSTACK. Korzystam z headless CMS oraz zewnętrznych serwisów takich jak Netlify.',
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

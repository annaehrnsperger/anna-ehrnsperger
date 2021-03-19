require('dotenv').config({
  path: `.env`,
});

const clientConfig = require('./client-config');

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        watchMode: true,
        overlayDrafts: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};

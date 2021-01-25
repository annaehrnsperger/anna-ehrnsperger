require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Anna Ehrnsperger`,
    description: `Design Code`,
    author: `Anna Ehrnsperger`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'o1wghi20',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-transition-link`,
    // `gatsby-plugin-preact`,
  ],
};

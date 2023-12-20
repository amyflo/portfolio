/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Amy Lo`,
    siteUrl: `https://www.amyflo.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amy Lo`,
        short_name: `Amy Lo`,
        description: `Personal website for Amy Lo.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/puzzle.gif`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
      },
    },
    "gatsby-transformer-remark", 
    'gatsby-plugin-theme-ui', {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
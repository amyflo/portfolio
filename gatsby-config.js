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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 6000,
            },
          },
        ],
      },
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 6000
            },
          },
        ],
      },
    },
    

    'gatsby-plugin-theme-ui', 
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": `${__dirname}/src/pages/`
    },
    __key: "pages"
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    { // record
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/record/`,
      },
    },
]
};
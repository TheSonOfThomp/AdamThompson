module.exports = {
  siteMetadata: {
    title: `Adam Thompson`,
    description: `Designer. Developer. Maker.`,
    author: `@thesonofthomp`,
  },
  plugins: [
    `gatsby-plugin-sass`, // loads SASS/SCSS files
    `gatsby-plugin-resolve-src`, // sets 'path/to' == 'src/path/to'
    `gatsby-transformer-remark`, // for parsing markdown
    `gatsby-plugin-react-helmet`, // for <head> tag?
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/silhouette_sqr.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

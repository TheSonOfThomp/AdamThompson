module.exports = {
  siteMetadata: {
    title: `Adam Thompson`,
    description: `Designer. Developer. Maker.`,
    author: `@thesonofthomp`,
    siteUrl: 'http://www.thesonofthomp.com',
    keywords: [`adam`, `thompson`, `ux`, `designer`, `developer`, `engineer`, `waterloo`]
  },
  plugins: [
    // `gatsby-plugin-recaptcha`, // loads reCaptcha
    `gatsby-plugin-sass`, // loads SASS/SCSS files
    `gatsby-plugin-resolve-src`, // sets 'path/to' == 'src/path/to'
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`, // for parsing markdown
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
        ]
      }
    },
    `gatsby-plugin-react-helmet`, // for <head> tag?
    'gatsby-transformer-json', // for parsing json
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'portfolio',
        path: `${__dirname}/src/data/portfolio`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [`gatsby-transformer-remark`],
        defaultLayouts: {
          default: require.resolve("./src/templates/portfolio-page/portfolio-template.js"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/monogram.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-41604709-1",
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`, // for <head> tag
    'gatsby-transformer-json', // for parsing json
    `gatsby-remark-images`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/pages/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipes`,
        path: `${__dirname}/src/pages/recipes`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [require('remark-unwrap-images')], // removes wrapping <p> tag
        gatsbyRemarkPlugins: [`gatsby-transformer-remark`, 
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          }],
        defaultLayouts: {
          portfolio: require.resolve("./src/templates/portfolio-page/portfolio-template.js"),
          default: require.resolve("./src/templates/default-page/default-template.tsx"),
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

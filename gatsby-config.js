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
    `gatsby-plugin-react-svg`,
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
        name: `Adam Thompson`,
        short_name: `thesonofthomp`,
        start_url: `/`,
        background_color: `#2ac51b`,
        theme_color: `#2ac51b`,
        display: `minimal-ui`,
        icon: `src/images/monogram.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `maskable`,
        },
        cache_busting_mode: 'none'
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
    {
      resolve: `gatsby-plugin-offline`,
      precachePages: [
        '/portfolio/*'
      ],
      workboxConfig: {
        globPatterns: ['src/images*']
      }
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: "static",
      },
    }
  ],
}

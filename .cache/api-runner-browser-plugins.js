module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":720,"linkImagesToOriginal":false,"showCaptions":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"remarkPlugins":[null],"gatsbyRemarkPlugins":["gatsby-transformer-remark",{"resolve":"gatsby-remark-images","options":{"maxWidth":1024,"linkImagesToOriginal":false,"showCaptions":true}}],"defaultLayouts":{"portfolio":"/Users/athompson/Documents/GitHub/Personal/AdamThompson/src/templates/portfolio-page/portfolio-template.js","default":"/Users/athompson/Documents/GitHub/Personal/AdamThompson/src/templates/default-page/default-template.tsx"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Adam Thompson","short_name":"thesonofthomp","start_url":"/","background_color":"#2ac51b","theme_color":"#2ac51b","display":"minimal-ui","icon":"src/images/monogram.png","icon_options":{"purpose":"maskable"},"cache_busting_mode":"none"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-41604709-1"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

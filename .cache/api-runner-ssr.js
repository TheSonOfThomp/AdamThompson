var plugins = [{
      plugin: require('/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"remarkPlugins":[null],"gatsbyRemarkPlugins":["gatsby-transformer-remark",{"resolve":"gatsby-remark-images","options":{"maxWidth":1024,"linkImagesToOriginal":false,"showCaptions":true}}],"defaultLayouts":{"portfolio":"/Users/athompson/Documents/GitHub/Personal/AdamThompson/src/templates/portfolio-page/portfolio-template.js","default":"/Users/athompson/Documents/GitHub/Personal/AdamThompson/src/templates/default-page/default-template.tsx"}},
    },{
      plugin: require('/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Adam Thompson","short_name":"thesonofthomp","start_url":"/","background_color":"#2ac51b","theme_color":"#2ac51b","display":"minimal-ui","icon":"src/images/monogram.png","icon_options":{"purpose":"maskable"},"cache_busting_mode":"none"},
    },{
      plugin: require('/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-41604709-1"},
    },{
      plugin: require('/Users/athompson/Documents/GitHub/Personal/AdamThompson/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/athompson/Documents/GitHub/Personal/AdamThompson/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

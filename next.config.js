// next.config.js
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/});
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack: (config, options) => {
    
    // Load svgs as components 
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)?$/,
      },
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgo: false
        }
      }],
    })

    // Load Markdown as objects
    config.module.rules.push(
      {
        test: /\.md$/,
        issuer: {
          test: /\.(js|ts)?$/,
        },
        use: 'frontmatter-markdown-loader'
      }
    )

    return config
  }
}

module.exports = withPlugins(
  [
    withMDX,
    // [withPWA, {
    //   pwa: {
    //     dest: 'public',
    //     runtimeCaching,
    //   },
    // }],
    [withImages, { 
      fileExtensions: ["jpg", "jpeg", "png", "gif"]
    }]
  ], 
  nextConfig
)

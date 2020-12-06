// next.config.js
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/});
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
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

    // Load Markdown as objeects
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'frontmatter-markdown-loader'
      }
    )

    return config
  }
}

module.exports = withPlugins(
  [
    withMDX,
    [withImages, { fileExtensions: ["jpg", "jpeg", "png", "gif"],}]
  ], 
  nextConfig
)

// next.config.js
const createMDX = require('@next/mdx');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const { webpack } = require('next/dist/compiled/webpack/webpack');

// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack: (config, options) => {
    
    // Load svgs as components 
    config.module.rules.push({
      test: /\.svg$/,
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
        use: 'frontmatter-markdown-loader'
      }
    )

    return config
  }
}

const withMDX = createMDX({ extension: /\.mdx?$/})

module.exports = withMDX({ ...nextConfig,  })
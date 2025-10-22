// next.config.js
require("dotenv").config({ path: "../../.env" });
const createMDX = require('@next/mdx');

// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
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
// next.config.js
const createMDX = require('@next/mdx');
const path = require('path');

// Load environment variables from the repo root
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // env: {
  //   NOTION_KEY: process.env.NOTION_KEY,
  //   NOTION_BLOG_PAGE_ID: process.env.NOTION_BLOG_PAGE_ID,
  //   NOTION_RECIPES_PAGE_ID: process.env.NOTION_RECIPES_PAGE_ID,
  // },
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
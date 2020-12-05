// next.config.js
const withSvgr = require('next-svgr');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config, options) => {
    
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

    return config
  }
}

module.exports = withPlugins(
  [
    [withImages, { fileExtensions: ["jpg", "jpeg", "png", "gif"],}]
  ], 
  nextConfig
)

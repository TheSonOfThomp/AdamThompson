import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.story.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    ({
        name: "@storybook/addon-styling-webpack",

        options: {
          rules: [{
        test: /\.css$/,
        sideEffects: true,
        use: [
            require.resolve("style-loader"),
            {
                loader: require.resolve("css-loader"),
                options: {
                    
                    
                },
            },
        ],
      },{
        test: /\.s[ac]ss$/,
        sideEffects: true,
        use: [
            require.resolve("style-loader"),
            {
                loader: require.resolve("css-loader"),
                options: {
                    
                    importLoaders: 2,
                },
            },
            require.resolve("resolve-url-loader"),
            {
                loader: require.resolve("sass-loader"),
                options: {
                    // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
                    implementation: require.resolve("sass"),
                    sourceMap: true,
                    sassOptions: {},
                },
            },
        ],
      },],
        }
    })
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
}
export default config

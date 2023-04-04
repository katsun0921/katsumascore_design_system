const path = require('path');

module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-viewport',
    '@whitespace/storybook-addon-html',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },{
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    // @see https://github.com/storybookjs/storybook/issues/9070
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/
    return config
  },
  staticDirs: [{ from: '../public/', to: '/' }],
}

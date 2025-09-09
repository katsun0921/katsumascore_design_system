import { resolve } from 'path';

export default {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@whitespace/storybook-addon-html',
    ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  staticDirs: [{ from: '../public/', to: '/' }],
};

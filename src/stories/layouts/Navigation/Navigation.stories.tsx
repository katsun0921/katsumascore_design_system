import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navigation } from './Navigation';

export default {
  title: 'Layout/Navigation',
  component: Navigation,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const PageNavigation = Template.bind({});
PageNavigation.args = {
  links: [
    {
      label: 'HOME',
      href: 'http://katsumascore.local/',
      count: '',
      current: true,
    },
    {
      label: '映画',
      href: 'http://katsumascore.local/category/movie/',
      count: '12',
    },
    {
      label: 'アニメ',
      href: 'http://katsumascore.local/category/anime/',
      count: '8',
    },
    {
      label: 'ドラマ',
      href: 'http://katsumascore.local/category/drama/',
      count: '1',
    },
  ],
};

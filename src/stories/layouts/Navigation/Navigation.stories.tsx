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

export const HeaderNavigationMenu = Template.bind({});
HeaderNavigationMenu.args = {};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navigation } from './Navigation';

export default {
  title: 'Layout/Navigation',
  component: Navigation,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navigation>;

const meta: Meta<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const HeaderNavigationMenu = Template.bind({});
HeaderNavigationMenu.args = {};

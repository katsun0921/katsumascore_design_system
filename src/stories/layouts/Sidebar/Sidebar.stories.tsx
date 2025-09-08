import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Sidebar } from './Sidebar';

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sidebar>;

const meta: Meta<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const PageSidebar = Template.bind({});
PageSidebar.args = {};

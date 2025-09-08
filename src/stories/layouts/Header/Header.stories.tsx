import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Header } from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

const meta: Meta<typeof Header> = (args) => <Header {...args} />;

export const PageHeader = Template.bind({});
PageHeader.args = {};

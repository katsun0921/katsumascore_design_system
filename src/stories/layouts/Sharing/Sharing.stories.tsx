import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Sharing } from './Sharing';

export default {
  title: 'Layout/Sharing',
  component: Sharing,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sharing>;

const meta: Meta<typeof Sharing> = (args) => (
  <Sharing {...args} />
);

export const PageSharing = Template.bind({});
PageSharing.args = {};

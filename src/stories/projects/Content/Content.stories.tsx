import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Content } from './Content';

export default {
  title: 'Project/Content',
  component: Content,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Content>;

const meta: Meta<typeof Content> = (args) => (
  <Content {...args} />
);

export const ViewContent = Template.bind({});
ViewContent.args = {};

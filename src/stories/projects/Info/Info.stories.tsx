import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Info } from './Info';

export default {
  title: 'Project/Info',
  component: Info,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Info>;

const meta: Meta<typeof Info> = (args) => <Info {...args} />;

export const PageInfo = Template.bind({});
PageInfo.args = {};

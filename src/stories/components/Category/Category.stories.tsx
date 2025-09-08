import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Category } from './Category';

const meta: Meta<typeof Category> = {
  title: 'Component/Category',
  component: Category,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: '映画',
  },
};

export const Small: Story = {
  args: {
    label: '映画',
    size: 'small',
  },
};

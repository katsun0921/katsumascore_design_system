import type { Meta, StoryObj } from '@storybook/react-vite';

import { Base } from './Base';

const meta: Meta<typeof Base> = {
  title: 'Styles/Base',
  component: Base,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseStyle: Story = {};

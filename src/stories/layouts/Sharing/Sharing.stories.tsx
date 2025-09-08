import type { Meta, StoryObj } from '@storybook/react-vite';

import { Sharing } from './Sharing';

const meta: Meta<typeof Sharing> = {
  title: 'Layout/Sharing',
  component: Sharing,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageSharing: Story = {
  args: {},
};

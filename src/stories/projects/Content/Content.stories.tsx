import type { Meta, StoryObj } from '@storybook/react-vite';

import { Content } from './Content';

const meta: Meta<typeof Content> = {
  title: 'Project/Content',
  component: Content,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ViewContent: Story = {
  args: {},
};

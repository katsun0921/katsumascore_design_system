import type { Meta, StoryObj } from '@storybook/react-vite';

import { Info } from './Info';

const meta: Meta<typeof Info> = {
  title: 'Project/Info',
  component: Info,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageInfo: Story = {
  args: {},
};

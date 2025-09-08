import type { Meta, StoryObj } from '@storybook/react-vite';

import { Summary } from './Summary';

const meta: Meta<typeof Summary> = {
  title: 'Project/Summary',
  component: Summary,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProjectSummary: Story = {
  args: {},
};

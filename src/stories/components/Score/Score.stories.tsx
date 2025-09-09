import type { Meta, StoryObj } from '@storybook/react-vite';

import { Score } from './Score';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Score> = {
  title: 'Components/Score',
  component: Score,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MediumScore: Story = {
  args: {
    score: '3',
    size: 'medium',
  },
};

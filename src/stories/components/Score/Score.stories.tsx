import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Score } from './Score';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Score',
  component: Score,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Score>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const meta: Meta<typeof Score> = (args) => <Score {...args} />;

export const MediumScore = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MediumScore.args = {
  score: '3',
  size: 'medium',
};

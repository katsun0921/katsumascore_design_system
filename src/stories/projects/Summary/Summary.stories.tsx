import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Summary } from './Summary';

export default {
  title: 'Project/Summary',
  component: Summary,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Summary>;

const meta: Meta<typeof Summary> = (args) => (
  <Summary {...args} />
);

export const ProjectSummary = Template.bind({});
ProjectSummary.args = {};

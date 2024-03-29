import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Summary } from './Summary';

export default {
  title: 'Project/Summary',
  component: Summary,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Summary>;

const Template: ComponentStory<typeof Summary> = (args) => (
  <Summary {...args} />
);

export const ProjectSummary = Template.bind({});
ProjectSummary.args = {};

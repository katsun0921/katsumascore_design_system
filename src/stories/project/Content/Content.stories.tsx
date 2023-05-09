import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Content } from './Content';

export default {
  title: 'Project/Content',
  component: Content,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);

export const ViewContent = Template.bind({});
ViewContent.args = {};

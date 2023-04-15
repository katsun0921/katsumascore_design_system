import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Info } from './Info';

export default {
  title: 'Project/Info',
  component: Info,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const PageInfo = Template.bind({});
PageInfo.args = {};

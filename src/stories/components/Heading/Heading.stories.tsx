import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from './Heading';

export default {
  title: 'Component/Heading',
  component: Heading,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const HeadingTitle = Template.bind({});
HeadingTitle.args = {
  color: 'rgb(0, 0, 0)',
};

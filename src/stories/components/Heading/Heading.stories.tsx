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

export const TitleHeading = Template.bind({});
TitleHeading.args = {
  headingLevel: '1',
  type: 'title',
  color: 'rgb(0, 0, 0)',
};

export const PostHeading = Template.bind({});
PostHeading.args = {
  headingLevel: '3',
  type: 'post',
  color: 'rgb(255, 255, 255)',
};

export const PostLinkHeading = Template.bind({});
PostLinkHeading.args = {
  headingLevel: '3',
  type: 'post',
  color: 'rgb(255, 255, 255)',
  isLink: true,
};

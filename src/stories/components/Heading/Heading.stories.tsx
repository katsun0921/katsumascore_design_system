import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

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
} satisfies Meta<typeof Heading>;

const meta: Meta<typeof Heading> = (args) => (
  <div
    style={{
      backgroundColor: args.color,
    }}
  >
    <Heading {...args} />
  </div>
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

export const PostRelatedHeading = Template.bind({});
PostRelatedHeading.args = {
  headingLevel: '3',
  type: 'related',
  color: 'rgb(255, 255, 255)',
};

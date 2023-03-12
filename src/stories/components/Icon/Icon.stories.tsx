import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';

export default {
  title: 'Component/Icon',
  component: Icon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconTwitter = Template.bind({});
IconTwitter.args = {
  type: 'twitter',
};

export const IconTwitterHeader = Template.bind({});
IconTwitterHeader.args = {
  type: 'twitter',
  className: 'c-icon__header',
  template: 'header',
};

export const IconTwitterCircle = Template.bind({});
IconTwitterCircle.args = {
  type: 'twitter',
};

export const IconRss = Template.bind({});
IconRss.args = {
  type: 'rss',
};

export const IconRssHeader = Template.bind({});
IconRssHeader.args = {
  type: 'rss',
  className: 'c-icon__header',
  template: 'header',
};

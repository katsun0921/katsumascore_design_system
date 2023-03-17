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

export const IconPrimary = Template.bind({});
IconPrimary.args = {
  type: 'primary',
};

export const IconFacebook = Template.bind({});
IconFacebook.args = {
  type: 'facebook',
};

export const IconTwitter = Template.bind({});
IconTwitter.args = {
  type: 'twitter-blue-circle',
};

export const IconRss = Template.bind({});
IconRss.args = {
  type: 'rss',
};

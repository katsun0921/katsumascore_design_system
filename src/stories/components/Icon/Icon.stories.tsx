import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, IconImage, HamburgerMenu } from './Icon';

export default {
  title: 'Component/Icon',
  component: Icon,
  subcomponents: { IconImage, HamburgerMenu },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const TemplateImage: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args}>
    <IconImage props={args} />
  </Icon>
);
const TemplateHamburgerMenu: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args}>
    <HamburgerMenu />
  </Icon>
);

export const Primary = TemplateImage.bind({});
Primary.args = {
  type: 'primary',
};

export const Facebook = TemplateImage.bind({});
Facebook.args = {
  type: 'facebook',
};
export const TwitterBlueCircle = TemplateImage.bind({});
TwitterBlueCircle.args = {
  type: 'twitter-blue-circle',
};
export const Rss = TemplateImage.bind({});
Rss.args = {
  type: 'rss',
};

export const IconHamburgerMenu = TemplateHamburgerMenu.bind({});
IconHamburgerMenu.args = {
  type: 'rss',
};

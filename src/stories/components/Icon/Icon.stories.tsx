import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, IconImage, IconStyle } from './Icon';

export default {
  title: 'Component/Icon',
  component: Icon,
  subcomponents: { IconImage },
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

const TemplateStyle: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args}>
    <IconStyle props={args} />
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
export const IconArrowInCircleRight = TemplateStyle.bind({});
IconArrowInCircleRight.args = {
  className: 'c-icon__arrowInCircle c-icon__arrowInCircle__next',
};
export const IconArrowInCircleLeft = TemplateStyle.bind({});
IconArrowInCircleLeft.args = {
  className: 'c-icon__arrowInCircle c-icon__arrowInCircle__prev',
};

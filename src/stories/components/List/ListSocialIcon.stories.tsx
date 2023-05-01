import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListSocialIcon } from './ListSocialIcon';

export default {
  title: 'Component/List',
  component: ListSocialIcon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ListSocialIcon>;

const TemplateListSocialIcon: ComponentStory<typeof ListSocialIcon> = (
  args
) => {
  return <ListSocialIcon {...args} />;
};

export const SocialIcon = TemplateListSocialIcon.bind({});
SocialIcon.args = {};

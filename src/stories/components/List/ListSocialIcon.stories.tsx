import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ListSocialIcon } from './ListSocialIcon';

export default {
  title: 'Components/List',
  component: ListSocialIcon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ListSocialIcon>;

const TemplateListSocialIcon: ComponentStory<typeof ListSocialIcon> = (
  args
) => {
  return <ListSocialIcon {...args} />;
};

export const SocialIcon = TemplateListSocialIcon.bind({});
SocialIcon.args = {};

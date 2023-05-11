import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PostOverlay } from './PostOverlay';

export default {
  title: 'Project/Post',
  component: PostOverlay,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PostOverlay>;

const TemplatePostOverlay: ComponentStory<typeof PostOverlay> = (args) => (
  <PostOverlay {...args} />
);

export const ProjectPostImageOverlay = TemplatePostOverlay.bind({});
ProjectPostImageOverlay.args = {};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Post, PostOverlay } from './Post';

export default {
  title: 'Layout/Post',
  component: Post,
  subcomponents: { PostOverlay },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Post>;

const TemplatePostOverlay: ComponentStory<typeof Post> = (args) => (
  <Post {...args}>
    <PostOverlay />
  </Post>
);

export const LayoutPostImageOverlay = TemplatePostOverlay.bind({});
LayoutPostImageOverlay.args = {};

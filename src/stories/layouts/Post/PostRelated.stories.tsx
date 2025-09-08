import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { PostsRelatedRand } from './PostRelated';

export default {
  title: 'Layout/Post',
  component: PostsRelatedRand,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PostsRelatedRand>;

const TemplatePostsRelatedRand: ComponentStory<typeof PostsRelatedRand> = (
  args
) => <PostsRelatedRand {...args} />;

export const LayoutPostsRelatedRand = TemplatePostsRelatedRand.bind({});
LayoutPostsRelatedRand.args = {
  postsPerPage: 3,
};

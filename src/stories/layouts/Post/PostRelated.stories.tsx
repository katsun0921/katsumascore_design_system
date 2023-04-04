import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PostsRelatedRand } from './PostRelated';
import { Post } from './Post';

export default {
  title: 'Layout/Post',
  component: PostsRelatedRand,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PostsRelatedRand>;

const TemplatePostsRelatedRand: ComponentStory<typeof PostsRelatedRand> = (
  args
) => <PostsRelatedRand {...args} />;

export const LayoutPostsRelatedRand = TemplatePostsRelatedRand.bind({});
LayoutPostsRelatedRand.args = {
  postsPerPage: 3,
};

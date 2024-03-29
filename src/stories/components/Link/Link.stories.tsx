import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link, LinkFacebook, LinkTwitter } from './Link';

export default {
  title: 'Component/Link',
  component: Link,
  subcomponents: { LinkFacebook, LinkTwitter },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    backgrounds: {
      default: 'header',
      values: [],
    },
  },
} as ComponentMeta<typeof Link>;

const TemplateLinkFacebook: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>
    <LinkFacebook />
  </Link>
);

const TemplateLinkTwitter: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>
    <LinkTwitter />
  </Link>
);

export const Facebook = TemplateLinkFacebook.bind({});
Facebook.args = {};

export const Twitter = TemplateLinkTwitter.bind({});
Twitter.args = {};

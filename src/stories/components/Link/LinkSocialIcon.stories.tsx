import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  LinkSocialIcon,
  LinkFacebookIcon,
  LinkTwitterIcon,
  LinkRssIcon,
} from './LinkSocialIcon';

export default {
  title: 'Component/Link',
  component: LinkSocialIcon,
  subcomponents: { LinkFacebookIcon, LinkTwitterIcon, LinkRssIcon },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    backgrounds: {
      default: 'header',
      values: [],
    },
  },
} satisfies Meta<typeof LinkSocialIcon>;

const TemplateLinkFacebook: ComponentStory<typeof LinkSocialIcon> = (args) => (
  <LinkSocialIcon {...args}>
    <LinkFacebookIcon />
  </LinkSocialIcon>
);

const TemplateLinkTwitter: ComponentStory<typeof LinkSocialIcon> = (args) => (
  <LinkSocialIcon {...args}>
    <LinkTwitterIcon />
  </LinkSocialIcon>
);

const TemplateLinkRss: ComponentStory<typeof LinkSocialIcon> = (args) => (
  <LinkSocialIcon {...args}>
    <LinkRssIcon />
  </LinkSocialIcon>
);

export const FacebookIcon = TemplateLinkFacebook.bind({});
FacebookIcon.args = {};

export const TwitterIcon = TemplateLinkTwitter.bind({});
TwitterIcon.args = {};

export const RssIcon = TemplateLinkRss.bind({});
RssIcon.args = {};

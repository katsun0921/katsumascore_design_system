import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sharing } from './Sharing';

export default {
  title: 'Layout/Sharing',
  component: Sharing,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Sharing>;

const Template: ComponentStory<typeof Sharing> = (args) => (
  <Sharing {...args} />
);

export const PageSharing = Template.bind({});
PageSharing.args = {};

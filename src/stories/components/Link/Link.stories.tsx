import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from './Link';

export default {
  title: 'Component/Link',
  component: Link,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    backgrounds: {
      default: 'header',
      values: [
        {
          name: 'header',
          value: 'rgb(92, 57, 242)',
        },
      ],
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const PageLink = Template.bind({});
PageLink.args = {};

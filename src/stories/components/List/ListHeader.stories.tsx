import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListHeader } from './ListHeader';

export default {
  title: 'Component/List',
  component: ListHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    backgrounds: {
      default: 'header',
      values: [],
    },
  },
} as ComponentMeta<typeof ListHeader>;

const TemplateLinkHeader: ComponentStory<typeof ListHeader> = (args) => (
  <ListHeader {...args} />
);

export const headerNavigationMenu = TemplateLinkHeader.bind({});
headerNavigationMenu.args = {
  backgroundColor: 'rgb(92, 57, 242)',
};

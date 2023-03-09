import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Category } from './Category';

export default {
  title: 'Component/Category',
  component: Category,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {},
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
);

export const CategoryLabel = Template.bind({});
CategoryLabel.args = {
  label: '映画',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tags } from './Tag';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Tag',
  component: Tags,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Tags>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const PrimaryTags = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryTags.args = {
  tags: [
    {
      label: 'Wordpress Tag',
    },
    {
      label: 'Wordpress Tag2',
    },
  ],
};

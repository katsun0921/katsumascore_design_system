import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchBox } from './SearchBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Search',
  component: SearchBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SearchBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const meta: Meta<typeof SearchBox> = (args) => (
  <SearchBox {...args} />
);

export const ComponentSearchBox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ComponentSearchBox.args = {};

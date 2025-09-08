import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Search } from './Search';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Search',
  component: Search,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Search>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const meta: Meta<typeof Search> = (args) => <Search {...args} />;

export const ComponentSearch = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ComponentSearch.args = {};

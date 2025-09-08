import type { Meta, StoryObj } from '@storybook/react-vite';

import { Search } from './Search';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Search> = {
  title: 'Component/Search',
  component: Search,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentSearch: Story = {
  args: {},
};

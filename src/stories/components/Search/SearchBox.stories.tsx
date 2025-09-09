import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchBox } from './SearchBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SearchBox> = {
  title: 'Components/Search',
  component: SearchBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentSearchBox: Story = {
  args: {},
};

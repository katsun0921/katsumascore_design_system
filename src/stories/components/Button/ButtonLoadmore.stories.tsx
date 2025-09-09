import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonLoadmore } from './ButtonLoadmore';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ButtonLoadmore> = {
  title: 'Components/Button',
  component: ButtonLoadmore,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Loadmore: Story = {};

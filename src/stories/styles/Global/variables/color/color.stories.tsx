import type { Meta, StoryObj } from '@storybook/react-vite';

import { Colors, TColorList } from './Color';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Colors> = {
  title: 'Styles/Color',
  component: Colors,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const colorList: TColorList = [
  {
    label: 'Basic',
    value: [
      {
        className: 'u-bg-white',
      },
      {
        className: 'u-bg-black',
      },
    ],
  },
  {
    label: 'Slate',
    value: [
      {
        className: 'u-bg-slate-50',
      },
      {
        className: 'u-bg-slate-900',
      },
    ],
  },
  {
    label: 'Gray',
    value: [
      {
        className: 'u-bg-gray-100',
      },
      {
        className: 'u-bg-gray-300',
      },
      {
        className: 'u-bg-gray-500',
      },
      {
        className: 'u-bg-gray-700',
      },
    ],
  },
  {
    label: 'Blue',
    value: [
      {
        className: 'u-bg-blue-600',
      },
      {
        className: 'u-bg-blue-800',
      },
    ],
  },
  {
    label: 'Stone',
    value: [
      {
        className: 'u-bg-stone-200',
      },
    ],
  },
  {
    label: 'Yellow',
    value: [
      {
        className: 'u-bg-yellow-50',
      },
      {
        className: 'u-bg-yellow-200',
      },
    ],
  },
];

export const ColorsList: Story = {
  args: {
    colorList,
  },
};

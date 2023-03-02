import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Colors, TColorList } from './Color';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Styles/Color',
  component: Colors,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Colors>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Colors> = (args) => <Colors {...args} />;

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

export const ColorsList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorsList.args = {
  colorList,
};

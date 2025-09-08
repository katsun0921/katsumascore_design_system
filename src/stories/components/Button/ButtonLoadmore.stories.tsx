import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonLoadmore } from './ButtonLoadmore';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Button',
  component: ButtonLoadmore,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ButtonLoadmore>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const meta: Meta<typeof ButtonLoadmore> = () => (
  <ButtonLoadmore />
);

export const Loadmore = Template.bind({});

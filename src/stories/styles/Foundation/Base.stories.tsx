import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Base } from './Base';

export default {
  title: 'Styles/Base',
  component: Base,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Base>;

const meta: Meta<typeof Base> = () => <Base />;

export const BaseStyle = Template.bind({});
BaseStyle.args = {};

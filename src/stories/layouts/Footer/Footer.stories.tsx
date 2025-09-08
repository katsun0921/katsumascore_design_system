import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Footer } from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

const meta: Meta<typeof Footer> = (args) => <Footer {...args} />;

export const LayoutFooter = Template.bind({});
LayoutFooter.args = {};

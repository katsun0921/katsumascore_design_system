import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { HamburgerMenu } from './HamburgerMenu';

export default {
  title: 'Components/HamburgerMenu',
  component: HamburgerMenu,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof HamburgerMenu>;

const TemplateHamburgerMenu: ComponentStory<typeof HamburgerMenu> = (args) => (
  <HamburgerMenu {...args} />
);

export const PageHamburgerMenu = TemplateHamburgerMenu.bind({});
PageHamburgerMenu.args = {
  label: 'MENU',
};

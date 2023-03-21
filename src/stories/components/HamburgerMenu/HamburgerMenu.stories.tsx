import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HamburgerMenu } from './HamburgerMenu';

export default {
  title: 'Component/HamburgerMenu',
  component: HamburgerMenu,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {},
} as ComponentMeta<typeof HamburgerMenu>;

const TemplateHamburgerMenu: ComponentStory<typeof HamburgerMenu> = (args) => (
  <HamburgerMenu {...args} />
);

export const PageHamburgerMenu = TemplateHamburgerMenu.bind({});
PageHamburgerMenu.args = {
  label: 'MENU',
};

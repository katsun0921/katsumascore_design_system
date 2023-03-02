import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Base } from './Base';

export default {
  title: 'Styles/Base',
  component: Base,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = () => <Base />;

export const BaseStyle = Template.bind({});
BaseStyle.args = {};

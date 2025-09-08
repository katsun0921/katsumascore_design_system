import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Widgets, WidgetCategories, WidgetHeading, WidgetText } from './Widget';

export default {
  title: 'Component/Widget',
  component: Widgets,
  subcomponents: { WidgetCategories, WidgetHeading, WidgetText },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Widgets>;

const TemplateWidgetCategories: ComponentStory<typeof Widgets> = (args) => (
  <Widgets {...args}>
    <WidgetCategories />
  </Widgets>
);

const TemplateWidgetHeading: ComponentStory<typeof Widgets> = (args) => (
  <Widgets {...args}>
    <WidgetHeading props={args} />
  </Widgets>
);

const TemplateWidgetText: ComponentStory<typeof Widgets> = (args) => (
  <Widgets {...args}>
    <WidgetText props={args} />
  </Widgets>
);

export const PartWidgetCategories = TemplateWidgetCategories.bind({});
PartWidgetCategories.args = {};

export const PartWidgetHeading = TemplateWidgetHeading.bind({});
PartWidgetHeading.args = {
  headingLevel: '2',
  label: 'heading',
};

export const PartWidgetText = TemplateWidgetText.bind({});
PartWidgetText.args = {
  isLink: false,
  label: 'お問い合わせはこちら',
};

export const PartWidgetLinkText = TemplateWidgetText.bind({});
PartWidgetLinkText.args = {
  isLink: true,
  label: 'お問い合わせはこちら',
};

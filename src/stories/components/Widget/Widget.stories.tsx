import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
} as ComponentMeta<typeof Widgets>;

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

export const PageWidgetCategories = TemplateWidgetCategories.bind({});
PageWidgetCategories.args = {};

export const PageWidgetHeading = TemplateWidgetHeading.bind({});
PageWidgetHeading.args = {
  headingLevel: '2',
  label: 'heading',
};

export const PageWidgetText = TemplateWidgetText.bind({});
PageWidgetText.args = {
  isLink: false,
  label: 'お問い合わせはこちら',
};

export const PageWidgetLinkText = TemplateWidgetText.bind({});
PageWidgetLinkText.args = {
  isLink: true,
  label: 'お問い合わせはこちら',
};

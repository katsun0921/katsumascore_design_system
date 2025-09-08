import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ListTaxonomy } from './ListTaxonomy';

export default {
  title: 'Component/List',
  component: ListTaxonomy,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ListTaxonomy>;

const TemplateListTaxonomy: ComponentStory<typeof ListTaxonomy> = (args) => {
  return <ListTaxonomy {...args} />;
};

export const Taxonomy = TemplateListTaxonomy.bind({});
Taxonomy.args = {
  label: 'CATEGORIES',
  lists: [
    {
      name: 'アニメ',
      count: 8,
      link: '#',
    },
    {
      name: 'ドラマ',
      count: 1,
      link: '#',
    },
    {
      name: '映画',
      count: 12,
      link: '#',
    },
  ],
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { UtilityList } from '../UtilityComponent';
import { displayGroups, DisplayPreview } from './DisplayUtilities';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UtilityList> = {
  title: 'Utilities/Display',
  component: UtilityList,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Utilities for controlling the display box type of an element. Based on Tailwind CSS display utilities.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllDisplays: Story = {
  args: {
    groups: displayGroups,
    showPreview: true,
    getPreviewContent: (item) => <DisplayPreview className={item.className} />,
  },
};

export const Block: Story = {
  args: {
    groups: [{
      label: 'Block',
      description: 'Block-level elements',
      items: displayGroups[0].items.filter(item =>
        item.className === 'u-block' ||
        item.className === 'u-inline-block' ||
        item.className === 'u-inline'
      ),
    }],
    showPreview: true,
    getPreviewContent: (item) => <DisplayPreview className={item.className} />,
  },
};

export const Flexbox: Story = {
  args: {
    groups: [{
      label: 'Flexbox',
      description: 'Flexbox display values',
      items: displayGroups[0].items.filter(item =>
        item.className === 'u-flex' ||
        item.className === 'u-inline-flex'
      ),
    }],
    showPreview: true,
    getPreviewContent: (item) => <DisplayPreview className={item.className} />,
  },
};

export const Grid: Story = {
  args: {
    groups: [{
      label: 'Grid',
      description: 'CSS Grid display values',
      items: displayGroups[0].items.filter(item =>
        item.className === 'u-grid' ||
        item.className === 'u-inline-grid'
      ),
    }],
    showPreview: true,
    getPreviewContent: (item) => <DisplayPreview className={item.className} />,
  },
};

export const Table: Story = {
  args: {
    groups: [{
      label: 'Table',
      description: 'Table display values',
      items: displayGroups[0].items.filter(item =>
        item.className.includes('table')
      ),
    }],
    showPreview: true,
    getPreviewContent: (item) => <DisplayPreview className={item.className} />,
  },
};

export const Other: Story = {
  args: {
    groups: [{
      label: 'Other',
      description: 'Other display values',
      items: displayGroups[0].items.filter(item =>
        item.className === 'u-flow-root' ||
        item.className === 'u-contents' ||
        item.className === 'u-list-item' ||
        item.className === 'u-hidden'
      ),
    }],
    showPreview: true,
    getPreviewContent: (item) => <DisplayPreview className={item.className} />,
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { UtilityList } from '../UtilityComponent';
import { fontSizeGroups, FontSizePreview } from './FontSizeUtilities';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UtilityList> = {
  title: 'Utilities/Font Size',
  component: UtilityList,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Utilities for controlling the font size of an element. Based on Tailwind CSS font-size utilities.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllFontSizes: Story = {
  args: {
    groups: fontSizeGroups,
    showPreview: true,
    getPreviewContent: (item) => <FontSizePreview className={item.className} />,
  },
};

export const SmallSizes: Story = {
  args: {
    groups: [{
      label: 'Small Sizes',
      description: 'Small font sizes',
      items: fontSizeGroups[0].items.filter(item =>
        item.className === 'u-text-xs' ||
        item.className === 'u-text-sm' ||
        item.className === 'u-text-base'
      ),
    }],
    showPreview: true,
    getPreviewContent: (item) => <FontSizePreview className={item.className} />,
  },
};

export const MediumSizes: Story = {
  args: {
    groups: [{
      label: 'Medium Sizes',
      description: 'Medium font sizes',
      items: fontSizeGroups[0].items.filter(item =>
        item.className === 'u-text-lg' ||
        item.className === 'u-text-xl' ||
        item.className === 'u-text-2xl' ||
        item.className === 'u-text-3xl'
      ),
    }],
    showPreview: true,
    getPreviewContent: (item) => <FontSizePreview className={item.className} />,
  },
};

export const LargeSizes: Story = {
  args: {
    groups: [{
      label: 'Large Sizes',
      description: 'Large font sizes',
      items: fontSizeGroups[0].items.filter(item =>
        item.className === 'u-text-4xl' ||
        item.className === 'u-text-5xl' ||
        item.className === 'u-text-6xl' ||
        item.className === 'u-text-7xl' ||
        item.className === 'u-text-8xl' ||
        item.className === 'u-text-9xl'
      ),
    }],
    showPreview: true,
    getPreviewContent: (item) => <FontSizePreview className={item.className} />,
  },
};

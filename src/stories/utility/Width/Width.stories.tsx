import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { UtilityList } from '../UtilityComponent';
import { widthGroups, WidthPreview } from './WidthUtilities';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UtilityList> = {
  title: 'Utilities/Width',
  component: UtilityList,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Utilities for controlling the width of an element. Based on Tailwind CSS width utilities.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllWidths: Story = {
  args: {
    groups: widthGroups,
    showPreview: true,
    getPreviewContent: (item) => <WidthPreview className={item.className} />,
  },
};

export const FixedWidths: Story = {
  args: {
    groups: widthGroups.filter(group => group.label === 'Fixed Widths'),
    showPreview: true,
    getPreviewContent: (item) => <WidthPreview className={item.className} />,
  },
};

export const PercentageWidths: Story = {
  args: {
    groups: widthGroups.filter(group => group.label === 'Percentage Widths'),
    showPreview: true,
    getPreviewContent: (item) => <WidthPreview className={item.className} />,
  },
};

export const SpecialWidths: Story = {
  args: {
    groups: widthGroups.filter(group => group.label === 'Special Widths'),
    showPreview: true,
    getPreviewContent: (item) => <WidthPreview className={item.className} />,
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { UtilityList } from '../UtilityComponent';
import { marginGroups, MarginPreview } from './MarginUtilities';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UtilityList> = {
  title: 'Utilities/Margin',
  component: UtilityList,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Utilities for controlling an element\'s margin. Based on Tailwind CSS margin utilities.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllMargins: Story = {
  args: {
    groups: marginGroups,
    showPreview: true,
    getPreviewContent: (item) => <MarginPreview className={item.className} />,
  },
};

export const AllSides: Story = {
  args: {
    groups: marginGroups.filter(group => group.label === 'All Sides'),
    showPreview: true,
    getPreviewContent: (item) => <MarginPreview className={item.className} />,
  },
};

export const Top: Story = {
  args: {
    groups: marginGroups.filter(group => group.label === 'Top'),
    showPreview: true,
    getPreviewContent: (item) => <MarginPreview className={item.className} />,
  },
};

export const Right: Story = {
  args: {
    groups: marginGroups.filter(group => group.label === 'Right'),
    showPreview: true,
    getPreviewContent: (item) => <MarginPreview className={item.className} />,
  },
};

export const Bottom: Story = {
  args: {
    groups: marginGroups.filter(group => group.label === 'Bottom'),
    showPreview: true,
    getPreviewContent: (item) => <MarginPreview className={item.className} />,
  },
};

export const Left: Story = {
  args: {
    groups: marginGroups.filter(group => group.label === 'Left'),
    showPreview: true,
    getPreviewContent: (item) => <MarginPreview className={item.className} />,
  },
};

export const Horizontal: Story = {
  args: {
    groups: marginGroups.filter(group => group.label === 'Horizontal'),
    showPreview: true,
    getPreviewContent: (item) => <MarginPreview className={item.className} />,
  },
};

export const Vertical: Story = {
  args: {
    groups: marginGroups.filter(group => group.label === 'Vertical'),
    showPreview: true,
    getPreviewContent: (item) => <MarginPreview className={item.className} />,
  },
};

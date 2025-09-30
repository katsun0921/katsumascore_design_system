import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { UtilityList } from '../UtilityComponent';
import { paddingGroups, PaddingPreview } from './PaddingUtilities';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UtilityList> = {
  title: 'Utilities/Padding',
  component: UtilityList,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Utilities for controlling an element\'s padding. Based on Tailwind CSS padding utilities.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllPaddings: Story = {
  args: {
    groups: paddingGroups,
    showPreview: true,
    getPreviewContent: (item) => <PaddingPreview className={item.className} />,
  },
};

export const AllSides: Story = {
  args: {
    groups: paddingGroups.filter(group => group.label === 'All Sides'),
    showPreview: true,
    getPreviewContent: (item) => <PaddingPreview className={item.className} />,
  },
};

export const Top: Story = {
  args: {
    groups: paddingGroups.filter(group => group.label === 'Top'),
    showPreview: true,
    getPreviewContent: (item) => <PaddingPreview className={item.className} />,
  },
};

export const Right: Story = {
  args: {
    groups: paddingGroups.filter(group => group.label === 'Right'),
    showPreview: true,
    getPreviewContent: (item) => <PaddingPreview className={item.className} />,
  },
};

export const Bottom: Story = {
  args: {
    groups: paddingGroups.filter(group => group.label === 'Bottom'),
    showPreview: true,
    getPreviewContent: (item) => <PaddingPreview className={item.className} />,
  },
};

export const Left: Story = {
  args: {
    groups: paddingGroups.filter(group => group.label === 'Left'),
    showPreview: true,
    getPreviewContent: (item) => <PaddingPreview className={item.className} />,
  },
};

export const Horizontal: Story = {
  args: {
    groups: paddingGroups.filter(group => group.label === 'Horizontal'),
    showPreview: true,
    getPreviewContent: (item) => <PaddingPreview className={item.className} />,
  },
};

export const Vertical: Story = {
  args: {
    groups: paddingGroups.filter(group => group.label === 'Vertical'),
    showPreview: true,
    getPreviewContent: (item) => <PaddingPreview className={item.className} />,
  },
};

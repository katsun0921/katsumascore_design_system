import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { UtilityList } from '../UtilityComponent';
import { textAlignGroups, TextAlignPreview } from './TextAlignUtilities';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UtilityList> = {
  title: 'Utilities/Text Align',
  component: UtilityList,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Utilities for controlling the text alignment of an element. Based on Tailwind CSS text-align utilities.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTextAlign: Story = {
  args: {
    groups: textAlignGroups,
    showPreview: true,
    getPreviewContent: (item) => <TextAlignPreview className={item.className} />,
  },
};

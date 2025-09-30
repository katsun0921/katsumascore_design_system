import type { Meta, StoryObj } from '@storybook/react-vite';
import { UtilityList } from './UtilityComponent';
import { marginGroups, MarginPreview } from './Margin/MarginUtilities';
import { paddingGroups, PaddingPreview } from './Padding/PaddingUtilities';
import { displayGroups, DisplayPreview } from './Display/DisplayUtilities';
import { textAlignGroups, TextAlignPreview } from './TextAlign/TextAlignUtilities';
import { fontSizeGroups, FontSizePreview } from './FontSize/FontSizeUtilities';
import { widthGroups, WidthPreview } from './Width/WidthUtilities';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UtilityList> = {
  title: 'Utilities/Index',
  component: UtilityList,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MarginUtilities: Story = {
  args: {
    groups: marginGroups,
    showPreview: true,
    getPreviewContent: (item) => <MarginPreview className={item.className} />,
  },
};

export const PaddingUtilities: Story = {
  args: {
    groups: paddingGroups,
    showPreview: true,
    getPreviewContent: (item) => <PaddingPreview className={item.className} />,
  },
};

export const DisplayUtilities: Story = {
  args: {
    groups: displayGroups,
    showPreview: true,
    getPreviewContent: (item) => <DisplayPreview className={item.className} />,
  },
};

export const TextAlignUtilities: Story = {
  args: {
    groups: textAlignGroups,
    showPreview: true,
    getPreviewContent: (item) => <TextAlignPreview className={item.className} />,
  },
};

export const FontSizeUtilities: Story = {
  args: {
    groups: fontSizeGroups,
    showPreview: true,
    getPreviewContent: (item) => <FontSizePreview className={item.className} />,
  },
};

export const WidthUtilities: Story = {
  args: {
    groups: widthGroups,
    showPreview: true,
    getPreviewContent: (item) => <WidthPreview className={item.className} />,
  },
};

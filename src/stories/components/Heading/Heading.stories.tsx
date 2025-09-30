
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Heading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Heading>;



type HeadingProps = React.ComponentProps<typeof Heading>;
const Template = (args: HeadingProps) => (
  <div style={{ backgroundColor: args.color }}>
    <Heading {...args} />
  </div>
);

export const TitleHeading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '1',
    type: 'title',
    color: 'rgb(0, 0, 0)',
  },
};

export const PostHeading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '3',
    type: 'post',
    color: 'rgb(255, 255, 255)',
    isLink: true,
  },
};

export const PostRelatedHeading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '3',
    type: 'related',
    color: 'rgb(255, 255, 255)',
  },
};


// Background styles

export const BgAccentHeading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '2',
    type: 'bg-accent',
    color: 'rgb(255, 255, 255)',
    label: 'アクセント背景見出し',
  },
};

export const BgGradientHeading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '2',
    type: 'bg-gradient',
    color: 'rgb(255, 255, 255)',
    label: 'グラデーション背景見出し',
  },
};





// Ribbon style
export const RibbonHeading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '2',
    type: 'ribbon',
    color: 'rgb(255, 255, 255)',
    label: 'リボン風見出し',
  },
};

// Background with wrapping image style
export const BgWrapHeading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '2',
    type: 'bg-wrap',
    color: 'rgb(255, 255, 255)',
    label: '背景に回り込むイメージの見出し',
  },
};

// Quotation marks style
export const QuoteHeading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '2',
    type: 'quote',
    color: 'rgb(255, 255, 255)',
    label: 'カギ括弧を付けた見出し',
  },
};

// Gold text gradient style
export const GoldTextHeading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '2',
    type: 'gold-text',
    color: 'rgb(0, 0, 0)',
    label: '文字ゴールドグラデーション',
  },
};




// Content styles (moved from _content.scss)
export const ContentH2Heading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '2',
    type: 'content-h2',
    color: 'rgb(255, 255, 255)',
    label: 'コンテンツH2見出し',
  },
};

export const ContentH3Heading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '3',
    type: 'content-h3',
    color: 'rgb(255, 255, 255)',
    label: 'コンテンツH3見出し',
  },
};

export const ContentH4Heading: StoryObj<typeof Heading> = {
  render: Template,
  args: {
    headingLevel: '4',
    type: 'content-h4',
    color: 'rgb(255, 255, 255)',
    label: 'コンテンツH4見出し',
  },
};

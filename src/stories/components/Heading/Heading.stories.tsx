
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Heading } from './Heading';

export default {
  title: 'Component/Heading',
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

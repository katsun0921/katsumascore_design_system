// ...existing code...
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tags } from './Tag';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Tag',
  component: Tags,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Tags>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

type Story = StoryObj<typeof Tags>;

const Template: Story['render'] = (args) => <Tags {...args} />;

export const PrimaryTags: Story = {
  render: Template,
  args: {
    tags: [
      { label: 'Wordpress Tag' },
      { label: 'Wordpress Tag2' },
    ],
  },
};

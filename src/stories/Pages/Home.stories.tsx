import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomePage } from './Home';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Home',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof HomePage>;

export const Home: Story = {};


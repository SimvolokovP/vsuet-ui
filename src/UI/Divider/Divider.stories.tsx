import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomStyle: Story = {
  args: {
    className: 'h-1 bg-gradient-to-r from-transparent via-primary to-transparent',
  },
};

export const InContext: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <p>Текст выше разделителя</p>
      <Divider />
      <p>Текст ниже разделителя</p>
    </div>
  ),
};
import { Meta, StoryObj } from '@storybook/react';
import Spinner from '../../components/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Base/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'base',
          'primary',
          'secondary',
          'accent',
          'neutral',
          'info',
          'success',
          'warning',
          'error',
        ],
      },
    },
  },
  args: {
    variant: 'base',
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: 'base',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export default meta;

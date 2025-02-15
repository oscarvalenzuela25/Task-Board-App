import { Meta, StoryObj } from '@storybook/react';
import TitleSkeleton from '../../features/Home/commons/components/TitleSkeleton';

const meta: Meta<typeof TitleSkeleton> = {
  title: 'Home/TitleSkeleton',
  component: TitleSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
    },
  },
  args: {
    children: <h1 className="text-text-custom">Hola mundo</h1>,
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isLoading: true,
  },
};

export const IsLoadingOff: Story = {
  args: {
    isLoading: false,
  },
};

export default meta;

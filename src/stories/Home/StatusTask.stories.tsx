import { Meta, StoryObj } from '@storybook/react';
import StatusTask from '../../features/Home/commons/components/StatusTask';

const meta: Meta<typeof StatusTask> = {
  title: 'Home/StatusTask',
  component: StatusTask,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['DEFAULT', 'IN_PROGRESS', 'DONE', 'CANCELLED', 'ADD'],
    },
  },
  args: {},
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    status: 'DEFAULT',
  },
};

export default meta;

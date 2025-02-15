import { Meta, StoryObj } from '@storybook/react';
import OptionDrawer from './../../features/Home/commons/components/OptionDrawer';
import { fn } from '@storybook/test';

const meta: Meta<typeof OptionDrawer> = {
  title: 'Home/OptionDrawer',
  component: OptionDrawer,
  render: props => (
    <div className="w-96 h-[400px]">
      <OptionDrawer {...props} />
    </div>
  ),
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
  },
  args: {
    handleGoToTaskBoard: fn(),
    handleCreateNewTaskBoard: fn(),
    handleCloseDrawer: fn(),
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isOpen: true,
    taskBoards: [
      {
        uuid: '1',
        title: 'Task Board 1',
      },
    ],
  },
};

export default meta;

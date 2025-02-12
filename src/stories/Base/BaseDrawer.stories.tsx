import { Meta, StoryObj } from '@storybook/react';
import BaseDrawer from '../../components/BaseDrawer';
import { fn } from '@storybook/test';

const meta: Meta<typeof BaseDrawer> = {
  title: 'Base/BaseDrawer',
  component: BaseDrawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    children: {
      control: 'select',
      options: ['HelloWorl', 'GoodbyeWorld'],
      mapping: {
        HelloWorld: <h1>Hello World</h1>,
        GoodbyeWorld: <h1>Goodbye World</h1>,
      },
    },
  },
  args: {
    isOpen: false,
    handleCloseDrawer: fn(),
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isOpen: true,
    children: <h1>Hello World</h1>,
  },
};

export const Close: Story = {
  args: {
    isOpen: false,
    children: <h1>Goodbye World</h1>,
  },
};

export default meta;

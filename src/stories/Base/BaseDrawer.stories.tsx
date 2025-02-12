import { Meta, StoryObj } from '@storybook/react';
import BaseDrawer from '../../components/BaseDrawer';
import { fn } from '@storybook/test';

const meta: Meta<typeof BaseDrawer> = {
  title: 'Base/BaseDrawer',
  component: BaseDrawer,
  render: args => (
    <div className="w-full h-[250px]">
      <BaseDrawer {...args}>
        <div className="flex justify-center w-[300px] min-h-full bg-white-custom p-5">
          <h1 className="text-text-custom">Hello World</h1>
        </div>
      </BaseDrawer>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
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
  },
};

export const Close: Story = {
  args: {
    isOpen: false,
  },
};

export default meta;

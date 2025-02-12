import { Meta, StoryObj } from '@storybook/react';
import AddIcon from '../../icons/AddIcon';
import TrashIcon from '../../icons/TrashIcon';
import Button from '../../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Base/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'gray', 'delete'],
    },
    isLoading: {
      control: 'boolean',
    },
    startIcon: {
      control: 'select',
      options: ['AddIcon', 'TrashIcon'],
      mapping: {
        AddIcon: <AddIcon />,
        TrashIcon: <TrashIcon />,
      },
    },
    endIcon: {
      control: 'select',
      options: ['AddIcon', 'TrashIcon'],
      mapping: {
        AddIcon: <AddIcon />,
        TrashIcon: <TrashIcon />,
      },
    },
    children: {
      control: 'text',
    },
  },
  args: {
    variant: 'primary',
    isLoading: false,
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    children: 'Primary',
  },
};

export const StartIconButton: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    startIcon: <AddIcon />,
  },
};

export const EndIconButton: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    endIcon: <TrashIcon />,
  },
};

export const DisabledButton: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    disabled: true,
  },
};

export default meta;

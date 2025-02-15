import { Meta, StoryObj } from '@storybook/react';
import EmojiTask from '../../features/Home/commons/components/EmojiTask';

const meta: Meta<typeof EmojiTask> = {
  title: 'Home/EmojiTask',
  component: EmojiTask,
  tags: ['autodocs'],
  argTypes: {
    emoji: {
      control: 'select',
      options: ['👨‍💻', '💬', '☕', '🏋️', '📚'],
      mapping: {
        '👨‍💻': 'personWithNotebook',
        '💬': 'commentBalloon',
        '☕': 'coffeeCup',
        '🏋️': 'weightLifter',
        '📚': 'stackOfBooks',
      },
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    emoji: 'personWithNotebook',
  },
};

export default meta;

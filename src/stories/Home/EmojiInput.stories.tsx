import { Meta, StoryObj } from "@storybook/react";
import EmojiInput from "../../features/home/components/EmojiInput";
import { fn } from "@storybook/test";

const meta: Meta<typeof EmojiInput> = {
  title: "Home/EmojiInput",
  component: EmojiInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    emoji: {
      control: "select",
      options: ["👨‍💻", "💬", "☕", "🏋️"],
      mapping: {
        "👨‍💻": "personWithNotebook",
        "💬": "commentBalloon",
        "☕": "coffeeCup",
        "🏋️": "weightLifter",
      },
    },
    emojiSelected: {
      control: "select",
      options: ["👨‍💻", "💬", "☕", "🏋️"],
      mapping: {
        "👨‍💻": "personWithNotebook",
        "💬": "commentBalloon",
        "☕": "coffeeCup",
        "🏋️": "weightLifter",
      },
    },
  },
  args: {
    handleSelectEmoji: fn(),
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    emoji: "personWithNotebook",
    emojiSelected: null,
  },
};

export const Selected: Story = {
  args: {
    emoji: "personWithNotebook",
    emojiSelected: "personWithNotebook",
  },
};

export default meta;

import { Meta, StoryObj } from "@storybook/react";
import ThemeController from "../../features/home/components/ThemeController";
import { fn } from "@storybook/test";

const meta: Meta<typeof ThemeController> = {
  title: "Home/ThemeController",
  component: ThemeController,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isDarkMode: {
      control: "boolean",
    },
  },
  args: {
    handleThemeSwitch: fn(),
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isDarkMode: true,
  },
};

export const LightMode: Story = {
  args: {
    isDarkMode: false,
  },
};

export default meta;

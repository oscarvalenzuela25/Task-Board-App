import { Meta, StoryObj } from "@storybook/react";
import StatusInput from "../../features/home/components/StatusInput";
import { fn } from "@storybook/test";

const meta: Meta<typeof StatusInput> = {
  title: "Home/StatusInput",
  component: StatusInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["DEFAULT", "IN_PROGRESS", "DONE", "CANCELLED"],
    },
    statusSelected: {
      control: "select",
      options: ["DEFAULT", "IN_PROGRESS", "DONE", "CANCELLED"],
    },
  },
  args: {
    handleSelectedStatus: fn(),
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    status: "DEFAULT",
    statusSelected: "DEFAULT",
  },
};

export const UnSelected: Story = {
  args: {
    status: "DEFAULT",
    statusSelected: "IN_PROGRESS",
  },
};

export default meta;

import { Meta, StoryObj } from "@storybook/react";
import CardSkeleton from "../../features/home/components/CardSkeleton";

const meta: Meta<typeof CardSkeleton> = {
  title: "Home/CardSkeleton",
  component: CardSkeleton,
  render: ({ isLoading, children }) => (
    <div className="w-96">
      <CardSkeleton isLoading={isLoading}>{children}</CardSkeleton>
    </div>
  ),
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isLoading: { control: "boolean" },
    children: {
      control: "select",
      options: ["HelloWorld", "HolaMundo"],
      mapping: {
        HelloWorld: <h1 className="text-text-custom">Hello World</h1>,
        HolaMundo: <h1 className="text-text-custom">Hola Mundo</h1>,
      },
    },
  },
  args: {
    isLoading: true,
    children: <h1 className="text-text-custom">Hola Mundo</h1>,
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isLoading: true,
  },
};

export const Children: Story = {
  args: {
    isLoading: false,
  },
};

export default meta;

import { Meta, StoryObj } from "@storybook/react";
import Navbar from "../../features/home/components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const meta: Meta<typeof Navbar> = {
  title: "Home/Navbar",
  component: Navbar,
  render: () => (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-[400px]">
        <Navbar />
      </div>
    </QueryClientProvider>
  ),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export default meta;

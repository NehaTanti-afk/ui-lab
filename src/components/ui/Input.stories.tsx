import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { expect } from "storybook/test";

const meta = {
  title: "Components/Input",
  component: Input,
  args: { placeholder: "Enter your email" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const Disabled: Story = { args: { disabled: true } };
export const Invalid: Story = { args: { "aria-invalid": true } };

export const WithError: Story = {
  args: { invalid: true, errorMessage: "Please enter a valid email" },
};

export const WithAdornment: Story = {
  args: { startAdornment: <Search />, placeholder: "Search" },
};

export const KeyboardInteraction: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.tab();
    const input = canvas.getByRole("textbox");
    await expect(input).toHaveFocus();
    await userEvent.type(input, "hello");
    await expect(input).toHaveValue("hello");
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Input size="sm" placeholder="Small" />
      <Input size="default" placeholder="Default" />
      <Input size="lg" placeholder="Large" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="With adornment" startAdornment={<Search />} />
      <Input
        placeholder="Invalid"
        invalid
        errorMessage="This field is required"
      />
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "@/components/ui/badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: { children: "Badge" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DestructiveSolid: Story = {
  args: { variant: "destructive", fill: "solid", children: "Error" },
};

export const DestructiveSubtle: Story = {
  args: { variant: "destructive", fill: "subtle", children: "Error" },
};

export const DestructiveOutline: Story = {
  args: { variant: "destructive", fill: "outline", children: "Error" },
};

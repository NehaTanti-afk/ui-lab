import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const Example = ({ variant }: { variant?: "default" | "line" }) => (
  <Tabs defaultValue="account" className="w-96">
    <TabsList variant={variant}>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">Account settings go here.</TabsContent>
    <TabsContent value="password">Change your password here.</TabsContent>
    <TabsContent value="billing">Billing details go here.</TabsContent>
  </Tabs>
);

export const Default: Story = { render: () => <Example /> };
export const Line: Story = { render: () => <Example variant="line" /> };

export const KeyboardInteraction: Story = {
  render: () => <Example />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.tab();
    await expect(canvas.getByRole("tab", { name: "Account" })).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(canvas.getByRole("tab", { name: "Password" })).toHaveFocus();
    await userEvent.keyboard("{End}");
    await expect(canvas.getByRole("tab", { name: "Billing" })).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(canvas.getByRole("tab", { name: "Account" })).toHaveFocus();
  },
};

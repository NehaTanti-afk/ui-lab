import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";

import { Button } from "@/components/ui/button";
import { ChevronRight, X } from "lucide-react";

const meta = {
  title: "Components/Button",
  component: Button,
  args: { children: "Click me", onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Destructive: Story = { args: { variant: "destructive" } };
export const Link: Story = { args: { variant: "link" } };

export const SizeXs: Story = { args: { size: "xs" } };
export const SizeSm: Story = { args: { size: "sm" } };
export const SizeLg: Story = { args: { size: "lg" } };

export const Disabled: Story = { args: { disabled: true } };

export const Subtle: Story = { args: { variant: "subtle" } };

export const SizeXl: Story = { args: { size: "xl" } };

export const WithStartIcon: Story = {
  args: { startIcon: <X /> },
};

export const WithEndIcon: Story = {
  args: { endIcon: <ChevronRight /> },
};

export const Loading: Story = { args: { loading: true } };

export const IconOnly: Story = {
  args: {
    startIcon: <X />,
    children: undefined,
    size: "icon",
    "aria-label": "Close",
  },
};

export const ClickInteraction: Story = {
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const KeyboardInteraction: Story = {
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.tab();
    await expect(canvas.getByRole("button")).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const DisabledInteraction: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("button")).toBeDisabled();
  },
};

export const LoadingInteraction: Story = {
  args: { loading: true },
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button");
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute("aria-busy", "true");
  },
};

export const IconOnlyInteraction: Story = {
  args: {
    startIcon: <X />,
    children: undefined,
    size: "icon",
    "aria-label": "Close",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("button", { name: "Close" }),
    ).toBeInTheDocument();
  },
};

export const AsChild: Story = {
  args: { asChild: true, children: <a href="/x">I am a link</a> },
  play: async ({ canvas }) => {
    const link = canvas.getByRole("link");
    await expect(link).toHaveAttribute("href", "/x");
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      {(
        [
          "default",
          "outline",
          "secondary",
          "ghost",
          "destructive",
          "link",
        ] as const
      ).map((variant) => (
        <div key={variant} className="flex items-center gap-3">
          {(["xs", "sm", "default", "lg"] as const).map((size) => (
            <Button key={size} variant={variant} size={size}>
              {variant} {size}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

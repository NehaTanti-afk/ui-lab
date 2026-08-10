import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => (
  <>
    <CardHeader>
      <CardTitle>Project settings</CardTitle>
      <CardDescription>Manage how your project behaves.</CardDescription>
    </CardHeader>
    <CardContent>Some body text explaining the settings.</CardContent>
    <CardFooter>
      <Button size="sm">Save</Button>
    </CardFooter>
  </>
);

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <Content />
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["compact", "default", "comfortable"] as const).map((density) => (
        <Card key={density} density={density} className="w-64">
          <Content />
        </Card>
      ))}
    </div>
  ),
};

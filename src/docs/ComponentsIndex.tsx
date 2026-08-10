import { Link } from "react-router";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const components = [
  { name: "Button", slug: "button", description: "Triggers an action." },
  { name: "Badge", slug: "badge", description: "Labels and statuses." },
  { name: "Input", slug: "input", description: "Single-line text entry." },
  { name: "Card", slug: "card", description: "Groups related content." },
  { name: "Dialog", slug: "dialog", description: "A modal overlay." },
  { name: "Tabs", slug: "tabs", description: "Switch between panels." },
];

export default function ComponentsIndex() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-medium">Components</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {components.map((c) => (
          <Link key={c.slug} to={`/docs/components/${c.slug}`}>
            <Card density="compact">
              <CardHeader>
                <CardTitle>{c.name}</CardTitle>
                <CardDescription>{c.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

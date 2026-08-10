import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const stats = [
  { label: "Total revenue", value: "₹4,52,318", change: "+12.5%" },
  { label: "Active users", value: "2,340", change: "+4.1%" },
  { label: "Open tickets", value: "38", change: "-8.2%" },
  { label: "Uptime", value: "99.9%", change: "+0.1%" },
];

const rows = [
  { name: "Onboarding flow", owner: "Priya", status: "active" },
  { name: "Billing migration", owner: "Arun", status: "blocked" },
  { name: "Search revamp", owner: "Meera", status: "done" },
  { name: "Mobile nav", owner: "Kiran", status: "active" },
];

const statusFill = {
  active: { variant: "default", fill: "subtle" },
  blocked: { variant: "destructive", fill: "subtle" },
  done: { variant: "secondary", fill: "subtle" },
} as const;

export default function Dashboard() {
  return (
    <div className="flex gap-6">
      <aside className="w-48 shrink-0 space-y-1 text-sm">
        <p className="px-2 py-1.5 font-medium text-muted-foreground">Menu</p>
        <nav className="flex flex-col gap-1">
          <button className="rounded-md px-2 py-1.5 text-left hover:bg-muted">
            Overview
          </button>
          <button className="rounded-md px-2 py-1.5 text-left hover:bg-muted">
            Projects
          </button>
          <button className="rounded-md px-2 py-1.5 text-left hover:bg-muted">
            Team
          </button>
          <button className="rounded-md px-2 py-1.5 text-left hover:bg-muted">
            Settings
          </button>
        </nav>
      </aside>

      <div className="min-w-0 flex-1 space-y-6">
        <h1 className="text-2xl font-medium">Overview</h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} density="compact">
              <CardHeader>
                <CardDescription>{stat.label}</CardDescription>
                <CardTitle>{stat.value}</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground">
                {stat.change} from last month
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="projects">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="py-2 font-medium">Project</th>
                  <th className="py-2 font-medium">Owner</th>
                  <th className="py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.name} className="border-b">
                    <td className="py-2">{row.name}</td>
                    <td className="py-2">{row.owner}</td>
                    <td className="py-2">
                      <Badge {...statusFill[row.status]}>{row.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>

          <TabsContent value="activity">
            <p className="py-4 text-muted-foreground">No recent activity.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

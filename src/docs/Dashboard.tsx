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

export default function Dashboard() {
  return (
    <div className="flex gap-6">
      <aside className="w-48 shrink-0 space-y-1 text-sm">
        <p className="px-2 py-1.5 font-medium text-muted-foreground">Menu</p>
        {["Overview", "Projects", "Team", "Settings"].map((item) => (
          <a
            key={item}
            href="#"
            className="block rounded-md px-2 py-1.5 hover:bg-muted"
          >
            {item}
          </a>
        ))}
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
      </div>
    </div>
  );
}

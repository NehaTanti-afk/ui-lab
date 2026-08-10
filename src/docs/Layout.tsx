import { Link, Outlet } from "react-router";

import { Button } from "@/components/ui/button";

export default function Layout() {
  return (
    <div className="min-h-svh">
      <header className="flex items-center justify-between border-b px-6 py-3">
        <Link to="/" className="font-medium">
          ui-lab
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/docs/installation">Installation</Link>
          <Link to="/docs/components">Components</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            Theme
          </Button>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}

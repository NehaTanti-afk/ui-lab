import { Link, Outlet } from "react-router";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Layout() {
  return (
    <div className="min-h-svh">
      <header className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3 sm:px-6">
        <Link to="/" className="font-medium">
          ui-lab
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Account
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <Outlet />
      </main>
    </div>
  );
}

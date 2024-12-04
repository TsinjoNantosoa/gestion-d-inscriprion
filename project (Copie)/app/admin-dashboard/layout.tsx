import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="p-4">
          <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
          <ul className="space-y-2">
            <li>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin-dashboard">Dashboard</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin-dashboard/users">Users</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin-dashboard/courses">Courses</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin-dashboard/reports">Reports</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}


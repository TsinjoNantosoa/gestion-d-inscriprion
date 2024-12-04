import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid gap-4">
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p className="mb-4">Manage users, roles, and permissions.</p>
          <Button asChild>
            <Link href="/admin-dashboard/users">Manage Users</Link>
          </Button>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Course Management</h2>
          <p className="mb-4">Create, edit, and delete courses.</p>
          <Button asChild>
            <Link href="/admin-dashboard/courses">Manage Courses</Link>
          </Button>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p className="mb-4">View and generate system reports.</p>
          <Button asChild>
            <Link href="/admin-dashboard/reports">View Reports</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}


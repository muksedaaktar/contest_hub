import { NavLink, Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-base-100">

      {/* Sidebar */}
      <aside className="w-64 bg-base-200">
        <h2 className="text-2xl font-bold text-center py-6 border-b">
          Admin Panel
        </h2>

        <nav className="p-4 space-y-3">
          <NavLink
            to="manage-users"
            className={({ isActive }) =>
              `block p-2 rounded transition ${
                isActive
                  ? "bg-orange-500 text-white font-semibold"
                  : "hover:bg-orange-400"
              }`
            }
          >
            Manage Users
          </NavLink>

          <NavLink
            to="manage-contests"
            className={({ isActive }) =>
              `block p-2 rounded transition ${
                isActive
                  ? "bg-orange-500 text-white font-semibold"
                  : "hover:bg-orange-400"
              }`
            }
          >
            Manage Contests
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;

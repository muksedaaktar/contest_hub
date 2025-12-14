import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const CreatorDashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-base-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-blue-50 text-blue-600 flex flex-col shadow-lg">
        {/* Headline */}
        <div className="p-6 border-b border-blue-200">
          <h1 className="text-2xl font-bold text-center">Creator Panel</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-3">
          <NavLink
            to="add-contest"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-orange-600 transition ${
                isActive ? "bg-orange-400 font-semibold text-white" : ""
              }`
            }
          >
            Add Contest
          </NavLink>
          <NavLink
            to="my-contests"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-orange-600 transition ${
                isActive ? "bg-orange-400 font-semibold text-white" : ""
              }`
            }
          >
            My Created Contests
          </NavLink>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Left: Form or Page content */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Outlet />
          </motion.div>

          {/* Right: Decorative Image */}
          <motion.div
            className="flex-1 hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Dashboard Visual"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </motion.div>
        </div>
      </main>

    </div>
  );
};

export default CreatorDashboardLayout;

import { motion } from "framer-motion";
import React from "react";

import { useNavigate } from "react-router-dom";

   

const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
     

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-10"
        >
          <div>
            <h1 className="text-4xl font-bold text-blue-600">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Welcome back! Manage your contests and profile
            </p>
          </div>

          
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Joined Contests", value: 12 },
            { title: "Total Wins", value: 3 },
            { title: "Profile Views", value: 245 },
            { title: "Status", value: "Active" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">
                {item.value}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <img
              src="https://i.pravatar.cc/150"
              alt="Profile"
              className="w-28 h-28 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-gray-500 mb-4">Contest Enthusiast</p>

            <button
            onClick={() => navigate("/edit-profile")}
           className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
          Edit Profile
          </button>
          </motion.div>

          {/* Recent Contests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">
              Recent Contests
            </h3>

            <ul className="space-y-4">
              {[
                "UI Design Challenge",
                "Hackathon 2025",
                "Photography Contest",
              ].map((contest, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-xl"
                >
                  <span className="font-medium">{contest}</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg">
                    View
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

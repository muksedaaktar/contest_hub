import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";
 

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("participated");

  // Demo data (replace with real backend data)
  const participatedContests = [
    { name: "UI Design Challenge", status: "Paid", deadline: "2025-12-20" },
    { name: "Hackathon 2025", status: "Paid", deadline: "2025-12-25" },
  ];

  const winningContests = [
    { name: "Photography Contest", prize: "$500" },
    { name: "Logo Design Contest", prize: "$300" },
  ];

  const profile = {
    displayName: user?.displayName || "John Doe",
    photoURL: user?.photoURL || "https://i.pravatar.cc/150",
    bio: "Contest Enthusiast",
    address: "123 Street, City",
    participated: participatedContests.length,
    won: winningContests.length,
  };

  const winPercentage =
    profile.participated > 0
      ? Math.round((profile.won / profile.participated) * 100)
      : 0;

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
              Welcome back, {profile.displayName}!
            </p>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {[
            { key: "participated", label: "My Participated Contests" },
            { key: "winning", label: "My Winning Contests" },
            { key: "profile", label: "My Profile" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                activeTab === tab.key
                  ? "bg-blue-500 text-white"
                  : "bg-white border hover:bg-blue-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {activeTab === "participated" && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Participated Contests
              </h3>
              <ul className="space-y-4">
                {participatedContests
                  .sort(
                    (a, b) =>
                      new Date(a.deadline).getTime() -
                      new Date(b.deadline).getTime()
                  )
                  .map((contest, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-50 p-4 rounded-xl"
                    >
                      <span>{contest.name}</span>
                      <span className="text-green-600 font-semibold">
                        {contest.status}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {activeTab === "winning" && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Winning Contests
              </h3>
              <ul className="space-y-4">
                {winningContests.map((contest, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-xl"
                  >
                    <span>{contest.name}</span>
                    <span className="text-yellow-600 font-semibold">
                      {contest.prize}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Info */}
              <div className="text-center">
                <img
                  src={profile.photoURL}
                  alt={profile.displayName}
                  className="w-28 h-28 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{profile.displayName}</h2>
                <p className="text-gray-500 mb-2">{profile.bio}</p>
                <p className="text-gray-500 mb-2">{profile.address}</p>

                <button
                  onClick={() => navigate("/edit-profile")}
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                >
                  Edit Profile
                </button>
              </div>

              {/* Win Percentage */}
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-2xl font-semibold mb-4">Win Percentage</h3>
                <div className="w-36 h-36 relative">
                  <svg className="w-full h-full">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="50%"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="50%"
                      stroke="#3b82f6"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="314"
                      strokeDashoffset={314 - (314 * winPercentage) / 100}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                    {winPercentage}%
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

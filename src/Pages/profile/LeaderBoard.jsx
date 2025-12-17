import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 10; // 10 users per page

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/leaderboard?page=${page}`, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem("access-token")}`
        },
      });
      const data = await res.json();

      if (res.ok) {
        setUsers(data.users || data.leaderboard || data); // backend may return `users` or `leaderboard`
        if (data.totalPages) setTotalPages(data.totalPages);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Server error");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, [page]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>

      <table className="table-auto w-full border">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Wins</th>
            <th className="px-4 py-2">Participated</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-4">No users found</td>
            </tr>
          )}
          {users.map((user, idx) => (
            <tr key={user._id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <td className="px-4 py-2">{(page - 1) * limit + idx + 1}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.wonContests?.length || 0}</td>
              <td className="px-4 py-2">{user.participatedContests?.length || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        <button 
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Prev
        </button>
        <span className="px-4 py-2 font-semibold">{page} / {totalPages}</span>
        <button 
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;

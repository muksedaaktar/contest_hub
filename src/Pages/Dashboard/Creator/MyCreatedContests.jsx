import { useNavigate } from "react-router-dom";

const MyCreatedContests = () => {
  const navigate = useNavigate();

  const contests = [
    { id: 1, name: "UI Contest", status: "pending" },
    { id: 2, name: "Writing Contest", status: "confirmed" },
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">My Created Contests</h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contests.map((contest) => (
            <tr key={contest.id}>
              <td>{contest.name}</td>
              <td>{contest.status}</td>
              <td className="space-x-2">
                {contest.status === "pending" && (
                  <>
                    <button
                      onClick={() => navigate(`/dashboard/creator/edit-contest/${contest.id}`)}
                      className="btn bg-orange-400 text-white hover:bg-orange-600"
                    >
                      Edit
                    </button>
                    <button className="btn bg-orange-400 hover:bg-orange-600 text-white">Delete</button>
                  </>
                )}

                <button
                  onClick={() => navigate(`/dashboard/creator/submissions/${contest.id}`)}
                  className="btn bg-orange-400 text-white hover:bg-orange-600"
                >
                  See Submissions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCreatedContests;

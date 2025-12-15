import { toast } from "react-hot-toast";

const ManageContests = () => {
  const contests = [
    { id: 1, name: "Design Contest", status: "pending" },
    { id: 2, name: "Writing Contest", status: "pending" },
  ];

  const approveContest = () => toast.success("Contest Approved ✅");
  const rejectContest = () => toast.error("Contest Rejected ❌");
  const deleteContest = () => toast.success("Contest Deleted 🗑️");

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Manage Contests</h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Contest Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contests.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.status}</td>
              <td className="space-x-2">
                <button onClick={approveContest} className="btn btn-success btn-sm">
                  Confirm
                </button>
                <button onClick={rejectContest} className="btn btn-warning btn-sm">
                  Reject
                </button>
                <button onClick={deleteContest} className="btn btn-error btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageContests;

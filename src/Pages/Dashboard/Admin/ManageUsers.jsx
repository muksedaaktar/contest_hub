import { toast } from "react-hot-toast";

const ManageUsers = () => {
  const users = [
    { id: 1, name: "John", email: "john@gmail.com", role: "user" },
    { id: 2, name: "Sara", email: "sara@gmail.com", role: "creator" },
  ];

  const changeRole = (id, role) => {
    toast.success(`Role changed to ${role}`);
    // SERVER API CALL here
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Manage Users</h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Change Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <select
                  defaultValue={u.role}
                  onChange={(e) => changeRole(u.id, e.target.value)}
                  className="select select-sm"
                >
                  <option value="user">User</option>
                  <option value="creator">Creator</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;

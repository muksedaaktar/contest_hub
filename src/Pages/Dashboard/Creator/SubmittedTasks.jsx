import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

const SubmittedTasks = () => {
  const { id } = useParams(); // contest id
  const [winnerId, setWinnerId] = useState(null);

  const submissions = [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      link: "https://github.com/john",
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@gmail.com",
      link: "https://github.com/alice",
    },
  ];

  const declareWinner = (submissionId) => {
    if (winnerId) {
      toast.error("Winner already declared!");
      return;
    }
    setWinnerId(submissionId);
    const winner = submissions.find((s) => s.id === submissionId);
    toast.success(`Winner declared: ${winner.name} 🎉`);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">
        Submissions for Contest #{id}
      </h2>

      {submissions.map((s) => (
        <div
          key={s.id}
          className={`border p-4 rounded mb-4 ${
            winnerId === s.id ? "bg-green-100" : ""
          }`}
        >
          <p><strong>Name:</strong> {s.name}</p>
          <p><strong>Email:</strong> {s.email}</p>
          <a href={s.link} target="_blank" className="text-blue-500 px-2">
            Submitted Task
          </a>

          <button
            onClick={() => declareWinner(s.id)}
            disabled={winnerId !== null}
            className={`btn mt-3 ${
              winnerId === s.id ? "btn-success cursor-not-allowed" : "btn-primary bg-orange-400 hover:bg-orange-600"
            }`}
          >
            {winnerId === s.id ? "Winner" : "Declare Winner"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SubmittedTasks;

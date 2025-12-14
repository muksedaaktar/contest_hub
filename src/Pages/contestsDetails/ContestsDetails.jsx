import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const fetchContests = async () => {
  const res = await fetch("/data/Contests.json");
  if (!res.ok) throw new Error("Failed to load contests");
  return res.json();
};

const ContestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { data, isLoading, error } = useQuery({
    queryKey: ["contest-details"],
    queryFn: fetchContests,
  });

  const contest = data?.find((c) => c.id === Number(id)) || null;

  const [isRegistered, setIsRegistered] = useState(false);
  const [participants, setParticipants] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [submission, setSubmission] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const deadline = contest ? new Date(contest.deadline) : null;
  const isEnded = deadline ? new Date() > deadline : false;

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    if (!contest || isEnded) return;

    const updateTime = () => {
      setTimeLeft(deadline - new Date());
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [contest, deadline, isEnded]);

  /* ---------------- INITIAL PARTICIPANTS ---------------- */
  useEffect(() => {
    if (contest) {
      setParticipants(contest.participants || 0);
    }
  }, [contest]);

  /* ---------------- PAYMENT SUCCESS HANDLER ---------------- */
  useEffect(() => {
    if (
      location.state?.paymentSuccess &&
      location.state?.contestId === contest?.id
    ) {
      setIsRegistered(true);
      setParticipants((prev) => prev + 1);
    }
  }, [location.state, contest]);

  const formatTime = (ms) => {
    if (ms <= 0) return "Contest Ended";
    const d = Math.floor(ms / (1000 * 60 * 60 * 24));
    const h = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const m = Math.floor((ms / (1000 * 60)) % 60);
    const s = Math.floor((ms / 1000) % 60);
    return `${d}d ${h}h ${m}m ${s}s`;
  };

  /* ---------------- REGISTER → PAYMENT ---------------- */
  const handleRegister = () => {
    navigate("/payment", {
      state: { contestId: contest.id },
    });
  };

  /* ---------------- SUBMIT TASK ---------------- */
  const handleSubmitTask = () => {
  if (!submission.trim()) {
    toast.error("Please provide a valid submission link!");
    return;
  }

  toast.success("🎉 Task submitted successfully!");
  setSubmission("");
  setShowModal(false);
};

  /* ---------------- UI ---------------- */
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto max-w-5xl px-5">

        {isLoading && <p className="text-center py-10">Loading...</p>}
        {error && <p className="text-center py-10">Error loading contest</p>}
        {!isLoading && !contest && (
          <p className="text-center py-10">Contest not found</p>
        )}

        {contest && (
          <>
            <img
              src={contest.image}
              alt={contest.name}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />

            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
              <h1 className="text-3xl font-bold mb-4">{contest.name}</h1>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <p><strong>Participants:</strong> {participants}</p>
                <p><strong>Prize:</strong> {contest.prize}</p>
                <p className={isEnded ? "text-red-500" : "text-green-600"}>
                  <strong>Status:</strong>{" "}
                  {isEnded ? "Contest Ended" : "Ongoing"}
                </p>
              </div>

              <p className="text-lg font-semibold text-orange-500 mb-6">
                ⏳ {formatTime(timeLeft)}
              </p>

              <h2 className="text-xl font-semibold mb-2">Contest Details</h2>
              <p className="text-gray-700 mb-6">{contest.details}</p>

              {contest.task && (
                <>
                  <h2 className="text-xl font-semibold mb-2">
                    📝 Task Instructions
                  </h2>
                  <p className="text-gray-700 mb-6 whitespace-pre-line">
                    {contest.task}
                  </p>
                </>
              )}

              {contest.winner?.name && (
                <div className="border-t pt-6 mt-6">
                  <h2 className="text-xl font-semibold mb-3">🏆 Winner</h2>
                  <div className="flex items-center gap-4">
                    <img
                      src={contest.winner.photo}
                      alt={contest.winner.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <p>{contest.winner.name}</p>
                  </div>
                </div>
              )}

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-8">
                {!isRegistered && (
                  <button
                    disabled={isEnded}
                    onClick={handleRegister}
                    className={`px-6 py-3 rounded-full text-white font-semibold ${
                      isEnded
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-orange-500 hover:bg-orange-600"
                    }`}
                  >
                    Register / Pay
                  </button>
                )}

                {isRegistered && !isEnded && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold"
                  >
                    Submit Task
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* SUBMIT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Submit Your Task</h3>

            <textarea
              className="w-full border rounded-lg p-3 mb-4"
              rows="4"
              placeholder="Paste GitHub / Drive / Live link here..."
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmitTask}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContestDetails;

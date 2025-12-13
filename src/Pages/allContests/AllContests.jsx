import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";


const fetchContests = async () => {
  const res = await fetch("/data/Contests.json");
  if (!res.ok) throw new Error("Failed to fetch contests");
  return res.json();
};

const AllContests = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // get logged-in user

  const { data, isLoading, error } = useQuery({
    queryKey: ["allContests"],
    queryFn: fetchContests,
  });

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10">Failed to load contests</p>;

  const contests = Array.isArray(data) ? data : [];

  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-10">
          All Contests
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contests.map((contest) => (
            <div
              key={contest.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={contest.image}
                alt={contest.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{contest.name}</h3>

                <p className="text-gray-600 mb-3">
                  {contest.short_description?.slice(0, 80)}...
                </p>

                <p className="text-gray-500 mb-2">Type: {contest.type}</p>
                <p className="text-gray-500 mb-4">
                  Participants: {contest.participants}
                </p>

                <button
                  onClick={() =>
                    user
                      ? navigate(`/contest/${contest.id}`)
                      : navigate("/login")
                  }
                  className="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllContests;

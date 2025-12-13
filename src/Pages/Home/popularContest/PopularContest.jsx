import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const isLoggedIn = false; 

const fetchContests = async () => {
  try {
    const res = await fetch("/data/Contests.json");
    if (!res.ok) throw new Error("Failed to fetch Contests");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const PopularContest = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
  queryKey: ["Contests"],
  queryFn: fetchContests,
  staleTime: 1000 * 60 * 5,
});

if (isLoading) return <p className="text-center py-10">Loading...</p>;
if (error) return <p className="text-center py-10">Error loading contests</p>;


const contestsArray = Array.isArray(data) ? data : [];

const sortedContests = [...contestsArray]
  .sort((a, b) => (b.participants || 0) - (a.participants || 0))
  .slice(0, 6); 



  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-4">
          Popular Contests
        </h2>
        <p className="text-center mb-8 font-bold">Here we have some popular contests. If you show all of our contests, please click the button show all and enjoy with us.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedContests.map((contest) => (
            <div
              key={contest.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={contest.image}
                alt={contest.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{contest.name}</h3>
                <p className="text-gray-600 mb-3">
                  {contest.short_description
                    ? contest.short_description.length > 60
                      ? contest.short_description.slice(0, 60) + "..."
                      : contest.short_description
                    : "No description"}
                </p>
                <p className="text-gray-500 mb-3">
                  Participants: {contest.participants || 0}
                </p>
                <button
                  onClick={() =>
                    isLoggedIn
                      ? navigate(`/contest/${contest.id}`)
                      : navigate("/login")
                  }
                  className="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/all-contests")}
            className="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Show All
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularContest;

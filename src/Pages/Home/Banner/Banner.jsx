import React from "react";
import { GiTakeMyMoney } from "react-icons/gi"; // Money icon
import bgImage from "../../../assets/quize.jpg";

const Banner = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full  object-contain"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-700 to-purple-700 opacity-50"></div>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl absolute top-10 left-10"></div>
        <div className="w-[400px] h-[400px] bg-pink-400/20 rounded-full blur-2xl absolute bottom-10 right-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-lg animate-fade-down">
          Discover Your Next <span className="text-yellow-600">Contest</span>
        </h1>
        <p className="text-white/90 mt-4 text-lg md:text-2xl animate-fade-up">
          Search from 15+ contest categories and challenge your skills.
        </p>

        {/* Money Animation */}
        <div className="mt-8 flex justify-center items-center gap-3 text-yellow-300 text-2xl animate-bounce">
          <GiTakeMyMoney className="animate-spin-slow text-green-400" />
          <span className="font-bold">Win Prizes! And Become Millionaire</span>
        </div>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center animate-fade-up">
          <div className="flex bg-white/20 backdrop-blur-xl border border-white/30 p-2 rounded-full w-full max-w-2xl shadow-xl">
            <select className="bg-transparent text-white text-lg px-3 py-2 outline-none">
              <option className="text-black">All Types</option>
              <option className="text-black">Coding</option>
              <option className="text-black">Quiz</option>
              <option className="text-black">Math</option>
              <option className="text-black">Drawing</option>
              <option className="text-black">Photography</option>
            </select>

            <input
              type="text"
              placeholder="Search contest types..."
              className="flex-1 bg-transparent text-gray-200 placeholder-white/70 px-3 text-lg outline-none"
            />

            <button className="px-6 py-2 bg-orange-400 text-white  hover:bg-orange-600  font-semibold rounded-full transition shadow-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

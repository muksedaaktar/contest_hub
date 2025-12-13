import React from "react";
import extraImg from "../../assets/logo.jpg"; 

const ExtraSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${extraImg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      <div className="container mx-auto relative z-10 px-5">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          🌟 Extra Features
        </h2>
        <p className="text-white text-center max-w-3xl mx-auto mb-12 text-lg">
          Explore additional resources and opportunities to enhance your skills.
          Our extra section helps you stay updated, inspired, and ahead in your
          contests journey.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">Learning Resources</h3>
            <p className="text-gray-700">
              Get access to tutorials, guides, and reference materials for every contest type.
            </p>
          </div>

          <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Achievements</h3>
            <p className="text-gray-700">
              Track your progress, badges, and achievements in past contests to stay motivated.
            </p>
          </div>

          <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2">Inspiration</h3>
            <p className="text-gray-700">
              Learn from past winners, read success stories, and get inspired for upcoming contests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;

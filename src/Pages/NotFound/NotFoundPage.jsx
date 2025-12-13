// src/Pages/NotFound/NotFoundPage.jsx
import React from "react";
import bgImage from "../../assets/404.jpg"; // path to your background image

const NotFoundPage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-4xl font-bold mb-6">Oops!The Page You are Looking for is not found.</p>
      <a
        href="/"
        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white font-semibold"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFoundPage;

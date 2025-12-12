import { motion } from "framer-motion";
import React from 'react';

const Register = () => {
    return (
        <section className="w-full bg-base-200 py-16">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-12">

        {/* Left Image Area */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="rounded-2xl shadow-xl"
            src="https://cdn.dribbble.com/userupload/18025564/file/original-86dfa953d305bb830b98877e96ed8189.png?resize=1024x768&vertical=center"
            alt="Register visual concept"
          />
        </motion.div>

        {/* Right Registration Form */}
        <motion.div
          className="w-full lg:w-1/2 bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
            Please Register
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Join our contest community and explore endless opportunities.
          </p>

            {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="text-gray-700 font-semibold">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your email"
              />
            </div>

              <div>
              <label className="text-gray-700 font-semibold">Password</label>
              <input
                type="password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Create a password"
              />
            </div>

             <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-600 mt-5">
            Already have an account?
            <span className="text-green-600 font-semibold cursor-pointer">
              {" "}Login
            </span>
          </p>
        </motion.div>
      </div>
    </section>

    );
};

export default Register;
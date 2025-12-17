import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/"); // redirect after login
    } catch (error) {
      console.error(error.message);
      alert(error.message); // simple error alert
    }
  };

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
            src="https://cdn.dribbble.com/userupload/9280796/file/original-1fc4985a88c401099c21cf8d556d1d11.png?resize=1024x768&vertical=center"
            alt="Login visual concept"
          />
        </motion.div>

        {/* Right Login Form */}
        <motion.div
          className="w-full lg:w-1/2 bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Login to continue your contest journey.
          </p>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-black  placeholder-gray-400  bg-white "
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-black  placeholder-gray-400  bg-white "
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 transition">
            <FcGoogle size={22} />
            <span className="font-medium text-gray-700">
              Login with Google
            </span>
          </button>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-5">
            Don’t have an account?
            <Link
              to="/registration"
              className="text-green-600 font-semibold ml-1 cursor-pointer"
            >
              Register
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;

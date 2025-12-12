import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="w-full max-w-md bg-base-200  rounded-2xl p-8">
      
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Welcome Back 👋
      </h2>
      <p className="text-center text-gray-500 mt-1">
        Login to your account
      </p>

      {/* Form */}
      <form className="mt-8 space-y-5">
        
        {/* Email */}
        <div>
          <label className="text-gray-700 block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-gray-700 block mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline text-sm"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Google Login */}
      <button className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 transition">
        <FcGoogle size={24} />
        <span className="font-medium text-gray-700">Sign in with Google</span>
      </button>

      {/* Footer */}
      <p className="text-center text-gray-600 mt-6 text-sm">
        Don’t have an account?
        <Link to="/register" className="text-blue-600 font-medium ml-1 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";


const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // Update profile with name and photo
      await updateProfile(userCredential.user, {
        displayName: form.name,
        photoURL: form.photoURL,
      });

      // Redirect to home or dashboard
      navigate("/");
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
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-700 font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                value={form.photoURL}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your profile photo URL"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Create a password"
                required
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
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 font-semibold">
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;

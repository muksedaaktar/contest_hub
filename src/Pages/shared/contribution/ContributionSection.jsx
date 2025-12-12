import React from "react";
import { motion } from "framer-motion";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const ContributionSection = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-5 pb-16 pt-10">
        {/* Title */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold"
          >
            Our Contribution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm max-w-[560px] mx-auto text-[#474747]"
          >
            Our contribution are the cornerstone of our success, driving our
            commitment to excellence and continuous improvement in all areas.
          </motion.p>
        </div>

        {/* Cards + Image */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          {/* Cards */}
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Card 1: Total Blogs */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white p-6 space-y-3 text-blue-500 text-center hover:bg-blue-500 hover:text-white duration-200 rounded-md cursor-pointer"
            >
              

              <h1 className="text-3xl flex justify-center">📄</h1>
              <h1 className="text-xl font-semibold">Total Blogs</h1>
              <p className="text-2xl lg:text-4xl font-bold">
                <span>16,000</span> <span>+</span>
              </p>
            </motion.div>

            {/* Card 2: Verified Users */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 space-y-3 text-blue-500 text-center hover:bg-blue-500 hover:text-white duration-200 rounded-md cursor-pointer"
            >
              <h1 className="text-3xl flex justify-center">👥</h1>
              <h1 className="text-xl font-semibold">Verified Users</h1>
              <p className="text-2xl lg:text-4xl font-bold">
                <span>3,100</span> <span>+</span>
              </p>
            </motion.div>

            {/* Card 3: Positive Reviews */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 space-y-3 text-blue-500 text-center hover:bg-blue-500 hover:text-white duration-200 rounded-md cursor-pointer"
            >
              <h1 className="text-3xl flex justify-center">⭐</h1>
              <h1 className="text-xl font-semibold">Positive Reviews</h1>
              <p className="text-2xl lg:text-4xl font-bold">
                <span>8,300</span> <span>+</span>
              </p>
            </motion.div>

            {/* Card 4: Daily Post */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 space-y-3 text-blue-500 text-center hover:bg-blue-500 hover:text-white duration-200 rounded-md cursor-pointer"
            >
              <h1 className="text-3xl flex justify-center">📝</h1>
              <h1 className="text-xl font-semibold">Daily Post</h1>
              <p className="text-2xl lg:text-4xl font-bold">
                <span>200</span> <span>+</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            <img
              src="https://i.postimg.cc/3xDLjYmW/1521651669993.jpg"
              alt="Contribution"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContributionSection;

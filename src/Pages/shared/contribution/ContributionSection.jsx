import React from "react";
import { motion } from "framer-motion";

/* Parent container for stagger */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

/* Card animation  */
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90 },
  },
};

const ContributionSection = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto px-5">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className="text-2xl font-semibold">Our Contribution</h1>
          <p className="text-sm max-w-[560px] mx-auto text-[#474747] mt-2">
            Our contribution are the cornerstone of our success, driving our
            commitment to excellence and continuous improvement.
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Cards */}
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { icon: "📄", title: "Total Blogs", value: "16,000+" },
              { icon: "👥", title: "Verified Users", value: "3,100+" },
              { icon: "⭐", title: "Positive Reviews", value: "8,300+" },
              { icon: "📝", title: "Daily Post", value: "200+" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 space-y-3 text-blue-500 text-center hover:bg-blue-500 hover:text-white duration-200 rounded-xl cursor-pointer shadow-md"
              >
                <h1 className="text-3xl flex justify-center">{item.icon}</h1>
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="text-2xl lg:text-4xl font-bold">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://i.postimg.cc/3xDLjYmW/1521651669993.jpg"
              alt="Contribution"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContributionSection;

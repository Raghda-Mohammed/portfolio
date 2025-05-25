import React from "react";
import { motion } from "framer-motion";
// import Aos from "aos";
// import "aos/dist/aos.css"; // Import AOS styles

const Banner = () => {
  return (
    <motion.div
      className="px-4 py-8 dark:bg-gray-800 text-blue-950 dark:text-white shadow-lg rounded-lg mt-10 mb-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 border-b-2 border-gray-400 rounded-lg ">
        {/* Section 1: Text Content */}
        <div className="text-center flex-1">
          <motion.h1
            className="text-transparent text-3xl md:text-5xl font-bold text-center mt-12 bg-gradient-to-r from-blue-200 via-blue-950 to-blue-200 bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            FRONTEND
          </motion.h1>
          <motion.h1
            className="text-transparent text-3xl md:text-5xl font-bold text-center mt-4 bg-gradient-to-r from-blue-300 via-blue-950 to-blue-300 bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            DEVELOPER
          </motion.h1>

          {/* Paragraph & Button */}
          <motion.div
            className="block text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-gray-400 text-lg max-w-md mx-auto dark:text-gray-200">
              I am Raghda -{" "}
              <span className="text-blue-400">Frontend Developer</span> with a
              passion for creating beautiful and responsive websites. I love to
              learn new technologies and improve my skills.
            </p>
            <motion.button
              className="relative mt-8 cursor-pointer px-6 py-3 font-bold text-white text-lg rounded-lg bg-gradient-to-r from-blue-300 via-blue-950 to-black shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:-translate-y-1 hover:scale-105"
              whileTap={{ scale: 0.9 }}
            >
              VIEW MY WORK
            </motion.button>
          </motion.div>
        </div>

        {/* Section 2: Image */}
        <motion.div
          className="flex items-center justify-center mb-20 flex-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="src/assets/2.jpg"
            alt="Portfolio banner"
            className="mt-32 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out w-full max-w-md lg:max-w-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;

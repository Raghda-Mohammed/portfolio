import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const projectsData = [
  {
    id: 1,
    title: "E-commerce",
    description:
      "E-commerce website using React, Tailwind CSS, Redux Toolkit, Firebase, and Formik.",
    image: "src/assets/banner2.jpg",
    link: "https://raghda-mohammed.github.io/e-commerce-vite-redux-toolkit/",
  },
  {
    id: 2,
    title: "E-commerce-vite",
    description:
      "E-commerce website using Vite with Tailwind CSS and Context API.",
    image: "src/assets/6.png",
    link: "https://raghda-mohammed.github.io/e-commerce-vite/",
  },
  {
    id: 3,
    title: "Bakery Website",
    description:
      "Bakery website using React, Tailwind CSS, Redux Toolkit, and Firebase.",
    image: "src/assets/banner5.png",
    link: "https://raghda-mohammed.github.io/bakerywebsite/",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Project management system with modern UI.",
    image: "src/assets/2.jpg",
    link: "https://raghda-mohammed.github.io/Portfolio/",
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    Aos.refresh();
  }, []);

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center transition duration-500 relative">
      <div className="container mx-auto py-16 my-20 border-b-2 border-gray-400 rounded-lg">
        <h2
          data-aos="fade-down"
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-900 to-white"
        >
          MY PROJECTS
        </h2>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="p-6 rounded-lg shadow-xl flex flex-col items-center relative overflow-hidden bg-white dark:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full p-4 bg-transparent backdrop-blur-md rounded-b-lg shadow-lg"
              >
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="block mt-4 py-2 px-4 bg-blue-950 text-white  rounded-lg hover:bg-blue-900 transition duration-300 text-center"
                >
                  View Project
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

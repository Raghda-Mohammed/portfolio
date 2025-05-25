// import React from "react";
// import { motion } from "framer-motion";
// import Aos from "aos";
// import "aos/dist/aos.css"; // Import AOS styles
// const skills = [
//   { name: "HTML5", icon: "🌐" },
//   { name: "CSS3", icon: "🎨" },
//   { name: "JavaScript", icon: "🖥️" },
//   { name: "React", icon: "⚛️" },
//   { name: "Tailwind CSS", icon: "🌈" },
//   { name: "Node.js", icon: "🌲" },
//   { name: "Firebase", icon: "🔥" },
//   { name: "Redux", icon: "🔄" },
//   { name: "Git", icon: "🐙" },
//   { name: "API Integration", icon: "🔗" },
//   { name: "Form Validation (Formik/Yup)", icon: "✅" },
//   { name: "Responsive Design", icon: "📱" },
// ];

// function Skills() {
//   React.useEffect(() => {
//     Aos.init({ duration: 1000, once: true });
//     Aos.refresh();
//   }, []);
//   return (
//     <motion.div
//       className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-950 to-black bg-clip-text transition duration-500"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="container mx-auto px-4 border-b-2 border-gray-400 rounded-lg ">
//         <div className="text-center py-28 rounded-lg shadow-lg  mx-auto my-8">
//           <h1
//             data-aos="fade-down"
//             className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-950 to-black"
//           >
//             SKILLS
//           </h1>
//           <p
//             data-aos="fade-up"
//             className="mt-4 text-lg text-gray-600 dark:text-gray-200"
//           >
//             The skills, tools, and technologies I use:
//           </p>
//           <div
//             data-aos="fade-up"
//             className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center "
//           >
//             {skills.map((skill) => (
//               <motion.div
//                 key={skill.name}
//                 className="flex flex-col items-center justify-center space-y-2 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
//                 whileHover={{ scale: 1.1, rotate: 3 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="text-5xl">{skill.icon}</div>
//                 <p className="text-lg text-gray-600">{skill.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Skills;

import React from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css"; // استيراد أنماط AOS

const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "🖥" },
  { name: "React", icon: "⚛" },
  { name: "Tailwind CSS", icon: "🌈" },
  { name: "Node.js", icon: "🌲" },
  { name: "Firebase", icon: "🔥" },
  { name: "Redux", icon: "🔄" },
  { name: "Git", icon: "🐙" },
  { name: "API Integration", icon: "🔗" },
  { name: "Form Validation (Formik/Yup)", icon: "✅" },
  { name: "Responsive Design", icon: "📱" },
];

function Skills() {
  React.useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    Aos.refresh();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center py-20 rounded-lg shadow-lg mx-auto">
          <h1
            data-aos="fade-down"
            className="text-6xl font-extrabold animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-950 to-blue-200"
          >
            SKILLS
          </h1>
          <p data-aos="fade-up" className="mt-4 text-lg dark:text-gray-200">
            The skills, tools, and technologies I use:
          </p>
          <div
            data-aos="fade-up"
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center justify-center space-y-3 p-6 rounded-lg bg-gray-800 text-gray-900 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-110"
                whileHover={{ scale: .9}}
                // transition={{ duration: 0.3 }}
              >
                <div className="text-6xl drop-shadow-lg">{skill.icon}</div>
                <p className="text-lg font-semibold drop-shadow-lg text-gray-200">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

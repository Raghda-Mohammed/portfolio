import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      className="shadow-lg rounded-2xl py-4 transition-colors duration-500"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold">
          <motion.span
            className=" dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Raghda Mohammed
          </motion.span>
        </Link>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={item.path}
                className="text-lg hover:text-blue-800 transition duration-300 relative"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className=" text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute top-16 right-0 bg-gray-300 shadow-lg rounded-2xl p-4 flex flex-col items-center space-y-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-lg text-blue-950 hover:text-purple-500 cursor-pointer transition duration-300"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;

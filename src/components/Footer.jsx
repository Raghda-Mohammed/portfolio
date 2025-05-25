import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-8 lg:mx-0">
      <div className="container mx-auto flex flex-col items-center text-center">
        <p className="text-sm">© {new Date().getFullYear()} -All rights reserved, web design and development
       - Created by Raghda Mohammed
        </p>
        <div className="mt-2 flex space-x-4">
          <a href="#" className="hover:text-gray-400 text-xl">
            <FaTwitter className="mr-2 text-blue-600" />
          </a>
          <a href="https://www.linkedin.com/in/raghda-mohammed-2577a6248" className="hover:text-gray-400 text-xl">
            <FaLinkedin className="mr-2 text-blue-600" />
          </a>
          <a href="https://github.com/Raghda-Mohammed" className="hover:text-gray-400 text-xl">
            <FaGithub className="mr-2 text-blue-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
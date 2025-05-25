import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Projects from "./components/Projects";
import { FaMoon, FaSun } from "react-icons/fa";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-blue-900"
      } min-h-screen flex flex-col items-center justify-center transition duration-500`}
    >
      <button
        className="fixed top-7 right-6 md:top-16 xl:top-7 z-10 p-2 rounded-full bg-blue-950 text-white hover:bg-gray-700 transition"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
      <div className="container mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Route>
    ),
    { basename: "/portfolio"}
  );
  return <RouterProvider router={router} />;
};

export default App;

import React, { useEffect, useState } from "react";
import Bannar from "../components/Bannar";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";


const Home = () => {

  return (
    <div>

      <Bannar />
      <Services />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;

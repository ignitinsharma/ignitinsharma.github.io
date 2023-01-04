import React from "react";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Github from "../Components/Github";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
      <Footer/>
    </>
  );
};

export default Home;

import React from "react";
import "./App.scss";
import photo10 from "./assets/photo10.png";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <div className="main-container">
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />;
    </div>
  );
}

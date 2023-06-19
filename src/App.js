import React from "react";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import'./index.css';
// Particles
import ParticlesComponent from './components/Particle';
export default function App() {
  return (
    <main> 
      <ParticlesComponent />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
       <Footer />
    </main>
  );
}
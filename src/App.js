import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AllProjects from "./components/AllProjects";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Creating refs for each section
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function to scroll to a given ref and center the section in the viewport
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Navbar
                onScrollToHome={() => scrollToSection(homeRef)}
                onScrollToProjects={() => scrollToSection(projectsRef)}  // Pass scroll to projects
                onScrollToSkills={() => scrollToSection(skillsRef)}
                onScrollToAboutMe={() => scrollToSection(aboutMeRef)}
                onScrollToContact={() => scrollToSection(contactRef)}  // Pass scroll to contact
              />
              <div ref={homeRef}>
                <Hero
                  onScrollToProjects={() => scrollToSection(projectsRef)}  // Pass scroll to projects
                  onScrollToContact={() => scrollToSection(contactRef)}  // Pass scroll to contact
                />
              </div>
              <div ref={aboutMeRef}>
                <AboutMe />
              </div>
              <div ref={skillsRef}>
                <Skills />
              </div>
              <div ref={projectsRef}>
                <Projects />
              </div>
              <div ref={contactRef}>
                <ContactForm />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;

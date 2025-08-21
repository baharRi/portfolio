import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Greet from "./components/Greet";
import Projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function Home() {
  return (
  <>
      <Greet />
      <section className="aboutIntro">
      <p>
        A UX and front-end enthusiast motivated to blend elements of <strong>design</strong> and <strong>tech</strong>.
      </p>
    </section>
      <Projects />
      </>);
}

function App() { // maybe remove contact and just keep it in greet. 
  return (
    <>
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
                    {/* Single project page (dynamic) */}
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
      </Router>
    </>
  );
}

export default App;

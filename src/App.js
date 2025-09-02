import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        Crafting engaging digital experiences through UX/UI design and research, contributing to projects that <strong>enhance usability and sustainability</strong>.
      </p>
      <Link style={{ textDecoration: 'none' }} to="/about"><span>What can I do for you? Read <strong>about me</strong> <ArrowForwardIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/></span></Link>
    </section>
      <Projects />
      </>);
} //what can I do for you? check out my about me page ->

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

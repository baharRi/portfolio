import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Greet from "./components/Greet";
import Projects from "./components/Projects";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function Home() {
  return (
  <>
      <Greet />
      <Projects />
      </>);
}

function App() { // maybe remove contact and just keep it in greet. 
  return (
    <>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      </Router>
    </>
  );
}

export default App;

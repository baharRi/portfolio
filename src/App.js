import React from "react";
import Header from "./components/Header";
import Greet from "./components/Greet";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Greet />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

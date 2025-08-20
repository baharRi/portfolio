import React from "react";
import Greet from "../Greet";

function About() { //make css class for intro, skillsEtc for skills. add button to download resume. add "based in Oslo", little fun facts section (iterate through list), use icons
  return (
    <>
    <Greet />

    <section className="about">
      <p>
        I am eager to collaborate with teams of fellow designers as well
        as developers and other disciplines in order to craft technology 
        that serves as a tool for empowerment and helpfulness. My areas of 
        interest are <strong> interaction design & digitalization</strong>. 
        I see value in details, and I am highly driven to reach my own high 
        expectations with every project I take on.
      </p>
      
      <h1>Proficiency</h1>
      <h2>Values and skills</h2>
      <h2>Programming</h2>
      <p>Front-end development. Languages: <em>Python, Java, Kotlin, SQL. ReactJS: JavaScript, HTML5, CSS</em></p>
      <h2>Programs and software</h2>
      <p>Figma, GitHub, NVivo, Office, Overleaf & LaTeX, Adobe: InDesign, Illustrator, Photoshop</p>

    </section>
    </>
  );
}

export default About;

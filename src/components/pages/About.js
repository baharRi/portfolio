import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import RotatingText from "../RotatingText";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function About() { //make css class for intro, skillsEtc for skills. add button to download resume. add "based in Oslo", little fun facts section (iterate through list), use icons
  
  const phrases = [
    "paint with acrylic and oil paints.",
    "always touch the water when I walk by a river.",
    "spend time with my tuxedo cat. ◡̈",
    "solve puzzles and sudokus.",
    "be a completionist in video games.",
    "create thoughtful user experiences. ☼"
  ];

  return (
    <>
   
    <section className="aboutIntro">
      <p>
        ❝I believe that well-made design can contribute to create better
        experiences for anyone. I am firm in my belief that design is
        crucial for shaping the world into a better place that is 
        <strong> more accessible, equitable, and sustainable for every
        person</strong>.❞
      </p>
    </section>

    <section className="about">

      <span>I like to... <RotatingText phrases={phrases} interval={2500} /></span>

      <h1>Who am I?</h1>

       <h2>My motivations</h2>

      <p>
        I am eager to collaborate with teams of fellow designers as well
        as developers and other disciplines in order to craft technology 
        that serves as a tool for empowerment and helpfulness. My areas of 
        interest are <strong> interaction design & digitalization</strong>. 
        I see value in details, and I am highly driven to reach my own high 
        expectations with every project I take on.
      </p>

      <h2>Values and skills</h2>

      <p>
        Something something.
      </p>
      
      <h1>Proficiency</h1>
      <h2>Programming</h2>
      <p>Front-end development. Languages: <em>Python, Java, Kotlin & XML, SQL. ReactJS: JavaScript, HTML5, CSS</em></p>
      <h2>Programs and software</h2>
      <p>Figma, GitHub, NVivo, Office, Overleaf & LaTeX, Adobe: InDesign, Illustrator, Photoshop</p>
    </section>
    <section className="aboutIntro"> 
      <button id="resume" type="button"><a href="../assets/Bahar_CV.pdf" download="Bahar_CV">Download my resume <DownloadIcon fontSize="small" style={{ verticalAlign: 'middle', marginLeft: 8 }} /></a></button>
    </section>
    </>
  );
} // TODO: add download icon

export default About;

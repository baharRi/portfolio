import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import RotatingText from "../RotatingText";
import tuxCat from '../../assets/catGif.gif';

function About() { //make css class for intro, skillsEtc for skills. add button to download resume. add "based in Oslo", little fun facts section (iterate through list), use icons
  
  const phrases = [
    "paint with acrylic and oil paints.",
    "always touch the water when I walk by a river.",
    "spend time with my tuxedo cat. ◡̈",
    "solve puzzles and sudokus.",
    "be a completionist in video games.",
    "create thoughtful user experiences. ☼"
  ];

  return ( // removed from bg: I have a strong foundation in user-centered design principles and a keen eye for detail, which I apply to every project I work on. 
    <>
   
    <section className="aboutIntro">
      <div className="noLineSpacer" />
      <p>
        「A UX and front-end enthusiast motivated to blend elements of design and tech — working to make a change in online experiences.」
      </p>
    </section>

    <section className="about">
      <div className="aboutBox">
      <span className="likes">I like to... <RotatingText phrases={phrases} interval={2500} /></span> 
      <img
        src={tuxCat}
        alt="Tux Cat"
        style={{ width: 130, height: 130 }}
      />
      </div>

      <h1>About Me</h1>

       <h2>Background</h2>

      <p className="desc">
        Before pursuing both a bachelor's and master's degree in Information Science at the University of Oslo, 
        I studied the visual arts for 3 years following a lifelong personal interest. Additionally, I spent 
        majority of my younger years fascinated by technology and all the activities it mediates. 
        My passion for creating meaningful and engaging experiences as well as my committment to expressing 
        my personal creativity led me to the field of UX/UI design, where I have been able to combine my 
        artistic skills with my interest in technology. 
      </p>

      <h2>Motivations & Focus</h2>

      <p className="desc">
        I am eager to collaborate with teams of fellow designers as well
        as developers and other disciplines in order to craft technology 
        that serves as a tool for empowerment and helpfulness. My areas of 
        interest are <strong> interaction design & digitalization</strong>. 
        I see value in details, and I am highly driven to reach my own high 
        expectations with every project I take on.
      </p>

      <div className="spacer"></div>

      <h2>Proficiency</h2>
      <h3>Development →</h3>
      <div className ="skillsWrapper">
      <div className ="skills">
        <span className="skill prog">ReactJS</span>
        <span className="skill prog">JavaScript</span>
        <span className="skill prog">HTML5</span>
        <span className="skill prog">CSS</span>
        <span className="skill prog">Node.js</span>
        <span className="skill prog">Electron</span>
        <span className="skill prog">Python</span> 
        <span className="skill prog">Java</span>
        <span className="skill prog">Kotlin</span>
        <span className="skill prog">XML</span>
        <span className="skill prog">SQL</span>
        </div>
        </div>

      <h3>Programs & Software →</h3>
      <div className ="skillsWrapper">
      <div className ="skills">
        <span className="skill soft">Figma</span> 
        <span className="skill soft">Git</span> 
        <span className="skill soft">Jira</span> 
        <span className="skill soft">NVivo</span> 
        <span className="skill soft">Office</span> 
        <span className="skill soft">Overleaf & LaTeX</span> 
        <span className="skill soft">Adobe XD</span> 
        </div>
        </div>
        
    </section>
    <section className="aboutIntro"> 
      <button id="resume" type="button"><a href="../assets/Bahar_CV.pdf" download="Bahar_CV">Download my resume <DownloadIcon fontSize="small" style={{ verticalAlign: 'middle', marginLeft: 8 }} /></a></button>
    </section>
    </>
  );
} // TODO: add download icon

export default About;

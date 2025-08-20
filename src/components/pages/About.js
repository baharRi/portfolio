import React from "react";

function About() { //make css class for intro, skillsEtc for skills
  return (
    <>
    <section className="greet">
      <h1>Bahar</h1>
      <p>UX/UI Designer · Researcher · Creator</p>
    </section>

    <section>
      <p>
        I believe that well-made design can contribute to create better
        experiences for anyone. I am firm in my belief that design is
        crucial for shaping the world into a better place that is 
        <strong>more accessible, equitable, and sustainable for every
        person</strong>.
      </p>
    </section>

    <section>
      <p>
        I am eager to collaborate with teams of fellow designers as well
        as developers and other disciplines in order to craft technology 
        that serves as a tool for empowerment and helpfulness. My areas of 
        interest are <strong>interaction design & digitalization</strong>. 
        I see value in details, and I am highly driven to reach my own high 
        expectations with every project I take on.
      </p>
      </section>

    <section>
      <h1>My skills</h1>
      <h2>Programming</h2>
      <p>Front-end development. Languages: <em>Pythom, Java, Kotlin, SQL. ReactJS: JavaScript, HTML5, CSS</em></p>
      <h2>Programs and software</h2>
      <p>Figma, GitHub, NVivo, Office, Overleaf & LaTeX, Adobe: InDesign, Illustrator, Photoshop</p>

    </section>
    </>
  );
}

export default About;

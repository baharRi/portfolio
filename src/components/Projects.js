import React from "react";

function Projects() {
  return (
    <>
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        <div className="project">
          <h3>Commission Calculator</h3>
          <p>
            A personal project: designed & built a calculator to simplify art
            commission pricing.
          </p>
        </div>
        <div className="project">
          <h3>AtomIQ: Investment App UI</h3>
          <p>A short description, focus on UX/UI</p>
        </div>
        <div className="project">
          <h3>Svoosh: Complete Android App</h3>
          <p>A short description, focus process, teamwork, results</p>
        </div>
      </div>
    </section>

    <section id="master" className="projects">
      <h2>Master's Project and Research</h2>
      <div className="project-grid">
        <div className="project">
          <h3>False Information on Social Media</h3>
          <p>
            Research conducted...
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Projects;

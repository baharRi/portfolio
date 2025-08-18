import React from "react";

function Projects() {
  return (
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
          <h3>[Project Name]</h3>
          <p>
            A short description of another project that highlights your design +
            UX skills.
          </p>
        </div>
        <div className="project">
          <h3>[Project Name]</h3>
          <p>Another highlight — concise but focused on process & results.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
  return (
    <>
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        <Link to="/project/1" className="project">
          <h3>Commission Price Calculator</h3>
          <p>
            A personal project: designed & built a calculator to simplify art
            commission pricing.
          </p>
        </Link>
        <Link to="/project/2" className="project">
          <h3>AtomIQ: Investment App UI</h3>
          <p>A short description, focus on UX/UI</p>
        </Link>
        <Link to="/project/3" className="project">
          <h3>Svoosh: Complete Android App</h3>
          <p>A short description, focus process, teamwork, results</p>
        </Link>
      </div>

      <div className="project-grid">
        <Link to="/project/1" className="project">
          <h3>PwC Design Explore</h3>
          <p>
            text text
          </p>
        </Link>
      </div>
      
    </section>

    <section id="master" className="projects">
      <h2>Master's Project and Research</h2>
      <div className="project-grid">
        <Link to="/project/4" className="project">
          <h3>Mitigating False Information on Social Media</h3>
          <p>
            Research conducted...
          </p>
        </Link>
      </div>
    </section>
    <section id="githubButton" className="projects">
    <a href="https://github.com/baharRi/portfolio" target="_blank"><button id="github" type="button">View this portfolio in GitHub <GitHubIcon style={{ verticalAlign: 'middle', marginLeft: 8 }} /></button></a>
    </section>
    </>
  ); // TODO: add github icon
}

export default Projects;

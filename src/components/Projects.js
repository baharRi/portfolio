import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() { /* focus on UX/UI for project2, focus on process, teamwork, and results for project3 */
  return (
    <>
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        <Link to="/project/1" className="project" style={{ textDecoration: 'none' }}>
          <h3>Commission Price Calculator</h3>
          <p>
            A personal project: designed & built a calculator to simplify art
            commission pricing.
          </p>
        </Link>
        <Link to="/project/2" className="project" style={{ textDecoration: 'none' }}>
          <h3>AtomIQ: Investment App UI</h3>
          <p>Developing the interaction design for upcoming investment app, a real case for
            the client AtomIQ. 
          </p>
        </Link>
        <Link to="/project/3" className="project" style={{ textDecoration: 'none' }}>
          <h3>Svoosh: Complete Android App</h3>
          <p>Independent and interdisciplinary work among students, developing an application from scratch.</p>
        </Link>
      </div>

      <div className="project-grid">
        <Link to="/project/5" className="project" style={{ textDecoration: 'none' }}>
          <h3>PwC Design Explore</h3>
          <p>
            A design workshop at PwC, focusing on transformative design to solve a real case 
            for the client Ruter Transport. 
          </p>
        </Link>
      </div>
      
    </section>

    <section id="master" className="projects">
      <h2>Master's Project and Research</h2>
      <div className="project-grid">
        <Link to="/project/4" className="project" style={{ textDecoration: 'none' }}>
          <h3>Mitigating False Information on Social Media</h3>
          <p>
            Research conducted for my master's thesis, focusing on media literacy and
            technological democratization.
          </p>
        </Link>
      </div>
    </section>
    <section id="githubButton" className="projects">
    <a href="https://github.com/baharRi/portfolio" target="_blank" rel="noreferrer noopener"><button id="github" type="button">View this portfolio in GitHub <GitHubIcon style={{ verticalAlign: 'middle', marginLeft: 8 }} /></button></a>
    </section>
    </>
  ); // clean up bottom button (new class centeredButton?)
}

export default Projects;

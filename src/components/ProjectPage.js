import { useParams, Link } from "react-router-dom";
import Project1 from "./pages/ProjectPages/Project1";
import Project2 from "./pages/ProjectPages/Project2";
import Project3 from "./pages/ProjectPages/Project3";
import Project4 from "./pages/ProjectPages/Project4";
import Project5 from "./pages/ProjectPages/Project5";

function ProjectPage() {
  const { id } = useParams();

  const projects = {
    1: {
      title: "Commission Price Calculator",
      details: <Project1/>
    },
    2: {
      title: "AtomIQ: Investment App UI",
      details: <Project2/>
    },
    3: {
      title: "Svoosh: Complete Android App",
      details: <Project3/>
    },
    4: {
      title: "Masters Topic",
      details: <Project4/>
    },
    5: {
      title: "PwC: Design Explore",
      details: <Project5/>
    }
  };

  const project = projects[id];

  return (
    <div>
      {project ? (
        <>
          <div>{project.details}</div>
        </>
      ) : (
        <p>Project not found.</p>
      )}

      <button><Link to="/#projects" className="back-link">
        ← Back to projects
      </Link></button>
    </div>
  );
}

export default ProjectPage;

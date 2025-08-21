import { useParams, Link } from "react-router-dom";

function ProjectPage() {
  const { id } = useParams();

  const projects = {
    1: {
      title: "Commission Price Calculator",
      details: "More in-depth explanation, screenshots, challenges, results..."
    },
    2: {
      title: "Project 2",
      details: "Expanded description about UX/UI focus..."
    },
    3: {
      title: "Project 3",
      details: "Process, teamwork, results, etc..."
    },
    4: {
      title: "Masters Topic",
      details: "Longer explanation of your research..."
    }
  };

  const project = projects[id];

  return (
    <div className="project-page">
      {project ? (
        <>
          <h1>{project.title}</h1>
          <p>{project.details}</p>
        </>
      ) : (
        <p>Project not found.</p>
      )}

      <Link to="/#projects" className="back-link">
        ← Back to projects
      </Link>
    </div>
  );
}

export default ProjectPage;

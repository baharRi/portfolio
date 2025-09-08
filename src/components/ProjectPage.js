import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import Project1 from "./pages/ProjectPages/Project1";
import Project2 from "./pages/ProjectPages/Project2";
import Project3 from "./pages/ProjectPages/Project3";
import Project4 from "./pages/ProjectPages/Project4";
import Project5 from "./pages/ProjectPages/Project5";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ProjectPage() { //clean this up
  const navigate = useNavigate();
const location = useLocation();

const handleNavClick = (e, targetId = null) => {
  e.preventDefault();

  const scrollToTarget = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(scrollToTarget, 100); // wait for home to render
  } else {
    scrollToTarget();
  }
};
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

      <div className="backLinkContainer">
      <Link to="/" className="backLink" onClick={(e) => {handleNavClick(e, "projects"); }}><button> <ArrowBackIcon fontSize="small" style={{ verticalAlign: 'middle'}} /> Back to projects</button>
      
      </Link>
      </div>
    </div>
  );
}

export default ProjectPage;

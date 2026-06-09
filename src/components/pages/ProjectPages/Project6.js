import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import { FaMobileAlt   } from "react-icons/fa";
import { FiPenTool   } from "react-icons/fi";

function Project6() { // OBS: double check the class in css
  return (
    <section className="projectPage">
      <h1>flow.: Habit tracker</h1>
      <section className="projectInfoGrid">
        <p><AccessTimeFilledIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }} /><br />time</p>
        <p><GroupsIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/><br />individual work</p>
      </section>

      {/*<img src={require("../../../assets/project6/flow-banner.png")} alt="project 6 banner" className="projectBanner"/>*/}
      
      <h2>Gained Experience</h2>
      <p><TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Focused on detailed high-fidelity prototyping in Figma<br/></p>

       <div className="iconGroup">
            <FiPenTool title="Design prototyping" className="icon" />
            <FaMobileAlt title="Mobile development" className="icon" />
        </div>

      <div className="spacer" />

      <h2>Project Description</h2>
      <span>Adaptive and dynamic tracking.</span>
      <p className="desc">Lorem ipsum. 
      </p>

        <h2>The Problem</h2>
        <span>Stability and consistency in tracking habits is difficult.</span>

        <p className="desc">
        Lorem ipsum.
        </p>

        <h2>Project Case</h2>
        <div className="projectSpecial">
          <p>❝To visualize habits and track progress over time in a way that provides actionable insights.❞</p>

        <div className="spacer" />
        
            <p>❝Another quote.❞</p>
        </div>

        {/*<img src={require("../../../assets/project6/flowWireframe.png")} alt="project 6 wireframe" className="projectImg"/>*/}

        {/*<p className="desc">
        <br /> With these goals in mind, I began brainstorming on a set of specifications that I deemed 
        important for establishing the price of an art piece: </p>
        <ul>
          <li>The number of characters <br />(1≤)</li>
          <li>The complexity of the background <br />(simple – medium – detailed)</li>
          <li>The rendering style < br/>(sketch – flat colors – full rendering)</li>
        </ul>
        <p className="desc">Then, prototyping the wireframe of this application consisted of a simple and lightweight layout that takes 
        in these specifications, and instantly generates an estimated value of the piece based on 
        a predetermined pricing framework.
        </p>*/}

        <div className="noLineSpacer" />

        <h2>Project Outcomes</h2>
        <span>An adaptive, fluid interface that provides an adaptive overview of habits.</span>

        {/*<img src={require("../../../assets/project6/flowWidget.png")} alt="project 6 showcase on homescreen" className="projectImg"/>*/}

        <div className="projectSpecial">
          <p>❝A quote.❞</p>
        </div>

        <p className="desc">Lorem ipsum.</p>

    </section>
  );
}

export default Project6;
import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupsIcon from '@mui/icons-material/Groups';

function Project5() { // OBS: double check the class in css
  return (
    <section className="projectPage">
      <h1>PwC: Design Explore Experience</h1>

      <section className="projectInfoGrid">
        <p><AccessTimeFilledIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }} />high intensity, 2 days</p>
        <p><GroupsIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>collaborative groupwork</p>
      </section>
      
      <h2>Gained Experience</h2>
      <p><TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Methodology: Speculative service design<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Methods: Evidencing, future scenarios<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Direct collaboration with professionals<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Working in a fast-paced sprint</p>

      <img src={require("../../../assets/project5/pwc-notes.png")} alt="project 5 notes" className="projectBanner"/>


        <p className="projectDesc">In January of 2025, I was joined a challenge experience 
          hosted by PwC, bringing together design students from various universities 
          to collaborate with the professionals of their design team with a real case for one of 
          their clients Ruter AS. Through this experience I gained insight into a professional 
          design process under real circumstances, and learned first-hand from professionals in the field.</p>

        <p className="projectDesc">An overarching goal of contribution for this research is to 
          maintain social sustainability through democracy and enabled through their right of 
          proper information to the users of social media platforms.</p>

        <p className="projectDesc">I gathered invaluable insight into value creation and usability, prototyping, 
          speculating in service design from professionals at the forefront of service design development.</p>

        <h2>The Problem</h2>
        <span>write something quick and summarized here.</span>

        <h2>Project Outcomes</h2>
        <span>write something quick and summarized here.</span>

        <p className="projectDesc">I gathered invaluable insight into value creation and usability, prototyping, 
          speculating in service design from professionals at the forefront of service design development.</p>

    </section>
  );
}

export default Project5;
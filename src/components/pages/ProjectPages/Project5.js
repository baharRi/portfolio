import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupsIcon from '@mui/icons-material/Groups';

function Project5() { // OBS: double check the class in css
  return (
    <section className="projectPage">
      <h1>PwC: Design Explore Experience</h1>

      <section className="projectInfoGrid">
        <p><AccessTimeFilledIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }} /><br />intensive 2 days</p>
        <p><GroupsIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/><br />groupwork</p>
      </section>

      <img src={require("../../../assets/project5/pwc-notes.png")} alt="project 5 notes" className="projectBanner"/>  
      
      <h2>Gained Experience</h2>
      <p><TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Methodology: Speculative service design<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Methods: Evidencing, future scenarios<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Direct collaboration with professionals<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Working in a fast-paced sprint</p>

      <div className="spacer" />

        <p className="desc">In January of 2025, I attended an educational experience 
          hosted by PwC, bringing together design students from various universities 
          to collaborate with the professionals of their design team with a real case for their clients Ruter AS. 
          Through this experience I gained insight into a professional 
          design process under real circumstances, and learned first-hand from service design professionals.</p>

        <h2>The Problem</h2>
        <span>700 000 vehicles in Oslo alone: private motoring threatens sustainability</span>

        <p className="desc">Private motoring is an increasingly attractive mode of transportation in modern times, and 
          city infrastructure reflects this. Ruter AS mentions how 40% of Oslo goes to parking and vehicle space for the over 700 000 
          vehicles in the city. They come to PwC with a goal: identifying trends and signals to help streamline a novel service design
          for establishing their role to play in increasing sustainable transportation options and decreasing the reliance on private 
          motoring in Oslo.</p>

        <h2>Project Case</h2>
        <div className="projectSpecial">
          <p>To support Oslo's biggest transportation company in rethinking mobility solutions through speculative, 
            user-centered design methods.</p>
            <div className="spacer" />
            <p>Ideating sustainable transportation alternatives more attractive than personal cars.</p>
        </div>

        <h2>Project Outcomes</h2>
        <span>Speculating futures and competitors to drive inspiration and sustainable development.</span>

        <p className="desc">Resulting from the work in this intensive program, my group speculated a possible contendor for
          the client in a near future with an attractive business model service design, fulfilling the same goals for the user base.< br />
          <br /> Throughout this project, I gathered invaluable insight into value creation and usability, prototyping, and 
          speculating in service design from professionals at the forefront of service design development in PwC.
          Additionally, I grew more confident working in fast-paced, professional design environments, adapting 
          quickly while learning directly from experienced practitioners in the field.</p>

    </section>
  );
}

export default Project5;
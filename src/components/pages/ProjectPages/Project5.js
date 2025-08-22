import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupsIcon from '@mui/icons-material/Groups';

function Project5() { // OBS: double check the class in css
  return (
    <section className="projectPage">
      <h1>PwC: Design Explore</h1>

      <section className="projectInfoGrid">
        <p><AccessTimeFilledIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }} />high intensity, 2 days</p>
        <p><GroupsIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>collaborative groupwork</p>
      </section>
      
      <h2>Gained Experience</h2>
      <p><TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Methodology: Transformative Design <br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Methods: future scenarios, experimental design, Tarot Cards of Tech <br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Grew highly comfortable using Figma <br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Cooperating with an established start-up team</p>


        <p className="projectDesc">With my focus on encouraging sustainability and justice through 
          technology, my academic research aims to tackle the issue of false information (i.e. mis- 
          and disinformation) spread through social media platforms.</p>

        <p className="projectDesc">An overarching goal of contribution for this research is to 
          maintain social sustainability through democracy and enabled through their right of 
          proper information to the users of social media platforms.</p>

        <p className="projectDesc">My fields of interest within informatics for this topic are 
          CSCW (Computer-Supported Cooperative Work) and Social Computing, both concerned with 
          the entanglement of technology with everyday life, and acknowledging the social aspects 
          and phenomena involved with technological advancements.</p>

    </section>
  );
}

export default Project5;
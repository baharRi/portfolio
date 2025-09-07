import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupsIcon from '@mui/icons-material/Groups';

function Project1() { // OBS: double check the class in css
  return (
    <section className="projectPage">
      <h1>Commission Pricing Calculator</h1>
      <section className="projectInfoGrid">
        <p><AccessTimeFilledIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }} />2 weeks</p>
        <p><GroupsIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>individual work</p>
      </section>

      <img src={require("../../../assets/project1/calcBanner.png")} alt="project 1 banner" className="projectBanner"/>
      
      <h2>Gained Experience</h2>
      <p><TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Grew more comfortable using Git, ReactJS, and Electron<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Problem-solving for a personal use case</p>

      <div className="spacer"></div>

      <h2>Project Description</h2>
      <p className="projectDesc">In the summer of 2025, I decided to begin an artistic journey I've been wanting 
        to try for a while; creating digital art to sell through commissions, profiting off my hobby. 
        As this was quite a novel endeavor for me, I quickly realized I had difficulty in pricing my work in a fair and 
        reasonable way for both myself and my clients. I decided to utilize my own skills to solve this problem in a 
        personalized way, starting the work on a desktop application to help me calculate these prices.<br /> 
      </p>

        <h2>The Problem</h2>
        <span>The difficulty of pricing art.</span>

        <img src={require("../../../assets/project1/calcWireframe.png")} alt="project 1 wireframe" className="projectBanner"/>

        <p className="projectDesc">
          <ul> 
            <li>I currently decide the price of each artwork independently, usually based on an hourly rate.</li>
            <li>This process has been tedious, and the hourly rate had the unforeseen consequence of rushing me in the creation
        of my pieces for not wanting to waste time and resources.</li>
            <li>I want to identify some sets of rules for my art pricing while also automating the process.</li>
          </ul></p>

        <h2>Project Case</h2>
        <div className="projectSpecial">
          <p>❝To automate a step of my personal business process, saving time and resources.❞</p>

        <div className="spacer"></div>
        
            <p>❝To guide a framework for my prices, easing communication between myself and clients.❞</p>
        </div>

        <div className="noLineSpacer"></div>

        <h2>Project Outcomes</h2>
        <span>Quick and easy to use, floating calculator.</span>

        <img src={require("../../../assets/project1/calcWidget.png")} alt="project 1 showcase on homescreen" className="projectBanner"/>

        <p className="projectDesc">The goals in the long-run are for this interface solution to make the process of investing less 
          intimidating, to encourage financial democracy and equality within society. We hope to give more 
          people who perhaps did not start off with knowledge in the field, a way to explore the topic of 
          crypto investment and make their own decisions after gaining more knowledge. Following this, 
          start-up tech companies may find more investment opportunities, and it can lead to a future with 
          more opportunities for technology advancement.</p>

        <div className="projectSpecial">
          <p>❝I built something something.❞</p>
        </div>

        <h2>Personal art projects – for context and interest only</h2>
        <p className="projectDesc">Alongside my passion for design and tech, I have a strong interest in the visual arts.
          I have been painting both traditionally and digitally for several years, and I find that it is a 
          great way to relax and express my creativity. Below are some examples of my artwork, for the curious and interested.<br />
          Strike up a conversation about my work!</p>
        <div className="art-grid">
          <img src={require("../../../assets/art1.jpg")} alt="art1" />
          <img src={require("../../../assets/art2.jpg")} alt="art2" />
          <img src={require("../../../assets/art3.jpg")} alt="art3" />
        </div>
    </section>
  );
}

export default Project1;
import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupsIcon from '@mui/icons-material/Groups';

function Project1() { // OBS: double check the class in css
  return (
    <section className="projectPage">
      <h1>Commission Pricing Calculator</h1>
      <section className="projectInfoGrid">
        <p><AccessTimeFilledIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }} /><br />2 weeks</p>
        <p><GroupsIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/><br />individual work</p>
      </section>

      <img src={require("../../../assets/project1/calcBanner.png")} alt="project 1 banner" className="projectBanner"/>
      
      <h2>Gained Experience</h2>
      <p><TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Grew more confident using Git, ReactJS, and Electron<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Solved real problems through practical design</p>

      <div className="spacer" />

      <h2>Project Description</h2>
      <span>Tackling a personal hindrance.</span>
      <p className="desc">In the summer of 2025, I decided to begin a new artistic journey; creating digital art to sell 
        through commissions, and profiting from a personal hobby. As this was quite a novel endeavor for me, I quickly 
        realized aspects of the process that could use improvement. Deciding the price of art pieces manually was particularly 
        time-consuming, stressful, and often left me second-guessing whether I was undercharging or rushing my work. 
        After identifying this issue, I turned to my own design and development skills to build a tool that would 
        make the process easier: starting the work on a desktop application for calculating art commissions.
      </p>

        <h2>The Problem</h2>
        <span>The difficulty of pricing art.</span>

        <p className="desc">
        I used to decide the price of each artwork independently, usually based on an hourly rate.
        I experienced this system as tedious, and the hourly rate had the unforeseen consequence of pressuring me to work faster,
        hindering my creative process and quality of work. 
        What I needed was a way to establish clear rules for pricing, while automating the repetitive calculations.
        </p>

        <h2>Project Case</h2>
        <div className="projectSpecial">
          <p>❝To automate a step of my personal business process, saving time and resources.❞</p>

        <div className="spacer" />
        
            <p>❝Create a pricing framework, easing communication between myself and clients.❞</p>
        </div>

        <img src={require("../../../assets/project1/calcWireframe.png")} alt="project 1 wireframe" className="projectImg"/>

        <p className="desc">
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
        </p>

        <div className="noLineSpacer" />

        <h2>Project Outcomes</h2>
        <span>A quick and easy to use, floating calculator.</span>

        <img src={require("../../../assets/project1/calcWidget.png")} alt="project 1 showcase on homescreen" className="projectImg"/>

        <div className="projectSpecial">
          <p>❝Automating a personal obstacle, cutting in half the time spent on planning commissions.❞</p>
        </div>

        <p className="desc">The application opens in a floating window to allow for other views simultaneously, seamlessly integrating
          with the rest of my desktop workspace when planning a new commission. 
          With just a few inputs the combination of the project specifications then gets calculated on the click of a button, 
          automating price estimation for the artwork. 
          The result is a tool that streamlines my process, reduces stress, and helps me communicate value more clearly with clients.</p>

          <div className="spacer" />

        <h2>Personal art projects – for context and interest only</h2>
        <p className="desc">As mentioned, this application is to assist me in generating prices for artworks.<br />
          Alongside my passion for design and tech, I have a strong interest in the visual arts.
          I have been painting both traditionally and digitally for several years, and I find that it is a 
          great way to relax and express my creativity. Below are some examples of my artwork, for the curious and interested.</p>
          <div className="artGridContainer">
        <div className="art-grid">
          <img src={require("../../../assets/art1.jpg")} alt="art1" />
          <img src={require("../../../assets/art2.jpg")} alt="art2" />
          <img src={require("../../../assets/art3.jpg")} alt="art3" />
        </div>
        </div>
        <p className="phoneText">scroll →</p>
    </section>
  );
}

export default Project1;
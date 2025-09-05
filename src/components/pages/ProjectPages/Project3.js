import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupsIcon from '@mui/icons-material/Groups';

function Project3() { // OBS: double check the class in css
  return (
    <section className="projectPage">

      <h1>Svoosh: Complete Android Application</h1>
      <section className="projectInfoGrid">
        <p><AccessTimeFilledIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }} />Intensive, 3 months</p>
        <p><GroupsIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>interdisciplinary teamwork</p>
      </section>
      
      <img src={require("../../../assets/project3/svooshBanner.png")} alt="project 3 banner" className="projectBanner"/>
      
      <h2>Gained Experience</h2>
      <p><TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Agile software development, Scrumban<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Completely independent, interdisciplinary teamwork<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>GitHub, Figma, Jira<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Programming: Kotlin, XML</p>

      <div className="spacer"></div>

      <h2>Project Description</h2>
      <span>Roles: Head of design in Figma and XML implementation, Head of user involvement</span>
      <p className="projectDesc">In the class of IN2000: Software Engineering, I worked in an interdisciplinary 
        team with other informatics students (developers + designers) to create an application made to guide 
        the people of Oslo on their bicycling journeys throughout the city. The app uses weather APIs from the 
        Norwegian Meteorological Institute and was created through an agile software development process. <br/>
        After the Covid-19 pandemic, more and more people are using cycling as a mode of transportation in Oslo 
        to avoid public transport. The market for systems aiding the activity is growing significantly. Through 
        the application, we hope to encourage the local people of Oslo to continue to choose sustainable options 
        for public transportation.</p>

        <h2>The Problem</h2>
        <span>write something quick and summarized here.</span>
        <p className="projectDesc">An application for easy access to bicycling paths in Oslo is growing increasingly 
          necessary as more people are engaging in the activity. <br /> 
          Cycling roads are hard to keep track of and few and far between, and often times bikers end up having to 
          cycle on the road, next to dangerous traffic. <br />
          Cycling in poor weather conditions and high traffic areas can worsen the experience and demotivate cyclists 
          from engaging in the activity.</p>

        <h2>Project Case</h2>
        <div className="projectSpecial">
          <p>❝Create an application that shows recommended biking routes in Oslo, where variables such as traffic should 
            be taken into account.❞</p>

        <div className="spacer"></div>
        
            <p>❝Establish a system that raises and maintains commitment and motivation around bicycling as a sustainable 
              mode of transportation; this is important both for the safety of the population and in a larger perspective 
              - for the global society.❞</p>
        </div>

        <div className="noLineSpacer"></div>

        <h2>Independently Collaborating with Other Disciplines</h2>
        <span>write something quick and summarized here.</span>

        <img src={require("../../../assets/project3/svooshTimelinePic.png")} alt="project 3 timeline" className="projectBanner"/>

        <p className="projectDesc">Talk about meetings.</p>
        <p className="projectDesc">The goals and objectives... Something about user involvement. 
          Focus on the local environment and surroundings and be future-oriented. Give the user the option to add 
          locations to their favorites, for easy access and usability. Recommend relevant biking paths for the user, 
          depending on weather and air quality, to motivate and encourage using bicycling as a mode of transportation. 
          Display the weather and air quality in the area to help the user plan their bicylcing days and routes.</p>

        <h2>Project Outcomes</h2>
        <span>write something quick and summarized here.</span>
        <p className="projectDesc">These objectives are only within the scope of the project timeline. The goal in 
          the long-run is for this application to encourage and help the people of Oslo choose bicycling as a 
          preferred mode of transportation to make Oslo a more sustainable city. We aim to give more planning 
          opportunities for the people interested in bicycling in Oslo, to make it into a more enjoyable experience, 
          and continue to motivate bicycling as a healthy personal habit.</p>

        <div className="projectSpecial">
          <p>❝I built something something.❞</p>
        </div>
    </section>
  );
}

export default Project3;
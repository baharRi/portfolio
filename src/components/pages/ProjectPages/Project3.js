import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';

function Project3() { // OBS: double check the class in css
  return (
    <section className="projectPage">

      <h1>Svoosh: Turning city cycling into a first-choice transport</h1>
      <section className="projectInfoGrid">
        <p><AccessTimeFilledIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }} /><br />intensive 3 months</p>
        <p><GroupsIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/><br />interdisciplinary team</p>
      </section>
      
      <img src={require("../../../assets/project3/svooshBanner.png")} alt="project 3 banner" className="projectBanner"/>
      
      <h2>Gained Experience</h2>
      <p><TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Agile software development (Scrumban)<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Completely independent, interdisciplinary teamwork<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Tools: GitHub, Figma, Jira<br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Programming: Kotlin, XML</p>

      <div className="spacer"></div>

      <h2>Project Description</h2>
      <span>Svoosh: A complete Android application</span>
      <p className="desc">
        <p><PersonIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/><strong>My roles: Lead designer and Head of user involvement</strong></p>
        In the course of IN2000: Software Engineering, I worked in an interdisciplinary 
        team of six (3 developers + 3 designers) to create an application made to guide 
        the people of Oslo on their bicycling journeys throughout the city. The app integrates live weather and air quality data from the 
        Norwegian Meteorological Institute as well as a map with live traffic updates from Google. This project was conducted following
        an agile software development approach – specifically the hybrid approach of Scrumban – which was tracked through Jira. <br/>
        <br />After the Covid-19 pandemic, a surge of people are using bicycling as an alternative to transportation in Oslo 
        to avoid crowded public transport. However, the activity has unpredictable aspects such as heavy traffic and weather conditions
        that opens the market for systems aiding the process. Our application hopes to further encourage the local people 
        of Oslo to continue to choose sustainable options for public transportation by easing these challenges.</p>

        <h2>The Problem</h2>
        <span>Over 70% of Oslo bikers mention moderate to high traffic in their routes, impacting the experience.</span>

        <p className="desc">An application for easy access to bicycling paths in Oslo is growing increasingly 
          necessary as more people are engaging in the activity. 
          Additionally, cycling roads in the city are hard to keep track of and few and far between, and often times, bikers end up having to 
          cycle on the road next to dangerous traffic. Lastly, 
          cycling in poor weather conditions and high traffic areas can worsen the experience and demotivate cyclists 
          from engaging in the activity.</p>

        <h2>Project Case</h2>
        <div className="projectSpecial">
          <p>❝Create an application that shows recommended biking routes in Oslo, where variables such as traffic should 
            be taken into account.❞</p>

        <div className="spacer"></div>
        
            <p>❝Encourage commitment to sustainable transportation alternatives — improving safety and health locally while supporting 
              broader global sustainability goals.❞</p>
        </div>

        <div className="noLineSpacer"></div>

        <h2>Teamwork and Agile Development process</h2>
        <span>Getting comfortable and establishing a routine.</span>

        <img src={require("../../../assets/project3/svooshDiagram.png")} alt="project 3 team responsibilities" className="projectImg"/>

        <p className="desc">Our team adopted agile practices with weekly stand-ups and retrospective meetings every 3 weeks, with a rotating 
          scrum master each week. 
          In our task delegation, we split the team into various sub-teams to focus on front-end, back-end, and data collection. 
          As the lead designer, I was responsibly for Figma prototyping along with the other designers, as well as implementing 
          these desings in the app's XML. Within the design process, I collaborated closely across other team roles while keeping 
          users at the center of decision-making; following my additional responsibility of user involvement.</p>

        <h2>User Involvement</h2>
        <span>Collaborating with the user group throughout all phases.</span>

        <img src={require("../../../assets/project3/svooshUsers.png")} alt="project 3 data from user involvement" className="projectImg"/>
        
        <p className="desc">
          When discussing user involvement, our team met our first roadblock. The designers, including myself, were adamantly pushing
          for strong user involvement from the start; but the developers were skeptical. However, after sharing the results, 
          the entirety of our team agreed about the undeniable value in the collected data. Our user involvement consisted of the 
          following, where the insights of these sessions gave us information we took further in the app's development:
          <ul>
          <li>Introductory survey: <br />80+ participants shaped our MVP and functional requirements</li>
          <li>2 in-depth interviews: <br /> refined our priorities and clarified pain points</li>
          <li>Usability testing: <br /> final validation of the high-fidelity prototype before tweaks and submission</li>
        </ul>
        </p>

        <h2>Project Outcomes</h2>
        <span>A user-centered biking app to promote sustainable transportation.</span>

        <img src={require("../../../assets/project3/svooshFinal.png")} alt="project 3 final UI" className="projectImg"/>

        <p className="desc">The finished app recommends biking paths tailored to weather and air quality, while also allowing 
          users to save favorite routes for easy access; something that came up through our user involvement. It creates safer, 
          more enjoyable cycling experiences and motivates people to stick with biking as a healthy, sustainable habit.
          In the long run, this solution can help reduce car dependency in Oslo as well as crowded public transportation options, and 
          support the city's vision of maintaining their title as a green capital.<br />

          <br />This project was one of my most rewarding teamwork experiences, and one of my favorite endeavors throughout my degree. 
          It taught me how to delegate tasks efficiently and lead with user involvement as a core principle in my future projects. 
          Additionally, working so independently with developers gave me valuable insight into bridging design and development, and 
          I left this course feeling content with the work we had done together as a team.
          </p>

        <div className="projectSpecial">
          <p>❝Encourages sustainable transportation by helping cyclists plan safer, faster routes; reducing reliance on 
            cars in the green city of Oslo.❞</p>
        </div>
    </section>
  );
}

export default Project3;
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupsIcon from '@mui/icons-material/Groups';

function Project2() { // OBS: double check the class in css. make top a grid
  return (
    <section className="projectPage">

      <h1>AtomIQ: Making crypto trading accessible for first-time investors</h1>
      
      <section className="projectInfoGrid">
        <p><AccessTimeFilledIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }} /><br />4 months</p>
        <p><GroupsIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/><br />groupwork</p>
      </section>


      <img src={require("../../../assets/project2/atomiqBanner.png")} alt="project 2 banner" className="projectBanner"/>
      
      <h2>Gained Experience</h2>
      <p>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Methodology: Transformative Design <br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Methods: future scenarios, experimental design, Tarot Cards of Tech <br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Grew highly comfortable using Figma <br/>
      <TrendingUpIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/>Collaborated closely with an established start-up team</p>

      <div className="spacer"></div>

      <h2>Project Description</h2>
      <span>Sustainable Development of Investment App UI</span>
      <p className="desc">
        <p><PersonIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 8 }}/><strong>My role: Lead Figma designer/prototyper</strong></p>
        In the course of IN3010: Transformative Design with a focus on social 
        sustainability, I, along with 3 other designers, partnered with the core team of AtomIQ; a start-up developing novel 
        blockchain technology in the financial sector. Our task was to design the interaction layer for their upcoming investment app.

        Crypto trading platforms are notoriously overwhelming for beginners; something we encountered ourselves during data collection. 
        Thus, we developed a novel interface layout to compliment their novel technology. My team and I designed a card-based dashboard 
        that breaks the experience into smaller, digestible chunks of information, countering the often overwhelming and complex layouts 
        of existing competitors. Through this, our goal was to emphasize education and empowerment in personal investment activities, 
        subsequently contributing to democratize the financial sector.</p>

        <h2>The Problem</h2>
        <span>Steep learning curves and intimidating layouts make crypto trading too complex for first-time investors.</span>

        <img src={require("../../../assets/project2/atomiqPlanning.png")} alt="project 2 banner" className="projectImg"/>

        <p className="desc">
          We found after qualitative data collection (5 in-depth interviews) that existing crypto trading apps today are often considered confusing, 
          overwhelming, and even scary for first-time investors. Additionally, start-ups with promising, sustainable technology often lack funding 
          for strong UX/UI design. The goal of AtomIQ's novel technology is to rely on less environmentally damaging datamining
          practices; and our interface design aims to preface this through a simple, welcoming, and educational user experience.</p>

        <h2>Project Case</h2>
        <div className="projectSpecial">
          <p>❝To conceptualize a new age stocks and trading platform, which emphasizes democratization, 
            accessibility and sustainability.❞</p>

            <div className="spacer"></div>
            
            <p>❝To make investment available to everyone; informing, simplifying, and 
              reducing risk with sustainable investment solutions.❞</p>
        </div>

        <div className="noLineSpacer"></div>

        <h2>Company Collaboration</h2>
        <span>Weekly meetings and numerous workshops with the core AtomIQ team.</span>

        <img src={require("../../../assets/project2/atomiqCoordination.png")} alt="project 2 gigamap from meetings" className="projectImg"/>

        <p className="desc">
          We collaborated closely with the core AtomIQ team through weekly meetings and numerous design workshops, where we 
          mapped out stakeholders, user needs, trends, and values, along with their visions for the application. Thus, we generated 
          a gigamap that outlined the ecosystem of the app and guided our design direction. 
          Key objectives in the brainstorming phase included the following: 
          <ul>
            <li>Making crypto trading apps more comprehensible</li>
            <li>Educate and inform new investors on concepts and terminology</li>
            <li>Support financial decision-making through transparency, not pressure</li>
          </ul></p>

        <h2>Project Outcomes</h2>
        <span>Simple UI combined with novel technology.</span>

        <img src={require("../../../assets/project2/atomiqWireframe.png")} alt="project 2 UI wireframe" className="projectImg"/>

        <p className="desc">
          The resulting design breaks down the heavy content in crypto investment into more comprehensible chunks,
          combining AtomIQ's innovative technology with an accessible and approachable interface. This solution reduces the 
          cognitive load for new investors, while supporting their personal financial decisions. In the long-run, we hope to 
          open up opportunities for more people to explore personal investment in the financial market. Following this, 
          start-up tech companies may find more funding, and it can lead to a future with 
          more opportunities for sustainable technological advancement.</p>

        <div className="projectSpecial">
          <p>❝Rethinking the crypto trading experience and designing an interface accessible to first-time users: 
            opening up new, sustainable opportunities for potential investors.❞</p>
        </div>
    </section>
  );
}

export default Project2;
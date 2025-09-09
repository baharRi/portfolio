import React from "react";
import LaunchIcon from '@mui/icons-material/Launch';

function Project4() { // OBS: double check the class in css
  return (
    <div>
    <section className="projectPage">
      <h1>Master's thesis: Designing Against False Information on Social Media</h1>

      <div className="projectSpecial">
        <p>❝<strong>Thesis title:</strong> Understanding the Role of Technology and Community Interactions in the Lived 
          Experience of Online False Information❞</p>
      </div>

      <h2>Project Description</h2>
      <span>A Phenomenological Perspective on Encounters with False Information through Sense-making, 
        Social Interactions, and Media Literacy</span>
      
      <p className="desc">With my focus on encouraging sustainability and justice through 
      technology, my academic research aims to tackle the issue of false information (i.e. mis- 
      and disinformation) spread through social media platforms. This thesis operates under the fields of
      CSCW (Computer-Supported Cooperative Work) and social computing, both concerned with 
      the entanglement of technology with everyday life, and acknowledging the social aspects 
      and phenomena involved with technological advancements.</p>

      <h2>The Problem</h2>
      <span>False information online is usually handled quantitively</span>
      <p className="desc">False information on social media poses a serious challenge to democracy and social 
        sustainability, threatening users' right to proper, trustworthy information. While detection algorithms 
        and fact-checking have been emphasized, little attention has been given to the lived experiences of users 
        who encounter false information daily.</p>

      <h2>Research Approach</h2>
      <span>Qualitative, phenomenological research resulting in experience-oriented design implications</span>
      <p className="desc">
        Using a phenomenological approach, I conducted 12 in-depth interviews to understand users' lived experiences 
        under real circumstances when encountering false information across three different social media platforms: X, 
        Instagram, and YouTube. This revealed how various platforms influence people's practices in accessing information 
        as well as how they navigate uncertainty, manage emotions, and communicate with others in these situations online. 
      </p>

      <h2>Project Outcomes</h2>
      <span>A novel perspective in social media design</span>
      <p className="desc">My novel contribution, through a phenomenological research process, allows for a deeply human-centered
        focus on the experience of encountering false information on social media. Understanding these experiences 
        is essential for supporting media literacy and fostering technological democratization, grounded in real circumstances.
        For handling this issue, discerning design implications with a focus on promoting media literacy provides a step 
        towards this democratization, attempting to mitigate the harmful effects of false information. 
        I present the following design implications in my thesis:
      <ul>
        <li>Design for experiences: make them salient</li>
        <li>Facilitate sense-making processes online</li>
        <li>Integrate spatial separation and situational awareness</li>
      </ul>
      A published article detailing the work of this thesis is underway, and will be available to read on this page.</p>
</section>

<section className="projects">
<a href="https://recruitfacts.wordpress.com" target="_blank" rel="noreferrer noopener"><button id="wordpress" type="button">Project information website<LaunchIcon style={{ verticalAlign: 'middle', marginLeft: 8 }}/></button></a>
</section>
</div>
  ); // clean up bottom button (new class centeredButton?)
}

export default Project4;
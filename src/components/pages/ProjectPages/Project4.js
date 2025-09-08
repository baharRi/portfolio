import React from "react";
import LaunchIcon from '@mui/icons-material/Launch';

function Project4() { // OBS: double check the class in css
  return (
    <div>
    <section className="projectPage">
      <h1>Master's thesis: Mitigating False Information on Social Media</h1>

      <div className="projectSpecial">
        <p>❝<strong>Title:</strong> Understanding the Role of Technology and Community Interactions in the Lived 
          Experience of Online False Information❞</p>
      </div>

      <h2>Project Description</h2>
      <span>A Phenomenological Perspective on Encounters with False Information through Sense-making, 
        Social Interactions, and Media Literacy</span>
      
      <p className="desc">With my focus on encouraging sustainability and justice through 
      technology, my academic research aims to tackle the issue of false information (i.e. mis- 
      and disinformation) spread through social media platforms. My fields of interest within informatics for this topic are 
      CSCW (Computer-Supported Cooperative Work) and Social Computing, both concerned with 
      the entanglement of technology with everyday life, and acknowledging the social aspects 
      and phenomena involved with technological advancements.</p>

      <h2>The Problem</h2>

      <p className="desc">An overarching goal of contribution for this research is to 
      maintain social sustainability through democracy and enabled through their right of 
      proper information to the users of social media platforms.</p>


      <h2>Project Outcomes</h2>
      <p className="desc">Interactions is essential in understanding how to support media 
      literacy and encouraging technological democratization with a focus on people’s lived 
      experiences underlining their right to rightful information. For handling this issue, 
      discerning design implications with a focus on promoting media literacy provides a step 
      towards this democratization, attempting to mitigate the harmful effects of false information.<br />
      A shorter article detailing the work of this thesis is underway.</p>
</section>

<section className="projects">
<a href="https://recruitfacts.wordpress.com" target="_blank" rel="noreferrer noopener"><button id="wordpress" type="button">Project information website<LaunchIcon style={{ verticalAlign: 'middle', marginLeft: 8 }}/></button></a>
</section>
</div>
  ); // clean up bottom button (new class centeredButton?)
}

export default Project4;
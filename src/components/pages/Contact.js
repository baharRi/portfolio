import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() { // TODO: add icons
  return (
    <section className="greet">
      <h1>Feel free to contact me!</h1>
      <p>LinkedIn · E-Mail · GitHub</p>
      <div className="contactLinks">
      <a href="https://www.linkedin.com/in/bahar-riazi-b15213319" target="_blank" rel="noreferrer noopener"><LinkedInIcon fontSize="large" /></a>
      <a href="mailto:riazibahar@gmail.com"><EmailIcon fontSize="large" /></a>
      <a href="https://github.com/baharRi" target="_blank" rel="noreferrer noopener"><GitHubIcon fontSize="large" /></a>
      </div>
      <p>riazibahar@gmail.com</p>
    </section>
  );
}

export default Contact;

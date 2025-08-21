import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() { // TODO: add icons
  return (
    <section className="greet">
      <h1>Feel free to contact me!</h1>
      <p>LinkedIn · E-Mail · GitHub</p>
      <LinkedInIcon/>
      <EmailIcon/>
      <GitHubIcon/>
    </section>
  );
}

export default Contact;

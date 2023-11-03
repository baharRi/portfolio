import "../styles/IntroPage.css";
import { TypingText } from "../TypingText.js";

export function IntroPage() {
  return (
    <div className="intro">
      <header className="App-header">
        <img
          className="introImg"
          src="https://images.unsplash.com/photo-1626646525907-6f7007060624?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvb2wlMjBzcHJpbmd8ZW58MHx8MHx8fDA%3D"
          alt=""
        />

        <h1>
          Hello. I'm <br />
          <TypingText />
        </h1>
        <button className="headBtn">
          <a href="#contactMe">Contact me</a>
        </button>
      </header>
      <div className="page-content">
        <h2 className="intro-heading">Designer</h2>
        <p>
          I am an informatics student specializing in UX/UI design and frontend
          development.
        </p>
      </div>
    </div>
  );
}

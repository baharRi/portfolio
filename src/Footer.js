import "./styles/Footer.css";
export function Footer() {
  return (
    <footer className="footer-heading" id="contactMe">
      <div id="bottomDivider"></div>
      <h2>Contact Me</h2>
      <ul>
        <li class="contactItem">
          <i class="fa-regular fa-envelope"></i>
          <a class="contactLink" href="mailto:baharri@uio.no" target="_blank">
            Email me
          </a>
          <p>baharri@uio.no</p>
        </li>
        <li class="contactItem">
          <i class="fa-solid fa-code"></i>
          <a
            class="contactLink"
            href="https://github.com/baharRi"
            target="_blank"
          >
            My GitHub
          </a>
          <p>baharRi.github.io</p>
        </li>
      </ul>
    </footer>
  );
}

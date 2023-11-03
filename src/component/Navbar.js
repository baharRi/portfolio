import "./Navbar.css";
export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="navbar">
        <a className="logo">
          <a href="#about" className="ml-3 text-xl">
            Bahar
          </a>
        </a>
        <nav className="dropdown">
          <button className="dropbtn">About Me</button>
          <div className="dropdown-content">
            <a href="#about">About me</a>
            <ul>
              <a href="#">Values and skills</a>
              <a href="#">Background and education</a>
            </ul>
          </div>
        </nav>
        <a href="#projects">My Projects</a>
      </div>
    </header>
  );
}

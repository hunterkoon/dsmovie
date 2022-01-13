import { ReactComponent as GitHubIcon } from "../../assets/img/github.svg";
import './style.css'

function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
        <a href="https://github.com/hunterkoon/dsmovie">
          <div className="dsmovie-contact-container">
            <GitHubIcon className="dsmovie-img-github"/>
            <p>/devsuperior</p>
          </div>
        </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

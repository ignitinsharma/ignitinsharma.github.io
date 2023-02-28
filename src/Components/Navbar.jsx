import "../CSS/Navbar.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import React from "react";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <header className="header" style={{ backgroundColor: "white" }}>
        <a href="/" className="logo">
          &lt;/Nitin&gt;
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link
              to="/"
              activeClass="active"
              onClick={() => animateScroll.scrollToTop()}
              spy={true}
              smooth={true}
              duration={1000}
            >
              🏠 Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              offset={150}
              smooth={true}
              duration={1500}
              spy={true}
              hashSpy={true}
            >
              👋 About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              offset={-50}
              smooth={true}
              duration={1500}
              spy={true}
              hashSpy={true}
            >
              🛠️ Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              offset={-50}
              smooth={true}
              duration={1500}
              spy={true}
              hashSpy={true}
            >
              📚 Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={1500}
              spy={true}
              hashSpy={true}
            >
              🤙 Contact
            </Link>
          </li>
          <li>
            <div className="resumeBox">
              <a
                className="resume"
                href="https://drive.google.com/uc?export=download&id=1rzydD2R905DRz60E6Mx6ukZKEWTkGsEE"
                download={"Nitin-sharma-resume"}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1rzydD2R905DRz60E6Mx6ukZKEWTkGsEE/view?usp=sharing"
                  )
                }
                rel="noreferrer"
              >
                Resume
                <LibraryBooksIcon />
              </a>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;

// href="https://drive.google.com/uc?export=download&id=1rzydD2R905DRz60E6Mx6ukZKEWTkGsEE"
// download={"Nitin-sharma-resume"}
// onClick={() =>
//   window.open(
//     "https://drive.google.com/file/d/1rzydD2R905DRz60E6Mx6ukZKEWTkGsEE/view?usp=sharing"
//   )
// }

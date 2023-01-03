import "../CSS/Navbar.css";
// import backgroundImage from '../Resources/Images/backgroundHome.jpg';
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import React, { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [head, setHead] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80 || head) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  useEffect(() => {
    if (head || colorChange) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  }, [head, colorChange]);
  return (
    <div className="NavbarContainer">
      <header
        className="header"
        style={{ backgroundColor: `${colorChange ? "white" : "transparent"}` }}
      >
        <a href="/" className="logo">&lt;/Nitin&gt;</a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link
              activeClass="active"
              to="/"
              onClick={() => animateScroll.scrollToTop()}
              spy={true}
              smooth={true}
            >
              🏠 Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
            >
              👋 About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
            >
              🛠️ Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
            >
              📚 Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
            >
              🤙 Contact
            </Link>
          </li>
          <li>
            <div className="resumeBox">
              <a
                className="resume"
                // href="https://drive.google.com/file/d/1Tr4JaRtllSROzZWTEwdR4aAUXlfb5CLR/view?usp=share_link"
                target="_blank"
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

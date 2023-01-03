import React from "react";
import "../CSS/Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import StreamIcon from "@mui/icons-material/Stream";
import ProjectImage from "../Images/Project/Booking.PNG";
import Html from "../Images/SkillImages/Html.png";
import Css from "../Images/SkillImages/Css.png";
import JavaScript from "../Images/SkillImages/JavaScript.png";
import Git from "../Images/SkillImages/git.png";
import Github from "../Images/SkillImages/Github.png";
import ReactPng from "../Images/SkillImages/react.png";
import Redux from "../Images/SkillImages/redux.png";
import ChakraUi from "../Images/SkillImages/ChakraUi.png";
import Mongodb from "../Images/SkillImages/mongodb.png";
import Nodejs from "../Images/SkillImages/nodejs.png";
import Mern from "../Images/SkillImages/mern.png";
import Express from "../Images/SkillImages/Express.png";
import Nextjs from "../Images/SkillImages/nextjs.png";
import Typescript from "../Images/SkillImages/ts.png";

const Projects = () => {
  return (
    <div className="ProjectMain">
      <h1 className="ProjectH1">Projects</h1>
      <div className="ProjectSection">
        <div className="ProjectLeftSection">
          <h2 className="ProjectName">01. Booking</h2>
          <div className="ProjectLeftGreen">
            <p style={{ color: "white" }}>
              Booking.com, headquartered in Amsterdam, is one of the largest
              online travel agencies which is operating on online Hotels,
              Flights, Tour pacakges etc.
            </p>
          </div>
          {/* <p className="PTagTechStack">TechStack </p> */}
          <div className="TechStack">
            <div className="TechStackContainer">
              <p>ReactJS</p>
              <img className="TechStackImages" src={ReactPng} alt="" />
            </div>
            <div className="TechStackContainer">
              <p>HTML</p>
              <img className="TechStackImages" src={Html} alt="" />
            </div>
          </div>
          <div className="linkSection">
            <a href="">
              <button style={{fontWeight:'600'}}>
                <GitHubIcon />
                Github
              </button>
            </a>
            <a href="">
              <button style={{fontWeight:'600'}}>
                <StreamIcon />
                Live
              </button>
            </a>
          </div>
        </div>
        <div className="ProjectRightSection">
          <img className="ProjectImages" src={ProjectImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;

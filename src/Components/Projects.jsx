import React from "react";
import "../CSS/Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import StreamIcon from "@mui/icons-material/Stream";
import BookingImage from "../Images/Project/Booking.PNG";

// import ProjectsData from "../Data/ProjectData.js";

const ProjectsData = () => [
  {
    id: 1,
    title: "Booking Clone",
    img: BookingImage,
    desc: "Booking.com, headquartered in Amsterdam, is one of the largest online travel agencies which is operating on online Hotels, Flights, Tour pacakges etc.",
    githubLink: "https://github.com/MoHitksS/organic-market",
    deployedLink: "https://organicmarket.netlify.app/",
    tags: [
      "React",
      "Material UI",
    ],
  },
];

const Projects = () => {
  return (
    <div className="ProjectMain">
      <h1 className="ProjectH1">Projects</h1>
      {/* {ProjectsData.map((el) => ( */}
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

            <div className="TechStackContainer">
              <p className="PTagForSKills">React</p>
              <p className="PTagForSKills">React</p>
              <p className="PTagForSKills">React</p>
            </div>
            <div className="linkSection">
              <a href="">
                <button className="ProjectButtons">
                  <GitHubIcon />
                  <p style={{ marginLeft: "0.3rem" }}>Github</p>
                </button>
              </a>
              <a href="">
                <button className="ProjectButtons">
                  <StreamIcon />
                  <p style={{ marginLeft: "0.3rem" }}>Live</p>
                </button>
              </a>
            </div>
          </div>
          <div className="ProjectRightSection">
            <img className="ProjectImages" src={BookingImage} alt="" />
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};

export default Projects;

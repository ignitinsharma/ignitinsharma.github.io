import React from "react";
import "../CSS/Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import StreamIcon from "@mui/icons-material/Stream";
// import BookingImage from "../Images/Project/Booking.PNG";

import ProjectsData from "../Data/ProjectData.js";

// const DataFunc = () => [
//   {
//     id: 1,
//     title: "Booking Clone",
//     img: BookingImage,
//     desc: "Booking.com, headquartered in Amsterdam, is one of the largest online travel agencies which is operating on online Hotels, Flights, Tour pacakges etc.",
//     githubLink: "https://github.com/MoHitksS/organic-market",
//     deployedLink: "https://organicmarket.netlify.app/",
//     tags: [
//       "React",
//       "Material UI",
//     ],
//   },
//   {
//     id: 1,
//     title: "Booking Clone",
//     img: BookingImage,
//     desc: "Booking.com, headquartered in Amsterdam, is one of the largest online travel agencies which is operating on online Hotels, Flights, Tour pacakges etc.",
//     githubLink: "https://github.com/MoHitksS/organic-market",
//     deployedLink: "https://organicmarket.netlify.app/",
//     tags: [
//       "React",
//       "Material UI",
//     ],
//   },
// ];

const Projects = () => {
  return (
    <div className="ProjectMain">
      <h1 className="ProjectH1">Projects</h1>
      {ProjectsData.map((el) => (
        <div className="ProjectSection">
          <div className="ProjectLeftSection">
            <h2 className="ProjectName">{el.title}</h2>
            <div className="ProjectLeftGreen">
              <p style={{ color: "white" }}>{el.desc}</p>
            </div>

            <div className="TechStackContainer">
              {el.tags.map((tags, i) => (
                <p className="PTagForSKills" key={i}>
                  {tags}
                </p>
              ))}
            </div>
            <div className="linkSection">
              <a href={el.githubLink}>
                <button className="ProjectButtons">
                  <GitHubIcon />
                  <p style={{ marginLeft: "0.3rem" }}>Github</p>
                </button>
              </a>
              <a href={el.deployedLink}>
                <button className="ProjectButtons">
                  <StreamIcon />
                  <p style={{ marginLeft: "0.3rem" }}>Live</p>
                </button>
              </a>
            </div>
          </div>
          <div className="ProjectRightSection">
            <img className="ProjectImages" src={el.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

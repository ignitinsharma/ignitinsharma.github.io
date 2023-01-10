import React from "react";
import "../CSS/Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectsData from "../Data/ProjectData.js";
import LaunchIcon from '@mui/icons-material/Launch';

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
                  <GitHubIcon />
              </a>
              <a href={el.deployedLink}>
                  <LaunchIcon />
                  {/* <p style={{ marginLeft: "0.3rem" }}>Live</p> */}
                {/* <button className="ProjectButtons">
                </button> */}
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

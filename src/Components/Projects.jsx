import React from "react";
import "../CSS/Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectsData from "../Data/ProjectData.js";
import SecondryPojects from "../Data/SecondryPojectsData.js";
import LaunchIcon from "@mui/icons-material/Launch";

const Projects = () => {
  return (
    <div id="projects" className="ProjectMain">
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
              <a target="_blank" href={el.githubLink}>
                <GitHubIcon />
              </a>
              <a target="_blank"href={el.deployedLink}>
                <LaunchIcon />
              </a>
            </div>
          </div>
          <div className="ProjectRightSection">
            <img className="ProjectImages" src={el.img} alt="" />
          </div>
        </div>
      ))}

      <div className="SecondProjectParent">
        <h1 className="SecondProjectH1">Other Noteworthy Projects</h1>
        {/* Grid */}
        <div className="SecondProjectSection">
          {SecondryPojects.map((ele, i) => (
            <div key={i} class="SingleProductDiv">
              <div>
                <img className="SingleProjectsImage" src={ele.img} alt="" />
              </div>
              <div>
                <p className="SecondProjectTitleTag">{ele.title}</p>
                <p className="SecondProjectPforDesc">{ele.desc}</p>
                <div className="SecondProjectSpanDiv">
                  {ele.tags.map((tags, i) => (
                    <span className="SingleProjectsPTag" key={i}>
                      {tags},
                    </span>
                  ))}
                </div>
                <div className="SecondProjectLinkDiv">
                  <a target="_blank" href={ele.githubLink}>
                    <GitHubIcon />
                  </a>
                  <a target="_blank" href={ele.deployedLink}>
                    <LaunchIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

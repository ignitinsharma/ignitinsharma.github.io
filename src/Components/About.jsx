import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
// import myImage from "../Resources/Images/Personal/Profile_pic_mine.png";
import myImage2 from "../Resources/Images/Personal/Profile_pic_mine_2.png";
import mysignature from "../Resources/Images/Personal/Nitin_signature.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import "../CSS/About.css";

const About = () => {
  return (
    <div id="about">
      <div className="Container">
        <div className="aboutBox">
          <div className="about_leftBox">
            <h1 style={{ fontWeight: "600", fontSize: "1.3rem" }}>
              Hi 👋, I'm <h3 className="about_box_h3">Nitin Sharma</h3>
            </h1>
            <p>
              I am Full Stack Web Developer and i have knowledge in HTML, CSS,
              Javascript, REACT, Chakra-ui and i make user-friendly websites.
            </p>
            <a href="">
              {/* https://drive.google.com/uc?export=download&id=1Tr4JaRtllSROzZWTEwdR4aAUXlfb5CLR */}
              <button className="DownloadResumeBtn">
                Download Resume
                <DownloadIcon />
              </button>
            </a>
          </div>
          <div className="about_rightBox">
            <div>
              <div class="Imageshape">
                <img
                  className="myPersonalImage"
                  src={myImage2}
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutMeSection">
        <div className="aboutSection">
          <div className="left">
            <h3>Personal Details</h3>
            <p></p>
            <p>
              Email: <span>ignitinsharma@outlook.com</span>
            </p>
            <p>
              Language: <span>English</span>
            </p>
            <p>
              Nationality: <span>Indian</span>
            </p>
            <div className="IconsContainer">
              <a target="_blank" href="https://github.com/ignitinsharma">
                <GitHubIcon className="AboutIcons" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/ignitinsharma">
                <LinkedInIcon className="AboutIcons" />
              </a>
              <a target="_blank" href="https://twitter.com/ignitinsharma">
                <TwitterIcon className="AboutIcons" />
              </a>
            </div>
          </div>
          <div className="right">
            <h2>
              I am <span>Full Stack Web Developer</span>
            </h2>
            <p>
              My name is Nitin Sharma, I am from Bahadurgarh, Haryana.
              Passionate Full Stack Web Developer with skills in the MERN stack,
              I have learned Full Stack Web Development in Masai school. Skilful
              in problem-solving and building new things using technology. I
              look forward to joining a company where I can contribute to
              individual and company growth..
            </p>
            <div>
              <img
                className="SignatureImage"
                src={mysignature}
                alt="Nitin_Signature"
                width="200px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

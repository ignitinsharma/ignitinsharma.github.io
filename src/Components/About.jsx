import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import myImage from "../Resources/Images/Personal/Profile_Photo.jpg";
import mysignature from "../Resources/Images/Personal/Nitin_signature.png";

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
              Javascript, REACT, ChakraUi and i make user-friendly websites.
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
              <img src={myImage} alt="" width="100%" />
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
              <img className="SignatureImage" src={mysignature} alt="Nitin_Signature" width="200px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

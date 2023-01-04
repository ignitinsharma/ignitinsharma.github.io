import React from "react";
import "../CSS/Footer.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className="FooterSection">
      <div className="footerCredit">
        <p>Handcrafted with ❤ & imagination by Nitin Sharma.</p>
      </div>
      <div className="IconContainer">
        <a target="_blank" href="https://github.com/ignitinsharma">
          <GitHubIcon className="FooterIcons" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/ignitinsharma">
          <LinkedInIcon className="FooterIcons" />
        </a>
        <a target="_blank" href="https://twitter.com/ignitinsharma">
          <TwitterIcon className="FooterIcons" />
        </a>
      </div>
      <p className="LinePTag"></p>
    </div>
  );
};

export default Footer;

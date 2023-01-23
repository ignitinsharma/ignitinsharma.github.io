import React from "react";
import "../CSS/Contact.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Contact = () => {
  return (
    <div id="about" className="ContactContainer">
      <div className="contact">
        <div className="contactText">
          <div>
            <h1 className="GithubH1">Contact Me</h1>
          </div>
          <div className="middleSection">
            <div>
              <LinkedInIcon fontSize="large" />
              <h1>LinkedIn</h1>
              <p>You can contact me on LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/ignitinsharma"
                rel="noreferrer"
                target="_blank"
              >
                <p>Nitin Sharma</p>
              </a>
            </div>
            <div>
              <TwitterIcon fontSize="large" />
              <h1>Twitter</h1>
              <p>You can contact me on Twitter</p>
              <a
                href="https://twitter.com/ignitinsharma"
                rel="noreferrer"
                target="_blank"
              >
                <p>@ignitinsharma</p>
              </a>
            </div>
            <div>
              <PhoneIcon fontSize="large" />
              <h1>Phone</h1>
              <p>My Phone Number</p>
              <a href="tel:+919034759540" rel="noreferrer" target="_blank">
                <p>+91-9034759540</p>
              </a>
            </div>
            <div>
              <EmailIcon fontSize="large" />
              <h1>Email</h1>
              <p>You can Simply mail me just by clicking on my email</p>
              <a
                href="mailto:ignitinsharma@outlook.com"
                rel="noreferrer"
                target="_blank"
              >
                <p>ignitinsharma@outlook.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

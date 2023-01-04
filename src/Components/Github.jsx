import React from "react";
import GitHubCalendar from "react-github-calendar";
import "../CSS/Github.css";

const Github = () => {
  return (
    <div style={{ marginTop: "-20px" }}>
      <h1 className="GithubH1">Github Stats</h1>
      <div  className="GithubContainer">
        <GitHubCalendar
          username="ignitinsharma"
          year={new Date().getFullYear()}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
      <div className="statsDiv">
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=ignitinsharma&show_icons=true&locale=en"
          alt="ignitinsharma"
        />
        <img
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=ignitinsharma&"
          alt="ignitinsharma"
        />
      </div>
    </div>
  );
};

export default Github;

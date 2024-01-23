import React from "react";
import MyWebsite from "./Projects/myWebsite";

const Projects = ({ CSSTheme }) => {
  return (
    <div className={CSSTheme + "-Home"}>
      <div id="Projects">
        <h1 className="SectionTitle">Projects</h1>
        <MyWebsite CSSTheme={CSSTheme} />
      </div>
    </div>
  );
};

export default Projects;

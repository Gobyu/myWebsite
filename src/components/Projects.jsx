import React from "react";
import MyWebsite from "./Projects/myWebsite";

const Projects = ({ CSSTheme }) => {
  return (
    <div id="Projects">
      <h1 className="SectionTitle">Projects</h1>
      <MyWebsite CSSTheme={CSSTheme} />
    </div>
  );
};

export default Projects;

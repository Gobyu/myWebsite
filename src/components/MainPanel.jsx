import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Education from "./Education";
import Employment from "./Employment";

const MainPanel = () => {
  return (
    <div className="MainPanel">
      <AboutMe />
      <Education />
      <Employment />
      <Projects />
    </div>
  );
};

export default MainPanel;

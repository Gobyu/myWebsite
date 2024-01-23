import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Education from "./Education";
import Employment from "./Employment";
import Contact from "./Contact";

const MainPanel = ({ CSSTheme }) => {
  return (
    <div className={CSSTheme + "-MainPanel"}>
      <AboutMe CSSTheme={CSSTheme} />
      <Education CSSTheme={CSSTheme} />
      <Employment CSSTheme={CSSTheme} />
    </div>
  );
};

export default MainPanel;

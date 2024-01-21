import React from "react";

const AboutMe = ({ CSSTheme }) => {
  return (
    <>
      <div id={CSSTheme + "-AboutMe"}>
        <h1 className={CSSTheme + "-SectionTitle"}>Lebron James</h1>
        <img
          src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          className="Selfie"
        ></img>
      </div>
      <div>
        <p className={CSSTheme + "-content"}>cum</p>
      </div>
    </>
  );
};

export default AboutMe;

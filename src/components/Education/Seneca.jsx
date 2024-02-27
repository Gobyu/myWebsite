import React from "react";

export const Seneca = ({ CSSTheme }) => {
  return (
    <div className={CSSTheme + "-SectionComponent"}>
        <a href="https://senecapolytechnic.ca" target="_blank">
          <img
            src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/seneca.png?raw=true"
            className="SectionImage"
          />
        </a>
      <div className={CSSTheme + "-SectionDetails"}>
        <h2 className={CSSTheme + "-no-margin"}>Seneca Polytechnic</h2>
        <p className={CSSTheme + "-no-margin"}>
          Honour Bachelor of Technology - Software Development
        </p>
        <p className={CSSTheme + "-no-margin"}>
          01 / 2024 - currently enrolled
        </p>
      </div>
    </div>
  );
};

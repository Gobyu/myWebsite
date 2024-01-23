import React from "react";

const UOttawa = ({ CSSTheme }) => {
  return (
    <div className={CSSTheme + "-SectionComponent"}>
      <div className={CSSTheme + "-SectionImageDiv"}>
        <a href="https://uottawa.ca" target="_blank">
          <img
            src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/uottawa.png?raw=true"
            className="SectionImage"
          />
        </a>
      </div>
      <div className="SectionDetails">
        <h2 className={CSSTheme + "-no-margin"}>University of Ottawa</h2>
        <p className={CSSTheme + "-no-margin"}>BASc Computer Engineering</p>
        <p className={CSSTheme + "-no-margin"}>
          09 / 2020 - 09 / 2023 &#40;withdrew&#41;
        </p>
      </div>
    </div>
  );
};

export default UOttawa;

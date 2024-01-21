import React from "react";

const Chatime = ({ CSSTheme }) => {
  return (
    <div className={CSSTheme + "-SectionComponent"}>
      <div className={CSSTheme + "-SectionImageDiv"}>
        <a href="https://chatime.ca" target="_blank">
          <img
            src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/chatime.png?raw=true"
            className="SectionImage"
          />
        </a>
      </div>
      <div className={CSSTheme + "-SectionDetails"}>
        <h2 className={CSSTheme + "-no-margin"}>Chatime - Tearista</h2>
        <p className={CSSTheme + "-no-margin"}>
          375 Dalhousie Street | 04 / 2023 - 09 / 2023
        </p>
      </div>
    </div>
  );
};

export default Chatime;

import React from "react";

const SoonTM = ({ CSSTheme }) => {
  return (
    <div className={CSSTheme + "-SectionComponent"}>
      <div className={CSSTheme + "-SectionImageDiv"}>
        <a href="https://react.dev/" target="_blank">
          <img
            src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/cat.png?raw=true"
            className="SectionImage"
          />
        </a>
      </div>
      <div className={CSSTheme + "-SectionDetails"}>
        <h2 className={CSSTheme + "-no-margin"}>More Projects to Come!</h2>
        <p className={CSSTheme + "-no-margin"}>Soon™</p>
      </div>
    </div>
  );
};

export default SoonTM;

import React from "react";

const MyWebsite = ({ CSSTheme }) => {
  return (
    <div className={CSSTheme + "-SectionComponent"}>
      <div className={CSSTheme + "-SectionImageDiv"}>
        <a href="https://gobyu.github.io" target="_blank">
          <img
            src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/reactjs.png?raw=true"
            className="SectionImage"
          />
        </a>
      </div>
      <div className={CSSTheme + "-SectionDetails"}>
        <h2 className={CSSTheme + "-no-margin"}>This Website</h2>
        <p className={CSSTheme + "-no-margin"}>ReactJS | HTML | CSS</p>
      </div>
    </div>
  );
};

export default MyWebsite;

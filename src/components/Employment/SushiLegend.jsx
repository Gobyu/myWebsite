import React from "react";

const SushiLegend = ({ CSSTheme }) => {
  return (
    <div className={CSSTheme + "-SectionComponent"}>
      <div className={CSSTheme + "-SectionImageDiv"}>
        <a href="https://sushilegend.ca" target="_blank">
          <img
            src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/sushilegend.jpg?raw=true"
            className="SectionImage"
          />
        </a>
      </div>
      <div className={CSSTheme + "-SectionDetails"}>
        <h2 className={CSSTheme + "-no-margin"}>Sushi Legend - Server</h2>
        <p className={CSSTheme + "-no-margin"}>
          175 Commander Blvd | 12 / 2021 - 08 / 2022
        </p>
      </div>
    </div>
  );
};

export default SushiLegend;

import React from "react";

const SushiLegend = () => {
  return (
    <div className="SectionComponent">
      <div className="SectionImageDiv">
        <a href="https://sushilegend.ca" target="_blank">
          <img src="/public/assets/sushilegend.jpg" className="SectionImage" />
        </a>
      </div>
      <div className="SectionDetails">
        <h2 className="no-margin">Sushi Legend - Server</h2>
        <p className="no-margin">175 Commander Blvd | 12 / 2021 - 08 / 2022</p>
      </div>
    </div>
  );
};

export default SushiLegend;

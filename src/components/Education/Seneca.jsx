import React from "react";

export const Seneca = () => {
  return (
    <div className="SectionComponent">
      <div className="SectionImageDiv">
        <a href="https://senecapolytechnic.ca" target="_blank">
          <img src="/public/assets/seneca.png" className="SectionImage" />
        </a>
      </div>
      <div className="SectionDetails">
        <h2 className="no-margin">Seneca Polytechnic</h2>
        <p className="no-margin">
          Honour Bachelor of Technology - Software Development
        </p>
        <p className="no-margin">01 / 2024 - currently enrolled</p>
      </div>
    </div>
  );
};

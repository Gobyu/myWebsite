import React from "react";

const UOttawa = () => {
  return (
    <div className="SectionComponent">
      <div className="SectionImageDiv">
        <a href="https://uottawa.ca" target="_blank">
          <img src="/src/assets/uottawa.png" className="SectionImage" />
        </a>
      </div>
      <div className="SectionDetails">
        <h2 className="no-margin">University of Ottawa</h2>
        <p className="no-margin">BASc Computer Engineering</p>
        <p className="no-margin">
          09 / 2020 - 09 / 2023 &#40;withdrew program&#41;
        </p>
      </div>
    </div>
  );
};

export default UOttawa;

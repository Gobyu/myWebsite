import React from "react";

const MyWebsite = () => {
  return (
    <div className="SectionComponent">
      <div className="SectionImageDiv">
        <a href="https://gobyu.github.io" target="_blank">
          <img src="/src/assets/reactjs.png" className="SectionImage" />
        </a>
      </div>
      <div className="SectionDetails">
        <h2 className="no-margin">This Website</h2>
        <p className="no-margin">ReactJS | HTML | CSS</p>
      </div>
    </div>
  );
};

export default MyWebsite;

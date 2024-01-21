import React from "react";

const AboutMe = () => {
  return (
    <>
      <div id="AboutMe">
        <h1 className="SectionTitle">Lebron James</h1>
        <img
          src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          className="Selfie"
        ></img>
      </div>
      <div>
        <p className="content">
          Hi, I'm Lebron James. I'm the all-time leading scorer in the NBA and
          currently the oldest player in the NBA. Cum.
        </p>
      </div>
    </>
  );
};

export default AboutMe;

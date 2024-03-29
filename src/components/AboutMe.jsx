import React from "react";

const AboutMe = ({ CSSTheme }) => {
  return (
    <>
      <div id="Gobyu">
        <h1 className="SectionTitle">John Zhao</h1>
        <img
          src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/selfie.jpg?raw=true"
          className="Selfie"
        ></img>
        <img
          src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/mycat.jpg?raw=true"
          className="Selfie"
        ></img>
      </div>
      <div id="AboutMe">
        <p className={CSSTheme + "-content"}>
          Hi, my name is John. I am currently enrolled in my Honours Bachelor of
          Software Development
          <br />
          at Seneca Polytechnic. I enjoy working on the front-end of
          applications to provide a better user
          <br />
          experience, whether it be making a website look & feel better or
          making the UI more intuitive.
          <br />
          Currently, I haven't created many projects. But I'm sure as time goes
          on, my projects section will
          <br />
          begin to grow as well. Feel free to look around, and I hope we can
          work together in the future!
        </p>
      </div>
    </>
  );
};

export default AboutMe;

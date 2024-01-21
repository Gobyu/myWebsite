import React from "react";

const AboutMe = ({ CSSTheme }) => {
  return (
    <>
      <h1 className={CSSTheme + "-SectionTitle"}>John Zhao</h1>
      <div id={CSSTheme + "-AboutMe"}>
        <img
          src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/selfie.jpg?raw=true"
          className="Selfie"
        ></img>
        <img
          src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/mycat.jpg?raw=true"
          className="Selfie"
        ></img>
        <img
          src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/mycat2.jpg?raw=true"
          className="Selfie"
        ></img>
      </div>
      <div>
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

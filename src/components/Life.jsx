import React from "react";

const Life = ({ CSSTheme }) => {
  return (
    <div className={CSSTheme + "-Home"}>
      <div className="life-images">
        <div className="columns">
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/boat.jpg?raw=true"
              className="life-image"
            />
          </div>
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/cat_plushie.jpg?raw=true"
              className="life-image"
            />
            <p className="img-overlay">🐱 🐱 🐱</p>
          </div>
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/coco_art.jpg?raw=true"
              className="life-image"
            />
            <p className="img-overlay">Can someone translate this?</p>
          </div>
        </div>
        <div className="columns">
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/maoi.jpg?raw=true"
              className="life-image"
            />
            <p className="img-overlay">🗿 🗿 🗿</p>
          </div>
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/monkey.jpg?raw=true"
              className="life-image"
            />
            <p className="img-overlay">🖕</p>
          </div>
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/neemo.jpg?raw=true"
              className="life-image"
            />
            <p className="img-overlay">Where's my fuckin son</p>
          </div>
        </div>
        <div className="columns">
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/pond.jpg?raw=true"
              className="life-image"
            />
          </div>
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/seagull.jpg?raw=true"
              className="life-image"
            />
          </div>
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/stop.jpg?raw=true"
              className="life-image"
            />
            <p className="img-overlay">Stop it, get some help.</p>
          </div>
        </div>
        <div className="columns">
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/we_the_north.jpg?raw=true"
              className="life-image"
            />
            <p className="img-overlay">
              The Toronto Raptors are your 2024 NBA Champions.
            </p>
          </div>
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/chatime_stacking.jpg?raw=true"
              className="life-image"
            />
            <p className="img-overlay">2023 Chatime Olympics</p>
          </div>
          <div className="img-container">
            <img
              src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/adopted.jpg?raw=true"
              className="life-image"
            />
            <p className="img-overlay">:&#40;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Life;

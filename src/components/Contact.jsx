import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faSteam,
  faBattleNet,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocation,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ CSSTheme }) => {
  const [visible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible(!visible);
  };

  const currentVisible = () => {
    if (visible) {
      return "visible";
    } else {
      return "invisible";
    }
  };

  return (
    <div className={CSSTheme + "-Home"}>
      <div id="Contact">
        <h1 className="SectionTitle">Contact</h1>
        <p className={CSSTheme + "-content"}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={CSSTheme + "-ContactIcon"}
          />
          &nbsp;&nbsp;john.zhao166@gmail.com
          <br />
          <FontAwesomeIcon
            icon={faPhone}
            className={CSSTheme + "-ContactIcon"}
          />
          &nbsp;&nbsp;+1 647-858-1069
          <br />
          <FontAwesomeIcon
            icon={faDiscord}
            className={CSSTheme + "-ContactIcon"}
          />
          &nbsp;&nbsp;gobyu
          <br />
          <FontAwesomeIcon
            icon={faLocation}
            className={CSSTheme + "-ContactIcon"}
          />
          &nbsp;&nbsp;Toronto, ON
          <br />
        </p>
        <div className={currentVisible()}>
          <h2 className="Other">Other</h2>
          <FontAwesomeIcon
            icon={faSteam}
            className={CSSTheme + "-ContactIcon"}
          />
          <a
            href="https://steamcommunity.com/profiles/76561198344503524/"
            target="_blank"
            className={CSSTheme + "-links"}
          >
            &nbsp;Gobyu
          </a>
          <br />
          <FontAwesomeIcon
            icon={faBattleNet}
            className={CSSTheme + "-ContactIcon"}
          />
          &nbsp;&nbsp;Exitsignn#1230
          <br />
          Riot Games: Gobyu#NA1
          <br />
          MapleStory &#40;Kronos&#41;: Gobyu
          <br />
          Warframe: Signs
        </div>
      </div>
      <div className="visibility-button-div">
        <button onClick={changeVisible} className="visibility-button">
          <FontAwesomeIcon
            icon={faQuestion}
            className={CSSTheme + "-question-mark"}
          />
        </button>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ CSSTheme }) => {
  return (
    <div id="Contact">
      <h1 className="SectionTitle">Contact</h1>
      <p className={CSSTheme + "-content"}>
        <FontAwesomeIcon
          icon={faEnvelope}
          className={CSSTheme + "-ContactIcon"}
        />
        &nbsp;&nbsp;john.zhao166@gmail.com
        <br />
        <FontAwesomeIcon icon={faPhone} className={CSSTheme + "-ContactIcon"} />
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
      </p>
    </div>
  );
};

export default Contact;

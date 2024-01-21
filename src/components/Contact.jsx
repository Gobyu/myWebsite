import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="Contact">
      <h1 className="SectionTitle">Contact</h1>
      <p className="content">
        <FontAwesomeIcon icon={faEnvelope} />
        &nbsp;&nbsp;john.zhao166@gmail.com
        <br />
        <FontAwesomeIcon icon={faPhone} />
        &nbsp;&nbsp;+1 647-858-1069
        <br />
        <FontAwesomeIcon icon={faDiscord} />
        &nbsp;&nbsp;gobyu
        <br />
        <FontAwesomeIcon icon={faLocation} />
        &nbsp;&nbsp;your mom's house
      </p>
    </div>
  );
};

export default Contact;

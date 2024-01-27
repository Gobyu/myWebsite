import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightFooter = () => {
  return (
    <div className="right-footer">
      <FontAwesomeIcon icon={faHeart} /> ω <FontAwesomeIcon icon={faHeart} />
      <br />
      can my tax returns come in already
    </div>
  );
};

export default RightFooter;

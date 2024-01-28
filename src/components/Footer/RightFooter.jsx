import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightFooter = () => {
  return (
    <div className="right-footer">
      <FontAwesomeIcon icon={faHeart} className="heart" /> ω{" "}
      <FontAwesomeIcon icon={faHeart} className="heart" />
      <br />
      Keep Yourself Safe.
      <br />
      Yes, you.
    </div>
  );
};

export default RightFooter;

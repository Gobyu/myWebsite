import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightFooter = () => {
  return (
    <div className="right-footer">
      <FontAwesomeIcon icon={faHeart} className="heart" /> ω{" "}
      <FontAwesomeIcon icon={faHeart} className="heart" />
      <br />
      我操! Michael I told you be careful!
      <br />
      You have big eyes, small face, I like.
      <br />
      What your WeChat?
    </div>
  );
};

export default RightFooter;

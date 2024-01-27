import React from "react";
import RightFooter from "./Footer/RightFooter";
import LeftFooter from "./Footer/LeftFooter";

const Footer = ({ CSSTheme }) => {
  return (
    <div className={CSSTheme + "-Footer"}>
      <RightFooter />
      <LeftFooter CSSTheme={CSSTheme} />
    </div>
  );
};

export default Footer;

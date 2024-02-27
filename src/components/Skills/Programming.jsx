import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Programming = ({ CSSTheme }) => {
  return (
    <div className={CSSTheme + "-SectionComponent"}>
        <FontAwesomeIcon icon={faCode} fontSize={80} className="SectionImage"/>
      <div className={CSSTheme + "-SectionDetails"}>
        <h2 className={CSSTheme + "-no-margin"}>Programming</h2>
        <p className={CSSTheme + "-no-margin"}>
            | C | Java | Python | React | CSS/JS | HTML | Rust |
        </p>
      </div>
    </div>
  );
};

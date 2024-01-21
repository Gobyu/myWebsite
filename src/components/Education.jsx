import React from "react";
import { Seneca } from "./Education/Seneca";
import UOttawa from "./Education/UOttawa";

const Education = ({ CSSTheme }) => {
  return (
    <div id={CSSTheme + "-Education"}>
      <h1 className={CSSTheme + "-SectionTitle"}>Education</h1>
      <Seneca CSSTheme={CSSTheme} />
      <UOttawa CSSTheme={CSSTheme} />
    </div>
  );
};

export default Education;

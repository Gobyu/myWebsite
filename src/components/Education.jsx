import React from "react";
import { Seneca } from "./Education/Seneca";
import UOttawa from "./Education/UOttawa";

const Education = () => {
  return (
    <div id="Education">
      <h1 className="SectionTitle">Education</h1>
      <Seneca />
      <UOttawa />
    </div>
  );
};

export default Education;

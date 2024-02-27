import React from 'react'
import { Programming } from './Skills/Programming';

const Skills = ( {CSSTheme}) => {
    return (
      <div id="Skills">
        <h1 className="SectionTitle">Skills</h1>
        <Programming CSSTheme={CSSTheme}/>
      </div>
    );
  };

export default Skills
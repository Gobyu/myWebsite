import React from "react";
import Chatime from "./Employment/Chatime";
import SushiLegend from "./Employment/SushiLegend";
import DessertKitchen from "./Employment/DessertKitchen";

const Employment = ({ CSSTheme }) => {
  return (
    <div id="Employment">
      <h1 className="SectionTitle">Employment</h1>
      <Chatime CSSTheme={CSSTheme} />
      <SushiLegend CSSTheme={CSSTheme} />
      <DessertKitchen CSSTheme={CSSTheme} />
    </div>
  );
};

export default Employment;

import React from "react";

const DessertKitchen = () => {
  return (
    <div className="SectionComponent">
      <div className="SectionImageDiv">
        <a href="https://dessertkitchen.ca/" target="_blank">
          <img
            src="https://github.com/Gobyu/Gobyu.github.io/blob/main/assets/dessertkitchen.jpg?raw=true"
            className="SectionImage"
          />
        </a>
      </div>
      <div className="SectionDetails">
        <h2 className="no-margin">The Dessert Kitchen - Glacier</h2>
        <p className="no-margin">
          1571 Sandhurst Circle | 10 / 2021 - 12 / 2021
        </p>
      </div>
    </div>
  );
};

export default DessertKitchen;

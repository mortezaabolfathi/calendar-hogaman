import React from "react";
import "./../../style/designWeekly.css";
import image from "./../../assets/image/tree-736885__480.jpg"
const DesignWeekly = () => {
  return (
    
      <div className="box-design-weekly">
      <h3>Design weekly</h3>
        <div className="_box-design-weekly-week">web Aug14</div>
        <div className="_box-design-weekly-location">Location</div>
        <div className="_box-design-weekly-description">
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit Lorem ipsum dolor sit 
            Lorem ipsum dolor sitLorem ipsum dolor sit
          </p>
          <div>
            <img src={image} alt="tree" />
          </div>
        </div>
        <div className="_box-design-weekly-input">
          <div>
            <input type="radio" name="life" style={{marginRight:"15px"}} />
            <label htmlFor="" >Lorem ipsum dolor</label>
          </div>
          <div>
            <input type="radio" name="life" style={{marginRight:"15px"}} />
            <label htmlFor="">Lorem ipsum dolor</label>
          </div>
        </div>
      </div>
  );
};

export default DesignWeekly;

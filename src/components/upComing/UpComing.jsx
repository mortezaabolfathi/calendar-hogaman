import React, { useState } from "react";
import "./../../style/upComing.css";
import { Link } from "react-router-dom";
const UpComing = () => {

  return (
    <div className="box-setting">
      <div className="upComing">
        <Link to="/planed">
          <h2>UpComing</h2>
        </Link>
        <div className="_upComing_box_designWeekly">
          <p>Design weekly</p>
          <p>Location</p>
        </div>
        <div className="_upComing_box_designTasks">
          <p>Design tasks details</p>
          <p>Moscow</p>
        </div>
      </div>
    </div>
  );
};

export default UpComing;

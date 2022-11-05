import React, { useEffect, useState } from "react";
import "./../../style/planed.css";

const Planed = () => {
  const [showPlanedItem, setShowPlanedItem] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
        setShowPlanedItem(true)
    },1000)
  },[])

  return (
    // <div className={showPlanedItem ? "planed-box-addItem" : "planed-box"}>
    <div className="planed-box-addItem">
      <div className="upComing">
        <div className="_upComing_box_designWeekly">
          <p>Design weekly</p>
          <p>Location</p>
        </div>
        {showPlanedItem ? (
          <div className="_planed_box_daily">
            <p>Daily</p>
            <p>Moscow</p>
          </div>
        ) : ("")}

        <div className={showPlanedItem ? "_planed_box_designTask_":"_upComing_box_designTasks"}>
          <p>Design tasks details</p>
          <p>Moscow</p>
        </div>
      </div>
      <div className="_planed-nav">
        <p>planed</p>
        <ul>
          <li>time1</li>
          <li>time1</li>
          <li>time1</li>
          <li>time1</li>
        </ul>
      </div>
    </div>
  );
};

export default Planed;

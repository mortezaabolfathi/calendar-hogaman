import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../../style/planed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot, faClock} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { getTime } from "../../reduxApp/features/calendar/calendar";

const Planed = () => {
  const [showPlanedItem, setShowPlanedItem] = useState(false);

  const dispatch = useDispatch();
  const {clock} = useSelector(state=>state.calendar)
  
  dispatch(getTime(moment().format('LT')));

  useEffect(() => {
    setTimeout(() => {
      setShowPlanedItem(true);
    }, 700);
  }, []);
  
  return (
    <div className="planed-box-addItem">
      <div className="planed-box">
        <div className="_planed_box_designWeekly">
          <Link to="/LayOutWeekly">
            <p>Design weekly</p>
            < div className="_planed_Location">
              <p><FontAwesomeIcon icon={faLocationDot} /> Location</p>
              <p><FontAwesomeIcon icon={faClock} /> {clock}</p>
            </div>
          </Link>
        </div>
        {showPlanedItem ? (
          <div className="_planed_box_daily">
              <p>Daily</p>
              <div className="_planed_Location_box_daily">
              <p><FontAwesomeIcon icon={faLocationDot} /> Location</p>
              <p><FontAwesomeIcon icon={faClock} /> {clock}</p>
            </div>
          </div>
        ) : (
          ""
        )}

        <div
          className={
            showPlanedItem
              ? "_planed_box_designTask_"
              : "_upComing_box_designTasks"
          }
        >
              <p>Design tasks Details</p>
              <div className="_planed_Location_box_daily">
              <p><FontAwesomeIcon icon={faLocationDot} /> Location</p>
              <p><FontAwesomeIcon icon={faClock} /> {clock}</p>
            </div>
          
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

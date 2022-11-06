import React, { useState, useEffect } from "react";
import "./../../style/upComing.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot, faClock} from "@fortawesome/free-solid-svg-icons";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { getTime } from "../../reduxApp/features/calendar/calendar";


const UpComing = () => {

  const dispatch=useDispatch()
  const {clock}=useSelector(state=> state.calendar)

  dispatch(getTime(moment().format('LT')))

  return (
    <div className="box-setting">
      <div className="upComing">
        <Link to="/planed">
          <h2>UpComing</h2>
        </Link>
        <div className="_upComing_box_designWeekly">
          <p>Design weekly</p>
          <div className="_upcoming_Location">
           <p><FontAwesomeIcon icon={faLocationDot} /> Location</p>
           <p><FontAwesomeIcon icon={faClock} /> {clock}</p>
          </div>
        </div>
        <div className="_upComing_box_designTasks">
          <p>Design tasks details</p>
          <div className="_upcoming_Location">
          <p><FontAwesomeIcon icon={faLocationDot} /> Moscow</p>
          <p><FontAwesomeIcon icon={faClock} /> {clock}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComing;

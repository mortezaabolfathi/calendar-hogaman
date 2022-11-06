import React from "react";
import "./../../style/designWeekly.css";
import image from "./../../assets/image/tree-736885__480.jpg"
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { getTime, getMonth } from "../../reduxApp/features/calendar/calendar";
const DesignWeekly = () => {

  const {clock, month} = useSelector(state=>state.calendar)
  const dispatch = useDispatch()
  dispatch(getTime(moment().format('LT')))
  dispatch(getMonth(moment().format("MMM Do") ))

  return (
      <div className="box-design-weekly">
      <h4>Design weekly</h4>
        <div className="_box-design-weekly-week">
          <div className="_box-design-weekly_date">
            <p>  wed, {month} </p>
            <p>Date</p>
          </div>
          <div className="_box-design-weekly_date">
            <p> {clock} </p>
            <p>Time</p>
          </div>
        </div>
        <div className="_box-design-weekly-week">
          <div className="_box-design-weekly_date">
            <p>  wed, {month} </p>
            <p>Date</p>
          </div>
          <div className="_box-design-weekly_date">
            <p> {clock} </p>
            <p>Time</p>
          </div>
        </div>
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

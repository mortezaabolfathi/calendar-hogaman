import moment from "moment";
import { useEffect, useState } from "react";
import "./../../style/calender.css";
import BuilderCalender from "./Build";

const Calendar = () => {
  const [value, setValue] = useState(moment());
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(BuilderCalender(value));
  }, [value]);

  function isSelected(day) {
    return value.isSame(day, "day");
  }
  function beforeToday(day) {
    return day.isBefore(new Date(), "day");
  }
  function isToday(day) {
    return day.isSame(new Date(), "day");
  }

  function DayStyles(day) {
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }

  const dayName = ["su", "mo", "tu", "we", "th", "fr", "sa"];

  return (
    <div className="calender">
      <div className="dayNames">
        {dayName.map((d) => {
          return <div>{d}</div>;
        })}
      </div>
      <div className="dayNumber">
        {calendar.map((week) => {
          return (
            <div className="dayWeek">
              {week.map((day) => {
                return (
                  <div onClick={() => setValue(day)}>
                    <div className={DayStyles(day, value)}>
                      {day.format("D").toString()}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

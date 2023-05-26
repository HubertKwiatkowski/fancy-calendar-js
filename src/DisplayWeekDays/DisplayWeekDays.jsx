import React from "react";
import "./DisplayWeekDays.css";

export const DisplayWeekDays = () => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const calendarWeekDays = [];

  weekDays.forEach((weekDay, index) => {
    calendarWeekDays.push(
      <p key={index} className="week-day">
        {weekDay}
      </p>
    );
  });

  return <div className="week-days-wrapper">{calendarWeekDays}</div>;
};

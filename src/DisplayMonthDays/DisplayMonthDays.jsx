import React from "react";
import "./DisplayMonthDays.css";
import {format, getDay, isSameMonth} from "date-fns";
import classNames from "classnames";

export const DisplayMonthDays = ({ monthDays, today }) => {
  const calendarMonthDays = [];

  monthDays.forEach((day, index) => {
    const isSameActiveMonth = isSameMonth(day, today);
    const gridColumnStart = getDay(day);
    console.log(gridColumnStart)

    calendarMonthDays.push(
      <div
        key={index}
        className={classNames(
          { "month-day": true },
          { "same-month": isSameActiveMonth }
        )}
        style={{ gridColumnStart }}
      >
        <p>{format(day, "d")}</p>
      </div>
    );
  });

  return <div className="month-days-wrapper">{calendarMonthDays}</div>;
};

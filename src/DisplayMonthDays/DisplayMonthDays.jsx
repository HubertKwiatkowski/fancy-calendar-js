import React, { useState } from "react";
import "./DisplayMonthDays.css";
import { format, getDay, isSameDay, isSameMonth } from "date-fns";
import classNames from "classnames";

export const DisplayMonthDays = ({
  monthDays,
  today,
  setSelectedDay: setDay,
}) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    if (selectedDay !== null && isSameDay(selectedDay, day)) {
      setSelectedDay(null);
      setDay(null);
    } else {
      setSelectedDay(day);
      setDay(day);
    }
  };

  return (
    <div className="month-days-wrapper">
      {monthDays.map((day, index) => {
        const isSameActiveMonth = isSameMonth(day, today);
        const gridColumnStart = getDay(day);
        const isSelected = isSameDay(selectedDay, day);

        return (
          <div
            key={index}
            className={classNames(
              "month-day",
              { "same-month": isSameActiveMonth },
              { selected: isSelected }
            )}
            style={{ gridColumnStart }}
            onClick={() => handleDayClick(day)}
          >
            <p>{format(day, "d")}</p>
          </div>
        );
      })}
    </div>
  );
};

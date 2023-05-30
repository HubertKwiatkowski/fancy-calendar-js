import React, { useState } from "react";
import "./DisplayMonthDays.css";
import {
  format,
  getDay,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  max,
  min,
} from "date-fns";
import classNames from "classnames";

export const DisplayMonthDays = ({
  monthDays,
  today,
  setSelectedDay: setDay,
}) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [isInTimeFrame, setIsInTimeFrame] = useState(false);

  const handleDayClick = (day) => {
    if (selectedDays.length === 2) {
      setSelectedDays([]);
      return;
    }
    if (isBefore(day, today)) {
      return;
    }
    if (selectedDays.some((selected) => isSameDay(selected, day))) {
      setSelectedDays(
        selectedDays.filter((selected) => !isSameDay(selected, day))
      );
      setDay(selectedDays);
    } else {
      setSelectedDays([...selectedDays, day]);
      setDay([...selectedDays, day]);
    }
  };

  return (
    <div className="month-days-wrapper">
      {monthDays.map((day, index) => {
        const isSameActiveMonth = isSameMonth(day, today);
        const gridColumnStart = getDay(day);
        const isEndPoint = selectedDays.some((endPoint) =>
          isSameDay(endPoint, day)
        );
        let isInRange = false;

        if (selectedDays.length === 2) {
          const startDate = min(selectedDays);
          const endDate = max(selectedDays);
          isInRange = isAfter(day, startDate) && isBefore(day, endDate);
        }

        return (
          <div
            key={index}
            className={classNames(
              "month-day",
              { "same-month": isSameActiveMonth },
              { endPoint: isEndPoint }
            )}
            style={{ gridColumnStart }}
            onClick={() => handleDayClick(day)}
          >
            <div className={classNames({ isInRange: isInRange })}>
              <p>{format(day, "d")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

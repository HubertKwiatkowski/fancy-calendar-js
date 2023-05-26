import "./App.css";
import {
  format,
  startOfToday,
  parse,
  add,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  startOfWeek,
} from "date-fns";
import { ArrowLeft, ArrowRight } from "./icons/index.js";
import { useState } from "react";
import { DisplayWeekDays } from "./DisplayWeekDays/DisplayWeekDays.jsx";
import { DisplayMonthDays } from "./DisplayMonthDays/DisplayMonthDays.jsx";

function App() {
  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMMM-yyyy", new Date());
  let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
  let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });

  const prevMonth = () => {
    setCurrentMonth(format(firstDayPrevMonth, "MMMM-yyyy"));
  };

  const nextMonth = () => {
    setCurrentMonth(format(firstDayNextMonth, "MMMM-yyyy"));
  };

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayCurrentMonth), {
      weekStartsOn: 1,
      weekEndsOn: 0,
    }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), {
      weekStartsOn: 1,
      weekEndsOn: 0,
    }),
  });

  return (
    <div className="App">
      <div className="calendar">
        <div className="select-date">
          <div className="select">
            <p>Select date</p>
            <div></div>
          </div>
          <div className="date">Pick date(s)</div>
        </div>

        <div className="calendar-card">
          <div className="calendar-months">
            <div className="prev" onClick={prevMonth}>
              <ArrowLeft />
              {format(firstDayPrevMonth, "MMMM")}
            </div>
            <div className="current-month">
              {format(firstDayCurrentMonth, "MMMM yyyy")}
            </div>
            <div className="next" onClick={nextMonth}>
              {format(firstDayNextMonth, "MMMM")}
              <ArrowRight />
            </div>
          </div>

          <div className="calendar-week-days">
            <DisplayWeekDays />
          </div>

          <div className="calendar-month-days">
            <DisplayMonthDays
              monthDays={days}
              today={today}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

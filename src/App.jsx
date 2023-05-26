import "./App.css";
import { format, startOfToday, parse, add } from "date-fns";
import { ArrowLeft, ArrowRight } from "./icons/index.js";
import { useState } from "react";

function App() {
  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMMM-yyyy", new Date());
  let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
  let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });

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
            <div className="prev">
              <ArrowLeft />
              {format(firstDayPrevMonth, "MMMM")}
            </div>
            <div className="current-month">{format(today, "MMMM yyyy")}</div>
            <div className="next">
              {format(firstDayNextMonth, "MMMM")}
              <ArrowRight />
            </div>
          </div>
          <div className="calendar-week-days"></div>
          <div className="calendar-month-days"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import RevoCalendar from "revo-calendar";
import "./Calender.css";

const Calender = () => {
  const [newEvent, setNewEvent] = useState([
    {
      name: "Event 1",
      date: Date.now(),
    },
  ]);

  const dateSelected = (date) => {
    console.log(date);
  };

  return (
    <div className="calendar-div">
      <RevoCalendar
        events={newEvent}
        // addEvent={newEvent}
        openDetailsOnDateSelection={true}
        allowAddEvent={true}
        dateSelected={dateSelected}
        className="calendar-style"
      />
    </div>
  );
};

export default Calender;

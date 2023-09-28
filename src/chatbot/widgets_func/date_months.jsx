import React, { useEffect, useMemo, useState } from "react";
import "./date_months.scss";

const DateList = (props) => {
  const [pickDate, setpickDate] = useState(null);
  const [pickTime, setpickTime] = useState(null);
  //console.log(pickDate);

  //for triggeing client side render in chat bot
  const [triggerdate, settriggerdate] = useState(false);
  const [triggertime, setTriggertime] = useState(false);

  //for removing this
  const [fill, setUnfill] = useState(true);

  //data of setdate and set time
  const [datevalue,setDatevalue]=useState("");
  const [timevalue,settimevalue]=useState("");

  const today = new Date(); // Get the current date

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate an array of date objects for today and the next 5 days
  const dateList = useMemo(() => {
    return Array.from({ length: 6 }, (_, index) => {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + index);
      return nextDate;
    });
  }, [today]);

  //handling arrow of date

  const [Element, setElement] = useState(0);

  function handleClick(key) {
    if (key == "left") {
      setElement(Element > 0 && Element <= 5 ? Element - 1 : Element);
    } else {
      setElement(Element < 5 ? Element + 1 : Element);
    }
  }

  //list of time moring
  const timeSlotsMorning = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];

  const timeSlotsAfternoon = ["01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

  //iterate time slot

  const listItemsMoring = useMemo(() => {
    return timeSlotsMorning.map((slot) => (
      <li
        key={slot}
        className={`timebox ${pickTime === slot ? "active" : ""}`}
        onClick={() => handlepicktime(slot)}
      >
        {slot}
      </li>
    ));
  }, [pickTime]);

  const listItemsAfternoon = useMemo(() => {
    return timeSlotsAfternoon.map((slot) => (
      <li
        key={slot}
        className={`timebox ${pickTime === slot ? "active" : ""}`}
        onClick={() => handlepicktime(slot)}
      >
        {slot}
      </li>
    ));
  }, [pickTime]);

  //for solour of slot date
  function handlepickdate(index, date) {

    
    setpickDate(index + 1);
    settriggerdate(true);
    
    

    const dateformat = `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })},${daysOfWeek[date.getDay()]}`;
    // date vvalue
    
    setDatevalue(dateformat);
   
  }

  function handlepicktime(slot) {
    setpickTime(slot);
    setTriggertime(!triggertime);
    
    settimevalue(slot);

    //time value
  }

  //function handle prop.action which is in action provider
  function handleAction() {
    props.actions.handleDatetime(datevalue,timevalue);
    
   
  }

  useEffect(() => {
    if (triggerdate && triggertime) {
      setUnfill(false);
      handleAction();
    }
  }, [triggerdate, triggertime]);

  return (
    
      fill && <div className="Date_and_timecontainer">
        <div className="datecontainer">
          <div className="arrowbox" onClick={() => handleClick("left")}>
            <img
              className="left_arrow"
              src="src\assets\arrow.png"
              alt="img_a"
            ></img>
          </div>

          <div className="slot" style={{ marginLeft: `-${Element * 100}px` }}>
            {dateList.map((date, index) => (
              <div
                className={`slot_piece ${index === pickDate -1 ? "active" : ""}`}
                onClick={() => handlepickdate(index, date)}
                key={index}
              >
                <p className="slotdate">
                  {date.getDate()}{" "}
                  {date.toLocaleString("default", { month: "short" })}
                </p>
                <p className="slot_month">{daysOfWeek[date.getDay()]}</p>
              </div>
            ))}
          </div>

          <div className="arrowbox" onClick={() => handleClick()}>
            <img
              className="right_arrow"
              src="src\assets\arrow.png"
              alt="img_a"
            ></img>
          </div>
        </div>

      {pickDate  && ( <>
          <div className="timestyle">
          <p>Morning </p>
          <ul>{listItemsMoring}</ul>
        </div>

        <div className="timestyle">
          <p>Afternoon </p>
          <ul>{listItemsAfternoon}</ul>
        </div>
        </>
       )}
      </div>
  );
};

export default DateList;

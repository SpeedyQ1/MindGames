import "./myevents.css";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

import { EventCardUserArr } from "./EventCardUserArr";

const Myevents = () => {
  const [value, onChange] = useState(new Date());
  const handleDateClick = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    const url = `/Myevents/${formattedDate}`;
    history.pushState({}, "", url);
    location.reload();

    console.log(formattedDate);
  };

  const [usersArr, setUsersArr] = useState(
    JSON.parse(localStorage.getItem("usersArr"))
  );

  let currentUser = JSON.parse(localStorage.getItem("loginData"));

  let userObject = usersArr?.find(
    (view) => view.email == Object.keys(currentUser)[0]
  );

  let myventsArr = userObject.myEvents;

  // function myeventsCards() {
  //   return myventsArr.map((value, index) => (
  //     <EventCardUserArr key={index} index={index} />
  //   ));
  // }

  return (
    <div className="calender-div">
      <Calendar
        calendarType="US"
        className={"calender"}
        value={value}
        onChange={onChange}
        onClickDay={handleDateClick}
      />
      <h1 id="my-lectures-title">My Lectures:</h1>
      <div id="all-my-events-section">
        {/* {myeventsCards()} */}
        {myventsArr?.map((value, index) => (
          <EventCardUserArr key={index} index={index} />
        ))}
        {myventsArr.length < 1 && <h1 style={{textAlign: "center"}}>No Events Have Been Created Yet,<br/> Create one By Choosing A Date From The Calender </h1>}
      </div>
    </div>
  );
};

export default Myevents;

// history.pushState({}, "", url);

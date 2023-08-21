import React, { useState, useEffect } from "react";
import "./Events.css";
import { EventCard } from "./EventCard";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";

export const Events = () => {
  const [test, setTest] = useState(false)
  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    setDataArr(JSON.parse(localStorage.getItem("dataArr")))
  }, []);


  function sortByPrice(chosen) {
    if (chosen == "Low-To-High") {
      setDataArr((prev) => prev.sort((a, b) => a.price - b.price));
    } else {
      setDataArr((prev) => prev.sort((a, b) => b.price - a.price));
    }
    setTest(!test)
  }

function createPrice(price){
  if(price==0){
    return "free";
  }
  else{
    return `${price}$`;
  }
}

  return (
    <div className="nanabanana">
      <select id="sort" onChange={(e) => sortByPrice(e.target.value)}>
        <option value="sort by price">Sort By Price </option>
        <option value="high-to-low">High To Low</option>
        <option value="Low-To-High">Low To High</option>
      </select>
      <div id="event-container">
        {dataArr.map((value, index) => {
          return (
            <div key={index}  id="card-container">
              <div id="image-container">
                <img id="the-img" src={value.event_image} />
                <div id="info">
                  <div id="card-discription">
                    <h3>"{value.event_name}"</h3>
                    <span>
                      {value.date} , {value.start_time}
                    </span>
                    <span>
                      {" "}
                      <LocationOnIcon /> "{value.place_name}", {value.city}
                    </span>
                  </div>
                </div>
              </div>
              <div id="buy-section">
                <span id="price">{createPrice(value.price)}</span>
                <Link className="link" to={`/Events/${value.id}`}>
                  <span id="view-btn">view</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

{
  /* <EventCard key={index} index={index} /> */
}

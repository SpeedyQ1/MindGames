import React,  {useState}  from "react";
import "./EventCard.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";


export const EventCardUserArr = ({ index }) => {
    const [usersArr, setUsersArr] = useState(JSON.parse(localStorage.getItem("usersArr")));
    let currentUser= JSON.parse(localStorage.getItem("loginData"))
    let userObject = usersArr?.find((view)=> view.email == Object.keys(currentUser)[0])
    let imgUrl = userObject.myEvents[index].event_image;
    let title = userObject.myEvents[index].event_name;
    let price = userObject.myEvents[index].price;
    let date = userObject.myEvents[index].date;
    let startAt = userObject.myEvents[index].start_time;
    let placeName = userObject.myEvents[index].place_name;
    let city = userObject.myEvents[index].city;
    let id = userObject.myEvents[index].id;

  if(price==0){
    price = "free";
  }
  else{
    price = `${price}$`;
  }


  return (
    <div id="card-container">
      <div id="image-container">
        <img id="the-img" src={imgUrl} />
        <div id="info">
        <div id="card-discription">
        <h3>"{title}"</h3>
          <span>
            {date} , {startAt}
          </span>
          <span> <LocationOnIcon/> "{placeName}", {city}</span>
        </div>
      </div>
      </div>
        <div id="buy-section">
        <span id="price">{price}</span>
        <Link className="link" to={`/Events/${id}`}><span id="view-btn">view</span></Link>
        </div>
    </div>
  );
};

import React,  {useState}  from "react";
import "./EventCard.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";


export const CreateCardSpesific = ({arr , index}) => {
  let imgUrl = arr[index].event_image;
  let title = arr[index].event_name;
  let price = arr[index].price;
  let date = arr[index].date;
  let startAt = arr[index].start_time;
  let placeName = arr[index].place_name;
  let city = arr[index].city;
  let id = arr[index].id;

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

import React,  {useState}  from "react";
import "./EventCard.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";


export const EventCard = ({ index }) => {
  const [dataArr, setDataArr] = useState(JSON.parse(localStorage.getItem("dataArr")));
 
  let imgUrl = dataArr[index].event_image;
  let title = dataArr[index].event_name;
  let price = dataArr[index].price;
  let date = dataArr[index].date;
  let startAt = dataArr[index].start_time;
  let placeName = dataArr[index].place_name;
  let city = dataArr[index].city;
  let id = dataArr[index].id;

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
        <h3 className="card-lecture-title">"{title}"</h3>
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

import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./EventPage.css";
import { useParams, useNavigate } from "react-router-dom";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import CampaignIcon from "@mui/icons-material/Campaign";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export const EventPage = ({ buyMe, setBuyMe }) => {
  const [dataArr, setDataArr] = useState(
    JSON.parse(localStorage.getItem("dataArr"))
  );
  const [dataid, setDataid] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setDataid(dataArr?.find((view) => view.id == id));
  }, []);

  return (
    <div className="eventpage">
      <div className="imgdiv">
        <img className="img" src={dataid?.event_image} alt="nothing" />
      </div>

      <div id="main-section-lecture-page">
        <div className="headline">
          <h1 className="lecture">{dataid?.event_name}</h1>
        </div>
        <hr />
        <div className="description-section">
          <h3 className="headlinebottom"> The MindGame of the day:</h3>
          <h6 className="description"> {dataid.event_info}</h6>
        </div>

        <div className="rest">
          <div className="firstrest">
            <div className="lecture-info-container">
              <div className="event-info-line">
                <span className="info-icon">
                  <CalendarMonthIcon />
                </span>
                <span>{dataid?.date}</span>
              </div>

              <div className="event-info-line">
                <span className="info-icon">
                  <AccessTimeIcon />
                </span>
                {dataid?.start_time}
              </div>

              <div className="event-info-line">
                <span className="info-icon">
                  <LocationOnIcon />
                </span>
                {dataid?.place_name}
              </div>

              <div className="event-info-line">
                <span className="info-icon">
                  <MapIcon />
                </span>
                {dataid?.street_addres}, {dataid?.city}
              </div>

              <div className="event-info-line">
                <span className="info-icon">
                  <CampaignIcon />
                </span>
                {dataid?.lecturer_name}
              </div>

              <div className="event-info-line">
                <span className="info-icon">
                  <SchoolIcon />
                </span>
                {dataid?.lecturer_info}
              </div>

              <div className="event-info-line" id="email-div">
                <span className="info-icon">
                  <EmailIcon />
                </span>
                {dataid?.email}
              </div>

              <div className="event-info-line">
                <span className="info-icon">
                  <LocalOfferIcon />
                </span>
                {dataid?.price}$
              </div>
            </div>
            <button
              type="button"
              id="buyMeBtn"
              className="btn btn-dark"
              onClick={() => navigate("/Payment")}
            >
              Buy Tickets
            </button>
          </div>

          <div className="secondrest">
            <div className="gmap_canvas">
              <iframe
                className="gMaps-iframe"
                src="https://maps.google.com/maps?q=%D7%94%D7%97%D7%99%D7%9C%D7%96%D7%95%D7%9F%203%20%D7%A8%D7%9E%D7%AA%20%D7%92%D7%9F&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <a href="https://embedgooglemap.net/124/"></a>
              <br />
              <a href="https://www.embedgooglemap.net"></a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

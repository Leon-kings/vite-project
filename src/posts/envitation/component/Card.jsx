import React from "react";
import * as icons from "react-bootstrap-icons";
import "../component/css/style.css";

function Card(props) {
  return (
    <div>
      <div className="cards">
        <div className="title-card">
          <h1>{props.title}</h1>
        </div>
        <div className="sparator">
          <div className="sp1"></div>
          <div className="icon">
            <icons.Heart />
          </div>
          <div className="sp1"></div>
        </div>
        <div className="body-card">
          <div className="day">
            <icons.CalendarCheck />
            <p>{props.day}</p>
          </div>
          <div className="time">
            <icons.Clock />
            <p>{props.time}</p>
          </div>
          <div className="adress">
            <icons.House />
            <p>{props.addres}</p>
          </div>
          <div className="btnget">
            <icons.Geo />
            <a href="https://www.google.co.id/maps">Petunjuk Arah</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

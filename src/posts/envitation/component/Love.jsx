import React from "react";
import "../component/css/style.css";
import foto from "../assets/b.jpg";
import Foto from "./Foto";

function Love(props) {
  return (
    <div>
      <div className="love">
        <div className="lovefoto">
          <Foto image={foto} name="story" />
        </div>
        <div className="body-love">
          <div className="title-love">
            <h2>{props.title}</h2>
          </div>
          <div className="stories">
            <p className="stori">{props.story}</p>
            <p className="location">{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Love;

import React from "react";
import "../component/css/guest.css";

function Protocol(props) {
  return (
    <div>
      <div className="protocols">
        <img src={props.vektor} alt={props.name} />
        <p className="tekspro">{props.text}</p>
      </div>
    </div>
  );
}

export default Protocol;

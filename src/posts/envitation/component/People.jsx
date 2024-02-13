import React from "react";
import "../component/css/style.css";

function People(props) {
  return (
    <div>
      <div className="people">
        <div className="people-img">
          <img src={props.people} alt={props.ket} />
        </div>
        <div className="name">
          <h2>{props.name}</h2>
        </div>
        <div className="people-ket">
          <h3>{props.longname}</h3>
          <p className="fam">{props.family}</p>
          <p className="addr">{props.addres}</p>
        </div>
      </div>
    </div>
  );
}

export default People;

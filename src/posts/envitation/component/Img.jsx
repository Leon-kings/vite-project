import React from "react";
import "../component/css/style.css";

function Img(props) {
  return (
    <div>
      <div className="image">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default Img;

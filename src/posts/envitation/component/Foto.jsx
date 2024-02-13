import React from "react";
import "../component/css/style.css";

function Foto(props) {
  return (
    <div>
      <div className="love-img">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default Foto;

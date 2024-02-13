import React from "react";
import "../component/css/style.css";

function Fade(props) {
  return (
    <div>
      <div className="fade">
        <img src={props.picture} alt={props.name} className={props.className} />
      </div>
    </div>
  );
}

export default Fade;

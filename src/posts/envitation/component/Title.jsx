import React from "react";
import "../component/css/style.css";

function Title(props) {
  return (
    <div>
      <div className="title">
        <div data-aos="fade-right" className="tilte-left">
          <img src={props.imgleft} alt={props.nameleft} />
        </div>
        <div data-aos="zoom-in-down" className="title-center">
          {props.title}
        </div>
        <div data-aos="fade-left" className="title-right">
          <img src={props.imgright} alt={props.nameright} />
        </div>
      </div>
    </div>
  );
}

export default Title;

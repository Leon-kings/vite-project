import React from "react";
import "../component/css/style.css";

function Content(props) {
  return (
    <div>
      <div className="contents">
        <div className="title-weding">
          <p>{props.title}</p>
        </div>
        <div className="wedding-couple">
          <h1>{props.man}</h1>
          <p>{props.and}</p>
          <h1>{props.women}</h1>
        </div>
        <div className="weding-date">
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;

import React, { useState } from "react";
import "../component/css/style.css";
import song from "../assets/marry.mp3";

function Modal() {
  const [audio, setAudio] = useState(new Audio(song));
  const [modal, setModal] = useState(false);
  let styles = {
    display: "none",
  };

  function open() {
    setAudio(audio.play());
    setModal((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div>
      <div style={modal ? styles : null} className="modal">
        <div className="title-modal">
          <h1>The Wedding</h1>
        </div>
        <div className="btnmod">
          <button onClick={open}>Buka Undangan</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

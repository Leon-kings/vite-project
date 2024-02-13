import React from "react";
import Title from "./Title";
import frames from "../assets/frames.svg";
import Card from "./Card";
import "../component/css/info.css";

function Info() {
  return (
    <div>
      <div className="info">
        <div className="title-info">
          <Title imgleft={frames} nameleft="frameleft" title="Our Information" imgright={frames} nameright="frame-right" />
        </div>
        <div className="card">
          <div data-aos="zoom-out-right" className="akad">
            <Card title="Akad Nikah" day="Sabtu 02 02 2022" time="10.10 Wib" addres="JL. Peusar Cikupa 001/003 Kabupaten Tangerang" />
          </div>
          <div data-aos="fade-up" className="resepsi">
            <Card title="Resepsi" day="Sabtu 02 02 2022" time="10.10 Wib" addres="JL. Peusar Cikupa 001/003 Kabupaten Tangerang" />
          </div>
          <div data-aos="zoom-out-left" className="mantu">
            <Card title="Ngunduh Mantu" day="Sabtu 02 02 2022" time="10.10 Wib" addres="JL. Peusar Cikupa 001/003 Kabupaten Tangerang" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

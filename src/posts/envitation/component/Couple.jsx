import React from "react";
import "../component/css/couple.css";
import People from "./People";
import day from "../assets/day.jpg";
import dea from "../assets/deaa.jpg";
import Title from "./Title";
import frame from "../assets/frames.svg";

function Couple() {
  return (
    <div>
      <div className="wedding-couple">
        <div className="couple-title">
          <Title imgleft={frame} nameleft="Frame-left" title="Wedding Couple" imgright={frame} nameright="Frame-right" />
        </div>
        <div className="couple">
          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="people-left">
            <People people={day} ket="man" name="Hidayat" longname="Hidayatullah" family="Putra Pertama dari pasangan Bapak Mukhtarom & Ibu Tri Susmita" addres="Desa Cikupa 001/003 Kec Cikupa Kab Tangerang " />
          </div>
          <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className="people-right">
            <People people={dea} ket="women" name="Dea" longname="Dea Khalifatusania" family="Putri Bungsu dari pasangan Bapak Ahmad Hambal & Ibu Siti Maisyaroh" addres="Desa Ciruem 001/003 Kec Ciruem Kab Tangerang " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Couple;

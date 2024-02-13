import React from "react";
import Title from "./Title";
import framess from "../assets/frames.svg";
import "../component/css/guest.css";
import Protocol from "./Protocol";
import hand from "../assets/hand.png";
import soap from "../assets/soap.png";
import mask from "../assets/mask.png";
import dist from "../assets/distance.png";
import Forms from "./Forms";

function Guest() {
  return (
    <div>
      <div className="guestall">
        <div className="guest-title">
          <Title imgleft={framess} nameleft="Frame-left" title="Our Guest" imgright={framess} nameright="Frame-right" />
        </div>
        <div className="guest">
          <h3 data-aos="zoom-in-down" className="titleprokes">
            Protocol Kesehatan
          </h3>
          <div className="protocol">
            <div data-aos="fade-right" className="mask">
              <Protocol vektor={mask} name="Prokes" text="Wajib Menggunakan Masker" />
            </div>
            <div data-aos="fade-left" className="dist">
              <Protocol vektor={dist} name="Prokes" text="Saling Menjaga Jarak di Dalam Acara" />
            </div>
            <div data-aos="fade-right" className="hand">
              <Protocol vektor={hand} name="Prokes" text="Menggunakan salam namastee sebagai ganti berjabat tangan" />
            </div>
            <div data-aos="fade-left" className="soap">
              <Protocol vektor={soap} name="Prokes" text="Jaga Kebersihan dengan Mencuci Tangan atau Handsanitizer" />
            </div>
          </div>
          <h3 data-aos="zoom-in-down" className="titleprokes">
            Guest Book
          </h3>
          <div data-aos="fade-up" data-aos-duration="2000" className="guestbook">
            <Forms />
          </div>
          <div className="result"></div>
        </div>
        <Title imgleft={framess} nameleft="Frame-left" title="Thank You" imgright={framess} nameright="Frame-right" />
      </div>
      <p className="regars">Salam hangat Day dan Dea</p>
    </div>
  );
}

export default Guest;

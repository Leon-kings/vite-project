import React from "react";
import "../component/css/home.css";
import Fade from "./Fade";
import left from "../assets/right.svg";
import right from "../assets/right.svg";
import Content from "./Content";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";

function Home() {
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <div>
      <div className="container">
        {/* fade top */}
        <div className="fade-top">
          <div data-aos="fade-down-right" className="fade-left">
            <Fade picture={left} name="fade-left" className="fadeRotate" />
          </div>
          <div data-aos="fade-down-left" className="fade-right">
            <Fade picture={right} name="fade-right" />
          </div>
        </div>
        {/* fade center */}
        <div data-aos="zoom-in-down" data-aos-duration="1000" className="modals">
          <Modal />
        </div>
        <div data-aos="zoom-in" className="fade-center">
          <Content title="The Wedding" man="Hidayatullah" and="&" women="Dea Khalifatusania" date="Saturday 02 02 2022" />
        </div>
        {/* fade botom */}
        <div data-aos="fade-up" className="fade-botom">
          <div className="botom-left">
            <Fade picture={left} name="fade-left" />
          </div>
          <div className="botom-right">
            <Fade picture={right} name="fade-right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

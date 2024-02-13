import React from "react";
import Title from "./Title";
import framess from "../assets/frames.svg";
import "../component/css/galery.css";
import Img from "./Img";
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";
import f from "../assets/f.jpg";
import g from "../assets/g.jpg";
import h from "../assets/h.jpg";
import i from "../assets/i.jpg";
import l from "../assets/l.jpg";

function Galery() {
  return (
    <div>
      <div className="allgalery">
        <div className="title-galery">
          <Title imgleft={framess} nameleft="Frame-left" title="Our Galery" imgright={framess} nameright="Frame-right" />
        </div>
        <div className="galery">
          <div className="gal1">
            <Img image={a} name="galery" />
          </div>
          <div className="gal2">
            <Img image={b} name="galery" />
          </div>
          <div className="gal3">
            <Img image={c} name="galery" />
          </div>
          <div className="gal4">
            <Img image={d} name="galery" />
          </div>
          <div className="gal5">
            <Img image={e} name="galery" />
          </div>
          <div className="gal6">
            <Img image={f} name="galery" />
          </div>
          <div className="gal7">
            <Img image={g} name="galery" />
          </div>
          <div className="gal8">
            <Img image={h} name="galery" />
          </div>
          <div className="gal9">
            <Img image={i} name="galery" />
          </div>
          <div className="gal10">
            <Img image={l} name="galery" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galery;

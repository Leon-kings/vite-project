import React from "react";
import Title from "./Title";
import fram from "../assets/frames.svg";
import Love from "./Love";
import "../component/css/story.css";
import HorizontalScroll from "react-scroll-horizontal";

function Story() {
  return (
    <div>
      <div className="story">
        <div className="title-story">
          <Title imgleft={fram} nameleft="frameleft" title="Our Love Story" imgright={fram} nameright="frame-right" />
        </div>

        <div className="body-story">
          <HorizontalScroll>
            <div className="slide">
              <Love
                title="Pertama Kenal"
                story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea, asperiores odit alias ad hic consequatur voluptatum ut dolorem illo provident similique, explicabo nemo architecto. voluptatum ut dolorem illo provident similique, explicabo nemo architecto."
                location="01 01 2021 - Cisadane"
              />
            </div>
            <div className="slide">
              <Love
                title="Proses Ta'aruf"
                story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea, asperiores odit alias ad hic consequatur voluptatum ut dolorem illo provident similique, explicabo nemo architecto. voluptatum ut dolorem illo provident similique, explicabo nemo architecto."
                location="01 06 2021 - Ciberem"
              />
            </div>
            <div className="slide">
              <Love
                title="Proses Khitbah"
                story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea, asperiores odit alias ad hic consequatur voluptatum ut dolorem illo provident similique, explicabo nemo architecto. voluptatum ut dolorem illo provident similique, explicabo nemo architecto."
                location="01 012 2021 - Ciberem"
              />
            </div>
            <div className="slide">
              <Love
                title="Walimah"
                story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea, asperiores odit alias ad hic consequatur voluptatum ut dolorem illo provident similique, explicabo nemo architecto. voluptatum ut dolorem illo provident similique, explicabo nemo architecto."
                location="02 02 2022 - Ciberem"
              />
            </div>
          </HorizontalScroll>
        </div>
      </div>
    </div>
  );
}

export default Story;

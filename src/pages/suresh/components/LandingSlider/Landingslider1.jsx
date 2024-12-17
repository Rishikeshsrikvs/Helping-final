import React from "react";
import thiru from "./lsimage/thiru.jpg";
import olai from "./lsimage/olaichu.png";
import "./Landingslider.css";

const Landingslider1 = () => {
  return (
    <div className="landingslider1">
      <div className="ls1-container">
        <div className="thiruimage">
          <img src={thiru} alt="" />
        </div>
        <div className="ollaichuvadi">
          <div className="ollai">
            <img src={olai} alt="" />
          </div>
          <div className="olaitamil">
            <p>
              காலத்தி னாற்செய்த நன்றி சிறிதெனினும்
              <br />
              ஞாலத்தின் மாணப் பெரிது.
            </p>
          </div>
          <div className="olaienglish">
            <p>
              A timely help, though small,
              <br /> Is of greater value than all the earth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingslider1;

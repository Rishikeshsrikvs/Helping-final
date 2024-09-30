import React from "react";
import "./Landingslider.css";

import expr from "./lsimage/expr.jpg";
const Landingslider4 = () => {
  return (
    <div className="landingslider4">
      <div className="ls4-container">
        <div className="left-charityimage">
          <div className="chaimg">
            <img src={expr} alt="" />
          </div>
          <div className="chaname">
            <p>SECRETARY</p>
          </div>
        </div>
        <div className="center-charityimage">
          <div className="chaimg">
            <img src={expr} alt="" />
          </div>
          <div className="chaname">
            <p>PRESIDENT</p>
          </div>
        </div>
        <div className="right-charityimage">
          <div className="chaimg">
            <img src={expr} alt="" />
          </div>
          <div className="chaname">
            <p>TRUSTEE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingslider4;

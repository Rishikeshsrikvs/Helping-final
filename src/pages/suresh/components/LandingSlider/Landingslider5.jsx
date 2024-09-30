import React from "react";
import "./Landingslider.css";
import savenature from "./lsimage/savenature.png";
import donatefood from "./lsimage/donatefood.png";
import donateblood from "./lsimage/blooddonate.png";
import centertree from "./lsimage/vecimg.png";
import savewater from "./lsimage/savewa.png";
const Landingslider5 = () => {
  return (
    <div className="landingslider5">
      <div className="ls5-container">
        <div className="imagebox1">
          <div className="imagebox11">
            <img src={donateblood} alt="" />
          </div>
          <div className="imagebox12">
            <img src={donatefood} alt="" />
          </div>
        </div>
        <div className="imagebox2">
          <img src={centertree} alt="" />
          <div className="imgb2text">
            <p>Save Nature</p>
          </div>
        </div>
        <div className="imagebox3">
          <div className="imagebox13">
            <img src={savewater} alt="" />
          </div>
          <div className="imagebox14">
            <img src={savenature} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingslider5;

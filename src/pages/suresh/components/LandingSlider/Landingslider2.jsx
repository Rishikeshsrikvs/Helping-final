import React from "react";
import ls2 from "./lsimage/ls2image.jpg";
import "./Landingslider.css";

const Landingslider2 = () => {
  return (
    <div className="landingslider2">
      <div className="ls2-container">
        <div className="helping-qoutes">
          <p>
            “ If you want happiness for an hour, take a nap. If you want
            happiness for a day, go fishing. If you want happiness for a year,
            inherit a fortune. If you want happiness for a lifetime, help
            somebody.”
          </p>
        </div>
        <div className="helping-images">
          <div className="helpimg">
            <img src={ls2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingslider2;

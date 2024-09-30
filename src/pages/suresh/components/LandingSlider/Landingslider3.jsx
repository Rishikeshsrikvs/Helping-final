import React from "react";
import "./Landingslider.css";
import { useNavigate } from "react-router-dom";
const Landingslider3 = () => {
  const navigate = useNavigate();
  return (
    <div className="landingslider3">
      <div className="ls3-container">
        <div className="left-qoutes">
          <h1>
            Send
            <br /> some <br />
            money
          </h1>
        </div>
        <div className="center-qoutes">
          <h1>80G</h1>
          <h3>12A</h3>
          <button
            className="ls3-qoutes-btns"
            onClick={() => navigate("/donate")}
          >
            Donate
          </button>
        </div>
        <div className="right-qoutes">
          <h1>
            "Donate with kindness,
            <br /> and receive 50% of
            <br /> your donation as an <br />
            income tax benefit!"
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landingslider3;

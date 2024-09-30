import React from "react";
import "./Grandvolunteer.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import helimg from "./../../../assets/grandvolunteer/hand.png";
import apj1 from "./../../../assets/grandvolunteer/kalam.png";
import mother1 from "./../../../assets/grandvolunteer/tresa.png";
import vallalar from "./../../../assets/grandvolunteer/vallalar.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Grandvolunteer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  },[]);
  return (
    <div
      className="imgback"
      style={{
        backgroundImage: `url(${helimg})`,
      }}
    >
      <div className="slider-container">
        <div className="image-slide">
          <div className="grv1" data-aos="fade-right">
            <img src={apj1} alt="APJ Abdul Kalam" />
          </div>
          <div className="grv2"data-aos="fade-up">
            <img src={mother1} alt="Mother Teresa" />
          </div>
          <div className="grv3" data-aos="fade-left">
            <img src={vallalar} alt="Vallalar" />
          </div>
        </div>
        <div className="vasubmit">
          <button className="vallalarbtn" onClick={() => navigate("/donate")} data-aos="zoom-in">
            DONATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grandvolunteer;

import React from "react";
import "./Card.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ imageUrl, onClick, text }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  },[]);
  return (
    <div className="card"  data-aos="fade-up" onClick={() => onClick(imageUrl, text)}>
      <div className="dcardimgcon">
        <img src={imageUrl} className="card-image" alt="Card" />
      </div>
      <div className="dcardback">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Card;

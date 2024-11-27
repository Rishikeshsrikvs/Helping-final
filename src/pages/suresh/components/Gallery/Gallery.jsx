import React, { useEffect, useState } from "react";
import api from "../../../../api/api";
import Marquee from "react-fast-marquee";
import "./Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import heroleft from "./galleryimage/Rectangle 40222.png";
import heroright from "./galleryimage/Rectangle 40223.png";
const Gallery = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false, // Whether animation should happen only once
    });
  }, []);
  useEffect(() => {
    // Fetch images from the API
    const fetchImages = async () => {
      try {
        const response = await api.get(`/galleryImageName`);
        if (response.status === 200) {
          setImages(response.data); // Set the fetched images
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-container">
      <div className="ghero-image">
        <div className="gheromain">
          <h1 data-aos="zoom-out"> We rise by lifting others</h1>
          <p data-aos="zoom-out">
            Empowering lives through kindness. Let’s join hands to uplift those
            in need every act of help makes a difference.
          </p>
        </div>
        <div className="gheroback">
          <img src={heroleft} alt="" />
          <img src={heroright} alt="" />
        </div>
      </div>
      <div className="gall-container" data-aos="fade-up">
        <Marquee className="gall-row" speed={100} pauseOnHover={"true"}>
          {images.map((image) => (
            <img
              key={image._id}
              src={`${api.defaults.baseURL}/gallery/${image._id}`}
              alt="gallery"
            />
          ))}
        </Marquee>
        <Marquee
          className="gall-row"
          speed={100}
          direction={"right"}
          pauseOnHover={"true"}
        >
          {images.toReversed().map((image) => (
            <img
              key={image._id}
              src={`${api.defaults.baseURL}/gallery/${image._id}`}
              alt="gallery"
            />
          ))}
        </Marquee>
      </div>
      <div className="gall-text">
        <h1>
          “ The purpose of life is not to be happy. It is to be useful, to be
          honorable, to be compassionate “
        </h1>
        <button className="gall-btn" onClick={() => navigate("/donate")}>
          donate now
        </button>
      </div>
    </div>
  );
};

export default Gallery;

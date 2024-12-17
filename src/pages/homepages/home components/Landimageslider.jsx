import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Landimageslider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Landingslider1 from "./../../suresh/components/LandingSlider/Landingslider1.jsx";
import Landingslider2 from "./../../suresh/components/LandingSlider/Landingslider2.jsx";
import Landingslider3 from "./../../suresh/components/LandingSlider/Landingslider3.jsx";
import Landingslider4 from "./../../suresh/components/LandingSlider/Landingslider4.jsx";
import Landingslider5 from "./../../suresh/components/LandingSlider/Landingslider5.jsx";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "./../../../assets/involve/image (1).png";
import img2 from "./../../../assets/involve/image (2).png";
import img3 from "./../../../assets/involve/image (3).png";
import img4 from "./../../../assets/involve/image (4).png";

const ImageSlider = () => {
  const images = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="swipecon">
        <Landingslider1 />
      </SwiperSlide>

      <SwiperSlide className="swipecon">
        <Landingslider2 />
      </SwiperSlide>
      <SwiperSlide className="swipecon">
        <Landingslider3 />
      </SwiperSlide>
      <SwiperSlide className="swipecon">
        <Landingslider4 />
      </SwiperSlide>
      <SwiperSlide className="swipecon">
        <Landingslider5 />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;

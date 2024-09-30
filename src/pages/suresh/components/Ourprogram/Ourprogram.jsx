import "./Ourprogram.css";
import proimg1 from "../Ourprogram/programimage/proimg1.png";
import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import edu1 from "../Ourprogram/programimage/eduimage1.png";
import edu2 from "../Ourprogram/programimage/eduimage2.png";
import edu3 from "../Ourprogram/programimage/eduimage3.png";
import hc1 from "../Ourprogram/programimage/hc1.png";
import hc2 from "../Ourprogram/programimage/hc2.png";
import hc3 from "../Ourprogram/programimage/hc3.png";
import flood1 from "../Ourprogram/programimage/flood1.png";
import flood2 from "../Ourprogram/programimage/flood2.png";
import flood3 from "../Ourprogram/programimage/flood3.png";
import feed1 from "../Ourprogram/programimage/feed1.png";
import feed2 from "../Ourprogram/programimage/feed2.png";
import feed3 from "../Ourprogram/programimage/feed3.png";
import "./Educationprogram.css";
import "./Healthcare.css";
import "./Flood.css";
import "./Feed.css";
import { useNavigate } from "react-router-dom";

const Ourprogram = () => {
  const [activeSection, setActiveSection] = useState("education");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  }, []);
  const renderSection = () => {
    switch (activeSection) {
      case "education":
        return (
          <div className="educationprogram">
            <div className="edu-container">
              <div className="education-left">
                <h1 data-aos="fade-right">
                  <span>
                    Educating Children <br />
                  </span>
                  and Youth to Become Empowered
                </h1>
                <p data-aos="fade-right">
                  we bridge the gaps in formal education and opportunities for
                  children and youth. Our focus is on providing comprehensive
                  support that empowers young minds to thrive in today’s world.
                  We offer programs in language and STEAM (Science, Technology,
                  Engineering, Arts, and Mathematics) education, life-skills
                  training, skill development, and scholarships for higher
                  education.
                </p>
                <div className="edu-image-container">
                  <div className="edu-image1" data-aos="zoom-in">
                    <img src={edu1} alt="Education 1" />
                  </div>
                  <div className="edu-image2" data-aos="zoom-in">
                    <img src={edu2} alt="Education 2" />
                  </div>
                  <div className="edu-image3" data-aos="zoom-in">
                    <img src={edu3} alt="Education 3" />
                  </div>
                </div>
              </div>
              <div className="education-right">
                <div className="edu-right-box" data-aos="zoom-out">
                  <div className="white-back"></div>
                  <h3>
                    Act today,
                    <br /> change tomorrow
                  </h3>
                  <button
                    className="edu-right-btn"
                    onClick={() => navigate("/donate")}
                  >
                    DONATE
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "healthcare":
        return (
          <div className="healthcare">
            <div className="hc-container">
              <div className="hc-left">
                <h1>
                  <span>
                    Enhance the Quality of Life <br />
                  </span>
                  for Children and Older Adults
                </h1>
                <p>
                  Our trust is committed to addressing and curing health issues
                  for both children and older adults. We provide comprehensive
                  medical treatment and support tailored to the unique needs of
                  each age group. Our programs offer essential medical services,
                  including specialized care for chronic and age-related
                  conditions. We focus on preventive care to identify and manage
                  health issues early, promoting long-term wellness.
                </p>
                <div className="hc-image-container">
                  <div className="hc-image1">
                    <img src={hc1} alt="Healthcare 1" />
                  </div>
                  <div className="hc-image2">
                    <img src={hc2} alt="Healthcare 2" />
                  </div>
                  <div className="hc-image3">
                    <img src={hc3} alt="Healthcare 3" />
                  </div>
                </div>
              </div>
              <div className="hc-right">
                <div className="hc-right-box">
                  <div className="hc-white-back"></div>
                  <h3>
                    Act today,
                    <br /> change tomorrow
                  </h3>
                  <button
                    className="hc-right-btn"
                    onClick={() => navigate("/donate")}
                  >
                    DONATE
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "flood":
        return (
          <div className="flood">
            <div className="flood-container">
              <div className="flood-left">
                <h1 data-aos="fade-right">
                  <span>
                    Together, we rebuild lives, <br />
                  </span>
                  one drop at a time.
                </h1>
                <p data-aos="fade-right">
                  Our trust is dedicated to delivering essential flood
                  relief...Our trust is dedicated to delivering essential flood
                  relief to communities impacted by natural disasters. We offer
                  comprehensive support, including emergency assistance, food
                  and water distribution, temporary shelter, and medical aid.
                  Our programs focus on immediate relief and long-term recovery,
                  helping families rebuild their lives and restore their homes.
                </p>
                <div className="flood-image-container">
                  <div className="flood-image1" data-aos="zoom-in">
                    <img src={flood1} alt="Flood Relief 1" />
                  </div>
                  <div className="flood-image2" data-aos="zoom-in">
                    <img src={flood2} alt="Flood Relief 2" />
                  </div>
                  <div className="flood-image3" data-aos="zoom-in">
                    <img src={flood3} alt="Flood Relief 3" />
                  </div>
                </div>
              </div>
              <div className="flood-right">
                <div className="flood-right-box" data-aos="zoom-out">
                  <div className="flood-white-back"></div>
                  <h3>
                    Act today,
                    <br /> change tomorrow
                  </h3>
                  <button
                    className="flood-right-btn"
                    onClick={() => navigate("/donate")}
                  >
                    DONATE
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "feed":
        return (
          <div className="feed">
            <div className="feed-container">
              <div className="feed-left">
                <h1 data-aos="fade-right">
                  Together,
                  <br /> we can turn hunger into <span>hope.</span>
                </h1>
                <p  data-aos="fade-right">
                  Our trust is dedicated to delivering essential flood
                  relief...Our trust is dedicated to delivering essential flood
                  relief to communities impacted by natural disasters. We offer
                  comprehensive support, including emergency assistance, food
                  and water distribution, temporary shelter, and medical aid.
                  Our programs focus on immediate relief and long-term recovery,
                  helping families rebuild their lives and restore their homes.
                </p>
                <div className="feed-image-container">
                  <div className="feed-image1"data-aos="zoom-in">
                    <img src={feed1} alt="Feed 1" />
                  </div>
                  <div className="feed-image2" data-aos="zoom-in">
                    <img src={feed2} alt="Feed 2" />
                  </div>
                  <div className="feed-image3" data-aos="zoom-in">
                    <img src={feed3} alt="Feed 3" />
                  </div>
                </div>
              </div>
              <div className="feed-right">
                <div className="feed-right-box" data-aos="zoom-out">
                  <div className="feed-white-back"></div>
                  <h3>
                    Act today,
                    <br /> change tomorrow
                  </h3>
                  <button
                    className="feed-right-btn"
                    onClick={() => navigate("/donate")}
                  >
                    DONATE
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="ourprogram">
      <div className="program-container">
        <div className="program-content">
          <div className="program-left">
            <h1 data-aos="fade-right">
              Empower a child with knowledge today, and watch them shape
              <br />
              <span>the future.</span>
            </h1>
            <p data-aos="fade-right">
              Volunteering has the power to change lives, in what we believe.
              Our programs are crafted with the needs of volunteers and fellows
              in mind, each one intended to make a major and enduring difference
              in a variety of sectors. In the areas of leadership, community
              development, and education, we endeavor to build a network of
              committed people who are bringing about positive change throughout
              India.
            </p>
            <button
              className="join-btn"
              onClick={() => navigate("/getinvolved")}
              data-aos="fade-right"
            >
              JOIN THE MOVEMENT
            </button>
          </div>
          <div className="program-right">
            <img src={proimg1} alt=""  data-aos="zoom-in"/>
          </div>
        </div>
        <div className="ourprogram-sec" >
          <div className="our-heading">
            <h1 data-aos="zoom-in">Our Program</h1>
          </div>
          <div className="button-container" data-aos="zoom-in">
            <button
              onClick={() => setActiveSection("education")}
              className="container-btns"
            >
              Education Program
            </button>
            <button
              onClick={() => setActiveSection("healthcare")}
              className="container-btns"
            >
              Healthcare
            </button>
            <button
              onClick={() => setActiveSection("flood")}
              className="container-btns"
            >
              Flood Relief
            </button>
            <button
              onClick={() => setActiveSection("feed")}
              className="container-btns"
            >
              Feed the Hungry
            </button>
          </div>
          <div className="section-container">{renderSection()}</div>
        </div>

        <div className="passionate">
          <div className="pass-con">
            <h1 data-aos="fade-up">Are you passionate about making a difference?</h1>
            <p data-aos="fade-up">
              we believe that every small act of kindness can create a ripple
              effect of positive change. By volunteering with us, you become a
              vital part of our mission to empower communities and transform
              lives. Your time, skills, and enthusiasm can help us reach more
              people and make a bigger impact.
            </p>
            <button
              className="pass-btn"
              onClick={() => navigate("/getinvolved")}
              data-aos="zoom-in"
            >
              volunteer now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourprogram;

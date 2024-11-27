import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import api from "../../../../api/api";
import graleft from "../About/AboutImages/Vector.png";
import graright from "../About/AboutImages/Ellipse.png";
import gall1 from "../About/AboutImages/image1.png";
import gall2 from "../About/AboutImages/image2.png";
import gall3 from "../About/AboutImages/image3.png";
import gall4 from "../About/AboutImages/image4.png";
import gall5 from "../About/AboutImages/image5.png";
import gall6 from "../About/AboutImages/image6.png";
import video1 from "../About/Videos/sirvideo1.mp4";
import video2 from "../About/Videos/sirvideo2.mp4";
import gall7 from "../About/AboutImages/image7.png";
import gall8 from "../About/AboutImages/image8.png";
import gall9 from "../About/AboutImages/image9.png";
import gall10 from "../About/AboutImages/image10.png";
import backl from "../About/AboutImages/backornam.png";
import backr from "../About/AboutImages/backornament.png";
import "./AboutUs.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const [years, setYears] = useState([]); // State for storing years
  const [error, setError] = useState(null); // State for handling errors
  const [selectedYearId, setSelectedYearId] = useState(""); // State for selected year ID

  // Fetch years from the API
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false, // Whether animation should happen only once
    });
    const fetchYears = async () => {
      try {
        const response = await api.get("/reportYears"); // Fetch year data from API
        if (response.data && Array.isArray(response.data)) {
          setYears(response.data); // Set years if data format is correct
        } else {
          console.error("Unexpected response format:", response);
          setError("Unexpected response format");
        }
      } catch (error) {
        console.error("Error fetching years:", error);
        setError("Error fetching years");
      }
    };

    fetchYears();
  }, []);

  // Handle dropdown change
  const handleYearChange = (event) => {
    setSelectedYearId(event.target.value); // Set selected year ID
  };

  // Handle form submission
  const handleSubmit = () => {
    if (selectedYearId) {
      try {
        // Open the report in a new tab
        window.open(
          `${api.defaults.baseURL}/report/${selectedYearId}`,
          "_blank"
        );
      } catch (error) {
        console.error("Error downloading the report:", error);
        setError("Error downloading the report");
      }
    } else {
      alert("Please select a year first.");
    }
  };
  return (
    <>
      <div className="aboutus">
        <div className="about-gradient1">
          <img src={graleft} alt="gradient" />
        </div>
        <div className="about-gradient2">
          <img src={graright} alt="gradient" />
        </div>
        <div className="about-tittle-container">
          <h1 data-aos="zoom-in">About us</h1>
          <p data-aos="zoom-in">
            Founded in 2012 by A M Baala, our charity is built on the principle
            of empowering communities and transforming lives. With a deep
            commitment to creating lasting change, we focus on three key areas:
            education, healthcare, and poverty alleviation. Our mission is to
            uplift the underprivileged and provide them with the tools and
            opportunities needed to break the cycle of poverty and build a
            brighter future.
          </p>
        </div>
        <div className="about-content">
          <div
            className="about-box box1"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <h2>our vision</h2>
            <p>
              A contented, robust, and imaginative youngster, whose rights are
              respected and upheld in a community founded on equity, justice,
              and respect for human dignity.
            </p>
          </div>
          <div
            className="about-box box2"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <h2>our mission</h2>
            <p>
              to promote an atmosphere where youth and young adults can lead,
              learn, and flourish in order to accelerate social progress.
            </p>
          </div>
        </div>
        <div className="about-value" data-aos="zoom-in">
          <h2>OUR CORE VALUE</h2>
          <p>
            “help is different from ‘timely help’ sending some many to an
            orphanage every month is a help, but spontaneously helping during a
            critical time without expecting any reward is timely help”
          </p>
        </div>
        <div className="about-videos">
          <div className="about-videos-tittle">
            <h3 data-aos="zoom-in">Our videos</h3>
            <div className="videos">
              <div className="video-box video1 " data-aos="fade-right">
                <video
                  width={"100%"}
                  height={"100%"}
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src={video1} type="video/mp4" />
                </video>
              </div>
              <div className="video-box video2" data-aos="fade-left">
                <video
                  width={"100%"}
                  height={"100%"}
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src={video2} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="about-gallery" data-aos="zoom-out">
          <div className="about-gallery-container">
            <div className="gallery-con1">
              <div className="gallery1">
                <div className=" gall1">
                  <img src={gall1} alt="gallery" />
                </div>
                <div className=" gall1">
                  <img src={gall2} alt="gallery" />
                </div>
              </div>
              <div className="gallery2">
                <div className=" gall2">
                  <img src={gall3} alt="gallery" />
                </div>
              </div>
            </div>
            <div className="gallery-con2">
              <div className="gallery3">
                <div className=" gall3">
                  <img src={gall4} alt="gallery" />
                </div>
                <div className=" gall4">
                  <img src={gall5} alt="gallery" />
                </div>
              </div>
              <div className="gallery4">
                <div className=" gall5">
                  <img src={gall6} alt="gallery" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-donate-section">
          <div className="donate-section-content">
            <h3 data-aos="fade-down">
              Share your joy by making someone else smile on your special day
            </h3>
            <p data-aos="fade-up">
              Celebrate your special occasions by sharing joy with those in
              need. Instead of just receiving, give back to others. Whether it's
              a birthday, anniversary, or any milestone, make it meaningful by
              donating or volunteering. Your kindness can transform lives and
              add a deeper purpose to your celebrations. Spread happiness by
              helping others.
            </p>
            <button
              className="abs-dn-button"
              onClick={() => navigate("/donate")}
              data-aos="fade-up"
            >
              Donate now
            </button>
          </div>
        </div>
        <div className="about-volunteers">
          <div className="volunteers-tittle">
            <h1 data-aos="fade-left">volunteers</h1>
          </div>
          <div className="volunteers">
            <div className="volunteers-image" data-aos="fade-up">
              <img src={gall7} alt="gallery" />
            </div>
            <div className="volunteers-text" data-aos="fade-up">
              <p>
                Volunteers serve as fundraisers, organising events and
                activities to generate financial support for charities and
                non-profit organisations. Additionally, volunteers take on the
                role of mentors and educators, sharing their knowledge and
                expertise to empower others through education and personal
                development.
              </p>
            </div>
          </div>
        </div>
        <div className="volunteers-now">
          <div className="backleft">
            <img src={backl} alt="" />
          </div>
          <div className="backright">
            <img src={backr} alt="" />
          </div>
          <h1 data-aos="zoom-in">Make Your Weekends More Meaningful</h1>
          <button
            className="vall-now-btns"
            onClick={() => navigate("/getinvolved")}
            data-aos="zoom-in"
          >
            volunteer now
          </button>
        </div>
        <div className="about-annual-report">
          <div className="annual-report-tittle">
            <h3 data-aos="zoom-in">ANNUAL REPORT</h3>
          </div>
          <div className="annual-btn" data-aos="fade-right">
            <select
              className="year-dropdown"
              value={selectedYearId || ""}
              onChange={handleYearChange}
            >
              {/* Default option */}

              {/* Render years dynamically */}
              {years.map((year) => (
                <option key={year._id} value={year._id}>
                  {year.year}{" "}
                  {/* Assuming the API returns objects with id and year */}
                </option>
              ))}
            </select>
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className="about-annual-poster" data-aos="zoom-in">
          <div className="about-annual">
            <div className="annual-image">
              <img src={gall8} alt="gallery" />
            </div>
            <div className="annual-image">
              <img src={gall9} alt="gallery" />
            </div>
            <div className="annual-image">
              <img src={gall10} alt="gallery" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

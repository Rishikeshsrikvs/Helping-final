import React from "react";
import "./Land.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import l61 from "./../../assets/Land/l61.png";
import l62 from "./../../assets/Land/l62.png";
import l63 from "./../../assets/Land/l63.png";
import l71 from "./../../assets/Land/l71.png";
import l72 from "./../../assets/Land/l72 .png";
import l9left from "./../../assets/Land/l9left.png";
import l9right from "./../../assets/Land/l9right.png";
import l91 from "./../../assets/Land/l91.png";
import l92 from "./../../assets/Land/l92.png";
import l93 from "./../../assets/Land/l93.png";
import l94 from "./../../assets/Land/l94.png";

import l41 from "./../../assets/Land/Group 1000010845.png";
import l42 from "./../../assets/Land/Group 1000010844.png";
import l43 from "./../../assets/Land/Group 1000010843.png";

import { useLocation, useNavigate } from "react-router-dom";

import l10dn1 from "./../../assets/Land/l10dn1.png";
import l10dn2 from "./../../assets/Land/l10dn2.png";
import l10up1 from "./../../assets/Land/l10up1.png";
import l10up2 from "./../../assets/Land/l10up2.png";
import Landprogram from "./home components/Landprogram";
import Landevent from "./home components/Landevent";
import Landimageslider from "./home components/Landimageslider";
import Grandvolunteer from "./home components/Grandvolunteer.jsx";
const Land = () => {
  const location = useLocation(); // Access location object
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false, // Whether animation should happen only once
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);

    // Check if we need to scroll to the Upcoming Events section
    if (location.state?.scrollToEvent) {
      const eventSection = document.getElementById("upcomingevent");
      if (eventSection) {
        eventSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const navigate = useNavigate();

  return (
    <div className="landparent">
      <Landimageslider />
      <Grandvolunteer />
      <Landevent />

      <div className="land3main" data-aos="zoom-in">
        <h1>
          “help is different from ‘timely help’ sending some many to an
          orphanage every month is a help, but spontaneously helping during a
          critical time without expecting any reward is timely help”
        </h1>
      </div>
      <div className="land10main">
        <div className="l10left" data-aos="fade-right">
          <h1>JOIN US</h1>
          <p>
            Together, we can make a difference. Join us in helping those in
            need—every small action counts.
          </p>
          <div className="l10leftbtn">
            <button onClick={() => navigate("/getinvolved")} data-aos="fade-up">
              Let's Help
            </button>
          </div>
        </div>
        <div className="l10right" data-aos="fade-left">
          <div className="l10up">
            <img src={l10up1} alt="" />
            <img src={l10up2} alt="" />
          </div>
          <div className="l10down">
            <img src={l10dn1} alt="" />
            <img src={l10dn2} alt="" />
          </div>
        </div>
      </div>

      <div className="land4main">
        <div className="land4card" data-aos="fade-right">
          <img src={l41} alt="" />
          <h1>600+</h1>
          <h2>Volunters Engaged</h2>
        </div>
        <div className="land4card" data-aos="fade-up">
          <img src={l42} alt="" />
          <h1>12+</h1>
          <h2>Years of Voluntary Service</h2>
        </div>
        <div className="land4card" data-aos="fade-left">
          <img src={l43} alt="" />
          <h1>1000+</h1>
          <h2>we impacted people life</h2>
        </div>
      </div>
      <div className="land5main">
        <div className="land5card1" data-aos="flip-up" data-aos-duration="7000">
          <span>our vision</span>
          <p>
            A contented, robust, and imaginative youngster, whose rights are
            respected and upheld in a community founded on equity, justice, and
            respect for human dignity.
          </p>
        </div>
        <div className="land5card2" data-aos="flip-up" data-aos-duration="7000">
          <span>our mission</span>
          <p>
            to promote an atmosphere where youth and young adults can lead,
            learn, and flourish in order to accelerate social progress.
          </p>
        </div>
      </div>

      <Landprogram />
      <div className="land6main">
        <h1 data-aos="fade-right">Who We Are</h1>
        <div className="land6split">
          <div className="l6left" data-aos="zoom-in">
            <img src={l61} alt="" className="l61" />
            <div className="l6leftdown">
              <img src={l62} alt="" className="l62" />
              <img src={l63} alt="" className="l63" />
            </div>
          </div>
          <div className="l6right">
            <h1 data-aos="fade-left">
              We are Driven by <br />
              <span> Volunteering</span> & Transformation
            </h1>
            <p data-aos="fade-left">
              Our steadfast optimism serves as fuel for our quest for
              significant change. By leveraging the power of volunteerism, we
              are constructing a society in which each person can use their
              voice and personal story to influence the dialogue and improve
              everyone's future.
            </p>
            <div className="l6rightbtn">
              <button
                className="btn-flip"
                onClick={() => navigate("/donate")}
                data-aos="fade-left"
              >
                JOIN THE MOVEMENT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="land7main">
        <div className="l7text">
          <h1 data-aos="fade-right">How do you want to  help people with us</h1>
          <p data-aos="fade-right">
            Your smallest contribution makes a big difference to children’s
            lives. We count on the generosity of people like you to be able to
            create real change for India’s children!
          </p>
        </div>
        <div className="l7imgcon" data-aos="fade-left">
          <div className="l7imgcard1" data-aos="flip-up">
            <div className="l7img">
              <img src={l71} alt="" />
            </div>
            <h1>joyful giving</h1>
            <p>
              Share your joy by making someone else smile on your special day
            </p>
            <span></span>
          </div>
          <div className="l7imgcard1" data-aos="flip-up">
            <div className="l7img">
              <img src={l72} alt="" />
            </div>
            <h1>joyful giving</h1>
            <p>
              Share your joy by making someone else smile on your special day
            </p>
            <span></span>
          </div>
        </div>
      </div>
      <div className="land8main" data-aos="zoom-in">
        <div className="l8left">
          <h1>
            SUSTAINable INDIA
            <span>WITNESS THE CHANGE</span>
          </h1>
        </div>
        <span className="l8line"></span>
        <div className="l8right">
          <p>
            be the driving force behind a sustainable india.engage in
            initiatives that promote responsible citizenship, community
            development, and sustainable practice.
          </p>
        </div>
      </div>
      <div className="land9main">
        <h1 data-aos="zoom-out">Gallery</h1>
        <div className="l9gal">
          <div className="l9left">
            <img src={l9left} alt="" data-aos="fade-right" />
          </div>

          <div className="l9c1">
            <img src={l91} alt="" data-aos="fade-down-right" />

            <img src={l92} alt="" data-aos="fade-up-right" />
          </div>
          <div className="l9c2">
            <img src={l93} alt="" data-aos="fade-down-left" />

            <img src={l94} alt="" data-aos="fade-up-left" />
          </div>

          <div className="l9right">
            <img src={l9right} alt="" data-aos="fade-left" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Land;

import React from "react";
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import twit from "./../../assets/footer/TwitterX.png";
import li from "./../../assets/footer/LinkedIn.png";
import ins from "./../../assets/footer/Instagram.png";
import face from "./../../assets/footer/Facebook.png";
import logo from "./../../assets/head/logo.png";
const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="footerparent">
      <div className="footback">
        <div className="footiconcontainer">
          <Link
            to="https://www.linkedin.com/company/helping-hands-charitable-trust-chennai/"
            target="_blank"
            data-aos="fade-left"
          >
            <img src={li} alt="" />
          </Link>
          <Link
            to="https://www.instagram.com/helpinghands.charitabletrust/"
            target="_blank"
            data-aos="fade-left"
          >
            <img src={ins} alt="" />
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=61554899485699"
            target="_blank"
            data-aos="fade-left"
          >
            <img src={face} alt="" />
          </Link>
          <Link 
         data-aos="fade-left">
            <img src={twit} alt="" />
          </Link>
        </div>
      </div>
      <div className="footsubparent">
        <div className="footsubparent">
          <div className="footmain">
            <div className="footlogo"  >
              <img src={logo} alt="" data-aos="zoom-left" />
            </div>
            <h1 data-aos="fade-up">“ No one has ever become poor by giving ”</h1>
            <p data-aos="fade-up">
              Your contribution provides vital support and transforms lives. Every
              gift makes a difference.
            </p>
            <div className="footbtn">
              <Link to="/donate"  >DONATE</Link>
            </div>
            <ul className="footul navul" >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
        
                >
                  Home
                </NavLink>
              </li>
              <li >
                <NavLink
                  to="About"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
        
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="ourprogram"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Our Programs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="media"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Media
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="getinvolved"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Get Involved
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footsub">
            <div className="fsubleft">
              <Link to="https://srikvstech.com/">
                designed by <span>SRI KVS TECH</span>
              </Link>
            </div>
            <div className="fsubright">
              <Link  to="/privacy_policy">Privacy Policy</Link>
              <Link to="/terms&conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

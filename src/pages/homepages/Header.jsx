import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./../../assets/head/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state to track scroll
  const [isLoading, setIsLoading] = useState(true); // State to manage loading overlay

  const navigate = useNavigate();
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Change visibility of the navbar
    if (currentScrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Check if the navbar is scrolled
    setIsScrolled(currentScrollTop > 50); // Set to true if scrolled more than 50px

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  useEffect(() => {
   
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Simulate loading effect with timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust timing to match your logo animation duration
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToUpcomingEvents = () => {
    navigate("/", { state: { scrollToEvent: true } });
  };

  return (
    <div className={`navbar-container ${isVisible ? "visible" : "hidden"} ${isScrolled ? "scrolled" : ""}`}>
      {isLoading && <div className="overlay"></div>} {/* Loading overlay */}
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div
          className={`navbar-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className={`navcontainer ${isMenuOpen ? "active" : ""}`}>
        <ul className="navul">
          <li>
            <NavLink to="About" className={({ isActive }) => (isActive ? "active-link" : "")}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="ourprogram" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Our Programs
            </NavLink>
          </li>
          <li>
            <NavLink to="media" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Media
            </NavLink>
          </li>
          <li>
            <NavLink to="blooddonate" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Blood Donation
            </NavLink>
          </li>
          <li>
            <NavLink to="getinvolved" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Get Involved
            </NavLink>
          </li>
          <li>
            <NavLink to="Connect" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="navcar">
          <li>
            <NavLink to="Donate" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Donate Us
            </NavLink>
          </li>
        </div>
      </div>
      <a className="upcm" onClick={goToUpcomingEvents} w>
        UPCOMMING EVENTS
      </a>
    </div>
  );
};

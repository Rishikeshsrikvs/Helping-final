import React, { useState, useEffect } from "react";
import api from "../../api/api";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Involve.css";
import { Link } from "react-router-dom";
import hr1 from "./../../assets/involve/image (1).png";
import hr2 from "./../../assets/involve/image (2).png";
import hr3 from "./../../assets/involve/image (3).png";
import hr4 from "./../../assets/involve/image (4).png";
import hr5 from "./../../assets/involve/image (5).png";
import hr6 from "./../../assets/involve/image.png";
import Membercard from "./Membercard";
import html2canvas from "html2canvas";

const Involve = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    location: "",
    area: "",
  });
  const [voldata, setVoldata] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.mobile) newErrors.mobile = "Mobile is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.area) newErrors.area = "Area is required";

    const phoneRegex = /^\d{10}$/;
    if (formData.mobile && !phoneRegex.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const apiData = {
      volunteerName: `${formData.firstName} ${formData.lastName}`,
      volunteerContact: formData.mobile,
      volunteerEmail: formData.email,
      volunteerLocation: formData.location,
      volunteerArea: formData.area,
    };

    try {
      const response = await api.post("/voluteer", apiData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.status === 201) {
        setSuccessMessage("Registration successful!");
        setVoldata(response.data.volunteerdet);

        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          location: "",
          area: "",
        });

        setErrors({});

        setTimeout(() => {
          setSuccessMessage("");
        }, 4000);
      } else {
        setSuccessMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (Object.keys(voldata).length > 0) {
      handleDownloadImage(); // Call the download function here
    }
  }, [voldata]);

  const handleDownloadImage = () => {
    const element = document.getElementById("membercard");
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpeg");
      link.download = `${voldata.volunteerName}_membership_card.jpg`; // Can also change 'jpeg' to 'png'
      link.click();
    });
  };

  return (
    <div className="involparent">
      <div className="inheromain">
        <div className="iheroback">
          <div className="iheroimg" data-aos="zoom-out">
            <img src={hr1} alt="" />
            <img src={hr2} alt="" />
            <img src={hr3} alt="" />
            <img src={hr4} alt="" />
            <img src={hr5} alt="" />
            <img src={hr6} alt="" />
          </div>
        </div>
        <div className="iherosub" data-aos="zoom-in">
          <div className="iherobtn">
            <Link>volunteer with us</Link>
          </div>
          <h1>
            Make Your Weekends More <br /> <span>Meaningful</span>
          </h1>
        </div>
      </div>

      <div className="intitle" data-aos="zoom-in">
        <h1>Why Volunteer With Us</h1>
      </div>

      <div className="informmain" data-aos="zoom-out">
        <form onSubmit={handleSubmit} className="inform" data-aos="zoom-in">
          {/* Form Fields */}
          <h1>Registration</h1>
          <div className="invcon">
            <div className="invsub">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="invsub">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="invcon">
            <div className="invsub">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>
          </div>
          <div className="invcon">
            <div className="invsub">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="invcon">
            <div className="invsub">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
              {errors.location && (
                <span className="error">{errors.location}</span>
              )}
            </div>
            <div className="invsub">
              <label htmlFor="area">Area</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
              />
              {errors.area && <span className="error">{errors.area}</span>}
            </div>
          </div>
          <div className="informbtn">
            <button type="submit" className="inforbutton">
              Submit
            </button>
          </div>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </div>

      {/* Hidden Member Card Section */}
      <div style={{ position: "absolute", left: "-9999px" }}>
        <Membercard voldata={voldata} />
      </div>
    </div>
  );
};

export default Involve;

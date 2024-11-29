import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import phone from "../Contact/contactimage/Phone.png";
import address from "../Contact/contactimage/Address.png";
import GmailLogo from "../Contact/contactimage/GmailLogo.png";
import img1 from "../Contact/contactimage/image1.png";
import img2 from "../Contact/contactimage/image2.png";
import img3 from "../Contact/contactimage/image3.png";
import img4 from "../Contact/contactimage/image4.png";
import img5 from "../Contact/contactimage/image5.png";
import api from "../../../../api/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    contact: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const validate = (field = null) => {
    let formErrors = { ...errors };

    // Validate Name
    if (!field || field === "contactName") {
      formErrors.contactName = formData.contactName.trim()
        ? ""
        : "Name is required";
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    if (!field || field === "contact") {
      if (!formData.contact) {
        formErrors.contact = "Phone number is required";
      } else if (!phoneRegex.test(formData.contact)) {
        formErrors.contact = "Phone number must be 10 digits";
      } else {
        formErrors.contact = "";
      }
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!field || field === "email") {
      if (!formData.email.trim()) {
        formErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email)) {
        formErrors.email = "Invalid email address";
      } else {
        formErrors.email = "";
      }
    }

    setErrors(formErrors);
    return formErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Dynamically validate the field being updated
    validate(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrors({});

    const validationErrors = validate();
    if (Object.values(validationErrors).some((error) => error)) {
      return;
    }

    try {
      await api.post("/contact", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      setSuccessMessage("Form submitted successfully!");

      setFormData({
        contactName: "",
        contact: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  return (
    <div className="contactUs">
      <div className="contact-container">
        <div className="contact-heading">
          <h1 data-aos="zoom-in">Contact Us</h1>
        </div>
        <div className="contact-content">
          <div className="contact-text">
            <h1 data-aos="fade-right">
              “ Helping one person might not change the whole world, but it
              could change the world for one person ”
            </h1>
          </div>
          <div className="contact-image">
            <div className="con-image1">
              <div className="con-img">
                <img src={img1} alt="" />
              </div>
              <div className="con-img">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="con-image2">
              <div className="con-img">
                <img src={img3} alt="" />
              </div>
              <div className="con-img">
                <img src={img5} alt="" />
              </div>
            </div>
            <div className="con-image3">
              <div className="con-img">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="conform-container" data-aos="zoom-in">
          <form onSubmit={handleSubmit}>
            <div className="conform-row">
              <div className="conform-group">
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                />
                {errors.contactName && (
                  <p className="error">{errors.contactName}</p>
                )}
              </div>
              <div className="conform-group">
                <label htmlFor="contact">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
                {errors.contact && <p className="error">{errors.contact}</p>}
              </div>
            </div>
            <div className="conform-row">
              <div className="conform-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
            </div>
            <div className="conform-row">
              <div className="conform-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="12"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="submit-row">
              <button type="submit">Submit</button>
            </div>
          </form>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

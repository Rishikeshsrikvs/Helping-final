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
  // State to handle form data
  const [formData, setFormData] = useState({
    contactName: "",
    contact: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });

  }, []);
  // State to handle form validation errors
  const [errors, setErrors] = useState({});
  // State to handle success message
  const [successMessage, setSuccessMessage] = useState("");

  // Function to validate form data
  const validate = () => {
    let formErrors = {};

    // Validate Name
    if (!formData.contactName.trim()) {
      formErrors.contactName = "Name is required";
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.contact) {
      formErrors.contact = "Phone number is required";
    } else if (!phoneRegex.test(formData.contact)) {
      formErrors.contact = "Phone number must be 10 digits";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }

    return formErrors;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous success message and validation errors
    setSuccessMessage("");
    setErrors({});

    // Validate the form
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, make the POST request
    try {
      const response = await api.post("/contact", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // If the request is successful, show the success message
      setSuccessMessage("Form submitted successfully!");

      // Reset the form
      setFormData({
        contactName: "",
        contact: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("Form submission failed.");
    }
  };

  return (
    <>
      <div className="contactUs">
        <div className="contact-container">
          <div className="contact-heading">
            <h1 data-aos="zoom-in">Contact Us</h1>
          </div>
          <div className="contact-content">
            <div className="contact-text">
              <h1  data-aos="fade-right">
                “ Helping one person might not change the whole world, but it
                could change the world for one person ”
              </h1>
            </div>
            <div className="contact-image">
              <div className="con-image1" data-aos="fade-left">
                <div className="con-img">
                  <img src={img1} alt="" />
                </div>
                <div className="con-img">
                  <img src={img4} alt="" />
                </div>
              </div>
              <div className="con-image2" data-aos="fade-left">
                <div className="con-img">
                  <img src={img3} alt="" />
                </div>
                <div className="con-img">
                  <img src={img5} alt="" />
                </div>
              </div>
              <div className="con-image3" data-aos="fade-left">
                <div className="con-img">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="conform-container" data-aos="zoom-in">
            <form onSubmit={handleSubmit} >
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
                  <p>First Name</p>
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
                  <p>Enter Your Number</p>
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
                  <p>Example@Example.Com</p>
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
            {/* Display Success Message */}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </div>
          <div className="center-text">
            <h3 data-aos="zoom-in">
              You can get in touch at the addresses and telephone numbers
              mentioned or fill in the form to contact us.
            </h3>
          </div>

          <div className="contact-address">
            <div className="address-container">
              <div className="add-heading" data-aos="fade-right">
                <h1>Address</h1>
                <div className="address">
                  <ul className="address-icon">
                    <li>
                      <img src={address} alt="address" />
                    </li>
                    <li>
                      <img src={GmailLogo} alt="address" />
                    </li>
                    <li>
                      <img src={phone} alt="address" />
                    </li>
                  </ul>
                  <ul className="text">
                    <li>
                      <p>
                        No. 19, Kamaraj Nagar Main Road, Avadi, Chennai - 600071
                      </p>
                    </li>
                    <li>
                      <p>helpinghandsavadi@gmail.com</p>
                    </li>
                    <li>
                      <p>9444885453 / 7358280982</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="map-container" data-aos="fade-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15543.235602223122!2d80.0982294!3d13.1112895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52630b6a082cd7%3A0xf00964b08b210778!2sGrand%20Events%20Catering%20Services!5e0!3m2!1sen!2sin!4v1725279766783!5m2!1sen!2sin"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

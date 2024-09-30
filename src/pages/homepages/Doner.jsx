import React, { useState } from "react";
import api from "../../api/api";
import "./Doner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Doner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  }, []);
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    bloodgroup: "",
    contact: "",
    city: "",
    area: "",
  });

  // State for submission status message
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate contact number
  const validateContact = (contact) => {
    return /^\d{10}$/.test(contact); // Checks if the contact is exactly 10 digits
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate contact number
    if (!validateContact(formData.contact)) {
      setSubmissionStatus("Please enter a valid 10-digit contact number.");
      return;
    }

    // Prepare data to match API requirements
    const dataToSend = {
      donorName: `${formData.name} ${formData.lastname}`,
      donorContact: formData.contact,
      donorBloodGrp: formData.bloodgroup,
      donorCity: formData.city,
      donorArea: formData.area || "", // Area is optional
    };

    try {
      // Sending POST request using Axios
      const response = await api.post("/donor", dataToSend, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.status === 201) {
        setSubmissionStatus("Form submitted successfully!");
        // Reset form fields
        setFormData({
          name: "",
          lastname: "",
          bloodgroup: "",
          contact: "",
          city: "",
          area: "",
        });
      } else {
        setSubmissionStatus("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="donner" >
      <div className="form-container" data-aos="zoom-in">
        <h1 className="form-title">
          BLOOD <span className="highlight">DONORS</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">NAME :</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">LAST NAME :</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="bloodgroup">BLOOD GROUP NEEDED :</label>
              <select
                id="bloodgroup"
                name="bloodgroup"
                value={formData.bloodgroup}
                onChange={handleChange}
                required
              >
                <option value="">Choose the group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact">CONTACT NUMBER :</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">CITY :</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Example: "
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="area">AREA :</label>
              <input
                type="text"
                id="area"
                name="area"
                placeholder="Example: Avadi"
                value={formData.area}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="submit-row">
            <button type="submit">SUBMIT</button>
          </div>
        </form>
        {submissionStatus && (
          <p className="submission-status">{submissionStatus}</p>
        )}
      </div>
    </div>
  );
};

export default Doner;

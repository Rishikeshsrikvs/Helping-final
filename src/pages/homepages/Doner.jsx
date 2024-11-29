import React, { useState, useEffect } from "react";
import api from "../../api/api";
import "./Doner.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Doner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false, // Whether animation should happen only once
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

  // State to track validation errors
  const [errors, setErrors] = useState({});
  // State for submission status message
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Validate all fields dynamically
  const validateField = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "name":
        if (!value.trim()) errorMsg = "Name is required.";
        break;
      case "lastname":
        if (!value.trim()) errorMsg = "Last name is required.";
        break;
      case "bloodgroup":
        if (!value) errorMsg = "Blood group is required.";
        break;
      case "contact":
        if (!/^\d{10}$/.test(value)) errorMsg = "Contact must be 10 digits.";
        break;
      case "city":
        if (!value.trim()) errorMsg = "City is required.";
        break;
      default:
        break;
    }
    return errorMsg;
  };

  // Handle input change and validate dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate current field
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Validate all fields before submission
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Prepare data for API
    const dataToSend = {
      donorName: `${formData.name} ${formData.lastname}`,
      donorContact: formData.contact,
      donorBloodGrp: formData.bloodgroup,
      donorCity: formData.city,
      donorArea: formData.area || "", // Area is optional
    };

    try {
      const response = await api.post("/donor", dataToSend, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.status === 201) {
        setSubmissionStatus("Form submitted successfully!");
        setFormData({
          name: "",
          lastname: "",
          bloodgroup: "",
          contact: "",
          city: "",
          area: "",
        });

        // Clear success message after 4 seconds
        setTimeout(() => {
          setSubmissionStatus(null);
        }, 4000);
      } else {
        setSubmissionStatus("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="donner">
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
              {errors.name && <p className="error-msg">{errors.name}</p>}
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
              {errors.lastname && (
                <p className="error-msg">{errors.lastname}</p>
              )}
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
              {errors.bloodgroup && (
                <p className="error-msg">{errors.bloodgroup}</p>
              )}
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
              {errors.contact && <p className="error-msg">{errors.contact}</p>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">CITY :</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
              {errors.city && <p className="error-msg">{errors.city}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="area">AREA :</label>
              <input
                type="text"
                id="area"
                name="area"
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
          <p
            className={`submission-status ${
              submissionStatus.includes("successfully") ? "success" : "error"
            }`}
          >
            {submissionStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default Doner;

import React, { useState } from "react";
import api from "../../../api/api";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Requestform.css";

const Requestform = ({ onBloodGroupSubmit }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  },[]);
  const [formData, setFormData] = useState({
    name: "",
    hospitalname: "",
    personname: "",
    contact: "",
    bloodgroup: "",
    city: "",
    area: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateContact = (contact) => {
    return /^\d{10}$/.test(contact);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateContact(formData.contact)) {
      setSubmissionStatus("Please enter a valid 10-digit contact number.");
      return;
    }

    const dataToSend = {
      patientName: formData.name,
      hospitalName: formData.hospitalname,
      attenderName: formData.personname,
      attenderContact: formData.contact,
      bloodGrpRequested: formData.bloodgroup,
      patientLocation: formData.city,
      patientArea: formData.area || "",
    };

    try {
      const response = await api.post("/bloodRequest", dataToSend, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.status === 201) {
        setSubmissionStatus("List Of Donors submitted successfully!");
        setFormData({
          name: "",
          hospitalname: "",
          personname: "",
          contact: "",
          bloodgroup: "",
          city: "",
          area: "",
        });
        onBloodGroupSubmit(formData.bloodgroup); // Notify parent about successful submission
      } else {
        setSubmissionStatus("Failed to submit the request. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="request-container" data-aos="zoom-out">
      <h1 className="request-title">
        BLOOD <span className="highlight">REQUEST</span>
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="request-row">
          <div className="request-group">
            <label className="request-label" htmlFor="name">
              PATIENT NAME:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="request-group">
            <label className="request-label" htmlFor="hospitalname">
              HOSPITAL NAME:
            </label>
            <input
              type="text"
              id="hospitalname"
              name="hospitalname"
              value={formData.hospitalname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="request-row">
          <div className="request-group">
            <label className="request-label" htmlFor="personname">
              CONTACT PERSON NAME:
            </label>
            <input
              type="text"
              id="personname"
              name="personname"
              value={formData.personname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="request-group">
            <label className="request-label" htmlFor="contact">
              CONTACT PERSON NUMBER:
            </label>
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
        <div className="request-row">
          <div className="request-group">
            <label className="request-label" htmlFor="bloodgroup">
              BLOOD GROUP NEEDED:
            </label>
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
          <div className="request-group">
            <label className="request-label" htmlFor="city">
              CITY:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Example: Chennai"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="request-group">
            <label className="request-label" htmlFor="area">
              AREA:
            </label>
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
        <div className="submit-rowss">
          <button className="buttonrr" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      {submissionStatus && (
        <p className="submission-status">{submissionStatus}</p>
      )}
    </div>
  );
};

export default Requestform;

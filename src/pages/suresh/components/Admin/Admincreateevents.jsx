import React, { useState } from "react";
import api from "../../../../api/api";
import "./Admincreateevents.css";
import { useAuth } from "../../../adminpages/auth/AuthContext";

const Admincreateevents = () => {
  const { token } = useAuth();

  // State to handle form inputs
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventImage, setEventImage] = useState(null);

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // State for form validation errors
  const [errors, setErrors] = useState({});

  // Utility function to format date as dd/mm/yyyy
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Function to validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!eventName) newErrors.eventName = "Event name is required";
    if (!eventDate) newErrors.eventDate = "Event date is required";
    if (!eventLocation) newErrors.eventLocation = "Event location is required";
    if (!eventDesc) newErrors.eventDesc = "Event description is required";
    if (!eventImage) newErrors.eventImage = "Event image is required";
    return newErrors;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Format the eventDate to dd/mm/yyyy
    const formattedDate = formatDate(eventDate);

    const formData = new FormData();
    formData.append("event_name", eventName);
    formData.append("event_date", formattedDate); // Use the formatted date
    formData.append("event_location", eventLocation);
    formData.append("event_desc", eventDesc);
    formData.append("eventImage", eventImage); // append image file

    try {
      const response = await api.post("/admin/event", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: token,
        },
      });

      setSuccessMessage("Event created successfully");

      // Reset form fields
      setEventName("");
      setEventDate("");
      setEventLocation("");
      setEventDesc("");
      setEventImage(null);
      setErrors({}); // Clear any previous errors
    } catch (error) {
      console.error("Error uploading event:", error);
      alert("Failed to create event");
    }
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    setEventImage(e.target.files[0]);
  };

  return (
    <div className="admincreateevents">
      <h1 className="admincreate-event-title">CREATE EVENTS</h1>
      <div className="admincreate-event-container">
        <form className="admincreate-event-form" onSubmit={handleSubmit}>
          <div className="admincreate-form-row">
            <div className="admincreate-form-group">
              <label htmlFor="event-name">
                <span className="spanred">*</span>EVENT NAME :
              </label>
              <input
                type="text"
                id="event-name"
                name="event-name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
              {errors.eventName && <p className="error">{errors.eventName}</p>}
            </div>

            <div className="admincreate-form-group">
              <label htmlFor="event-date">
                <span className="spanred">*</span>DATE :
              </label>
              <input
                type="date"
                id="event-date"
                name="event-date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
              {errors.eventDate && <p className="error">{errors.eventDate}</p>}
            </div>

            <div className="admincreate-form-group">
              <label htmlFor="event-location">
                <span className="spanred">*</span>LOCATION :
              </label>
              <input
                type="text"
                id="event-location"
                name="event-location"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
              />
              {errors.eventLocation && (
                <p className="error">{errors.eventLocation}</p>
              )}
            </div>
          </div>

          <div className="admincreate-form-row">
            <div className="admincreate-form-group">
              <label htmlFor="event-description">
                <span className="spanred">*</span>DESCRIPTION :
              </label>
              <textarea
                id="event-description"
                name="event-description"
                value={eventDesc}
                onChange={(e) => setEventDesc(e.target.value)}
              ></textarea>
              {errors.eventDesc && <p className="error">{errors.eventDesc}</p>}
            </div>

            <div className="admincreate-form-group admincreate-image-upload">
              <label htmlFor="event-image">
                <span className="spanred">*</span>IMAGE :
              </label>

              <input
                type="file"
                id="event-image"
                name="event-image"
                accept="image/*"
                onChange={handleFileChange}
              />
              <p>{eventImage ? eventImage.name : "No file selected"}</p>
            </div>
          </div>

          <button className="admincreate-create-event-btn" type="submit">
            CREATE EVENT
          </button>
        </form>

        {/* Display success message */}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Admincreateevents;

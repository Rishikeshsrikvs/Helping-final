import React, { useState, useEffect } from "react";
import api from "../../../../api/api";
import "./Admincreateevents.css";
import { useAuth } from "../../../adminpages/auth/AuthContext";

const CLIENT_ID =
  "785871534739-q4eetao566ch8ap03slvdet7145j9ig9.apps.googleusercontent.com";
const API_KEY = "AIzaSyCHGRMagdRoKN2ycbNN9qkRnSV5BQrrJ5s";
const SCOPES = "https://www.googleapis.com/auth/drive.file";

const Admincreateevents = () => {
  const { token } = useAuth();

  // State for form fields
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventImage, setEventImage] = useState(null);

  // State for Drive integration
  const [pickerApiLoaded, setPickerApiLoaded] = useState(false);
  const [oauthToken, setOauthToken] = useState(null);

  // State for validation and success messages
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Load Google Picker API on component mount
  useEffect(() => {
    window.gapi.load("picker", { callback: onPickerApiLoad });
  }, []);

  const onPickerApiLoad = () => {
    setPickerApiLoaded(true);
  };

  const handleGoogleLogin = () => {
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: (tokenResponse) => {
        setOauthToken(tokenResponse.access_token);
      },
    });
    client.requestAccessToken();
  };

  const openPicker = () => {
    if (!pickerApiLoaded) {
      alert("Google Picker API not loaded yet");
      return;
    }

    if (!oauthToken) {
      handleGoogleLogin();
      return;
    }

    const picker = new window.google.picker.PickerBuilder()
      .addView(window.google.picker.ViewId.DOCS_IMAGES)
      .setOAuthToken(oauthToken)
      .setDeveloperKey(API_KEY)
      .setCallback(pickerCallback)
      .build();

    picker.setVisible(true);
  };

  const pickerCallback = async (data) => {
    if (
      data[window.google.picker.Response.ACTION] ===
      window.google.picker.Action.PICKED
    ) {
      const file = data[window.google.picker.Response.DOCUMENTS][0];
      const fileId = file[window.google.picker.Document.ID];
      const fileName = file[window.google.picker.Document.NAME];

      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
        {
          headers: {
            Authorization: `Bearer ${oauthToken}`,
          },
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const newFile = new File([blob], fileName, { type: file.mimeType });
        setEventImage(newFile);
      } else {
        console.error("Error fetching the file:", response.statusText);
      }
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!eventName) newErrors.eventName = "Event name is required";
    if (!eventDate) newErrors.eventDate = "Event date is required";
    if (!eventLocation) newErrors.eventLocation = "Event location is required";
    if (!eventDesc) newErrors.eventDesc = "Event description is required";
    if (!eventImage) newErrors.eventImage = "Event image is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const formData = new FormData();
    formData.append("event_name", eventName);
    formData.append("event_date", eventDate);
    formData.append("event_location", eventLocation);
    formData.append("event_desc", eventDesc);
    formData.append("eventImage", eventImage);

    try {
      await api.post("/admin/event", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: token,
        },
      });

      setSuccessMessage("Event created successfully");
      setEventName("");
      setEventDate("");
      setEventLocation("");
      setEventDesc("");
      setEventImage(null);
      setErrors({});
    } catch (error) {
      console.error("Error uploading event:", error);
      alert("Failed to create event");
    }
  };

  return (
    <div className="admincreateevents">
      <h1 className="admincreate-event-title">CREATE EVENTS</h1>
      <div className="admincreate-event-container">
        <form className="admincreate-event-form" onSubmit={handleSubmit}>
          {/* Other form fields */}
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
            <div className="admincreate-form-group admincreateevent">
              <span className="spanred">*</span>IMAGE :
              <label className="admincreate-upload-btn" htmlFor="event-image">
                UPLOAD IMAGE
              </label>
              <input
                type="file"
                id="event-image"
                name="event-image"
                accept="image/*"
                onChange={(e) => setEventImage(e.target.files[0])}
              />
              <p>{eventImage ? eventImage.name : "No file selected"}</p>
              <div className="or">
                <span className="adgalline"></span>
                <p>or</p>
                <span className="adgalline"></span>
              </div>
              <button
                type="button"
                className="admincreate-submit-btn"
                onClick={openPicker}
              >
                Select from Drive
              </button>
              {errors.eventImage && (
                <p className="error">{errors.eventImage}</p>
              )}
            </div>
          </div>

          <button className="admincreate-create-event-btn" type="submit">
            CREATE EVENT
          </button>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Admincreateevents;

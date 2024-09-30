import React, { useEffect, useState } from "react";
import api from "../../../../api/api";
import "./Adnotification.css";
import { useNavigate } from "react-router-dom";
const Adnotification = () => {
  const [contacts, setContacts] = useState(0);
  const [volunteers, setVolunteers] = useState(0);
  const [donors, setDonors] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch contacts
    api
      .get("/admin/unvisitedContacts")
      .then((response) => {
        setContacts(response.data.unvisitedCount);
      })

      .catch((error) => console.error("Error fetching contacts:", error));

    // Fetch volunteers
    api
      .get("/admin/unvisitedVolunteers")
      .then((response) => setVolunteers(response.data.unvisitedCount))
      .catch((error) => console.error("Error fetching volunteers:", error));

    // Fetch donors
    api
      .get("/admin/unvisitedDonors")
      .then((response) => setDonors(response.data.unvisitedCount))
      .catch((error) => console.error("Error fetching donors:", error));
  }, []);

  return (
    <div className="notification">
      <div className="content-notification">
        <div className="notifications">
          <h2>{contacts}</h2>
          <h3>Contacts</h3>
          {contacts > 0 && <div className="noti-dot"></div>}
        </div>
        <div className="notifications">
          <h2>{volunteers}</h2>
          <h3>Volunteers</h3>
          {donors > 0 && <div className="noti-dot"></div>}
        </div>
        <div className="notifications">
          <h2>{donors}</h2>
          <h3>Donors</h3>
          {donors > 0 && <div className="noti-dot"></div>}
        </div>
        
      </div>
      <div className="content-qr-gen">
        <button
          className="qr-gen"
          onClick={() => {
            navigate("/admin/SHRA/qrcode");
          }}
        >
          QR CODE GENERATOR
        </button>
      </div>
    </div>
  );
};

export default Adnotification;

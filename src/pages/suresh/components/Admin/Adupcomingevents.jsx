import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../api/api";
import { useAuth } from "../../../adminpages/auth/AuthContext";
import "./Adupcomingevents.css";

const Adupcomingevents = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    api
      .get("admin/events", {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
      });
  };

  useEffect(() => {
    // Fetch events from the API when the component mounts
    fetchEvents();
  }, [token]);

  const handleDelete = (eventId) => {
    api
      .delete(`admin/event/${eventId}`, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        // Refetch the events after deletion
        fetchEvents();
      })
      .catch((error) => {
        console.error("There was an error deleting the event!", error);
      });
  };

  return (
    <div className="main-adupcomingevent">
      <div className="adupcomingevent-heading">
        <h1>upcoming events</h1>
      </div>
      <div className="uetitle">
        <button
          onClick={() => {
            navigate("/admin/SHRA/createevent");
          }}
        >
          CREATE EVENT
        </button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="eventname">Event Name</th>
              <th className="date">Date</th>
              <th className="location">Location</th>
              <th className="DESC">Desc</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td className="evname">{event.event_name}</td>
                <td className="evdate">{event.event_date.substring(0, 10)}</td>
                <td className="evlocation">{event.event_location}</td>
                <td className="evDESC"><p>{event.event_desc}</p></td>

                <td className="evbtn">
                  <button
                    className="table-button"
                    onClick={() => handleDelete(event._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adupcomingevents;

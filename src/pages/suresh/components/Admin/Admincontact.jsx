import React, { useEffect, useState } from "react";
import "./Admincontact.css";
import api from "../../../../api/api";
import { useAuth } from "../../../adminpages/auth/AuthContext";
const Admincontact = () => {
  const { token } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [checkeds, setCheckeds] = useState([]);

  const fetchContacts = () => {
    api
      .get("admin/contacts", {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
      });
  };
  const fetchCheckeds = () => {
    api
      .get("admin/checkContact", {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setCheckeds(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
      });
  };
  useEffect(() => {
    // Fetch events from the API when the component mounts
    fetchContacts();
    fetchCheckeds();
  }, [token]);

  const handleCheck = (contactId) => {
    api
      .put(
        `admin/contact`,
        { contactId: contactId },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            authorization: token,
          },
        }
      )
      .then(() => {
        // Refetch the events after deletion

        fetchContacts();
        fetchCheckeds();
      })
      .catch((error) => {
        console.error("There was an error deleting the event!", error);
      });
  };
  const handleDelete = (checkedId) => {
    api
      .delete(
        `admin/contact/${checkedId}`,

        {
          headers: {
            authorization: token,
          },
        }
      )
      .then(() => {
        // Refetch the events after deletion

        fetchCheckeds();
      })
      .catch((error) => {
        console.error("There was an error deleting the event!", error);
      });
  };

  return (
    <div className="Admincontact">
      <div className="admincon-container">
        <div className="admin-con-heading">
          <h1>contact</h1>
        </div>
        <div className="admin-content">
          {contacts.map((contact, index) => (
            <div className="adcon-check" key={contact._id}>
              <div className="adcon-check-container">
                <div className="adcon-check-noti-dot">{index + 1}</div>
                <div className="con-check-name">
                  <p>name :</p>
                  <h2>{contact.contactName}</h2>
                </div>
                <div className="con-check-email">
                  <p>email :</p>
                  <h2>{contact.email}</h2>
                </div>
                <div className="con-check-phone">
                  <p>phone number :</p>
                  <h2>{contact.contact}</h2>
                </div>
                <div className="con-check-message">
                  <p>message :</p>
                  <div className="check-message-box">{contact.message}</div>
                </div>
                <div className="check-btn-container">
                  <div className="con-check-btn">
                    <button
                      className="ad-con-check-btn"
                      onClick={() => handleCheck(contact._id)}
                    >
                      check
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="adcon-center-line">
          <span></span>
          <p>completed</p>
          <span></span>
        </div>
        <div className="admin-content">
          {checkeds.map((checked, index) => (
            <div className="adcon-completed" key={checked._id}>
              <div className="adcon-completed-container">
                <div className="adcon-completed-noti-dot">{index + 1}</div>
                <div className="con-completed-name">
                  <p>name :</p>
                  <h2>{checked.contactName}</h2>
                </div>
                <div className="con-completed-email">
                  <p>email :</p>
                  <h2>{checked.email}</h2>
                </div>
                <div className="con-completed-phone">
                  <p>phone number :</p>
                  <h2>{checked.contact}</h2>
                </div>
                <div className="con-completed-message">
                  <p>message :</p>
                  <div className="completed-message-box">{checked.message}</div>
                </div>
                <div className="completed-btn-container">
                  <div className="con-completed-btn">
                    <button
                      className="ad-con-completed-btn"
                      onClick={() => handleDelete(checked._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admincontact;

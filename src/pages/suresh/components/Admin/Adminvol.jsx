import React, { useEffect, useState } from "react";
import "./Adminvol.css";
import volnow from "../Admin/Adminimage/volnowimage.png";
import Adminvollist from "./Adminvollist";

import api from "../../../../api/api";
import { useAuth } from "../../../adminpages/auth/AuthContext";
const Adminvol = () => {
  const { token } = useAuth();
  const [volunteersrecent, setVolunteersrecent] = useState([]);

  const fetchvolunteersrecent = () => {
    api
      .get("admin/recentVolunteers", {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setVolunteersrecent(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the recentvolunteers!",
          error
        );
      });
  };
  useEffect(() => {
    // Fetch events from the API when the component mounts
    fetchvolunteersrecent();
  }, [token]);

  return (
    <div className="adminvol">
      <div className="adminvol-container">
        <div className="adminvol-heading">
          <h1>volunteer</h1>
        </div>
        <div className="admin-poster-content">
          <div className="admin-poster-heading">
            <h3>NEW PERSONS</h3>
          </div>
          <div className="admin-poster-flexitem">
            {volunteersrecent.map((volunteer) => (
              <div className="admin-poster-flex">
                <div className="admin-poster-profile">
                  <img src={volnow} alt="" />
                </div>
                <div className="admin-poster-name">
                  <p>name :</p>
                  <h3>{volunteer.volunteerName}</h3>
                </div>
                <div className="admin-poster-mobile">
                  <p>mobile :</p>
                  <h3>{volunteer.volunteerContact}</h3>
                </div>
                <div className="admin-poster-con-location">
                  <div className="admin-pos-location">
                    <p>location :</p>
                    <h3>{volunteer.volunteerLocation}</h3>
                  </div>
                  <div className="admin-pos-area">
                    <p>Area :</p>
                    <h3>{volunteer.volunteerArea}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Adminvollist />
      </div>
    </div>
  );
};

export default Adminvol;

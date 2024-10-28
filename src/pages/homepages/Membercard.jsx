import React from "react";
import "./Membercard.css";

import mmback from "./../../assets/involve/memberback.jpeg";
const Membercard = ({ voldata }) => {
  return (
    <div className="membermain">
      <div className="membercard" id="membercard">
        <div className="memberback">
          <img src={mmback} alt="" />
        </div>
        <div className="membersub">
          <div className="mmtext">
            <div className="mmrow">
              <p className="mmtitle">{voldata.volunteerName}</p>
            </div>
            <div className="mmrow">
              <label htmlFor="">Volunteer ID</label>
              <span>:</span>
              <p className="mmsubp"> {voldata.VolunteerID}</p>
            </div>
            <div className="mmrow">
              <label htmlFor="">Contact</label>
              <span>:</span>
              <p className="mmsubp">{voldata.volunteerContact}</p>
            </div>
            <div className="mmrow">
              <label htmlFor="">Email ID</label>
              <span>:</span>
              <p className="mmsubp">{voldata.volunteerEmail}</p>
            </div>
            <div className="mmrow">
              <label htmlFor="">Location</label>
              <span>:</span>
              <p className="mmsubp">{voldata.volunteerLocation}</p>
            </div>
            <div className="mmrow">
              <label htmlFor="">Joining Date</label>
              <span>:</span>
              <p className="mmsubp">
                {" "}
                {new Date(voldata.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membercard;

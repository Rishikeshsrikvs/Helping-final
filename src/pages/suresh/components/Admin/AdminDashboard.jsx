import React from "react";
import "./AdminDashboard.css";
import ProtectedRoute from "./../../../adminpages/auth/ProtectedRoute.jsx";
import logo from "../Admin/Adminimage/logo.png";
import dashboard from "../Admin/Adminimage/dashboard.png";
import gallery from "../Admin/Adminimage/gallery.png";
import event from "../Admin/Adminimage/event.png";
import contact from "../Admin/Adminimage/contact.png";
import volunteer from "../Admin/Adminimage/volunteer.png";
import donors from "../Admin/Adminimage/donors.png";
import Annualreport from "../Admin/Adminimage/Annualreport.png";
import Adnotification from "./Adnotification";
import Adgallery from "./Adgallery";
import Adupcomingevents from "./Adupcomingevents";
import Admincreateevents from "./Admincreateevents.jsx";
import Admincontact from "./Admincontact";
import Adminvol from "./Adminvol";
import Admindonner from "./Admindonner";
import AdminARP from "./AdminARP";
import Qrcode from "./../../../adminpages/Qrcode.jsx";
import { Link, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const AdminDashboard = () => {
  // Use location to determine the current path
  const location = useLocation();

  return (
    <ProtectedRoute>
      <div className="admin-page-container">
        <div className="admin-sidebar">
          <div className="admin-logocontainer">
            <img src={logo} alt="" />
          </div>
          <ul className="admin-lists">
            <Link
              to="/admin/SHRA/dashboard"
              className={`admin-icon ${
                location.pathname === "/admin/SHRA/dashboard"
                  ? "active-link"
                  : ""
              }`}
            >
              <img src={dashboard} alt="" />
              <li>Dashboard</li>
            </Link>
            <Link
              to="/admin/SHRA/gallery"
              className={`admin-icon ${
                location.pathname === "/admin/SHRA/gallery" ? "active-link" : ""
              }`}
            >
              <img src={gallery} alt="" />
              <li>Gallery</li>
            </Link>
            <Link
              to="/admin/SHRA/events"
              className={`admin-icon ${
                location.pathname === "/admin/SHRA/events" ? "active-link" : ""
              }`}
            >
              <img src={event} alt="" />
              <li>Events</li>
            </Link>
            <Link
              to="/admin/SHRA/contact"
              className={`admin-icon ${
                location.pathname === "/admin/SHRA/contact" ? "active-link" : ""
              }`}
            >
              <img src={contact} alt="" />
              <li>Contacts</li>
            </Link>
            <Link
              to="/admin/SHRA/volunteer"
              className={`admin-icon ${
                location.pathname === "/admin/SHRA/volunteer"
                  ? "active-link"
                  : ""
              }`}
            >
              <img src={volunteer} alt="" />
              <li>Volunteer</li>
            </Link>
            <Link
              to="/admin/SHRA/donors"
              className={`admin-icon ${
                location.pathname === "/admin/SHRA/donors" ? "active-link" : ""
              }`}
            >
              <img src={donors} alt="" />
              <li>Donors</li>
            </Link>
            <Link
              to="/admin/SHRA/annual-report"
              className={`admin-icon ${
                location.pathname === "/admin/SHRA/annual-report"
                  ? "active-link"
                  : ""
              }`}
            >
              <img src={Annualreport} alt="" />
              <li>Annual report</li>
            </Link>
          </ul>
        </div>
        <div className="admin-topbar">
          <div className="admin-topbar-header">
            <h1>helping hands charity</h1>
          </div>
        </div>
        <div className="admin-topbar-content">
          <Routes>
            <Route path="/dashboard" element={<Adnotification />} />
            <Route path="/gallery" element={<Adgallery />} />
            <Route path="/events" element={<Adupcomingevents />} />
            <Route path="/createevent" element={<Admincreateevents />} />
            <Route path="/contact" element={<Admincontact />} />
            <Route path="/volunteer" element={<Adminvol />} />
            <Route path="/donors" element={<Admindonner />} />
            <Route path="/annual-report" element={<AdminARP />} />
            <Route path="/qrcode" element={<Qrcode />} />
          </Routes>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;

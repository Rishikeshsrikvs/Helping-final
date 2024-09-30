import React, { useState } from "react";
import "./Annualreport.css";

const Annualreport = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="annualreport">
      <div className="annualreportcontainer">
        <h1 className="annual-heading">ANNUAL REPORT FOR 2023</h1>
        <form onSubmit={handleSubmit} className="reportform">
          <div className="form-group">
            <label className="rr-label" htmlFor="username">
              Name:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="rr-label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="submit">
            <button className="formbtn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Annualreport;

import React from "react";
import { useEffect } from "react";

import "./Organdonaateform.css";
export const Organdonateform = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="organdonateformcon">
      <form action="" className="organmain">
        <h1>Organ - Donation Form</h1>
        <div className="organinput">
          <label htmlFor="">First Name</label>
          <input type="text" />
        </div>
        <div className="organinput">
          <label htmlFor="">Last Name</label>
          <input type="text" />
        </div>
        <div className="organinput">
          <label htmlFor="">Contact Number</label>
          <input type="text" />
        </div>
        <div className="organinput">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="organinput">
          <label htmlFor="">Address</label>
          <textarea name="" id=""></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Organdonateform;

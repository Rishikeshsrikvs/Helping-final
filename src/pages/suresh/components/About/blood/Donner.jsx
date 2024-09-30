import React from "react";
import "./Donner.css";

const Donner = () => {
  return (
    <div className="donner">
      <div class="form-container">
        <h1 class="form-title">
          BLOOD <span class="highlight">DONORS</span>
        </h1>
        <form>
          <div class="form-row">
            <div class="form-group ">
              <label for="name">NAME :</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label for="lastname">LAST NAME :</label>
              <input type="text" id="lastname" name="lastname" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="bloodgroup">BLOOD GROUP NEEDED :</label>
              <select id="bloodgroup" name="bloodgroup">
                <option>Choose the group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div class="form-group">
              <label for="contact">CONTACT NUMBER :</label>
              <input type="text" id="contact" name="contact" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="city">CITY :</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Example: Avadi"
                required
              />
            </div>
            <div class="form-group">
              <label for="area">AREA :</label>
              <input type="text" id="area" name="area" required />
            </div>
          </div>
          <div class="submit-row">
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donner;

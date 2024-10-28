import React, { useState } from "react";
import "./Popup.css";

const Popup = ({ image, onClose, handlePay, selectedText }) => {
  const [donationFrequency, setDonationFrequency] = useState("ONCE");
  const [currency, setCurrency] = useState("INR");
  const [amount, setAmount] = useState(250);

  const incrementAmount = () => setAmount(amount + 50);
  const decrementAmount = () => setAmount(amount > 50 ? amount - 50 : amount);

  const handleDonate = () => {
    // Call the handlePay function passed from Donate with the current values
    handlePay(amount, donationFrequency, selectedText);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Ensure the input is a valid number or empty
    if (!isNaN(value) && (value === "" || Number(value) >= 0)) {
      setAmount(value === "" ? "" : Number(value));
    }
  };

  return (
    <div className="popup-overlay">
      <div
        className="popup-content"
        style={{ backgroundImage: `url(${image})` }}
      >
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="popup-form">
          <div className="frequency-selector">
            <button
              className={donationFrequency === "ONCE" ? "active" : ""}
              onClick={() => setDonationFrequency("ONCE")}
            >
              ONCE
            </button>
            <button
              className={donationFrequency === "MONTHLY" ? "active" : ""}
              onClick={() => setDonationFrequency("MONTHLY")}
            >
              MONTHLY
            </button>
            <button
              className={donationFrequency === "YEARLY" ? "active" : ""}
              onClick={() => setDonationFrequency("YEARLY")}
            >
              YEARLY
            </button>
          </div>
          <div className="currency-amount">
            <input
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            />
          </div>
          <div className="amount-control">
            <button className="decrement-btn" onClick={decrementAmount}>
              <span>-</span>
            </button>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="controlamount"
            />
            <button className="increment-btn" onClick={incrementAmount}>
              <span>+</span>
            </button>
          </div>
          <div className="total-amount">
            <h3>Total Amount</h3>
            <p>
              {currency} {amount}
            </p>
          </div>
          <button className="donate-btn" onClick={handleDonate}>
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

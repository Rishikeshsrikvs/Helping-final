import React, { useEffect, useState } from "react";
import "./Bloodtable.css";
import AOS from "aos";
import "aos/dist/aos.css";
import api from "../../../api/api";

const Bloodtable = ({ selectedBloodGroup }) => {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    const fetchDonors = async () => {
      if (!selectedBloodGroup) {
        // Clear the donors list if no blood group is selected
        setDonors([]);
        return;
      }

      try {
        // Format the blood group for the API request
        const formattedBloodGroup = selectedBloodGroup.includes("+")
          ? selectedBloodGroup.replace("+", "%2B")
          : selectedBloodGroup;

        // Fetch the data from the API
        const response = await api.get(
          `/donors?donorBloodGrp=${formattedBloodGroup}`
        );

        // Update the state with the fetched data
        setDonors(response.data);
        setError(null);
      } catch (err) {
        // Handle any errors
        setError("Failed to fetch donor data. Please try again later.");
        setDonors([]);
      }
    };

    fetchDonors();
  }, [selectedBloodGroup]);

  return (
    <div className="bloodtablemain" data-aos="fade-up">
      <h1>LIST OF DONORS</h1>
      <p>Selected blood group: {selectedBloodGroup || "All"}</p>

      <table className="bloodtable">
        <thead>
          <tr>
            <th>NAME</th>
            <th>CONTACT</th>
            <th>AREA</th>
            <th>BLOOD GROUP</th>
          </tr>
        </thead>
        <tbody>
          {donors.length > 0 ? (
            donors.map((donor) => (
              <tr key={donor.DonorsID}>
                <td>{donor.donorName}</td>
                <td>{donor.donorContact}</td>
                <td>{donor.donorArea}</td>
                <td>{donor.donorBloodGrp}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No donors found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Bloodtable;

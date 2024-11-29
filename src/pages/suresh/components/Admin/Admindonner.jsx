import React, { useEffect, useState } from "react";
import "./Admindonner.css";
import { useAuth } from "../../../adminpages/auth/AuthContext";
import api from "../../../../api/api";

const Admindonner = () => {
  const { token } = useAuth();
  const [donors, setDonors] = useState([]);

  const fetchDonors = () => {
    api
      .get("admin/donors", {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setDonors(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the donors!", error);
      });
  };

  useEffect(() => {
    // Fetch donors from the API when the component mounts
    fetchDonors();
  }, [token]);

  const handleDownload = async () => {
    try {
      const response = await api.get("admin/downloadDonors", {
        headers: {
          authorization: token,
        },
        responseType: "blob", // Ensure response is treated as a file blob
      });

      // Create a URL for the blob and trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "donors_list.csv"); // Specify the file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading donors list:", error);
    }
  };

  return (
    <div className="ad-donner-container">
      <h1>DONORS LIST</h1>
      <div className="ad-donner-table-container">
        <table className="ad-donner-table">
          <thead className="ad-donner-thead">
            <tr>
              <th className="d-th">NAME</th>
              <th className="d-th">CITY</th>
              <th className="d-th">AREA</th>
              <th className="d-th">CONTACT NUMBER</th>
              <th className="d-th">BLOOD GROUP</th>
            </tr>
          </thead>
          <tbody>
            {donors.length > 0 ? (
              donors.map((donor, index) => (
                <tr key={index}>
                  <td className="d-td">{donor.donorName}</td>
                  <td className="d-td">{donor.donorCity}</td>
                  <td className="d-td">{donor.donorArea}</td>
                  <td className="d-td">{donor.donorContact}</td>
                  <td className="d-td">{donor.donorBloodGrp}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No donors found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="ad-donner-download-button">
        <button className="ad-don-btn" onClick={handleDownload}>
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default Admindonner;

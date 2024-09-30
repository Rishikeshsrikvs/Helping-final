import React, { useEffect, useState } from "react";
import "./Admincontact.css";
import api from "../../../../api/api";
import { useAuth } from "../../../adminpages/auth/AuthContext";
import "./AdminARP.css";

const CLIENT_ID =
  "785871534739-q4eetao566ch8ap03slvdet7145j9ig9.apps.googleusercontent.com"; // Use your own client ID
const API_KEY = "AIzaSyCHGRMagdRoKN2ycbNN9qkRnSV5BQrrJ5s"; // Use your own API key
const SCOPES = "https://www.googleapis.com/auth/drive.file";

const AdminARP = () => {
  const { token } = useAuth();
  const [reportyears, setReportyears] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [driveLink, setDriveLink] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [message, setMessage] = useState("");
  const [pickerApiLoaded, setPickerApiLoaded] = useState(false);
  const [oauthToken, setOauthToken] = useState(null);

  const fetchReportyears = () => {
    api
      .get("admin/reportYears", {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setReportyears(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the reported years!", error);
      });
  };

  useEffect(() => {
    fetchReportyears();
    loadGooglePicker();
  }, [token]);

  const loadGooglePicker = () => {
    window.gapi.load("picker", { callback: onPickerApiLoad });
  };

  const onPickerApiLoad = () => {
    console.log("Picker API loaded");
    setPickerApiLoaded(true);
  };

  const handleDelete = (yearId) => {
    api
      .delete(`admin/reportYear/${yearId}`, {
        headers: { authorization: token },
      })
      .then(() => {
        setMessage("Year deleted successfully.");
        fetchReportyears();
      })
      .catch((error) => {
        console.error("There was an error deleting the year!", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("year", yearInput);

    if (selectedFile) {
      formData.append("annualReport", selectedFile);
    } else if (driveLink) {
      formData.append("annualReport", driveLink);
    }

    api
      .post("admin/annual", formData, {
        headers: {
          authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setMessage("Year uploaded successfully.");
        setYearInput("");
        setSelectedFile(null);
        setDriveLink("");
        fetchReportyears(); // Refresh the table after upload
      })
      .catch((error) => {
        console.error("There was an error uploading the year!", error);
      });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Store the selected file in state
  };

  const handleGoogleLogin = () => {
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: (tokenResponse) => {
        setOauthToken(tokenResponse.access_token);
        console.log("OAuth Token:", tokenResponse.access_token);
      },
    });
    client.requestAccessToken();
  };

  const openPicker = () => {
    if (!pickerApiLoaded) {
      alert("Google Picker API not loaded yet");
      return;
    }

    if (!oauthToken) {
      handleGoogleLogin();
      return;
    }

    const picker = new window.google.picker.PickerBuilder()
      .addView(window.google.picker.ViewId.DOCS)
      .setOAuthToken(oauthToken)
      .setDeveloperKey(API_KEY)
      .setCallback(pickerCallback)
      .build();

    picker.setVisible(true);
  };

  const pickerCallback = async (data) => {
    if (
      data[window.google.picker.Response.ACTION] ===
      window.google.picker.Action.PICKED
    ) {
      const file = data[window.google.picker.Response.DOCUMENTS][0];
      const fileId = file[window.google.picker.Document.ID];
      const fileName = file[window.google.picker.Document.NAME];
      console.log("Picked file:", file);

      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
        {
          headers: {
            Authorization: `Bearer ${oauthToken}`,
          },
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const newFile = new File([blob], fileName, { type: file.mimeType });
        setSelectedFile(newFile);
      } else {
        console.error("Error fetching the file:", response.statusText);
      }
    }
  };

  return (
    <div className="adminarp">
      <div className="arp-container">
        <h1>ANNUAL REPORT PDF</h1>

        <form className="arp-form-container" onSubmit={handleSubmit}>
          <div className="arp-form-year">
            <label htmlFor="year">YEAR:</label>
            <input
              type="text"
              id="year"
              value={yearInput}
              onChange={(e) => setYearInput(e.target.value)}
              required
            />
          </div>

          <div className="arp-btns">
            <label className="arp-upload-btn" htmlFor="arpimg">
              UPLOAD PDF
            </label>
            <input
              type="file"
              id="arpimg"
              accept=".pdf"
              onChange={handleFileChange}
            />
            <p>{selectedFile ? selectedFile.name : "No file selected"}</p>
            <div className="arp-or">
              <span className="arpline"></span>
              <p className="arpor">or</p>
              <span className="arpline"></span>
            </div>
            <button className="drive-btn" onClick={openPicker}>
              DRIVE
            </button>

            <button className="arp-sub-btn" type="submit">
              Submit
            </button>
          </div>
        </form>

        {message && <p className="message">{message}</p>}

        <div className="arp-table">
          <table>
            <thead>
              <tr>
                <th>YEAR</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {reportyears.map((year) => (
                <tr key={year._id}>
                  <td>{year.year}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(year._id)}
                      className="arp-td-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminARP;

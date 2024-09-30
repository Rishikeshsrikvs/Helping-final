import React, { useState, useEffect } from "react";
import api from "../../../../api/api";
import "./Adgallery.css";
import { useAuth } from "../../../adminpages/auth/AuthContext";

const CLIENT_ID =
  "785871534739-q4eetao566ch8ap03slvdet7145j9ig9.apps.googleusercontent.com";
const API_KEY = "AIzaSyCHGRMagdRoKN2ycbNN9qkRnSV5BQrrJ5s";
const SCOPES = "https://www.googleapis.com/auth/drive.file";

const Adgallery = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [pickerApiLoaded, setPickerApiLoaded] = useState(false);
  const [oauthToken, setOauthToken] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
    loadGooglePicker();
  }, []);

  const loadGooglePicker = () => {
    window.gapi.load("picker", { callback: onPickerApiLoad });
  };

  const onPickerApiLoad = () => {
    console.log("Picker API loaded");
    setPickerApiLoaded(true);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Store the selected file in state
  };
  const resetState = () => {
    setSelectedFile(null);
    setUploadError("");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadError("Please select a file to upload.");
      return;
    }

    console.log("FormData form data:");
    const formData = new FormData();
    formData.append("galleryImage", selectedFile);

    console.log("FormData contents:");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await api.post("/admin/gallery", formData, {
        headers: {
          authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Image uploaded successfully!");
        resetState(); // Reset the component state
      }
    } catch (error) {
      console.error("Error response:", error.response?.data);
      setUploadError("Failed to upload image. Please try again.");
      setUploadSuccess("");
    }
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
      .addView(window.google.picker.ViewId.DOCS_IMAGES)
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
    <div className="main-admingall">
      <div className="admingallery">
        <div className="adgall-container">
          <div className="adgall-heading">
            <h3>GALLERY LIST</h3>
          </div>
          <div className="adgall-btns">
            <label className="upload-btn" htmlFor="adegalimg">
              UPLOAD IMAGE
            </label>
            <p>{selectedFile ? selectedFile.name : "No file selected"}</p>
            <input
              type="file"
              id="adegalimg"
              onChange={handleFileChange}
              className="upload-input"
              accept="image/*"
              style={{ display: "none" }}
            />

            <div className="or">
              <span className="adgalline"></span>
              <p>or</p>
              <span className="adgalline"></span>
            </div>
            <button className="drive-btn" onClick={openPicker}>
              DRIVE
            </button>
            <button className="adgall-sub-btn" onClick={handleUpload}>
              Submit
            </button>
          </div>
          {uploadSuccess && (
            <div className="success-message">{uploadSuccess}</div>
          )}
          {uploadError && <div className="error-message">{uploadError}</div>}
        </div>
      </div>
    </div>
  );
};

export default Adgallery;

// import React, { useState } from "react";
// import { useEffect } from "react";
// import api from "../../../../api/api"; // Make sure axios is imported
// import "./Adgallery.css";
// import { useAuth } from "../../../adminpages/auth/AuthContext"; // Import useAuth for authentication

// const Adgallery = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadSuccess, setUploadSuccess] = useState("");
//   const [uploadError, setUploadError] = useState("");
//   const { token } = useAuth(); // Get the token from the auth context

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]); // Store the selected file in state
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       setUploadError("Please select a file to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("galleryImage", selectedFile); // Append the selected file to formData
//     console.log(token);

//     try {
//       const response = await api.post("/admin/gallery", formData, {
//         headers: {
//           authorization: token,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (response.status === 201) {
//         setUploadSuccess("Image uploaded successfully!");
//         setUploadError("");
//       }
//     } catch (error) {
//       setUploadError("Failed to upload image. Please try again.");
//       setUploadSuccess("");
//     }
//   };

//   return (
//     <div className="main-admingall">
//       <div className="admingallery">
//         <div className="adgall-container">
//           <div className="adgall-heading">
//             <h3>GALLERY LIST</h3>
//           </div>
//           <div className="adgall-btns">
//             <label className="upload-btn" htmlFor="adegalimg">
//               UPLOAD IMAGE
//             </label>
//             <p>{selectedFile ? selectedFile.name : "No file selected"}</p>
//             <input
//               type="file"
//               id="adegalimg"
//               onChange={handleFileChange}
//               className="upload-input"
//               accept="image/*"
//               style={{ display: "none" }}
//             />

//             <div className="or">
//               <span className="adgalline"> </span>
//               <p>or</p>
//               <span className="adgalline"></span>
//             </div>
//             <button className="drive-btn">DRIVE</button>
//             <button className="adgall-sub-btn" onClick={handleUpload}>
//               Submit
//             </button>
//           </div>
//           {uploadSuccess && (
//             <div className="success-message">{uploadSuccess}</div>
//           )}
//           {uploadError && <div className="error-message">{uploadError}</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adgallery;

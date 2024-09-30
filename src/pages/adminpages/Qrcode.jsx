import React, { useState, useEffect } from "react";
import "./Qrcode.css";

const Qrcode = () => {
  const [img, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const [showInput, setShowInput] = useState(false);
  const [showKeyValueInput, setShowKeyValueInput] = useState(false);

  const [content, setContent] = useState("");
  const [keyValues, setKeyValues] = useState([
    { key: "", value: "", disabled: false },
  ]);
  const [qrCode, setQrCode] = useState(null);

  useEffect(() => {
    if (showKeyValueInput && keyValues.length > 0) {
      const timer = setTimeout(() => {
        setKeyValues((prevKeyValues) => {
          const updatedKeyValues = [...prevKeyValues];
          updatedKeyValues[0].disabled = true;
          return updatedKeyValues;
        });
      }, 60000); // 1 minute

      return () => clearTimeout(timer); // Clear timeout if component unmounts or keyValues changes
    }
  }, [showKeyValueInput]);

  async function generateQr() {
    setLoading(true);
    try {
      let qrData = content;

      if (showKeyValueInput) {
        qrData = keyValues
          .filter((pair) => pair.key.trim() !== "" && pair.value.trim() !== "")
          .map((pair) => `${pair.key}:${pair.value}`)
          .join(",");
      }

      if (qrData.trim() === "") {
        return;
      }

      const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        qrData
      )}`;
      setImage(url);
      setQrCode(url);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  const handleShowInput = () => {
    setShowInput(true);
    setShowKeyValueInput(false);
  };

  const handleShowKeyValueInput = () => {
    setShowKeyValueInput(true);
    setShowInput(false);
  };

  const handleAddKeyValue = () => {
    setKeyValues([...keyValues, { key: "", value: "", disabled: false }]);
  };

  const handleKeyValueChange = (index, field, value) => {
    const updatedKeyValues = [...keyValues];
    updatedKeyValues[index][field] = value;
    setKeyValues(updatedKeyValues);
  };

  function downloadQr() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading QR code", error);
      });
  }

  return (
    <div className="Qrcode">
      <div className="Qrcode-container">
        <div className="Qr-header">
          <h1>QR Code Generator</h1>
        </div>
        <div className="Qr-body">
          <div className="body-text">
            <h3>Enter QR Code Content and Generate QR</h3>
          </div>
          <div className="body-btns">
            <button className="contact" onClick={handleShowInput}>
              Content
            </button>
            <button className="keyvalue" onClick={handleShowKeyValueInput}>
              Key Value Pair
            </button>
          </div>
          {showInput && (
            <div className="input-area">
              <input
                className="con-inputs"
                type="text"
                placeholder="Enter the content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button onClick={generateQr} className="gen-btn">
                Generate Code
              </button>
            </div>
          )}
          {showKeyValueInput && (
            <div className="input-area">
              {keyValues.map((pair, index) => (
                <div
                  key={index}
                  className={`key-value-pair ${
                    pair.disabled ? "disabled" : ""
                  }`}
                >
                  <div className="input-group">
                    <label htmlFor={`key-${index}`}>Key</label>
                    <input
                      id={`key-${index}`}
                      className="key-input"
                      type="text"
                      placeholder="Enter the key"
                      value={pair.key}
                      onChange={(e) =>
                        handleKeyValueChange(index, "key", e.target.value)
                      }
                      disabled={pair.disabled}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor={`value-${index}`}>Value</label>
                    <input
                      id={`value-${index}`}
                      className="value-input"
                      type="text"
                      placeholder="Enter the value"
                      value={pair.value}
                      onChange={(e) =>
                        handleKeyValueChange(index, "value", e.target.value)
                      }
                      disabled={pair.disabled}
                    />
                  </div>
                  <button onClick={handleAddKeyValue} className="add-btn">
                    +
                  </button>
                </div>
              ))}
              <button onClick={generateQr} className="gen-btn">
                Generate Code
              </button>
            </div>
          )}

          {qrCode && (
            <div className="qr-code">
              {loading && <p>Please wait...</p>}
              {img && <img src={img} alt="QR Code" className="Qr-image" />}
              <button className="download-btn" onClick={downloadQr}>
                Download
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Qrcode;

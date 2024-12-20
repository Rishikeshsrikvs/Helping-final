import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import tgall1 from "../Donate/Donateimage/don1.png";
import tgall2 from "../Donate/Donateimage/don2.png";
import tgall3 from "../Donate/Donateimage/don3.png";
import tgall4 from "../Donate/Donateimage/don4.png";
import tgall5 from "../Donate/Donateimage/don5.png";
import organdonation from "./Donateimage/organdonation.jpg";

import "./Donate.css";
import Popup from "./Popup.jsx"; // Import the Popup component
import api from "../../../../api/api.js";
import Card from "./Card.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

import card1 from "./Donateimage/card1.png";
import card2 from "./Donateimage/card2.png";
import card3 from "./Donateimage/card3.png";
import card4 from "./Donateimage/card4.png";
import card5 from "./Donateimage/card5.png";
import card6 from "./Donateimage/card6.png";
import card7 from "./Donateimage/card7.png";
import card8 from "./Donateimage/card8.png";
import card9 from "./Donateimage/homeless.jpeg";
import card10 from "./Donateimage/oldagehome.jpg";
import card11 from "./Donateimage/treeplant.jpeg";
import card12 from "./Donateimage/wildlife.jpg";
import card13 from "./Donateimage/womenempowerment.jpg";
import card14 from "./Donateimage/childvaccine.jpg";
import card15 from "./Donateimage/foodbank.jpg";
import card16 from "./Donateimage/helthcheck.jpg";
import card17 from "./Donateimage/palative.jpeg";
import card18 from "./Donateimage/aidshelp.jpg";
import card19 from "./Donateimage/autism.jpeg";
import card20 from "./Donateimage/cancer.jpg";
import card21 from "./Donateimage/child labour.jpeg";
import card22 from "./Donateimage/child mariage.jpeg";
import card23 from "./Donateimage/critical.jpeg";
import card24 from "./Donateimage/dialises.jpeg";
import card25 from "./Donateimage/poverty.jpeg";
import card26 from "./Donateimage/raredecease.jpeg";
import card27 from "./Donateimage/refugee.jpeg";
import card28 from "./Donateimage/rural.jpeg";
import card29 from "./Donateimage/transplan.jpeg";
const Donate = () => {
  const [order, setOrder] = useState({});
  const [razorpayKey, setRazorpayKey] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [selectedImage, setSelectedImage] = useState(null); // State to store the clicked image
  const [selectedText, setSelectedText] = useState(""); // Store selected donation type text
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false, // Whether animation should happen only once
    });
    // Fetch Razorpay Key from the backend
    const fetchRazorpayKey = async () => {
      try {
        // console.log("Fetching Razorpay key...");
        const response = await api.get("/piKey");
        if (response.data && response.data.key) {
          setRazorpayKey(response.data.key);
        } else {
          console.error(
            "Invalid key data received from /piKey:",
            response.data
          );
          setErrorMessage("An error occurred while fetching the payment key.");
        }
      } catch (error) {
        setErrorMessage(
          "Failed to fetch Razorpay key. Please try again later."
        );
      }
    };

    fetchRazorpayKey();
  }, []);

  const handlePay = async (amount, donationFrequency, selectedText) => {
    try {
      // console.log("Pay clicked");
      // console.log("check",amount,selectedText,donationFrequency);

      const response = await api.post("/pay", {
        donationType: selectedText, // Use the selected donation type text
        donationAmount: amount,
        conOMY: donationFrequency, // Use the selected frequency
      });

      if (response.data.order) {
        setOrder(response.data.order);

        // Initialize Razorpay only after getting a valid order and key
        const options = {
          key: razorpayKey,
          amount: response.data.order.amount * 100,
          currency: "INR",
          name: "Helping Hands",
          description: "Donation Transaction",
          order_id: response.data.order.id,
          callback_url: "https://helpinghandscharitabletrustngo.org/Donate",
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          theme: {
            color: "#0699FF",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        console.error("Invalid order data received:", response.data);
        setErrorMessage("An error occurred while creating the payment order.");
      }
    } catch (error) {
      console.error("There was an error processing the payment!", error);
      setErrorMessage(
        "There was an error processing the payment. Please try again."
      );
    }
  };

  // Function to handle image click
  const handleImageClick = (imageUrl, text) => {
    setSelectedImage(imageUrl); // Set the selected image dynamically
    setSelectedText(text); // Set the selected donation type text
    setShowPopup(true); // Show the popup
  };

  const cardData = [
    { id: "1", text: "Sponsor a Meal for child", imageUrl: card1 },
    { id: "2", text: "Sponsor a meal for homeless people", imageUrl: card2 },
    { id: "3", text: "Sponsor a Child", imageUrl: card3 },
    { id: "5", text: "Support orphanage", imageUrl: card4 },
    { id: "6", text: "Sponsor a child education", imageUrl: card5 },
    { id: "4", text: "Sponsor a Child care kit", imageUrl: card6 },
    { id: "7", text: "Support handicapped", imageUrl: card7 },
    { id: "8", text: "sponsor for Flood relief", imageUrl: card8 },
    { id: "9", text: "sponsor for homeless", imageUrl: card9 },
    { id: "10", text: "sponsor a oldage home", imageUrl: card10 },
    {
      id: "11",
      text: "sponsor for a  Tree Plantation Programs",
      imageUrl: card11,
    },
    {
      id: "12",
      text: "sponsor for Wildlife Conservation Programs",
      imageUrl: card12,
    },
    { id: "13", text: "sponsor for  Women Empowerment", imageUrl: card13 },
    {
      id: "14",
      text: "sponsor for  Child Vaccination Programs",
      imageUrl: card14,
    },
    { id: "15", text: "sponsor for  Foodbanks", imageUrl: card15 },
    { id: "16", text: "sponsor for  free health checkups", imageUrl: card16 },
    { id: "17", text: "Sponsor for  palliative care", imageUrl: card17 },
    {
      id: "18",
      text: "Sponsor for  AIDS Awareness and Support",
      imageUrl: card18,
    },
    { id: "19", text: "Sponsor for   Autism Care", imageUrl: card19 },
    { id: "20", text: "Sponsor for  Cancer Treatment", imageUrl: card20 },
    {
      id: "21",
      text: "Sponsor for Child Labor Eradication",
      imageUrl: card21,
    },
    {
      id: "22",
      text: "Sponsor for Child Marriage Prevention",
      imageUrl: card22,
    },
    {
      id: "23",
      text: "Sponsor for Critical Illness Treatment",
      imageUrl: card23,
    },
    {
      id: "24",
      text: "Sponsor for  Dialysis Treatment Support",
      imageUrl: card24,
    },
    {
      id: "25",
      text: "Sponsor for  Poverty Eradication Programs",
      imageUrl: card25,
    },
    {
      id: "26",
      text: "Sponsor for  Treatment of Rare Diseases",
      imageUrl: card26,
    },
    {
      id: "27",
      text: "Sponsor for  Refugee Relief Programs",
      imageUrl: card27,
    },
    { id: "28", text: "Sponsor for  Rural developement", imageUrl: card28 },
    {
      id: "29",
      text: "Sponsor for  Organ Transplant Support",
      imageUrl: card29,
    },
  ];

  return (
    <div className="donate">
      <div className="donate-container">
        <div className="top-gallery" data-aos="zoom-out">
          <div className="tgall">
            <img src={tgall1} alt="Donation 1" />
          </div>
          <div className="tgall tgall1">
            <img src={tgall2} alt="Donation 2" />
          </div>
          <div className="tgall">
            <img src={tgall3} alt="Donation 3" />
          </div>
          <div className="tgall">
            <img src={tgall4} alt="Donation 4" />
          </div>
          <div className="tgall">
            <img src={tgall5} alt="Donation 5" />
          </div>
        </div>
        <div className="organdonationcon">
          <h1>Organ Donation : Gift of Life</h1>
          <div className="ordnsplit">
            <div className="ordnleft">
              <p>
                Your decision to donate organs can give someone a second chance
                at life. Join us in spreading awareness and supporting this
                noble cause.
              </p>
              <button onClick={() => navigate("/organ_donate")}>
                Reigister Now
              </button>
            </div>
            <div className="ordnright">
              <img src={organdonation} alt="" />
            </div>
          </div>
        </div>
        <div className="donate-text">
          <h2 data-aos="zoom-in">Support the Journey of Those in Need</h2>
          <p data-aos="fade-up">
            Your donation will provide essential support for handicapped
            individuals, homeless people, children, and those affected by
            disaster situations. Your generosity will help ensure their access
            to basic needs, such as shelter, healthcare, and nutrition, leading
            them towards a life of dignity and hope for a brighter future.
          </p>
          {/* <button className="donate-btn" onClick={() => handlePay(25000, 'ONCE')} disabled={!razorpayKey}>Donate Now</button> */}
          {/* {errorMessage && <div className="error-message">{errorMessage}</div>} */}
        </div>
        <h1 className="selectfield" data-aos="zoom-out">
          Select the particular field to donate to
        </h1>
        <div className="cardgrid">
          <div className="card-grid">
            {cardData.map((card) => (
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                text={card.text}
                onClick={handleImageClick} // Correctly pass the image URL and text of the clicked card
              />
            ))}
          </div>
        </div>
      </div>
      {/* Render Popup only if showPopup is true */}
      {showPopup && (
        <Popup
          image={selectedImage}
          onClose={() => setShowPopup(false)} // Close popup on button click
          handlePay={handlePay}
          selectedText={selectedText}
          // Pass handlePay function to Popup
        />
      )}
    </div>
  );
};

export default Donate;

import React, { useState } from "react";

import "./Home.css";
import Footer from "./Footer";
import { Header } from "./Header";
import { Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirection
import AboutUs from "./../suresh/components/Aboutpage/AboutUs.jsx";
import Land from "./Land";
import Contact from "../suresh/components/Contact/Contact.jsx";
import Gallery from "./../suresh/components/Gallery/Gallery.jsx";
import Ourprogrms from "./../suresh/components/Ourprogram/Ourprogram.jsx";
import Donate from "./../suresh/components/Donate/Donate.jsx";
import Donatenow from "./../suresh/components/DonateNow/DonateNow.jsx";
import Involve from "./Involve.jsx";
import Blooddonate from "./Blooddonate.jsx";
import Privacy from "./Privacy.jsx";
import Terms from "./Terms.jsx";

const Home = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const closeImageOverlay = () => {
    setIsImageVisible(false);
  };

  return (
    <div>
      <Header />

      <div className="homemain">
        <Routes>
          {/* Default route for the landing page */}
          <Route path="/" element={<Land />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/media" element={<Gallery />} />
          <Route path="/connect" element={<Contact />} />
          <Route path="/ourprogram" element={<Ourprogrms />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donatenow" element={<Donatenow />} />
          <Route path="/getinvolved" element={<Involve />} />
          <Route path="/blooddonate" element={<Blooddonate />} />
          <Route path="/privacy_policy" element={<Privacy />} />
          <Route path="/terms&conditions" element={<Terms />} />
          {/* Catch-all route that redirects to Land component */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

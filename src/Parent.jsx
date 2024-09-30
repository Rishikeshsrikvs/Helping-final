import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Admin from './Admin';
import Admin from "./pages/adminpages/Admin";
import Home from "./pages/homepages/Home";

const Parent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/admin/SHRA/*" element={<Admin />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Parent;

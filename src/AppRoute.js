import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DashBoard from "./Pages/DashBoard/DashBoard";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoute;

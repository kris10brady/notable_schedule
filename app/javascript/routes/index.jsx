import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Physicians from "../components/Physicians";
import Physician from "../components/Physician"

export default (
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route exact path="/physicians" element={<Physicians />} />
      <Route exact path="/physician/:id" element={<Physician />} />
    </Routes>
  </Router>
);
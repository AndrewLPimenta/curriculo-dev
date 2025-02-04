import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Information from "./pages/Information";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />ß
        <Route path="/information" element={<Information />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
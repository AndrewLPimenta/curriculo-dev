import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Information from "./pages/Information";
import Portfolio from "./pages/Portfolio";
import Network from "./pages/Network";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />ß
        <Route path="/information" element={<Information />} />
        <Route path="/portfolio" element={<Portfolio />} />
        < Route path="/network" element={<Network />} />
      </Routes>
    </Router>
  );
}

export default App;
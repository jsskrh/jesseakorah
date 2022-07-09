import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

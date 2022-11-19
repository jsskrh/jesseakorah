import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Layout>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/art" element={<Home />} />
            <Route path="/info" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;

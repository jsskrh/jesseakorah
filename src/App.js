import React from "react";
import "./App.css";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Art from "./pages/Art";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Layout from "./Layout/Layout";

function App() {
  let location = useLocation();
  const page =
    location.pathname.slice(1) === "" ? "home" : location.pathname.slice(1);

  return (
    <div className="app">
      <div className="main">
        <Layout page={page}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="art" element={<Art />} />
            <Route path="info" element={<Info />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;

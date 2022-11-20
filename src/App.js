import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import {
  Routes,
  Route,
  useParams,
  useLocation,
  Router,
} from "react-router-dom";
import ASScroll from "@ashthornton/asscroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Art from "./pages/Art";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Layout from "./Layout/Layout";

function App() {
  const projectsRef = useRef();
  const aboutRef = useRef();

  let location = useLocation();
  const page =
    location.pathname.slice(1) === "" ? "home" : location.pathname.slice(1);

  const scrollHandler = () => {
    const asscroll = new ASScroll();
    asscroll.enable({ newScrollElements: projectsRef.current });
  };

  useLayoutEffect(() => {
    let asscroll = new ASScroll({ disableRaf: true });

    if (page === "projects") {
      asscroll.enable({
        newScrollElements: projectsRef.current,
        reset: true,
      });
    } else if (page === "about") {
      asscroll.enable({
        newScrollElements: aboutRef.current,
        reset: true,
      });
    }

    let frame;
    requestAnimationFrame(onRaf);
    function onRaf() {
      asscroll.update();
      frame = requestAnimationFrame(onRaf);
    }

    return () => {
      asscroll.disable();
      cancelAnimationFrame(frame);
      asscroll = {};
    };
  }, [page]);

  return (
    <div className="app" asscroll-container="true">
      <div className="main">
        <Layout page={page}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="about" element={<About ref={aboutRef} />} />
            <Route path="projects" element={<Projects ref={projectsRef} />} />
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

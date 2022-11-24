import React, { useEffect, useRef, useState } from "react";
import "./styles/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ASScroll from "@ashthornton/asscroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Art from "./pages/Art";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Layout from "./Layout/Layout";
import gsap from "gsap";

function App() {
  const appRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const emailRef = useRef();

  const [currentPos, setCurrentPos] = useState(0);

  let location = useLocation();
  const page =
    location.pathname.slice(1) === "" ? "home" : location.pathname.slice(1);

  useEffect(() => {
    let asscroll = new ASScroll({
      disableRaf: true,
      customScrollbar: false,
      touchScrollType: "scrollTop",
    });

    if (appRef.current.querySelector(".asscroll")) {
      asscroll.enable({
        newScrollElements: appRef.current.querySelector(".asscroll"),
        // reset: true,
      });
    }

    const scrollSetter = () => {
      return setCurrentPos(asscroll.currentPos);
    };

    gsap.ticker.add(asscroll.update);
    gsap.ticker.add(scrollSetter);

    return () => {
      asscroll.disable();
      gsap.ticker.remove(asscroll.update);
      gsap.ticker.remove(scrollSetter);
      asscroll = {};
    };
  }, [page]);

  const getContainer = () => {
    return appRef;
  };

  return (
    <div className="app" asscroll-container="true" ref={appRef}>
      <div className="main">
        <Layout page={page} emailRef={emailRef}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route
              path="about"
              element={
                <About
                  ref={aboutRef}
                  currentPos={currentPos}
                  setCurrentPos={setCurrentPos}
                  getContainer={getContainer}
                />
              }
            />
            <Route path="projects" element={<Projects ref={projectsRef} />} />
            <Route path="art" element={<Art />} />
            <Route path="info" element={<Info />} />
            <Route path="contact" element={<Contact ref={emailRef} />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;

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
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  const appRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();

  const [currentPos, setCurrentPos] = useState(0);

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
        // reset: true,
      });
    } else if (page === "about") {
      asscroll.enable({
        newScrollElements: aboutRef.current,
        // reset: true,
      });
    }

    // newScrollElements: appRef.current.querySelectorAll(".asscroll"),

    console.log(appRef.current.querySelectorAll(".asscroll"));

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
        <Layout page={page}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route
              path="about"
              element={
                <About
                  ref={aboutRef}
                  currentPos={currentPos}
                  setCurrentPos={setCurrentPos}
                  getContainer={getContainer} /* containerElement={
                    appRef.current
                  } */
                />
              }
            />
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

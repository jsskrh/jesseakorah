import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Canvas from "./Canvas";
import Cursor from "./Cursor";
import "./Home.css";
import musicLibrary from "./musicLibrary";
import _ from "lodash";
import Projects from "./ProjectsPage";
import Info from "./InfoPage";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";

function Home() {
  const [page, setPage] = useState("home");
  const [pageScroll, setPageScroll] = useState(0);
  const [backgroundHeight, setBackgroundHeight] = useState(0);
  const [backgroundWidth, setBackgroundWidth] = useState(0);
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [color, setColor] = useState(false);

  const backgroundRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    setBackgroundHeight(backgroundRef?.current.clientHeight);
    setBackgroundWidth(backgroundRef?.current.clientWidth);
    console.log(backgroundHeight);
  }, [backgroundHeight, page]);

  useEffect(() => {
    const handleResize = () => {
      if (
        backgroundRef?.current.clientHeight !== backgroundHeight ||
        backgroundRef?.current.clientWidth !== backgroundWidth
      ) {
        setBackgroundHeight(backgroundRef?.current.clientHeight);
        setBackgroundWidth(backgroundRef?.current.clientWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const projectsRef = useRef();

  useEffect(() => {
    const projectsCont = projectsRef.current;
    const maxScroll = projectsCont.clientHeight * 0.3895;
    const pageHeight = pageRef.current.clientHeight;
    const projectsHeight = projectsCont.clientHeight;

    window.addEventListener("wheel", (event) => {
      if (projectsHeight > pageHeight) {
        if (
          pageScroll >= -maxScroll &&
          pageScroll <= 0 &&
          page === "projects"
        ) {
          setPageScroll(pageScroll - event.deltaY);
          projectsCont.style.transform = `translate3d(0, ${pageScroll}px, 0)`;
        }
      }
    });
  }, [page, pageScroll]);

  const handlePage = (page) => {
    setPage(page);
  };

  const emailRef = useRef(null);
  const email = emailRef?.current;

  useEffect(() => {
    if (page === "contact") {
      const addEventListeners = () => {
        email.addEventListener("mouseenter", mEnter);
        email.addEventListener("mouseleave", mLeave);
      };

      const removeEventListeners = () => {
        email.removeEventListener("mouseenter", mEnter);
        email.removeEventListener("mouseleave", mLeave);
      };

      const mLeave = () => {
        setShow(false);
        setCopied(false);
      };

      const mEnter = () => {
        setShow(true);
      };

      addEventListeners();
      return () => removeEventListeners();
    }
  }, [page]);

  //clipboard
  const copyToClipboard = (text) => {
    const ta = document.createElement("textarea");
    ta.innerText = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  };

  // sort decending
  const mostPlayed = [...musicLibrary].sort((a, b) => b.Plays - a.Plays);
  const mostPlayed10 = mostPlayed.slice(0, 10);

  //group by artist
  const artists = _.groupBy(musicLibrary, "Artist");
  console.log(Object.values(artists));

  return (
    <div className={color ? "page light" : "page dark"}>
      <LandingPage />
      <Cursor show={show} page={page} copied={copied} email={email} />
      <div className="transparent-boxes">
        <div className="box box-top"></div>
        <div className="box box-right"></div>
        <div className="box box-left">
          <div className="toggle-color">
            <div
              className="color-setter"
              onClick={() => {
                setColor(true);
              }}
            >
              <span>LIGHT</span>
              <div className={color ? "checkbox checked" : "checkbox"}></div>
            </div>
            <div
              className="color-setter dark"
              onClick={() => {
                setColor(false);
              }}
            >
              <span>DARK</span>
              <div className={color ? "checkbox" : "checkbox checked"}></div>
            </div>
          </div>
        </div>
        <div className="box box-bottom"></div>
      </div>
      <div className="page-container" ref={pageRef}>
        <div className="background" ref={backgroundRef}>
          <Canvas
            height={backgroundHeight}
            width={backgroundWidth}
            color={color}
          />
        </div>
        <div className="page-inner">
          <div className="content">
            <div className="header-container">
              <div className="header">
                <h1 className="title">Jesse K. Akorah</h1>
                <p className="label">Full Stack Developer</p>
              </div>
              <div className="nav">
                <ul>
                  <li
                    className={page === "home" ? "nav-item active" : "nav-item"}
                  >
                    <span className="dot">●</span>
                    <a href="#" onClick={() => handlePage("home")}>
                      Home
                    </a>
                  </li>
                  <li
                    className={
                      page === "projects" ? "nav-item active" : "nav-item"
                    }
                  >
                    <span className="dot">●</span>
                    <a href="#" onClick={() => handlePage("projects")}>
                      Projects
                    </a>
                  </li>
                  <li
                    className={page === "art" ? "nav-item active" : "nav-item"}
                  >
                    <span className="dot">●</span>
                    <a href="#" onClick={() => handlePage("art")}>
                      Art
                    </a>
                  </li>
                  <li
                    className={
                      page === "about" ? "nav-item active" : "nav-item"
                    }
                  >
                    <span className="dot">●</span>
                    <a href="#" onClick={() => handlePage("about")}>
                      About
                    </a>
                  </li>
                  <li
                    className={page === "info" ? "nav-item active" : "nav-item"}
                  >
                    <span className="dot">●</span>
                    <a href="#" onClick={() => handlePage("info")}>
                      Info
                    </a>
                  </li>
                  <li
                    className={
                      page === "contact" ? "nav-item active" : "nav-item"
                    }
                  >
                    <span className="dot">●</span>
                    <a href="#" onClick={() => handlePage("contact")}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-container">
              <div
                className={
                  page === "home"
                    ? "home page-content visible-page"
                    : "home page-content"
                }
              >
                <HomePage />
              </div>
              <div
                className={
                  page === "projects"
                    ? "projects page-content visible-page"
                    : "projects page-content"
                }
                ref={projectsRef}
              >
                <Projects />
              </div>
              <div
                className={
                  page === "info"
                    ? "info page-content visible-page"
                    : "info page-content"
                }
              >
                <Info />
              </div>
              <div
                className={
                  page === "art"
                    ? "art page-content visible-page"
                    : "art page-content"
                }
              >
                <div className="text-container">Coming Soon</div>
              </div>
              <div
                className={
                  page === "about"
                    ? "about page-content visible-page"
                    : "about page-content"
                }
              >
                <div className="music">
                  {mostPlayed10.map((song, index) => {
                    return (
                      <div className="song-container">
                        <div className="song">
                          <div className="left">
                            <span className="song-index">{index + 1}.</span>
                            <div className="album-art"></div>
                            <div className="song-info">
                              <span className="song-title">{song.Name}</span>
                              <span className="artist-name">{song.Artist}</span>
                            </div>
                          </div>
                          <div className="right">
                            <span className="plays-count">
                              {song.Plays} plays
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className={
                  page === "contact"
                    ? "contact page-content visible-page"
                    : "contact page-content"
                }
              >
                <div className="email-container">
                  <h3 className="top">Send me a message</h3>
                  <span
                    className="bottom"
                    onClick={() => copyToClipboard("jesseakorah@gmail.com")}
                    ref={emailRef}
                  >
                    jesseakorah@gmail.com
                  </span>
                  <div className="underline"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Canvas from "./Canvas";
import Cursor from "./Cursor";
import "./Home.css";

function Home() {
  const [page, setPage] = useState("home");
  const [pageScroll, setPageScroll] = useState(0);
  const [backgroundHeight, setBackgroundHeight] = useState(0);
  const [backgroundWidth, setBackgroundWidth] = useState(0);
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  const backgroundRef = useRef(null);

  useEffect(() => {
    setBackgroundHeight(backgroundRef?.current.clientHeight);
    setBackgroundWidth(backgroundRef?.current.clientWidth);
  }, []);

  const projectsRef = useRef();

  useEffect(() => {
    const projectsCont = projectsRef.current;

    window.addEventListener("wheel", (event) => {
      if (pageScroll >= -720 && pageScroll <= 0 && page === "projects") {
        /* console.log(pageScroll); */
        setPageScroll(pageScroll - event.deltaY);
        projectsCont.style.transform = `translate3d(0, ${pageScroll}px, 0)`;
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

  const copyToClipboard = (text) => {
    const ta = document.createElement("textarea");
    ta.innerText = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  };

  return (
    <div className="page">
      <Cursor show={show} page={page} copied={copied} email={email} />
      <div className="transparent-boxes">
        <div className="box box-top"></div>
        <div className="box box-right"></div>
        <div className="box box-left"></div>
        <div className="box box-bottom"></div>
      </div>
      <div className="page-container">
        <div className="background" ref={backgroundRef}>
          <Canvas height={backgroundHeight} width={backgroundWidth} />
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
                <p className="content-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div
                className={
                  page === "projects"
                    ? "projects page-content visible-page"
                    : "projects page-content"
                }
                ref={projectsRef}
              >
                <div className="project-section">
                  <h2 className="section-title">Design & Develop</h2>
                  <ul className="projects-list">
                    <li>
                      <a
                        href="https://amazon-clone-160422.herokuapp.com"
                        className="project-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="project-info">2022 / Personal</span>
                        <span className="project-title">Amazon clone</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://jsskrh.github.io/museum-of-candy/"
                        className="project-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="project-info">2020 / Personal</span>
                        <span className="project-title">Museum of Candy</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://jsskrh.github.io/color-matching-game/"
                        className="project-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="project-info">2020 / Personal</span>
                        <span className="project-title">
                          Color Matching Game
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://jsskrh.github.io/to-do-list/"
                        className="project-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="project-info">2020 / Personal</span>
                        <span className="project-title">Todo List</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="project-section second">
                  <h2 className="section-title">Develop</h2>
                  <ul className="projects-list">
                    <li>
                      <a href="#" className="project-item">
                        <span className="project-info">2022 / Personal</span>
                        <span className="project-title">Lorem ipsum dolor</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="project-item">
                        <span className="project-info">2022 / Personal</span>
                        <span className="project-title">Lorem ipsum dolor</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="project-item">
                        <span className="project-info">2022 / Personal</span>
                        <span className="project-title">Lorem ipsum dolor</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="project-item">
                        <span className="project-info">2022 / Personal</span>
                        <span className="project-title">Lorem ipsum dolor</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="project-item">
                        <span className="project-info">2022 / Personal</span>
                        <span className="project-title">Lorem ipsum dolor</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="project-item">
                        <span className="project-info">2022 / Personal</span>
                        <span className="project-title">Lorem ipsum dolor</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={
                  page === "info"
                    ? "info page-content visible-page"
                    : "info page-content"
                }
              >
                <div className="top">
                  <a
                    href="https://github.com/jsskrh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github ↗
                  </a>
                </div>
                <div className="middle">
                  <p>
                    <a
                      href="https://twitter.com/kasiemobi__"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter ↗
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.instagram.com/kasiemobi__/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram ↗
                    </a>
                  </p>
                </div>
                <div className="bottom">
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
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
                <div className="text-container">Coming Soon</div>
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

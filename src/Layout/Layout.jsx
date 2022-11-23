import React, { useEffect, useRef, useState } from "react";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Scene from "./Background/Scene";
import "../styles/Layout.css";
import Nav from "./Nav";

const Layout = ({ children, page, emailRef }) => {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [color, setColor] = useState(false);

  const backgroundRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    if (page === "contact") {
      const email = emailRef?.current;
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
  }, [page, emailRef]);

  const colorSetter = () => {
    return color ? 0x0d0d0d : 0xe6e6e6;
  };

  return (
    <div className={color ? "page light" : "page dark"}>
      <LandingPage />
      {page === "contact" && (
        <Cursor show={show} page={page} copied={copied} emailRef={emailRef} />
      )}
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
          <Scene color={colorSetter()} />
        </div>

        <div className="page-inner">
          <div className="content">
            <div className="header-container">
              <Header />
              <Nav page={page} />
            </div>
            <div className="content-container">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

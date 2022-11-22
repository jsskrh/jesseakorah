import React, { useRef, useState } from "react";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import LandingPage from "../LandingPage";
import Scene from "./Background/Scene";
import "../styles/Layout.css";
import Nav from "./Nav";

const Layout = ({ children, page }) => {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [color, setColor] = useState(false);

  const backgroundRef = useRef(null);
  const pageRef = useRef(null);

  // const emailRef = useRef(null);
  // const email = emailRef?.current;

  const colorSetter = () => {
    return color ? 0x0d0d0d : 0xe6e6e6;
  };

  return (
    <div className={color ? "page light" : "page dark"}>
      <LandingPage />
      {/* <Cursor show={show} page={page} copied={copied} email={email} /> */}
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

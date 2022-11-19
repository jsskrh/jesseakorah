import React, { useEffect, useState } from "react";

function LandingPage() {
  const [landing, setLanding] = useState(true);
  const [devName, setDevName] = useState(true);
  const [description, setDescription] = useState(true);
  const [hideLanding, setHideLanding] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLanding(false);
  //   }, 1500);
  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDevName(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDescription(false);
  //   }, 1100);
  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setHideLanding(true);
  //   }, 2300);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className /* {
        landing && !hideLanding
          ? "landing-page show"
          : !hideLanding
          ? "landing-page"
          : "landing-page none"
        } */="landing-page none">
      <div className="landing-text">
        <h1 className={devName ? "dev-name show" : "dev-name"}>
          Jesse K. Akorah
        </h1>
        <h1 className={description ? "description show" : "description"}>
          Portfolio
        </h1>
      </div>
    </div>
  );
}

export default LandingPage;

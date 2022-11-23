import React, { useEffect, useState } from "react";
import "../styles/Home.css";

function Home() {
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     ScrollTrigger.create({
  //       trigger: ".developer",
  //       start: "top top",
  //       end: "bottom bottom",
  //       pin: ".left-section",
  //     });
  //   }, aboutRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="home-page">
      <div className="page-content">
        <p className="content-text">
          Raised in Lagos, Nigeria, I'm a creative fullstack developer, with
          keen interest in exploring the artistic possibilies of web
          development. I experiment and use unique designs in the building of
          products and the creation of immersive web experiences. Thus I am
          constantly learning and testing the limits of web element manipulation
          in the pursuit of new artistic expressions.
        </p>
      </div>
    </div>
  );
}

export default Home;

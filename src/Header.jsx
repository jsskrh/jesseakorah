import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".header", { duration: 2, y: -30 });
    }, headerRef);

    // return () => ctx.revert();
  }, []);
  return (
    <div className="header" ref={headerRef}>
      <h1 className="title">Jesse K. Akorah</h1>
      <p className="label">Software Engineer</p>
    </div>
  );
};

export default Header;

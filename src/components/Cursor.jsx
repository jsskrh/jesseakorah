import React, { useEffect, useRef, useState } from "react";

function Cursor({ show, page, copied, emailRef }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);
  const [text, setText] = useState(false);

  const cursorRef = useRef(null);

  useEffect(() => {
    const email = emailRef.current;
    const addEventListeners = () => {
      email.addEventListener("mousemove", mMove);
      email.addEventListener("mousedown", mDown);
      email.addEventListener("mouseup", mUp);
      email.addEventListener("mouseleave", mLeave);
    };
    const removeEventListeners = () => {
      email.removeEventListener("mousemove", mMove);
      email.removeEventListener("mousedown", mDown);
      email.removeEventListener("mouseup", mUp);
      email.removeEventListener("mouseleave", mLeave);
    };
    const mDown = () => {
      setClick(true);
      setText(true);
    };
    const mUp = () => {
      setClick(false);
    };
    const mLeave = () => {
      setText(false);
    };
    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };
    addEventListeners();
    return () => removeEventListeners();
  }, [page, copied, emailRef]);

  return (
    <div
      className={"cursor " + (show ? "show " : "") + (click ? "click " : "")}
      ref={cursorRef}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <span className={"pre-click " + (text ? "" : "show")}>Click to</span>
      <span className={"pre-click " + (text ? "" : "show")}>copy</span>
      <span className={"post-click " + (text ? "show" : "")}>Done!</span>
    </div>
  );
}

export default Cursor;

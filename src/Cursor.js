import React, { useEffect, useRef, useState } from "react";

function Cursor({ show, page, copied, email }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);
  const [text, setText] = useState(false);

  const cursorRef = useRef(null);

  useEffect(() => {
    if (page === "contact") {
      const addEventListeners = () => {
        document.addEventListener("mousemove", mMove);
        document.addEventListener("mousedown", mDown);
        document.addEventListener("mouseup", mUp);
        email.addEventListener("mouseleave", mLeave);
      };

      const removeEventListeners = () => {
        document.removeEventListener("mousemove", mMove);
        document.removeEventListener("mousedown", mDown);
        document.removeEventListener("mouseup", mUp);
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
    }
  }, [page, copied]);

  /* useEffect(() => {
    const cursor = cursorRef?.current;
    cursor.offsetLeft = position.x;
    cursor.offsetTop = position.y;
  }, [position]); */

  return (
    <div
      className={"cursor " + (show ? "show " : " ") + (click ? "click " : " ")}
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

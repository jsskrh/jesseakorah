import React, { useRef } from "react";
import "../styles/Contact.css";

const Contact = React.forwardRef((props, ref) => {
  const copyToClipboard = (text) => {
    const ta = document.createElement("textarea");
    ta.innerText = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  };

  return (
    <div className="contact-page">
      <div className="page-content">
        <div className="email-container">
          <h3 className="top">Send me a message</h3>
          <span
            className="bottom"
            onClick={() => copyToClipboard("jesseakorah@gmail.com")}
            ref={ref}
          >
            jesseakorah@gmail.com
          </span>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
});

export default Contact;

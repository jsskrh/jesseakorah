import React from "react";
import "../styles/Info.css";

const Info = () => {
  return (
    <div className="info-page">
      <div className="page-content">
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
          <p>The things we can't</p>
          <p>obtain are the most</p>
          <p>beautiful ones</p>
        </div>
      </div>
    </div>
  );
};

export default Info;

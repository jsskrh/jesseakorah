import React from "react";

function Projects() {
  return (
    <div className="projects-page">
      <div className="project-section">
        <h2 className="section-title">Develop</h2>
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
              <span className="project-title">Color Matching Game</span>
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
      {/* <div className="project-section second">
        <h2 className="section-title">Design & Develop</h2>
        <ul className="projects-list">
        </ul>
      </div> */}
    </div>
  );
}

export default Projects;

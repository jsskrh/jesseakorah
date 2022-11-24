import React from "react";
import ListContainer from "../components/ListContainer";
import data from "../data";
import "../styles/Projects.css";

const projectsObj = data.projectsList;

const Projects = React.forwardRef((props, ref) => {
  return (
    <div className="projects-page">
      <div className="page-content asscroll" ref={ref}>
        <div className="project-section">
          <h2 className="list-title">Develop</h2>
          <ListContainer listArr={projectsObj.develop} projects />
        </div>

        <div className="project-section second">
          <h2 className="list-title">Playground</h2>
          <ListContainer listArr={projectsObj.playground} projects />
        </div>
      </div>
    </div>
  );
});

export default Projects;

import React from "react";
import ListContainer from "./ListContainer";

function Projects() {
  const projectsArr = [
    {
      title: "Amazon clone",
      year: "2022",
      type: "Personal",
      link: "https://amazon-clone-160422.herokuapp.com",
      image: "/amazonClone.png",
    },
    {
      title: "Museum of Candy",
      year: "2020",
      type: "Personal",
      link: "https://jsskrh.github.io/museum-of-candy/",
      image: "/museumOfCandy.png",
    },
    {
      title: "Color Matching Game",
      year: "2020",
      type: "Personal",
      link: "https://jsskrh.github.io/color-matching-game/",
      image: "/colorMatchingGame.png",
    },
    {
      title: "Todo List",
      year: "2020",
      type: "Personal",
      link: "https://jsskrh.github.io/to-do-list/",
      image: "/todoList.png",
    },
  ];
  return (
    <div className="projects-page">
      <div className="project-section">
        <h2 className="list-title">Develop</h2>
        <ListContainer listArr={projectsArr} projects />
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

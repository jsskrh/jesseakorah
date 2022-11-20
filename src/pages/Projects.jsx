import React, { useEffect } from "react";
import ListContainer from "../components/ListContainer";
import "../styles/Projects.css";

const projectsArr = [
  {
    title: "Pokemon game",
    year: "2022",
    type: "Personal",
    link: "https://pokemon-game-171122.netlify.app",
    image: "/images/PokemonGame.png",
    disabled: false,
  },
  {
    title: "Luxury store app",
    year: "2022",
    type: "Personal",
    link: "#",
    image: "/images/LuxuryStoreApp.png",
    disabled: true,
  },
  {
    title: "Lendsqr app",
    year: "2022",
    type: "Personal",
    link: "https://github.com/jsskrh/lendsqr-app",
    image: "/images/LendsqrApp.png",
    disabled: false,
  },
  {
    title: "OpenSea clone",
    year: "2022",
    type: "Personal",
    link: "#",
    image: "/images/OpenSeaClone.png",
    disabled: false,
  },
  {
    title: "Amazon clone",
    year: "2022",
    type: "Personal",
    link: "https://amazon-clone-160422.herokuapp.com",
    image: "/images/AmazonClone.png",
    disabled: false,
  },
  {
    title: "YelpCamp",
    year: "2020",
    type: "Personal",
    link: "https://yelpcamp-app-260820.herokuapp.com",
    image: "/images/YelpCamp.png",
    disabled: false,
  },
  {
    title: "Patatap clone",
    year: "2020",
    type: "Personal",
    link: "https://patatap-clone-jsskrh.netlify.app",
    image: "/images/PatatapClone.png",
    disabled: false,
  },
  {
    title: "Museum of Candy",
    year: "2020",
    type: "Personal",
    link: "https://jsskrh.github.io/museum-of-candy/",
    image: "/images/MuseumOfCandy.png",
    disabled: false,
  },
  {
    title: "Color Matching Game",
    year: "2020",
    type: "Personal",
    link: "https://jsskrh.github.io/color-matching-game/",
    image: "/images/ColorMatchingGame.png",
    disabled: false,
  },
  {
    title: "Todo List",
    year: "2020",
    type: "Personal",
    link: "https://jsskrh.github.io/to-do-list/",
    image: "/images/TodoList.png",
    disabled: false,
  },
];

const Projects = React.forwardRef((props, ref) => {
  return (
    <div className="projects-page">
      <div className="page-content" ref={ref}>
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
    </div>
  );
});

export default Projects;

import musicLibrary from "./musicLibrary";
import _ from "lodash";

const artists = Object.values(_.groupBy(musicLibrary, "Artist"));
const artistHours = artists.map((artist) => {
  const artistName = artist[0].Artist;
  var listeningTime = 0;
  artist.map((song) => {
    var songTime = song.Time * song.Plays;
    return (listeningTime += songTime);
  });
  return { name: artistName, time: listeningTime };
});
const mostListened = [...artistHours].sort((a, b) => b.time - a.time);
const mostListened10 = mostListened.slice(0, 10);

const data = {
  devList: [
    { title: "JavaScript", info: "Language" },
    { title: "TypeScript", info: "Language" },
    { title: "Node.js", info: "Framework" },
    { title: "ReactJS", info: "Framework" },
    { title: "Next.js", info: "Framework" },
    { title: "Vue.js", info: "Framework" },
    { title: "Three.js", info: "Library" },
    { title: "Redux", info: "Library" },
    { title: "Express.js", info: "Framework" },
    { title: "mongoDB", info: "Database" },
    { title: "Mongoose", info: "Library" },
    { title: "Firebase", info: "Database" },
    { title: "PostgreSQL", info: "Database" },
    { title: "jQuery", info: "Library" },
    { title: "TailwindCSS", info: "Framework" },
    { title: "Bootstrap", info: "Framework" },
    { title: "Semantic UI", info: "Framework" },
    { title: "C#", info: "Language" },
    { title: "Blazor", info: "Framework" },
    { title: "Wordpress", info: "Content Management System" },
  ],
  musicList: mostListened10,
  projectsList: {
    develop: [
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
        title: "Museum of Candy",
        year: "2020",
        type: "Personal",
        link: "https://jsskrh.github.io/museum-of-candy/",
        image: "/images/MuseumOfCandy.png",
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
    ],

    playground: [
      {
        title: "Floating Island Portal",
        year: "2022",
        type: "Personal",
        link: "https://floating-island-portal.netlify.app/",
        image: "/images/FloatingIslandPortal.png",
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
        title: "Color Matching Game",
        year: "2020",
        type: "Personal",
        link: "https://jsskrh.github.io/color-matching-game/",
        image: "/images/ColorMatchingGame.png",
        disabled: false,
      },
    ],
  },
};

export default data;

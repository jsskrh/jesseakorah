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
};

export default data;

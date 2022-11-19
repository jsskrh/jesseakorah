import React from "react";
import musicLibrary from "../musicLibrary";
import _ from "lodash";
import ListContainer from "../components/ListContainer";
import "../styles/About.css";

const devArr = [
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
];

const About = () => {
  // sort decending
  /* const mostPlayed = [...musicLibrary].sort((a, b) => b.Plays - a.Plays); */

  //group by artist
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

  return (
    <div className="about-page">
      <div className="page-content">
        <div className="about-category developer">
          <h1 className="list-title">Languages & Technologies</h1>
          <div className="category-content">
            <div className="section-left">
              <h3 className="left-title">DEVELOPMENT</h3>
              <p className="left-text">
                I am a fullstack developer who primarily uses the MERN stack,
                but also knows how to use other technologies. Feel free to reach
                out, I'd love to work together.
              </p>
            </div>
            <ListContainer listArr={devArr} row={true} />
          </div>
        </div>
        <div className="about-category music">
          <h1 className="list-title">Music</h1>
          <div className="category-content">
            <div className="section-left">
              <h3 className="left-title">ARTISTS</h3>
              <p className="left-text">
                I enjoy music and I enjoy discovering music more. I listen to a
                broad range of genres, mostly rock, symphonic metal, rap and
                indie. Here's a list of what seems to be my favourite artists
                according to my Apple Music listening time through the years.
              </p>
            </div>
            <ListContainer listArr={mostListened10} music />
          </div>
        </div>
        <div className="about-category books">
          <h1 className="list-title">Books</h1>
          <div className="category-content">
            <div className="section-left">
              <h3 className="left-title">BOOKS</h3>
              <p className="left-text">
                Why experince only one world, when you can experince an infinite
                number. I love reading books, mostly fiction. An escape from
                reality. This is a list of all the books I've read so far this
                year.
              </p>
            </div>
            <div className="most-listened-songs section-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../styles/Home.css";
import musicLibrary from "../musicLibrary";
import _ from "lodash";
import LandingPage from "../LandingPage";
import ListContainer from "../components/ListContainer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Home() {
  // const pageRef = useRef();
  const [page, setPage] = useState("home");
  // const [pageScroll, setPageScroll] = useState(0);
  /* const [scrollVelocity, setScrollVelocity] = useState(0); */
  const [backgroundHeight, setBackgroundHeight] = useState(0);
  const [backgroundWidth, setBackgroundWidth] = useState(0);
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [color, setColor] = useState(false);

  const backgroundRef = useRef(null);
  const pageRef = useRef(null);

  const emailRef = useRef(null);
  const email = emailRef?.current;

  useEffect(() => {
    if (page === "contact") {
      const addEventListeners = () => {
        email.addEventListener("mouseenter", mEnter);
        email.addEventListener("mouseleave", mLeave);
      };

      const removeEventListeners = () => {
        email.removeEventListener("mouseenter", mEnter);
        email.removeEventListener("mouseleave", mLeave);
      };

      const mLeave = () => {
        setShow(false);
        setCopied(false);
      };

      const mEnter = () => {
        setShow(true);
      };

      addEventListeners();
      return () => removeEventListeners();
    }
  }, [page, email]);

  //clipboard

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

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     ScrollTrigger.create({
  //       trigger: ".developer",
  //       start: "top top",
  //       end: "bottom bottom",
  //       pin: ".left-section",
  //     });
  //   }, aboutRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="home-page">
      <div className="page-content">
        <p className="content-text">
          Raised in Lagos, Nigeria, I'm a creative fullstack developer, with
          keen interest in exploring the artistic possibilies of web
          development. I experiment and use unique designs in the building of
          products and the creation of immersive web experiences. Thus I am
          constantly learning and testing the limits of web element manipulation
          in the pursuit of new artistic expressions.
        </p>
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useRef, useState } from "react";
import Scene from "./Scene";
import Cursor from "./Cursor";
import "./Home.css";
import musicLibrary from "./musicLibrary";
import _ from "lodash";
import Projects from "./ProjectsPage";
import Info from "./InfoPage";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import ListContainer from "./ListContainer";

function Home() {
  const [page, setPage] = useState("home");
  const [pageScroll, setPageScroll] = useState(0);
  /* const [scrollVelocity, setScrollVelocity] = useState(0); */
  const [backgroundHeight, setBackgroundHeight] = useState(0);
  const [backgroundWidth, setBackgroundWidth] = useState(0);
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [color, setColor] = useState(false);

  const backgroundRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    setBackgroundHeight(backgroundRef?.current.clientHeight);
    setBackgroundWidth(backgroundRef?.current.clientWidth);
    console.log(backgroundHeight);
  }, [backgroundHeight, page]);

  useEffect(() => {
    const handleResize = () => {
      if (
        backgroundRef?.current.clientHeight !== backgroundHeight ||
        backgroundRef?.current.clientWidth !== backgroundWidth
      ) {
        setBackgroundHeight(backgroundRef?.current.clientHeight);
        setBackgroundWidth(backgroundRef?.current.clientWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const projectsRef = useRef();
  const aboutRef = useRef();
  const devRef = useRef();
  const devLeftRef = useRef();
  const musicRef = useRef();
  const musicLeftRef = useRef();
  /* const booksRef = useRef();
  const booksLeftRef = useRef(); */

  // Page scroll

  useEffect(() => {
    const projectsCont = projectsRef.current;
    const aboutCont = aboutRef.current;
    const devCont = devRef.current;
    const devLeftCont = devLeftRef.current;
    const musicCont = musicRef.current;
    const musicLeftCont = musicLeftRef.current;
    /* const booksCont = booksRef.current;
    const booksLeftCont = booksLeftRef.current; */
    const currentCont = page === "projects" ? projectsCont : aboutCont;
    const pageHeight = pageRef.current.clientHeight;
    const maxScroll = currentCont.clientHeight - pageHeight;
    const currentHeight = currentCont.clientHeight;
    const devHeight = devCont.clientHeight;
    const devLeftHeight = devLeftCont.clientHeight;
    const musicHeight = musicCont.clientHeight;
    const musicLeftHeight = musicLeftCont.clientHeight;
    /* const booksHeight = booksCont.clientHeight;
    const bookseftHeight = booksLeftCont.clientHeight; */

    window.addEventListener("wheel", (event) => {
      if (currentHeight > pageHeight) {
        if (page === "projects" || page === "about") {
          const newPageScroll = Math.min(
            Math.max(pageScroll - event.deltaY, -maxScroll),
            0
          );

          setPageScroll(newPageScroll);
          currentCont.style.transform = `translate3d(0, ${pageScroll}px, 0)`;

          if (window.innerWidth >= 1280) {
            const devScroll = Math.max(
              pageScroll,
              -(devHeight - devLeftHeight - 50)
            );
            devLeftCont.style.transform = `translate3d(0, ${-devScroll}px, 0)`;

            const musicScroll = Math.min(
              Math.max(-pageScroll - devHeight - 90, 0),
              musicHeight - musicLeftHeight - 50
            );
            musicLeftCont.style.transform = `translate3d(0, ${musicScroll}px, 0)`;
          }
        }
      }
    });

    window.addEventListener("touchstart", (event) => {
      if (currentHeight > pageHeight) {
        if (page === "projects" || page === "about") {
          const startCoord = event.pageY;
          const startTime = Date.now();
          console.log("start time", startTime);
          window.addEventListener("touchmove", (event) => {
            const endCoord = event.changedTouches[0].pageY;
            const distance = endCoord - startCoord;

            const newPageScroll = Math.min(
              Math.max(pageScroll + distance, -maxScroll),
              0
            );

            setPageScroll(newPageScroll);
            currentCont.style.transform = `translate3d(0, ${newPageScroll}px, 0)`;

            /* window.addEventListener("touchend", (event) => {
              const endTime = Date.now();
              const totalTime = endTime - startTime;
              const newScrollVelocity = Math.abs(distance / totalTime);
              console.log("scrollVelocity", newScrollVelocity);
              newScrollVelocity > 0.5 &&
                setPageScroll(
                  newPageScroll + newPageScroll * newScrollVelocity
                ) &&
                (currentCont.style.transform = `translate3d(0, ${
                  newPageScroll + newPageScroll * newScrollVelocity
                }px, 0)`);
            }); */

            if (window.innerWidth >= 1280) {
              const devScroll = Math.max(
                pageScroll,
                -(devHeight - devLeftHeight - 50)
              );
              devLeftCont.style.transform = `translate3d(0, ${-devScroll}px, 0)`;

              const musicScroll = Math.min(
                Math.max(-pageScroll - devHeight - 90, 0),
                musicHeight - musicLeftHeight - 50
              );
              musicLeftCont.style.transform = `translate3d(0, ${musicScroll}px, 0)`;
            }
          });
        }
      }
    });
  }, [page, pageScroll]);

  const handlePage = (page) => {
    setPage(page);
  };

  // Languages

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
  const copyToClipboard = (text) => {
    const ta = document.createElement("textarea");
    ta.innerText = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  };

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
    <div className={color ? "page light" : "page dark"}>
      <LandingPage />
      <Cursor show={show} page={page} copied={copied} email={email} />
      <div className="transparent-boxes">
        <div className="box box-top"></div>
        <div className="box box-right"></div>
        <div className="box box-left">
          <div className="toggle-color">
            <div
              className="color-setter"
              onClick={() => {
                setColor(true);
              }}
            >
              <span>LIGHT</span>
              <div className={color ? "checkbox checked" : "checkbox"}></div>
            </div>
            <div
              className="color-setter dark"
              onClick={() => {
                setColor(false);
              }}
            >
              <span>DARK</span>
              <div className={color ? "checkbox" : "checkbox checked"}></div>
            </div>
          </div>
        </div>
        <div className="box box-bottom"></div>
      </div>
      <div className="page-container" ref={pageRef}>
        <div className="background" ref={backgroundRef}>
          <Scene />
        </div>

        <div className="page-inner">
          <div className="content">
            <div className="header-container">
              <div className="header">
                <h1 className="title">Jesse K. Akorah</h1>
                <p className="label">Full Stack Developer</p>
              </div>
              <div className="nav">
                <ul>
                  <li
                    className={page === "home" ? "nav-item active" : "nav-item"}
                  >
                    <span className="dot">●</span>
                    <span
                      className="nav-link"
                      onClick={() => handlePage("home")}
                    >
                      Home
                    </span>
                  </li>
                  <li
                    className={
                      page === "about" ? "nav-item active" : "nav-item"
                    }
                  >
                    <span className="dot">●</span>
                    <span
                      className="nav-link"
                      onClick={() => handlePage("about")}
                    >
                      About
                    </span>
                  </li>
                  <li
                    className={
                      page === "projects" ? "nav-item active" : "nav-item"
                    }
                  >
                    <span className="dot">●</span>
                    <span
                      className="nav-link"
                      onClick={() => handlePage("projects")}
                    >
                      Projects
                    </span>
                  </li>
                  <li
                    className={page === "art" ? "nav-item active" : "nav-item"}
                  >
                    <span className="dot">●</span>
                    <span
                      className="nav-link"
                      onClick={() => handlePage("art")}
                    >
                      Art
                    </span>
                  </li>
                  <li
                    className={page === "info" ? "nav-item active" : "nav-item"}
                  >
                    <span className="dot">●</span>
                    <span
                      className="nav-link"
                      onClick={() => handlePage("info")}
                    >
                      Info
                    </span>
                  </li>
                  <li
                    className={
                      page === "contact" ? "nav-item active" : "nav-item"
                    }
                  >
                    <span className="dot">●</span>
                    <span
                      className="nav-link"
                      onClick={() => handlePage("contact")}
                    >
                      Contact
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-container">
              <div
                className={
                  page === "home"
                    ? "home page-content visible-page"
                    : "home page-content"
                }
              >
                <HomePage />
              </div>
              <div
                className={
                  page === "projects"
                    ? "projects page-content visible-page"
                    : "projects page-content"
                }
                ref={projectsRef}
              >
                <Projects />
              </div>
              <div
                className={
                  page === "info"
                    ? "info page-content visible-page"
                    : "info page-content"
                }
              >
                <Info />
              </div>
              <div
                className={
                  page === "art"
                    ? "art page-content visible-page"
                    : "art page-content"
                }
              >
                <div className="text-container">Coming Soon</div>
              </div>
              <div
                className={
                  page === "about"
                    ? "about page-content visible-page"
                    : "about page-content"
                }
                ref={aboutRef}
              >
                <div className="about-category developer">
                  <h1 className="list-title">Languages & Technologies</h1>
                  <div className="category-content" ref={devRef}>
                    <div className="section-left" ref={devLeftRef}>
                      <h3 className="left-title">DEVELOPMENT</h3>
                      <p className="left-text">
                        I am a fullstack developer who primarily uses the MERN
                        stack, but also knows how to use other technologies.
                        Feel free to reach out, I'd love to work together.
                      </p>
                    </div>
                    <ListContainer listArr={devArr} row={true} />
                  </div>
                </div>
                <div className="about-category music">
                  <h1 className="list-title">Music</h1>
                  <div className="category-content" ref={musicRef}>
                    <div className="section-left" ref={musicLeftRef}>
                      <h3 className="left-title">ARTISTS</h3>
                      <p className="left-text">
                        I enjoy music and I enjoy discovering music more. I
                        listen to a broad range of genres, mostly rock,
                        symphonic metal, rap and indie. Here's a list of what
                        seems to be my favourite artists according to my Apple
                        Music listening time through the years.
                      </p>
                    </div>
                    <ListContainer listArr={mostListened10} music />
                  </div>
                </div>
                <div className="about-category books">
                  <h1 className="list-title">Books</h1>
                  <div className="category-content" /* ref={booksRef} */>
                    <div className="section-left" /* ref={booksLeftRef} */>
                      <h3 className="left-title">BOOKS</h3>
                      <p className="left-text">
                        Why experince only one world, when you can experince an
                        infinite number. I love reading books, mostly fiction.
                        An escape from reality. This is a list of all the books
                        I've read so far this year.
                      </p>
                    </div>
                    <div className="most-listened-songs section-right"></div>
                  </div>
                </div>
              </div>
              <div
                className={
                  page === "contact"
                    ? "contact page-content visible-page"
                    : "contact page-content"
                }
              >
                <div className="email-container">
                  <h3 className="top">Send me a message</h3>
                  <span
                    className="bottom"
                    onClick={() => copyToClipboard("jesseakorah@gmail.com")}
                    ref={emailRef}
                  >
                    jesseakorah@gmail.com
                  </span>
                  <div className="underline"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

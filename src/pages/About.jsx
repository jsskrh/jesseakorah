import React, { useEffect, useRef, useState } from "react";
import ListContainer from "../components/ListContainer";
import "../styles/About.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import data from "../data";

const devArr = data.devList;
const musicArr = data.musicList;

const About = React.forwardRef((props, ref) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const currentPosRef = useRef(null);
  const containerElementRef = useRef(null);
  const devRef = useRef(null);
  const devLeftRef = useRef(null);
  const musicRef = useRef(null);
  const musicLeftRef = useRef(null);

  useEffect(() => {
    currentPosRef.current = props.currentPos;
    containerElementRef.current = props.getContainer().current;
  }, [props]);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth < 768) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: containerElementRef.current,
    });

    ScrollTrigger.scrollerProxy(containerElementRef.current, {
      scrollTop(value) {
        return arguments.length
          ? (currentPosRef.current = value)
          : currentPosRef.current;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    gsap.ticker.add(ScrollTrigger.update);

    const context = ref.current;
    const devCat = devRef.current;
    const devCatLeft = devLeftRef.current;
    const musicCat = musicRef.current;
    const musicCatLeft = musicLeftRef.current;

    let ctx = gsap.context(() => {
      if (windowSize.innerWidth < 1280) {
        gsap.to(devCatLeft, {
          scrollTrigger: {
            trigger: devCat,
            start: "top 149px",
            end: "bottom-=345px top",
            pin: devCatLeft,
          },
        });

        gsap.to(musicCatLeft, {
          scrollTrigger: {
            trigger: musicCat,
            start: "top 180px",
            end: "bottom-=413px top",
            pin: musicCatLeft,
          },
        });
      } else {
        gsap.to(devCatLeft, {
          scrollTrigger: {
            trigger: devCat,
            start: "top 180px",
            end: "bottom-=478px top",
            pin: devCatLeft,
          },
        });

        gsap.to(musicCatLeft, {
          scrollTrigger: {
            trigger: musicCat,
            start: "top 180px",
            end: "bottom-=555px top",
            pin: musicCatLeft,
          },
        });
      }
    }, context);

    return () => {
      ctx.revert();
      gsap.ticker.remove(ScrollTrigger.update);
    };
  }, [windowSize, ref]);

  return (
    <div className="about-page">
      <div className="page-content asscroll" ref={ref}>
        <div className="about-category developer" id="devCategory" ref={devRef}>
          <h1 className="list-title">Languages & Technologies</h1>
          <div className="category-content">
            <div className="section-left" id="devLeft" ref={devLeftRef}>
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
        <div className="about-category music" ref={musicRef}>
          <h1 className="list-title">Music</h1>
          <div className="category-content">
            <div className="section-left" ref={musicLeftRef}>
              <h3 className="left-title">ARTISTS</h3>
              <p className="left-text">
                I enjoy music and I enjoy discovering music more. I listen to a
                broad range of genres, mostly rock, symphonic metal, rap and
                indie. Here's a list of what seems to be my favourite artists
                according to my Apple Music listening time through the years.
              </p>
            </div>
            <ListContainer listArr={musicArr} music />
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
});

export default About;

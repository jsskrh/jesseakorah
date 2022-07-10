import React, { useEffect, useRef, useState } from "react";

function Canvas({ height, width, color }) {
  const [canvasColor, setCanvasColor] = useState("");
  const [starColor, setStarColor] = useState("");

  /* if (color===false) {
  setCanvasColor("dark")
} else {
  setCanvasColor
} */

  // constants
  useEffect(() => {
    const COLOR_SPACE = color ? "hsl(0, 0%, 90%)" : "hsl(0, 0%, 5%)";
    const COLOR_STARS = color ? "hsl(0, 0%, 5%)" : "hsl(0, 0%, 90%)";
    setCanvasColor(COLOR_SPACE);
    console.log("cc", canvasColor);
    setStarColor(COLOR_STARS);
    console.log("sc", starColor);
  }, [color]);
  /* const COLOR_SPACE = color ? "hsl(0, 0%, 90%)" : "hsl(0, 0%, 5%)";
  const COLOR_STARS = color ? "hsl(0, 0%, 5%)" : "hsl(0, 0%, 90%)"; */
  const STAR_NUM = 200; // number of stars in the starfield
  const STAR_SIZE = 0.003; // max star size as a fraction of screen width
  const STAR_SPEED = 0.03; // fraction of screen width per second

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.height = height;
    canvas.width = width;

    // set up the stars
    var stars = [];
    var starSpeed = STAR_SPEED * canvas.width;
    var xv = starSpeed * randomSign() * Math.random();
    // Using Pythagoras' theorem, yv = sqrt(starSpeed^2 - xv^2)
    var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();
    for (let i = 0; i < STAR_NUM; i++) {
      let speedMult = Math.random() * 1.5 + 0.5;
      stars[i] = {
        r: (Math.random() * STAR_SIZE * canvas.width) / 2,
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        xv: xv * speedMult,
        yv: yv * speedMult,
      };
    }

    // set up the animation loop
    var timeDelta,
      timeLast = 0;
    requestAnimationFrame(loop);

    function loop(timeNow) {
      // calculate the time difference
      timeDelta = timeNow - timeLast;
      timeLast = timeNow;

      // space background
      context.fillStyle = canvasColor;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // draw the stars
      context.fillStyle = starColor;
      for (let i = 0; i < STAR_NUM; i++) {
        context.beginPath();
        context.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
        context.fill();

        // update the star's x position
        stars[i].x += stars[i].xv * timeDelta * 0.001;

        // reposition the star to the other side if it goes off screen
        if (stars[i].x < 0 - stars[i].r) {
          stars[i].x = canvas.width + stars[i].r;
        } else if (stars[i].x > canvas.width + stars[i].r) {
          stars[i].x = 0 - stars[i].r;
        }

        // update the star's y position
        stars[i].y += stars[i].yv * timeDelta * 0.001;

        // reposition the star to the other side if it goes off screen
        if (stars[i].y < 0 - stars[i].r) {
          stars[i].y = canvas.height + stars[i].r;
        } else if (stars[i].y > canvas.height + stars[i].r) {
          stars[i].y = 0 - stars[i].r;
        }
      }

      // call the next frame
      requestAnimationFrame(loop);
    }

    function randomSign() {
      return Math.random() >= 0.5 ? 1 : -1;
    }
  }, [height, width, canvasColor, starColor]);

  return <canvas className="background-canvas" ref={canvasRef} />;
}

export default Canvas;

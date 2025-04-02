import React, { useEffect } from "react";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    // Disable scrolling when component mounts
    document.body.style.overflow = "hidden";

    const video = document.getElementById("heroVid");
    if (video) {
      video.muted = true;
      video.play().catch((error) => console.error("Video play failed:", error));
    }

    // Enable scrolling after animation is complete
    const timeout = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 3500); // Match animation delay + duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="heroSection">
      <video
        src="https://res.cloudinary.com/dpunh7hfo/video/upload/v1741253063/SoulmateX/idythlnmrd748wtoj4je.mp4"
        className="heroVideo"
        id="heroVid"
        autoPlay
        playsInline
        muted
        loop
      />
      <h1 className="hero-text">
        “Let's Start Your
        <br />
        Journey to Destiny”
      </h1>
    </div>
  );
}

export default Hero;

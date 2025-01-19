import React from "react";

const Hero = ({ onScrollToProjects, onScrollToContact }) => {
  return (
    <div className="bg-lightblue h-screen text-center">
      <div className="hero">
        <h1 className="hero-h1">Hi, my name is Bim Rai.</h1>
        <p className="hero-p">
          A passionate Computer Science student exploring the world of software
          development.
        </p>
        <div className="hero-btn">
          <button onClick={onScrollToProjects} className="hero-btns">
            View Projects
          </button>
          <button onClick={onScrollToContact} className="hero-btns">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

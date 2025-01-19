import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h3 className="about-title">About Me</h3>
        
        <div className="about-item">
          <h4>Education:</h4>
          <p>Currently, I am studying BSc (Hons) in Computer Science in my first year at the University of London.</p>
        </div>
        
        <div className="about-item">
          <h4>Area of interests:</h4>
          <p>My interests within the tech space are software development (Front-End Developement but expanding to Full Stack), 
          creating beautiful efficient websites and web apps serving key functions for a smooth experience.</p>
        </div>
        
        <div className="about-item">
          <h4>What's my motivation?</h4>
          <p>My motivation is to create meaningful change, whether through small yet impactful solutions like 
          user-friendly booking forms or innovative apps and software that enhance quality of life and make a positive 
          difference in people's daily experiences.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
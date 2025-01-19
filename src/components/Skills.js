import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h3 className="skills-title">Skills</h3>

        {/* Programming Languages */}
        <div className="skills-category">
          <h4>Programming Languages:</h4>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
          </ul>
        </div>

        {/* Frameworks/Tools */}
        <div className="skills-category">
          <h4>Frameworks/Tools:</h4>
          <ul className="skills-list">
            <li>React</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>Netlify</li>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Sony Vegas Pro</li>
            <li>FL Studio</li>
          </ul>
        </div>

        {/* Other Skills */}
        <div className="skills-category">
          <h4>Other Skills:</h4>
          <ul className="skills-list">
            <li>Problem-solving</li>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Friendly</li>
            <li>Motivated</li>
            <li>Open To Learn</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

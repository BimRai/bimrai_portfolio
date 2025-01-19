import React from 'react';

const Navbar = ({
  onScrollToHome,
  onScrollToProjects,
  onScrollToSkills,
  onScrollToAboutMe,
  onScrollToContact,
}) => {
  return (
    <nav className="navbar">
      <h1 className="logo">bimrai</h1> {/* Add the logo here */}
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <button onClick={onScrollToHome} className="nav-button">
              Home
            </button>
          </li>
          <li>
            <button onClick={onScrollToAboutMe} className="nav-button">
              About Me
            </button>
          </li>
          <li>
            <button onClick={onScrollToSkills} className="nav-button">
              Skills
            </button>
          </li>
          <li>
            <button onClick={onScrollToProjects} className="nav-button">
              Projects
            </button>
          </li>
          <li>
            <button onClick={onScrollToContact} className="nav-button">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

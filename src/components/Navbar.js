import React, { useState } from 'react';

const Navbar = ({
  onScrollToHome,
  onScrollToProjects,
  onScrollToSkills,
  onScrollToAboutMe,
  onScrollToContact,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the menu when a nav link is clicked
  };

  return (
    <nav className="navbar">
      <h1 className="logo">bimrai</h1>
      <div className={`navbar-center ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <button onClick={() => { onScrollToHome(); handleNavLinkClick(); }} className="nav-button">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => { onScrollToAboutMe(); handleNavLinkClick(); }} className="nav-button">
              About Me
            </button>
          </li>
          <li>
            <button onClick={() => { onScrollToSkills(); handleNavLinkClick(); }} className="nav-button">
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => { onScrollToProjects(); handleNavLinkClick(); }} className="nav-button">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => { onScrollToContact(); handleNavLinkClick(); }} className="nav-button">
              Contact
            </button>
          </li>
        </ul>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;

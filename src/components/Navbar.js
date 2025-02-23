import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css"; // We'll keep this for custom styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Brand/Logo */}
        <Link className="navbar-brand" to="/">
          My Portfolio
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
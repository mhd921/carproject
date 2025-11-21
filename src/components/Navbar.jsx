import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navbar renders the site header with logo and navigation links.
// It uses React Router's Link for client-side navigation and a local state
// to toggle the mobile menu. The header background becomes solid on non-home routes.
function Navbar() {
  // Controls whether the mobile navigation is expanded
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  // Close the menu after clicking any nav link
  const handleNavClick = () => setOpen(false);
  // Track current route to apply a solid background when not on the home page
  const location = useLocation();
  const solidBg = location.pathname !== '/';

  return (
    // Solid background on non-home routes for readability
    <header className="header" style={solidBg ? { backgroundColor: 'hsl(222, 47%, 15%)' } : undefined}>
      <div className="container">
        <Link to="/" className="logo" onClick={handleNavClick}>
          <img src="/assets/images/logo.png" width="128" height="63" alt="autofix home" />
        </Link>

        {/* Nav links use React Router for smooth client-side transitions */}
        <nav className={`navbar ${open ? 'active' : ''}`} data-navbar="true">
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link" onClick={handleNavClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="navbar-link" onClick={handleNavClick}>About</Link>
            </li>
            <li>
              <Link to="/cars" className="navbar-link" onClick={handleNavClick}>Our Cars</Link>
            </li>
            <li>
              <Link to="/service" className="navbar-link" onClick={handleNavClick}>Services</Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-link" onClick={handleNavClick}>Contact</Link>
            </li>
            <li>
              <Link to="/login" className="navbar-link" onClick={handleNavClick}>Login</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle button controls the 'active' class above */}
        <button className={`nav-toggle-btn ${open ? 'active' : ''}`} aria-label="toggle menu" aria-expanded={open} onClick={toggle} data-nav-toggler="true">
          <span className="nav-toggle-icon icon-1"></span>
          <span className="nav-toggle-icon icon-2"></span>
          <span className="nav-toggle-icon icon-3"></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;


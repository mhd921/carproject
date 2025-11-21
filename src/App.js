import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';

// App composes the global layout and client-side routing.
// - Navbar is always visible
// - Routes render the active page based on the URL without full reloads
// - Footer is static across all pages
function App() {

  return (
    <>
      {/* Global top navigation */}
      <Navbar />

      {/* Route outlet: renders the page component that matches the current path */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {/* Global footer from the original template */}
      <footer className="footer">
        <div className="footer-top section">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="/assets/images/logo.png" width="128" height="63" alt="autofix home" />
              </a>
              <p className="footer-text">
                Rerum necessitatibus saepe eveniet aut et voluptates repudiandae sint et molestiae non recusandae.
              </p>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <img src="/assets/images/facebook.svg" alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <img src="/assets/images/instagram.svg" alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <img src="/assets/images/twitter.svg" alt="twitter" />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer-list">
              <li>
                <p className="h3">Opening Hours</p>
              </li>
              <li>
                <p className="p">Monday – Saturday</p>
                <span className="span">12.00 – 14.45</span>
              </li>
              <li>
                <p className="p">Sunday – Thursday</p>
                <span className="span">17.30 – 00.00</span>
              </li>
              <li>
                <p className="p">Friday – Saturday</p>
                <span className="span">12.00 – 14.45</span>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="h3">Contact Info</p>
              </li>
              <li>
                <a href="tel:+01234567890" className="footer-link">
                  <span className="material-symbols-rounded">call</span>
                  <span className="span">+01 2 3456 7890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@autofix.com" className="footer-link">
                  <span className="material-symbols-rounded">mail</span>
                  <span className="span">info@autofix.com</span>
                </a>
              </li>
              <li>
                <address className="footer-link address">
                  <span className="material-symbols-rounded">location_on</span>
                  <span className="span">21 King Street Melbourne, 3000, Australia</span>
                </address>
              </li>
            </ul>
          </div>

          <img
            src="/assets/images/footer-shape-3.png"
            width="637"
            height="173"
            loading="lazy"
            alt="Shape"
            className="shape shape-3 move-anim"
          />
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">Copyright 2022, codewithsadee All Rights Reserved.</p>
            <img
              src="/assets/images/footer-shape-2.png"
              width="778"
              height="335"
              loading="lazy"
              alt="Shape"
              className="shape shape-2"
            />
            <img
              src="/assets/images/footer-shape-1.png"
              width="805"
              height="652"
              loading="lazy"
              alt="Red Car"
              className="shape shape-1 move-anim"
            />
          </div>
        </div>
      </footer>

      
    </>
  );
}

export default App;


import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Correct import

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Priti</div>

      {/* Mobile menu toggle button */}
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMobile ? "mobile-nav" : ""}`}>
        <li>
          <AnchorLink className="anker-li" href="#home" onClick={() => { setMenu("home"); setIsMobile(false); }}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anker-li" offset={50} href="#about" onClick={() => { setMenu("about"); setIsMobile(false); }}>
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anker-li" offset={50} href="#services" onClick={() => { setMenu("services"); setIsMobile(false); }}>
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anker-li" offset={50} href="#work" onClick={() => { setMenu("work"); setIsMobile(false); }}>
            Portfolio
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anker-li" offset={50} href="#contact" onClick={() => { setMenu("contact"); setIsMobile(false); }}>
            Contact
          </AnchorLink>
        </li>
      </ul>

      <button className="nav-button">
        <AnchorLink className="anker-li" offset={50} href="#contact">Connect With Me</AnchorLink>
      </button>
    </nav>
  );
};

export default Navbar;

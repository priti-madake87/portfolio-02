import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Priti's Portfolio</h1>
          <p>Stay connected with me for the latest updates and exciting projects!</p>
        </div>
        
        <div className="footer-top-right">
          <div className="footer-email">
            <p><i className="fa-solid fa-user"></i></p>
            <input id="email-input" type="email" placeholder="Enter your email" required />
          </div>
          <button className="footer-sb">Subscribe</button>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; {new Date().getFullYear()} Priti's Portfolio. All rights reserved.</p>
        <div className="footer-bottom-right">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

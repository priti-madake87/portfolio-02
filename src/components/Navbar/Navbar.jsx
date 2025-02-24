import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    
  const [menu,setMenu] = useState("home");

  return (
    <nav className="navbar">
      <div className="logo">Priti</div>
      <ul className="nav-menu">
        <li><AnchorLink className="anker-li" href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src="/m.jpg" />:<></>}</li>
        <li><AnchorLink className="anker-li" offset={50} href="#about"><p onClick={()=>setMenu("about")} >About Me</p></AnchorLink>{menu==="about"?<img src="/m.jpg" />:<></>}</li>
        <li><AnchorLink className="anker-li" offset={50} href="#services"><p onClick={()=>setMenu("services")} >Services</p></AnchorLink>{menu==="services"?<img src="/m.jpg" />:<></>}</li>
        <li><AnchorLink className="anker-li" offset={50} href="#work"><p onClick={()=>setMenu("work")} >Portfolio</p></AnchorLink>{menu==="work"?<img src="/m.jpg" />:<></>}</li>
        <li><AnchorLink className="anker-li" offset={50} href="#contact"><p onClick={()=>setMenu("contact")} >Contact</p></AnchorLink>{menu==="contact"?<img src="/m.jpg" />:<></>}</li>
      </ul>
      <button className="nav-button">Connect With Me</button>
    </nav>
  );
};

export default Navbar;

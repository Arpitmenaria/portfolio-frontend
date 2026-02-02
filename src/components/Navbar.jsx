import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-box">
        <h2>Arpit Menaria</h2>
        <span>SOFTWARE DEVELOPER</span>
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>HOME</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>ABOUT</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>RESUME</a></li>
        <li><a href="#portfolio" onClick={() => setOpen(false)}>PORTFOLIO</a></li>
        <li><a href="#testimonial" onClick={() => setOpen(false)}>TESTIMONIAL</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>CONTACT</a></li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;

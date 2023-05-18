import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Error from "./components/Error";
import "./App.css";

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState("");

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link
          to="/"
          onClick={() => handleNavItemClick("Home")}
          className={`nav-item ${activeNavItem === "Home" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => handleNavItemClick("About")}
          className={`nav-item ${activeNavItem === "About" ? "active" : ""}`}
        >
          Our Team
        </Link>
        <Link
          to="/projects"
          onClick={() => handleNavItemClick("Projects")}
          className={`nav-item ${activeNavItem === "Projects" ? "active" : ""}`}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          onClick={() => handleNavItemClick("Contact")}
          className={`nav-item ${activeNavItem === "Contact" ? "active" : ""}`}
        >
          Contact Us
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer className="sticky-footer">This is the footer.</footer>
    </BrowserRouter>
  );
};

export default App;

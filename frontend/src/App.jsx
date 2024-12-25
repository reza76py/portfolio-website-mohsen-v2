import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import "./styles/styles.css";

function App() {
  return (
    <Router>
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>  
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );

}

export default App;

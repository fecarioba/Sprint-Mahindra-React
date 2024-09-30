// src/components/Header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header-home">
      <a href="index.html" className="logo">
        Mahindra
      </a>

      <nav className="navbar">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="faq">FAQ</Link>
        <Link to="login">Login</Link>
      </nav>

      <div className="social-media">
        <a href="#">
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a href="#">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;

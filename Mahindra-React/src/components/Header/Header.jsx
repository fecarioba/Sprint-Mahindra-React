import React from "react";
import './header.css'
// desestruturar os hooks depois

function Header() {
  return (
    <header class="header">
      <a href="index.html" class="logo">
        Mahindra
      </a>

      <nav class="navbar">
        <a href="#" class="active">
          Home
        </a>
        <a href="#">Contato</a>
        <a href="./pages/faq.html">FAQ</a>
        <a href="./pages/login.html">Login</a>
      </nav>

      <div class="social-media">
        <a href="#">
          <i class="bx bxl-instagram-alt"></i>
        </a>
        <a href="#">
          <i class="bx bxl-facebook"></i>
        </a>
        <a href="#">
          <i class="bx bxl-linkedin"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;

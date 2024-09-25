import Header from "./components/Header/Header.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Home from "./components/Home/Home.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Login from "./components/Login/Login.jsx";
import React from "react";
import "../src/index.css";

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Slider />
      <Faq/> 
      <Login/>
    </>
  );
}

export default App;

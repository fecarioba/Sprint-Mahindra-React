import Header from "./components/Header/Header.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Home from "./components/Home/Home.jsx";
import React from "react";
import "../src/index.css";
// desestruturar os hooks depois

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Slider />
    </>
  );
}

export default App;

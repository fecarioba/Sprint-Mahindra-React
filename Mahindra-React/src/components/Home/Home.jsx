import React from "react";
import imagemFecar from '../../assets/img/fecar.png'
import Slider from "../Slider/Slider";
import Header from "../Header/Header";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <div className="home-content">
          <h1>Sua Experiência.</h1>
          <h3>Redefinida!</h3>
          <p>
            Descubra a inovação das corridas de Fórmula E: carros elétricos de
            alta performance, pistas urbanas emocionantes e um compromisso com o
            futuro sustentável do esporte automobilístico.
          </p>
          <a href="#comecoConteudo" className="btn-home">
            Explorar Carros
          </a>
        </div>

        <div className="home-img">
          <div className="rhombus">
            <img src={imagemFecar} alt="" />
          </div>
        </div>

        <div className="rhombus2"></div>
      </section>
      <Slider />
    </>
  );
}

export default Home
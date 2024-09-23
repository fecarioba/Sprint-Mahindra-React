import React from "react";
import imagemFecar from './assets/img/fecar.png'

function Home(){return( 
<section class="home">
    <div class="home-content">
        <h1>Sua Experiência.</h1>
        <h3>Redefinida!</h3>
        <p>Descubra a inovação das corridas de Fórmula E: carros elétricos de alta performance, pistas urbanas
        emocionantes e um compromisso com o futuro sustentável do esporte automobilístico.</p>
        <a href="#comecoConteudo" class="btn">Explorar Carros</a>
    </div>

    <div class="home-img">
        <div class="rhombus">
            <img src={imagemFecar} alt=""/>
        </div>
    </div>

    <div class="rhombus2"></div>
</section>)}

export default Home
import React from "react";
// desestruturar os hooks depois

function Slider() {

// const nextBtn = document.querySelector('.next-btn');
// const prevBtn = document.querySelector('.prev-btn');
// const slides = document.querySelectorAll('.slide');
// const numeroSlides = slides.length;
// let slideNumero = 0;

// // slide botao next
// nextBtn.onclick = () => {
//     slides.forEach((slide) => {
//         slide.classList.remove('ativado');
//     });

//     slideNumero++;

//     if (slideNumero > (numeroSlides - 1)) {
//         slideNumero = 0;
//     }

//     slides[slideNumero].classList.add('ativado');
// }

// // slide botao volta
// prevBtn.onclick = () => {
//     slides.forEach((slide) => {
//         slide.classList.remove('ativado');
//     });

//     slideNumero--;

//     if (slideNumero < 0) {
//         slideNumero = numeroSlides - 1;
//     }

//     slides[slideNumero].classList.add('ativado');
// }
  return (
    <section className="banner" id="comecoConteudo">
      <div className="slider">
        <div className="slide ativado">
          {/* <img src="./img/mahindra.png" alt="Carro equipe Mahindra Racing"> */}
          <div className="left-info">
            <div className="content">
              <h1>Mahindra Racing</h1>
            </div>
          </div>
        </div>

        <div className="slide" alt="btnSaiba">
          {/* <img src="./img/andretti.jpg" alt="Carro equipe Andretti"> */}
          <div className="left-info">
            <div className="content">
              <h1>Andretti</h1>
            </div>
          </div>
        </div>

        <div className="slide">
          {/* <img src="./img/ds-penske.jpg" alt="Carro equipe DS Penske"> */}
          <div className="left-info">
            <div className="content">
              <h1>DS Penske</h1>
            </div>
          </div>
        </div>

        <div className="slide">
          {/* <img src="./img/envision.jpg" alt="Carro equipe Envision"> */}
          <div className="left-info">
            <div className="content">
              <h1>Envision</h1>
            </div>
          </div>
        </div>

        <div className="slide">
          {/* <img src="./img/ert.jpg" alt="Carro equipe ERT"> */}
          <div className="left-info">
            <div className="content">
              <h1>ERT</h1>
            </div>
          </div>
        </div>

        <div className="slide">
          {/* <img src="./img/jaguar.jpg" alt="Carro equipe Jaguar TCS"> */}
          <div className="left-info">
            <div className="content">
              <h1>Jaguar TCS</h1>
            </div>
          </div>
        </div>

        <div className="slide">
          {/* <img src="./img/cupra.jpg" alt="Carro equipe ABT Cupra"> */}
          <div className="left-info">
            <div className="content">
              <h1>ABT Cupra</h1>
            </div>
          </div>
        </div>

        <div className="slide">
          {/* <img src="./img/maserati.png" alt="Carro equipe Masserati"> */}
          <div className="left-info">
            <div className="content">
              <h1>Masserati</h1>
            </div>
          </div>
        </div>

        <div className="slide">
          {/* <img src="./img/mclarem.jpg" alt="Carro equipe Neom McLaren"> */}
          <div className="left-info">
            <div className="content">
              <h1>Neom McLaren</h1>
            </div>
          </div>
        </div>

        <div className="slide">
          {/* <img src="./img/nissan.jpg" alt="Carro da equipe Nissan"> */}
          <div className="left-info">
            <div className="content">
              <h1>Nissan</h1>
            </div>
          </div>
        </div>

        <div className="slide">
          {/* <img src="./img/porshe.png" alt="Carro da equipe Tag Heuer Porshe"> */}
          <div className="left-info">
            <div className="content">
              <h1>Tag Heuer Porshe</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <span className="prev-btn">
          <i className="bx bx-chevron-left"></i>
        </span>
        <span className="next-btn">
          <i className="bx bx-chevron-right"></i>
        </span>
      </div>
    </section>
  );
}

export default Slider;

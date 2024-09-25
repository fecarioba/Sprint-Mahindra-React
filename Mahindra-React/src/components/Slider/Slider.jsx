  import React from "react";
  import './slider.css'
  import imagemMahindra from '../../assets/img/mahindra.png'
  import imagemAndretti from '../../assets/img/andretti.jpg'
  import imagemDSPenske from '../../assets/img/ds-penske.jpg'
  import imagemEnvision from '../../assets/img/envision.jpg'
  import imagemERT from '../../assets/img/ert.jpg'
  import imagemJaguar from '../../assets/img/jaguar.jpg'
  import imagemCupra from '../../assets/img/cupra.jpg'
  import imagemMaserati from '../../assets/img/maserati.png'
  import imagemMcLarem from '../../assets/img/mclarem.jpg'
  import imagemNissan from '../../assets/img/nissan.jpg'
  import imagemPorshe from '../../assets/img/porshe.png'
  import { Imagens } from "./Imagens.jsx";
  // desestruturar os hooks depois

  function Slider() {
      return (
        <section className="banner" id="comecoConteudo">
       <div className="slider">
         <div className="slide ativado">
           <img src={imagemMahindra} alt="Carro equipe Mahindra Racing"/>
           <div className="left-info">
             <div className="content">
               <h1>Mahindra Racing</h1>
             </div>
           </div>
         </div>

         <div className="slide" alt="btnSaiba">
           <img src={imagemAndretti} alt="Carro equipe Andretti"/>
           <div className="left-info">
             <div className="content">
               <h1>Andretti</h1>
             </div>
           </div>
         </div>
        <Imagens
          src={imagemDSPenske}
          alt="Carro equipe DS Penske"
          title="DS Penske"
        />
        <Imagens
          src={imagemEnvision}
          alt="Carro equipe Envision"
          title="Envision"
        />
        <Imagens src={imagemERT} alt="Carro equipe ERT" title="ERT" />
        <Imagens
          src={imagemJaguar}
          alt="Carro equipe Jaguar TCS"
          title="Jaguar TCS"
        />
        <Imagens
          src={imagemCupra}
          alt="Carro equipe ABT Cupra"
          title="ABT Cupra"
        />
        <Imagens
          src={imagemMaserati}
          alt="Carro equipe Maserati"
          title="Maserati"
        />
        <Imagens
          src={imagemMcLarem}
          alt="Carro equipe Neom McLaren"
          title="Neom McLaren"
        />
        <Imagens src={imagemNissan} alt="Carro equipe Nissan" title="Nissan" />
        <Imagens
          src={imagemPorshe}
          alt="Carro equipe Tag Heuer Porsche"
          title="Tag Heuer Porsche"
        />

        <div className="navigation">
          <span className="prev-btn">
            <i className="bx bx-chevron-left"></i>
          </span>
          <span className="next-btn">
            <i className="bx bx-chevron-right"></i>
          </span>
        </div>
      </div>        
      </section>
    );
  }
  export default Slider;

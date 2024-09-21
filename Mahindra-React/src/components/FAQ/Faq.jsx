import React from "react";

function Faq() {
  return (
    <section>
      <h1>FAQ</h1>

      <div id="container">
        <div class="accordion">
          <button class="accordion-header">
            <span>O que é a Fórmula E?</span>
            <i class="fa-solid fa-chevron-down arrow"></i>
          </button>
          <div class="accordion-body">
            <p>
              A Fórmula E é uma categoria de automobilismo que utiliza
              exclusivamente carros elétricos. É reconhecida pela FIA (Federação
              Internacional do Automóvel) e é projetada para promover a inovação
              em veículos elétricos e sustentabilidade no esporte a motor.
            </p>
          </div>
        </div>

        <div class="accordion">
          <button class="accordion-header">
            <span>Como funcionam as corridas da Fórmula E?</span>
            <i class="fa-solid fa-chevron-down arrow"></i>
          </button>
          <div class="accordion-body">
            <p>
              As corridas da Fórmula E acontecem em circuitos de rua em cidades
              ao redor do mundo. Cada evento inclui treinos livres,
              classificação e a corrida propriamente dita, que dura cerca de 45
              minutos mais uma volta. A energia dos carros é monitorada de perto
              e os pilotos precisam trocar de carro durante a corrida devido à
              limitação da capacidade das baterias.
            </p>
          </div>
        </div>

        <div class="accordion">
          <button class="accordion-header">
            <span>
              Quais são as principais características dos carros da Fórmula E?
            </span>
            <i class="fa-solid fa-chevron-down arrow"></i>
          </button>
          <div class="accordion-body">
            <p>
              Os carros da Fórmula E são monopostos construídos especificamente
              para competições elétricas. Eles são impulsionados por motores
              elétricos que produzem cerca de 250 kW (equivalente a
              aproximadamente 335 cavalos). As baterias utilizadas têm uma
              capacidade limitada para garantir o equilíbrio entre desempenho e
              eficiência energética.
            </p>
          </div>
        </div>

        <div class="accordion">
          <button class="accordion-header">
            <span>Quais são os objetivos da Fórmula E?</span>
            <i class="fa-solid fa-chevron-down arrow"></i>
          </button>
          <div class="accordion-body">
            <p>
              A Fórmula E tem como principais objetivos promover a adoção de
              veículos elétricos, aumentar a conscientização sobre
              sustentabilidade no automobilismo e oferecer uma plataforma de
              competição global para fabricantes de automóveis e tecnologias
              relacionadas à eletrificação. Além disso, busca entretenimento
              para os fãs com corridas emocionantes em locais urbanos icônicos
              ao redor do mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;

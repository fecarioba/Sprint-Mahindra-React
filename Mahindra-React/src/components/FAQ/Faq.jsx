import React, { useState } from "react";
import "./faq.css"; // Certifique-se de que o caminho para o CSS está correto

// Componente AccordionItem
function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div id="faq" className="accordion">
      <button className="accordion-header" onClick={toggleAccordion}>
        <span>{question}</span>
        <i
          className={`fa-solid fa-chevron-${isOpen ? "up" : "down"} arrow ${
            isOpen ? "rotate" : ""
          }`}
        ></i>
      </button>
      <div className={`accordion-body ${isOpen ? "active" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

function Faq() {
  const faqs = [
    {
      question: "O que é a Fórmula E?",
      answer:
        "A Fórmula E é uma categoria de automobilismo que utiliza exclusivamente carros elétricos. É reconhecida pela FIA (Federação Internacional do Automóvel) e é projetada para promover a inovação em veículos elétricos e sustentabilidade no esporte a motor.",
    },
    {
      question: "Como funcionam as corridas da Fórmula E?",
      answer:
        "As corridas da Fórmula E acontecem em circuitos de rua em cidades ao redor do mundo. Cada evento inclui treinos livres, classificação e a corrida propriamente dita, que dura cerca de 45 minutos mais uma volta. A energia dos carros é monitorada de perto e os pilotos precisam trocar de carro durante a corrida devido à limitação da capacidade das baterias.",
    },
    {
      question:
        "Quais são as principais características dos carros da Fórmula E?",
      answer:
        "Os carros da Fórmula E são monopostos construídos especificamente para competições elétricas. Eles são impulsionados por motores elétricos que produzem cerca de 250 kW (equivalente a aproximadamente 335 cavalos). As baterias utilizadas têm uma capacidade limitada para garantir o equilíbrio entre desempenho e eficiência energética.",
    },
    {
      question: "Quais são os objetivos da Fórmula E?",
      answer:
        "A Fórmula E tem como principais objetivos promover a adoção de veículos elétricos, aumentar a conscientização sobre sustentabilidade no automobilismo e oferecer uma plataforma de competição global para fabricantes de automóveis e tecnologias relacionadas à eletrificação. Além disso, busca entretenimento para os fãs com corridas emocionantes em locais urbanos icônicos ao redor do mundo.",
    },
  ];

  return (
    <div id="faq-container">
      <section id="faq-content">
        <h1 id="faq-titulo">FAQ</h1>
        <div id="container">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faq;

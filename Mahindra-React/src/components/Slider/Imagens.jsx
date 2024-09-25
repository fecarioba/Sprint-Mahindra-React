import React from "react";
import './slider.css'

const Imagens = ({ src, alt, title }) => {
  return (
    <div className="slide">
      <img src={src} alt={alt} />
      <div className="left-info">
        <div className="content">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export { Imagens };

import { useState } from 'react';
import './slider.css';
import imagemMahindra from '../../assets/img/mahindra.png';
import imagemAndretti from '../../assets/img/andretti.jpg';
import imagemDSPenske from '../../assets/img/ds-penske.jpg';
import imagemEnvision from '../../assets/img/envision.jpg';
import imagemERT from '../../assets/img/ert.jpg';
import imagemJaguar from '../../assets/img/jaguar.jpg';
import imagemCupra from '../../assets/img/cupra.jpg';
import imagemMaserati from '../../assets/img/maserati.png';
import imagemMcLarem from '../../assets/img/mclarem.jpg';
import imagemNissan from '../../assets/img/nissan.jpg';
import imagemPorshe from '../../assets/img/porshe.png';


function Slider() {
  const divFav = document.querySelector('#divFav');
  const [slideNumero, setSlideNumero] = useState(0);

  const imagens = [
    { src: imagemMahindra, title: "Mahindra Racing" },
    { src: imagemAndretti, title: "Andretti" },
    { src: imagemDSPenske, title: "DS Penske" },
    { src: imagemEnvision, title: "Envision" },
    { src: imagemERT, title: "ERT" },
    { src: imagemJaguar, title: "Jaguar TCS" },
    { src: imagemCupra, title: "ABT Cupra" },
    { src: imagemMaserati, title: "Maserati" },
    { src: imagemMcLarem, title: "Neom McLaren" },
    { src: imagemNissan, title: "Nissan" },
    { src: imagemPorshe, title: "Tag Heuer Porsche" },
  ];

  let favoritos = [];

  const nextSlide = () => {
    setSlideNumero((prev) => (prev + 1) % imagens.length);
  };

  const prevSlide = () => {
    setSlideNumero((prev) => (prev - 1 + imagens.length) % imagens.length);
  };



  window.onload = () => {
    carregarLocalStorage();
    mostrarFav();
  };

  const carregarLocalStorage = () => {
    const itemSalvo = localStorage.getItem('imagens');
    if (itemSalvo) {
      imagens - JSON.parse(itemSalvo);
    }

    const favoritoSalvo = localStorage.getItem('favoritos');
    if (favoritoSalvo) {
      favoritos = JSON.parse(favoritoSalvo);
    }
  };

  const salvarFavorito = (objeto) => {
    if (localStorage.getItem('favoritos')) {
      favorito = JSON.parse(localStorage.getItem('favoritos'));
    }
  
    favorito.push(objeto);
    const favoritosJSON = JSON.stringify(favorito);
    localStorage.setItem('favoritos', favoritosJSON);
  }

  const removerFavorito = (id) => {
    if (localStorage.getItem('favoritos')) {
      naoFavorito = JSON.parse(localStorage.getItem('favoritos'));
    }
  
    const procurarFav = naoFavorito.find(fav => fav.id === id);
    const favoritoFiltro = naoFavorito.filter(fav => fav.id != procurarFav.id);
    const favoritoFiltroJSON = JSON.stringify(favoritoFiltro);
    localStorage.setItem('favoritos', favoritoFiltroJSON);
  }

  const mostrarFav = () => {
    divFav.innerHTML = '';
  
    imagens.forEach((imagem) => {
      const coracao = document.createElement('img');
      const favoritoSalvo = favoritos.find(fav => fav.id === imagem.id);
  
      if (favoritoSalvo) {
        coracao.src = '../../assets/img/favoritado.svg';
      } else {
        coracao.src = '../../assets/img/nao-favoritado.svg';
      }
      
      coracao.style.cursor = 'pointer';
      coracao.addEventListener('click', (e) => {
        favoritoClicado(e, imagem);
      });

      botoes.append(coracao);
      divFav.append(botoes);
    });
  }

  const favoritoClicado = (eventoDeClique, objetoFav) => {
    const estadoFavorito = {
      favoritado: '../../assets/img/favoritado.svg',
      naoFavoritado: '../../assets/img/nao-favoritado.svg'
    }
  
    const nomeImagem = eventoDeClique.target.src.split('/').pop();
  
    if (nomeImagem === 'nao-favoritado.svg') {
      eventoDeClique.target.src = estadoFavorito.favoritado;
      salvarFavorito(objetoFav);
    } else {
      eventoDeClique.target.src = estadoFavorito.naoFavoritado;
      removerFavorito(objetoFav.id);
    }
  }

  return (
    <section className="banner" id="comecoConteudo">
      <div className="slider">
        {imagens.map((imagem, index) => (
          <div className={`slide ${index === slideNumero ? 'ativado' : ''}`} key={index}>
            <img src={imagem.src} alt={`Carro equipe ${imagem.title}`} />
            <div className="left-info">
              <div className="content">
                <h1>{imagem.title}</h1>
              </div>
            </div>
          </div>
        ))}
        <div id="divFav"></div>
        <div className="navigation">
          <span className="prev-btn" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </span>
          <span className="next-btn" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Slider;
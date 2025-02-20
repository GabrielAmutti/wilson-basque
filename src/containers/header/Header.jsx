import React, { useState, useEffect } from "react"; 
import Perfil from "../../assets/img/Wilson.png";
import WhatsApp from "../../assets/img/WhatsApp.png";
import Tatoo1 from "../../assets/img/20.png";
import Tatoo2 from "../../assets/img/19.png";
import Tatoo3 from "../../assets/img/18.png";
import Tatoo4 from "../../assets/img/17.png";
import Tatoo5 from "../../assets/img/16.png";
import Tatoo6 from "../../assets/img/15.png";
import Tatoo7 from "../../assets/img/14.png";
import Tatoo8 from "../../assets/img/13.png";
import Tatoo10 from "../../assets/img/11.png";
import Tatoo11 from "../../assets/img/10.png";
import Tatoo12 from "../../assets/img/12.png";
import Tatoo13 from "../../assets/img/8.png";
import Tatoo14 from "../../assets/img/7.png";
import Tatoo15 from "../../assets/img/6.png";
import Tatoo16 from "../../assets/img/5.png";
import Tatoo17 from "../../assets/img/4.png";
import Tatoo18 from "../../assets/img/3.png";
import Tatoo19 from "../../assets/img/2.png";

const imagens = [
  Tatoo1, Tatoo2, Tatoo3, Tatoo4, Tatoo5, Tatoo6, Tatoo7, Tatoo8, 
  Tatoo10, Tatoo11, Tatoo12, Tatoo13, Tatoo14, Tatoo15, Tatoo16, Tatoo17, Tatoo18, Tatoo19
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagemAberta, setImagemAberta] = useState(null);
  const itensPorPagina = 6;
  const totalPaginas = Math.ceil(imagens.length / itensPorPagina);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPaginas - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPaginas - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col md:flex-row-reverse items-center w-full h-auto md:h-[765px] p-6 md:p-0">
      <div className="w-full md:w-7/12 flex justify-center md:justify-end">
        <img className="w-full min-md:w-[765px] min-lg:mt-28" src={Perfil} alt="Wilson Basque" />
      </div>

      <div className="flex flex-col text-center w-full min-md:w-7/12 min-lg:w-4/12 items-center">
        <h1 className="text-yellow-300 font-bold text-2xl md:text-3xl mb-2">Wilson Basque</h1>
        <p className="text-white text-lg md:text-xl font-medium">Especialista em Realismo Preto e Cinza</p>

        <div className="relative w-full md:w-11/12 h-auto flex items-center justify-center mt-4">
          <button onClick={prevSlide} className="absolute -left-4 min-lg:left-2 z-30 flex items-center p-2 focus:outline-none hover:scale-110">
            <svg className="w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 1 1 5l4 4"/>
            </svg>
          </button>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-9/12">
            {imagens.slice(currentIndex * itensPorPagina, (currentIndex + 1) * itensPorPagina).map((img, index) => (
              <img 
                key={index} 
                className="w-full h-auto rounded-2xl border-2 border-yellow-300 transition-all duration-500 hover:scale-110 cursor-pointer"
                src={img} 
                alt={`Tattoo ${index + 1}`}
                onClick={() => setImagemAberta(img)}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="absolute -right-4 min-lg:right-2 z-30 flex items-center p-2 focus:outline-none hover:scale-110">
            <svg className="w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 9 4-4-4-4"/>
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPaginas }).map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-yellow-400" : "bg-gray-400"}`}></button>
          ))}
        </div>

        <div className="w-full md:w-8/12 text-white font-light mt-6">
          <h3 className="mb-2">Desperte emoções e transforme sua pele em uma obra de arte!</h3>
          <h3>Tatuagens realistas que contam cada detalhe da sua história.</h3>
        </div>

        <div className="text-white font-bold w-full md:w-8/12 mt-4">
          <h3>Clique no botão abaixo e faça seu orçamento agora mesmo!</h3>
        </div>

        <div className="flex items-center bg-gradient-to-r from-yellow-400 to-stone-500 px-5 py-3 rounded-3xl mt-5 hover:scale-110 transition-all duration-400 mb-8">
          <a className="flex items-center" href="https://wa.me/5511999527783" target="_blank" rel="noopener noreferrer">
            <span className="font-medium mr-2 text-white cursor-pointer">Faça seu orçamento agora!</span>
            <img className="w-6 h-6" src={WhatsApp} alt="WhatsApp" />
          </a>
        </div>
      </div>

      {/* MODAL DE IMAGEM */}
      {imagemAberta && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4">
          <div className="relative border-2 border-yellow-400 rounded-4xl max-w-xl w-full">
            <button className="absolute top-4 right-4 cursor-pointer text-yellow-400 text-3xl hover:text-yellow-300 transition-all" onClick={() => setImagemAberta(null)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg></button>
            <img src={imagemAberta} alt="Tattoo Grande" className="w-full h-auto rounded-4xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

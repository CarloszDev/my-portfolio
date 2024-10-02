import React, { useState } from 'react';
import { FaHandPointUp } from 'react-icons/fa'; // Ícone do dedo apontando
import Img1 from '../../assets/sp.png';
import Img3 from '../../assets/apps3.png';
import Img4 from '../../assets/apps2.png';
import './projects.css';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index); // Alterna entre abrir e fechar
  };

  return (
    <section id='projects' className='font-Poppins'>
      <h5>Trabalhos & Participações</h5>
      <h2 className='text-2xl'>Portfolio</h2>

      <div className="container portfolio_container font-Poppins">
        <article 
          className={`portifolio_item ${activeCard === 1 ? 'active' : ''}`} 
          onClick={() => handleCardClick(1)}
        >
          <div className="portfolio_item-image">
            <img src={Img1} alt="SP T Leva" />
          </div>
          <h3>SP T LEVA</h3>
          <div className="portfolio_description">
            <p>O SPTleva é um aplicativo que gerencia estoques e distribuição de combustíveis, automatizando processos e gerando relatórios para otimizar operações e garantir segurança. Desenvolvido com React Native, tive participação na criação de diversas telas e funcionalidades.</p>
          </div>
          <div className="portfolio_item-links">
            <a 
                href="https://play.google.com/store/apps/details?id=br.com.deway.spteleva&pcampaignid=web_share" 
                className='btn' 
                target='_blank'
                onClick={(e) => e.stopPropagation()}
              >
                Ver
            </a>
          </div>
        </article>

        <article 
          className={`portifolio_item ${activeCard === 2 ? 'active' : ''}`} 
          onClick={() => handleCardClick(2)}
        >
          <div className="portfolio_item-image">
            <img src={Img4} alt="CYP" />
          </div>
          <h3>CYP</h3>
          <div className="portfolio_description">
            <p>Desenvolvi e gerenciei um aplicativo voltado para gamers, que possibilita encontrar parceiros para formar squads, trios ou duos conforme preferirem. Gerenciei o projeto desde o zero, liderando uma equipe, criando funcionalidades cruciais, e oferecendo suporte no back-end.</p>
          </div>
          <div className="portfolio_item-links">
            <a 
                href="https://play.google.com/store/apps/details?id=br.com.deway.cyapp&pcampaignid=web_share" 
                className='btn' 
                target='_blank'
                onClick={(e) => e.stopPropagation()}
              >
                Ver
            </a>
          </div>
        </article>

        <article 
          className={`portifolio_item ${activeCard === 3 ? 'active' : ''}`} 
          onClick={() => handleCardClick(3)}
        >
          <div className="portfolio_item-image">
            <img src={Img3} alt="Transportadora Economica" />
          </div>
          <h3>TRANSPORTADORA ECONOMICA</h3>
          <div className="portfolio_description">
            <p>Projeto web, oferece uma plataforma onde os usuários podem fazer login e rastrear suas cargas em tempo real. A interface é intuitiva e permite consultar o status e os detalhes das entregas de forma simples e eficiente.</p>
          </div>
          <div className="portfolio_item-links">
            <a 
                href="http://www.transeconomica.com.br" 
                className='btn active' 
                target='_blank'
                onClick={(e) => e.stopPropagation()}
              >
                Ver
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;

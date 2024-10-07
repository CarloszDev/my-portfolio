import React, { useState } from 'react';
import { FaHandPointUp } from 'react-icons/fa'; // Ícone do dedo apontando
import Img1 from '../../assets/sp.png';
import Img3 from '../../assets/apps3.png';
import Img4 from '../../assets/apps2.png';
import './projects.css';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const projectsData = [
    {
      id: 1,
      img: Img1,
      title: 'SP T LEVA',
      description: 'O SPTleva é um aplicativo que gerencia estoques e distribuição de combustíveis, automatizando processos e gerando relatórios para otimizar operações e garantir segurança. Desenvolvido com React Native, tive participação na criação de diversas telas e funcionalidades.',
      link: 'https://play.google.com/store/apps/details?id=br.com.deway.spteleva&pcampaignid=web_share'
    },
    {
      id: 2,
      img: Img4,
      title: 'CYP',
      description: 'Desenvolvi e gerenciei um aplicativo voltado para gamers, que possibilita encontrar parceiros para formar squads, trios ou duos conforme preferirem. Gerenciei o projeto desde o zero, liderando uma equipe, criando funcionalidades cruciais, e oferecendo suporte no back-end.',
      link: 'https://play.google.com/store/apps/details?id=br.com.deway.cyapp&pcampaignid=web_share'
    },
    {
      id: 3,
      img: Img3,
      title: 'TRANSPORTADORA ECONOMICA',
      description: 'Projeto web, oferece uma plataforma onde os usuários podem fazer login e rastrear suas cargas em tempo real. A interface é intuitiva e permite consultar o status e os detalhes das entregas de forma simples e eficiente.',
      link: 'http://www.transeconomica.com.br'
    }
  ];

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index); // Alterna entre abrir e fechar
  };

  return (
    <section id='projects' className='font-Poppins'>
      <h5>Trabalhos & Participações</h5>
      <h2 className='text-2xl'>Portfolio</h2>

      <div className="container portfolio_container tablet:col-1[1] font-Poppins">
        {projectsData.map((project) => (
          <article 
            key={project.id}
            className={`portifolio_item ${activeCard === project.id ? 'active' : ''}`} 
            onClick={() => handleCardClick(project.id)}
          >
            <div className="portfolio_item-image">
              <img src={project.img} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio_description">
              <p>{project.description}</p>
            </div>
            <div className="portfolio_item-links">
              <a 
                href={project.link} 
                className='btn' 
                target='_blank'
                onClick={(e) => e.stopPropagation()}
              >
                Ver
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

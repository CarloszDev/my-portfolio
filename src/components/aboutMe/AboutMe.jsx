import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiSass, SiNextdotjs, SiJavascript, SiTypescript, SiAngular, SiJsonwebtokens } from "react-icons/si";
import { FaAward, FaDesktop } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MeText from '../../../utils/meText.js';
import './aboutMe.css';

// Lista de tecnologias e suas descrições
const technologies = [
  { icon: <FaReact />, name: "React", description: "Biblioteca JavaScript para construir interfaces de usuário." },
  { icon: <FaReact />, name: "React-Native", description: "Biblioteca para construir Apps." },
  { icon: <FaNodeJs />, name: "Node.js", description: "Ambiente de execução JavaScript no servidor." },
  { icon: <SiAngular />, name: "Angular", description: "Framework para construir aplicações web." },
  { icon: <SiNextdotjs />, name: "Next.js", description: "Framework React para produção e renderização no servidor." },
  { icon: <SiJavascript />, name: "JavaScript", description: "Linguagem de programação para a web." },
  { icon: <SiTypescript />, name: "TypeScript", description: "JavaScript com tipagem estática." },
  { icon: <FaBootstrap />, name: "Bootstrap", description: "Framework CSS para criar sites responsivos." },
  { icon: <SiSass />, name: "Sass", description: "Pré-processador CSS para estilos mais organizados." },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", description: "Framework CSS utilitário para estilização rápida." },
  { icon: <FaHtml5 />, name: "HTML5", description: "Linguagem de marcação para construir sites." },
  { icon: <FaCss3Alt />, name: "CSS3", description: "Linguagem de estilos para a web." },
  { icon: <FaGitAlt />, name: "Git", description: "Sistema de controle de versão distribuído." },
  { icon: <SiJsonwebtokens />, name: "API", description: "Autenticação baseada em tokens JSON." }
];

const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <h2 className='text-4xl'>Sobre Mim</h2>
      <div className="container items-center about_container font-Poppins">
        <div className="about_me">
          <div className="aboutMe-icons">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              grabCursor={true}
              autoplay={true}
              loop={true}
              slideToClickedSlide={true}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
                601: {
                  slidesPerView: 3,
                },
              }}
            >
              {technologies.map((tech, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="icon-container">
                    <div className="icon text-6xl mt-20 tablet:text-5xl">{tech.icon}</div>
                    <h4 className="text-lg font-semibold font-Poppins tablet:text-5xl">{tech.name}</h4>
                    <p className="text-sm text-gray-500 font-Poppins">{tech.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="about_content">
          <div className="cards">
            <article className='card'>
                <FaAward className='about_icon' />
                <h5>Experiência</h5>
                <small>3 anos de experiência</small>
            </article>

            <article className='card'>
                <FaDesktop className='about_icon' />
                <h5>Frameworks</h5>
                <small>Conhecimento em linguagens Front e Back</small>
            </article>

            <article className='card'>
                <VscFolderLibrary className='about_icon' />
                <h5>Projetos</h5>
                <small>Atuação em diversos projetos</small>
            </article>
          </div>

          <p className='font-Poppins text-left'>{MeText}</p>

          <a href="#contactUs" className='btn btn-primary font-Poppins'>Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;

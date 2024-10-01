import React from 'react';
import './experience.css';
import { RiShieldCheckFill } from "react-icons/ri";

const Experience = () => {
  return (
    <section id="experience" className="font-Poppins section_experience">
      <h2 className="text-2xl">Experiência</h2>
      
      <div className="container experience_container">
        
        {/* Deway Experience */}
        <div className="experience_work">
          <h3>Deway</h3>
          <h4 className="text-center my-2">Desenvolvedor Full-Stack</h4>
          
          <div className="experience_content">
            <ExperienceDetails
              title="Desenvolvimentos de Apps e Sites"
              description="Desenvolvimento de aplicativos e sites seguindo boas práticas e metodologia ágil, utilizando React, React Native, Angular, JavaScript, TypeScript, HTML, CSS e diversas bibliotecas."
            />
            <ExperienceDetails
              title="Gerenciamento De Projetos"
              description="Resolução de problemas e depuração de código para otimizar o desempenho e a usabilidade dos aplicativos e sites. Participação ativa em reuniões de equipe para discussão de requisitos e elaboração de estratégias de desenvolvimento."
            />
            <ExperienceDetails
              title="Google Play e App Store"
              description="Aplicativos nas principais lojas: App Store e Play Store."
            />
             <ExperienceDetails
              title="Colaboração com a equipe"
              description="Participação ativa em dailys e reuniões para definir requisitos, discutir estratégias de desenvolvimento e atualizações sobre projetos."
            />
          </div>
        </div>

        {/* Freelancer Experience */}
        <div className="experience_freelancer">
          <h3>Freelancer</h3>
          <h4 className="text-center my-2">Desenvolvedor Full-Stack</h4>
          
          <div className="experience_content">
            <ExperienceDetails
            title="Desenvolvimento de Sites"
            description="Desenvolvimento de sites seguindo boas práticas e metodologia ágil, utilizando React, React Native, Angular, JavaScript, TypeScript, HTML, CSS e diversas bibliotecas."
            />
            <ExperienceDetails
              title="Back-end"
              description="Desenvolvimento de APIs e serviços backend com Node.js e Express, garantindo eficiência e escalabilidade."
            />
            <ExperienceDetails
              title="Design"
              description="Criação de interfaces intuitivas e responsivas, utilizando ferramentas modernas de design focadas em usabilidade e experiência do usuário."
            />
            <ExperienceDetails
              title="Gerenciamento de Projetos"
              description="Liderança em projetos utilizando metodologias ágeis, garantindo entregas eficientes e dentro do prazo."
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const ExperienceDetails = ({ title, description }) => {
  return (
    <article className="experience_details">
      <div className="flex items-center my-2">
      <RiShieldCheckFill className='mr-2 text-indigo-600' />
      <h4>{title}</h4>
      </div>
      <small className="text-light">{description}</small>
    </article>
  );
}; 

export default Experience;



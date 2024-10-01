import React from 'react';
import Img1 from '../../assets/sp.png'
import Img2 from '../../assets/salutis.png'
import Img3 from '../../assets/usibras.png'
import Img4 from '../../assets/Cyp.png'
import './projects.css'


const Projects = () => {
  return (
    <section id='projects' className='font-Poppins'>
      <h5>Trabalhos/Participações</h5>
      <h2 className='text-2xl'>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portifolio_item">
          <div className="portfolio_item-image">
            <img src={Img1} alt="" />
          </div>
          <h3>SP T LEVA</h3>
            <div className="portfolio_description">
              <p className='text-sm text-gray-400'>O App TLEVA, tem como objetivo levar a um novo nível de relacionamento com os Postos SP.</p>
            </div>
            <div className="portfolio_item-links">
              <a href="https://play.google.com/store/apps/details?id=br.com.deway.spteleva&pcampaignid=web_share" className='btn btn-primary' target='_blank'>Ver</a>
            </div>
        </article>
        <article className="portifolio_item">
          <div className="portfolio_item-image">
            <img src={Img4} alt="" />
          </div>
          <h3>CYP</h3>
            <div className="portfolio_description">
              <p className='text-sm text-gray-400'>O aplicativo para gamer, encontrar os seus players para montar o seu próprio squad, trio, duo, da forma que quiser, com quem quiser.</p>
            </div>
            <div className="portfolio_item-links">
              {/* <a href="https://github.com/CarloszDev" className="btn" target='_blank'>Github</a> */}
              <a href="https://play.google.com/store/apps/details?id=br.com.deway.cyapp&pcampaignid=web_share" className='btn btn-primary' target='_blank'>Ver</a>
            </div>
        </article>
        <article className="portifolio_item">
          <div className="portfolio_item-image">
            <img src={Img3} alt="" />
          </div>
          <h3>USIBRAS</h3>
            <div className="portfolio_description">
              <p className='text-sm text-gray-400'>O aplicativo para gamer, encontrar os seus players para montar o seu próprio squad, trio, duo, da forma que quiser, com quem quiser.</p>
            </div>
            <div className="portfolio_item-links">
              {/* <a href="https://github.com/CarloszDev" className="btn" target='_blank'>Github</a> */}
              <a href="" className='btn btn-primary' target='_blank'>Ver</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Projects;
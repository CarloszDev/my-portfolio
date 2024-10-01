import React, { useState } from 'react';
import CV from './Cta';
import MyPhoto from '../../assets/eu2.png';
import Socials from './Socials';
import { MdLightMode } from "react-icons/md";;
import { PiArrowFatLinesRightFill } from "react-icons/pi";

const Header = () => {

  const [bounce, setBounce] = useState(false);

  return (
    <header className="h-screen pt-28 overflow-hidden tablet:h-screen">
      <div className="container text-center h-full relative font-Poppins">
        <h5>Olá Eu sou</h5>
        <h1 className="text-5xl">Carlos Cauan</h1>
        <h5 className="text-light">Desenvolvedor FullStack</h5>
        <CV />
        <Socials />
        <div className="bg-gradient w-96 h-96 absolute left-1/2 -ml-48 m-12 rounded-full overflow-hidden">
          <img src={MyPhoto} alt="Carlos Cauan"/>
        </div>
        {bounce ? 
        <a href="#contactUs" onMouseLeave={() =>setBounce(false)} className='absolute -right-9 bottom-20 rotate-90 text-4xl font-extralight tablet:hidden animate-bounce'>< MdLightMode /></a>
          :
          <a href="#contactUs" onMouseEnter={() => setBounce(true)} className='absolute -right-9 bottom-20 rotate-90 text-4xl font-extralight tablet:hidden'>< MdLightMode /></a>
        }
      </div>
    </header>
  )
}

export default Header;

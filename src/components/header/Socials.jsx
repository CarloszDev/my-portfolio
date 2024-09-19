import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";


const Socials = () => {
  return (
    <div class="flex flex-col items-center gap-3.5 absolute left-0 bottom-12 tablet:hidden">
        <a href="https://www.linkedin.com/in/carlos-cauan-552755235/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/CarloszDev" target='_blank'><FaGithub /></a>
        <a href="https://www.instagram.com/carlos_s2z/" target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default Socials;
import React from 'react';
import CV from '../../assets/curriculo.pdf';

const CTA = () => {
  return (
    <div class="mt-10 flex gap-5 justify-center">
        <a href={CV} download className='btn hover:animate-pulse'>Download CV</a>
        <a href="#contactUS" className='btn btn-primary hover:animate-pulse'>Entre em contato</a>
    </div>
  )
}

export default CTA;
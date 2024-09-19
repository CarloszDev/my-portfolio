import React, { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import ParticlesBackground from '../../components/ParticuleBackground/particlessBackground';
import './Introduction.css';

export default function Introduction() {

  const comp = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          navigate('/home');
        }
      });
      t1.from("#welcome", {
        opacity: 0,
        duration: 0.5,
      }).to("#welcome", {
        opacity: 0,
        duration: 0.5,
        delay: 1,
      }).from("#intro-slider", {
        xPercent: "-110",
        duration: 1.3,
        delay: 0.3,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,  
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <ParticlesBackground />
      <div className='relative' ref={comp}>
        <div id='intro-slider' className="h-screen p-10 bg-transparent absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight">
          <h1 className='text-9xl' id='title-1'>Desenvolvedor</h1>
          <h1 className='text-9xl' id='title-2'>Freelancer</h1>
          <h1 className='text-9xl' id='title-3'>Design</h1>
        </div>
        <div className='h-screen flex w-screen bg-transparent justify-center items-center flex-col font-spaceGrotesk '>
          <h1 id='welcome' className='text-gray-50 text-8xl'>Bem Vindo!</h1>
        </div>
      </div>
    </>
  ); 
}
 
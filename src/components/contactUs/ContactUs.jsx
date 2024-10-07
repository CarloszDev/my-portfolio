import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import './contactUs.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Ícone de confirmação
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Por favor, insira um email válido.');
      return;
    }

    setEmailError('');

    emailjs.sendForm('service_py4i1sw', 'template_htaf2li', form.current, 'tHikSH6yhFkQfBbBR')
      .then(() => {
        setIsPopupVisible(true);
        setTimeout(() => setIsPopupVisible(false), 3000);
        e.target.reset();
      }, (error) => {
        console.error('Erro no envio do e-mail:', error);
      });
  };

  return (
    <section id='contactUs' className='font-Poppins'>
      <h5 className='text-1xl'>Vamos Conversar</h5>
      <h2 className='text-2xl'>Contato</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>carloscauantecnico@gmail.com</h5>
            <a href="mailto:carloscauantecnico@gmail.com">Enviar mensagem</a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <a href="https://wa.me/558596314236">Enviar mensagem</a>
          </article>
          <article className="contact_option">
            <FaLinkedin className='contact_option-icon' />
            <h4>Linkedin</h4>
            <h5>Carlos Cauan</h5>
            <a href="https://www.linkedin.com/in/carlos-cauan-552755235/">Enviar mensagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu Nome' className='p-5' required />
          <input type="text" name='email' placeholder='Seu Email' className='p-5' required />
          {emailError && <p className='error-message'>{emailError}</p>}
          <textarea name="message" rows={7} placeholder='Mensagem' className='p-5' required></textarea>
          <button type='submit' className='btn btn-primary p-6'>Enviar</button>
        </form>
      </div>

      {isPopupVisible && (
        <div className="flash-message">
          <AiOutlineCheckCircle className="icon" />
          <p>Mensagem enviada com sucesso!</p>
        </div>
      )}
    </section>
  );
}

export default ContactUs;

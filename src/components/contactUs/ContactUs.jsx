import React, {useRef} from 'react';
import { MdOutlineEmail } from "react-icons/md";
import './contactUs.css'
import { FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_py4i1sw', 'template_htaf2li', form.current, 'tHikSH6yhFkQfBbBR')
  }
  return (
    <section id='contactUs' className='font-Poppins'>
      <h5>Vamos Conversar</h5>
      <h2>Contato</h2>
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
          <textarea name="message" rows={7} placeholder='Mensagem' className='p-5' required></textarea>
          <button type='submit' className='btn btn-primary p-6'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
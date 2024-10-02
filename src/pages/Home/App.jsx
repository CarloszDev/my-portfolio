import { useState } from 'react';
import Header from '../../components/header/Header.jsx';
import NavBar from '../../components/navBar/navBar.jsx';
import AboutMe from '../../components/AboutMe/AboutMe.jsx';
import Experience from '../../components/Experiences/Experience.jsx';
import Projects from '../../components/projects/Projects.jsx';
import ContactUs from '../../components/contactUs/ContactUs.jsx';
import Footer from '../../components/footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;

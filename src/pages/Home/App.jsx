import { useState } from 'react';
import  styles from './App.module.css';
import NavBar from '../../components/NavBar/navBar';
import secondBack from '../../assets/foreground.png';
import jsIcon from '../../assets/jsIcon.png';
import reactIcon from '../../assets/reactIcon.png';
import typescriptIcon from '../../assets/typescriptIcon.png';
import htmlIcon from '../../assets/htmlIcon.png';
import cssIcon from '../../assets/cssIcon.png';


function App() {

  return (
    <div className={styles.container}>
    <NavBar />
      <div>
        <main className={styles.midContent}>
          <div className={styles.textContainer}>
            <h1>Bem vindo!</h1>
            <h2>Me chamo Carlos Cauan</h2>
            <code>Front-end Developer</code>
          </div>
          <picture className={styles.foreground}>
            <img src={secondBack} />
          </picture>
          <div className={styles.iconsContainer}>
            <img className={styles.codeIcon} src={jsIcon} />
            <img className={styles.codeIcon} src={typescriptIcon} />
            <img className={styles.codeIcon} src={reactIcon} />
            <img className={styles.codeIcon} src={htmlIcon} />
            <img className={styles.codeIcon} src={cssIcon} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

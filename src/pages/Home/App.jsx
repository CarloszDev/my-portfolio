import { useState } from 'react'
import  styles from './App.module.css'
import NavBar from '../../components/NavBar/navBar'
import secondBack from '../../assets/foreground.png';

function App() {

  return (
    <div className={styles.container}>
    <NavBar />
      <div>
        <main className={styles.midContent}>
          <div className={styles.textContainer}>
            <h1>Bem vindo!!,</h1>
            <h2>Me chamo Carlos Cauan</h2>
            <h2>sou um Desenvolvedor Web/Mobile</h2>
          </div>
          <picture className={styles.foreground}>
            <img src={secondBack} />
          </picture>
        </main>
      </div>
    </div>
  )
}

export default App

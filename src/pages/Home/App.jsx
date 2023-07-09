import { useState } from 'react'
import  styles from './App.module.css'
import NavBar from '../../components/NavBar/navBar'

function App() {

  return (
    <div className={styles.container}>
    <NavBar />
      <div>
        <a>aaaa</a>
      </div>
    </div>
  )
}

export default App

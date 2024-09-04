import { useState } from 'react';
import NavBar from '../../components/NavBar/navBar';
import secondBack from '../../assets/foreground.png';
import jsIcon from '../../assets/jsIcon.png';
import reactIcon from '../../assets/reactIcon.png';
import typescriptIcon from '../../assets/typescriptIcon.png';
import htmlIcon from '../../assets/htmlIcon.png';
import cssIcon from '../../assets/cssIcon.png';
import ParticlesBackground from '../../components/ParticuleBackground/particlessBackground.jsx';

function App() {
  return (
    <>
      {/* <ParticlesBackground /> */}
      <div className='bg-black'>
        <header>
          {/* <NavBar /> */}
        </header>
        <section>
          <main>
            <div>
              <p className='text-black'>aaaa</p>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default App;

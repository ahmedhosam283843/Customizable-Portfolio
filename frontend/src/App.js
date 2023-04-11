import React from 'react';

import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import NavBar from './components/NavBar/NavBar';
import Home from './sections/Home/Home';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      
      <NavBar/>
      <Home/>
      <Projects/>
      <Experience/>
      
    </div>
  )
}

export default App

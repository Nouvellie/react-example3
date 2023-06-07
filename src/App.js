import './App.css';
import logo from './imgs/logo.png';
import { useState } from 'react';

function App() {

  return (
    <div className='App'>
      <div className='react-logo-container'>
        <img
          className='react-logo'
          src={logo}
          alt='CALCULATOR' 
        />
      </div>
      <div className='main-container'>
      
      </div>
    </div>
  );
}

export default App;

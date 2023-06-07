import './App.css';
import logo from './imgs/logo.png';
import { useState } from 'react';
import ReactButton from './components/button';
import Display from './components/display';
import Clear from './components/clear';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const result = val => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Please enter values to calculate.');
    }
  };

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
        <Display input={input} />
        <div className='row'>
          <ReactButton handleClick={addInput}>1</ReactButton>
          <ReactButton handleClick={addInput}>2</ReactButton>
          <ReactButton handleClick={addInput}>3</ReactButton>
          <ReactButton handleClick={addInput}>+</ReactButton>
        </div>
        <div className='row'>
          <ReactButton handleClick={addInput}>4</ReactButton>
          <ReactButton handleClick={addInput}>5</ReactButton>
          <ReactButton handleClick={addInput}>6</ReactButton>
          <ReactButton handleClick={addInput}>-</ReactButton>
        </div>
        <div className='row'>
          <ReactButton handleClick={addInput}>7</ReactButton>
          <ReactButton handleClick={addInput}>8</ReactButton>
          <ReactButton handleClick={addInput}>9</ReactButton>
          <ReactButton handleClick={addInput}>*</ReactButton>
        </div>
        <div className='row'>
          <ReactButton handleClick={result}>=</ReactButton>
          <ReactButton handleClick={addInput}>0</ReactButton>
          <ReactButton handleClick={addInput}>.</ReactButton>
          <ReactButton handleClick={addInput}>/</ReactButton>
        </div>
        <div className='row'>
          <Clear handleClick={() => setInput('')}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;

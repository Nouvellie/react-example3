import React from 'react';
import '../static/button.css'

function ReactButton(props) {

  const isOperator = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '='); 
  };

  return (
    <button 
      className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  );
}

export default ReactButton;
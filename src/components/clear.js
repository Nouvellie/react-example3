import React from 'react';
import '../static/clear.css'

const Clear = (props) => (
  <div 
    className='clear'
    onClick={() => props.handleClick(props.handleClick)}
  >
    {props.children}
  </div>
);

export default Clear;
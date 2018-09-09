import React from 'react';
import './Button.css';

const Button = props => (
  <span onClick={props.onButtonClick} className={`button ${props.type}`}>
    {props.children}
  </span>
);

export default Button;

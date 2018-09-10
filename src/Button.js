import React from 'react';
import './Button.css';

const Button = props => (
  <span
    onClick={props.onButtonClick}
    className={`button ${props.type} ${props.size}`}
  >
    {props.children}
  </span>
);

export default Button;

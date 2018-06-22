import React from 'react';

const Button = (props) => {
  return (
    <button className={props.className}>{props.display}</button>
  )
}

export default Button;
import React from 'react';

import Button from './Button';

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const OPERATORS = ['+', '-', 'X', '/', '='];

const Buttons = () => {
  return (
    <div id="buttons">
      <div id="operators">
        {
          OPERATORS.map((op, index) => {
            return <Button key={index} display={op} />
          })
        }
      </div>
      <div id="numbers">
        {
          NUMBERS.map((num) => {
            return <Button key={num} display={num} />
          })
        }
      </div>
    </div>
  )
}

export default Buttons;